Viewport Width, DPI e Resolution

## Key Concepts

### Viewport Width

The visible area of a webpage in the browser window, independent of device physical dimensions.

### DPI (Dots Per Inch)

A measure of pixel density that affects how sharp text and images appear on screen.

### Resolution

The total number of pixels displayed (width × height), determining the level of detail rendered.

### Relationship

These three factors work together to determine how content scales and displays across different devices. Higher DPI and resolution on smaller viewports create sharper, more detailed displays, while larger viewports with lower DPI may appear less sharp.

---

### Responsive Web Design (RWD)

> HTML is fundamentally responsive, or fluid (browser automatically reflows to fit the viewport)
> Responsive web design isn't a separate technology — it is an approach.

**Tools:**

- Media queries
- Flexible grids
- Relative units
- Responsive Typography

### Media Queries

Media queries allow us to run a series of tests (for example, whether the user's screen is greater than a certain width or resolution) and apply CSS selectively to style the page appropriately for the user's needs.

> If using breakpoints, best practices encourage defining media query breakpoints with relative units rather than absolute sizes of an individual device.

> Media queries can help with RWD, but are not a requirement. Flexible grids, relative units, and minimum and maximum unit values can be used without media queries.

> Several layout methods — including Flexbox, and CSS Grid — are responsive by default. They all assume that you are trying to create a flexible grid and give you easier ways to do so.

In flexbox, flex items shrink or grow, distributing space between the items according to the space in their container. By changing the values for flex-grow and flex-shrink you can indicate how you want the items to behave when they encounter more or less space around them.

In CSS grid layout the fr unit allows the distribution of available space across grid tracks. The next example creates a grid container with three tracks sized at 1fr. This will create three column tracks, each taking one part of the available space in the container.

### Responsive Typography

Responsive typography describes changing font sizes within media queries or using viewport units to reflect lesser or greater amounts of screen real estate.

> Therefore you should never set text using viewport units alone. The problem with doing the above is that the user loses the ability to zoom any text set using the vw unit, as that text is always related to the size of the viewport.
