using ProductAPI.Data;
using ProductAPI.Models;
using System.Linq;

namespace ProductAPI.Services.TaiKhoans
{
    public class TaiKhoanServices : ITaiKhoanServices
    {
        private readonly MyDbContext _context;

        public TaiKhoanServices(MyDbContext context)
        {
            _context = context;
        }
        public bool createUser(TaiKhoanModels tk)
        {
            TaiKhoan tkNew = new TaiKhoan()
            {
                HoTen=tk.HoTen,
                TenDangNhap=tk.TenDangNhap,
                MatKhau=tk.MatKhau,
                SDT=tk.SDT,
                Email=tk.Email,
                DiaChi=tk.DiaChi,
                Role=tk.Role,
            };
            _context.TaiKhoans.Add(tkNew);
            _context.SaveChanges();
            return true;

        }

        public TaiKhoan getUser(string username)
        {
            return _context.TaiKhoans.SingleOrDefault(x => x.TenDangNhap == username);
        }
    }
}
