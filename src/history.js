/*jshint esversion: 6 */

import { fetch } from './fetch';

let history = JSON.parse(localStorage.getItem('weatherDashboard.history')) || [];

export function diplayWithinHistory(cityNm){
    console.log(cityNm)
    $("#history").append("<button type='button' id='" + cityNm.replace(/\s+/g, '') + "' class='btn btn-light'>" + cityNm + "</button>");
    $("#" + cityNm.replace(/\s+/g, '')).on('click', function(c) {
        c.preventDefault();
        fetch(cityNm);
    });
}

export function addToHistory(cityNm){
    history.push(cityNm);
    localStorage.setItem('weatherDashboard.history',JSON.stringify(history));
    diplayWithinHistory(cityNm);
}

export function initFromLocalStorage() {
    history.forEach( a => {
        diplayWithinHistory(a);
    });
}
