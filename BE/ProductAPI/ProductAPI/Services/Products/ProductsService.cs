using ProductAPI.Data;
using ProductAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace ProductAPI.Services.Products
{
    public class ProductsService : IProductsServices
    {
        private readonly MyDbContext _context;

        public ProductsService(MyDbContext context) {
            _context = context;
        }

        public void Create(ProductModel p)
        {
            var product = new Product()
            {
                title = p.title,
                description = p.description,
                image01 = p.image01,
                image02 = p.image02,
                categorySlug = p.categorySlug,
                colors = p.colors,
                slug = p.slug,
                size = p.size,
                price = p.price,
            };
            _context.Products.Add(product);
            _context.SaveChanges();
            
        }

        public List<Product> GetProduct()
        {
            var data = _context.Products.AsQueryable();
            return (data.ToList());
        }

        public Product GetProductBySlug(string slug)
        {
            var sanpham = _context.Products.FirstOrDefault(x=>x.slug.Equals(slug));
            if(sanpham == null)
            {
                return null;
            }
            else
            {
                return sanpham;
            }
        }

        public bool Remove(int id)
        {
            var sanpham = _context.Products.Find(id);
            if (sanpham == null)
            {
                return false;
            }
            _context.Products.Remove(sanpham);
            _context.SaveChanges();
            return true;
        }
    }
}
