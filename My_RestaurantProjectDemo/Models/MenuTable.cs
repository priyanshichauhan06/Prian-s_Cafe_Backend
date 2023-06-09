﻿using System;
using System.Collections.Generic;

namespace My_RestaurantProjectDemo.Models
{
    public partial class MenuTable
    {
        public MenuTable()
        {
            MenuCategories = new HashSet<MenuCategory>();
        }

        public int MenuId { get; set; }
        public string MenuName { get; set; } = null!;
        public string? MenuDescription { get; set; }
        public string? MenuImage { get; set; }
        public bool IsDeleted { get; set; }

        public virtual ICollection<MenuCategory> MenuCategories { get; set; }
    }
}
