using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductAPI.Data
{
    public class Product
    {
        [Key]
        public int idPro { get; set; }
        public double price { get; set; }   
        [Required]
        [StringLength(200)]
        public string title { get; set; }
        [StringLength(200)]
        public string image01 { get; set; }
        [StringLength(200)]
        public string image02 { get; set; }
        [StringLength(200)]
        public string categorySlug { get; set; }
        [StringLength(200)]
        public string colors { get; set; }
        [StringLength(200)]
        public string slug { get; set; }
        [StringLength(200)]
        public string size { get; set; }
        [MaxLength]
        public string description { get; set; }
        public virtual ICollection<ChiTietDonHang> ChiTietDonHangs { get; set; }
    }
}
