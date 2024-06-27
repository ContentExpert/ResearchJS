const circle = {
    radius: 2,
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  };
  
  circle.area = 20;
  
  console.log(circle.area); // 12.566370614359172
