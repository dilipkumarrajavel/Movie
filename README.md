# Movie Ticket Booking System - TypeScript OOP Frame

## Goal

Create a Movie Ticket Booking System using TypeScript.

This project should manage customer details, movie details, theatre details, seat booking, ticket pricing, membership discount, coupon discount, GST, snacks amount, final payable amount, and booking status.

Only the project frame is given here. Write the actual TypeScript code inside the mentioned files.

---

## Main Requirements

- Store customer information:
  - Customer Name
  - Customer ID
  - Membership Type: Regular, Silver, Gold, Platinum
- Store movie information:
  - Movie Name
  - Movie ID
  - Language
  - Genre
  - Duration
  - Movie Rating
- Store theatre information:
  - Theatre Name
  - Screen Number
  - Show Time
  - Available Seats
- Store ticket information:
  - Ticket ID
  - Seat Number
  - Ticket Type: Normal, Premium, VIP
  - Ticket Price
  - Number of Tickets
- Calculate booking amount:
  - Ticket Subtotal
  - Membership Discount
  - Coupon Discount
  - Snacks Amount
  - GST Amount
  - Final Payable Amount
- Apply membership discount:
  - Platinum: 20%
  - Gold: 15%
  - Silver: 10%
  - Regular: No Discount
- Validate coupon code:
  - Valid Coupon: Apply additional discount
  - Invalid Coupon: Continue without coupon discount
- Check seat availability:
  - Available Seats > 0: Continue Booking
  - Available Seats <= 0: House Full
- Generate ticket invoice:
  - Customer Details
  - Movie Details
  - Theatre Details
  - Ticket Details
  - Discount Amount
  - GST Amount
  - Snacks Amount
  - Final Payable Amount
  - Booking Status

---

## Main Concepts To Cover

- Variables
- Primitive data types: `string`, `number`, `boolean`
- Non-primitive data types: `object`, `array`
- Type inference
- Type assertion
- Template literals
- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators
- Unary operators
- Ternary operator
- `if`
- `if...else`
- `else if`
- Nested `if`
- `switch`
- OOP concepts:
  - Class
  - Object
  - Constructor
  - Encapsulation
  - Inheritance
  - Abstraction
  - Polymorphism
  - Interface
  - Method overriding
  - Access modifiers: `public`, `private`, `protected`

---

## Suggested Folder Structure

```text
movie-ticket-booking-system/
|
+-- src/
|   |
|   +-- models/
|   |   +-- Customer.ts
|   |   +-- Movie.ts
|   |   +-- Theatre.ts
|   |   +-- Ticket.ts
|   |   +-- Booking.ts
|   |   +-- TicketInvoice.ts
|   |
|   +-- interfaces/
|   |   +-- Bookable.ts
|   |   +-- Discountable.ts
|   |   +-- Taxable.ts
|   |
|   +-- services/
|   |   +-- SeatService.ts
|   |   +-- BookingService.ts
|   |   +-- DiscountService.ts
|   |   +-- CouponService.ts
|   |   +-- SnackService.ts
|   |   +-- TaxService.ts
|   |   +-- BillingService.ts
|   |
|   +-- utils/
|   |   +-- constants.ts
|   |
|   +-- main.ts
|
+-- package.json
+-- tsconfig.json
+-- README.md
```

---

## File Frames With Comments

### `src/models/Customer.ts`

```ts
// Scenario: Store customer name, customer ID, and membership type.
// Requirement: Customer details must include name, ID, and membership type.
// Requirement: Membership type should support Regular, Silver, Gold, and Platinum.
// Requirement: Customer data should use encapsulation where needed.
// Concepts: class, object, constructor, string type, access modifiers, encapsulation.

// Create Customer class frame here.
// Add properties: customerName, customerId, membershipType.
// Add constructor frame to initialize customer details.
// Add getter method frames if private properties are used.
// Export Customer class to use it in Booking.ts and BillingService.ts.
```

---

### `src/models/Movie.ts`

```ts
// Scenario: Store movie name, movie ID, language, genre, duration, and rating.
// Requirement: Movie details must include name, ID, language, genre, duration, and rating.
// Requirement: Duration should be stored as number value.
// Requirement: Movie rating can be used to display age guidance if needed.
// Concepts: class, constructor, primitive types, type inference.

// Create Movie class frame here.
// Add properties: movieName, movieId, language, genre, duration, rating.
// Add constructor frame to initialize movie details.
// Export Movie class to use it in Booking.ts and main.ts.
```

---

### `src/models/Theatre.ts`

```ts
// Scenario: Store theatre name, screen number, show time, and available seats.
// Requirement: Theatre details must include theatre name, screen number, show time, and available seats.
// Requirement: Available seats should be checked before booking.
// Requirement: Available seats should decrease after successful booking.
// Concepts: class, constructor, number type, comparison operator, unary operator.

// Create Theatre class frame here.
// Add properties: theatreName, screenNumber, showTime, availableSeats.
// Add method frame to decrease available seats using unary operator.
// Export Theatre class to use it in SeatService.ts and Booking.ts.
```

---

### `src/models/Ticket.ts`

```ts
// Scenario: Store ticket ID, seat number, ticket type, ticket price, and number of tickets.
// Requirement: Ticket type should support Normal, Premium, and VIP.
// Requirement: Ticket subtotal should be ticket price multiplied by number of tickets.
// Requirement: Ticket type can decide price using switch if needed.
// Concepts: class, constructor, switch, arithmetic operators, number type.

// Create Ticket class frame here.
// Add properties: ticketId, seatNumber, ticketType, ticketPrice, numberOfTickets.
// Add method frame to calculate ticket subtotal.
// Export Ticket class to use it in Booking.ts and BillingService.ts.
```

---

### `src/models/Booking.ts`

```ts
// Scenario: Connect customer, movie, theatre, and ticket details in one booking.
// Requirement: Booking must store customer object, movie object, theatre object, and ticket object.
// Requirement: Booking status should depend on seat availability.
// Requirement: Booking should continue only if available seats are enough.
// Concepts: object composition, non-primitive data type, nested if.

// Import Customer from ../models/Customer.
// Import Movie from ../models/Movie.
// Import Theatre from ../models/Theatre.
// Import Ticket from ../models/Ticket.
// Create Booking class frame here.
// Add bookingId and bookingDate.
// Export Booking class to use it in BookingService.ts and BillingService.ts.
```

---

### `src/models/TicketInvoice.ts`

```ts
// Scenario: Generate complete movie ticket invoice.
// Requirement: Invoice must display customer, movie, theatre, ticket, discount, GST, snacks, final amount, and booking status.
// Requirement: Invoice output should be formatted using template literals.
// Concepts: template literals, class, method, formatted output.

// Import Booking from ../models/Booking.
// Create TicketInvoice class frame here.
// Add method frame to display ticket invoice.
// Export TicketInvoice class to use it in main.ts.
```

---

### `src/interfaces/Bookable.ts`

```ts
// Scenario: Define common booking structure.
// Requirement: BookingService should follow one booking method format.
// Requirement: Booking method should return booking status.
// Concepts: interface, abstraction, method signature.

// Create Bookable interface frame here.
// Add method signature frame for booking ticket.
// Export Bookable interface to use it in BookingService.ts.
```

---

### `src/interfaces/Discountable.ts`

```ts
// Scenario: Define common discount calculation structure.
// Requirement: DiscountService and CouponService should follow one discount calculation format.
// Requirement: Discount calculation should return discount amount.
// Concepts: interface, abstraction, polymorphism, method signature.

// Create Discountable interface frame here.
// Add method signature frame for calculating discount.
// Export Discountable interface to use it in DiscountService.ts.
```

---

### `src/interfaces/Taxable.ts`

```ts
// Scenario: Define GST calculation structure.
// Requirement: TaxService should follow one GST calculation method format.
// Requirement: GST should be calculated after discounts are reduced.
// Concepts: interface, abstraction, method signature, arithmetic operator.

// Create Taxable interface frame here.
// Add method signature frame for calculating GST.
// Export Taxable interface to use it in TaxService.ts.
```

---

### `src/services/SeatService.ts`

```ts
// Scenario: Check seat availability before booking.
// Requirement: If available seats are greater than or equal to number of tickets, continue booking.
// Requirement: If seats are not enough, booking status should be House Full or Seats Not Available.
// Requirement: Seat validation should happen before coupon and billing calculations.
// Concepts: if condition, comparison operator, boolean value.

// Import Theatre from ../models/Theatre.
// Import Ticket from ../models/Ticket.
// Create SeatService class frame here.
// Add method frame to check available seats.
// Export SeatService class to use it in BookingService.ts and BillingService.ts.
```

---

### `src/services/BookingService.ts`

```ts
// Scenario: Confirm booking after seat availability check.
// Requirement: Use nested if to check seats first, then continue booking.
// Requirement: If seats are available, reduce available seat count.
// Requirement: Return Confirmed or Failed booking status.
// Concepts: nested if, logical operators, assignment operators, interface implementation.

// Import Booking from ../models/Booking.
// Import SeatService from ./SeatService.
// Import Bookable from ../interfaces/Bookable.
// Create BookingService class frame here.
// Add method frame to confirm booking.
// Export BookingService class to use it in main.ts.
```

---

### `src/services/DiscountService.ts`

```ts
// Scenario: Apply membership discount based on customer membership type.
// Requirement: Platinum members should get 20% discount.
// Requirement: Gold members should get 15% discount.
// Requirement: Silver members should get 10% discount.
// Requirement: Regular customers should get no discount.
// Requirement: Use switch to select or display membership discount percentage.
// Requirement: Use else-if to apply correct membership discount.
// Concepts: switch, else-if, arithmetic operators, logical conditions.

// Import Customer from ../models/Customer.
// Import Discountable from ../interfaces/Discountable.
// Create DiscountService class frame here.
// Add method frame to calculate membership discount.
// Export DiscountService class to use it in BillingService.ts.
```

---

### `src/services/CouponService.ts`

```ts
// Scenario: Validate coupon code and apply additional discount.
// Requirement: Store valid coupon codes in an array.
// Requirement: If coupon is valid, apply coupon discount.
// Requirement: If coupon is invalid, continue without coupon discount.
// Requirement: Use type assertion if coupon input needs conversion to string.
// Concepts: array, if...else, logical operators, type assertion, boolean value.

// Create CouponService class frame here.
// Add valid coupon list using array.
// Add method frame to validate coupon code.
// Add method frame to calculate coupon discount.
// Export CouponService class to use it in BillingService.ts.
```

---

### `src/services/SnackService.ts`

```ts
// Scenario: Add snacks amount to ticket bill if customer selected snacks.
// Requirement: If snacks are selected, add snacks amount.
// Requirement: If snacks are not selected, snacks amount should be 0.
// Requirement: Use ternary operator to decide snacks amount.
// Concepts: ternary operator, boolean value, arithmetic operator.

// Create SnackService class frame here.
// Add method frame to calculate snacks amount.
// Export SnackService class to use it in BillingService.ts.
```

---

### `src/services/TaxService.ts`

```ts
// Scenario: Calculate GST after discounts and snacks amount.
// Requirement: GST should be calculated after membership and coupon discounts.
// Requirement: GST percentage should come from constants.ts.
// Requirement: GST amount should be added before final payable amount is generated.
// Concepts: arithmetic operators, assignment operators, constants, interface implementation.

// Import Taxable from ../interfaces/Taxable.
// Create TaxService class frame here.
// Add method frame to calculate GST amount.
// Export TaxService class to use it in BillingService.ts.
```

---

### `src/services/BillingService.ts`

```ts
// Scenario: Calculate ticket subtotal, discounts, snacks amount, GST, and final payable amount.
// Requirement: Validate seat availability before billing.
// Requirement: Calculate ticket subtotal using price and number of tickets.
// Requirement: Apply membership discount before coupon discount.
// Requirement: Add snacks amount if selected.
// Requirement: Calculate GST after discounts.
// Requirement: Return all billing values needed by TicketInvoice.ts.
// Concepts: nested if, arithmetic operators, assignment operators, service imports, object return.

// Import Booking from ../models/Booking.
// Import DiscountService from ./DiscountService.
// Import CouponService from ./CouponService.
// Import SnackService from ./SnackService.
// Import TaxService from ./TaxService.
// Import SeatService from ./SeatService.
// Create BillingService class frame here.
// Add method frame to calculate final payable amount.
// Export BillingService class to use it in main.ts.
```

---

### `src/utils/constants.ts`

```ts
// Scenario: Store fixed movie ticket booking values.
// Requirement: Store GST percentage as reusable constant.
// Requirement: Store membership discount percentages in one object.
// Requirement: Store valid coupon codes in one array.
// Requirement: Store default snacks price if needed.
// Concepts: variables, constants, primitive types, non-primitive types, type inference.

// Create GST_PERCENTAGE constant frame.
// Create MEMBERSHIP_DISCOUNTS object frame.
// Create VALID_COUPONS array frame.
// Create DEFAULT_SNACKS_AMOUNT constant frame.
// Export all constants to service files.
```

---

### `src/main.ts`

```ts
// Scenario: This is the starting page of the movie ticket booking system.
// Requirement: Create customer object with name, ID, and membership type.
// Requirement: Create movie object with movie details.
// Requirement: Create theatre object with show and seat details.
// Requirement: Create ticket object with seat and price details.
// Requirement: Create booking object by connecting customer, movie, theatre, and ticket.
// Requirement: Call booking service and billing service.
// Requirement: Display final ticket invoice.
// Concepts: imports, object creation, method calls, template literal output flow.

// Import Customer from ./models/Customer.
// Import Movie from ./models/Movie.
// Import Theatre from ./models/Theatre.
// Import Ticket from ./models/Ticket.
// Import Booking from ./models/Booking.
// Import BookingService from ./services/BookingService.
// Import BillingService from ./services/BillingService.
// Import TicketInvoice from ./models/TicketInvoice.

// Create customer object frame.
// Create movie object frame.
// Create theatre object frame.
// Create ticket object frame.
// Create booking object frame.
// Call booking confirmation method frame.
// Call billing calculation method frame.
// Display final ticket invoice using template literals.
```

---

## Import Flow

```text
main.ts
|
+-- imports Customer.ts
+-- imports Movie.ts
+-- imports Theatre.ts
+-- imports Ticket.ts
+-- imports Booking.ts
+-- imports BookingService.ts
+-- imports BillingService.ts
+-- imports TicketInvoice.ts

BookingService.ts
|
+-- imports Booking.ts
+-- imports SeatService.ts
+-- imports Bookable.ts

BillingService.ts
|
+-- imports Booking.ts
+-- imports DiscountService.ts
+-- imports CouponService.ts
+-- imports SnackService.ts
+-- imports TaxService.ts
+-- imports SeatService.ts

Service files
|
+-- import interfaces from interfaces/
+-- import models from models/
+-- import constants from utils/constants.ts
```

---

## OOP Concept Mapping

| OOP Concept | Where To Use |
|---|---|
| Class | `Customer`, `Movie`, `Theatre`, `Ticket`, `Booking`, `TicketInvoice`, service files |
| Object | `main.ts` while creating customer, movie, theatre, ticket, booking, invoice |
| Constructor | Model files like `Customer.ts`, `Movie.ts`, `Theatre.ts`, `Ticket.ts` |
| Encapsulation | Private fields with getter methods in model classes |
| Inheritance | Optional: create base `User` class and extend it in `Customer` |
| Abstraction | Interfaces: `Bookable`, `Discountable`, `Taxable` |
| Polymorphism | Different discount calculation behavior for membership and coupon |
| Interface | `interfaces/` folder |
| Method Overriding | Optional: override discount method in different discount classes |
| Access Modifiers | Use `public`, `private`, and `protected` inside model classes |

---

## Program Flow

```text
1. Start from main.ts.
2. Create customer details.
3. Create movie details.
4. Create theatre and show details.
5. Create ticket details.
6. Check seat availability.
7. If seats are available, continue booking.
8. Calculate ticket subtotal.
9. Apply membership discount.
10. Validate coupon code.
11. If coupon is valid, apply coupon discount.
12. Add snacks amount if selected.
13. Calculate GST amount.
14. Calculate final payable amount.
15. Generate ticket invoice.
16. Display booking status.
```

---

## Sample Ticket Invoice Output Frame

```text
========== MOVIE TICKET BOOKING INVOICE ==========

Customer Name:
Customer ID:
Membership Type:

Movie Name:
Movie Language:
Movie Genre:
Movie Rating:

Theatre Name:
Screen Number:
Show Time:
Seat Number:
Ticket Type:
Number of Tickets:

Ticket Subtotal:
Membership Discount:
Coupon Discount:
Snacks Amount:
GST Amount:

Final Payable Amount:
Booking Status:

==================================================
```

---

## Notes For Students

- First create all folders and `.ts` files.
- Add comments first, then write code step by step.
- Start coding from model files, then service files, then `main.ts`.
- Test one scenario at a time.
- Do not mix invoice display logic with billing calculation logic.
- Keep each class responsible for one main task.

---

## Basic VS Code Installation And Run Setup

### Step 1: Install Required Software

```bash
# Install VS Code from the official website.
# Install Node.js because TypeScript runs using Node.js environment.
# After installing Node.js, npm will also be available.
```

### Step 2: Open Project In VS Code

```bash
# Open VS Code.
# Create one folder named movie-ticket-booking-system.
# Open that folder inside VS Code.
# Create the src folder and all .ts files based on the folder structure above.
```

### Step 3: Initialize Node Project

```bash
# Open VS Code terminal.
# Run this command to create package.json.
npm init -y
```

### Step 4: Install TypeScript

```bash
# Install TypeScript as a development dependency.
npm install typescript --save-dev
```

### Step 5: Create TypeScript Config File

```bash
# Create tsconfig.json file automatically.
npx tsc --init
```

### Step 6: Compile TypeScript Files

```bash
# Convert TypeScript code into JavaScript code.
npx tsc
```

### Step 7: Run The Program

```bash
# After compiling, run the generated JavaScript main file.
# The output file path may change based on tsconfig settings.
node src/main.js
```

### Optional: Run TypeScript Directly

```bash
# Install ts-node to run TypeScript files directly without manual compile step.
npm install ts-node --save-dev

# Run main.ts directly.
npx ts-node src/main.ts
```

### Useful VS Code Tips

```bash
# Keep the terminal open inside VS Code.
# Use Ctrl + ` to open or close the VS Code terminal.
# Save every file before running the program.
# Fix one error at a time from top to bottom.
# Start with main.ts only after creating model and service files.
```

