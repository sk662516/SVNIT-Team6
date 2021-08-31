import React, {Component} from "react";

class Hollow_cand extends Components {
    render(){
        return (
            <div>
              <style dangerouslySetInnerHTML={{__html: "\n    #chartdiv2 {\n        width: 100%;\n        height: 500px;\n    }\n" }} />
              <div id="chartdiv2" />
            </div>
          );
    }
}

export default Hollow_cand;