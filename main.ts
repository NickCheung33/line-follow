input.onButtonPressed(Button.A, function () {
    while (true) {
        if (powerbrick.Tracer(powerbrick.Ports.PORT7, powerbrick.Slots.A) && !(powerbrick.Tracer(powerbrick.Ports.PORT7, powerbrick.Slots.B))) {
            powerbrick.MotorRun(powerbrick.Motors.M1, 255)
            powerbrick.MotorRun(powerbrick.Motors.M2, 0)
        } else if (powerbrick.Tracer(powerbrick.Ports.PORT7, powerbrick.Slots.B) && !(powerbrick.Tracer(powerbrick.Ports.PORT7, powerbrick.Slots.A))) {
            powerbrick.MotorRun(powerbrick.Motors.M1, 0)
            powerbrick.MotorRun(powerbrick.Motors.M2, 255)
        } else if (powerbrick.Tracer(powerbrick.Ports.PORT7, powerbrick.Slots.A) && powerbrick.Tracer(powerbrick.Ports.PORT7, powerbrick.Slots.B)) {
            powerbrick.MotorRun(powerbrick.Motors.M1, 255)
            powerbrick.MotorRun(powerbrick.Motors.M2, 255)
        } else if (!(powerbrick.Tracer(powerbrick.Ports.PORT7, powerbrick.Slots.A)) && !(powerbrick.Tracer(powerbrick.Ports.PORT7, powerbrick.Slots.B))) {
            powerbrick.MotorStopAll()
        }
    }
})
