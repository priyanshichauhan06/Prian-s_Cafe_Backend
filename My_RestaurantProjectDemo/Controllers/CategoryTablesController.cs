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
    public class CategoryTablesController : ControllerBase
    {
        private readonly My_RestaurantContext _context;

        public CategoryTablesController(My_RestaurantContext context)
        {
            _context = context;
        }

        // GET: api/CategoryTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryTable>>> GetCategoryTables()
        {
          if (_context.CategoryTables == null)
          {
              return NotFound();
          }

          //show only those category which are not deleted
          List<CategoryTable> categoryList=new List<CategoryTable>();
            foreach(var category in _context.CategoryTables)
            {
                if(category.IsDeleted==false)
                {
                    categoryList.Add(category);
                }            
            }
            return categoryList;
        }

        // GET: api/CategoryTables/5
        [HttpGet("catId={id}")]
        public async Task<ActionResult<CategoryTable>> GetCategoryTable(int id)
        {
            if (_context.CategoryTables == null)
            {
                return NotFound();
            }
            var categoryTable = await _context.CategoryTables.FindAsync(id);

            if (categoryTable == null || categoryTable.IsDeleted == true)
            {
                return NotFound();
            }
            return categoryTable;
        }

        // GET: api/CategoryTables/5
        [HttpGet("menuId={menuid}")]
        public async Task<ActionResult<IEnumerable<CategoryTable>>> GetCategory(int menuid)
        {
            var matchedcategory =  _context.MenuCategories.ToList().FindAll(newmatchedcategory => newmatchedcategory.MenuId == menuid && newmatchedcategory.IsDeleted == false);
            
            if (matchedcategory == null )
            {
                return NotFound();
            }

            var finalList = new List<CategoryTable>();
            foreach(var category in _context.CategoryTables.ToList())
            {
                foreach(var mat in matchedcategory)
                {
                    if(mat.CategoryId == category.CategoryId && category.IsDeleted == false)
                    {
                        finalList.Add(category);
                    }
                }
            }
            List<CategoryTable> categoryList = new List<CategoryTable>();
            foreach (var category in _context.CategoryTables)
            {
                if (category.IsDeleted == false)
                {
                    categoryList.Add(category);
                }
            }
            return Ok(finalList);
        }

        // PUT: api/CategoryTables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoryTable(int id, CategoryTable categoryTable)
        {
            if (id != categoryTable.CategoryId)
            {
                return BadRequest();
            }

            _context.Entry(categoryTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryTableExists(id))
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

        // POST: api/CategoryTables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{menuid}")]
        public async Task<ActionResult<CategoryTable>> PostCategoryTable(int menuid, CategoryTable categoryTable)
        {
          if (_context.CategoryTables == null)
          {
              return Problem("Entity set 'My_RestaurantContext.CategoryTables'  is null.");
          }
            _context.CategoryTables.Add(categoryTable);
            await _context.SaveChangesAsync();

            //adding data in menucategory table also
            MenuCategory menuCat = new MenuCategory();
            menuCat.CategoryId = categoryTable.CategoryId;
            menuCat.MenuId = menuid;
            menuCat.IsDeleted = categoryTable.IsDeleted;

            _context.MenuCategories.Add(menuCat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoryTable", new { id = categoryTable.CategoryId }, categoryTable);
        }

        // DELETE: api/CategoryTables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategoryTable(int id)
        {
            if (_context.CategoryTables == null)
            {
                return NotFound();
            }
            var category = await _context.CategoryTables.FindAsync(id);
            if (category == null || category.IsDeleted)
            {
                return NotFound();
            }
            
            List<CategoryDish> categoryDishes1=await _context.CategoryDishes.ToListAsync();
            List<int?> newDish= new List<int?>();   
            foreach (var catDish in categoryDishes1)
            {
                if (catDish.CategoryId == id && catDish.IsDeleted == false)
                {
                    newDish.Add(catDish.DishId);
                    category.IsDeleted = true;
                    _context.CategoryDishes.Update(catDish);
                    _context.SaveChanges();
                }
            }

            List<DishTable> dishes= await _context.DishTables.ToListAsync();
            dishes.ForEach(dish =>
            {
                if (newDish.Contains(dish.DishId))
                {
                    dish.IsDeleted = true;
                    _context.DishTables.Update(dish);
                    _context.SaveChanges();
                }
            });

            MenuCategory? menucat = _context.MenuCategories.ToList().Find(menucat => menucat.CategoryId == id);
            if (menucat != null)
            {
                menucat.IsDeleted = true;
                _context.MenuCategories.Update(menucat);
                _context.SaveChanges();
            }
            category.IsDeleted = true;

            _context.CategoryTables.Update(category);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryTableExists(int id)
        {
            return (_context.CategoryTables?.Any(e => e.CategoryId == id)).GetValueOrDefault();
        }
    }
}
