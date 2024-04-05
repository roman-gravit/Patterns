export { PercentageDiscount, FlatDiscount, NoDiscount, Product };

interface DiscountStrategy {
    applyDiscount(price: number): number;
}


class PercentageDiscount implements DiscountStrategy {
    constructor(private percent: number) {}

    applyDiscount(price: number): number {
        return price - (price * this.percent / 100);
    }
}

class FlatDiscount implements DiscountStrategy {
    constructor(private discount: number) {}

    applyDiscount(price: number): number {
        return price - this.discount;
    }
}

class NoDiscount implements DiscountStrategy {
    applyDiscount(price: number): number {
        return price;
    }
}


class Product {
    constructor(private price: number, private discountStrategy: DiscountStrategy) {}

    setDiscountStrategy(strategy: DiscountStrategy): void {
        this.discountStrategy = strategy;
    }

    getPriceAfterDiscount(): number {
        return this.discountStrategy.applyDiscount(this.price);
    }
}