#pragma checksum "D:\API\ProductAPI\ProductAPI\Views\TaiKhoans\Edit.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ec4ef8c92431e2e932c3c3dd9afe7f2cfb3cf343"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_TaiKhoans_Edit), @"mvc.1.0.view", @"/Views/TaiKhoans/Edit.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ec4ef8c92431e2e932c3c3dd9afe7f2cfb3cf343", @"/Views/TaiKhoans/Edit.cshtml")]
    #nullable restore
    public class Views_TaiKhoans_Edit : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<ProductAPI.Data.TaiKhoan>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "D:\API\ProductAPI\ProductAPI\Views\TaiKhoans\Edit.cshtml"
  
    ViewData["Title"] = "Edit";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Edit</h1>

<h4>TaiKhoan</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Edit"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <input type=""hidden"" asp-for=""Ma"" />
            <div class=""form-group"">
                <label asp-for=""HoTen"" class=""control-label""></label>
                <input asp-for=""HoTen"" class=""form-control"" />
                <span asp-validation-for=""HoTen"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""SDT"" class=""control-label""></label>
                <input asp-for=""SDT"" class=""form-control"" />
                <span asp-validation-for=""SDT"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""DiaChi"" class=""control-label""></label>
                <input asp-for=""DiaChi"" class=""form-control"" />
                <span asp-validation-for=""DiaChi"" class=");
            WriteLiteral(@"""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Email"" class=""control-label""></label>
                <input asp-for=""Email"" class=""form-control"" />
                <span asp-validation-for=""Email"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""TenDangNhap"" class=""control-label""></label>
                <input asp-for=""TenDangNhap"" class=""form-control"" />
                <span asp-validation-for=""TenDangNhap"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""MatKhau"" class=""control-label""></label>
                <input asp-for=""MatKhau"" class=""form-control"" />
                <span asp-validation-for=""MatKhau"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Role"" class=""control-label""></label>
                <input asp-for=""Role");
            WriteLiteral(@""" class=""form-control"" />
                <span asp-validation-for=""Role"" class=""text-danger""></span>
            </div>
            <div class=""form-group form-check"">
                <label class=""form-check-label"">
                    <input class=""form-check-input"" asp-for=""Status"" /> ");
#nullable restore
#line 53 "D:\API\ProductAPI\ProductAPI\Views\TaiKhoans\Edit.cshtml"
                                                                   Write(Html.DisplayNameFor(model => model.Status));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
                </label>
            </div>
            <div class=""form-group"">
                <input type=""submit"" value=""Save"" class=""btn btn-primary"" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action=""Index"">Back to List</a>
</div>

");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 68 "D:\API\ProductAPI\ProductAPI\Views\TaiKhoans\Edit.cshtml"
      await Html.RenderPartialAsync("_ValidationScriptsPartial");

#line default
#line hidden
#nullable disable
            }
            );
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ProductAPI.Data.TaiKhoan> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
