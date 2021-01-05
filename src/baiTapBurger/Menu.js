import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {


    tinhTongTien = () => {
        const tongTien = this.props.menu.salad * this.props.burger.salad + this.props.menu.cheese * this.props.burger.cheese + this.props.menu.beef * this.props.burger.beef;
        // this.setState ({
        //     tongTien,
        // })
        this.props.tinhTotal(tongTien);
        console.log(tongTien)
    }

    render() {
        // const { count } = this.props;
        // console.log("SaladCount  ",count.saladCount);
        // console.log("cheeseCount  ",count.cheeseCount);
        // console.log("beefCount  ",count.beefCount);

        // const tongTien = this.tinhTongTien(count);


        {this.tinhTongTien()}
        return (
           <div>
     
                <h5 className="text-right">Tổng tiền: {this.props.total}</h5> 
                <button className="btn btn-primary" style={{ float: 'right' }} data-toggle="modal" data-target="#bill">Thanh toán</button>
           </div>
           
        )
    }
}const mapStateToProps = (state) => {
    return {
        menu: state.burgerReducer.menu,
        burger: state.burgerReducer.burger,
        total: state.burgerReducer.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        tinhTotal: (tongTien) => {
            const action = {
                type: 'TINH_TONG',
                value: tongTien
            };
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu)