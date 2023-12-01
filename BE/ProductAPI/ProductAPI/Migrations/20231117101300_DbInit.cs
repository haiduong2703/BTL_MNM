using Microsoft.EntityFrameworkCore.Migrations;

namespace ProductAPI.Migrations
{
    public partial class DbInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameKH = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    PhoneKH = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    AddressKH = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    EmailKH = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    RequestKH = table.Column<string>(type: "nvarchar(max)", maxLength: 20000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    idPro = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    price = table.Column<double>(type: "float", nullable: false),
                    title = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    image01 = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    image02 = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    categorySlug = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    colors = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    slug = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    size = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.idPro);
                });

            migrationBuilder.CreateTable(
                name: "TaiKhoans",
                columns: table => new
                {
                    Ma = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HoTen = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    SDT = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    DiaChi = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    TenDangNhap = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    MatKhau = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    Role = table.Column<int>(type: "int", maxLength: 200, nullable: false),
                    Status = table.Column<bool>(type: "bit", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaiKhoans", x => x.Ma);
                });

            migrationBuilder.CreateTable(
                name: "DonHangs",
                columns: table => new
                {
                    MaDH = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NgayDat = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    NgayGiao = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    TongTien = table.Column<double>(type: "float", maxLength: 200, nullable: false),
                    Status = table.Column<int>(type: "int", maxLength: 200, nullable: false),
                    Ma = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DonHangs", x => x.MaDH);
                    table.ForeignKey(
                        name: "FK_DonHangs_TaiKhoans_Ma",
                        column: x => x.Ma,
                        principalTable: "TaiKhoans",
                        principalColumn: "Ma",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ChiTietDonHangs",
                columns: table => new
                {
                    MaDH = table.Column<int>(type: "int", nullable: false),
                    idPro = table.Column<int>(type: "int", nullable: false),
                    SoLuong = table.Column<int>(type: "int", nullable: false),
                    DonGia = table.Column<double>(type: "float", nullable: false),
                    DonHangMaDH = table.Column<int>(type: "int", nullable: true),
                    ProductidPro = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietDonHangs", x => new { x.MaDH, x.idPro });
                    table.ForeignKey(
                        name: "FK_ChiTietDonHangs_DonHangs_DonHangMaDH",
                        column: x => x.DonHangMaDH,
                        principalTable: "DonHangs",
                        principalColumn: "MaDH",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ChiTietDonHangs_Products_ProductidPro",
                        column: x => x.ProductidPro,
                        principalTable: "Products",
                        principalColumn: "idPro",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietDonHangs_DonHangMaDH",
                table: "ChiTietDonHangs",
                column: "DonHangMaDH");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietDonHangs_ProductidPro",
                table: "ChiTietDonHangs",
                column: "ProductidPro");

            migrationBuilder.CreateIndex(
                name: "IX_DonHangs_Ma",
                table: "DonHangs",
                column: "Ma");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChiTietDonHangs");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropTable(
                name: "DonHangs");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "TaiKhoans");
        }
    }
}
