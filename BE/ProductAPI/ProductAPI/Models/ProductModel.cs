using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductAPI.Models
{
    public class ProductModel
    {
        public int idPro { get; set; }
        public double price { get; set; }
        public string title { get; set; }
        public string image01 { get; set; }
        public string image02 { get; set; }
        public string categorySlug { get; set; }
        public string colors { get; set; }
        public string slug { get; set; }
        public string size { get; set; }
        public string description { get; set; }
    }
}
