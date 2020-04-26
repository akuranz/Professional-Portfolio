$("#full-bio").on("click", function() {
  let state = $(this).attr("data-state");
  if (state === "disabled") {
    $("#full-bio").attr("data-state", "enabled");
    $("#bio-description").attr("style", "display: block");
    $("#bio-caret").attr("class", "fas fa-caret-down");
  } else if (state === "enabled") {
    $("#full-bio").attr("data-state", "disabled");
    $("#bio-description").attr("style", "display: none");
    $("#bio-caret").attr("class", "fas fa-caret-right");
  }
});

$("#digital-marketer").on("click", function() {
  let state = $(this).attr("data-state");
  if (state === "disabled") {
    $("#digital-marketer").attr("data-state", "enabled");
    $("#dm-description").attr("style", "display: block");
    $("#dm-caret").attr("class", "fas fa-caret-down");
  } else if (state === "enabled") {
    $("#digital-marketer").attr("data-state", "disabled");
    $("#dm-description").attr("style", "display: none");
    $("#dm-caret").attr("class", "fas fa-caret-right");
  }
});

$("#full-stack-developer").on("click", function() {
  let state = $(this).attr("data-state");
  if (state === "disabled") {
    $("#full-stack-developer").attr("data-state", "enabled");
    $("#fs-description").attr("style", "display: block");
    $("#fs-caret").attr("class", "fas fa-caret-down");
  } else if (state === "enabled") {
    $("#full-stack-developer").attr("data-state", "disabled");
    $("#fs-description").attr("style", "display: none");
    $("#fs-caret").attr("class", "fas fa-caret-right");
  }
});

$("#data-visualizer").on("click", function() {
  let state = $(this).attr("data-state");
  if (state === "disabled") {
    $("#data-visualizer").attr("data-state", "enabled");
    $("#dv-description").attr("style", "display: block");
    $("#dv-caret").attr("class", "fas fa-caret-down");
  } else if (state === "enabled") {
    $("#data-visualizer").attr("data-state", "disabled");
    $("#dv-description").attr("style", "display: none");
    $("#dv-caret").attr("class", "fas fa-caret-right");
  }
});
