using System;
using System.Collections.Generic;

namespace My_RestaurantProjectDemo.Models
{
    public partial class CategoryDish
    {
        public int CategoryDishId { get; set; }
        public int? CategoryId { get; set; }
        public int? DishId { get; set; }
        public bool IsDeleted { get; set; }

        public virtual CategoryTable? Category { get; set; }
        public virtual DishTable? Dish { get; set; }
    }
}
