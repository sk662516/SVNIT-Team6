import React, {Component} from "react";

class Ohlc extends Components {
    render(){
        return (
            <div>
              <style dangerouslySetInnerHTML={{__html: "\n    #chartdiv3 {\n        width: 100%;\n        height: 500px;\n    }\n" }} />
              <div id="chartdiv3" />
            </div>
          );
    }
}

export default Ohlc;