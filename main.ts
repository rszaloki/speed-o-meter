let Tb = 0
let Ta = 0
let d = 0
let A = 0
let B = 0
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
basic.forever(function () {
    d = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (A == 0 && d < 20) {
        A = d
        Ta = control.millis()
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    }
    if (B == 0 && d < 5) {
        B = d
        Tb = control.millis()
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
