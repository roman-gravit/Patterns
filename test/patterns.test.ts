import { SingletonGlobal, SingletonInst } from "../creational/singleton";
import { TeslaCarPrototype } from "../creational/prototype";
import { CarBuilder } from "../creational/builder"; 
import { BmwFactory, Bmw } from "../creational/factory-method"; 

import { CarWithAutoPilot, TeslaCar as TeslaCar_Decorator, BmwCar as BmwCar_Decorator} from "../structural/decorator"; 
import { Auto, Engine2, EngineV8, EngineV8Adapter } from "../structural/adapter"; 
import { RealSubject, ClientCode, Proxy1 } from "../structural/proxy"; 
import { Leaf, Composite, ClientCode as ClientCode_Comp } from "../structural/composite2";

test("Composite",  () => {
		/**
		 * This way the client code can support the simple leaf components...
		 */
		const simple = new Leaf();
		console.log('Client: I\'ve got a simple component:');
		ClientCode_Comp(simple);
		console.log('');

		/**
		 * ...as well as the complex composites.
		 */
		const tree = new Composite();
		const branch1 = new Composite();
		branch1.add(new Leaf());
		branch1.add(new Leaf());
		const branch2 = new Composite();
		branch2.add(new Leaf());
		tree.add(branch1);
		tree.add(branch2);
		console.log('Client: Now I\'ve got a composite tree:');
		ClientCode_Comp(tree);
		console.log('');

});

test("Proxy",  () => {
	console.log('Client: Executing the client code with a real subject:');
	const realSubject = new RealSubject();
	ClientCode(realSubject);
	
	console.log('');
	
	console.log('Client: Executing the same client code with a proxy:');
	const proxy = new Proxy1(realSubject);
	ClientCode(proxy);	
});

test("Adapter",  () => {
	const my_car = new Auto();
	const old_engine = new Engine2();

	my_car.Start(old_engine);

	const my_car1 = new Auto();
	const new_engine = new EngineV8();
	const v8_adapter = new EngineV8Adapter(new_engine);
	my_car1.Start(v8_adapter);

	// const my_car2 = new Auto();
	// const new_engine8 = new EngineV8();
	// my_car.Start(new_engine8); ERROR!

});

test("Decorator",  () => {
	const tesla = new TeslaCar_Decorator();
	const car_with_pilot_tesla = new CarWithAutoPilot(tesla);
	console.log(car_with_pilot_tesla.GetDescription());

	const bmw = new BmwCar_Decorator();
	const car_with_pilot_bmw = new CarWithAutoPilot(bmw);
	console.log(car_with_pilot_bmw.GetDescription());
});

test("FactoryMethod",  () => {
	const factory = new BmwFactory();
	const x3 = factory.create("x5");
	const x5 = factory.create("x3");
	expect(x3).toBeInstanceOf(Bmw);
	expect(x5).toBeInstanceOf(Bmw);
});

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

test("Prototype",  () => {
	const proto_car = new TeslaCarPrototype(10000, "black", true);

	// Cloning from proto we create exact models 
	const car1 = proto_car.clone();
	car1.price = 110000;

	const car2 = proto_car.clone();
	car2.interior = "green";
}); 

test("Builder",  () => {
	const my_car = new CarBuilder().AddAutoPilot(true).AddParkTronic(true).build();
	console.log(my_car);
}); 

// atricles
// https://refactoring.guru/design-patterns/composite/typescript/example#lang-features
// https://sourcemaking.com/design_patterns/composite


