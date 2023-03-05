***What?***  
Defination 1: Flexbox is a CSS box model to easily layout, align, and distribute space among items within a container either horizontally or vertically.

Defination 2: The Flexible box model is one dimentional layout model that provides a method to offer space distribution and powerful alignment capabilities.

- The key concepts of flexbox are flex container and flex items. 



<b>Flex container:</b>
- The flex container is the parent element.
- Properties are:
    - flex-direction:   *row | column | row-reverse | column-reverse
    - flex-wrap:        *nowrap | wrap | wrap-reverse
    - flex-flow:        (flex-direction flex-wrap) = shorthand
    - justify-content:  *flex-start | flex-end | center | space-around | space-between | space-evenly
    - align-items:      *stretch | flex-start | flex-end | center
    - align-content:    flex-start | flex-end | center | space-around | space-between | space-evenly

- The property start with "align" will calculate corresponding cross axis. For example align-items property

The container sets the rules for how its items should be sized and aligned, and the items conform to these rules to fill the available space in the container.
The term "conform" refers to the way that flex items adjust and align themselves according to the rules set by the flex container.

<b>Flex items:<b>
- Flex items are direct childred of flex containers.
- Properties are:
    - order:        *0|any_number;

    - flex-grow:    *0|any_number;
    when we specify 1 as the value in all flex items. The items will fill and grow get the remaing space of the containers equally even the items will have fixed width. If we specify the grow property in only on item, that item will fill the remaining space from the container.

    - flex-shrink: *1|0|any_number;
    - flex-basis:   
    - align-self

- By default every item orders are 0

Imagine that you have a box (the flex container) and you want to arrange some items (the flex items) inside of it. Flexbox is a way of laying out these items so that they use up all of the available space in the container, and are aligned and spaced out in a consistent way.

Think the flexbox like this: the flexbox container is the boss, and the items are its employees. The boss sets the rules for how the employees should work, and the employees follow those rules. In this case, the container sets the rules for how the items should be laid out, and the items follow those rules to create a consistent and well-arranged layout.


***Why?**
- Before flexbox, we aligned elements using floats and tables. Flexbox has made life much easier for people that use CSS.
- CSS Grid is another option for alignment, positioning etc. It's good to learn both.