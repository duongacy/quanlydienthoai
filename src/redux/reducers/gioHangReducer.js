// chứa 1 state khởi tạo(mặc định)
const initState = [
]
// action này là 1 đối tượng chứa:
// + type (bắt buộc)
// + 1 tham số khác nếu có
export const gioHangReducer = (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case "THEM_SAN_PHAM":
            let { sanPhamThem } = action;
            let maSanPhamThem = sanPhamThem.maSP;
            if (state.some(item => item.maSP === maSanPhamThem)) {
                let spCoSan = state.find(item => item.maSP === maSanPhamThem);
                spCoSan.soLuong += 1;
            } else {
                sanPhamThem.soLuong = 1;
                state = [...state, sanPhamThem];
            }

            break;
        case "XOA_SAN_PHAM":
            console.log("Xoa san pham");
            let { maSPXoa } = action;
            state = state.filter(item => item.maSP !== maSPXoa);
            break;
        case "TANG_SAN_PHAM_GIO_HANG":
            let { maSPTang } = action;
            let spTang = state.find(item => item.maSP === maSPTang);
            console.log(spTang);
            spTang.soLuong += 1;
            break;

        case "GIAM_SAN_PHAM_GIO_HANG":
            let { maSPGiam } = action;
            let spGiam = state.find(item => item.maSP === maSPGiam);
            if (spGiam.soLuong === 1) {
                state = state.filter(item => item.maSP !== maSPGiam)
            } else {
                spGiam.soLuong -= 1;
            }
            break;

        default:
            break;
    }
    return [...state]
}
// sẽ export ra hàm xử lý khi nhận về action
