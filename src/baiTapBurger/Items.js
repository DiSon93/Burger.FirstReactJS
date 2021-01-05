import React, { Component } from 'react'
import { connect } from 'react-redux'


class Items extends Component {

    renderBreadMid = () => {
        console.log(this.props.burger)

        let { burger } = this.props;
        //  for (let propBurger in burger){

        //  }

        // return Object.entries(burger).map(([propsBurger, value], index) => {
        //     let breadMid = [];
        //     for (let i = 0; i < value; i++) {
        //         breadMid.push(<div key={i} className={propsBurger}></div>)
        //     }
        //     // console.log(propsBurger,value)
        //     return breadMid;
        // })
        let content = [];
        for ( let propBurger in burger) {
            let breadMid = [];
            for ( let i=0; i< burger[propBurger]; i++) {
                breadMid.push(<div key={i} className={propBurger}></div>)
            };
            content.push(breadMid);
        };
        return content;
    }
    render() {   

        return (
            <div className="items text-center">
                <h1>Cửa hàng Burger CyberSoft</h1>
                <div className="breadTop"></div>

                {this.renderBreadMid()}
                {/* <div className="salad" ></div>
                {/* <div className="salad"></div> */}
                {/* <div className="beef"></div>
                <div className="cheese"></div> */}
                <div className="breadBottom"></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        menu: state.burgerReducer.menu,
        burger: state.burgerReducer.burger,
        total: state.burgerReducer.total
    }
}

export default connect(mapStateToProps)(Items)
