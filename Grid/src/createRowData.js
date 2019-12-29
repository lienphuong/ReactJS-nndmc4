import faker from "faker";

//const url = 'http://localhost:3000/Images/'
const url = 'https://nndmc4.clinicomp.com/Images/'

const rows = [{
    id: 0,
    avatar: url + 'BaliMynah.jpg',
    email: 'Bali.Mynah@gmail.com',
    firstName: 'Bali',
    lastName: 'Mynah',
    jobTitle: 'Eat fruit, seeds, worms, and insects',
    companyName: 'Island of Nusa Penida, Indonesia',
    phone: '+62 361 982700'
}, {
    id: 1,
    avatar: url + 'Iiwi.jpg',
    email: 'I.Iwi@gmail.com',
    firstName: "I'iwi",
    lastName: '',
    jobTitle: 'Extract nectar from the flowers of the Hawaiian lobelioids',
    companyName: 'Islands of Hawaiʻi, Maui, and Kauaʻi',
    phone: '(808) 669-6271'
}, {
    id: 2,
    avatar: url + 'Pigeon.jpg',
    email: 'Victoria.Crowned.Pigeon@gmail.com',
    firstName: 'Victoria Crowned',
    lastName: 'Pigeon',
    jobTitle: 'Eat fallen fruit',
    companyName: 'Lowland and swamp forests of northern New Guinea',
    phone: '308-2341'
}, {
    id: 3,
    avatar: url + 'Robin.jpg',
    email: 'European.Robin@gmail.com',
    firstName: 'European',
    lastName: 'Robin',
    jobTitle: 'Eat spiders, worms and insects, with berries, and fruit',
    companyName: 'British Isles',
    phone: '07123 456 789'
}, {
    id: 4,
    avatar: url + 'SuperbFairywren.jpg',
    email: 'Superb.Fairywren@gmail.com',
    firstName: 'Superb',
    lastName: 'Fairywren',
    jobTitle: 'Eat a wide range of small creatures, seeds, flowers, and fruit',
    companyName: 'Suburban Sydney, Canberra, and Melbourne',
    phone: '(02) 5551 5678'
}]

export function createBirdRowData() {
    return rows
}

function createFakeRow(index) {
    return {
        id: index,
        avatar: faker.image.avatar(),
        county: faker.address.county(),
        email: faker.internet.email(),
        title: faker.name.prefix(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        street: faker.address.streetName(),
        zipCode: faker.address.zipCode(),
        date: faker.date.past().toLocaleDateString(),
        jobTitle: faker.name.jobTitle(),
        catchPhrase: faker.company.catchPhrase(),
        companyName: faker.company.companyName(),
        jobArea: faker.name.jobArea(),
        jobType: faker.name.jobType(),
        phone: faker.phone.phoneNumber()
    };
}
export function createRowData(count) {
    return [...Array(count).keys()].map(i => createFakeRow(i))
}
