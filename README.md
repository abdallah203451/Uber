# Uber Website

## Overview
This project is a comprehensive ride booking system designed to facilitate the process of requesting trips, dynamically calculating prices, and reserving seats on bus trips. It is built using a combination of .Net Web API, C#, Angular, Entity Framework, SQL Server, Bootstrap, and incorporates various algorithms and design patterns to ensure efficiency and scalability.

## Technologies Used
- **.Net Web API**
- **C#**
- **Angular**
- **Entity Framework**
- **SQL Server**
- **Bootstrap**
- **Algorithms**: Dijkstra's algorithm
- **Design Patterns**

## Features
- **Dynamic Pricing**: Prices are calculated based on distance and trip type, ensuring fair and accurate pricing for riders.
- **Shortest Path Calculation**: Utilizes Dijkstra's algorithm to determine the shortest path between locations, enhancing route efficiency.
- **Driver Availability**: Finds the closest available driver to the rider's location.
- **Booking System**: Riders can reserve seats on bus trips added by drivers.

## Implementation Details
### Requesting Trips
Riders can request trips through the system, which will dynamically calculate the price based on the distance to be traveled and the type of trip (e.g., standard, premium).

### Shortest Path Algorithm
The system employs Dijkstra's algorithm to compute the shortest path between the rider's starting point and destination. This ensures that the route taken is the most efficient, saving time and cost.

### Closest Driver Detection
By leveraging the shortest path calculations, the system can also determine and assign the closest available driver to the rider's location.

### Booking System
A booking system has been developed allowing riders to reserve seats on bus trips. Drivers can add available trips, and riders can easily book their seats, ensuring a smooth and organized process.

## Getting Started
### Prerequisites
- .NET SDK
- Node.js
- SQL Server

### Installation
1. **Clone the repository**
    ```bash
    git clone https://github.com/abdallah203451/Uber.git
    ```
2. **Backend Setup**
    - Navigate to the backend project directory
    - Restore dependencies and build the project
    ```bash
    cd backend
    dotnet restore
    dotnet build
    ```
    - Update the database
    ```bash
    dotnet ef database update
    ```
    - Run the project
    ```bash
    dotnet run
    ```
3. **Frontend Setup**
    - Navigate to the frontend project directory
    - Install dependencies
    ```bash
    cd frontend
    npm install
    ```
    - Run the project
    ```bash
    ng serve
    ```
4. **Access the application**
    - Open your browser and navigate to `http://localhost:4200`

## Usage
- **Request a Trip**: Input your starting location and destination to request a trip.
- **View Available Trips**: See a list of available bus trips added by drivers.
- **Book a Seat**: Reserve a seat on a selected bus trip.


