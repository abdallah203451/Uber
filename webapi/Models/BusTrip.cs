using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace webapi.Models
{
	public class BusTrip
	{
		public int Id { get; set; }
		public string From { get; set; }
		public string To { get; set; }
		public double Distance { get; set; }
		public double Price { get; set; }
		public DateTime Date { get; set; }
		public int NumOfReservation { get; set; }
	}
}
