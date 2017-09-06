const app = "I don't do much."
const dodger = $('#dodger')


$(dodger).on('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})


function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)

  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  }
}
