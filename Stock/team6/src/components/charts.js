import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getCompanyData } from "../services/company";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {
  CandleHollow,
  Candlestick,
  ColoredBar,
  OHLC,
} from "../services/graphs";

am4core.useTheme(am4themes_animated);

export default function Charts(props) {
  const div = useRef(null);
  const [chart, setChart] = useState("OHLC");
  const [data, setData] = useState();

  useLayoutEffect(() => {
    var x = am4core.create("chartdiv", am4charts.XYChart);

    if (chart === "OHLC") {
      div.current = OHLC(x, data);
    } else if (chart === "Candlestick") {
      div.current = Candlestick(x, data);
    } else if (chart === "Hollow Candle") {
      div.current = CandleHollow(x, data);
    } else if (chart === "Colored Bar") {
      div.current = ColoredBar(x, data);
    }
    return () => {
      x.dispose();
    };
  }, [data, chart]);

  useEffect(() => {
    if (props.company) {
      getCompanyData(props.company).then((res) => setData(res));
    }
  }, [props.company]);

  return (
    <div className="pe-5">
      <div id="chartdiv" />
      <div className="d-flex justify-content-around">
        <button
          type="button"
          onClick={() => setChart("OHLC")}
          className={chart === "OHLC" ? "btn btn-primary border" : "btn border"}
        >
          OHLC
        </button>
        <button
          type="button"
          onClick={() => setChart("Candlestick")}
          className={
            chart === "Candlestick" ? "btn btn-primary border" : "btn border"
          }
        >
          Candlestick
        </button>
        <button
          type="button"
          onClick={() => setChart("Colored Bar")}
          className={
            chart === "Colored Bar" ? "btn btn-primary border" : "btn border"
          }
        >
          Colored Bar
        </button>
        <button
          type="button"
          onClick={() => setChart("Hollow Candle")}
          className={
            chart === "Hollow Candle" ? "btn btn-primary border" : "btn border"
          }
        >
          Hollow Candle
        </button>
      </div>
    </div>
  );
}
