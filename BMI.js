
class BMI {

    constructor(weight, height) {
        this.height = height;
        this.weight = weight;

    }

    CalculateBMI() {
        //calculates BMI
        let bmi = this.weight / (this.height ** 2);
        return bmi;

    }

}
let myBMI = new BMI(2, 100);
console.log(myBMI.CalculateBMI());


class Veh {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }

    Information() {

        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);

    }
}

// let MyVeh = new Veh("Volvo", "12", 2020);
// console.log(MyVeh.Information());

class Cars extends Veh {
    constructor(make, model, year, doors) {
        super(make,model,year);
        this.doors = doors;
    }

    Information(){
        //ooutputs cars information using super.information
        super.Information();
        //Outputs the numver of doors
        console.log(`Doors: ${this.doors}`);

    }
}
//Inputs the information for each variable. Make: volvo, model: 12, year:2020, doors 5
let MyCar = new Cars("Volvo", "12", 2020, 5);
console.log(MyCar.Information());