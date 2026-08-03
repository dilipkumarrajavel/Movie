class CouponService {

    validCoupons: string[] = [
        "MOVIE10",
        "CINEMA20",
        "BOOK15"
    ];


    validateCoupon(couponCode: unknown): boolean {

        const code = couponCode as string;

        if (this.validCoupons.includes(code)) {
            return true;
        }
        else {
            return false;
        }
    }

    calculateCouponDiscount(
        ticketAmount: number,
        couponCode: unknown
    ): number {

        const code = couponCode as string;

        if (this.validCoupons.includes(code) && code === "MOVIE10") {
            return ticketAmount * 10 / 100;
        }
        else if (this.validCoupons.includes(code) && code === "CINEMA20") {
            return ticketAmount * 20 / 100;
        }
        else if (this.validCoupons.includes(code) && code === "BOOK15") {
            return ticketAmount * 15 / 100;
        }
        else {
            return 0;
        }
    }
}

const couponService = new CouponService();
const couponCode: unknown = "MOVIE10";
const ticketAmount = 1000;
const isValid = couponService.validateCoupon(couponCode);
const couponDiscount =
    couponService.calculateCouponDiscount(
        ticketAmount,
        couponCode
    );

console.log("Coupon Code:", couponCode);
console.log("Coupon Valid:", isValid);
console.log("Ticket Amount:", ticketAmount);
console.log("Coupon Discount:", couponDiscount);
console.log("Final Amount:", ticketAmount - couponDiscount);