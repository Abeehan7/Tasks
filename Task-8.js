let height = document.getElementById('height');
let weight = document.getElementById('weight');
let bmiValue = document.getElementById('bmi-value');
let result = document.getElementById('result');



function calculateBMI(h, w) {
    let bmi = w / (h * h);
    return bmi
}

function getValue() {
    height = height.value;
    weight = weight.value;

    let bmi = calculateBMI(height, weight)

    let res = "";
    if (bmi < 16) {
        res = "Severe Thinness"
    } else if (bmi < 17) {
        res = "Moderate Thinness"
    } else if (bmi <= 18.5) {
        res = "Mild Thinness"
    } else if (bmi <= 25) {
        res = "Normal"
    } else if (bmi <= 30) {
        res = "OverWeight"
    } else if (bmi <= 35) {
        res = "Obese Class I"
    } else if (bmi <= 40) {
        res = "Obese Class II"
    } else if (bmi > 40) {
        res = "Obese Class III"
    } else {
        res = "Invalid"
    }

    console.log(res);

    bmiValue.innerText = bmi.toFixed(1)
    result.innerHTML = res


};


