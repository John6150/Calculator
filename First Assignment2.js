let smdis
let bgdis
let isClear = false
let firstValue = ''
let secondValue = ''
let operate = ''
let isEq = false
let isNeg = false
let isNeg2 = false
let memo_ = []
let i = 0;
let j = 0;


function calculate(value) {

    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    if (isClear == true) {
        bgdis.value = ''
        isClear = false
    }
    isNeg = true

    bgdis.value += value
}

function operator(sign) {

    if (operate && isNeg2 == true) {

        eq()

        console.log(operate);

    }
    operate = sign
    isNeg2 = true


    secondValue = bgdis.value

    if (isClear == false) {
        firstValue = bgdis.value
        smdis.value = bgdis.value + sign
        isClear = true
    }
    if (isClear == true) {
        firstValue = bgdis.value
        smdis.value = bgdis.value + sign
        isClear = true
    }

}

function eq() {

    for (i = 0; i > -1; i++) {
        if (isEq == false) {
            if (operate == '+') {
                smdis.value = smdis.value + bgdis.value
                secondValue = bgdis.value
                bgdis.value = Number(firstValue) + Number(bgdis.value)
                isEq = true
                isNeg2 = false

            }
            if (operate == '-') {
                smdis.value = smdis.value + bgdis.value
                secondValue = bgdis.value
                bgdis.value = Number(firstValue) - Number(bgdis.value)
                isEq = true
                isNeg2 = false


            }
            if (operate == '*') {
                smdis.value = smdis.value + bgdis.value
                secondValue = bgdis.value
                bgdis.value = Number(firstValue) * Number(bgdis.value)
                isEq = true
                isNeg2 = false


            }
            if (operate == '/') {
                smdis.value = smdis.value + bgdis.value
                secondValue = bgdis.value
                bgdis.value = Number(firstValue) / Number(bgdis.value)
                isEq = true
                isNeg2 = false

                memo_.push(bgdis.value)
            }
        } else {
            if (operate == '+') {
                smdis.value = secondValue + '+' + bgdis.value
                bgdis.value = Number(secondValue) + Number(bgdis.value)
                isEq = true
                isClear = true
                isNeg2 = false

            }
            if (operate == '-') {
                smdis.value = secondValue + '-' + bgdis.value
                bgdis.value = Number(secondValue) - Number(bgdis.value)
                isEq = true
                isClear = true
                isNeg2 = false



            }
            if (operate == '*') {
                smdis.value = secondValue + '*' + bgdis.value
                bgdis.value = Number(secondValue) * Number(bgdis.value)
                isEq = true
                isClear = true
                isNeg2 = false



            }
            if (operate == '/') {
                smdis.value = secondValue + '/' + bgdis.value
                bgdis.value = Number(secondValue) / Number(bgdis.value)
                isEq = true
                isClear = true
                isNeg2 = false



            }
        }
        memo_.push(bgdis.value)
        break
    }



}

function del3() {
    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    bgdis.value = bgdis.value.slice(0, -1)
}
function del2() {
    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    bgdis.value = ''
    smdis.value = ''

}
function del() {
    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    bgdis.value = ''
}

function mod() {
    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    smdis.value = bgdis.value + '/' + '100'
    bgdis.value = bgdis.value / 100
}

function sqrt() {
    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    smdis.value = 'Sqrt' + ' ' + bgdis.value
    bgdis.value = Math.sqrt(bgdis.value)
    isClear = true
}

function sqr() {
    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    smdis.value = 'Sqr' + ' ' + bgdis.value
    bgdis.value = bgdis.value * bgdis.value

    isClear = true

}

function frac() {
    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    smdis.value = 1 + '/' + bgdis.value
    bgdis.value = 1 / bgdis.value

    isClear = true
}

function negate() {
    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    if (isNeg == false) {
        smdis.value = 'Err' + ' ' + bgdis.value
        bgdis.value = bgdis.value * -1

        isClear = true
        isEq = true
    } else {
        isNeg2 = true
        bgdis.value = bgdis.value * -1

    }

}

function memory() {
    // console.log(memo_.length)
    // let memo = document.getElementById('special')
    smdis = document.getElementById('operation')
    bgdis = document.getElementById('display')

    if (j <= memo_.length && j != 1) {
        console.log(j)

        j = memo_.length - i
        bgdis.value = memo_[j - 1]
        // console.log(j)
        i++
    } else
    if(memo_.length == 0){
        bgdis.value = 'No record'

    }else {
        bgdis.value = 'Out of memory'

    }

    console.log(memo_)

}