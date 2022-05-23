using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApplication2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PensionerController : Controller
    {
        private readonly DbContextClass db;
        public PensionerController(DbContextClass db)
        {
            this.db = db;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var query=from obj in db.Pensioner
                      select obj;
            var data = await query.ToListAsync();
            return Ok(data);
        }
        [HttpGet("{adhaarId}")]
        public async Task<IActionResult> Get(string adhaarId)
        {
            var obj = await db.Pensioner.FindAsync(adhaarId);
            if (obj == null)
                return NotFound();
            return Ok(obj);
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] PensionerModel obj)
        {
            db.Pensioner.Add(obj);
            var result = await db.SaveChangesAsync();
            if (result <= 0)
                return BadRequest("Failed to save data");
            return Ok("Record inserted");
        }
    }
}
