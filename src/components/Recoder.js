import React, { Component } from 'react'
import autobind from 'autobind-decorator'

class Recoder extends Component {
  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(this.handleAccessMedia);
  }

  @autobind
  handleAccessMedia(stream) {
    // TODO
    console.log('access', stream)
    const audioCtx = new AudioContext()
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(convolver);
    convolver.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  }

  render() {
    return (
      <div>
        듣는 중
      </div>
    )
  }
}

export default Recoder