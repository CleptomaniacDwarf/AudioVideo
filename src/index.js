import React from 'react';
import { render } from 'react-dom';
import Rnd from 'react-rnd';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      width1: 200,
      height1: 200,
      x1: 10,
      y1: 10,
      width2: 200,
      height2: 200,
      x2: 10,
      y2: 10,
      width3: 200,
      height3: 200,
      x3: 10,
      y3: 10,
      width4: 200,
      height4: 200,
      x4: 10,
      y4: 10,
    }
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
              ...position,
            });
          }}
        >
          <div style={{
            //width: '300px',
            height: '720px',
            overflow: 'hidden',
          }}>
            <video autoPlay
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}>
              <source
                src="https://webuser.hs-furtwangen.de/~kroenert/AudioVideo/Melody.mp4" />
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
          position={{ x: 210, y: this.state.y2 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position,
            });
          }}
        >
          <div style={{
            //width: '300px',
            height: '720px',
            overflow: 'hidden',
          }}>
            <video autoPlay
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}>
              <source
                  src="https://webuser.hs-furtwangen.de/~kroenert/AudioVideo/Bass.mp4" />
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
          position={{ x: 410, y: this.state.y3 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position,
            });
          }}
        >
          <div style={{
            //width: '300px',
            height: '720px',
            overflow: 'hidden',
          }}>
            <video autoPlay
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}>
              <source
                  src="https://webuser.hs-furtwangen.de/~kroenert/AudioVideo/Drums.mp4" />
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
          position={{ x: 610, y: this.state.y4 }}
          disableDragging
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position,
            });
          }}
        >
          <div style={{
            //width: '300px',
            height: '720px',
            overflow: 'hidden',
          }}>
            <video autoPlay
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}>
              <source
                  src="https://webuser.hs-furtwangen.de/~kroenert/AudioVideo/Vox.mp4" />
              />
    </video>
          </div>

        </Rnd>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
