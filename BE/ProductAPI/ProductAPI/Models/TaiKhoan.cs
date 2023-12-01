namespace ProductAPI.Models
{
    public class TaiKhoan
    {
        public int Ma { get; set; }
        public string HoTen { get; set; }   
        public string SDT { get; set; }
        public string DiaChi { get; set; }
        public string Email { get; set; }
        public string TenDangNhap { get; set; } 
        public string MatKhau { get; set; }
        public int Role { get; set; }
        public bool Status { get; set; }
    }
}
