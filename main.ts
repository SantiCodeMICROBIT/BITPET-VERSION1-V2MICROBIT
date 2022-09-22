input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.stopAllSounds()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.InBackground)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Confused)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
    }
    fun += -3
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    for (let index = 0; index < 4; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # # # .
            . . . . .
            `)
    }
    hunger += 1
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.stopAllSounds()
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        # # # . .
        . . . # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.UntilDone)
    fun += -1
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.stopAllSounds()
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.clearScreen()
    basic.pause(2000)
    fun += -3
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onSound(DetectedSound.Loud, function () {
    music.stopAllSounds()
    basic.showIcon(IconNames.Surprised)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    fun += -2
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    fun += 2
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
    basic.showIcon(IconNames.Angry)
    soundExpression.sad.playUntilDone()
    hunger += -1
    fun += -1
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.TiltRight, function () {
    music.stopAllSounds()
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . # # #
        . # . . .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.UntilDone)
    fun += -1
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.stopAllSounds()
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    fun += 1
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Asleep)
})
let fun = 0
let hunger = 10
input.setSoundThreshold(SoundThreshold.Loud, 197)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    basic.pause(1000)
    hunger += -0.1
    if (hunger == 1) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.InBackground)
    }
    while (hunger == 0.1) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # # # .
            . . . # .
            `)
        basic.pause(5000)
    }
})
basic.forever(function () {
    basic.pause(1000)
    fun += -0.1
    if (fun == 1) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.InBackground)
    }
    while (fun == 0.1) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # # # .
            . . . # .
            `)
        basic.pause(5000)
    }
})
