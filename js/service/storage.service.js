'use strict'

function saveToStorage(key, value) {
  try {
    const json = JSON.stringify(value)
    localStorage.setItem(key, json)
  } catch (err) {
    if (err.name === 'QuotaExceededError') {
      console.warn('localStorage is full:', err)
      console.log('Storage is full! Please delete saved memes.')
      return false
    }
    throw err
  }
  return true
}

function loadFromStorage(key) {
  const json = localStorage.getItem(key)
  const value = JSON.parse(json)
  return value
}
