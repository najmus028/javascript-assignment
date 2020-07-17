// Question-01 (Feet to Mile)
function feetToMile(feet){
    const mile = feet / 5280;     // 1 mile = 5280 feet
    return mile;
}
var result = feetToMile(1);
console.log(result, "Mile");


// Question-02 (Wood Calculator)
function woodCalculator(chair, table, bed) {
        const woodForChair = chair * 1;     //Chair needs 1 Cubic Foot wood to make each.
        const woodForTable = table * 3;     //Table needs 3 Cubic Feet wood to make each.
        const woodForBed = bed * 5;         //Bed needs 5 Cubic Feet wood to make each.
        const totalWoodNeeded = woodForChair + woodForTable + woodForBed;
        return totalWoodNeeded;
}
var output = woodCalculator(1, 5, 3);
console.log("You need total", output, "cubic feet wood to make your chair, table and bed.");


// Question-03 (Brick Calculator)
function brickCalculator(floor) {
    let feet = 0;
    if (floor <= 10) {
        feet += floor * 15;                         // 1st 10 floors = 15 feet.
    }
    else if (floor > 10 && floor <= 20) {
        floor -= 10;
        feet += 10 * 15 + floor * 12;               // 2nd 10 floors = 12 feet.
    }
    else if (floor > 20) {
        floor -= 20;
        feet += 10 * 15 + 10 * 12 + floor * 10;     // More than 20 floors = 10 feet.
    }
    const bricksNeeded = feet * 1000;               // 1 foot wall needs 1000 bricks.
    return bricksNeeded;
}
var output = brickCalculator(19);
console.log("Total bricks needed for your building is:",output);


// Question-04 (Tiny Friend)
function tinyFriend(friendName){
    let shortest = friendName[0];
    for (i = 0; i < friendName.length; i++){
        let nextName = friendName[i];
        if (nextName.length < shortest.length){
            shortest = nextName;
        }
    }
    return shortest;
}
var output = tinyFriend(["Mehedi", "Ali", "Habibullah", "Sakib", "Naim", "Joy"]);
console.log("The shortest name of this list is:", output)