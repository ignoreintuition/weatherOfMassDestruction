/*jshint esversion: 6 */

import { updateForecast, updateUV, update5Day } from './update';

const apiKey = "6c3aa5baff4bd11c842f5cbec5bd8b3f";
const weatherURI = "https://api.openweathermap.org/data/2.5/weather";
const uvURI = "http://api.openweathermap.org/data/2.5/uvi";
const forecastURI = "http://api.openweathermap.org/data/2.5/forecast";

export function fetch(cityNm) {
    $.when(
        $.ajax({
            url: weatherURI + "?q=" + cityNm + "&appid=" + apiKey,
            crossDomain: true
        }).done(updateForecast),
        $.ajax({
            url: forecastURI + "?q=" + cityNm + "&appid=" + apiKey,
            crossDomain: true
        }).done(update5Day))
        .then( function (weatherData, forecastData) {
            $.ajax({
                url: uvURI + "?lat=" + weatherData[0].coord.lat + "&lon=" + weatherData[0].coord.lon + "&appid=" + apiKey,
                crossDomain: true
            }).done(updateUV);
        });
}
