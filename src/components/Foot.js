import React, { Component } from 'react';

import icon from '../resource/icon_Good_B-2.png';

export default class Foot extends Component {

    handleSetItemColor = () => {
        const {messages} = this.props;

        switch (messages[0].title) {
            case "我":
                
                break;
        
            default:
                break;
        }
    }

    renderFootItem = () => {
        const {messages} = this.props;
        let items = messages.map((item, i) => {
            return (
                <div className="chat-nav__item">
                    <img className="chat-nav__item__icon" src={icon} alt="" />
                    <div className="chat-nav__item__name">{item.title}</div>
                </div>
            )
        })
        return items;
    }

    render() {
        const {messages} = this.props;
        return (
            <nav className="chat-nav">
                {this.renderFootItem()}
            </nav>
        );
    }
}
