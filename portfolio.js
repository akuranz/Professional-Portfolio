$("#fullStackFilter").on("click", function() {
  let state = $(this).data("data-state");
  if (state === "disabled") {
    $(".fullStackFilter").attr("data-state", "enabled");
    $(".fullStackFilter").attr("style", "display: block");
  } else if (state === "enabled") {
    $(".fullStackFilter").attr("data-state", "disabled");
    $(".fullStackFilter").attr("style", "display: none");
  }
});
