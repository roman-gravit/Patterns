export { Iterator };

class Iterator<T> {
	elements: T[];
	index: number;

	constructor(elements: Array<T>) {
		this.elements =elements;
		this.index = 0;
	}

	next(): T {
		return this.elements[this.index++];		
	}

	hasNext(): boolean {
		return this.index < this.elements.length;
	}
}

