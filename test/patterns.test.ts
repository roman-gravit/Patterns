import { SingletonGlobal, SingletonInst } from "../creational/singleton";


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