using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductAPI.Models;
using ProductAPI.Services.Products;

namespace ProductAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsServices _ProductService;

        public ProductsController(IProductsServices ProductService)
        {
            _ProductService = ProductService;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_ProductService.GetProduct());
        }
        [HttpGet("slug")]
        public IActionResult GetProductBySlug(string slug)
        {
            return Ok(_ProductService.GetProductBySlug(slug));
        }
        [HttpPost]
        public IActionResult Create(ProductModel p)
        {
            _ProductService.Create(p);
            return Ok("Thêm thành công sản phẩm");
        }
        [HttpDelete("id")]
        public IActionResult Remove (int id)
        {
            return Ok(_ProductService.Remove(id));
        }
    }
}
