let btnGoTop = document.getElementById('btn-go-top')

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnGoTop.style.display = 'block'
  } else {
    btnGoTop.style.display = 'none'
  }
}

function goToTop() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For other browsers
}
