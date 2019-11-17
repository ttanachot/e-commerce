import React from 'react';
import { format } from 'currency-formatter';
import CircleButton from '../CircleButton/CircleButton';
import './BuyInfo.css';

export class BuyInfo extends React.PureComponent {
  render() {
    const {
      id, // eslint-disable-line
      price,
      shipping_fee,
      is_sold_out,
    } = this.props.data;
    return (
      <div className="BuyInfo">
        <div className={`price ${is_sold_out ? 'sold-out' : ''}`}>
          {format(price, {code: 'JPY', precision: 0})}
          <span className="shipping-fee">({shipping_fee})</span>
        </div>
        <div className="buy-item">
          {is_sold_out
            ? <CircleButton disabled className="disabled">SOLD</CircleButton>
            : <CircleButton className="buy-button">BUY</CircleButton>
          }
        </div>
      </div>
    )
  }
}

export default BuyInfo;
