$(document).ready(function () {
  var displayCurrentDateAndTime = document.getElementById("currentDateAndTime");
  var now = moment();
  displayCurrentDateAndTime.textContent = now;
  var presentHour = moment().hours();
//check if time colour changes for present & future time
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
//add rest of var task for all time elements
 var eightTask = localStorage.getItem("8");
 $("#eightTask").val(eightTask)
 var nineTask = localStorage.getItem("9");
 $("#nineTask").val(nineTask)
 var tenTask = localStorage.getItem("10");
 $("#tenTask").val(tenTask)
 var elevenTask = localStorage.getItem("11");
 $("#elevenTask").val(elevenTask)
 var twelveTask = localStorage.getItem("12");
 $("#twelveTask").val(twelveTask)
 var oneTask = localStorage.getItem("13");
 $("#oneTask").val(oneTask)
 var twoTask = localStorage.getItem("14");
 $("#twoTask").val(twoTask)
 var threeTask = localStorage.getItem("15");
 $("#threeTask").val(threeTask)
 var fourTask = localStorage.getItem("16");
 $("#fourTask").val(fourTask)


});
