import { SingletonGlobal, SingletonInst } from "../creational/singleton";
import { TeslaCarPrototype } from "../creational/prototype";
import { CarBuilder } from "../creational/builder"; 

test("SingletonGlobal",  () => {
	const singleton1 = new SingletonGlobal();
	const singleton2= new SingletonGlobal();
	expect(singleton2).toEqual(singleton1);
}); 

test("SingletonInst",  () => {
	const singleton1 = SingletonInst.GetInstance();
	const singleton2 = SingletonInst.GetInstance();
	expect(singleton2).toEqual(singleton1);
}); 

test("SingletonInst",  () => {
	const proto_car = new TeslaCarPrototype(10000, "black", true);

	// Cloning from proto we create exact models 
	const car1 = proto_car.clone();
	car1.price = 110000;

	const car2 = proto_car.clone();
	car2.interior = "green";
}); 

test("SingletonInst",  () => {
	const my_car = new CarBuilder().AddAutoPilot(true).AddParkTronic(true).build();
	console.log(my_car);
}); 


