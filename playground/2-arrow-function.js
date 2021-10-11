// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

//const square = (x) => x * x 

//console.log(square(4))

const eventObject = {
    name: 'Birthday Party',
    guestList: ['Dylan', 'Rachelle', 'Franklin'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

eventObject.printGuestList()
