basic.forever(function () {
    if (true) {
        for (let index = 0; index < 3; index++) {
        	
        }
        music.play(music.createSoundExpression(WaveShape.Noise, 500, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 91, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . . . #
        # # # # #
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    led.toggle(2, 3)
    basic.showLeds(`
        . # . # #
        . . # # #
        # # # # .
        # # # . #
        # # # . .
        `)
})
