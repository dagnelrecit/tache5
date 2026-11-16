input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.Yes)
})
let Seuil = input.temperature() + 2
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.temperature() > Seuil) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
