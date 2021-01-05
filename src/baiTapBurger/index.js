import React, { Component } from 'react'
import Volume from './volume'
import Items from './Items'
import Bill from './Bill'
import '../style'

export default class BaiTapBurger extends Component {
    render() {
        return (
            <div className="d-flex" style={{width: '85%', margin: '0 auto'}}>
                <Items  />
                <Volume />
                <Bill />
            </div>
        )
    }
}
