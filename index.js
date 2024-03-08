let btnGoTop = document.getElementById('btn-go-top')

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    btnGoTop.style.opacity = '1'
  } else {
    btnGoTop.style.opacity = '0'
  }
}

function goToTop() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For other browsers
}
