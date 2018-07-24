import React, { Component } from 'react';
import GetIconIdxView from './GetIconIdxView'

import icon_red from '../resource/红.png';
import icon_blue from '../resource/蓝.png';
import icon_green from '../resource/绿.png';
import icon_yellow from '../resource/黄.png';

export default class ItemListIcons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [icon_red, icon_yellow, icon_blue, icon_green]
        }
    }

    onGetIconIdx = (iconIdx) => {
        this.props.onGetIconIdx(iconIdx);
        console.log(iconIdx);
    }
    render() {
        const { colors } = this.props;
        return (
            <div className="item-icons">
                {
                    this.state.colors.map((item, i) => {
                        return (
                            <img className="item-icon" src={colors[i]}  alt="" onClick={this.onGetIconIdx.bind(this, i)}/>
                        )
                    })
                }
            </div>
        );

    }
}

