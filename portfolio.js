$(".dropdown-toggle").dropdown();

$("#fullStackFilter").on("click", function () {
  console.log("you are clicking Full Stack");
  let state = $(this).attr("data-state");
  console.log(state);
  if (state === "disabled") {
    $("#fullStackFilter").attr("data-state", "enabled");
    $(".fullStackProject").attr("style", "display: block");
    $("#fullStackFilterIcon").attr("class", "fas fa-circle");
  } else if (state === "enabled") {
    $("#fullStackFilter").attr("data-state", "disabled");
    $(".fullStackProject").attr("style", "display: none");
    $("#fullStackFilterIcon").attr("class", "far fa-circle");
  }
});

$("#digitalMarketingFilter").on("click", function () {
  console.log("you are clicking DigitalMarketing");
  let state = $(this).attr("data-state");
  console.log(state);
  if (state === "disabled") {
    $("#digitalMarketingFilter").attr("data-state", "enabled");
    $(".digitalMarketingProject").attr("style", "display: block");
    $("#digitalMarketingFilterIcon").attr("class", "fas fa-circle");
  } else if (state === "enabled") {
    $("#digitalMarketingFilter").attr("data-state", "disabled");
    $(".digitalMarketingProject").attr("style", "display: none");
    $("#digitalMarketingFilterIcon").attr("class", "far fa-circle");
  }
});

$("#dataVisualizationFilter").on("click", function () {
  console.log("you are clicking DataVisualization");
  let state = $(this).attr("data-state");
  console.log(state);
  if (state === "disabled") {
    $("#dataVisualizationFilter").attr("data-state", "enabled");
    $(".dataVisualizationProject").attr("style", "display: block");
    $("#dataVisualizationFilterIcon").attr("class", "fas fa-circle");
  } else if (state === "enabled") {
    $("#dataVisualizationFilter").attr("data-state", "disabled");
    $(".dataVisualizationProject").attr("style", "display: none");
    $("#dataVisualizationFilterIcon").attr("class", "far fa-circle");
  }
});
