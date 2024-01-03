// SWITCH = może być wydajniejszym zastępstwem dla wielu else if statements
// przykład bez switcha
let day = 1;

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