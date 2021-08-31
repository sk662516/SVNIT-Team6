import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Colored_bar extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
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
series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}\nMediana:{mediana}";
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
chart.data = $.getJSON(this.prop,function (data) {return data;});
  addMediana();

  function addMediana(){
  	for(var i = 0; i < chart.data.length; i++){
  		let dataItem = chart.data[i];
  		dataItem.mediana = Number(dataItem.low) + (Number(dataItem.high) - Number(dataItem.low)) / 2;
  	}
  }
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

export default Colored_bar;