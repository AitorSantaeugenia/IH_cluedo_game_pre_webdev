// Suspects
let mrGreen = {
	nickname: 'mrGreen',
	name: 'Jacob Green',
	first_name: 'Jacob',
	last_name: 'Green',
	color: 'green',
	description: 'He has a lot of connections',
	age: 45,
	image: './img/jacob_green.png',
	occupation: 'Entrepreneur'
}; //https://i.imgur.com/qoEcCH3.png

let drOrchid = {
	nickname: 'drOrchid',
	name: 'Doctor Orchid',
	first_name: 'Doctor',
	last_name: 'Orchid',
	color: 'white',
	description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
	age: 26,
	image: './img/drorchid.png',
	ocupation: 'Scientist'
}; //https://i.imgur.com/udUFegD.png

let profPlum = {
	nickname: 'profPlum',
	name: 'Victor Plum',
	first_name: 'Victor',
	last_name: 'Plum',
	color: 'purple',
	description: 'Billionare video game designer',
	age: 22,
	image: './img/victor_plum.png',
	occupation: 'Designer'
}; //https://i.imgur.com/v0KH0vw.png

let missScarlet = {
	nickname: 'missScarlet',
	name: 'Kasandra Scarlet',
	first_name: 'Kasandra',
	last_name: 'Scarlet',
	color: 'red',
	description: 'She is an A-list movie star with a dark past',
	age: 31,
	image: './img/kasandra_scarlet.png',
	occupation: 'Actor'
}; //https://i.imgur.com/IUUs0M4.png

let mrsPeacock = {
	nickname: 'mrsPeacock',
	name: 'Eleanor Peacock',
	first_name: 'Eleanor',
	last_name: 'Peacock',
	color: 'blue',
	description: 'She is from a wealthy family and uses her status and money to earn popularity',
	age: 36,
	image: './img/eleanor_peacock.png',
	occupation: 'Socialité'
}; //https://i.imgur.com/fCYZ02I.png

let mrMustard = {
	nickname: 'mrMustard',
	name: 'Jack Mustard',
	first_name: 'Jack',
	last_name: 'Mustard',
	color: 'yellow',
	description: 'He is a former football player who tries to get by on his former glory',
	age: 62,
	image: './img/jack_mustard.png',
	occupation: 'Retired Football player'
}; //https://i.imgur.com/YAyNqjQ.png

// Rooms' Collection
let diningRoom = { name: 'Dinning Room' };
let kitchen = { name: 'Kitchen' };
let study = { name: 'Study' };
let library = { name: 'Library' };
let billiardRoom = { name: 'Billiard Room' };
let lounge = { name: 'Lounge' };
let ballroom = { name: 'Ballroom' };
let hall = { name: 'Hall' };
let spa = { name: 'Spa' };
let livingRoom = { name: 'Living Room' };
let observatory = { name: 'Observatory' };
let theater = { name: 'Theater' };
let guestHouse = { name: 'Guest House' };
let patio = { name: 'Patio' };

// Weapons Collection
let rope = {
	name: 'rope',
	weight: 10
};

let knife = {
	name: 'knife',
	weight: 8
};

let candlestick = {
	name: 'candlestick',
	weight: 2
};

let dumbbell = {
	name: 'dumbbell',
	weight: 30
};

let poison = {
	name: 'poison',
	weight: 2
};
let axe = {
	name: 'axe',
	weight: 15
};
let bat = {
	name: 'bat',
	weight: 13
};
let trophy = {
	name: 'trophy',
	weight: 25
};
let pistol = {
	name: 'pistol',
	weight: 20
};

// array with all the suspects
let suspectsArray = [ mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard ];
// array with all the weapons
let weaponsArray = [ pistol, trophy, bat, axe, poison, dumbbell, candlestick, knife, rope ];
// array with all the rooms
let roomsArray = [
	diningRoom,
	kitchen,
	study,
	library,
	billiardRoom,
	lounge,
	ballroom,
	hall,
	spa,
	livingRoom,
	observatory,
	theater,
	guestHouse,
	patio
];

// Gets random item from each array and constructs the mystery
function pickMystery() {
	let suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
	let weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
	let room = roomsArray[Math.floor(Math.random() * roomsArray.length)];

	return { suspect, weapon, room };
}

let mystery = pickMystery(); // Who killed mr.boddy with what in which room...

// functions showing all the information to play
showArraysSuspect(suspectsArray);
showArraysRoom(weaponsArray);
showArraysWeapon(roomsArray);

//Loops through all of our items and show each items name
function showArraysSuspect(arr) {
	arr.forEach(function(eachItem) {
		document.getElementById('displayInfoOne').innerHTML += `<li>${eachItem.name}</li>`;
	});
}
function showArraysRoom(arr) {
	arr.forEach(function(eachItem) {
		document.getElementById('displayInfoTwo').innerHTML += `<li>${eachItem.name}</li>`;
	});
}
function showArraysWeapon(arr) {
	arr.forEach(function(eachItem) {
		document.getElementById('displayInfoThree').innerHTML += `<li>${eachItem.name}</li>`;
	});
}

document.querySelector('button').onclick = guessCharacter;

function guessCharacter() {
	let guessSuspect = document.querySelector('#suspect').value;
	let guessRoom = document.querySelector('#room').value;
	let guessWeapon = document.querySelector('#weapon').value;

	if (
		guessSuspect === mystery.suspect.name &&
		guessRoom === mystery.room.name &&
		guessWeapon === mystery.weapon.name
	) {
		document.getElementById('showCondition').innerHTML = ' ';
		document.getElementById('showCondition').innerHTML = '<span class="winner">You win!!!</span>';
		document.getElementById('showSolvedMystery').innerHTML = 'Congrats!';
	} else {
		document.getElementById('showCondition').innerHTML = '<span class="loser">You lose!!!</span>';
		document.getElementById('showSolvedMystery').innerHTML =
			'The answer is <b><span class="spoiler">' +
			mystery.suspect.name +
			'</b></span> killed Mr.Boddy in the <b><span class="spoiler">' +
			mystery.room.name +
			'</b></span> with the <b><span class="spoiler">' +
			mystery.weapon.name +
			'</b></span>' +
			' <br><br><span class="smallText">Hover for spoilers</span>';
	}
	document.getElementById('hiddenName').style.visibility = 'visible';
	document.getElementById('hiddenImage').style.visibility = 'visible';
	document.getElementById('hiddenImage').src = mystery.suspect.image;
	document.getElementById('hiddenImage').alt = mystery.suspect.name + ' photo';
}
document.getElementById('hiddenName').style.visibility = 'hidden';
document.getElementById('hiddenImage').style.visibility = 'hidden';

function refreshPage() {
	window.location.reload('Refresh');
}
