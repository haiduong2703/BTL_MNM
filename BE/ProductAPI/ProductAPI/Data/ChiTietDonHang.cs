using System.ComponentModel.DataAnnotations;

namespace ProductAPI.Data
{
    public class ChiTietDonHang
    {
        public int SoLuong { get; set; }
        public double DonGia { get; set; }
        public int MaDH { get; set; }
        public DonHang DonHang { get; set; }
        public int idPro { get; set; }
        public Product Product { get; set; }
    }
}
