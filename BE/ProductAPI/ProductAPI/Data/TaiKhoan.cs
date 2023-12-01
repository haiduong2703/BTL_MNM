using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductAPI.Data
{
    public class TaiKhoan
    {
        [Key]
        public int Ma { get; set; }
        [StringLength(200)]
        public string HoTen { get; set; }
        [StringLength(200)]
        public string SDT { get; set; }
        [StringLength(200)]
        public string DiaChi { get; set; }
        [StringLength(200)]
        public string Email { get; set; }
        [StringLength(200)]
        public string TenDangNhap { get; set; }
        [StringLength(200)]
        public string MatKhau { get; set; }
        [StringLength(200)]
        public int Role { get; set; }
        [StringLength(200)]
        public bool Status { get; set; }
        public virtual ICollection<DonHang> DonHangs { get; set; }
    }
}
