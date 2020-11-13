function onEnter(event: KeyboardEvent, callback: Function) {
  if (event.code === 'Enter' || event.keyCode === 13) {
    event.preventDefault()

    callback()
  }
}

export { onEnter }
