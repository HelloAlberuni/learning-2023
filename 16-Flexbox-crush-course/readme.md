# What is CSS Flexbox?
Flexbox is a CSS box model that provides an easy way to layout, align, and distribute space among items within a container either horizontally or vertically. It's a one-dimensional layout model that offers powerful alignment capabilities.

The key concepts of flexbox are flex container and flex items. 

Imagine that you have a box (the flex container) and you want to arrange some items (the flex items) inside of it. Flexbox is a way of laying out these items so that they use up all of the available space in the container, and are aligned and spaced out in a consistent way.

For better understand think of the flexbox like this: the flexbox container is the boss, and the items are its employees. The boss sets the rules for how the employees should work, and the employees follow those rules. In this case, the container sets the rules for how the items should be laid out, and the items follow those rules to create a consistent and well-arranged layout.

### Why Learn Flexbox?

- Before flexbox, we aligned elements using floats and tables. Flexbox has made life much easier for people that use CSS.
- CSS Grid is another option for alignment, positioning, etc. It's good to learn both.


## Flex Container
The flex container is the parent element, and the following properties can be used:

- `flex-direction`: row | column | row-reverse | column-reverse (default: row)
- `flex-wrap`: nowrap | wrap | wrap-reverse (default: nowrap)
- `flex-flow`: shorthand for flex-direction and flex-wrap
- `justify-content`: flex-start | flex-end | center | space-around | space-between | space-evenly (default: flex-start)
- `align-items`: stretch | flex-start | flex-end | center (default: stretch)
- `align-content`: flex-start | flex-end | center | space-around | space-between | space-evenly

Properties starting with "align" calculate the corresponding cross-axis. For example, `align-items` calculates the cross-axis alignment of the flex items.

The container sets the rules for how its items should be sized and aligned, and the items conform to these rules to fill the available space in the container.

## Flex Items
Flex items are direct children of flex containers, and the following properties can be used:

- `order`: 0 | any_number (default: 0)
- `flex-grow`: 0 | any_number (default: 0)
  - When set to 1 for all items, they will fill and grow to occupy the remaining space equally, even if they have fixed widths. If only one item has a `flex-grow` value of 1, it will fill the remaining space from the container.
- `flex-shrink`: 1 | 0 | any_number (default: 1)
  - Flex wrap should be disabled to use `flex-shrink`.
- `flex-basis`: starting width (default: auto)
  - Can be used instead of `min-width`, works with `flex-grow`, and depends on `flex-wrap`. If there is enough space, the starting width will be used, otherwise, the item will be shrunk regardless of its starting width.
- `flex`: shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
- `align-self`: stretch | flex-start | flex-end | center (default: stretch)
