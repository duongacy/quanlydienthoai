import { connect } from "react-redux";
import React, { Component } from 'react';
import { Button, Modal, Table, ButtonGroup, Input, InputGroup, FormControl} from 'react-bootstrap';

class GioHang extends Component {
    state = {
        show: false
    }
    // const[show, setShow] = useState(false);

    handleClose = () => {
        this.setState({ show: false });
    };
    handleShow = () => {
        this.setState({ show: true });
    }
    render() {
        // cần props gioHang -> lấy từ stateGioHang
        const { show } = this.state;
        const { gioHang } = this.props;
        return (
            <>
                <Button className="primary" style={{    
                        width: "40px",
                        height: "40px",
                        fontSize: "13px",
                        textAlign: "center"}} onClick={this.handleShow}>
                       <i class="fab fa-opencart"></i>
                </Button>    
                <Modal
                    show={show}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                    onHide={this.handleClose}
                >
                    <Modal.Header>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Các sản phẩm đã đặt
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr className="text-red">
                                <th>#</th>
                                <th><small>Mã sản phẩm</small> </th>
                                <th><small>Tên sản phẩm</small></th>
                                <th><small>Số lượng</small></th>
                                <th><small>Giá bán</small></th>
                                <th><small>Thành tiền</small></th>
                                <th><small>Hành động</small></th>
                            </tr>
                        </thead>
                        <tbody>
                            {gioHang.map((sanPham, key) => (
                                <tr key={key}>
                                    <td><small>{key+1}</small> </td>
                                    <td scope="row"><small>{sanPham.maSP}</small></td>
                                    <td> <small>{sanPham.tenSP}</small> </td>
                                    <td>
                                    <ButtonGroup className="me-2 w-100" aria-label="First group">
                                        <Button className="btn-sm" variant="outline-warning" onClick={() => {
                                            const action = {
                                                type: "GIAM_SAN_PHAM_GIO_HANG",
                                                maSPGiam: sanPham.maSP
                                            }
                                            this.props.dispatch(action)
                                        }}>-</Button>{' '}
                                        <Button className="btn-sm" variant="outline-warning">{sanPham.soLuong}</Button>{' '}
                                        <Button className="btn-sm" variant="outline-warning" onClick={() => {
                                            const action = {
                                                type: "TANG_SAN_PHAM_GIO_HANG",
                                                maSPTang: sanPham.maSP
                                            }
                                            this.props.dispatch(action)
                                        }}>+</Button>
                                    </ButtonGroup>
                                    </td>
                                    <td><small>{sanPham.giaBan}</small></td>
                                    <td><small>{String(Number(sanPham.soLuong) * Number(sanPham.giaBan))}</small></td>
                                    <td>
                                        <Button variant="outline-danger" className="btn-sm" onClick={() => this.props.dispatch({ type: "XOA_SAN_PHAM", maSPXoa: sanPham.maSP })}>
                                            Xóa
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    
                </Modal.Body>
                </Modal>
            </>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return { gioHang: rootReducer.gioHangState }
}

export default connect(mapStateToProps)(GioHang);
