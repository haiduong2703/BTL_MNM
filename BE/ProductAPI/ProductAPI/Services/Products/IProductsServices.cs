using ProductAPI.Data;
using ProductAPI.Models;
using System;
using System.Collections.Generic;

namespace ProductAPI.Services.Products
{
    public interface IProductsServices
    {
       
        void Create(ProductModel p);
        List<Product> GetProduct();
        Boolean Remove(int id);
        Product GetProductBySlug(string slug);
    }
}
