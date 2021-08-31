$(document).ready(function () {
  $.getJSON(
    "Stock List.json", //here replace Stock List.json with api call for json
    function (data) {
      am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.dateFormatter.inputDateFormat = "YYYY-MM-dd";

        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;

        var series = chart.series.push(new am4charts.CandlestickSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "close";
        series.dataFields.openValueY = "open";
        series.dataFields.lowValueY = "low";
        series.dataFields.highValueY = "high";
        series.tooltipText =
          "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";
        series.strokeWidth = 2;
        chart.cursor = new am4charts.XYCursor();
        // a separate series for scrollbar
        var lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.dataFields.dateX = "date";
        lineSeries.dataFields.valueY = "close";
        // need to set on default state, as initially series is "show"
        lineSeries.defaultState.properties.visible = false;

        // hide from legend too (in case there is one)
        lineSeries.hiddenInLegend = true;
        lineSeries.fillOpacity = 0.5;
        lineSeries.strokeOpacity = 0.5;

        var scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(lineSeries);
        chart.scrollbarX = scrollbarX;

        chart.data = data;
        //
      });
    }
  );
});
$(document).ready(function () {
  $.getJSON(
    "Stock List.json", //here replace Stock List.json with api call for json
    function (data) {
      am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("chartdiv1", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 40;
        dateAxis.renderer.grid.template.location = 0;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;

        var series = chart.series.push(new am4charts.CandlestickSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "close";
        series.dataFields.openValueY = "open";
        series.dataFields.lowValueY = "low";
        series.dataFields.highValueY = "high";
        series.simplifiedProcessing = true;
        series.tooltipText =
          "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}\nMediana:{mediana}";
        series.riseFromOpenState = undefined;
        series.dropFromOpenState = undefined;

        chart.cursor = new am4charts.XYCursor();

        var medianaSeries = chart.series.push(new am4charts.StepLineSeries());
        medianaSeries.noRisers = true;
        medianaSeries.startLocation = 0.1;
        medianaSeries.endLocation = 0.9;
        medianaSeries.dataFields.valueY = "mediana";
        medianaSeries.dataFields.dateX = "date";
        medianaSeries.strokeWidth = 2;
        medianaSeries.stroke = am4core.color("#fff");

        var topSeries = chart.series.push(new am4charts.StepLineSeries());
        topSeries.noRisers = true;
        topSeries.startLocation = 0.2;
        topSeries.endLocation = 0.8;
        topSeries.dataFields.valueY = "high";
        topSeries.dataFields.dateX = "date";
        topSeries.stroke = chart.colors.getIndex(0);
        topSeries.strokeWidth = 2;

        var bottomSeries = chart.series.push(new am4charts.StepLineSeries());
        bottomSeries.noRisers = true;
        bottomSeries.startLocation = 0.2;
        bottomSeries.endLocation = 0.8;
        bottomSeries.dataFields.valueY = "low";
        bottomSeries.dataFields.dateX = "date";
        bottomSeries.stroke = chart.colors.getIndex(0);
        bottomSeries.strokeWidth = 2;

        chart.scrollbarX = new am4core.Scrollbar();

        chart.data = data;

        addMediana();

        function addMediana() {
          for (var i = 0; i < chart.data.length; i++) {
            var dataItem = chart.data[i];
            dataItem.mediana =
              Number(dataItem.low) +
              (Number(dataItem.high) - Number(dataItem.low)) / 2;
          }
        }
      });
    }
  );
});
$(document).ready(function () {
  $.getJSON(
    "Stock List.json", //here replace Stock List.json with api call for json
    function (data) {
      am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("chartdiv2", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;

        var series = chart.series.push(new am4charts.CandlestickSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "close";
        series.dataFields.openValueY = "open";
        series.dataFields.lowValueY = "low";
        series.dataFields.highValueY = "high";
        series.tooltipText =
          "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";

        // important!
        // candlestick series colors are set in states.
        // series.riseFromOpenState.properties.fill = am4core.color("#00ff00");
        // series.dropFromOpenState.properties.fill = am4core.color("#FF0000");
        // series.riseFromOpenState.properties.stroke = am4core.color("#00ff00");
        // series.dropFromOpenState.properties.stroke = am4core.color("#FF0000");

        series.riseFromPreviousState.properties.fillOpacity = 1;
        series.dropFromPreviousState.properties.fillOpacity = 0;

        chart.cursor = new am4charts.XYCursor();

        // a separate series for scrollbar
        var lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.dataFields.dateX = "date";
        lineSeries.dataFields.valueY = "close";
        // need to set on default state, as initially series is "show"
        lineSeries.defaultState.properties.visible = false;

        // hide from legend too (in case there is one)
        lineSeries.hiddenInLegend = true;
        lineSeries.fillOpacity = 0.5;
        lineSeries.strokeOpacity = 0.5;

        var scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(lineSeries);
        chart.scrollbarX = scrollbarX;

        chart.data = data;
      });
    }
  );
});
$(document).ready(function () {
  $.getJSON(
    "Stock List.json", //here replace Stock List.json with api call for json
    function (data) {
      am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("chartdiv3", am4charts.XYChart);
        chart.paddingRight = 20;

        chart.dateFormatter.inputDateFormat = "YYYY-MM-dd";

        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;

        var series = chart.series.push(new am4charts.OHLCSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "close";
        series.dataFields.openValueY = "open";
        series.dataFields.lowValueY = "low";
        series.dataFields.highValueY = "high";
        series.tooltipText =
          "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";
        series.strokeWidth = 2;
        chart.cursor = new am4charts.XYCursor();
        // a separate series for scrollbar
        var lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.dataFields.dateX = "date";
        lineSeries.dataFields.valueY = "close";
        // need to set on default state, as initially series is "show"
        lineSeries.defaultState.properties.visible = false;

        // hide from legend too (in case there is one)
        lineSeries.hiddenInLegend = true;
        lineSeries.fillOpacity = 0.5;
        lineSeries.strokeOpacity = 0.5;

        var scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(lineSeries);
        chart.scrollbarX = scrollbarX;

        chart.data = data;
        //
      });
    }
  );
});
