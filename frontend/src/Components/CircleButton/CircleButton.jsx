import React from 'react';
import { Button } from 'antd';
import './CircleButton.css';

export class CircleButton extends React.PureComponent {
  render() {
    const { className, children, ...otherProps } = this.props; 
    return (
      <Button className={`CircleButton ${className || ''}`} {...otherProps}>
        {children}
      </Button>
    )
  }
}

export default CircleButton;
