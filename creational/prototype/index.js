class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

// const dog1 = new Dog("Daisy");
// const dog2 = new Dog("Max");
// const dog3 = new Dog("Spot");

// Dog.prototype.play = () => console.log("Playing now!");

// dog1.play();

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return "Flying!";
  }
}

const dog1 = new SuperDog("Daisy");
dog1.bark();
dog1.fly();
