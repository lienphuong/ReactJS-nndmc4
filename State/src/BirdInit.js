//export const url = 'http://localhost:3000/Images/'
export const url = 'https://nndmc4.clinicomp.com/Images/'
export const jsonUrl = url + 'images.json'

const birdKeys = ['balimynah', 'iiwi', 'pigeon', 'robin', 'wren'];
export const defaultBirds = Object.fromEntries(
    birdKeys.map(key => [key, false])
)

export const birdMapping = {
    balimynah: "Bali Mynah",
    iiwi: "I'iwi",
    pigeon: "Pigeon",
    robin: "Robin",
    wren: "Superb Fairywren"
}

export const images = {
    balimynah: url + "BaliMynah.jpg",
    iiwi: url + "Iiwi.jpg",
    pigeon: url + "Pigeon.jpg",
    robin: url + "Robin.jpg",
    wren: url + "SuperbFairywren.jpg"
}


