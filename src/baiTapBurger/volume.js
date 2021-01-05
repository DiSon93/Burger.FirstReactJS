import React, { Component } from 'react'
import { connect } from 'react-redux'
import Items from './Items'
import Menu from './Menu'

class volume extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {

    //         saladCount: 1,
    //         cheeseCount: 1,
    //         beefCount: 1
    //     }
    // }
    // setState({
    //       count= count + 1,
    // })
    // saladCounting = (state) => {
    //   const  saladCount= state.saladCount + 1
    //     this.setState({
    //         saladCount


    //     })
    //     console.log(saladCount)
    // }
    // tinhTongTien = (count) => {
    //     const tongTien = this.props.menu.salad * count.saladCount + this.props.menu.cheese * count.cheeseCount + this.props.menu.beef * count.beefCount;
    //     // this.setState ({
    //     //     tongTien,
    //     // })
    //     return tongTien,
    //     console.log(tongTien)

    renderMenu = () => {
        const { menu, burger } = this.props;
        return Object.entries(menu).map(([burgerItem, price], index) => {
            // console.log(price);
            return (
                <tr key={index}>
                    <td>{burgerItem}</td>
                    <td>
                        <button className="btn btn-success mr-2" onClick={() => this.props.addBreadMid(burgerItem,1)}>+</button>
                        <button className="btn btn-danger" onClick={() => this.props.addBreadMid(burgerItem, -1)} >-</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[burgerItem] * price}</td>
                </tr>
            )


        })
    }
    // }

    render() {

        const { menu, burger } = this.props;



        return (
            <div className="volume ">

                <h2>Chọn thức ăn</h2>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th></th>
                            <th>Giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>Salad</td>
                            <td>
                                <button className="btn btn-success mr-2" onClick={() => this.props.addSalad(burger.salad)}>+</button>
                                <button className="btn btn-danger" onClick={()=> this.props.subtractSalad(burger.salad)}>-</button>
                            </td>
                            <td>{menu.salad}</td>
                        </tr>
                        <tr>
                            <td>Cheese</td>
                            <td>
                                <button className="btn btn-success mr-2" onClick={() => this.props.addCheese(burger.cheese)}>+</button>
                                <button className="btn btn-danger"  onClick={()=> this.props.subtractCheese(burger.cheese)}>-</button>
                            </td>
                            <td>{menu.cheese}</td>
                        </tr>
                        <tr>
                            <td>Beef</td>
                            <td>
                                <button className="btn btn-success mr-2" onClick={() => this.props.addBeef(burger.beef)}>+</button>
                                <button className="btn btn-danger"  onClick={()=> this.props.subtractBeef(burger.beef)}>-</button>
                            </td>
                            <td>{menu.beef}</td>
                        </tr> */}
                        {this.renderMenu()}

                    </tbody>
                </ table>

                {/* <h5 className="text-right">Tổng tiền: </h5> */}

                {/* <button className="btn btn-primary" style={{ float: 'right' }}>Thanh toán</button> */}
                {/* {this.tinhTongTien(this.state)} */}

                <Menu count={this.state} tongTien={this.tinhTongTien} />
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        menu: state.burgerReducer.menu,
        burger: state.burgerReducer.burger
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        addBreadMid: (burgerItem,amount) => {
            const action = {
                type : "ADD_BREADMID",

                burgerItem,
                amount
            };
            dispatch(action)
        },

        addSalad: (salad) => {
            const action = {
                type: "ADD_SALAD",
                value: salad,

            };
            dispatch(action);
        },
        addCheese: (cheese) => {
            const action = {
                type: "ADD_CHEESE",
                value: cheese
            };
            dispatch(action);
        },
        addBeef: (beef) => {
            const action = {
                type: "ADD_BEEF",
                value: beef
            };
            dispatch(action);
        },
        subtractSalad: (salad) => {
            const action = {
                type: "SUBTRACT_SALAD",
                value: salad
            };
            dispatch(action);
        },
        subtractCheese: (cheese) => {
            const action = {
                type: "SUBTRACT_CHEESE",
                value: cheese
            };
            dispatch(action);
        },
        subtractBeef: (beef) => {
            const action = {
                type: "SUBTRACT_BEEF",
                value: beef
            };
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(volume)