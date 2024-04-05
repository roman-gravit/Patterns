export { OnlineStoreCheckout, PayPal, Stripe };

interface PaymentGateway {
    processPayment(amount: number): string;
}


class PayPal implements PaymentGateway {
    processPayment(amount: number): string {
        return(`PayPal: $${amount}`);
    }
}

class Stripe implements PaymentGateway {
    processPayment(amount: number): string {
        return(`Stripe: $${amount}`);
    }
}

abstract class CheckoutSystem {
    protected paymentGateway: PaymentGateway;

    constructor(paymentGateway: PaymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    abstract checkout(amount: number): string;
}

class OnlineStoreCheckout extends CheckoutSystem {
    checkout(amount: number): string {
        console.log('Checking out from online store...');
        return this.paymentGateway.processPayment(amount);
    }
}
