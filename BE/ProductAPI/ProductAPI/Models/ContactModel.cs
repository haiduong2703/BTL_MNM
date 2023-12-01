using System.ComponentModel.DataAnnotations;

namespace ProductAPI.Models
{
    public class ContactModel
    {
        public string NameKH { get; set; }
        public string PhoneKH { get; set; }
        public string AddressKH { get; set; }
        public string EmailKH { get; set; }
        public string RequestKH { get; set; }
    }
}
