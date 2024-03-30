export { Composite, Engine, Body, Tools };

class Equipment {
	price: number;
	name: string;
	constructor () {
		this.price = 0;
		this.name = "";
	}
	GetPrice() {
		return this.price;
	}

	GetName() {
		return this.name;
	}

	SetName(name: string) {
		this.name = name;
	}

	SetPrice(price: number) {
		this.price = price;
	}
}

class Composite extends Equipment {
	parts: Equipment[];
	constructor () {
		super();
		this.parts = [];
	}

	Add(part: Equipment) {
		this.parts.push(part);
	}

	GetPrice() {
		return this.parts
		    .map(part => part.GetPrice())
			.reduce((a, b)  => a + b);
	}
}


class Engine extends Equipment {
	constructor () {
		super();
		this.SetName("Engine");
		this.SetPrice(900);
	}
}

class Body extends Equipment {
	constructor () {
		super();
		this.SetName("Body");
		this.SetPrice(3000);
	}
}

class Tools extends Equipment {
	constructor () {
		super();
		this.SetName("Tools");
		this.SetPrice(4000);
	}
}
