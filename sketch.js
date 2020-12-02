for (let element of document.querySelectorAll('li')) {
  element.addEventListener('click', pokeInfo)
}

async function pokeInfo(event) {
  const name = event.target.textContent.toLowerCase()
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await response.json()
  info.textContent = `Base experience is ${data.base_experience}`
  picture.src = data.sprites.front_shiny
}
