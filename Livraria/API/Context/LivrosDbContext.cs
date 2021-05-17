using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Context
{
    public class LivrosDbContext : DbContext
    {
        public LivrosDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Livro> Livros { get; set; }
    }
}