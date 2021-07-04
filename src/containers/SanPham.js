import { connect } from 'react-redux';
import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        const { sanPham } = this.props;
        return (
            <div className="col-md-4 d-flex">
                <div className="card border-0 w-100 justify-content-between">
                    <img src={sanPham.hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">{sanPham.tenSP}</h5>
                        <p className="card-text">${sanPham.giaBan}</p>
                        <button className="btn btn-danger text-white rounded-0 border-0 w-100"
                            onClick={() => {
                                const action = { type: "THEM_SAN_PHAM", sanPhamThem: sanPham }
                                this.props.dispatch(action);
                            }}
                        >Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(SanPham);
