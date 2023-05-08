using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using My_RestaurantProjectDemo.Models;

namespace My_RestaurantProjectDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogInController : ControllerBase
    {
        private readonly My_RestaurantContext _context;

        public LogInController(My_RestaurantContext context)
        {
            _context = context;
        }

        /*// GET: api/LogIn
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LogIn>>> GetLogIns()
        {
            if (_context.LogIns == null)
            {
                return NotFound();
            }
            return await _context.LogIns.ToListAsync();
        }

        // GET: api/LogIn/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LogIn>> GetLogIn(string id)
        {
            if (_context.LogIns == null)
            {
                return NotFound();
            }
            var logIn = await _context.LogIns.FindAsync(id);

            if (logIn == null)
            {
                return NotFound();
            }

            return logIn;
        }

        // PUT: api/LogIn/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLogIn(string id, LogIn logIn)
        {
            if (id != logIn.UserId)
            {
                return BadRequest();
            }

            _context.Entry(logIn).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LogInExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }*/

        // POST: api/LogIn
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        [HttpPost]
        public async Task<ActionResult<bool>> PostLogIn(LogIn logIn)
        {
            if (_context.LogIns == null)
            {
                return Problem("Entity set 'My_RestaurantContext.LogIns'  is null.");
            }
            if(LogInExists(logIn.UserId)==true)
            {
                LogIn matcheduser = _context.LogIns.Find(logIn.UserId);
                if(matcheduser.Password == logIn.Password)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            return false;
        }

       /* // DELETE: api/LogIn/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLogIn(string id)
        {
            if (_context.LogIns == null)
            {
                return NotFound();
            }
            var logIn = await _context.LogIns.FindAsync(id);
            if (logIn == null)
            {
                return NotFound();
            }

            _context.LogIns.Remove(logIn);
            await _context.SaveChangesAsync();

            return NoContent();
        }*/

        private bool LogInExists(string id)
        {
            return (_context.LogIns?.Any(e => e.UserId == id)).GetValueOrDefault();
        }
    }
}
