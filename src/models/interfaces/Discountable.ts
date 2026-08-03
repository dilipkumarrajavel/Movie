class DiscountService {

    getDiscountPercentage(membershipType: string): number {

        switch (membershipType) {
            case "Platinum":
                return 20;

            case "Gold":
                return 15;

            case "Silver":
                return 10;

            case "Regular":
                return 0;

            default:
                return 0;
        }
    }

    calculateDiscount(
        ticketAmount: number,
        membershipType: string
    ): number {

        let discountPercentage = 0;

        if (membershipType === "Platinum") {
            discountPercentage = 20;
        }
        else if (membershipType === "Gold") {
            discountPercentage = 15;
        }
        else if (membershipType === "Silver") {
            discountPercentage = 10;
        }
        else {
            discountPercentage = 0;
        }

        return ticketAmount * discountPercentage / 100;
    }
}

const discountService = new DiscountService();
const membershipType = "Gold";
const ticketAmount = 1000;

const discountPercentage =
    discountService.getDiscountPercentage(membershipType);

const discountAmount =
    discountService.calculateDiscount(
        ticketAmount,
        membershipType
    );

console.log("Membership Type:", membershipType);
console.log("Ticket Amount:", ticketAmount);
console.log("Discount Percentage:", discountPercentage + "%");
console.log("Discount Amount:", discountAmount);
console.log("Final Amount:", ticketAmount - discountAmount);