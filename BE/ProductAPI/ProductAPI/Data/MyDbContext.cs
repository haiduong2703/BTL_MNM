using Microsoft.EntityFrameworkCore;

namespace ProductAPI.Data
{
    public class MyDbContext:DbContext
    {
        public MyDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<DonHang> DonHangs { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<TaiKhoan> TaiKhoans { get; set; }
        public DbSet<ChiTietDonHang> ChiTietDonHangs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChiTietDonHang>()
                .HasKey(c => new { c.MaDH, c.idPro });
        }
    }
}
