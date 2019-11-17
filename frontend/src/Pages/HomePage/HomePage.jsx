import React from 'react';
import { Button, Dropdown, Icon, Menu, Spin } from 'antd';
import { getOr } from 'lodash/fp';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid/v4';
import CardItem from '../../Components/CardItem/CardItem';
import api from '../../Services/api';
import { buildQueryString } from '../../Utils/lib';

import './HomePage.scss';

class HomePage extends React.Component {
  state = {
    items: [],
    categories: [],
  }

  async componentDidMount() {
    await this.fetchCategories();
    await this.fetchItems();
  }

  fetchItems = async () => {
    await this.setState({ loading: true });
    const keys = ['category_id'];
    const search = getOr('', 'location.search', this.props);
    const queryString = buildQueryString(search, keys);
    const items = await api.fetchItemList(queryString);
    this.setState({ items, loading: false });
  }

  fetchCategories = async () => {
    const categories = await api.fetchCategories();
    this.setState({ categories });
  }

  handleMenuClick = (id) => {
    const path = (id) ? `/?category_id=${id}`: '/';
    this.props.history.replace(path);
    this.fetchItems();
  }

  renderCategoryMenu = () => (
    <Menu>
      <Menu.Item key={uuid()}>
        <Button
          type="link"
          block
          onClick={() => this.handleMenuClick()}
        >
          All
        </Button>
      </Menu.Item>
      {
        this.state.categories.map(data => (
          <Menu.Item key={uuid()}>
            <Button
              type="link"
              block
              onClick={() => this.handleMenuClick(data.id)}
            >
              {data.name}
            </Button>
          </Menu.Item>
        ))
      }
    </Menu>
  )

  render() {
    return (
      <div className="HomePage">
        <div className="nav">
          <Dropdown overlay={this.renderCategoryMenu()}>
            <Button>
              Select category <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        <div className="list">
          {this.state.loading
            ? <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
            : this.state.items.map(data => (<CardItem className="item" data={data} key={uuid()} />))}
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);