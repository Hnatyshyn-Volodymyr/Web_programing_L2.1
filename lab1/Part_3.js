function NOD () {
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
      var y = arguments[i];
      while (x && y) {
        x > y ? x %= y : y %= x;
      }
      x += y;
    }
    return x;
  }
  
  console.log([
    NOD( 10, 15 ),
    NOD( 111, 555, 407 ),
    NOD( 100, 200, 300, 400, 2225, 175, 19873625 ),
  ].join( '\n' )); 
  
  // Output 5, 37, 25