/* Task  1.2 */
console.log('Task  1.2')
for (let i = 1; i < 21; i++) {
console.log(i)
}

/* Task  1.3 */
console.log('Task  1.3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (const n of numbers) {
    if (n % 3 === 0) {
        console.log('eple')
    } else if (n % 5 === 0) {
        console.log('kake')
    } else {
        console.log(n)
    }
}
/* Task  1.4 */
const AddHeader = document.getElementById("title")


AddHeader.innerText = "Hello JavaScript"

/* Task  1.5 */
function changeDisplay () {
    const el = document.getElementById('magic')
    if (!el) return
    el.style.display = 'none'
}

function changeVisibility () {
    const el = document.getElementById('magic')
    if (!el) return
    el.style.visibility = 'hidden'
    el.style.display = 'block'
}

function reset () {
    const el = document.getElementById('magic')
    if (!el) return
    el.style.display = 'block'
    el.style.visibility = 'visible'
}
const btnDisplay = document.getElementById('displaybtn')
const btnVisibility = document.getElementById('visibilitybtn')
const btnReset = document.getElementById('resetbtn')

btnDisplay.addEventListener('click', changeDisplay)
btnVisibility.addEventListener('click', changeVisibility)
btnReset.addEventListener('click', reset)


/* Task 1.6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
]

const tech = document.getElementById("tech")

const items = technologies.map(name => {
  const li = document.createElement("li")
  li.innerText = name
  tech.appendChild(li)
  return li
})

let hueShift = 0;

function animate() {
  hueShift += 1
  
  for (let i = 0; i < items.length; i++) {
    const hue = (i * 360 / items.length + hueShift) % 360
    items[i].style.color = `hsl(${hue}, 100%, 50%)`
  }

  requestAnimationFrame(animate)
}

animate()
