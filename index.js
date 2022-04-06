const giaQuaDem = 200;

const gioVao = new Date('2022-04-06 11:00:00');
const gioRa = new Date('2022-04-07 16:00:00');



function tinhTienPhong(gioVao, gioRa) {
    let total;
    let currentTime = 0
    const additionalTime = Number(gioRa.getHours() - gioVao.getHours())
    // logic
    if(additionalTime === 0 || additionalTime < 0) {
        total = 200
    }
    if(additionalTime > 0) {
        total = 200
        while(currentTime !== additionalTime) {
            currentTime += 1 
            total += 30
        }
        if(total > 400) {
            total = 400
        }
    }

    return total
}

const total = tinhTienPhong(gioVao, gioRa) 
console.log('Tong Tien phong la ' + total)

// Test Case 1
// Total: 200
// const gioVao = new Date('2022-04-06 13:00:00');
// const gioRa = new Date('2022-04-07 11:00:00');



// Test Case 2
// Total: 230
// const gioVao = new Date('2022-04-06 13:00:00');
// const gioRa = new Date('2022-04-07 13:00:00');

// Test Case 3
// Total: 260
// const gioVao = new Date('2022-04-06 13:00:00');
// const gioRa = new Date('2022-04-07 15:00:00');



// Test Case 4
// Total: 400
// const gioVao = new Date('2022-04-06 13:00:00');
// const gioRa = new Date('2022-04-07 20:00:00');



// Test Case 5
// Total: 230
// const gioVao = new Date('2022-04-06 10:00:00');
// const gioRa = new Date('2022-04-07 11:00:00');
