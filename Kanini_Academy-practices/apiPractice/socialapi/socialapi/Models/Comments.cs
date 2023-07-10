using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiPractice.Models
{
    public class Comments
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CommentId { get; set; }

        public int UserId { get; set; }
        public virtual Users? Users { get; set; }

        public int PostId { get; set; }
        public virtual Posts? Posts { get; set; }

        public string? Comment { get; set; }
    }
}
