### What? is interface in php
In PHP, an interface is a contract that defines a set of methods that a class must implement. It is similar to an abstract class, in that it defines a set of methods that must be implemented, but it cannot contain any implementation code. It is used to specify a common set of methods that multiple classes should have.

### How? can we use it
```php
interface MyInterface {
  public function doSomething();
  public function doSomethingElse();
}
```
This interface defines two methods: doSomething() and doSomethingElse(). If you have multiple classes that need to have these two methods, you can have them all implement the MyInterface interface. This way, you only need to define the methods once, in the interface, rather than repeating the definitions in each class.

Here is an example of two classes that implement the MyInterface interface:
```
class Class1 implements MyInterface {
  public function doSomething() {
    // implementation of doSomething() goes here
  }

  public function doSomethingElse() {
    // implementation of doSomethingElse() goes here
  }
}

class Class2 implements MyInterface {
  public function doSomething() {
    // implementation of doSomething() goes here
  }

  public function doSomethingElse() {
    // implementation of doSomethingElse() goes here
  }
}
```
In this example, both the Class1 and Class2 classes have the same set of methods, because they both implement the MyInterface interface. This allows you to define the methods in a single place (the interface) and have them be shared by multiple classes.

### Why? should we use interface
This allows you to create code that is more flexible and reusable, because you can create a class that implements an interface and use it in place of any other class that also implements the same interface.

When a class implements an interface, it must provide an implementation for all of the methods defined in the interface. This means that you will need to write the code for the method implementations in each class that implements the interface.

However, even though you need to write the code for the method implementations in each class, using an interface can still help you to avoid repeating yourself. This is because the interface defines the method signatures (the names, return types, and arguments) in a single place, which can help you to ensure consistency across your classes.

For example, consider the following interface:
```
interface MyInterface {
  public function doSomething(int $arg1, string $arg2): bool;
}
```

This interface defines a single method called doSomething() that takes two arguments: an int and a string. It also specifies that the method returns a bool.

Now, let's say you have two classes that need to have a method with this signature:
```
class Class1 implements MyInterface {
  public function doSomething(int $arg1, string $arg2): bool {
    // implementation of doSomething() goes here
    return true;
  }
}

class Class2 implements MyInterface {
  public function doSomething(int $arg1, string $arg2): bool {
    // implementation of doSomething() goes here
    return false;
  }
}
```

In this example, both the Class1 and Class2 classes have a method called doSomething() that takes two arguments and returns a bool. However, the actual implementation of the method (the code inside the curly braces) is different in each class.

By using an interface to define the method signature, you can ensure that the two classes have a method with the same name, return type, and arguments, even though the implementation of the method is different. This can help you to avoid mistakes, such as defining the method with a different name or return type in one of the classes, and it can also make your code easier to read and understand, because the method signature is consistent across the classes.