using Microsoft.EntityFrameworkCore;

namespace ApiPractice.Models
{
    public class ScocialContext : DbContext
    {
        public ScocialContext(DbContextOptions<ScocialContext> options) { }

        public DbSet<Users> Users { get; set; }

        public DbSet<Posts> Posts { get; set; }

        public DbSet<Comments> Comments { get; set; }

        public DbSet<Group> Groups { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }


    }

     
}
