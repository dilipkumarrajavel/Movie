class SeatService {
    checkSeatAvailability(
        availableSeats: number,
        numberOfTickets: number
    ): boolean {

        if (availableSeats >= numberOfTickets) {
            return true;
        }
        else {
            return false;
        }
    }

    getBookingStatus(
        availableSeats: number,
        numberOfTickets: number
    ): string {

        if (availableSeats >= numberOfTickets) {
            return "Booking Can Continue";
        }
        else {
            return "House Full / Seats Not Available";
        }
    }
}

const seatService = new SeatService();
const availableSeats = 50;
const numberOfTickets = 3;

const seatsAvailable =
    seatService.checkSeatAvailability(
        availableSeats,
        numberOfTickets
    );
const bookingStatus =
    seatService.getBookingStatus(
        availableSeats,
        numberOfTickets
    );

console.log("Available Seats:", availableSeats);
console.log("Number of Tickets:", numberOfTickets);
console.log("Seats Available:", seatsAvailable);
console.log("Booking Status:", bookingStatus);