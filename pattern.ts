function heightOfTriangle(n:number) {
    let str:string = "";
    for (let row:number = 0; row <= n; row++) {
      for (let column:number = 0; column <= row; column++) {
        if ((row + column) % 2 == 0) {
          str += "0 ";
        } else {
          str += "1 ";
        }
      }
      str += "\n";
    }
    for (let row = n; row >= 0; row--) {
      for (let column = row; column > 0; column--) {
        if ((row + column) % 2 == 0) {
          str += "0 ";
        } else {
          str += "1 ";
        }
      }
      str += "\n";
    }
    console.log(str);
  }
  heightOfTriangle(4);
  