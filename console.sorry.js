const css = () => {

  const colors = [
    'red',
    'limegreen',
    'cyan',
    'green',
    'blue',
    'white',
    'yellow',
    'orange'
  ]

  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  return `
    text-shadow: -1px -1px 0px ${color1}, 0 0 5px white;
    color: ${color2};
    font-size: 24px;
  `
}

console.sorry = (text) => {
  console.log(`%c SORRY: ${text}`, css())
}