using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Numerics;
using webapi.Data;
using webapi.Migrations;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripController : ControllerBase
    {
        private readonly ApplicationDbContext _Context;

        public TripController(ApplicationDbContext appDbContext)
        {
            _Context = appDbContext;
        }

        [HttpGet("trips")]
        public async Task<ActionResult<IEnumerable<Trip>>> DriverTrips(string phone)
        {
            
            List<Trip> trips = await _Context.Trips.Where(u => u.DriverPhone == phone).ToListAsync();
            return Ok(trips);
        }

        [HttpGet("userTrips")]
        public async Task<ActionResult<IEnumerable<Trip>>> UserTrips(string phone)
        {
            List<Trip> trips = await _Context.Trips.Where(u => u.UserPhone == phone).ToListAsync();
            return Ok(trips);
        }

        [HttpDelete("remove")]
        public async Task<IActionResult> RemoveTrip(int id, int cond)
        {
            Trip trip = await _Context.Trips.FirstOrDefaultAsync(u => u.Id == id);
            if (cond == 0)
            {
                string phone = trip.DriverPhone;
                Driver driver = await _Context.Drivers.FirstOrDefaultAsync(s => s.Phone == phone);
                driver.Position = trip.To;
                _Context.Drivers.Update(driver);
                _Context.SaveChanges();
            }
            _Context.Remove(trip);
            _Context.SaveChanges();
            return Ok();
        }
    }
}
