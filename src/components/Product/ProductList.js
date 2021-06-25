import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
export default class ProductList extends Component {
    state = {
        productDetail: {
            "maSP": 1,
            "tenSP": "Iphone 11 pro",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "IOS 13",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 999,
            "hinhAnh": "./images/iphone/ip-11-1.jpg"
        },
    }
    productList = [
        {
            "maSP": 1,
            "tenSP": "Iphone 11 pro",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "IOS 13",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 999,
            "hinhAnh": "./images/iphone/ip-11-1.jpg"
        },
        {
            "maSP": 2, 
            "tenSP": "Iphone 12 mini", 
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "MacOS",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 799,
            "hinhAnh": "./images/iphone/ip-12-mini-1.jpg"
        },
        {
            "maSP": 3, 
            "tenSP": "Iphone 12 pro",
            "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
            "heDieuHanh": "Windows",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 1199,
            "hinhAnh": "./images/iphone/ip-12-pro-1.jpg"
        }]
    viewDetail = (product) => {
        this.setState({
            productDetail: product
        })
    }
    render() {
        let productDetail = this.state.productDetail;
        return (
            <div className="container py-5">
                <div className="row">
                    {
                        this.productList.map((item, key) => (
                            <div className="col-4 d-flex" key={key}>
                                <div className="card border-0 justify-content-between">
                                    <img src={item.hinhAnh} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{item.tenSP}</h5>
                                        <p className="card-text">${item.giaBan}</p>
                                        <button className="btn btn-danger w-100 border-0" onClick={
                                            () => this.viewDetail(item)
                                        }>Chi tiết</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <ProductDetail {...productDetail} />
            </div>
        )
    }
}
