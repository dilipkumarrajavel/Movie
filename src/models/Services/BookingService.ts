interface Bookable {

    bookTicket(
        availableSeats: number,
        numberOfTickets: number
    ): string;
}

class BookingService implements Bookable {

    bookTicket(
        availableSeats: number,
        numberOfTickets: number
    ): string {

        if (availableSeats >= numberOfTickets) {
            if (numberOfTickets > 0) {
                availableSeats -= numberOfTickets;

                return "Confirmed";
            }
            else {
                return "Failed";
            }

        }
        else {
            return "Failed";
        }
    }
}

const bookingService = new BookingService();
const availableSeats = 50;
const numberOfTickets = 3;

const bookingStatus =
    bookingService.bookTicket(
        availableSeats,
        numberOfTickets
    );

console.log("Available Seats:", availableSeats);
console.log("Number of Tickets:", numberOfTickets);
console.log("Booking Status:", bookingStatus);