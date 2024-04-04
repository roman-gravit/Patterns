export { Order };


interface OrderStatus {
	Next(order: Order): void;
    GetStatus(): string;
}

// steps of delivery
class WaitingForPayment implements  OrderStatus {
    Next(order: Order): void {
        order.SetState(new Shipping());
    }
    GetStatus(): string {
        return "WaitingForPayment";
    }
}

class Shipping implements  OrderStatus {
    Next(order: Order): void {
        order.SetState(new Delivered());
    }
    GetStatus(): string {
        return "Shipping";
    }
}

class Delivered implements  OrderStatus {
    Next(order: Order): void {
        order.SetState(new Delivered());
    }
    GetStatus(): string {
        return "Delivered";
    }
}

class Order {
	state: OrderStatus;
	constructor() {
		this.state = new WaitingForPayment();
	}

    SetState(state: OrderStatus): void {
        this.state = state;
    }

	NextState() {
		this.state.Next(this);
	}

	GetStatus(): string {
        return this.state.GetStatus();;
    }
}