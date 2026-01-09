<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meme‑Craft — Meme Generator</title>
</head>
<body>

<h1>Meme‑Craft — Meme Generator 🎉</h1>
<p>This is my <strong>second full-stack bootcamp project</strong>, a super interactive Meme Generator built using <strong>vanilla JavaScript, HTML, and CSS</strong>. Users can select an image, add text or stickers, and download their meme directly to their device.</p>

<hr>

<h2>Live Demo 🚀</h2>
<p>You can try the game <a target="_blank" href="https://mikaridley.github.io/Meme-Craft/">here</a></p>

<h2>Preview 📸</h2>
<img src="memeCraftPreview.png" alt="Screenshot of the game">

<hr>

<h2>Features ✨</h2>

<h3>Core Functionality</h3>
<ul>
  <li>Image gallery with selectable templates</li>
  <li>Meme editor with canvas for adding text</li>
  <li>Live text preview while typing</li>
  <li>Color picker for changing text color</li>
  <li>Download the final meme image</li>
</ul>

<h3>Advanced Features</h3>
<ul>
  <li>Multiple text lines with independent properties (size, color, font, position)</li>
  <li>Switch line selection for editing</li>
  <li>Frame around selected line for clear editing</li>
  <li>Drag & Drop lines and stickers on canvas</li>
  <li>Delete line functionality</li>
  <li>Text alignment: left, center, right</li>
  <li>Rotate text lines</li>
</ul>

<h3>Gallery & User Experience</h3>
<ul>
  <li>Responsive gallery and editor for desktop and mobile</li>
  <li>Filter images by keywords</li>
  <li>Upload images from your device</li>
  <li>Inline text editing on canvas</li>
  <li>Support for multiple image aspect ratios</li>
  <li>Saved memes section using <strong>localStorage</strong></li>
  <li>Random meme generator button</li>
  <li>Dark/light theme support</li>
  <li>Share memes via Web Share API</li>
  <li>i18n support for multiple languages (e.g., Hebrew)</li>
</ul>

<h3>Technical Highlights</h3>
<ul>
  <li>Data managed via <strong>memeService</strong> using objects like:
<pre><code>var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    { txt: 'Hello World', size: 20, color: 'red' }
  ]
};</code></pre>
  </li>
  <li>Dynamic canvas rendering of images and text lines</li>
  <li>Responsive design with pure CSS</li>
  <li>Event handling for clicks, drag-and-drop, and input changes</li>
  <li>Fully functional without external libraries or frameworks</li>
</ul>

<h2>How to Use 🎮</h2>
<ol>
  <li>Open <code>index.html</code> in a web browser.</li>
  <li>Select an image from the gallery or upload your own.</li>
  <li>Add text lines or stickers using the meme editor.</li>
  <li>Use controls to edit font size, color, alignment, rotation, or delete lines.</li>
  <li>Drag and position lines or stickers freely on the canvas.</li>
  <li>Preview changes in real-time.</li>
  <li>Download the final meme or save it to the “Saved Memes” section.</li>
  <li>Share via Web Share API if supported.</li>
</ol>

<h2>Technologies Used 🛠️</h2>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript (Vanilla)</li>
  <li>Canvas for dynamic image editing</li>
  <li>DOM Manipulation</li>
  <li>localStorage for saved memes</li>
</ul>

<hr>

<h2>Extra Notes 💡</h2>
<ul>
  <li>This project helped me practice <strong>JavaScript logic</strong>, <strong>Canvas API usage</strong>, <strong>DOM manipulation</strong>, and <strong>responsive UI design</strong>.</li>
  <li>It demonstrates advanced front-end interactions without any external libraries.</li>
  <li>Mobile-friendly design ensures usability across devices.</li>
</ul>

<p>Made by <strong>Mika Ridley</strong></p>

</body>
</html>
