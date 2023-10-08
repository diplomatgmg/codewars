function validatePIN (pin) {
  return Boolean(pin.match(/^(\d{4}|\d{6})$/))
}