'use strict'

var currentScale = 1.0
const SHOW_MODAL_THRESHOLD = 0.4

const noButtonOnClickHandler = () => {
  const noButtonId = 'noButton'
  let noButton = getElementByIdWithLog(noButtonId)
  if (!noButton) return

  currentScale *= 0.9
  noButton.style.transform = `scale(${currentScale})`

  if (currentScale < SHOW_MODAL_THRESHOLD) {
    showModalWithId('noModal')
  }
}

const yesButtonOnClickHandler = () => {
  showModalWithId('yesModal')
}

const showModalWithId = (modalId) => {
  let modal = getElementByIdWithLog(modalId)
  if (!modal) return

  modal.showModal()
}

const getElementByIdWithLog = (id) => {
  let elmt = document.getElementById(id)
  if (!elmt) {
    console.error(`${id} does not exist`)
  }
  return elmt
}