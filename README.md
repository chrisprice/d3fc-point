# d3fc-data-join

A component that simplifies basic pointer interaction.

[Main d3fc package](https://github.com/ScottLogic/d3fc)

# Description

A very small utility that observes mouse or touch interactions and produces a series of events. Each event specifies an array which either contains a single item representing the location of the interaction (the point) or no items if there's currently no interaction. This facilitates a uni-directional data flow pattern when e.g. rendering a crosshair which tracks the user's cursor over a chart.

N.B. this is a *very* simple component. As always it’s important to understand the abstraction and in many cases using vanilla events may be simpler or perform better.

# Installation

```bash
npm install d3fc-point
```

# API

## point

<a name="point" href="#point">#</a> *fc*.**point**()

Constructs a new point component instance. Once created, the component must be invoked on a `selection` -

```js
const point = fc.point()
  .on('point', points => console.log(points));

d3.select('body')
  .call(point);
```

<a name="dataJoin_element" href="#dataJoin_element">#</a> *dataJoin*.**on**(*type*, *handler*)

Subscribe to the `point` event to receive updates. An array is passed as the only argument to *handler*. The array will contain a single item `{ x: 10, y: 10 }` when the user is moving their cursor (or touching) within the selection. See [d3-dispatch](https://github.com/d3/d3-dispatch#dispatch_on) for more details.
