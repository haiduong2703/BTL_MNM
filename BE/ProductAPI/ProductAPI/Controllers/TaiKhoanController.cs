using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductAPI.Data;
using ProductAPI.Models;
using ProductAPI.Services.TaiKhoans;

namespace ProductAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaiKhoanController : ControllerBase
    {
        private readonly ITaiKhoanServices _taiKhoanServices;
        public TaiKhoanController(ITaiKhoanServices taiKhoanServices)
        {
            _taiKhoanServices = taiKhoanServices;
        }
        [HttpPost]
        public IActionResult CreateUser(TaiKhoanModels tk)
        {
            _taiKhoanServices.createUser(tk);
            return Ok("Thêm mới sản phẩm thành công");
        }
        [HttpGet]
        public IActionResult GetUser(string username)
        {
            return Ok(_taiKhoanServices.getUser(username));
        }
    }
}
