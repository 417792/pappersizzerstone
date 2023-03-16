radio.onReceivedNumber(function (receivedNumber) {
    yourturn = receivedNumber
    while (myturn == 0) {
        basic.showString("?")
    }
    basic.pause(1000)
    win_or_lose()
    basic.pause(3000)
    設定出值()
})
function win_or_lose () {
    if (myturn == yourturn) {
        basic.showIcon(IconNames.EigthNote)
    } else if (myturn == 9 && yourturn == 6) {
        basic.showIcon(IconNames.Yes)
    } else if (myturn == 6 && yourturn == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (myturn == 3 && yourturn == 9) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
}
input.onButtonPressed(Button.A, function () {
    if (myturn == 0) {
        basic.showIcon(IconNames.Scissors)
        myturn = 3
        radio.sendNumber(myturn)
    }
})
function 設定出值 () {
    myturn = 0
    yourturn = 0
    basic.showArrow(ArrowNames.East)
}
input.onButtonPressed(Button.AB, function () {
    if (myturn == 0) {
        basic.showIcon(IconNames.Square)
        myturn = 9
        radio.sendNumber(myturn)
    }
})
input.onButtonPressed(Button.B, function () {
    if (myturn == 0) {
        basic.showIcon(IconNames.SmallSquare)
        myturn = 6
        radio.sendNumber(myturn)
    }
})
let myturn = 0
let yourturn = 0
radio.setGroup(254)
設定出值()
basic.forever(function () {
	
})
