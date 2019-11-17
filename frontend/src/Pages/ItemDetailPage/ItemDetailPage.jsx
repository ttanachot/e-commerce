import React from 'react';
import { withRouter } from 'react-router-dom';
import Slider from './Components/Slider';
import ItemInfo from './Components/ItemInfo';
import BuyInfo from '../../Components/BuyInfo/BuyInfo';
import api from '../../Services/api';
import './ItemDetailPage.scss';

export class ItemDetailPage extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const itemId = this.props.match.params.id;
    const data = await api.fetchItem(itemId);
    this.setState({ data });
  }

  render() {
    const {
      name,
      image,
    } = this.state.data;
    const images = [
      { image, name },
      { image, name },
      { image, name },
    ];

    return (
      <div className="ItemDetailPage">
        <div className="header">{name}</div>
        <div className="container">
          <Slider data={images} />
          <ItemInfo data={this.state.data} />
        </div>
        <div className="floating-bottom">
          <BuyInfo data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default withRouter(ItemDetailPage);