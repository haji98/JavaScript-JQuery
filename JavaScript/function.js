/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class Validate {

    checkEmpty() {
        if (name === '' || math === '' || physics === '' || chemistry === '') {
            alert('Please insert content');
            return;
        } else return 1;
    }

    validateNumberType() {
        if ((value.math) && (value.physics) && (value.chemistry)) {
            return 1;
        } else if ((value.math) === 0 || (value.physics) === 0 || (value.chemistry) === 0) {
            return 1;
        } else {
            alert('Marks must be numeric');
            return 0;
        }


    }

    validateInput() {
        if (value.math < 0 || value.physics < 0 || value.chemistry < 0) {
            alert('Mark can not be smaller than 0');
            return;
        } else if (value.math > 10 || value.physics > 10 || value.chemistry > 10) {
            alert('Mark can not be greater than 10');
            return;
        }
        return 1;
    }

    validateInputForName() {
        let regex = /^[A-Za-z]+$/;
        if (!(regex.test(name))) {
            alert('Name can not contain number or special characters');
            return 0;
        } else return 1;
    }

}


function Calculate() {
    var name = document.getElementById("name");
    var math = document.getElementById("math");
    var physics = document.getElementById("physics");
    var chemistry = document.getElementById("chemistry");

    if (name.value === '') {
        alert('Please enter the full name!');
        return false;
    } else if (math.value === '') {
        alert('Please enter the Math score!');
        return false;
    } else if (physics.value === '') {
        alert('Please enter the Physics score!');
        return false;
    } else if (chemistry.value === '') {
        alert('Please enter the Chemistry score!');
        return false;
    }

    if (isNaN(math.value) || math.value > 10) {
        alert('Input Math score must be a number and be less than 10');
        return false;
    } else if (isNaN(physics.value) || physics.value > 10) {
        alert('Input Physics score must be a number and be less than 10');
        return false;
    } else if (isNaN(chemistry.value) || chemistry.value > 10) {
        alert('Input Chemistry score must be a number and be less than 10');
        return false;
    }

    let average = document.getElementById('average');
    average = (parseFloat(math.value) + parseFloat(physics.value) + parseFloat(chemistry.value)) / 3;
    let rank = document.getElementById('rank');
    if (average.toFixed(2) >= 8.5) {
        rank.innerText = 'Excellent';
        rank = 'Excellent';
    } else if (average.toFixed(2) >= 7) {
        rank.innerText = 'Good';
        rank = 'Good';
    } else if (average.toFixed(2) >= 5.5) {
        rank.innerText = 'Average';
        rank = 'Average';
    } else {
        rank.innerText = 'Below';
        rank = 'Below';
    }

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = name.value;
    cell2.innerHTML = math.value;
    cell3.innerHTML = physics.value;
    cell4.innerHTML = chemistry.value;
    cell5.innerHTML = average.toFixed(2);
    cell6.innerHTML = rank;

    return average.toFixed(2);
}