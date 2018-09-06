let oneArray = ["r", "d", { r: "r" }];

const newOne = [".....", "shhhh", ...oneArray];

const newOneToo = [
  ...oneArray, "you crack me up",
  { question: "you want a new slice of pecan pie?" }
];

const thirdOne = () => {
  const qPlace = document.querySelector('.q');
  const pieSlice = document.querySelector('.pieHolder');
    setTimeout(() => {
      qPlace.innerHTML = newOneToo.slice(-1)[0].question;
      qPlace.style.cssText = "opacity: 1; transform: translate3d(0, 2vw, 0)";
      pieSlice.style.cssText = "opacity: 1; transform: translate3d(0, 0, 0)";
    }, 1000);
};

function* generate(gen) {
  const firstAdd = yield newOne;
  const secondAdd = yield newOneToo;
  const thirdAdd = yield thirdOne();
}

const numOfIterate = 4;
let gens = generate(numOfIterate);

console.log(gens.next());
console.log(gens.next());
gens.next();
console.log(gens.next(), newOneToo.slice(-1)[0]);