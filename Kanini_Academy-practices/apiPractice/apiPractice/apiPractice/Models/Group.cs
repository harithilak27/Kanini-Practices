using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiPractice.Models
{
    public class Group
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int GroupId { get; set; }

        public string? GroupName { get; set; }

        [ForeignKey("Users")]
        public int UserId { get; set; }
        public virtual Users? Users { get; set; }
    }
}
