// eslint-disable-next-line no-unused-vars
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  
  // eslint-disable-next-line no-unused-vars
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  // eslint-disable-next-line no-unused-vars
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };


  companies.forEach(company => console.log(company.name));

  companies.filter(company => company.start > 1987).forEach(company => console.log(company.name));


  const retailCompanies = companies
  .filter(company => company.category === "Retail")
  .map(company => ({ ...company, start: company.start + 1 }));

retailCompanies.forEach(company => {
  const div = document.createElement("div");

  const name = document.createElement("p");
  name.textContent = `Name: ${company.name}`;

  const category = document.createElement("p");
  category.textContent = `Category: ${company.category}`;

  const start = document.createElement("p");
  start.textContent = `Start: ${company.start}`;

  const end = document.createElement("p");
  end.textContent = `End: ${company.end}`;

  div.append(name, category, start, end);
  document.body.appendChild(div);
});


const sortedCompanies = companies.sort((a, b) => a.end - b.end);
console.log(sortedCompanies);


const sortedAges = ages.sort((a, b) => b - a);
console.log(sortedAges);

const totalAges = ages.reduce((sum, age) => sum + age, 0);
console.log(totalAges);


const { name, category } = companies[0];
const newObject = {
  name,
  category,
  print() {
    console.log(`Name: ${this.name}, Category: ${this.category}`);
  }
};

newObject.print();


const sumNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
console.log(sumNumbers(1, 2, 3, 4)); // Output: 10


const addToArray = (...args) => {
  const result = [];
  args.forEach(arg => {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } else {
      result.push(arg);
    }
  });
  return result;
};

console.log(addToArray(1, "a", [2, 3], 4, ["b", "c"])); 
// Output: [1, "a", 2, 3, 4, "b", "c"]


const { address: { street } } = person;
console.log(street); // Output: Lalaland 12



const incrementer = (() => {
  let count = 0;
  return () => count++;
})();

console.log(incrementer()); // Output: 0
console.log(incrementer()); // Output: 1
console.log(incrementer()); // Output: 2


const getQueryParams = (url) => {
  const params = new URL(url).searchParams;
  const result = {};
  params.forEach((value, key) => {
    result[key] = value;
  });
  return result;
};

const url = "https://example.com?name=John&age=30&job=developer";
console.log(getQueryParams(url)); 
// Output: { name: "John", age: "30", job: "developer" }


  //////////////////////////////////////////////////////////////////////////////
  
  var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]


// Find the first teenager
const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
console.log("First teenager:", firstTeenager);

// Find all teenagers
const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
console.log("All teenagers:", allTeenagers);

// Check if everyone is a teenager
const isEveryoneTeenager = people.every(person => person.age >= 10 && person.age <= 20);
console.log("Is everyone a teenager?", isEveryoneTeenager);

// Check if anyone is a teenager
const isAnyoneTeenager = people.some(person => person.age >= 10 && person.age <= 20);
console.log("Is anyone a teenager?", isAnyoneTeenager);

///////////////////////////////////////////////////////////////////////////////////////////////////

var array = [1, 2, 3, 4]

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum);

const product = (arr) => arr.reduce((acc, curr) => acc * curr, 1);
const result = product(array);
console.log("product:",result);
//////////////////////////////////////////////////////////////////////////////////////////////


// Lớp cha: Shape
class Shape {
    constructor(color) {
        this.color = color;
    }

    getArea() {
        return 0.0; // Giá trị mặc định
    }

    toString() {
        return `Color: ${this.color}`;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
}

// Lớp con: Rectangle (kế thừa từ Shape)
class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color); // Gọi constructor của lớp cha
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    toString() {
        return `${super.toString()}, Length: ${this.length}, Width: ${this.width}, Area: ${this.getArea()}`;
    }

    getLength() {
        return this.length;
    }

    setLength(length) {
        this.length = length;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }
}

// Lớp con: Triangle (kế thừa từ Shape)
class Triangle extends Shape {
    constructor(color, base, height) {
        super(color); // Gọi constructor của lớp cha
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }

    toString() {
        return `${super.toString()}, Base: ${this.base}, Height: ${this.height}, Area: ${this.getArea()}`;
    }

    getBase() {
        return this.base;
    }

    setBase(base) {
        this.base = base;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }
}

// Sử dụng các lớp
const rectangle = new Rectangle("Blue", 5, 10);
const triangle = new Triangle("Red", 4, 6);
const shape = new Shape("Yellow")
const shapeRec = new Rectangle("Green", 3, 7);

console.log(rectangle.toString()); // In thông tin hình chữ nhật
console.log(triangle.toString()); // In thông tin hình tam giác
console.log(shape.toString())
console.log(shape.getArea())
console.log(shapeRec.toString())
console.log(shapeRec.getArea())