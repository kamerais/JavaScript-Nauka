// DICE ROLLER PROGRAM

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value; // pobieram wartość z inputa
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = []; // tworzę tablicę, która przechowuje wartości kostek
    const images = []; // tworzę tablicę, która przechowuje zdjęcia kostek

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1; // tworzę zmienną losową od 1-6
        values.push(value); // na koniec listy dodaje wylosowaną wartość
        images.push(`<img src="pics/Dice-${value}.png" alt="Dice ${value}">`); // na koniec listy dodaję img taga z wysolowaną wartością kostki
        //                                                                        aby wyświetlić je na stronie
    }
    diceResult.textContent = `dice: ${values.join(', ')}`; // oddzielam wszystkie liczby przecinskiem
    diceImages.innerHTML = images.join(''); // oddzielam obrazki pustym stringiem
    console.log(images);
}