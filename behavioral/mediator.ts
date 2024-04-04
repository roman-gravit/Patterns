export { OnlineAuctioneer, Buyer };


interface Auctioneer {
    register(buyer: Buyer): void;
    bid(buyer: Buyer, amount: number): void;
}

class OnlineAuctioneer implements Auctioneer {
    private buyers: Buyer[] = [];
    private highestBid: number = 0;

    register(buyer: Buyer): void {
        this.buyers.push(buyer);
    }

    bid(buyer: Buyer, amount: number): void {
        if (amount <= this.highestBid) {
            console.log(`Bid by ${buyer.name} of $${amount} is too low.`);
            return;
        }

        this.highestBid = amount;
        this.buyers.forEach(b => {
            if (b !== buyer) {
                b.notify(`New highest bid is $${this.highestBid} by ${buyer.name}`);
            }
        });
    }
}

class Buyer {
    constructor(public name: string, private auctioneer: Auctioneer) {
        this.auctioneer.register(this);
    }

    makeBid(amount: number): void {
        this.auctioneer.bid(this, amount);
    }

    notify(message: string): void {
        console.log(`${this.name} receives notification: "${message}"`);
    }
}