## Creational


####  1. Singleton

Ensure a class has only **one instance**, and provide a single global point of access to it and lazy initialization.

When to use examples:
  - basket in the internet-shop
  - intsance of the music player
  - logger

Implementation: 
  1. Create global variable and put it to the module.
  2. Singleton inside the object



####  2. Prototype

Prototype is a creational design pattern that allows **cloning** objects without coupling to their specific classes.

  - Specify the kinds of objects to create using a prototypical instance, 
    and create new objects by copying this prototype.
  - Co-opt one instance of a class for use as a breeder of all future instances.
  - The new operator considered harmful.



####  3. Builder

Construct complex objects step by step. The pattern allows you to produce different types and representations of an 
object using the same construction code. 
Separate the algorithm for interpreting (reading and parsing) a stored persistence mechanism from the algorithm for 
building and representing one of many target products. 