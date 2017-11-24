// DOM selection variables

var englishMaleName = document.getElementById('englishMalePrintArea');
var englishFemaleName = document.getElementById('englishFemalePrintArea');
var arabicMaleName = document.getElementById('arabicMalePrintArea');
var arabicFemaleName = document.getElementById('arabicFemalePrintArea');
var chineseMaleName = document.getElementById('chineseMalePrintArea');
var chineseFemaleName = document.getElementById('chineseFemalePrintArea');
var indianMaleName = document.getElementById('indianMalePrintArea');
var indianFemaleName = document.getElementById('indianFemalePrintArea');
var japaneseMaleName = document.getElementById('japaneseMalePrintArea');
var japaneseFemaleName = document.getElementById('japaneseFemalePrintArea');
var nigerianMaleName = document.getElementById('nigerianMalePrintArea');
var nigerianFemaleName = document.getElementById('nigerianFemalePrintArea');
var russianMaleName = document.getElementById('russianMalePrintArea');
var russianFemaleName = document.getElementById('russianFemalePrintArea');
var spanishMaleName = document.getElementById('spanishMalePrintArea');
var spanishFemaleName = document.getElementById('spanishFemalePrintArea');

englishMaleName.innerHTML = englishMaleFirstNames[Math.floor(Math.random()*englishMaleFirstNames.length)] + ' ' + englishSurnames[Math.floor(Math.random()*englishSurnames.length)];
englishFemaleName.innerHTML = englishFemaleFirstNames[Math.floor(Math.random()*englishFemaleFirstNames.length)] + ' ' + englishSurnames[Math.floor(Math.random()*englishSurnames.length)];

		// Below: 25% chance for Arabic surnames to have an 'al-' prefix.

let alChance = Math.floor(Math.random()*4);

if(alChance === 0){
	arabicMaleName.innerHTML = arabicMaleFirstNames[Math.floor(Math.random()*arabicMaleFirstNames.length)] + ' al-' + arabicSurnames[Math.floor(Math.random()*arabicSurnames.length)];
	arabicFemaleName.innerHTML = arabicFemaleFirstNames[Math.floor(Math.random()*arabicFemaleFirstNames.length)] + ' al-' + arabicSurnames[Math.floor(Math.random()*arabicSurnames.length)];
}
else{
	arabicMaleName.innerHTML = arabicMaleFirstNames[Math.floor(Math.random()*arabicMaleFirstNames.length)] + ' ' + arabicSurnames[Math.floor(Math.random()*arabicSurnames.length)];
	arabicFemaleName.innerHTML = arabicFemaleFirstNames[Math.floor(Math.random()*arabicFemaleFirstNames.length)] + ' ' + arabicSurnames[Math.floor(Math.random()*arabicSurnames.length)];
}

chineseMaleName.innerHTML = chineseSurnames[Math.floor(Math.random()*chineseSurnames.length)] + ' ' + chineseMaleNames[Math.floor(Math.random()*chineseMaleNames.length)];
chineseFemaleName.innerHTML = chineseSurnames[Math.floor(Math.random()*chineseSurnames.length)] + ' ' + chineseFemaleNames[Math.floor(Math.random()*chineseFemaleNames.length)];

indianMaleName.innerHTML = indianMaleFirstNames[Math.floor(Math.random()*indianMaleFirstNames.length)] + ' ' + indianSurnames[Math.floor(Math.random()*indianSurnames.length)];
indianFemaleName.innerHTML = indianFemaleFirstNames[Math.floor(Math.random()*indianFemaleFirstNames.length)] + ' ' + indianSurnames[Math.floor(Math.random()*indianSurnames.length)];

japaneseMaleName.innerHTML = japaneseSurnames[Math.floor(Math.random()*japaneseSurnames.length)] + ' ' + japaneseMaleNames[Math.floor(Math.random()*japaneseMaleNames.length)];
japaneseFemaleName.innerHTML = japaneseSurnames[Math.floor(Math.random()*japaneseSurnames.length)] + ' ' + japaneseFemaleNames[Math.floor(Math.random()*japaneseFemaleNames.length)];

nigerianMaleName.innerHTML = nigerianMaleFirstNames[Math.floor(Math.random()*nigerianMaleFirstNames.length)] + ' ' + nigerianSurnames[Math.floor(Math.random()*nigerianSurnames.length)];
nigerianFemaleName.innerHTML = nigerianFemaleFirstNames[Math.floor(Math.random()*nigerianFemaleFirstNames.length)] + ' ' + nigerianSurnames[Math.floor(Math.random()*nigerianSurnames.length)];

russianMaleName.innerHTML = russianMaleFirstNames[Math.floor(Math.random()*russianMaleFirstNames.length)] + ' ' + russianMaleSurnames[Math.floor(Math.random()*russianMaleSurnames.length)];
russianFemaleName.innerHTML = russianFemaleFirstNames[Math.floor(Math.random()*russianFemaleFirstNames.length)] + ' ' + russianFemaleSurnames[Math.floor(Math.random()*russianFemaleSurnames.length)];

spanishMaleName.innerHTML = spanishMaleFirstNames[Math.floor(Math.random()*spanishMaleFirstNames.length)] + ' ' + spanishSurnames[Math.floor(Math.random()*spanishSurnames.length)];
spanishFemaleName.innerHTML = spanishFemaleFirstNames[Math.floor(Math.random()*spanishFemaleFirstNames.length)] + ' ' + spanishSurnames[Math.floor(Math.random()*spanishSurnames.length)];