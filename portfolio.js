$("#fullStackFilter").on("click", function () {
  console.log("you are clicking Full Stack");
  let state = $(this).attr("data-state");
  console.log(state);
  if (state === "disabled") {
    $("#fullStackFilter").attr("data-state", "enabled");
    $(".fullStackProject").attr("style", "display: block");
    $("#fullStackFilter").attr("class", "fas fa-circle");
  } else if (state === "enabled") {
    $("#fullStackFilter").attr("data-state", "disabled");
    $(".fullStackProject").attr("style", "display: none");
    $("#fullStackFilter").attr("class", "far fa-circle");
  }
});
