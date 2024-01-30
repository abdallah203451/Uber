using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class datetimenotstring : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StartTime",
                table: "busTrips",
                newName: "StartDate");

            migrationBuilder.RenameColumn(
                name: "EndTime",
                table: "busTrips",
                newName: "EndDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StartDate",
                table: "busTrips",
                newName: "StartTime");

            migrationBuilder.RenameColumn(
                name: "EndDate",
                table: "busTrips",
                newName: "EndTime");
        }
    }
}
