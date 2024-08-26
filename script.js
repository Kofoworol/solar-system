const Planets = [
  {
    name: "earth",
    image: "images/earth.png",
    id: 1,
    gravity: 9.81,
  },

  {
    name: "jupiter",
    image: "images/jupiter.png",
    id: 2,
    gravity: 24.79,
  },
  {
    name: "mars",
    image: "images/mars.png",
    id: 3,
    gravity: 3.71,
  },
  {
    name: "mercury",
    image: "images/mercury.png",
    id: 4,
    gravity: 3.7,
  },
  {
    name: "moon",
    image: "images/moon.png",
    id: 5,
    gravity: 1.62,
  },
  {
    name: "neptune",
    image: "images/neptune.png",
    id: 6,
    gravity: 11.15,
  },
  {
    name: "pluto",
    image: "images/pluto.png",
    id: 7,
    gravity: 0.62,
  },
  {
    name: "saturn",
    image: "images/saturn.png",
    id: 8,
    gravity: 10.44,
  },
  {
    name: "uranus",
    image: "images/uranus.png",
    id: 9,
    gravity: 8.69,
  },
  {
    name: "venus",
    image: "images/venus.png",
    id: 10,
    gravity: 8.87,
  },
];

let solarPlanet = document.getElementById("select_planet");

Planets.forEach((p) => {
  let option = document.createElement("option");
  option.value = p.gravity;
  option.textContent = p.name.toUpperCase();
  option.dataset.image = p.image;
  solarPlanet.appendChild(option);
});

function calculateWeight() {
  let mass = parseFloat(document.getElementById("input").value);
  let gravity = parseFloat(document.getElementById("select_planet").value);
  let p = document.getElementById("result");
  let planet_select = document.getElementById("select_planet");
  let selected_planet = planet_select.options[planet_select.selectedIndex];
  let planetName = selected_planet.textContent;
  let planetImage = selected_planet.dataset.image;

  if (isNaN(mass) || mass <= 0) {
    p.innerHTML = "mass is required";
    p.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    p.style.height = "30px";
    p.style.width = "250px";
    p.style.paddingTop = "10px";
    p.style.margin = "20px";

    return;
  } else if (isNaN(gravity)) {
    p.innerHTML = "You did not choose a planet";
    p.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    p.style.height = "30px";
    p.style.width = "300px";
    p.style.paddingTop = "10px";
    p.style.margin = "20px";

    return;
  } else {
    weight1 = mass * gravity;
    p.innerHTML = `<p class="name">The weight on the object on  ${planetName} </p>  <p class="weight">${weight1}</p>`;
    let imageElement = document.getElementById("planetImage");
    let box1 = document.getElementById("box");
    imageElement.src = planetImage;
    imageElement.style.height = "300px";
    imageElement.style.width = "300px";
    p.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    p.style.height = "200px";
    p.style.width = "350px";
    box1.style.padding = "50px";
  }
}
let button = document.getElementById("button");
button.addEventListener("click", (e) => {
  calculateWeight();
});
