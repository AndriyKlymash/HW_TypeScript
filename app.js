// Створити такі класи:
//     1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря
var Deputy = /** @class */ (function () {
    function Deputy(name, age, gender, degreeOfHonesty, minAmountOfTheBribe) {
        this.gender = 'male';
        this.degreeOfHonesty = 35;
        this.minAmountOfTheBribe = 3000;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.degreeOfHonesty = degreeOfHonesty;
        this.minAmountOfTheBribe = minAmountOfTheBribe;
    }
    return Deputy;
}());
var deputy1 = new Deputy('Vova', 50, 'male', 35, 300);
console.log(deputy1);
// class Group {
//     name:string;
//     mainDeputy:string;
//     deputy:string[];
//
//     constructor() {
//
//     }
// }
