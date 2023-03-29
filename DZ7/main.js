class Cars {
   constructor(options){
      this.model = options.model
      this.color = options.color
      this.wheels = options.wheels
      this.price = options.price
      this.doors = options.doors
      this.year = options.year
   }
   start () {
      console.log(`${this.model} машина заведена`);
   }
   
}

class BMW extends Cars {
   constructor(options){
      super(options)
   }
}

const Bmw = new BMW ({
   model : 'Bmw',
   color : 'Black',
   wheels : 4,
   price : 50000,

})
Bmw.start()

class MOskvich extends Cars {
   constructor(options){
      super(options)
   }
}

const Moskvich = new  MOskvich ({
   model : 'Moskvich',
   color : 'green',
   wheels : 9,
   doors : 2,
})

Moskvich.start()


class lamborgene extends Cars {
   constructor(options){
      super(options)
   }
}

const lambo = new lamborgene ({
   model : 'lambo',
   color : 'red',
   wheels : 4,
   year : 2004,

})
lambo.start()




//2)
class Svetofor {
   constructor() {
     this.redLight = document.querySelector('.red');
     this.yellowLight = document.querySelector('.yellow');
     this.greenLight = document.querySelector('.green');
   }
 
   setRed() {
     this.redLight.style.backgroundColor = "red";
     this.yellowLight.style.backgroundColor = "black";
     this.greenLight.style.backgroundColor = "black";    
   }
 
   setYellow() {
     this.redLight.style.backgroundColor = "black";
     this.yellowLight.style.backgroundColor = "yellow";
     this.greenLight.style.backgroundColor = "black";
   }
 
   setGreen() {
     this.redLight.style.backgroundColor = "black";
     this.yellowLight.style.backgroundColor = "black";
     this.greenLight.style.backgroundColor = "green";
   }
 }
 
 const svetofor = new Svetofor();
 
 const input = prompt("Введите (Red, Yellow, Green)");
 
 if (input.toLowerCase() === "red") {
   svetofor.setRed();
 } else if (input.toLowerCase() === "yellow") {
   svetofor.setYellow();
 } else if (input.toLowerCase() === "green") {
   svetofor.setGreen();
 } else {
   alert("ОШИБКА ВВЕДИТЕ ЦВЕТ ");
 }
 