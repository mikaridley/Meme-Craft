'use strict'

var gImgs = []
_createImgs()

var gMeme = _createMeme(1)
console.log('gMeme:', gMeme)
var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

//create things
function _createMeme(name) {
  return {
    selectedImgId: gImgs[name - 1].id,
    selectedLineIdx: 0,
    lines: [
      {
        txt: 'Insert Text',
        size: 50,
        color: 'white',
      },
    ],
  }
}

function _createImg(name, keyWords) {
  return {
    id: generateRandomID(),
    url: `img/${name}.jpg`,
    keywords: ['funny', 'cat'],
  }
}

function _createImgs() {
  for (var i = 1; i <= 18; i++) {
    gImgs.push(_createImg(i))
  }
}

//set things
function setLineText(value, line) {
  gMeme.lines[0].txt = value
}

//get things
function getMeme() {
  return gMeme
}

function getImgs() {
  return gImgs
}

function getImgById(id) {
  var img = gImgs.find(img => img.id === id)
  return img
}
