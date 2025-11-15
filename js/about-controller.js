'use strict'

function onRenderAbout() {
  document.querySelector('.about').classList.remove('hidden')
  document.querySelector('.gallery').classList.add('hidden')
  document.querySelector('.editor').classList.add('hidden')
  document.querySelector('.saved-memes').classList.add('hidden')
  document.querySelector('.gallery-input-container').classList.add('hidden')
}
