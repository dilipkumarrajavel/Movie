interface Taxable {
    calculateGST(amountAfterDiscount: number): number;
}

class TaxService implements Taxable {

    calculateGST(amountAfterDiscount: number): number {

        const gstRate = 18;

        return amountAfterDiscount * gstRate / 100;
    }
}

const taxService = new TaxService();
const amountAfterDiscount = 850;
const gstAmount =
    taxService.calculateGST(amountAfterDiscount);

console.log("Amount After Discount:", amountAfterDiscount);
console.log("GST Rate: 18%");
console.log("GST Amount:", gstAmount);