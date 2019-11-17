import React from 'react';
import { Divider, Icon } from 'antd';
import { format } from 'currency-formatter';
import SellerInfo from './SellerInfo';
import CircleButton from '../../../Components/CircleButton/CircleButton';
import BuyInfo from '../../../Components/BuyInfo/BuyInfo';
import './ItemInfo.css';

export class ItemInfo extends React.PureComponent {
  render() {
    const {
      name,
      description,
      like_count,
      comment_count,
    } = this.props.data;
    return (
      <div className="ItemInfo">
        <h3>{name}</h3>
        <BuyInfo data={this.props.data} />
        <Divider />
        <div className="section">
          <div className="like">
            <CircleButton>
              <Icon type="heart" className="icon" /> Like
            </CircleButton>
            <div className="count">
              {format(like_count, { code: '', precision: 0 })}
            </div>
          </div>
          <div className="comment">
            <CircleButton>
              <Icon type="message" className="icon" /> Comment
            </CircleButton>
            <div className="count">
              {format(comment_count, { code: '', precision: 0 })}
            </div>
          </div>
          <div className="favorite">
            <CircleButton>
              <Icon type="flag" />
            </CircleButton>
          </div>
        </div>
        <Divider />
        <div className="description">
          <h3>Description</h3>
          {description}
        </div>
        <Divider />
        <SellerInfo />
      </div>
    )
  }
}

export default ItemInfo;
