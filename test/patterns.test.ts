import { SingletonGlobal, SingletonInst } from "../creational/singleton";
import { TeslaCarPrototype } from "../creational/prototype";
import { CarBuilder } from "../creational/builder"; 
import { BmwFactory, Bmw } from "../creational/factory-method"; 

import { CarWithAutoPilot, TeslaCar as TeslaCar_Decorator, BmwCar as BmwCar_Decorator} from "../structural/decorator"; 
import { Auto, Engine2, EngineV8, EngineV8Adapter } from "../structural/adapter"; 
import { RealSubject, ClientCode, Proxy1 } from "../structural/proxy"; 
import { Leaf, Composite, ClientCode as ClientCode_Comp } from "../structural/composite2";
import { OnlineStoreCheckout, PayPal, Stripe } from "../structural/bridge";

import { Caretaker, creator } from "../behavioral/memento";
import { Iterator} from "../behavioral/iterator";
import { clientCode, ConcreteComponentA, ConcreteComponentB, ConcreteVisitor1, ConcreteVisitor2 } from "../behavioral/visitor";
import { Engine, Driver, OnStartCommand, OnSwitchOffCommand } from "../behavioral/command";
import { Order } from "../behavioral/state";
import { Stock, Investor } from "../behavioral/observer";
import { OnlineAuctioneer, Buyer } from "../behavioral/mediator";

test("Bridge",  () => {

	const payPal = new PayPal();
	const stripe = new Stripe();

	const checkoutWithPayPal = new OnlineStoreCheckout(payPal);
	const result = checkoutWithPayPal.checkout(100);
	expect(result).toEqual("PayPal: $100");

	const checkoutWithStripe = new OnlineStoreCheckout(stripe);
	const result2 = checkoutWithStripe.checkout(150);
	expect(result2).toEqual("Stripe: $150");

});

test("Mediator",  () => {

	const auctioneer = new OnlineAuctioneer();

	const bob = new Buyer("Bob", auctioneer);
	const alice = new Buyer("Alice", auctioneer);
	const mike = new Buyer("Mike", auctioneer);

	// other buyers will receive notification about bids
	bob.makeBid(100); 
	alice.makeBid(150);
	mike.makeBid(150);

});

test("Observer",  () => {

	const stock = new Stock(1500);
	
	const investor1 = new Investor('Alice');
	const investor2 = new Investor('Bob');
	
	stock.AddObserver(investor1);
	stock.AddObserver(investor2);
	
	stock.SetPrice(1550);
});


test("State",  () => {

	const order = new Order();
	expect(order.state.GetStatus()).toEqual("WaitingForPayment");

	order.NextState();
	expect(order.state.GetStatus()).toEqual("Shipping");

	order.NextState();
	expect(order.state.GetStatus()).toEqual("Delivered");
});

test("Command",  () => {

	const engine = new Engine();
	expect(engine.getState()).toEqual(false);
	
	// Start
	const on_start_command = new OnStartCommand(engine);
	let driver = new Driver(on_start_command);
	driver.execute();
	expect(engine.getState()).toEqual(true);
	

	// Stop
	const on_stop_command = new OnSwitchOffCommand(engine);
	driver = new Driver(on_stop_command);
	driver.execute();
	expect(engine.getState()).toEqual(false);
});

test("Visitor",  () => {
	const components = [
		new ConcreteComponentA(),
		new ConcreteComponentB(),
	];

	console.log('The client code works with all visitors via the base Visitor interface:');
	const visitor1 = new ConcreteVisitor1();
	clientCode(components, visitor1);
	console.log('');

	console.log('It allows the same client code to work with different types of visitors:');
	const visitor2 = new ConcreteVisitor2();
	clientCode(components, visitor2);

});

test("Iterator",  () => {
	const components = [
		new ConcreteComponentA(),
		new ConcreteComponentB(),
	];

	console.log('The client code works with all visitors via the base Visitor interface:');
	const visitor1 = new ConcreteVisitor1();
	clientCode(components, visitor1);
	console.log('');

	console.log('It allows the same client code to work with different types of visitors:');
	const visitor2 = new ConcreteVisitor2();
	clientCode(components, visitor2);

});

test("Iterator",  () => {

	const collection = new Iterator(["1", "2", "3", "4"]);

	expect(collection.next()).toEqual("1");
	expect(collection.hasNext()).toEqual(true);

	expect(collection.next()).toEqual("2");
	expect(collection.hasNext()).toEqual(true);

	expect(collection.next()).toEqual("3");
	expect(collection.hasNext()).toEqual(true);

	expect(collection.next()).toEqual("4");
	expect(collection.hasNext()).toEqual(false);
});

test("Caretaker",  () => {

	const careTaker = new Caretaker();

	careTaker.addMemento(creator.save("Hello"));
	careTaker.addMemento(creator.save("Hello world!"));
	careTaker.addMemento(creator.save("Hello world!!!"));

	expect(creator.restore(careTaker.getMemento(1))).toEqual("Hello world!");

});

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


