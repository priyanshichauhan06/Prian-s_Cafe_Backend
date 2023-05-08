using Microsoft.EntityFrameworkCore;
using My_RestaurantProjectDemo.Models;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<My_RestaurantContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("My_Restaurant_DB")));

builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();


}

app.UseCors();
app.UseCors(
 builder =>
 {
     builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
 }




 );

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
