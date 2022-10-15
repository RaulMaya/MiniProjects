let person = {
    name: 'Raul',
    age: 26,
    hobbies: ['Sports', 'TV Series'],
    greet: function() {
        // alert('I want to become a Front-End Developer');
        console.log('I want to become a Front-End Developer');
    }
};

let personTwo = {
    'first-name': 'Willy',
    'dog age': 10,
    hobbies: ['Sleep', 'Bark'],
    greet: function() {
        // alert('I want to become a Front-End Developer');
        console.log('Im a dog');
    },
    1.5: 'I like to be with Raul'
};

// const movieList = document.getElementById('movie-list');

// movieList.style['background-color'] = 'red';
// movieList.style.display = 'block';

console.log(personTwo['first-name']);
console.log(personTwo['dog age']);
console.log(personTwo[1.5]);


// Don't Do
/* person = {
    name: 'Raul',
    age: 26,
    hobbies: ['Sports', 'TV Series'],
    greet: function() {
        // alert('I want to become a Front-End Developer');
        console.log('I want to become a Front-End Developer');
    },
    isAdmin: true 
}; */

// Do
person.isAdmin = true; // Reasign a property 

delete person.age; // Deleting a property (person.age = undefined), We use null to reset a value
// person.age = null;

console.log(person.isAdmin)
console.log(person)
