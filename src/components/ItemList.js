import React, { Component } from 'react';
import ItemListIcons from './ItemListIcons';
import checked_icon from '../resource/check.png'
import icon_red from '../resource/红.png';
import icon_blue from '../resource/蓝.png';
import icon_green from '../resource/绿.png';
import icon_yellow from '../resource/黄.png';
export default class ItemList extends Component {

    onGetItemIdx = (itemIdx) => {
        this.props.onGetItemIdx(itemIdx);
    }


    render() {
        const { messages } = this.props;

        return (
            <div>
                {
                    messages.map((item, i) => {
                        return (
                            <div className="item" onClick={this.onGetItemIdx.bind(this, i)}>
                                <div className="item-title">
                                    <span>{item.title}</span>
                                </div>
                                <ItemListIcons 
                                    onGetIconIdx={this.props.onGetIconIdx}
                                    colors={messages[i].colors}
                                />
                            </div>
                        )
                    })
                }
            </div>
        );

    }
}



// {
//     messages.colors.map((item, i) => {
//         return (
//             <img src={item[i]} alt="" />
//         )
//     })
// }
{/* <img className="item-icon" src={item.colors[0].color_1}  alt="" />
<img className="item-icon" src={item.colors[1].color_2}  alt="" />
<img className="item-icon" src={item.colors[2].color_3}  alt="" />
<img className="item-icon" src={item.colors[3].color_4}  alt="" /> */}