using Microsoft.AspNetCore.Mvc;
using SocialMediaProject.Models;

namespace SocialMediaProject.Repository.PostService
{
    public interface IPostService
    {
        public Task<List<Post>> GetPosts();
        public  Task<IEnumerable<Buffertable1>> GetPostsbyDate();
        public Task<object> GetMax();

    }

}
