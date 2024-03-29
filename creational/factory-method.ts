export { BmwFactory, Bmw };


class BmwFactory {
	// In the case of many similar type this method 
	// will be huge and hard to maintain
	create(type: string): Bmw {
		if(type === "x5") {
			return new Bmw(type, 108000, 300);
		}
		if(type === "x3") {
			return new Bmw(type, 90000, 250);
		}
		return new Bmw("x6", 190000, 350);
	}

}

class Bmw {
	model: string;
	price: number;
	maxSpeed: number;
	constructor(model: string, price: number, max_speed: number) {
		this.model = model;
		this.price = price;
		this.maxSpeed = max_speed;
	}
}