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
    public class MenuTableController : ControllerBase
    {
        private readonly My_RestaurantContext _context;

        public MenuTableController(My_RestaurantContext context)
        {
            _context = context;
        }

        // GET: api/MenuTable
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuTable>>> GetMenuTables()
        {
            if (_context.MenuTables == null)
            {
                return NotFound();
            }
            return await _context.MenuTables.ToListAsync();
        }


        // GET: api/MenuTable/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MenuTable>> GetMenuTable(int id)
        {
            if (_context.MenuTables == null)
            {
                return NotFound();
            }
            var menuTable = await _context.MenuTables.FindAsync(id);

            if (menuTable == null)
            {
                return NotFound();
            }

            return menuTable;
        }

        /*// PUT: api/MenuTable/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMenuTable(int id, MenuTable menuTable)
        {
            if (id != menuTable.MenuId)
            {
                return BadRequest();
            }

            _context.Entry(menuTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuTableExists(id))
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

        // POST: api/MenuTable
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MenuTable>> PostMenuTable(MenuTable menuTable)
        {
            if (_context.MenuTables == null)
            {
                return Problem("Entity set 'My_RestaurantContext.MenuTables'  is null.");
            }
            _context.MenuTables.Add(menuTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMenuTable", new { id = menuTable.MenuId }, menuTable);
        }

        /*// DELETE: api/MenuTable/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuTable(int id)
        {
            if (_context.MenuTables == null)
            {
                return NotFound();
            }
            var menuTable = await _context.MenuTables.FindAsync(id);
            if (menuTable == null)
            {
                return NotFound();
            }

            _context.MenuTables.Remove(menuTable);
            await _context.SaveChangesAsync();

            return NoContent();
        }*/

        private bool MenuTableExists(int id)
        {
            return (_context.MenuTables?.Any(e => e.MenuId == id)).GetValueOrDefault();
        }
    }
}
