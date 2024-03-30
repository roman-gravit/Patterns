export { Auto, Engine2, EngineV8, EngineV8Adapter };

class EngineV8Adapter {
	engine: EngineV8;
	constructor(engine: EngineV8) {
		this.engine = engine;
	}

	Engine2Start() {
		this.engine.EngineV8Start();
	}
}

class Auto {
	Start(engine: Engine2) {
		engine.Engine2Start();
	}
}

class Engine2 {
	Engine2Start() {
		console.log("Engine 2.0 - tr-tr-tr");
	}
}

class EngineV8 {
	EngineV8Start() {
		console.log("Engine V8!- wroom - wroom");
	}
}
