// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((c, m) => {return c += m}, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        if (a + b <= c || a + c <= b || b + c <= a) {
            return false
        }
        return true
    }
}
class Square extends Polygon {
    get isValid(){
        for (let i = 0; i < this.sides.length; i++) {
            if (this.sides[i] !== this.sides[0]) return false
        }
        return true
    }

    get area(){
        return this.sides[0] * this.sides[0]
    }
}