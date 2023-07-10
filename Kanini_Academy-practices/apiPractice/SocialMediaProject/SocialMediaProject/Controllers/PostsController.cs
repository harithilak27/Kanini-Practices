using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialMediaProject.Data;
using SocialMediaProject.Models;
using SocialMediaProject.Repository.PostService;

namespace SocialMediaProject.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostService _context;

        public PostsController(IPostService context)
        {
            _context = context;
        }

        // GET: api/Posts
        [HttpGet("GetPosts")]

        public async Task<ActionResult<List<Post>>> GetPosts()
        {
            try
            {
                var item = await _context.GetPosts();
                return Ok(item);
            }
            catch (ArithmeticException ex )
            {
                return NotFound(ex.Message);

            }
        }
        [HttpGet("GetPostsbyDate")]
        public async Task<ActionResult<IEnumerable<Buffertable1>>> GetPostsbyDate()
        {
            var item = await _context.GetPostsbyDate();
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }
        [HttpGet("GetMax")]
        public async Task<ActionResult<object>> GetMax()
        {
            var item = await _context.GetMax();
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }
        /*
                // GET: api/Posts/5
                [HttpGet("{id}")]
                public async Task<ActionResult<Post>> GetPost(int id)
                {
                  if (_context.Posts == null)
                  {
                      return NotFound();
                  }
                    var post = await _context.Posts.FindAsync(id);

                    if (post == null)
                    {
                        return NotFound();
                    }

                    return post;
                }

                // PUT: api/Posts/5
                // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
                [HttpPut("{id}")]
                public async Task<IActionResult> PutPost(int id, Post post)
                {
                    if (id != post.PostId)
                    {
                        return BadRequest();
                    }

                    _context.Entry(post).State = EntityState.Modified;

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!PostExists(id))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }

                    return NoContent();
                }

                // POST: api/Posts
                // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
                [HttpPost]
                public async Task<ActionResult<Post>> PostPost(Post post)
                {
                  if (_context.Posts == null)
                  {
                      return Problem("Entity set 'DataDBContext.Posts'  is null.");
                  }
                    _context.Posts.Add(post);
                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateException)
                    {
                        if (PostExists(post.PostId))
                        {
                            return Conflict();
                        }
                        else
                        {
                            throw;
                        }
                    }

                    return CreatedAtAction("GetPost", new { id = post.PostId }, post);
                }

                // DELETE: api/Posts/5
                [HttpDelete("{id}")]
                public async Task<IActionResult> DeletePost(int id)
                {
                    if (_context.Posts == null)
                    {
                        return NotFound();
                    }
                    var post = await _context.Posts.FindAsync(id);
                    if (post == null)
                    {
                        return NotFound();
                    }

                    _context.Posts.Remove(post);
                    await _context.SaveChangesAsync();

                    return NoContent();
                }

                private bool PostExists(int id)
                {
                    return (_context.Posts?.Any(e => e.PostId == id)).GetValueOrDefault();
                }*/
    }
}
