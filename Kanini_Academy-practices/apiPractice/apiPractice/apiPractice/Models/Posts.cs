using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiPractice.Models
{
    public class Posts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int PostId { get; set; }

        [ForeignKey("Users")]
        public int UserId { get; set; }
        public virtual Users? Users { get; set; }

        public string? Content { get; set; }

        [Column(TypeName = "Date"), DisplayFormat(DataFormatString = "{dd/MM/yyyy}")]
        public DateTime Date { get; set; }

        public ICollection<Comments>? Comments { get; set; }
    }
}
