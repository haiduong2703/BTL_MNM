using System.ComponentModel.DataAnnotations.Schema;

namespace ProductAPI.Models
{
    public class DonHang
    {
        public int MaDH { get; set; }
        public string NgayDat { get; set; }
        public string NgayGiao { get; set; }
        public double TongTien { get; set; }
        public int Status { get; set; }
        public int Ma { get; set; }
    }
}
