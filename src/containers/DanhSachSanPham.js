import GioHang from "./GioHang";
import SanPham from "./SanPham";

const DanhSachSanPham = () => {
    const productList = [
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
            "hinhAnh": "./images/iphone/ip-12-mini-2.jpg"
        }]
    return (
        <div className="container py-5">
            <div className="row py-3">
            <div className="mb-2 text-end">
                <GioHang />
            </div>
                {productList.map((item, key) => (
                    <SanPham sanPham={item} key={key} />
                ))}
            </div>
        </div>
    )
}

export default DanhSachSanPham;
