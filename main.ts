if (600 < pins.analogReadPin(AnalogPin.P1)) {
    robotbit.MotorRun(robotbit.Motors.M1B, 0)
    robotbit.MotorRun(robotbit.Motors.M2A, 120)
} else {
    robotbit.MotorRun(robotbit.Motors.M1B, -120)
    robotbit.MotorRun(robotbit.Motors.M2A, 0)
}
basic.pause(2000)
