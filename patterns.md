## Creational


###  1. Singleton

Ensure a class has only **one instance**, and provide a single global point of access to it and lazy initialization.

When to use examples:
  - basket in the internet-shop
  - intsance of the music player
  - logger

Implementation: 
  - Create global variable and put it to the module.
  - Singleton inside the object


###  2. Prototype

Prototype is a creational design pattern that allows **cloning** objects without coupling to their specific classes.

Implementation:
  - Specify the kinds of objects to create using a prototypical instance, 
    and create new objects by copying this prototype.
  - Co-opt one instance of a class for use as a breeder of all future instances.
  - The new operator considered harmful.


###  3. Builder

Construct complex objects step by step. The pattern allows you to produce different types and representations of an 
object using the same construction code. 
Separate the algorithm for interpreting (reading and parsing) a stored persistence mechanism from the algorithm for 
building and representing one of many target products.

When to use:
 - To create complex and big objects with complex states *Director* abstraction will rule several *Abstract Builders*
 - If creation of the object is very complex and counstrutor became huge


###  4. Factory Method
 
 Implementation:
 - Define an interface for creating an object, but let subclasses decide which class to instantiate. 
  Factory Method lets a class defer instantiation to subclasses.
 - The new operator considered harmful.
 - Defining a "virtual" constructor.

When to use:	
 - When you need to create several similar objects


###  5. Abstract Factory

Some kind of abtrsaction for factory and factory method. Its some kind of upper level above factory.

Implementation:
 - Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
 - A hierarchy that encapsulates: many possible "platforms", and the construction of a suite of "products".
 - The new operator considered harmful.



## Structural


###  1. Decorator

You want to add behavior or state to individual objects at run-time. 
Inheritance is not feasible because it is static and applies to an entire class
The Decorator attaches additional responsibilities to an object dynamically.

Implementation:
 -  Attach additional responsibilities to an object dynamically. Decorators provide 
    a flexible alternative to subclassing for extending functionality.
 -  Wrap the core object
 -  Wrapping a gift, putting it in a box, and wrapping the box.


###  2. Adapter

Allows objects with INCOMPATIBLE interfaces to COMMUNICATE.
Converts the interface of one object so that another object can understand it.

Implementation:
 -  Convert the interface of a class into another interface clients expect. 
    Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
 -  Wrap an existing class with a new interface.
 -  Impedance match an old component to a new system


### 3. Facade

A segment of the client community needs a SIMPLIFIED interface to the overall functionality 
of a COMPLEX subsystem.
Facade encapsulating a complex subsystem within a single interface object.

Implementation:
 - Provide a unified interface to a set of interfaces in a subsystem. 
   Facade defines a higher-level interface that makes the subsystem easier to use.
 - Wrap a complicated subsystem with a simpler interface.


### 4. Proxy

You need to support resource-hungry objects, and you do not want to instantiate such objects 
unless and until they are actually requested by the client.

USE: 
There are four common situations in which the Proxy pattern is applicable:

 -  A VIRTUAL PROXY is a placeholder for "expensive to create" objects, aka *Lazy-Load*
	  The real object is only created when a client first requests/accesses the object.
 -  A PROTECTIVE PROXY controls access to a sensitive master object. 
    The "surrogate" object checks that the caller has the access permissions required prior to forwarding the request.
 -  A LOGGING PROXY interposes additional actions when an object is accessed.
 -  A CACHING PROXY
 -  A REMOTE PROXY provides a local representative for an object that resides in a different 
    address space. This is what the "stub" code in RPC and CORBA provides.


Implementation:
 - Provide a surrogate or placeholder for another object to control access to it.
 - Use an extra level of indirection to support distributed, controlled, or intelligent access.
 - Add a wrapper and delegation to protect the real component from undue complexity.


### 5. Composite (Object Tree)
-----------------------------
Composite is a structural design pattern that lets you compose objects into tree structures 
and then work with these structures as if they were individual objects.

NOTE: Using the Composite pattern makes sense only when the core model of your app can be represented as a tree.

Problem:  
  Application needs to manipulate a hierarchical collection of "primitive" and "composite" objects. 
  Processing of a primitive object is handled one way, and processing of a composite object is handled differently. 
  Having to query the "type" of each object before attempting to process it is not desirable.

Implementation:
 - Define an abstract base class (Component) that specifies the behavior that needs 
   to be exercised uniformly across all primitive and composite objects. 
 - Subclass the Primitive and Composite classes off of the Component class.
 - Each Composite object "couples" itself only to the abstract type Component as it manages its "children".

Use this pattern whenever you have "composites that contain components, each of which could be a composite".
