using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace My_RestaurantProjectDemo.Models
{
    public partial class My_RestaurantContext : DbContext
    {
        public My_RestaurantContext()
        {
        }

        public My_RestaurantContext(DbContextOptions<My_RestaurantContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CategoryDish> CategoryDishes { get; set; } = null!;
        public virtual DbSet<CategoryTable> CategoryTables { get; set; } = null!;
        public virtual DbSet<DishTable> DishTables { get; set; } = null!;
        public virtual DbSet<LogIn> LogIns { get; set; } = null!;
        public virtual DbSet<MenuCategory> MenuCategories { get; set; } = null!;
        public virtual DbSet<MenuTable> MenuTables { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=M5387503\\SQLEXPRESS;Database=My_Restaurant;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CategoryDish>(entity =>
            {
                entity.ToTable("Category_Dish");

                entity.Property(e => e.CategoryDishId).HasColumnName("CategoryDishID");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.DishId).HasColumnName("DishID");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.CategoryDishes)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Category___Categ__0F624AF8");

                entity.HasOne(d => d.Dish)
                    .WithMany(p => p.CategoryDishes)
                    .HasForeignKey(d => d.DishId)
                    .HasConstraintName("FK__Category___DishI__10566F31");
            });

            modelBuilder.Entity<CategoryTable>(entity =>
            {
                entity.HasKey(e => e.CategoryId)
                    .HasName("PK__Category__19093A2B59596FE1");

                entity.ToTable("Category_table");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.CategoryDescription)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryImage)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DishTable>(entity =>
            {
                entity.HasKey(e => e.DishId)
                    .HasName("PK__Dish_tab__18834F70478BBB7E");

                entity.ToTable("Dish_table");

                entity.Property(e => e.DishId).HasColumnName("DishID");

                entity.Property(e => e.DishDescription)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.DishImage)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.DishName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DishPrice).HasColumnType("decimal(8, 2)");

                entity.Property(e => e.Nature)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<LogIn>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__LogIn__1788CCACDA821753");

                entity.ToTable("LogIn");

                entity.Property(e => e.UserId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("UserID");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<MenuCategory>(entity =>
            {
                entity.ToTable("Menu_Category");

                entity.Property(e => e.MenuCategoryId).HasColumnName("MenuCategoryID");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.MenuId).HasColumnName("MenuID");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.MenuCategories)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Menu_Cate__Categ__0B91BA14");

                entity.HasOne(d => d.Menu)
                    .WithMany(p => p.MenuCategories)
                    .HasForeignKey(d => d.MenuId)
                    .HasConstraintName("FK__Menu_Cate__MenuI__0A9D95DB");
            });

            modelBuilder.Entity<MenuTable>(entity =>
            {
                entity.HasKey(e => e.MenuId)
                    .HasName("PK__Menu_tab__C99ED250DF2FF7CF");

                entity.ToTable("Menu_table");

                entity.Property(e => e.MenuId).HasColumnName("MenuID");

                entity.Property(e => e.MenuDescription)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.MenuImage)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.MenuName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
