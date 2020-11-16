$(document).ready(function(){

    var displayCurrentDateAndTime = document.getElementById("currentDateAndTime");
    var now = moment();
    var presentHour = moment().hours();
    displayCurrentDateAndTime.textContent = now; 
})