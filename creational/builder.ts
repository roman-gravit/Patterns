export { CarBuilder };

class CarBuilder {
	car: Car;
	constructor() {
		this.car = new Car();
	}

	AddAutoPilot(autopilot: boolean) {
		this.car.autopilot = autopilot;
		return this;
	}

	AddParkTronic(parktronic: boolean) {
		this.car.parktronic = parktronic;
		return this;
	}

	AddSignal(signaling: boolean) {
		this.car.signaling = signaling;
		return this;
	}

	UpdateEngine(engine: string) {
		this.car.engine = engine;
		return this;
	}

	build(): Car {
		return this.car;
	}		
}

class Car {
	autopilot: boolean;
	parktronic: boolean;
	signaling: boolean;
	engine: string;
	constructor() {
		this.autopilot = false;
		this.parktronic = false;
		this.signaling = false;
		this.engine = "engine";
	}
}