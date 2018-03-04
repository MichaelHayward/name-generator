var genders = ['Male', 'Female']
var cultures = ['Arabic', 'Chinese', 'English', 'Indian', 'Japanese',
	'Nigerian', 'Russian', 'Spanish'];

var thisGender;
var thisCulture;
var fullName;

function ourChar() {
	thisGender = genders[Math.floor(Math.random() * genders.length)];
	thisCulture = cultures[Math.floor(Math.random() * cultures.length)];
	if (thisCulture === 'Arabic') {
		arabic();
	} else if (thisCulture === 'Chinese') {
		chinese();
	} else if (thisCulture === 'English') {
		english();
	} else if (thisCulture === 'Indian') {
		indian();
	} else if (thisCulture === 'Japanese') {
		japanese();
	} else if (thisCulture === 'Nigerian') {
		nigerian();
	} else if (thisCulture === 'Russian') {
		russian();
	} else if (thisCulture === 'Spanish') {
		spanish();
	}
	printNames();
}

function printNames() {
	let nameTarget = document.getElementById('nameTarget');
	let sexTarget = document.getElementById('sexTarget');
	let heritageTarget = document.getElementById('heritageTarget');

	nameTarget.innerHTML = fullName;
	sexTarget.innerHTML = thisGender;
	heritageTarget.innerHTML = thisCulture;
}

function arabic() {
	console.log('Arabic function called');
	let firstName;
	if (thisGender === 'Female'){
		firstName = arabicFemaleFirstNames[Math.floor(Math.random() * arabicFemaleFirstNames.length)];
	} else {
		firstName = arabicMaleFirstNames[Math.floor(Math.random() * arabicMaleFirstNames.length)];
	}
	let surname = arabicSurnames[Math.floor(Math.random() * arabicSurnames.length)];
	let alChance = Math.floor(Math.random() * 4); //  25% chance of prefix
	if (alChance === 0) {
		surname = 'al-' + surname; // affixes 'al-' prefix to surname variable
	}
	fullName = firstName + ' ' + surname;
	printNames();
}

function chinese() {
	console.log('Chinese function called');
	let familyName = chineseSurnames[Math.floor(Math.random() * chineseSurnames.length)];
	let personName;
	if (thisGender === 'Female') {
		personName = chineseFemaleNames[Math.floor(Math.random() * chineseFemaleNames.length)]
	} else {
		personName = chineseMaleNames[Math.floor(Math.random() * chineseMaleNames.length)];
	}
	fullName = familyName + ' ' + personName;
	printNames();
}

function english() {
	console.log('English function called');
	let firstName;
	if (thisGender === 'Female') {
		firstName = englishFemaleFirstNames[Math.floor(Math.random() * englishFemaleFirstNames.length)];
	} else {
		firstName = englishMaleFirstNames[Math.floor(Math.random() * englishMaleFirstNames.length)];
	}
	let surname = englishSurnames[Math.floor(Math.random() * englishSurnames.length)]
	fullName = firstName + ' ' + surname;
	printNames();

}

function indian() {
	console.log('Indian function called');
	let firstName;
	if (thisGender === 'Female') {
		firstName = indianFemaleFirstNames[Math.floor(Math.random() * indianFemaleFirstNames.length)];
	} else {
		firstName = indianMaleFirstNames[Math.floor(Math.random() * indianMaleFirstNames.length)];
	}
	let surname = indianSurnames[Math.floor(Math.random() * indianSurnames.length)];
	fullName = firstName + ' ' + surname;
}

function japanese() {
	console.log('Japanese function called');
	let familyName = japaneseSurnames[Math.floor(Math.random() * japaneseSurnames.length)];
	let personName;
	if (thisGender === 'Female') {
		personName = japaneseFemaleNames[Math.floor(Math.random() * japaneseFemaleNames.length)]
	} else {
		personName = japaneseMaleNames[Math.floor(Math.random() * japaneseMaleNames.length)];
	}
	fullName = familyName + ' ' + personName;
	printNames();
}

function nigerian() {
	console.log('Nigerian function called');
	let firstName;
	if (thisGender === 'Female') {
		firstName = nigerianFemaleFirstNames[Math.floor(Math.random() * nigerianFemaleFirstNames.length)];
	} else {
		firstName = nigerianMaleFirstNames[Math.floor(Math.random() * nigerianMaleFirstNames.length)];
	}
	let surname = nigerianSurnames[Math.floor(Math.random() * nigerianSurnames.length)];
	fullName = firstName + ' ' + surname;
}

function russian() {
	console.log('Russian function called');
	let firstName;
	let surname;
	if (thisGender === 'Female') {
		firstName = russianFemaleFirstNames[Math.floor(Math.random() * russianFemaleFirstNames.length)];
		surname = russianFemaleSurnames[Math.floor(Math.random() * russianFemaleSurnames.length)];
	} else {
		firstName = russianMaleFirstNames[Math.floor(Math.random() * russianMaleFirstNames.length)];
		surname = russianMaleSurnames[Math.floor(Math.random() * russianMaleSurnames.length)];
	}
	fullName = firstName + ' ' + surname;
}

function spanish() {
	console.log('Spanish function called');
	let firstName;
	if (thisGender === 'Female') {
		firstName = spanishFemaleFirstNames[Math.floor(Math.random() * spanishFemaleFirstNames.length)];
	} else {
		firstName = spanishMaleFirstNames[Math.floor(Math.random() * spanishMaleFirstNames.length)];
	}
	let surname = spanishSurnames[Math.floor(Math.random() * spanishSurnames.length)];
	fullName = firstName + ' ' + surname;
}

ourChar();
