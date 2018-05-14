import React from 'react';
import { render } from 'react-dom';
import Rnd from 'react-rnd';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',

};

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      width: 200,
      height: 200,
      x: 10,
      y: 10,
    }
  }

  render() {
    const url = "https://r5---sn-4g5e6ne6.c.drive.google.com/videoplayback?id=eefd5d769544beff&itag=59&source=webdrive&requiressl=yes&mm=30&mn=sn-4g5e6ne6&ms=nxu&mv=m&pl=17&ttl=transient&ei=6F73Wq_yLI6c-wW204LgBw&susc=dr&driveid=1WbL2zYIzfnlIRPAlDM-RBElXho80JXEv&app=texmex&mime=video/mp4&lmt=1526125313629889&mt=1526161034&ip=46.223.254.84&ipbits=0&expire=1526175528&cp=QVNHWEJfVFVQSVhOOlJrbF9lMWZaeWR1&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,ttl,ei,susc,driveid,app,mime,lmt,cp&signature=AB402C017195D43EF472B3A66E342590F6160468.4A8E64256AFFF9219C7843719A9AECD263A1E7DE&key=ck2&cpn=nXdHnlYnnFtsN5cE&c=WEB_EMBEDDED_PLAYER&cver=20180510";

    return (
      <div>
        <Rnd
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width, height: this.state.height }}
          position={{ x: this.state.x, y: this.state.y }}
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
            width: '300px',
            height: '300px',
            overflow: 'hidden',
          }}>
            <video autoPlay
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}>
              <source
                src={url} />
              />
    </video>
          </div>

        </Rnd>
        <Rnd
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width, height: this.state.height }}
          position={{ x: 210, y: this.state.y }}
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
            width: '300px',
            height: '300px',
            overflow: 'hidden',
          }}>
            <video autoPlay
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}>
              <source
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
              />
    </video>
          </div>

        </Rnd>

        <Rnd
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width, height: this.state.height }}
          position={{ x: 410, y: this.state.y }}
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
            width: '300px',
            height: '300px',
            overflow: 'hidden',
          }}>
            <video autoPlay
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}>
              <source
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
              />
    </video>
          </div>

        </Rnd>

        <Rnd
          style={style}
          enableResizing={{
            right: true
          }}
          size={{ width: this.state.width, height: this.state.height }}
          position={{ x: 610, y: this.state.y }}
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
            width: '300px',
            height: '300px',
            overflow: 'hidden',
          }}>
            <video autoPlay
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}>
              <source
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
              />
    </video>
          </div>

        </Rnd>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
