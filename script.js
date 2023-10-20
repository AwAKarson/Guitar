class notes {
    constructor(name) {
        this.name = name
        this.notes = new Audio('notes/' + this.name + '.mp3')
    }
}
const E2 = new notes("E2")
const F2 = new notes("F2")
const Fs2 = new notes("Fs2")
const G2 = new notes("G2")
const Gs2 = new notes("Gs2")
const A3 = new notes("A3")
const As3 = new notes("As3")
const B3 = new notes("B3")
const C3 = new notes("C3")
const Cs3 = new notes("Cs3")
const D3 = new notes("D3")
const Ds3 = new notes("Ds3")
const E3 = new notes("E3")
const F3 = new notes("F3")
const Fs3 = new notes("Fs3")
const G3 = new notes("G3")
const Gs3 = new notes("Gs3")
const A4 = new notes("A4")
const As4 = new notes("As4")
const B4 = new notes("B4")
const C4 = new notes("C4")
const Cs4 = new notes("Cs4")
const D4 = new notes("D4")
const Ds4 = new notes("Ds4")
const E4 = new notes("E4")
const F4 = new notes("F4")
const Fs4 = new notes("Fs4")
const G4 = new notes("G4")
const Gs4 = new notes("Gs4")

const playNoteMode1 = (note, number) => {
    note.cloneNode().play();
    for (string = 0; string < 6; string++) {
        position = number + 1 + stringDiff[string]
        if (position < 14 && position >= 1) {
            a = document.querySelector('.row' + string).querySelector('.column' + (number + 1 + stringDiff[string]))
            a.classList.remove('not_active')
            a.classList.add('active')
        } 
    }
    setTimeout(() => {
        for (string = 0; string < 6; string++) {
            position = number + 1 + stringDiff[string]
            if (position < 14 && position >= 1) {
                a = document.querySelector('.row' + string).querySelector('.column' + (number + 1 + stringDiff[string]))
                a.classList.remove('active')
                a.classList.add('not_active')
            } 
        }
    }, 1000)
}

const playNoteMode2 = (note, number) => {
    note.cloneNode().play();
    a = document.querySelector('.row' + (5 - (number % 6))).querySelector('.column' + (Math.floor(number / 6) + 1))
    a.classList.remove('not_active')
    a.classList.add('active')
    setTimeout(() => {
        a = document.querySelector('.row' + (5 - (number % 6))).querySelector('.column' + (Math.floor(number / 6) + 1))
        a.classList.remove('active')
        a.classList.add('not_active')
    }, 1000);
}

const keyboardKeysMode1 = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 90, 88, 67, 86, 66, 78]
const keyboardKeysMode2 = [192, 49, 50, 51, 52, 53, 9, 81, 87, 69, 82, 84, 20, 65, 83, 68, 70, 71, 16, 90, 88, 67, 86, 66, 54, 55, 56, 57, 48, 189, 89, 85, 73, 79, 80, 219, 72, 74, 75, 76, 186, 222, 78, 77, 188, 190, 191, 13]
const relativeKeys = [E2, F2, Fs2, G2, Gs2, A3, As3, B3, C3, Cs3, D3, Ds3, E3, F3, Fs3, G3, Gs3, A4, As4, B4, C4, Cs4, D4, Ds4, E4, F4, Fs4, G4, Gs4]
const relativeKeysMode2 = [E2, A3, D3, G3, B4, E4, F2, As3, Ds3, Gs3, C4, F4, Fs2, B3, E3, A4, Cs4, Fs4, G2, C3, F3, As4, D4, G4]
const stringNames = ["E'", "B", "G", "D", "A", "E"]
const stringDiff = [-24, -19, -15, -10, -5, 0]

var capo = 0

for (let row = 0; row < 6; row++) {
    var tr = document.createElement('tr')
    tr.className = "row" + row
    for (let column = 0; column < 14; column++) {
        var td = document.createElement('td')
        td.className = "column" + column + " not_active"
        if (column == 0) td.innerHTML = stringNames[row]
        tr.appendChild(td)
    }
    document.querySelector("table").appendChild(tr)
}

window.addEventListener("keydown", ({keyCode}) => {
    if (!document.querySelector("#mode").checked) {
        for (let i1 = 0; i1 < keyboardKeysMode1.length; i1++) {
            if (keyCode === keyboardKeysMode1[i1]) return playNoteMode1(relativeKeys[i1].notes, i1)
        }
        if (keyCode != 18) console.log(keyCode)
    } else {
        for (let i2 = 0; i2 < keyboardKeysMode2.length; i2++) {
            if (keyCode === keyboardKeysMode2[i2]) return playNoteMode2(relativeKeysMode2[i2].notes, i2)
        }
    }
})
