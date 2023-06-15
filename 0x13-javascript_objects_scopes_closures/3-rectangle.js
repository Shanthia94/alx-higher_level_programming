#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    w = parseInt(w);
    h = parseInt(h);
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
  print () {
    while (this.height) {
      console.log('X'.repeat(this.width));
      this.height--;
    }
  }
}
module.exports = Rectangle;
