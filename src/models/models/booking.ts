class Booking {
    bookingId: number;
    bookingDate: string;
    customer: object;
    movie: object;
    theatre: object;
    ticket: object;
    bookingStatus: string;

    constructor(
        bookingId: number,
        bookingDate: string,
        customer: object,
        movie: object,
        theatre: object,
        ticket: object
    ) {
        this.bookingId = bookingId;
        this.bookingDate = bookingDate;
        this.customer = customer;
        this.movie = movie;
        this.theatre = theatre;
        this.ticket = ticket;
        this.bookingStatus = "Confirmed";
    }
}

const booking = new Booking(
    5001,
    "02-08-2026",
    {
        customerName: "Dilip Kumar",
        customerId: 101,
        membershipType: "Gold"
    },
    {
        movieName: "Leo",
        movieId: 501,
        language: "Tamil",
        genre: "Action"
    },
    {
        theatreName: "PVR Cinemas",
        screenNumber: 3,
        showTime: "06:30 PM",
        availableSeats: 100
    },
    {
        ticketId: 1001,
        seatNumber: 15,
        ticketType: "Premium",
        ticketPrice: 250,
        numberOfTickets: 2
    }
);

console.log("Booking ID:", booking.bookingId);
console.log("Booking Date:", booking.bookingDate);
console.log("Customer:", booking.customer);
console.log("Movie:", booking.movie);
console.log("Theatre:", booking.theatre);
console.log("Ticket:", booking.ticket);
console.log("Booking Status:", booking.bookingStatus);