var background = backgroundArr[Math.floor(Math.random() * backgroundArr.length)];
var occupation = occupationArr[Math.floor(Math.random() * occupationArr.length)];
var problem = problemArr[Math.floor(Math.random() * problemArr.length)];
var age = ageArr[Math.floor(Math.random() * ageArr.length)];
var desire = desireArr[Math.floor(Math.random() * desireArr.length)];
var trait = traitArr[Math.floor(Math.random() * traitArr.length)];

function printCharTraits() {
  let backgroundTarget = document.getElementById('backgroundTarget');
	let occupationTarget = document.getElementById('occupationTarget');
	let problemTarget = document.getElementById('problemTarget');
	let ageTarget = document.getElementById('ageTarget');
	let desireTarget = document.getElementById('desireTarget');
	let traitTarget = document.getElementById('traitTarget');

  backgroundTarget.innerHTML = background;
  occupationTarget.innerHTML = occupation;
  problemTarget.innerHTML = problem;
  ageTarget.innerHTML = age;
  desireTarget.innerHTML = desire;
  traitTarget.innerHTML = trait;
}

printCharTraits();
