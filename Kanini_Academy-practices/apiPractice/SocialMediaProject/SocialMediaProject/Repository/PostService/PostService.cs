using Microsoft.EntityFrameworkCore;
using SocialMediaProject.Data;
using SocialMediaProject.Models;

namespace SocialMediaProject.Repository.PostService
{
    public class PostService:IPostService
    {
        private DataDBContext _context;
        public PostService(DataDBContext context)
        {
            _context = context;
        }

        public async Task<List<Post>> GetPosts()
        {
            var posts = await _context.Posts.ToListAsync();
            if (posts.Count <= 10)
            {
                throw new ArithmeticException("No posts available");
            }
            return posts;
        }
        public async Task<IEnumerable<Buffertable1>> GetPostsbyDate()
        {
            var obj = await (from t1 in _context.Posts
                            join t2 in _context.Users on t1.UserId equals t2.UserId
                             where t1.Date == new DateTime(2022, 10, 16)
                             select new Buffertable1()
                            { 
                                Id=t1.PostId,
                                Description=t2.UserName,
                                Type=t1.Title,
                                Type2=t2.UserEmail
                            }).ToListAsync() ;
           
            return obj;
        }
        public async Task<object> GetMax()
        {
            var ans = _context.Posts.Max(p => p.PostId);
            return ans;
        }

    }
}
