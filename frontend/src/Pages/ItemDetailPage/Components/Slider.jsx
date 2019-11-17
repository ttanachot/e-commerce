import React from 'react';
import uuid from 'uuid/v4';
import { Carousel } from 'antd';
import './Slider.css';

export class Slider extends React.PureComponent {
  render() {
    const { data } = this.props;
    const settings = {
      dots: true,
      autoplay: true,
    };
    return (
      <div className="Slider">
        <Carousel {...settings} className="Slider">
          {data.map(({ image, name }) => (
            <div className="slider-container" key={uuid()}>
              <img src={image} alt={name} className="image" />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
