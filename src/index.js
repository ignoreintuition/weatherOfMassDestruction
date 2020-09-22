/*jshint esversion: 6 */
import { addToHistory, initFromLocalStorage } from './history';
import { fetch } from './fetch';

(function (){
    let defaultCity = 'Charlotte';
    let history = JSON.parse(localStorage.getItem('weatherDashboard.history')) || [];
    fetch(defaultCity);
    initFromLocalStorage();

    $('#submit').on('click', function(e) {
        e.preventDefault();
        let cityNm = $('#city').val();
        addToHistory(cityNm);
        fetch(cityNm);
    });
})();

