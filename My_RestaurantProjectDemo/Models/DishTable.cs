using System;
using System.Collections.Generic;

namespace My_RestaurantProjectDemo.Models
{
    public partial class DishTable
    {
        public DishTable()
        {
            CategoryDishes = new HashSet<CategoryDish>();
        }

        public int DishId { get; set; }
        public string DishName { get; set; } = null!;
        public string? DishDescription { get; set; }
        public decimal DishPrice { get; set; }
        public string? DishImage { get; set; }
        public string Nature { get; set; } = null!;
        public bool IsDeleted { get; set; }

        public virtual ICollection<CategoryDish> CategoryDishes { get; set; }
    }
}
