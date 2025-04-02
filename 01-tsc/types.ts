interface Point2D {
  x: number;
  y: number;
}

interface NamedEntity {
  name: string;
}

// Intersection -> must include x,y,name (all three)
type NamedPoint2D = Point2D & NamedEntity;

const np1: NamedPoint2D = {
  x: 0,
  y: 0,
  name: "centered",
};

// Union -> may include x or y or name (in any combination)
type NamedOrPoint2DOrBoth = Point2D | NamedEntity;

const person: NamedOrPoint2DOrBoth = {
  name: "René Descartes",
};

const point: NamedOrPoint2DOrBoth = {
  x: 1,
  y: 5,
};

const namedPoint: NamedOrPoint2DOrBoth = {
  name: "Imcentered",
  x: 0,
  //   y: 0,
};
