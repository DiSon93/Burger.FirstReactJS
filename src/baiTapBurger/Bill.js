import React, { Component } from 'react'
import { connect } from 'react-redux'

class Bill extends Component {
    render() {
        return (
            <div>
                <div>

                    <div className="modal fade" id="bill" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Hóa đơn</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body table">
                                    <thead>
                                        <tr>
                                            <th>Thức ăn</th>
                                            <th>Số lượng</th>
                                            <th>Giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Salad</td>
                                            <td>{this.props.burger.salad}</td>
                                            <td>{this.props.burger.salad} * {this.props.menu.salad}</td>
                                        </tr>
                                        <tr>
                                            <td>Cheese</td>
                                            <td>{this.props.burger.cheese}</td>
                                            <td>{this.props.burger.cheese} * {this.props.menu.cheese}</td>
                                        </tr>
                                        <tr>
                                            <td>Beef</td>
                                            <td>{this.props.burger.beef}</td>
                                            <td>{this.props.burger.beef} * {this.props.menu.beef}</td>
                                        </tr>
                                    </tbody>
                                    <h3 className="text-right">Tổng tiền: {this.props.total}</h3>
        </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


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

export default connect(mapStateToProps)(Bill)
