using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SocialMediaProject.Models
{
    public class Comment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CommentId { get; set; }
        public string CommentDetails { get; set; } = string.Empty;

        [ForeignKey("Post")]
        public int PostId { get; set; }
    }
}
