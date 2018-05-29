import React from "react";
import { render } from "react-dom";
import Rnd from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      width1: 320,
      height1: 720,
      x1: 10,
      y1: 10,
      width2: 320,
      height2: 720,
      x2: 330,
      y2: 10,
      width3: 320,
      height3: 720,
      x3: 650,
      y3: 10,
      width4: 320,
      height4: 720,
      x4: 970,
      y4: 10,
    };
  }

  checkWidth(identity) {
    if (identity == "melody") {
      var total = this.state.width2 + this.state.width3 + this.state.width4;
      var proportion2 = this.state.width2 / total;
      var proportion3 = this.state.width3 / total;
      var proportion4 = this.state.width4 / total;
      this.state.width2 = this.state.width2*proportion2;
      this.state.width3 = this.state.width3*proportion3;
      this.state.width4 = this.state.width4*proportion4;
    }
    if (identity == "bass") {
      var total = this.state.width1 + this.state.width3 + this.state.width4;
      var proportion1 = this.state.width1 / total;
      var proportion3 = this.state.width3 / total;
      var proportion4 = this.state.width4 / total;
      this.state.width1 = this.state.width1*proportion1;
      this.state.width3 = this.state.width3*proportion3;
      this.state.width4 = this.state.width4*proportion4;
    }
    if (identity == "drums") {
      var total = this.state.width1 + this.state.width2 + this.state.width4;
      var proportion1 = this.state.width1 / total;
      var proportion2 = this.state.width2 / total;
      var proportion4 = this.state.width4 / total;
      this.state.width1 = this.state.width1*proportion1;
      this.state.width2 = this.state.width2*proportion2;
      this.state.width4 = this.state.width4*proportion4;
    }
    if (identity == "vox") {
      var total = this.state.width1 + this.state.width2 + this.state.width3;
      var proportion1 = this.state.this.state.width1 / total;
      var proportion2 = this.state.width2 / total;
      var proportion3 = this.state.width3 / total;
      this.state.width1 = this.state.width1*proportion2;
      this.state.width2 = this.state.width2*proportion3;
      this.state.width3 = this.state.width3*proportion4;
    }
  }

  render() {
    return (
      <div>
        <Rnd
          id={"melody"}
          minWidth={213.33}
          maxWidth={640} 
          resizeGrid={[42.67, 1]}
          style={style}
          enableResizing={{
            right: true,
          }}
          size={{ 
            width: this.state.width1, 
            height: this.state.height1,
            }}
          position={{ x: this.state.x1, y: this.state.y1 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            const x2 = this.state.x1 + ref.offsetWidth;
            const x3 = x2 + this.state.width2;
            const x4 = x3 + this.state.width3;
            //debugger;
            
            this.setState({
              width1: ref.offsetWidth,
              x2: x2,
              x3: x3,
              x4: x4,
             });
            checkWidth(e.id);
          }}
        >
          <div
            style={{
              width: this.state.width1,
              height: "720px",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            >
              <source src="https://webuser.hs-furtwangen.de/~kroenert/AudioVideo/Melody.mp4" />
              />
            </video>
          </div>
        </Rnd>
        <Rnd
          id={"bass"}
          minWidth={213.33}
          maxWidth={640} 
          resizeGrid={[42.67, 1]}
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width2, height: this.state.height2 }}
          position={{ x: this.state.x2, y: this.state.y2 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            const x3 = this.state.x2 + ref.offsetWidth;
            const x4 = x3 + this.state.width3;
            //debugger;

            this.setState({
              width2: ref.offsetWidth,
              height2: ref.offsetHeight,
              x3: x3,
              x4: x4
            });
            checkWidth(e.id);
          }}
        >
          <div
            style={{
              width: this.state.width2,
              height: "720px",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%"
              }}
            >
              <source src="https://webuser.hs-furtwangen.de/~kroenert/AudioVideo/Bass.mp4" />
              />
            </video>
          </div>
        </Rnd>
        <Rnd
          id={"drums"}
          minWidth={213.33}
          maxWidth={640} 
          resizeGrid={[42.67, 1]}
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width3, height: this.state.height3 }}
          position={{ x: this.state.x3, y: this.state.y3 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            const x4 = this.state.x3 + ref.offsetWidth;
            //debugger;

            this.setState({
              width3: ref.offsetWidth,
              height3: ref.offsetHeight,
              x4: x4
            });
            checkWidth(e.id);
          }}
        >
          <div
            style={{
              width: this.state.width3,
              height: "720px",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%"
              }}
            >
              <source src="https://webuser.hs-furtwangen.de/~kroenert/AudioVideo/Drums.mp4" />
              />
            </video>
          </div>
        </Rnd>

        <Rnd
          id={"vox"}
          minWidth={213.33}
          maxWidth={640}  
          resizeGrid={[42.67, 1]}       
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width4, height: this.state.height4 }}
          position={{ x: this.state.x4, y: this.state.y4 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            // debugger;
            this.setState({
              width4: ref.offsetWidth,
              height4: ref.offsetHeight,
            });
            checkWidth(e.id);
          }}
        >
          <div
            style={{
              width: this.state.width4,
              height: "720px",
              overflow: "hidden",
            }}
          >
            <video
              autoPlay
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%"
              }}
            >
              <source src="https://webuser.hs-furtwangen.de/~kroenert/AudioVideo/Vox.mp4" />
              />
            </video>
          </div>
        </Rnd>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
