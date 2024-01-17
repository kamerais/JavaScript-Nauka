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
            return this._newWidth = newWidth; // _ przed newWidth powoduje, że ta zmienna jest sekretna
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if (newHeight > 0){
            return this._newHeight = newHeight; // _ przed newHeight powoduje, że ta zmienna jest sekretna
        }
        else{
            console.error("Height must be a positive number");
        }
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