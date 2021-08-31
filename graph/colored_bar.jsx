import React, {Component} from "react";

class Colored_bar extends Components {
    render(){
        return (
            <div>
              <style dangerouslySetInnerHTML={{__html: "\n    #chartdiv1 {\n        width: 100%;\n        height: 500px;\n    }\n" }} />
              <div id="chartdiv1" />
            </div>
          );
    }
}

export default Colored_bar;