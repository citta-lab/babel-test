const studentAge = [12, 15, 10, 20];

const addAge = (array) => {
    const validAge = array.filter(age => age < 21);
    return [...studentAge, ...validAge];
}

export default addAge;