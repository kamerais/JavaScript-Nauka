// getter = specjalna metoda, która robi, że włąsciwość jest czytelna
// setter - -,,- zapisywalna

// weryfikuj i modyfikuj wartość kiedy czytasz/zapisujesz właściwość

class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if (newWidth > 0){
            return this._width = newWidth; // _ przed newWidth powoduje, że ta zmienna jest prywatna
                                           // i mówi innym deweloperom, że nie powinno się jej tykać
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if (newHeight > 0){
            return this._height = newHeight; // _ przed newHeight powoduje, że ta zmienna jest prywatna
                                            // i mówi innym deweloperom, że nie powinno się jej tykać
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}
/*
Tutaj jest wszystko przed dodaniem getterów
const rectangle = new Rectangle(-10000000000,"pizza");
console.log(rectangle.width); // output: undefined
Wyskakują 2 errory:
    - Width must be a positive number
    - Height must be a positive number
*/
const rectangle = new Rectangle(4,3);
console.log(rectangle.width); // output: 4.0cm
console.log(rectangle.height); // output: 3.0cm
console.log(rectangle.area); // output: 12.0cm^2