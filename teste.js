var people = [
    { name: 'joão', age: 18, city: 'Aquidauana' },
    { name: 'Lucas', age: 20, city: 'Anastácio' },
    { name: 'Mario', age: 14, city: 'Aquidauana' },
    { name: 'Maria', age: 16, city: 'São Paulo' },
    { name: 'Fernanda', age: 20, city: 'Anastácio' },
    { name: 'Abreu', age: 20, city: 'Anastácio' },
    { name: 'Luiza', age: 20, city: 'São Paulo' },
    { name: 'Marcos', age: 20, city: 'Anastácio' },
    { name: 'Joana', age: 20, city: 'Aquidauana' },
];
function groupPeopleByCity(people) {
    var results = new Map();
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (!results.has(person.city)) {
            results.set(person.city, { city: person.city, adults: 0, people: [] });
        }
        if (person.age >= 20) {
            results.get(person.city).adults += 1;
        }
        results.get(person.city).people.push(person.name);
    }
    return Array.from(results.values());
}
;
groupPeopleByCity(people);
console.log(groupPeopleByCity(people));
