function convertToMeters(yards) {
    return yards * 0.9144;
}
function rand(limit){
    return Math.round(Math.random()*limit);
}
  
function createMessage(yards, meters) {
    let message = "";
    const numYards = yards * 1;

    if (numYards === 1760) {
        message = "That is as long as a mile.";
    }
    else if (numYards === 100) {
        message = "That is as long as a football field."
    }
    else if (numYards === 26) {
        message = "That is as long as a tennis court."
    }
    return `${yards} yards is ${ meters} meters. ${message}`;
}
let inputYards = prompt("Enter the yards you want to convert.");
console.log("Input yards: ", inputYards);

let convertedMeters = convertToMeters(inputYards);
console.log("Converted Meters: ", convertedMeters);

let output = createMessage(inputYards, convertedMeters);
console.log(output);

let randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);

randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);