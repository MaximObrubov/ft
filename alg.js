// NOTE: мне нравится именно ООП подход, так как позволяет проще манипулировать
// объектами в сознании, а так же сохранять состояние конкретного блинчика, при
// этом упростив восприятие очереди приготовления блинчиков, оставив только
// алгоритмическую состоавляющую

class Pancake {
  
  constructor() {
    this.sides = [false, false];
  }
  
  bake() {
    for (let i = 0, l = this.sides.length; i < l; i++) {
      if (!this.sides[i]) {
        this.sides[i] = true;
        break;
      }
    }
    return this.sides.every((side) => side);
  }
}


class BakeQueue {
  
  constructor(pancakesCount) {
    this.pans = 2;
    this.pancakesCount = pancakesCount;
    this.pancakes = Array.from(Array(pancakesCount), (x, i) => new Pancake());
  }
  
  bake() {
    while(!this.is_all_baked()) {
      for (let i = 0; i < this.pans; i++) {
        let pancake = this.pancakes.shift();
        // если блинчик не готов, снова ставим его в очередь
        if (!pancake.bake()) this.pancakes.push(pancake);
      }
      this.time++;
      
    }
    console.log(`We need ${this.time} to bake ${this.pancakesCount} pancakes`)
  }
  
  is_all_baked() {
    return this.pancakes.length === 0;
  }
}

new BakeQueue(3).bake();
