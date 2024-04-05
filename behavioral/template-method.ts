export { TeslaBuilder, BmwBuilder }

abstract class Builder {

    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    }


    protected baseOperation1(): void {
        console.log('AbstractClass says: I am doing the bulk of the work');
    }

    protected baseOperation2(): void {
        console.log('AbstractClass says: But I let subclasses override some operations');
    }

    protected baseOperation3(): void {
        console.log('AbstractClass says: But I am doing the bulk of the work anyway');
    }

    /**
     * These operations have to be implemented in subclasses.
     */
    protected abstract requiredOperations1(): void;

    protected abstract requiredOperation2(): void;

    /**
     * These are "hooks." Subclasses may override them, but it's not mandatory
     * since the hooks already have default (but empty) implementation. Hooks
     * provide additional extension points in some crucial places of the
     * algorithm.
     */
    protected hook1(): void { }

    protected hook2(): void { }
}

class TeslaBuilder extends Builder {
    protected requiredOperations1(): void {
        console.log('TeslaBuilder says: Implemented Operation1');
    }

    protected requiredOperation2(): void {
        console.log('TeslaBuilder says: Implemented Operation2');
    }
}

class BmwBuilder extends Builder {
    protected requiredOperations1(): void {
        console.log('BmwBuilder says: Implemented Operation1');
    }

    protected requiredOperation2(): void {
        console.log('BmwBuilder says: Implemented Operation2');
    }

    protected hook1(): void {
        console.log('BmwBuilder says: Overridden Hook1');
    }
}