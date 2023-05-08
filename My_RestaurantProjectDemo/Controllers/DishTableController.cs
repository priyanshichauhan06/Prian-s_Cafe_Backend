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
    public class DishTableController : ControllerBase
    {
        private readonly My_RestaurantContext _context;

        public DishTableController(My_RestaurantContext context)
        {
            _context = context;
        }

        // GET: api/DishTable
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DishTable>>> GetDishTables()
        {
            if (_context.DishTables == null)
            {
                return NotFound();
            }

            //show only those category which are not deleted
            List<DishTable> dishList = new List<DishTable>();
            foreach (var item in _context.DishTables)
            {
                if (item.IsDeleted == false)
                {
                    dishList.Add(item);
                }
            }
            return dishList;
        }

        // GET: api/DishTable/5
        [HttpGet("dishId={id}")]
        public async Task<ActionResult<DishTable>> GetDishTable(int id)
        {
            if (_context.DishTables == null)
            {
                return NotFound();
            }
            var dishTable = await _context.DishTables.FindAsync(id);

            if (dishTable == null || dishTable.IsDeleted==true)
            {
                return NotFound();
            }

            return dishTable;
        }

        //GET
        [HttpGet("catId={catid}")]
        public async Task<ActionResult<IEnumerable<DishTable>>> GetDish(int catid)
        {
            var matcheddish = _context.CategoryDishes.ToList().FindAll(newmatcheddish => newmatcheddish.IsDeleted==false && newmatcheddish.CategoryId == catid);
            if(matcheddish == null)
            {
                return NotFound();
            }

            var finalList= new List<DishTable>();
            foreach(var dish in _context.DishTables.ToList())
            {
                foreach(var mat in matcheddish)
                {
                    if(mat.DishId == dish.DishId && dish.IsDeleted==false)
                    {
                        finalList.Add(dish);
                    }
                }
            }

            return Ok(finalList);
        }


        // PUT: api/DishTable/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDishTable(int id, DishTable dishTable)
        {
            if (id != dishTable.DishId)
            {
                return BadRequest();
            }

            _context.Entry(dishTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DishTableExists(id))
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

        // POST: api/DishTable
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{catid}")]
        public async Task<ActionResult<DishTable>> PostDishTable(int catid, DishTable dishTable)
        {
            if (_context.DishTables == null)
            {
                return Problem("Entity set 'My_RestaurantContext.DishTables'  is null.");
            }
            _context.DishTables.Add(dishTable);
            await _context.SaveChangesAsync();
            //add catId and DishId in catdish table
            CategoryDish cat=new CategoryDish();
            cat.CategoryId = catid;
            cat.DishId=dishTable.DishId;
            cat.IsDeleted=dishTable.IsDeleted;
            
            _context.CategoryDishes.Add(cat);
            _context.SaveChanges();
            return CreatedAtAction("GetDishTable", new { id = dishTable.DishId }, dishTable);
        }

        // DELETE: api/DishTable/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDishTable(int id)
        {
            if (_context.DishTables == null)
            {
                return NotFound();
            }
            var dish = await _context.DishTables.FindAsync(id);
            if (dish == null && dish.IsDeleted == false )
            {
                return NotFound();
            }

            CategoryDish? catdish= _context.CategoryDishes.ToList().Find(catdish => catdish.DishId == id);
            if (catdish != null)
            {
                catdish.IsDeleted = true;
                _context.CategoryDishes.Update(catdish);
                _context.SaveChanges();
            }
            dish.IsDeleted = true;

            _context.DishTables.Update(dish);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DishTableExists(int id)
        {
            return (_context.DishTables?.Any(e => e.DishId == id)).GetValueOrDefault();
        }
    }
}
