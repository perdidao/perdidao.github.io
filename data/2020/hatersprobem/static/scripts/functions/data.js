async function getData() {
  const dataLocation = `./static/data/resultados.json`
  return await $.getJSON(dataLocation)
}

buildNumbers = (items, placeholder) => {
  let html = ''

  const size = items.length
  const preferred = 6
  const diff = preferred - size
  let i

  if (size < preferred) {
    for (i = 0; i < diff; i++) {
      html += `<span class="results-value__number">0</span>`
    }
  }

  $.each(items, (i) => {
    html += `<span class="results-value__number">${items[i]}</span>`
  })

  $(`#result-${placeholder}`).html(html)
}

getData().then((r) => {
  const value = r.valor.toString().split('')
  const people = r.pessoas.toString().split('')

  buildNumbers(value, 'value')
  buildNumbers(people, 'people')
})
