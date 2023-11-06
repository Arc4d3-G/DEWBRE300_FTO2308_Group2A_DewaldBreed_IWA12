// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = {
    status: document.querySelector('#book1 .status'),
    reserve: document.querySelector('#book1 .reserve'),
    checkout: document.querySelector('#book1 .checkout'),
    checkin: document.querySelector('#book1 .checkin'),
}
const book2 = {
    status: document.querySelector('#book2 .status'),
    reserve: document.querySelector('#book2 .reserve'),
    checkout: document.querySelector('#book2 .checkout'),
    checkin: document.querySelector('#book2 .checkin'),
}
const book3 = {
    status: document.querySelector('#book3 .status'),
    reserve: document.querySelector('#book3 .reserve'),
    checkout: document.querySelector('#book3 .checkout'),
    checkin: document.querySelector('#book3 .checkin'),
}

book1.checkin.style.color = ""
book1.status.style.color = STATUS_MAP[book1.status.innerText].color
book1.reserve.disabled = STATUS_MAP[book1.status.innerText].canReserve ? false : true
book1.checkout.disabled = STATUS_MAP[book1.status.innerText].canCheckout ? false : true
book1.checkin.disabled = STATUS_MAP[book1.status.innerText].canCheckIn ? false : true

book2.checkin.style.color = ""
book2.status.style.color = STATUS_MAP[book2.status.innerText].color
book2.reserve.disabled = STATUS_MAP[book2.status.innerText].canReserve ? false : true
book2.checkout.disabled = STATUS_MAP[book2.status.innerText].canCheckout ? false : true
book2.checkin.disabled = STATUS_MAP[book2.status.innerText].canCheckIn ? false : true

book3.checkin.style.color = ""
book3.status.style.color = STATUS_MAP[book3.status.innerText].color
book3.reserve.disabled = STATUS_MAP[book3.status.innerText].canReserve ? false : true
book3.checkout.disabled = STATUS_MAP[book3.status.innerText].canCheckout ? false : true
book3.checkin.disabled = STATUS_MAP[book3.status.innerText].canCheckIn ? false : true