import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Hollow_cand extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
chart.paddingRight = 20;

chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.grid.template.location = 0;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;

let series = chart.series.push(new am4charts.CandlestickSeries());
series.dataFields.dateX = "date";
series.dataFields.valueY = "close";
series.dataFields.openValueY = "open";
series.dataFields.lowValueY = "low";
series.dataFields.highValueY = "high";
series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";

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
let lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.dateX = "date";
lineSeries.dataFields.valueY = "close";
// need to set on default state, as initially series is "show"
lineSeries.defaultState.properties.visible = false;

// hide from legend too (in case there is one)
lineSeries.hiddenInLegend = true;
lineSeries.fillOpacity = 0.5;
lineSeries.strokeOpacity = 0.5;

let scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(lineSeries);
chart.scrollbarX = scrollbarX;

chart.data = $.getJSON(this.prop,function (data) {return data;});

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default Hollow_cand;