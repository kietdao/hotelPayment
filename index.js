const overNightPrice = 200;

const checkIn = new Date('2022-04-06 12:00:00');
const checkOut = new Date('2022-05-07 18:00:00');



function hotelPayment(checkIn, checkOut) {
    let total
    let additionalPrice = 0
    let countTime = 0
    let totalDate = Math.floor((checkOut - checkIn) / (1000 * 60 * 60 * 24))
    let checkInHour = checkIn.getHours()
    let checkOutHour = checkOut.getHours()
    if(checkIn.getHours() > 12) {
        checkInHour = 12
    }
    if(totalDate) {
        total = overNightPrice * totalDate
    } else {
        total = overNightPrice
    }
    const additionalHour = checkOutHour - checkInHour
    if(additionalHour > 0) {
        while(countTime != additionalHour) {
            countTime += 1
            additionalPrice += 30
        }
        if(additionalPrice > 200) {
            additionalPrice = 200
            total = total + additionalPrice
        } else {
            total = total + additionalPrice
        }
    }
    console.table({
        "Check In Date": checkIn.getDate() + "/" + checkIn.getMonth() + "/" + checkIn.getFullYear(),
        "Check Out Date": checkOut.getDate() + "/" + checkOut.getMonth() + "/" + checkOut.getFullYear(),
        "Total Date": totalDate,
        "Additional Hours": additionalHour,
        "Additional Fee": additionalPrice,
        "Total Amount": total
    })
}

hotelPayment(checkIn, checkOut)


// Test Case 1
// Total: 200
// const checkIn = new Date('2022-04-06 13:00:00');
// const checkOut = new Date('2022-04-07 11:00:00');
hotelPayment(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 11:00:00'))

// Test Case 2
// Total: 230
// const checkIn = new Date('2022-04-06 13:00:00');
// const checkOut = new Date('2022-04-07 13:00:00');
hotelPayment(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 13:00:00'))


// Test Case 3
// Total: 290
// const checkIn = new Date('2022-04-06 13:00:00');
// const checkOut = new Date('2022-04-07 15:00:00');
hotelPayment(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 15:00:00'))


// Test Case 4
// Total: 400
// const checkIn = new Date('2022-04-06 13:00:00');
// const checkOut = new Date('2022-04-07 20:00:00');
hotelPayment(new Date('2022-04-06 13:00:00'), new Date('2022-04-07 20:00:00'))

// Test Case 5
// Total: 230
// const checkIn = new Date('2022-04-06 10:00:00');
// const checkOut = new Date('2022-04-07 11:00:00');
hotelPayment(new Date('2022-04-06 10:00:00'), new Date('2022-04-07 11:00:00'))
