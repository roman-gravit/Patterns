export { Engine, Driver, OnStartCommand, OnSwitchOffCommand };


// 1. We have Driver which know the commands
// 2. We have commands which know about business logic
// 3. Business login depending on command will do action

class Driver {
	command: Command;
	constructor(command: Command) {
		this.command = command;
	}
	execute() {
		this.command.execute();
	}
}

// There is no direct connection berween driver and engine
class Engine {
	state: boolean;
	constructor() {
		this.state = false;
	}

	on(): void {
		this.state = true;
	}

	off(): void {
		this.state = false;
	}

	getState(): boolean {
		return this.state;
	}
}

interface Command {
	execute(): void;
}

class OnStartCommand  implements Command {
	engine: Engine;
	constructor(engine: Engine) {
		this.engine = engine;
	}
	execute() {
		this.engine.on();
	}
}

class OnSwitchOffCommand implements Command {
	engine: Engine;
	constructor(engine: Engine) {
		this.engine = engine;
	}
	execute() {
		this.engine.off();
	}
}