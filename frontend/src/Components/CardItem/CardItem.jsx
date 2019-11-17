import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'antd';
import { format } from 'currency-formatter';
import './CardItem.css';

const CURRENCY_FORMAT = {
  locale: 'jp-JP',
};

export class CardItem extends React.PureComponent {
  render() {
    const { className } = this.props;
    const {
      id,
      image,
      price,
      name,
      like_count,
      is_sold_out,
    } = this.props.data;
    return (
      <Link to={`/${id}`} className={className}>
        <Card
          className="CardItem"
          cover={(
            <div className="cover">
              {is_sold_out && <div className="sold-out">SOLD</div>}
              <img className="image" alt={name} src={image} />
            </div>
          )}
        >
          <div className="title">{name}</div>
          <div className="section">
            <div className="price">{format(price, CURRENCY_FORMAT)}</div>
            {like_count > 0 && (
              <div className="like">
                <Icon type="heart" className="icon" /> {format(like_count, { code: '', precision: 0 })}
              </div>
            )}
          </div>
        </Card>
      </Link>
    );
  }
}

export default CardItem;
