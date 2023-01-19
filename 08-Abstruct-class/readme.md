### What? - What is Abstruct Class
In WordPress, an abstract class is a class that cannot be instantiated on its own. It is intended to be used as a base class for one or more derived classes, which can be instantiated.

An abstract class can contain both abstract methods (methods with no implementation) and concrete methods (methods with an implementation). Abstract methods must be implemented by the derived class, while concrete methods can be used as-is or overridden by the derived class.

One reason to use an abstract class in a WordPress plugin is to define a common set of methods that must be implemented by any class that extends the abstract class. This can be useful for enforcing a certain structure or set of behaviors in the derived classes.

For example, you might create an abstract class for a custom post type in your plugin, with abstract methods for registering the post type and displaying the post type's content. Any class that extends this abstract class would be required to implement these methods, ensuring that all custom post types in your plugin have a consistent set of functionality.

### How? - How to use Abstruct Class
Here's an example of an abstract class for a custom post type in WordPress:

```
abstract class Custom_Post_Type {

  abstract public function register();
  abstract public function display();

  public function __construct() {
    // register the post type on construction of the object
    add_action( 'init', array( $this, 'register' ) );
  }
}
```

This abstract class defines two abstract methods: register and display. The register method would be responsible for registering the custom post type, while the display method would handle how the custom post type is displayed on the front-end of the site.

To create a custom post type using this abstract class, you would create a new class that extends Custom_Post_Type and implements the abstract methods:
```
class Movie_Post_Type extends Custom_Post_Type {

  public function register() {
    // register the "movie" custom post type
  }

  public function display() {
    // display the movie custom post type on the front-end of the site
  }
}
```

With this setup, you can create as many custom post types as you need, all with a consistent set of functionality defined by the abstract class.

### Why? - Benifts of Abstruct Class
There are several benefits to using abstract classes in WordPress plugin development:

- ***Improved Maintainability:*** By centralizing common code in an abstract class, you can make updates and changes in a single location, rather than having to update the same code in multiple places. This can make your code more maintainable and easier to modify over time.

- ***Improved Performance:*** Using abstract classes can improve the performance of your plugin, as PHP can more easily optimize code that follows a consistent structure.

- ***Code Reusability:*** Abstract classes provide a common set of methods that can be shared by multiple classes, reducing the need to write redundant code.

- ***Improved Organization:*** Abstract classes can help to organize and structure your code, making it easier to understand and maintain.

- ***Enforced Structure:*** Abstract classes can be used to enforce a certain structure or set of behaviors in derived classes, ensuring that all classes that extend the abstract class are consistent and adhere to certain standards.