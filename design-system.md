## Target Devices

4 main categories:

- Monitor: typically to be watched from a distance, with a larger screen size and higher resolution.
- Laptop: portable computers with a built-in screen and keyboard, suitable for personal and professional use.
- Tablet: touch-screen devices that are larger than smartphones but smaller than laptops, often used for media consumption and light productivity tasks.
- Mobile: smartphones and other handheld devices, designed for on-the-go use with smaller screens and touch interfaces.

## Element Layouts

An Element can adapt to three different layouts based on w and h of its container.

- Square Compact
- Square Medium
- Square Large
- Adaptive Landscape
- Adaptive Portrait

Some elements are not adaptive and only support one layout, they are fixed.

## Responsiveness

Ensured with media-queries mainly. Class that replicates media-queries for embedded visualization.

## SASS project

- Skin: define css variables, override styles like hover, border etc...

- Css Variables controls:
  - Page Layout
  - Border Radius
  - Colors
  - Font Sizes
  - Spacing
  - Shadows

- Main and Elements: uses variables to customize specific elements

### References

- https://www.youtube.com/watch?v=btMR5e4ZRM4&list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb&index=21
  `!default` for each variable, so it can be overridden by the user.

