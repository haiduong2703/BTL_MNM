using ProductAPI.Data;
using ProductAPI.Models;

namespace ProductAPI.Services.TaiKhoans
{
    public interface ITaiKhoanServices
    {
        TaiKhoan getUser(string id);
        bool createUser(TaiKhoanModels tk);
    }
}
