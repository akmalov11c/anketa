$(document).ready(function () {
  const rangeInput = $(".slider");
  const sad = $("#sad");
  const mad = $("#mad");
  const mood = $("#mood");
  const good = $("#good");

  rangeInput.val(66);
  mood.attr("src", "/assets/img/active.mood.svg");

  rangeInput.on("input", function () {
    if (rangeInput.val() == 7) {
      sad.attr("src", "/assets/img/active-sad.svg");
    } else if (rangeInput.val() == 36) {
      mad.attr("src", "/assets/img/active.mad.svg");
    } else if (rangeInput.val() == 66) {
      mood.attr("src", "/assets/img/active.mood.svg");
    } else if (rangeInput.val() == 94) {
      good.attr("src", "/assets/img/active.good.svg");
    } else {
      sad.attr("src", "/assets/img/inactive.sad.svg");
      mad.attr("src", "/assets/img/inactive.mad.svg");
      mood.attr("src", "/assets/img/inactive.mood.svg");
      good.attr("src", "/assets/img/inactive.good.svg");
    }
  });
});

// PRICE CALCULATION

$(document).ready(function () {
  var selectedArea = 30;
  var selectedRepairType = "new";
  var selectedTariff = "partial";

  function updateCost() {
    var area = selectedArea;
    var repairTypeCoefficient = getRepairTypeCoefficient(selectedRepairType);
    var tariff = getTariff(selectedTariff);

    var cost = (tariff * area) / repairTypeCoefficient;

    $("#cost").text(cost);
  }

  function getRepairTypeCoefficient(repairType) {
    switch (repairType) {
      case "new":
        return 1;
      case "secondary":
        return 1.5;
      case "private":
        return 2;
      default:
        return 1;
    }
  }

  function getTariff(tariff) {
    switch (tariff) {
      case "partial":
        return 1500;
      case "cosmetic":
        return 2500;
      case "turnkey":
        return 3500;
      case "capital":
        return 4500;
      default:
        return 0;
    }
  }

  $("#area").on("input", function () {
    selectedArea = parseInt($(this).val());
    $("#slider").val(selectedArea);
    updateCost();
  });

  $("#slider").on("input", function () {
    selectedArea = parseInt($(this).val());
    $("#area").val(selectedArea);
    updateCost();
  });

  $('input[name="repair-type"]').on("change", function () {
    selectedRepairType = $(this).val();
    updateCost();
  });

  $('input[name="tariff"]').on("change", function () {
    selectedTariff = $(this).val();
    updateCost();
  });

  $("#area").val(selectedArea);
  $("#slider").val(selectedArea);
  updateCost();
});

// НОВАЯ СТРОКА

$(document).ready(function () {
  $("#input-container").on("keydown", "input", function (event) {
    if (event.which === 13 || event.which === 9) {
      event.preventDefault();
      const enteredText = $(this).val().trim();
      if (enteredText !== "") {
        const newInput = $("<input>")
          .addClass("text-input")
          .attr("type", "text");
        $("#input-container").append(newInput);
        newInput.focus();
      }
    }
  });

  $("#input-container").on("input", "input", function () {
    const textarea = $(this)[0];
    const isTextareaFull =
      textarea.offsetHeight < textarea.scrollHeight ||
      textarea.offsetWidth < textarea.scrollWidth;
    if (isTextareaFull) {
      const enteredText = $(this).val().trim();
      if (enteredText !== "") {
        const newInput = $("<input>")
          .addClass("text-input")
          .attr("type", "text");
        $("#input-container").append(newInput);
        newInput.focus();
      }
    }
  });
});
