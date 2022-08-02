let btnPlay = document.getElementById('btnPlay')
let btnReset = document.getElementById('reset')

btnReset.addEventListener('click', function() {
    window.location.reload()
})

btnPlay.addEventListener('click', function() {
    let video = document.getElementById('eatingVideo')
    video.play()
})

//Drag and Drop Events

let dragger = ["", "", "", "", ""]

function allowDrop(ev) {
    ev.preventDefault()
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev) {
    if (dragger[parseInt(ev.target.id)] == "") {
        var data = ev.dataTransfer.getData("text")
        dragger[parseInt(ev.target.id)] = data
        ev.target.appendChild(document.getElementById(data))
    }


if (dragger[0] != "" && dragger[1] != "" && dragger[2] != "" && dragger[3] != "" && dragger[4] != "") {

    if (dragger[0] == "1" && dragger[1] == "2" && dragger[2] == "3" && dragger[3] == "4" && dragger[4] == "5") {
        let audio = document.getElementById('confirm')
        audio.play()
        let question = document.querySelector('h1')
        question.innerHTML = "Excellent!"
        question.style.color = 'lime'

        setTimeout(function() {
            question.innerHTML = 'She is eating a hoagie!'
            question.style.color = 'fuchsia'
        }, 3000)
    } else {
        let audio = document.getElementById('boing')
        audio.play()
        let question = document.querySelector('h1')
        question.innerHTML = 'Try again!'
        question.style.color = 'red'
    }
  }
}