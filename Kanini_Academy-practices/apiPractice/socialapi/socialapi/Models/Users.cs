using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;

namespace ApiPractice.Models
{
    public class Users
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int UserId { get; set; }

        public string?  Name { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public string? Phone { get; set; }

        public virtual ICollection<Posts> Posts { get; set; }

        public virtual ICollection<Comments> Comments { get; set; }

        public virtual ICollection<Group> Groups { get; set; }
    }
}
