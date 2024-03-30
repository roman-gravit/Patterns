
/**
 * Just one single method to make car
 */
class ConveerFacade {
	car: Conveer;
	constructor(car: Conveer) {
		this.car = car;
	}

	AssembleCar() {
		this.car.SetBody();
		this.car.SetEngine();
		this.car.SetInterior();
		this.car.SetWheels();
		this.car.AddElectronics();
		this.car.Paint();
	}

	ChangeEngine() {
		this.car.GetEngine();
		this.car.SetEngine();
	}
}

class Conveer {

	GetEngine() {
		console.log("Engine set");
	}
	SetEngine() {
		console.log("Engine set");
	}
	SetBody() {
		console.log("Body set");
	}
	SetInterior() {
		console.log("SetInterior");
	}
	GetInterior() {
		console.log("GetInterior");
	}
	SetWheels() {
		console.log("SetWheels");
	}
	AddElectronics() {
		console.log("AddElectronics");
	}
	Paint() {
		console.log("Car painted");
	}
}