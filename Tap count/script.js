// const btn1= document.querySelector('.btnone')
// const btn2= document.querySelector('.btntwo')
// const num= document.querySelector('.num')



// let number= 0
// num.textContent= number
// const ringtone= new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.wav')
// ringtone.preload = 'auto'

// async function increase()
// {
//     number= number+1

//     if (number===5) { 
//     await ringtone.play()
//     number= 0
    
    
     

//     } 
//     num.innerText= number

// }

// function reset(){
//     number= 0
//     num.innerText= number
//     ringtone.currentTime= 0;
// }
// btn1.addEventListener('click',increase)
// btn2.addEventListener('click',reset)

// const btn1= document.querySelector('.btnone')
// const btn2= document.querySelector('.btntwo')
// const num= document.querySelector('.num')

// let number= 0
// num.textContent= number
// const ringtone= new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.wav')
// ringtone.preload = 'auto'

// // Audio enable variable
// let audioReady = false

// async function increase()
// {
//     number= number+1

//     // First click pe audio ready kar do
//     if (!audioReady) {
//         try {
//             await ringtone.play()
//             ringtone.pause()
//             ringtone.currentTime = 0
//             audioReady = true
//             console.log("Audio enabled!")
//         } catch(e) {
//             console.log("Audio permission issue")
//         }
//     }

//     if (number===108) { 
//         try {
//             ringtone.currentTime = 0  // Start se play karo
//             await ringtone.play()
//             number= 0
//         } catch(error) {
//             console.log("Play failed:", error)
//             number= 0
//         }
//     } 
//     num.innerText= number
// }

// function reset(){
//     number= 0
//     num.innerText= number

// }

// btn1.addEventListener('click',increase)
// btn2.addEventListener('click',reset)



const btn1= document.querySelector('.btnone')
const btn2= document.querySelector('.btntwo')
const num= document.querySelector('.num')

let number= 0
num.textContent= number
const ringtone= new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.wav')
ringtone.preload = 'auto'

// Chrome ke liye audio unlock
let chromeAudioReady = false

// First interaction pe audio ready kar do
document.addEventListener('click', async function enableAudio() {
    if (!chromeAudioReady) {
        try {
            ringtone.muted = true
            await ringtone.play()
            ringtone.pause()
            ringtone.muted = false
            ringtone.currentTime = 0
            chromeAudioReady = true
            console.log("Chrome audio enabled!")
        } catch(e) {
            console.log("Chrome audio failed:", e)
        }
    }
}, { once: true })

async function increase() {
    number= number+1

    if (number===108) { 
        try {
            if (chromeAudioReady) {
                ringtone.currentTime = 0
                await ringtone.play()
            } else {
                // Visual fallback
                document.body.style.backgroundColor = 'green'
                setTimeout(() => document.body.style.backgroundColor = '', 500)
            }
            number= 0
        } catch(error) {
            console.log("Chrome play failed:", error)
            number= 0
        }
    } 
    num.innerText= number
}

function reset(){
    number= 0
    num.innerText= number
    
}

btn1.addEventListener('click',increase)
btn2.addEventListener('click',reset)
