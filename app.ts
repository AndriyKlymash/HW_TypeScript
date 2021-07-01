// Створити такі класи:
//     1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря

import {EGender} from "./enums/gender";

class Deputy {
    private name: string;
    private age: number;
    private gender: EGender;
    private degreeOfHonesty: number;
    private minAmountOfTheBribe: number;

    constructor(name: string, age: number, gender: EGender, degreeOfHonesty: number, minAmountOfTheBribe: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.degreeOfHonesty = degreeOfHonesty;
        this.minAmountOfTheBribe = minAmountOfTheBribe;
    }
}

const vova = new Deputy('Vova', 50, EGender.Male, 35, 3000);
const petya = new Deputy('Petya',55,EGender.Male, 50,5000);
const vasyl= new Deputy('Vasyl', 38,EGender.Male, 32,3500);




//2) Партія
//    - назва
//    - голова (Депутат)
//    - члени партії (Масив депатутатів)

class Group {
    name: string;
    mainDeputy: string;
    deputy: Array<string>;

    constructor(name: string, mainDeputy: string, deputy: Array<string>) {
        this.name = name;
        this.mainDeputy = mainDeputy;
        this.deputy=deputy;
    }

    addDeputy(deputy):void{
        this.deputy.push(deputy)
    }
}

const servantOfThePeople = new Group('Слуга нарду','vova',['vova', 'petya', 'vasyl']);
servantOfThePeople.addDeputy('name')

//3) Верхрвна рада
//    - масив партій
//    - решті полів на вибір

//Мають бути присутні такі можливості:
// - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
// Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається


//Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
// Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
// та бере хабар.
// Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!