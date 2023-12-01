using System.ComponentModel.DataAnnotations;

namespace ProductAPI.Data
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        [StringLength(200)]
        public string NameKH { get; set; }
        [StringLength(200)]
        public string PhoneKH { get; set; }
        [StringLength(200)]
        public string AddressKH { get; set;}
        [StringLength(200)]
        public string EmailKH { get; set;}
        [StringLength(20000)]
        public string RequestKH { get; set;}

    }
}
