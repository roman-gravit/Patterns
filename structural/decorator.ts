export { CarWithAutoPilot, TeslaCar, BmwCar };


class Car {
	model: string;
	price: number;

	constructor() {
		this.model = "Car";
		this.price = 10000;
	}

	GetPrice(): number {
		return this.price;
	}

	GetDescription(): string {
		return this.model;
	}
}

class TeslaCar extends Car {
	model: string;
	price: number;
	constructor() {
		super();
		this.model = "Tesla";
		this.price = 25000;
	}
}

class BmwCar extends Car {
	model: string;
	price: number;

	constructor() {
		super();
		this.model = "Bmw";
		this.price = 30000;
	}
}

/**
 *  No need to change class Car or TeslaCar/BmwCar or create subclasses
 */
class CarWithAutoPilot {
	car: Car; 
	
	constructor(car: Car) {
		this.car = car;
	}

	GetPrice(): number {
		return this.car.GetPrice() + 5000;
	}

	GetDescription(): string {
		return `${this.car.GetDescription()} with autopilot`
	}
}
