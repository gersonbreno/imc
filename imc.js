const resp = document.querySelector('#resultado')
const calcular = document.querySelector('.calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const peso = document.getElementById('peso').value
  const altura = document.getElementById('altura').value
  if (peso !== '' && altura !== '' && nome !== '') {
    let imcs = peso / (altura * altura).toFixed(2)

    let mesagem = ''

    if (imcs < 18.5) {
      mesagem = 'Seu Esta abaixo do peso'
    } else if (imcs < 25) {
      mesagem = 'seu peso esta na faixa ideial'
    } else if (imcs < 30) {
      mesagem = 'Seu peso esta fora do normal'
    } else if (imcs < 35) {
      mesagem = 'voce esta com obesidade nilvel 1'
    } else if (imc < 40) {
      mesagem = 'voce esta com obsidade nilvel 2'
    } else {
      mesagem = 'voce esta com obesidade nilvel 3'
    }

    resp.textContent = ` Seu nome: ${nome} O IMC e: ${imcs.toFixed(
      2
    )} sua classificação e ${mesagem}`
  } else {
    resp.textContent = 'erro prencher todos os campos'
  }
}

calcular.addEventListener('click', imc)

window.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    imc()
  }
})
