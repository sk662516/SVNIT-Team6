import React, {Component} from "react";

class Candle extends Components {
    render(){
        return (
            <div>
              <style dangerouslySetInnerHTML={{__html: "\n    #chartdiv {\n        width: 100%;\n        height: 500px;\n    }\n" }} />
              <div id="chartdiv" />
            </div>
          );
    }
}

export default Candle;