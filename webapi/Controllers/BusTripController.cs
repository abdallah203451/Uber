using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Implementations;
using webapi.Migrations;
using webapi.Models;

namespace webapi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BusTripController : ControllerBase
	{
		private readonly ApplicationDbContext _Context;

		public BusTripController(ApplicationDbContext appDbContext)
		{
			_Context = appDbContext;
		}

		[HttpGet("allBusTrips")]
		public async Task<ActionResult<IEnumerable<Trip>>> AllBusTrips()
		{

			List<Models.BusTrip> busTrip = await _Context.busTrips.ToListAsync();
			return Ok(busTrip);
		}

		[HttpPost("Create")]
		public async Task<IActionResult> CreateTrip([FromBody] Models.BusTrip trip_param)
		{
            //string from,string to, double distance, double price, DateTime date, DateTime startTime, DateTime endTime, int numOfReservation
            Models.BusTrip busTrip = trip_param;

			//busTrip.From = trip_param.From;
			//busTrip.To = trip_param.To;
			//busTrip.Distance = trip_param.Distance;
			//busTrip.Price = trip_param.Price;
			//busTrip.Date = trip_param.Date;
			//busTrip.StartTime = trip_param.StartTime;
			//busTrip.EndTime = trip_param.EndTime;
			//busTrip.NumOfReservation = 0;

			List<GraphNode> nodes = await _Context.GraphNodes.ToListAsync();
			Dictionary<string, int> idPlaces = new Dictionary<string, int>();
			for (int i = 0; i < nodes.Count(); i++)
			{
				idPlaces.Add(nodes[i].Node, nodes[i].Id);
			}

			List<Place> placesList = await _Context.Places.ToListAsync();
			int V = nodes.Count();
			Graph g = new Graph(V);
			for (int i = 0; i < placesList.Count(); i++)
			{
				int x = idPlaces[placesList[i].From] - 1;
				g.AddEdge(idPlaces[placesList[i].From] - 1, idPlaces[placesList[i].To] - 1, placesList[i].distance);
			}

			GraphNode fromNode = await _Context.GraphNodes.FirstOrDefaultAsync(u => u.Node == busTrip.From);
			GraphNode toNode = await _Context.GraphNodes.FirstOrDefaultAsync(u => u.Node == busTrip.To);
			double distance = g.ShortestPath(fromNode.Id - 1, toNode.Id - 1);
			busTrip.Distance=distance;
			busTrip.NumOfReservation = 0;

            await _Context.busTrips.AddAsync(busTrip);
			await _Context.SaveChangesAsync();
			return Ok(new
			{
				Message = "Trip Created Successfully"
			});
		}

		[HttpDelete("remove")]
		public async Task<IActionResult> RemoveTrip(int id)
		{
            Models.BusTrip busTrip = await _Context.busTrips.FirstOrDefaultAsync(u => u.Id == id);
			_Context.Remove(busTrip);
			_Context.SaveChanges();
			return Ok();
		}


		[HttpPut("UpdateReservationNum")]
		public async Task<IActionResult> UpdateReservationNum(int id)
		{
			Models.BusTrip busTrip = await _Context.busTrips.FirstOrDefaultAsync(u => u.Id == id);
			busTrip.NumOfReservation++;
			_Context.Update(busTrip);
			_Context.SaveChanges();
			return Ok();
		}
	}
}
