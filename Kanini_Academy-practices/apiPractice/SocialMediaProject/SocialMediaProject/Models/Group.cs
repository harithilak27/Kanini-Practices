using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SocialMediaProject.Models
{
    public class Group
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int GroupId { get; set; }
        public string GroupName { get; set; } = string.Empty;
        [ForeignKey("User")]
        public int UserId { get; set; }

    }
}
