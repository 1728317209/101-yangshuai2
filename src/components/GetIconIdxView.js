import React, { Component } from 'react';

export default class GetIconIdxView extends Component {

    onGetIconIdx = (iconIdx) => {
        this.props.onGetIconIdx(iconIdx);
        console.log(iconIdx);
    }
    render() {
        const { iconIdx } = this.props;
        return iconIdx;
    }
}

