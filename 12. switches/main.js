// SWITCH = może być wydajniejszym zastępstwem dla wielu else if statements
// przykład bez switcha
let day = 1;
/*
if (day == 1){
    console.log("It is Monday");
}
else if (day == 2){
    console.log("It is Tuesday");
}
else if (day == 3){
    console.log("It is Wednesday");
}
else if (day == 4){
    console.log("It is Thursday");
}
else if (day == 5){
    console.log("It is Friday");
}
else if (day == 6){
    console.log("It is Saturday");
}
else if (day == 7){
    console.log("It is Sunday");
}
else{
    console.log(`${day} is not a day`)
}
*/

// przykład ze switchem

switch(day){
    case 1: // czy day jest równy 1?
        console.log("It is Monday");
        break; // jeżeli nie będzie break; to po zgodności z badaną zmienną wykona wszystkie inne przypadki
               // pod spodem, które również nie mają break;, aż dojdzie do tego co ma break; lub dojdzie do defualt.
    case 2: // czy day jest równy 2?
        console.log("It is Tuesday");
        break;
    case 3: // czy day jest równy 3?
        console.log("It is Wednesday");
        break;
    case 4: // czy day jest równy 4?
        console.log("It is Thursday");
        break;
    case 5: // czy day jest równy 5?
        console.log("It is Friday");
        break;
    case 6: // czy day jest równy 6?
        console.log("It is Saturday");
        break;
    case 7: // czy day jest równy 7?
        console.log("It is Sunday");
        break;
    default: // jeżeli żaden z rozpatrywanych przypadków nie jest prawdziwy, wtedy wykonaj ten kod.
        console.log(`${day} is not a day`);
}
