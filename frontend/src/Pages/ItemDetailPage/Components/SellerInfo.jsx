import React from 'react';
import { Avatar, Card, Icon } from 'antd';
import './SellerInfo.css';

const { Meta } = Card;

export class SellerInfo extends React.Component {

  renderDescription = (description = true) => {
    if (description) {
      return (<div className="verify"><Icon type="check" /> {` Verified member`}</div>);
    }
    return 'Normal member';
  }

  render() {
    const { name, description } = this.props;
    return (
      <div className="SellerInfo">
        <h3>About seller</h3>
        <Card className="card">
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={name || 'John Christ'}
            description={this.renderDescription(description)}
          />
        </Card>
      </div>
    );
  }
}

export default SellerInfo;
