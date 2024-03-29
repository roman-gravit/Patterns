export { BmwProducer };


function BmwProducer(kind: string) {
	return  kind==="sport"
		? SportCarFactory
		: FamilyCarFactory;
}

function SportCarFactory(): Z4Sport {
	return new Z4Sport();
}

function FamilyCarFactory():I3Family {
	return new I3Family();
}

class Z4Sport {
	constructor() {}
	info(): string {
		return "Z4 is a sport car";
	}	
}

class I3Family {
	constructor() {}
	info(): string {
		return "I3Family is a family car";
	}	
}