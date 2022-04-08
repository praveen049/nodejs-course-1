//const square = function (x) {
//    return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

const myEvent = {
    name: 'Birthday party',
    guestList: ['Me', 'Simba', 'Thor'],
    printMessage() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
myEvent.printMessage()
// console.log(square(2))