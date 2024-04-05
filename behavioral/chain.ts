export { Account, Master, Paypal, Qiwi };

class Account {
	balance: number;
	incomer: Account | undefined;
	name: string;

	constructor() {
		this.balance = 0;
		this.name = "";
	}

	pay(orderPrice: number) {
		if (this.canPay(orderPrice)) {
			console.log(`Paid ${orderPrice} using ${this.name}`);

		} else if (this.incomer) {
			console.log(`Cannot pay using ${this.name}`);
			this.incomer.pay(orderPrice)

		} else {
			console.log('Unfortunately, not enough money');
		}
	}

	canPay(amount: number): boolean {
		return this.balance >= amount;
	}

	setNext(account: Account) {
		this.incomer = account;
	}
};


class Master extends Account {
	name: string;
	balance: number;
	constructor(balance: number) {
		super();
		this.name = "Master Card";
		this.balance = balance;
    }
};

class Paypal extends Account {
	name: string;
	balance: number;
	constructor(balance: number) {
		super();
		this.name = "Paypal";
		this.balance = balance;
    }
};

class Qiwi extends Account {
	name: string;
	balance: number;
	constructor(balance: number) {
		super();
		this.name = "Qiwi";
		this.balance = balance;
	}
};