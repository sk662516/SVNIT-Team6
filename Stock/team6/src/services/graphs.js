import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";

export function OHLC(chart, data) {
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
  return chart;
}

export function Candlestick(chart, data) {
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
  return chart;
}
export function CandleHollow(chart, data) {
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
  return chart;
}

export function ColoredBar(chart, data) {
  chart.paddingRight = 20;

  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 40;
  dateAxis.renderer.grid.template.location = 0;

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;

  let series = chart.series.push(new am4charts.CandlestickSeries());
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

  let medianaSeries = chart.series.push(new am4charts.StepLineSeries());
  medianaSeries.noRisers = true;
  medianaSeries.startLocation = 0.1;
  medianaSeries.endLocation = 0.9;
  medianaSeries.dataFields.valueY = "mediana";
  medianaSeries.dataFields.dateX = "date";
  medianaSeries.strokeWidth = 2;
  medianaSeries.stroke = am4core.color("#fff");

  let topSeries = chart.series.push(new am4charts.StepLineSeries());
  topSeries.noRisers = true;
  topSeries.startLocation = 0.2;
  topSeries.endLocation = 0.8;
  topSeries.dataFields.valueY = "high";
  topSeries.dataFields.dateX = "date";
  topSeries.stroke = chart.colors.getIndex(0);
  topSeries.strokeWidth = 2;

  let bottomSeries = chart.series.push(new am4charts.StepLineSeries());
  bottomSeries.noRisers = true;
  bottomSeries.startLocation = 0.2;
  bottomSeries.endLocation = 0.8;
  bottomSeries.dataFields.valueY = "low";
  bottomSeries.dataFields.dateX = "date";
  bottomSeries.stroke = chart.colors.getIndex(0);
  bottomSeries.strokeWidth = 2;

  chart.scrollbarX = new am4core.Scrollbar();
  chart.data = data;
  for (var i = 0; i < chart.data.length; i++) {
    let dataItem = chart.data[i];
    dataItem.mediana =
      Number(dataItem.low) + (Number(dataItem.high) - Number(dataItem.low)) / 2;
    }
    return chart
}
