export { Caretaker, creator };

class Memento {
	value: any;
	constructor(value: any) {
		this.value = value;
	}
}


const creator = {
	save: (val: any) => new Memento(val),
	restore: (memento: Memento) => memento.value,
};

class Caretaker {
	values: Memento[];

	constructor() {
		this.values = [];
	}

	addMemento(memento: Memento) {
		this.values.push(memento);
	}

	getMemento(index: number) {
		return this.values[index];
	}
};