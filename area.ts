enum Shapes {
    Rectangle = "Rectangle",
    Triangle = "Triangle",
    Square = "Square",
  };
  
  function calculateArea(shape:string,width:number,height:number) {
    switch (shape) {
      case Shapes.Triangle:
        return (width * height) / 2;
      case Shapes.Square:
          return width**2;
      case Shapes.Rectangle:
        return height * width;
      default:
    }
  }
  console.log(calculateArea("Square",10,20));
  console.log(calculateArea("Triangle",10,12));
  console.log(calculateArea("Rectangle",10,25));