using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;


namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DCandidateController : ControllerBase
    {
        private readonly DonationDBContext _context;
        public DCandidateController(DonationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCandidate>>> GetDCandidates()
        {
            return await _context.DCandidates.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DCandidate>> GetDCandidate(int id)
        {
            var dCandidate = await _context.DCandidates.FindAsync(id);
            if (dCandidate == null)
            {
                return NotFound();
            }
            return dCandidate;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<DCandidate>> PutCandidate(int id, DCandidate dCandidate)
        {  
            dCandidate.id=id;
            _context.Entry(dCandidate).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return dCandidate;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<DCandidate>> DeleteCandidate(int id)
        {
            var dCandidate = await _context.DCandidates.FindAsync(id);
            if (dCandidate == null)
            {
                return NotFound();
            }
            _context.DCandidates.Remove(dCandidate);
            await _context.SaveChangesAsync();
            return dCandidate;
        }

        [HttpPost]
        public async Task<ActionResult<DCandidate>> PostDCandidate(DCandidate dCandidate)
        {
            _context.DCandidates.Add(dCandidate);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetDCandidate", new { id = dCandidate.id }, dCandidate);
        }
    }
}