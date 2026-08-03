
 class Theatre {
    theatreName: string;
    screenNumber: number;
    showTime: string;
    availableSeats: number;

    constructor(
        theatreName: string,
        screenNumber: number,
        showTime: string,
        availableSeats: number
    ) {
        this.theatreName = theatreName;
        this.screenNumber = screenNumber;
        this.showTime = showTime;
        this.availableSeats = availableSeats;
    }

    
    checkSeatAvailability(): boolean {
        return this.availableSeats > 0;
    }
    decreaseSeat(): void {
        if (this.availableSeats > 0) {
            this.availableSeats--;
        }
    }
}

const theatre = new Theatre(
    "PVR Cinemas",
    3,
    "06:30 PM",
    100
);

console.log("Theatre Name:", theatre.theatreName);
console.log("Screen Number:", theatre.screenNumber);
console.log("Show Time:", theatre.showTime);
console.log("Available Seats:", theatre.availableSeats);
console.log("Seat Available:", theatre.checkSeatAvailability());


// Decrease seat after successful booking
theatre.decreaseSeat();

console.log("Available Seats After Booking:", theatre.availableSeats);