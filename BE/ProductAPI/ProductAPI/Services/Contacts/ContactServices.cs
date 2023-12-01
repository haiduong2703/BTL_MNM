using ProductAPI.Data;
using ProductAPI.Models;

namespace ProductAPI.Services.Contacts
{
    public class ContactServices : IContactServices
    {
        private readonly MyDbContext _context;
        public ContactServices(MyDbContext context) {
            _context = context;
        }
        public bool CreateContact(ContactModel ct)
        {
            var ContactNew = new Contact()
            {
                NameKH = ct.NameKH,
                PhoneKH = ct.PhoneKH,
                AddressKH = ct.AddressKH,
                EmailKH = ct.EmailKH,
                RequestKH = ct.RequestKH,
            };
            _context.Contacts.Add(ContactNew);
            _context.SaveChanges();
            return true;
        }
    }
}
