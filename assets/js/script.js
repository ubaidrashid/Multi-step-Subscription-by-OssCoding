"use script"
let stepOne = document.querySelector('.step-one')
let stepTwo = document.querySelector('.step-two')
let stepThree = document.querySelector('.step-three')
let stepFour = document.querySelector('.step-four')
let stepFive = document.querySelector('.step-five')

let num = document.querySelector('.num');
let numTwo = document.querySelector('.num2');
let numThree = document.querySelector('.num3');
let numFour = document.querySelector('.num4');

let acrades = document.querySelector('.acrades');
let advanced = document.querySelector('.advanced');
let pro = document.querySelector('.pro');
let acradeOverlay = document.querySelector('.acrade-overlay');
let acradeTOverlay = document.querySelector('.acrade2-overlay');
let acradeThOverlay = document.querySelector('.acrade3-overlay');

let mon = document.querySelector('.mon');
let yea = document.querySelector('.yea');
let btnBox = document.querySelector('.box')
let acPr = document.querySelector('.ac-pr')
let acPr2 = document.querySelector('.ac-pr2')
let acPr3 = document.querySelector('.ac-pr3')
let acDr = document.querySelector('.ac-dr1')
let acDr2 = document.querySelector('.ac-dr2')
let acDr3 = document.querySelector('.ac-dr3')
let clp = document.querySelector('.cl-p')
let clp2 = document.querySelector('.cl-p2')
let clp3 = document.querySelector('.cl-p3')
let cld = document.querySelector('.cl-d')
let cld2 = document.querySelector('.cl-d2')
let cld3 = document.querySelector('.cl-d3')

let clOne = document.querySelector('.cl1')
let clTwo = document.querySelector('.cl2')
let clThree = document.querySelector('.cl3')
let liesOne = document.querySelector('.lies1');
let liesTwo = document.querySelector('.lies2');
let liesThree = document.querySelector('.lies3');
let checkOne = document.querySelector('.check1')
let checkTwo = document.querySelector('.check2')
let checkThree = document.querySelector('.check3')
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputNumber = document.getElementById('number');
let nameError = document.querySelector('.input-error-name')
let emailError = document.querySelector('.input-error-email')
let numberError = document.querySelector('.input-error-number')
let packageName = document.querySelector('.package');
let subDuration = document.querySelector('.duration');
let subDuration2 = document.querySelector('.duration2');
let totalPayment = document.querySelector('.total-payment');
let services = document.querySelector('.services')
let akhriDura = document.querySelector('.akhri-dura')
let akhriDuration = document.querySelector('.akhri-duration')
let akhriBill = document.querySelector('.akhri-bill')

let dynamicyeaAc = document.createElement('li')
let dynamicmonAc = document.createElement('li')
let divAc = document.createElement('div')
let divAd = document.createElement('div')
let divPr = document.createElement('div')


function togglerOne() {
    let inpNam = inputName.value
    let inpEma = inputEmail.value
    let inpNum = inputNumber.value
    console.log(inpNam)
    console.log(inpEma)
    console.log(inpNum)

    if (!inpNam) {
        nameError.innerText = 'This field is Required'
        inputName.style.borderColor = 'hsl(354, 84%, 57%)'
    } else if (inpNam) {
        nameError.innerText = ''
        inputName.style.borderColor = 'hsla(231, 11%, 63%, 0.411)'
    }

    if (!inpEma) {
        emailError.innerText = 'This field is Required'
        inputEmail.style.borderColor = 'hsl(354, 84%, 57%)'
    } else if (inpEma) {
        emailError.innerText = ''
        inputEmail.style.borderColor = 'hsla(231, 11%, 63%, 0.411)'
    }

    if (!inpNum) {
        numberError.innerText = 'This field is Required'
        inputNumber.style.borderColor = 'hsl(354, 84%, 57%)'
    } else if (inpNum) {
        numberError.innerText = ''
        inputNumber.style.borderColor = 'hsla(231, 11%, 63%, 0.411)'
    }


    if (!inpEma || !inpNam || !inpNum) {
        console.log('all fields are required')

    } else {
        // alert(`click 'Enter' for next step `)
        setTimeout(() => {
            stepOne.classList.add('none');
            stepTwo.classList.remove('none');
            num.classList.remove('active');
            numTwo.classList.add('active');

        },1000)
    }
}

let utdMonth = acPr.innerText;
let utdMonthAd = acPr2.innerText;
let utdMonthPr = acPr3.innerText;


let utdYear;
let utdYearAd;
let utdYearPr;

let acSum;
let adSum;
let prSum;



function sum() {
    let acSumVal = acSum ? parseFloat(acSum) : 0;
    let adSumVal = adSum ? parseFloat(adSum) : 0;
    let prSumVal = prSum ? parseFloat(prSum) : 0;
    let totSum = parseFloat(totalPayment.innerText) 

    let pke = acSumVal + adSumVal + prSumVal + totSum;

    console.log(pke);
    akhriBill.innerText = pke
}

console.log(utdMonth)
function togglerTwo() {
    stepTwo.classList.add('none');
    stepThree.classList.remove('none');
    numTwo.classList.remove('active');
    numThree.classList.add('active');
    if (yea.classList.contains('active-col')) {
        clp.innerText = parseFloat(clp.innerText) * 10;
        clp2.innerText = parseFloat(clp2.innerText) * 10;
        clp3.innerText = parseFloat(clp3.innerText) * 10;
        cld.innerText = 'yr'
        cld2.innerText = 'yr'
        cld3.innerText = 'yr'
        // utd = clp.innerText;
    } else {
        clp.innerText = '1'
        clp2.innerText = '2'
        clp3.innerText = '2'
        cld.innerText = 'mo'
        cld2.innerText = 'mo'
        cld3.innerText = 'mo'
    }
}

function togglerThree() {
    if (acrades.classList.contains('acrade-active')) {
        packageName.innerText = 'Arcade'
        if (yea.classList.contains('active-col')) {
            totalPayment.innerText = utdYear;
            subDuration2.innerText = 'yr'
        } else {
            totalPayment.innerText = utdMonth;
            subDuration2.innerText = 'mo'
        }
    } else if (advanced.classList.contains('acrade-active')) {
        packageName.innerText = 'Advanced'
        if (yea.classList.contains('active-col')) {
            totalPayment.innerText = utdYearAd;
            subDuration2.innerText = 'yr'
        } else {
            totalPayment.innerText = utdMonthAd;
            subDuration2.innerText = 'mo'
        }
    } else if (pro.classList.contains('acrade-active')) {
        packageName.innerText = 'Pro'
        if (yea.classList.contains('active-col')) {
            totalPayment.innerText = utdYearPr;
            subDuration2.innerText = 'yr'
        } else {
            totalPayment.innerText = utdMonthPr;
            subDuration2.innerText = 'mo'
        }

    }

    if (yea.classList.contains('active-col')) {
        subDuration.innerText = 'Yearly'
        akhriDuration.innerText = 'Per Year'
        akhriDura.innerText = 'yr'
    } else {
        subDuration.innerText = 'Monthly'
        akhriDuration.innerText = 'Per Month'
        akhriDura.innerText = 'mo'
    }
    sum()

   

    // console.log(typeof parseFloat(pke))

    stepThree.classList.add('none')
    stepFour.classList.remove('none')
    numThree.classList.remove('active');
    numFour.classList.add('active');
}

function togglerFour(){
    stepFour.classList.add('none');
    stepFive.classList.remove('none')
}



function backOne() {
    stepOne.classList.remove('none');
    stepTwo.classList.add('none');
    num.classList.add('active');
    numTwo.classList.remove('active');
}
function backTwo() {
    stepTwo.classList.remove('none')
    stepThree.classList.add('none')
    numTwo.classList.add('active');
    numThree.classList.remove('active');
}
function backThree() {
    stepThree.classList.remove('none')
    stepFour.classList.add('none')
    numThree.classList.add('active');
    numFour.classList.remove('active');
}


acrades.addEventListener('click', () => {
    advanced.classList.remove('acrade-active')
    pro.classList.remove('acrade-active')
    acrades.classList.add('acrade-active')

    acradeOverlay.classList.remove('none')
    acradeTOverlay.classList.add('none')
    acradeThOverlay.classList.add('none')
})
advanced.addEventListener('click', () => {
    advanced.classList.add('acrade-active')
    pro.classList.remove('acrade-active')
    acrades.classList.remove('acrade-active')

    acradeOverlay.classList.add('none')
    acradeTOverlay.classList.remove('none')
    acradeThOverlay.classList.add('none')
})
pro.addEventListener('click', () => {
    advanced.classList.remove('acrade-active')
    pro.classList.add('acrade-active')
    acrades.classList.remove('acrade-active')

    acradeOverlay.classList.add('none')
    acradeTOverlay.classList.add('none')
    acradeThOverlay.classList.remove('none')
})

mon.addEventListener('click', () => {
    // console.log('chala')
    mon.classList.add('active-col')
    yea.classList.remove('active-col')
    btnBox.style.justifyContent = 'start'
    acPr.innerText = '9'
    acPr2.innerText = '12'
    acPr3.innerText = '15'
    acDr.innerText = 'mo'
    acDr2.innerText = 'mo'
    acDr3.innerText = 'mo'
    // utdMonth = acPr.innerText;
})

yea.addEventListener('click', () => {
    // return
    mon.classList.remove('active-col');
    yea.classList.add('active-col');
    btnBox.style.justifyContent = 'end';
    acPr.innerText = 90;
    acPr2.innerText = 120;
    acPr3.innerText = 150;
    acDr.innerText = 'yr';
    acDr2.innerText = 'yr';
    acDr3.innerText = 'yr';
    utdYear = acPr.innerText;
    utdYearAd = acPr2.innerText;
    utdYearPr = acPr3.innerText;
})

let arr = []
let arrAd = []
let arrPr = []




clOne.addEventListener('click', () => {
    liesOne.classList.toggle('none')
    clOne.classList.toggle('check-line-active')
    checkOne.classList.toggle('check-active')
    if (checkOne.classList.contains('check-active')) {

        dynamicyeaAc.innerHTML = `
        <div class="ser-name">online services</div>
        <div class="ser-charges">+$<span class="ser-pay">${parseFloat(clp.innerText)}</span>/<span>yr</span></div>
        `
        dynamicmonAc.innerHTML = `
        <div class="ser-name">online services</div>
        <div class="ser-charges">+$<span class="ser-pay">${parseFloat(clp.innerText)}</span>/<span>mo</span></div>
        `
        // services.appendChild(dynamic)
        if (yea.classList.contains('active-col')) {
            dynamicyeaAc.classList.add('Ac')
            arr.push(dynamicyeaAc)
        } else {
            dynamicmonAc.classList.add('Ac')
            arr.push(dynamicmonAc)
        }
        try {
            divAc.appendChild(...arr.slice(0, 1))
            services.appendChild(divAc)
            console.log(divAc)
        } catch (error) {
            console.log('bs koi nahi')
        }
        if (dynamicyeaAc.classList.contains('Ac')) {
            acSum = clp.innerText
        } else if (dynamicmonAc.classList.contains('Ac')) {
            acSum = clp.innerText
        }
        console.log(acSum)
    } else if (clOne.classList = 'check-lines cl1') {
        if (yea.classList.contains('active-col')) {
            // arr.shift(dynamicyeaAc)
            divAc.innerHTML = ''
            console.log(divAc)

            // try {
            // } catch (error) {
            //     console.log('bs koi nahi')
            // }
        } else {
            // arr.shift(dynamicmonAc)
            divAc.innerHTML = ''
            console.log(divAc)

            // try {

            // } catch (error) {
            //     console.log('bs koi nahi')
            // }
        }
        console.log(clp.innerText, '================clps')
    }

})
clTwo.addEventListener('click', () => {
    liesTwo.classList.toggle('none')
    clTwo.classList.toggle('check-line-active')
    checkTwo.classList.toggle('check-active')
    let dynamicyeaAd = document.createElement('li')
    let dynamicmonAd = document.createElement('li')
    if (checkTwo.classList.contains('check-active')) {

        dynamicyeaAd.innerHTML = `
        <div class="ser-name">Larger storage</div>
        <div class="ser-charges">+$<span class="ser-pay">${parseFloat(clp2.innerText)}</span>/<span>yr</span> </div>
        `
        dynamicmonAd.innerHTML = `
        <div class="ser-name">Larger storage</div>
        <div class="ser-charges">+$<span class="ser-pay">${parseFloat(clp2.innerText)}</span>/<span>mo</span> </div>
        `
        // services.appendChild(dynamic)
        if (yea.classList.contains('active-col')) {
            dynamicyeaAd.classList.add('Ad')
            arrAd.push(dynamicyeaAd)
        } else {
            dynamicmonAd.classList.add('Ad')
            arrAd.push(dynamicmonAd)
        }
        try {
            divAd.appendChild(...arrAd.slice(0, 1))
            services.appendChild(divAd)
        } catch (error) {
            console.log('bs koi nahi')
        }
        if (dynamicyeaAd.classList.contains('Ad')) {
            adSum = clp2.innerText
        } else if (dynamicmonAd.classList.contains('Ad')) {

            adSum = clp2.innerText
        }
        console.log(adSum)
    } else if (!checkTwo.classList.contains('check-active')) {
        if (yea.classList.contains('active-col')) {
            divAd.innerHTML = ''
        } else {
            divAd.innerHTML = ''
            // try {
            // } catch (error) {
            //     console.log('bs koi nahi')
            // }
        }
    }
    console.log(clp2.innerText, '================clps')

})
clThree.addEventListener('click', () => {
    liesThree.classList.toggle('none')
    clThree.classList.toggle('check-line-active')
    checkThree.classList.toggle('check-active')

    let dynamicyeapr = document.createElement('li')
    let dynamicmonpr = document.createElement('li')
    if (checkThree.classList.contains('check-active')) {

        dynamicyeapr.innerHTML = `
        <div class="ser-name">Customizable Profile</div>
        <div class="ser-charges">+$<span class="ser-pay">${parseFloat(clp3.innerText)}</span>/<span>yr</span> </div>
        `
        dynamicmonpr.innerHTML = `
        <div class="ser-name">Customizable Profile</div>
        <div class="ser-charges">+$<span class="ser-pay">${parseFloat(clp3.innerText)}</span>/<span>mo</span> </div>
        `
        // services.appendChild(dynamic)
        if (yea.classList.contains('active-col')) {
            dynamicyeapr.classList.add('Pr')

            arrPr.push(dynamicyeapr)
        } else {
            dynamicmonpr.classList.add('Pr')
            arrPr.push(dynamicmonpr)
        }
        try {
            divPr.appendChild(...arrPr.slice(0, 1))
            services.appendChild(divPr)
        } catch (error) {
            console.log('bs koi nahi')
        }
        if (dynamicyeapr.classList.contains('Pr')) {
            prSum = clp3.innerText;
        } else if (dynamicmonpr.classList.contains('Pr')) {

            prSum = clp3.innerText;
        }
        console.log(prSum)
    } else if (!checkThree.classList.contains('check-active')) {
        if (yea.classList.contains('active-col')) {
            divPr.innerHTML = ''
            // try {
            //     arrPr.shift(dynamicyeapr)
            //     services.innerHTML = ''
            //     services.appendChild(...arrPr)

            // } catch (error) {
            //     console.log('bs koi nahi')
            // }
        } else {
            divPr.innerHTML = ''
            // try {
            //     arrPr.shift(dynamicmonpr)
            //     services.innerHTML = ''
            //     services.appendChild(...arrPr)
            // } catch (error) {
            //     console.log('bs koi nahi')
            // }
        }
    }
    console.log(clp3.innerText, '================clps')



})





