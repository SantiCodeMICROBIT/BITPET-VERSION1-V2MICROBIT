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
    if (age > 79) {
        fun += -1
    } else if (age < 80) {
        fun += -3
    }
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
    if (age > 79) {
        fun += -2
    } else if (age < 80) {
        fun += -4
    }
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
    if (age > 79) {
        fun += -1
    } else if (age < 80) {
        fun += -3
    }
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
let age = 0
let fun = 10
let hunger = 10
age = 0
input.setSoundThreshold(SoundThreshold.Loud, 255)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    basic.pause(10000)
    age += -1
    while (age > 100) {
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
    while (fun < 0.1) {
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
    hunger += -0.1
    if (hunger == 1) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.InBackground)
    }
    while (hunger < 0.1) {
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
    basic.pause(10000)
    music.stopAllSounds()
    fun = 10
    hunger = 10
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.showNumber(age)
    basic.showIcon(IconNames.Asleep)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
})
