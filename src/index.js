import React from "react";
import { render } from "react-dom";
import Rnd from "react-rnd";
import ReactPlayer from "react-player";

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
      total: 1280,
      proportion1: 1,
      proportion2: 1,
      proportion3: 1,
      proportion4: 1,
      player1Ready: false,
      player2Ready: false,
      player3Ready: false,
      player4Ready: false,
      player1Mute: false,
      player2Mute: false,
      player3Mute: false,
      player4Mute: false,
      player1: React.createRef(),
      player2: React.createRef(),
      player3: React.createRef(),
      player4: React.createRef(),
      start: false,
      initialPlay: true
    };
  }

  player1Ready = () => {
    this.setState({
      player1Ready: true
    });
  };

  player2Ready = () => {
    this.setState({
      player2Ready: true
    });
  };

  player3Ready = () => {
    this.setState({
      player3Ready: true
    });
  };

  player4Ready = () => {
    this.setState({
      player4Ready: true
    });
  };

  player1Mute = () => {
    this.setState({
      player1Mute: !this.state.player1Mute
    });
  };

  player2Mute = () => {
    this.setState({
      player2Mute: !this.state.player2Mute
    });
  };

  player3Mute = () => {
    this.setState({
      player3Mute: !this.state.player3Mute
    });
  };

  player4Mute = () => {
    this.setState({
      player4Mute: !this.state.player4Mute
    });
  };

  player1Started = () => {
    console.log(`Player 1 started at ${Date.now()}`);
  };

  player2Started = () => {
    console.log(`Player 2 started at ${Date.now()}`);
  };

  player3Started = () => {
    console.log(`Player 3 started at ${Date.now()}`);
  };

  player4Started = () => {
    console.log(`Player 4 started at ${Date.now()}`);
  };


  /*checkWidth(identity) {
    if (identity == "melody") {
      this.state.total = this.state.width2 + this.state.width3 + this.state.width4;
      this.state.proportion2 = this.state.width2 / this.state.total;
      this.state.proportion3 = this.state.width3 / this.state.total;
      this.state.proportion4 = this.state.width4 / this.state.total;
      this.state.width2 = this.state.width2 * this.state.proportion2;
      this.state.width3 = this.state.width3 * this.state.proportion3;
      this.state.width4 = this.state.width4 * this.state.proportion4;
    }
    if (identity == "bass") {
      this.state.total = this.state.width1 + this.state.width3 + this.state.width4;
      this.state.proportion1 = this.state.width1 / this.state.total;
      this.state.proportion3 = this.state.width3 / this.state.total;
      this.state.proportion4 = this.state.width4 / this.state.total;
      this.state.width1 = this.state.width1 * this.state.proportion1;
      this.state.width3 = this.state.width3 * this.state.proportion3;
      this.state.width4 = this.state.width4 * this.state.proportion4;
    }
    if (identity == "drums") {
      this.state.total = this.state.width1 + this.state.width2 + this.state.width4;
      this.state.proportion1 = this.state.width1 / this.state.total;
      this.state.proportion2 = this.state.width2 / this.state.total;
      this.state.proportion4 = this.state.width4 / this.state.total;
      this.state.width1 = this.state.width1 * this.state.proportion1;
      this.state.width2 = this.state.width2 * this.state.proportion2;
      this.state.width4 = this.state.width4 * this.state.proportion4;
    }
    if (identity == "vox") {
      this.state.total = this.state.width1 + this.state.width2 + this.state.width3;
      this.state.proportion1 = this.state.width1 / this.state.total;
      this.state.proportion2 = this.state.width2 / this.state.total;
      this.state.proportion3 = this.state.width3 / this.state.total;
      this.state.width1 = this.state.width1 * this.state.proportion2;
      this.state.width2 = this.state.width2 * this.state.proportion3;
      this.state.width3 = this.state.width3 * this.state.proportion4;
    }
  }
  */

  render() {
    if (
      this.state.player1Ready &&
      this.state.player2Ready &&
      this.state.player3Ready &&
      this.state.player4Ready &&
      !this.state.start
    ) {
      console.log("Prebuffering");
      setTimeout(() => this.setState({ start: true }), 5000);
    }

    if (
      this.state.player1Ready &&
      this.state.player2Ready &&
      this.state.player3Ready &&
      this.state.player4Ready &&
      this.state.start &&
      this.state.initialPlay
    ) {
      console.log("All videos are playing");

      setTimeout(() => this.setState({ initialPlay: false }), 5000);

      setTimeout(() => {
        this.state.player1.current.seekTo(0);
        this.state.player2.current.seekTo(0);
        this.state.player3.current.seekTo(0);
        this.state.player4.current.seekTo(0);
      }, 100);
    }
    
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
              //Positionierung
              width1: ref.offsetWidth,
              x2: x2,
              x3: x3,
              x4: x4,
             //Breitenberechnung
              //total: 1280 - ref.offsetWidth,
              //proportion2: this.state.width2 / this.state.total,
              //proportion3: this.state.width3 / this.state.total,
              //proportion4: this.state.width4 / this.state.total,
              //width2: this.state.width2 * this.state.proportion2,
              //width3: this.state.width3 * this.state.proportion3,
              //width4: this.state.width4 * this.state.proportion4, --!>
             });
            //checkWidth(e.id);
          }}
        >
          <div
            style={{
              width: this.state.width1,
              height: "720px",
              overflow: "hidden",
            }}
            onClick={this.player1Mute}
          >
            <ReactPlayer
              playing={
                this.state.player1Ready &&
                this.state.player2Ready &&
                this.state.player3Ready &&
                this.state.player4Ready &&
                this.state.start
              }
              ref={this.state.player1}
              config={{
                file: {
                  attributes: {
                    preload: "auto",
                    onCanPlayThrough: this.player1Ready
                  }
                }
              }}
              volume={this.state.width1 / 640}
              muted={this.state.player1Mute}
              onStart={this.player1Started}
              width="auto"
              height="auto"
              url={
                "https://sftp.hs-furtwangen.de/~kroenert/AudioVideo/VeralteteVideos/Melody.mp4"
              }
            />
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
              x4: x4,

              //total: this.state.width1 + this.state.width3 + this.state.width4,
              //proportion1: this.state.width1 / this.state.total,
              //proportion3: this.state.width3 / this.state.total,
              //proportion4: this.state.width4 / this.state.total,
              //width1: this.state.width1 * this.state.proportion1,
              //width3: this.state.width3 * this.state.proportion3,
              //width4: this.state.width4 * this.state.proportion4,
            });
            //checkWidth(e.id);
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
              x4: x4,

              //total: this.state.width1 + this.state.width2 + this.state.width4,
              //proportion1: this.state.width1 / this.state.total,
              //proportion2: this.state.width2 / this.state.total,
              //proportion4: this.state.width4 / this.state.total,
              //width1: this.state.width1 * this.state.proportion1,
              //width2: this.state.width2 * this.state.proportion2,
              //width4: this.state.width4 * this.state.proportion4,
            });
            //checkWidth(e.id);
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

              //total: this.state.width1 + this.state.width2 + this.state.width3,
              //proportion1: this.state.width1 / this.state.total,
              //proportion2: this.state.width2 / this.state.total,
              //proportion3: this.state.width3 / this.state.total,
              //width1: this.state.width1 * this.state.proportion2,
              //width2: this.state.width2 * this.state.proportion3,
              //width3: this.state.width3 * this.state.proportion4,
            });
            //checkWidth(e.id);
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
