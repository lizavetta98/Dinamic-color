const board = document.querySelector('#board')
const colors = ['#E6E6FA', '#D8BFD8','#DDA0DD','#DA70D6','#FF00FF','#EE82EE','#BA55D3','#E6E6FA','#9370DB','#8A2BE2','#9400D3','#9932CC','#8B008B','#800080','#4B0082','#6A5ACD','#483D8B']
const SQUARES_NUMBERS = 500

for (let i = 0; i < SQUARES_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    square.addEventListener('touchstart', () => setColor(square))
    square.addEventListener('touchmove', (event) => {
        event.preventDefault()
        const touch = event.touches[0]
        const target = document.elementFromPoint(touch.clientX, touch.clientY)
        if (target && target.classList.contains('square')) {
            setColor(target)
        }
    })
    square.addEventListener('touchend', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
