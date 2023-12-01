using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductAPI.Data
{
    public class DonHang
    {
        [Key]
        public int MaDH { get; set; }
        [StringLength(200)]
        public string NgayDat { get; set; }
        [StringLength(200)]
        public string NgayGiao { get; set; }
        [StringLength(200)]
        public double TongTien { get; set; }
        [StringLength(200)]
        public int Status { get; set; }
        public int Ma { get; set; }
        [ForeignKey("Ma")]
        public TaiKhoan TaiKhoan { get; set; }
        public virtual ICollection<ChiTietDonHang> ChiTietDonHangs { get; set; }
    }
}
