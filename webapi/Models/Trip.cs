namespace webapi.Models
{
    public class Trip
    {
        public int Id { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public double Distance { get; set; }
        public double Price { get; set; }
        public string DriverPhone { get; set; }

    }
}
