import React, { Component } from 'react';
import './cube.scss';

class Cube extends Component {

  constructor() {
    super();

    this.state = {
      sides: ['front', 'back', 'right', 'left', 'top', 'bottom'],
      yPos: 0
    };
  }

  handleHover(e) {
    let w = window.innerWidth / 2;
    let x = e.clientX;
    let deltaX = w - x;
    let newPos = Math.round(deltaX * -0.3);

    this.setState({
      yPos: newPos
    })
  }

  render() {
    return (
      <section className="cube-container" onMouseMove={this.handleHover.bind(this)}>
        <figure className="cube playing" style={{transform: `rotateY(${this.state.yPos}deg)`}}>
          {this.state.sides.map((s, i) => {
            let rgbNum = i*50;
            return (
              <figure className={s} style={{backgroundColor: `rgb(${rgbNum} ${rgbNum} 255)`}} key={`${s}-${i}`}></figure>
            )
          })}
          <figure className="front-hover"></figure>
          <figure className="left-hover"></figure>
          <figure className="right-hover"></figure>
          <figure className="arrows"></figure>
        </figure>
      </section>
    )
  }

}

export default Cube;
