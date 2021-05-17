using System.Collections.Generic;
using API.Context;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LivrosController : ControllerBase
    {
        private readonly LivrosDbContext _context;
        public LivrosController(LivrosDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Livro>> GetAll()
        {
            return _context.Livros.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Livro> Get(int id)
        {
            var livro = _context.Livros.Find(id);

            if(livro == null) return NotFound();
            
            return livro;
        }

        [HttpPost("")]
        public ActionResult Create(Livro livro)
        {
            _context.Livros.Add(livro);
            _context.SaveChanges();

            return CreatedAtAction("GetAll", new {id = livro.Id }, livro);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Livro livro)
        {
            if(id != livro.Id) return BadRequest();

            _context.Entry(livro).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LivroExists(id)) return NotFound();

                throw;
            }

            return NoContent();
        }
        
        [HttpDelete("{id}")]
        public ActionResult<Livro> DeleteLivro(int id)
        {
            var livro = _context.Livros.Find(id);
            if(livro == null) return NotFound();

            _context.Livros.Remove(livro);
            _context.SaveChanges();
            
            return livro;
        }

        private bool LivroExists(int id)
        {
            return _context.Livros.Any(e => e.Id == id);
        }

    }
}