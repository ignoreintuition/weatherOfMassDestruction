/*jshint esversion: 6 */

import moment from "moment";

export function updateForecast( data ) {
    let forecastDt = moment(data.dt * 1000).format('MM/DD/YYYY');
    let temp = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(2);
    let icon = 'http://openweathermap.org/img/wn/'+ data.weather[0].icon + '@2x.png';
    let humidity = data.main.humidity;
    let wind = data.wind.speed;

    $("#cityNm").text(data.name);
    $("#date").text(forecastDt);
    $("#temp").text(temp + ' ºF');
    $("#icon").attr('src', icon);
    $("#humidity").text(humidity + ' %');
    $("#wind").text(wind + ' mph');
}

export function updateUV( data ) {
    let uv = data.value;
    $("#uv").text(uv);
    if (Math.floor(uv) <= 2)
        $("#uv").removeClass('moderate high v-high extreme').addClass('low');
    else if (Math.floor(uv) <= 5)
        $("#uv").removeClass('low high v-high extreme').addClass('moderate');
    else if (Math.floor(uv) <= 7)
        $("#uv").removeClass('low moderate v-high extreme').addClass('high');
    else if (Math.floor(uv) <= 10)
        $("#uv").removeClass('low moderate high extreme').addClass('v-high');
    else
        $("#uv").removeClass('low moderate high v-high').addClass('extreme');
}

export function update5Day( data ) {
    let d = data.list.filter( (a, i) => {
        return (i % 8) === 0;
    });

    d.forEach( ( a, i ) => {
        let forecastDt = moment(a.dt * 1000).format('dddd');
        let temp = ((a.main.temp - 273.15) * 9 / 5 + 32).toFixed(2);
        let icon = 'http://openweathermap.org/img/wn/'+ a.weather[0].icon + '@2x.png';
        let humidity = a.main.humidity;

        $("#date-" + i).text(forecastDt);
        $("#temp-" + i).text(temp + 'ºF');
        $("#icon-" + i).attr('src', icon);
        $("#humidity-" + i).text(humidity + '%');
    });
};
