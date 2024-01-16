/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

// TODO: Add support for more colors
// const colors = ["red", "green", "blue", "orange", "yellow", "purple"];
// const sizes = ["small", "medium", "large"];
// const maxShapes = 10;
// const shapes = [
//   {
//     color: "red",
//     size: "small",
//   },
//   {
//     color: "yellow",
//     size: "small",
//   },
// ];

// // `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// // and return an interval ID that we can use to stop the interval later.
// // Calling `clearInterval(addShapeIntervalId)` will stop the interval.
// const addShapeIntervalId = setInterval(addShape, 1000);

// render(); // We call this function once to render the initial state

// /**
//  * Update the DOM to reflect the current state.
//  * The term "render" is often used to describe this process.
//  */
// function render() {
//   // Render the squares
//   const squares = document.querySelector("#squares");
//   const squareElements = shapes.map((shape) => {
//     const element = document.createElement("li");
//     element.classList.add(shape.color, shape.size);
//     return element;
//   });
//   squares.replaceChildren(...squareElements);

//   // TODO: Render the circles
// }

// /**
//  * Add a random shape to the `shapes` array
//  */
// function addShape() {
//   const color = colors[Math.floor(Math.random() * colors.length)];

//   // TODO: Randomize the size of the shape
  
//   shapes.push({ color, size: "small" });

//   render();
//     if (shapes.length >= maxShapes) {
//       clearInterval(addShapeIntervalId);
//     }
//   // TODO: Stop adding shapes if we've reached the maximum number of shapes
// }

const freeLancersList = [
  {name: "Wally", occupation: "cook", price: 10},
  {name: "Harry", occupation: "plumber", price: 60},
];

const freeLancer = [
  "Alice",
  "Bob",
  "Carol",
  "Thomas",
  "Hans",
  "Meredith",
  "Jackie",
  "Jess",
  "Doobin",
  "Caitlin"
];

const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Cook",
  "Musician",
  "Accountant",
  "Producer",
  "Dog Walker",
  "Editor",
  "Surgeon"
];

const price = [
  30,
  50,
  70,
  80,
  90,
  60,
  40,
  20,
  10,
  100
];

const maxFreelancers = 10;

// const freeLancersParent = document.getElementById("freelancer");

const occupationsParent = document.getElementById("occupations");

const priceParent = document.getElementById("price");

// const x = freeLancersList.map((y) => {
//   const listElement = document.createElement("li");
//   listElement.innerText = y.name;
//   return listElement;
// })
// freeLancersParent.replaceChildren(...x);

function render() {
    const freeLancersParent = document.getElementById("freelancer");
    const x = freeLancersList.map((y) => {
      const listElement1 = document.createElement("li");
      listElement1.innerText = y.name;
      return listElement1;
    })
    freeLancersParent.replaceChildren(...x);  
    
    const occupationsParent = document.getElementById("occupations");
    const xX = freeLancersList.map((y) => {
      const listElement2 = document.createElement("li");
      listElement2.innerText = y.occupation;
      return listElement2;
    })
    occupationsParent.replaceChildren(...xX);

    const priceParent = document.getElementById("price");
    const xYX = freeLancersList.map((y) => {
      const listElement3 = document.createElement("li");
      listElement3.innerText = y.price;
      return listElement3;
    })
    priceParent.replaceChildren(...xYX);

    const average = averagePrice();
    const averagePriceElement = document.getElementById("average");
    averagePriceElement.innerText = averagePrice().toFixed(2);
} 

render();
function newFreelancer () {
  const randomIndex = Math.floor(Math.random() * freeLancer.length);
  // console.log(randomIndex, freeLancer[randomIndex]);
  const newLancer = {name: freeLancer[randomIndex] , occupation: occupations[randomIndex], price: price[randomIndex]};
  freeLancersList.push(newLancer);
  averagePrice();
  render();
  if (freeLancersList.length >= maxFreelancers) {
    clearInterval(addFreeLancerId);
  }  
} 
const addFreeLancerId = setInterval(newFreelancer, 1000);


function averagePrice() {
  let sumPrice = 0;
  freeLancersList.map((y) => {
    sumPrice += y.price; 
  })
  sumPrice /= freeLancersList.length;
  // console.log(sumPrice);
  return (sumPrice);
} 

