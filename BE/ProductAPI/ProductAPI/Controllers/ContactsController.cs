using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductAPI.Models;
using ProductAPI.Services.Contacts;

namespace ProductAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactServices _contactServices;
        public ContactsController (IContactServices contactServices)
        {
            _contactServices = contactServices;
        }
        [HttpPost]
        public IActionResult CreateContact(ContactModel ct)
        {
            _contactServices.CreateContact(ct);
            return Ok("Thêm sản phẩm thành công");
        }
    }
}
