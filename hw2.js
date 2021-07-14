function gradingSystem(num) {
    if(num <= 100 && num >= 97) {
        console.log("A+");
    } else if (num <= 96 && num >= 93) {
        console.log("A");
    } else if (num <= 92 && num >= 90) {
        console.log("A-");
    } else if (num <= 89 && num >= 87) {
        console.log("B+");
    } else if (num <= 86 && num >= 83) {
        console.log("B");
    } else if (num <= 82 && num >= 80) {
        console.log("B-");
    } else if (num <= 79 && num >= 77) {
        console.log("C+");
    } else if (num <= 76 && num >= 73) {
        console.log("C");
    } else if (num <= 72 && num >= 70) {
        console.log("C-");
    } else if (num <= 69 && num >= 67) {
        console.log("D+");
    } else if (num <= 66 && num >= 63) {
        console.log("D");
    } else if (num <= 62 && num >= 60) {
        console.log("D-");
    } else if (num <=59 && num >= 0) {
        console.log("F");
    }
}
var grade = gradingSystem();