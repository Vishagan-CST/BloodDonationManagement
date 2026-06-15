using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class DCandidate
    { 


        [Key]
        public int id { get; set; }
        public string fullName { get; set; }
        public string mobile { get; set; }
        public string email { get; set; }
        public string Address { get; set; }
        public int age { get; set; }
        public string bloodGroup { get; set; }
    }
}