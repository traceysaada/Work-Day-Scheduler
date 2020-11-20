$(document).ready(function () {
  var displayCurrentDateAndTime = document.getElementById("currentDateAndTime");
  var now = moment();
  displayCurrentDateAndTime.textContent = now;
  var presentHour = moment().hours();

  function timeCheckPastPresentFuture() {
    $(".time-block").each(function () {
      var timeOfCurrentBlock = parseInt($(this).attr("id"));

      if (timeOfCurrentBlock > presentHour) {
        $(this).addClass("future");
      } else if (timeOfCurrentBlock === presentHour) {
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    });
  }
  timeCheckPastPresentFuture();

  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(time, userInput);
  });

 var eightTask = localStorage.getItem("8");
 $("#eightTask").val(eightTask)


});
