export { TeslaCarPrototype };

interface Cloneable {
	clone(): Cloneable;
}

class TeslaCarPrototype implements Cloneable {
	price: number;
	interior: string;
	autopilot: boolean;

	constructor(price: number, interior: string, autopilot: boolean) {
		this.price = price;
		this.interior = interior;
		this.autopilot = autopilot;
	}

	clone(): TeslaCarPrototype {
		return new TeslaCarPrototype(this.price, this.interior, this.autopilot);
	}
}