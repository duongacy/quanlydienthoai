import React from 'react'

export default function ProductDetail(props) {
    return (
        <div className="row">
            <div className="col-lg-4 py-4">
                <img src={props.hinhAnh} className="w-100" />
            </div>
            <div className="col-lg-8 py-4">
                <h2>Thông số kĩ thuật</h2>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Màn hình</th>
                            <td>{props.manHinh}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hệ điều hành</th>
                            <td>{props.heDieuHanh}</td>
                        </tr>
                        <tr>
                            <th scope="row">Camera trước</th>
                            <td>{props.cameraTruoc}</td>
                        </tr>
                        <tr>
                            <th scope="row">Camera sau</th>
                            <td>{props.cameraSau}</td>
                        </tr>
                        <tr>
                            <th scope="row">ROM</th>
                            <td>{props.rom}</td>
                        </tr>
                        <tr>
                            <th scope="row">RAM</th>
                            <td>{props.ram}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}
