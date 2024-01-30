using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Place> Places { get; set; }
        public DbSet<GraphNode> GraphNodes { get; set; }
        public DbSet<Trip> Trips { get; set; }
		public DbSet<BusTrip> busTrips { get; set; }

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

    }
}
