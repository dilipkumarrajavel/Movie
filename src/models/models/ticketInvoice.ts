
 class Ticket {
    ticketId: number;
    seatNumber: number;
    ticketType: "Normal" | "Premium" | "VIP";
    ticketPrice: number;
    numberOfTickets: number;

    constructor(
        ticketId: number,
        seatNumber: number,
        ticketType: "Normal" | "Premium" | "VIP",
        ticketPrice: number,
        numberOfTickets: number
    ) {
        this.ticketId = ticketId;
        this.seatNumber = seatNumber;
        this.ticketType = ticketType;
        this.ticketPrice = ticketPrice;
        this.numberOfTickets = numberOfTickets;
    }
    calculateTicketSubtotal(): number {
        return this.ticketPrice * this.numberOfTickets;
    }
}

const ticket = new Ticket(
    1001,
    15,
    "Premium",
    250,
    2
);


// Console Output
console.log("Ticket ID:", ticket.ticketId);
console.log("Seat Number:", ticket.seatNumber);
console.log("Ticket Type:", ticket.ticketType);
console.log("Ticket Price:", ticket.ticketPrice);
console.log("Number of Tickets:", ticket.numberOfTickets);
console.log("Ticket Subtotal:", ticket.calculateTicketSubtotal());