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
      y4: 10
    };
  }

  render() {
    return (
      <div>
        <Rnd
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width1, height: this.state.height1 }}
          position={{ x: this.state.x1, y: this.state.y1 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              x2: this.state.x2 + ref.offsetWidth,
              x3: this.state.x3 + ref.offsetWidth,
              x4: this.state.x4 + ref.offsetWidth,
            });
          }}
        >
          <div
            style={{
              width: this.state.width1,
              height: "720px",
              overflow: "hidden"
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
              <source src="https://webuser.hs-furtwangen.de/~kroenert/AudioVideo/Melody.mp4" />
              />
            </video>
          </div>
        </Rnd>
        <Rnd
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width2, height: this.state.height2 }}
          position={{ x: this.state.x2, y: this.state.y2 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position
            });
          }}
        >
          <div
            style={{
              //width: '300px',
              height: "720px",
              overflow: "hidden"
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
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width3, height: this.state.height3 }}
          position={{ x: this.state.x3, y: this.state.y3 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position
            });
          }}
        >
          <div
            style={{
              //width: '300px',
              height: "720px",
              overflow: "hidden"
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
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width4, height: this.state.height4 }}
          position={{ x: this.state.x4, y: this.state.y4 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position
            });
          }}
        >
          <div
            style={{
              //width: '300px',
              height: "720px",
              overflow: "hidden"
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
