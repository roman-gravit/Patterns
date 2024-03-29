export { SingletonGlobal, SingletonInst } ;

/**
 * Variant 1: create global variable and put it to the module.
 * 
 * Contra: global variable
 */
let instance: object;

class SingletonGlobal {
    constructor() {
        if(!instance) {
            instance = this;
        }
        return instance;
    }
}


/**
 *  Variant 2:  
 * 
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class SingletonInst {
    private static instance: SingletonInst;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static GetInstance(): SingletonInst {
        if (!SingletonInst.instance) {
            SingletonInst.instance = new SingletonInst();
        }
        return SingletonInst.instance;
    }
}
