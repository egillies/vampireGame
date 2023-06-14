// SECTION arrays

const locations = [
    '🎭', '🎪', '🎢', '🏟️', '🏨',
    '🏤', '🏥', '🏭', '🏢', '🏣',
    '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
    {
        name: 'Jimbo',
        picture: '🤵',
        isHunter: false,
        location: ''
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        isHunter: false,
        location: ''
    },
    {
        name: 'Michael',
        picture: '👷',
        isHunter: false,
        location: ''
    },
    {
        name: 'Robert',
        picture: '👷',
        isHunter: false,
        location: ''
    },
    {
        name: 'Terry',
        picture: '🤴',
        isHunter: false,
        location: '',
    },
    {
        name: 'Bill',
        picture: '🕵️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        isHunter: false,
        location: '',
    },
    {
        name: 'Mykeal',
        picture: '💂',
        isHunter: false,
        location: '',
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Wilson',
        picture: '🏐',
        isHunter: false,
        location: '',
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        isHunter: false,
        location: '',
    },
    {
        name: 'Mary',
        picture: '👩‍⚖️',
        isHunter: false,
        location: '',
    }
]
function setVampireHunter() {
    let randomNumber = Math.floor(Math.random() * people.length)
    console.log('random number', randomNumber);
    let randomPerson = people[randomNumber]
    randomPerson.isHunter = true
    console.log('hunter to be', randomPerson);
}

function setRandomLocation() {
    // look at ALL the people
    // while I'm looking at all the people, I also want to get a random location
    // for each one of the people, I want to get and assign the random location
    people.forEach(person => {
        let randomNumber = Math.floor(Math.random() * locations.length) // get me a random # between 0 and 15
        let randomLocation = locations[randomNumber] // get us a random location FROM the loations array at whatever index our random number is
        console.log('random location', person, randomLocation);
        person.location = randomLocation // assign the random location to the person we are currentyl iterating on
        console.log(person);
        return randomLocation;
    })
}

// NOTE assign random location to random person: complete

//TODO Each person should have their picture drawn, at their location.
// Iterate over all the locations
// NOTE since we are drawing all people to their location first, do not use filter function until later?
// draw function, filter

function drawPeople() {
    let peopleString = ''
    locations.forEach(l => {
        let peopleAtLocationArray = people.filter(p => p.location == l)
        // console.log('MILES', peopleAtLocationArray);
        // peopleString = peopleAtLocationArray.map(person => person.picture)
        peopleAtLocationArray.forEach(person =>
            document.getElementById(person.location).innerText += person.picture
            // peopleString += person.picture
        )
        console.log(peopleString);
    })
    // const getPeopleElement = document.getElementById('Get-People')
    // peopleStringElement.innerText = peopleString
}

// NOTE 

setRandomLocation()
setVampireHunter()

drawPeople()
