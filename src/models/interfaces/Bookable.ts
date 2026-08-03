interface Bookable {


    bookTicket(): string;
}

class BookingService implements Bookable {

    bookTicket(): string {
        return "Booking Confirmed";
    }
}

const bookingService = new BookingService();

console.log("Booking Status:", bookingService.bookTicket());