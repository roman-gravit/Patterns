export { Stock, Investor };

interface Observer {
    Update(price: number): void;
}

class Investor implements Observer {
    constructor(private name: string) {}

    Update(price: number): void {
        console.log(`${this.name} notified of new stock price: $${price}`);
    }
}

class Stock {
    private price: number;
    private observers: Observer[] = [];

    constructor(price: number) {
        this.price = price;
    }

    AddObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    SetPrice(price: number): void {
        this.price = price;
        this.NotifyObservers();
    }

    private NotifyObservers(): void {
        for (let observer of this.observers) {
            observer.Update(this.price);
        }
    }
}