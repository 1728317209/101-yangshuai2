import React, { Component } from 'react';
import ItemListView from './components/ItemList';
import FootView from './components/Foot';
import './App.css';

import icon_red from './resource/红.png';
import icon_blue from './resource/蓝.png';
import icon_green from './resource/绿.png';
import icon_yellow from './resource/黄.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          title: "我",
          colors: [icon_red, icon_yellow, icon_blue, icon_green]
        },
        {
          title: "微信",
          colors: [icon_red, icon_yellow, icon_blue, icon_green]
        },
        {
          title: "通讯录",
          colors: [icon_red, icon_yellow, icon_blue, icon_green]
        },
        {
          title: "发现",
          colors: [icon_red, icon_yellow, icon_blue, icon_green]
        }
      ],
    }
    this.itemIdx = null;
    this.iconIdx = null;

  }

  handleGetItemIdx = (itemIdx) => {
    this.itemIdx = itemIdx;
    this.handleTopItem();
  }

  handleGetIconIdx = (iconIdx) => {
    this.iconIdx = iconIdx;
  }
  
  //置顶item
  handleTopItem = () => {
    const newMessages = this.state.messages.slice();
    const obj = newMessages.splice(this.itemIdx, 1);
    newMessages.unshift(obj[0]);
    this.handleTopIcon(newMessages);
  }

  //置顶icon
  handleTopIcon = (newMessages) => {
    const obj1 = newMessages[0].colors.splice(this.iconIdx, 1);
    newMessages[0].colors.unshift(obj1[0]);
    this.setState({
      messages: newMessages
    });
    this.itemIdx = null;
    this.iconIdx = null;
  }

  render() {
    return (
      <div>
        <ItemListView 
          messages={this.state.messages}
          onGetItemIdx={this.handleGetItemIdx}
          onGetIconIdx={this.handleGetIconIdx}
        />
        <FootView 
          messages={this.state.messages}
        />
      </div>
    );
  }
}

export default App;
