function ex01() {
  const grav = 10
  var v0 = document.getElementById('velInicial').value
  var tSubida = v0 / grav
  var hMax = v0 ** 2 / (2 * grav)
  document.getElementById('alturaMax').innerHTML = 'Altura Máxima = ' + hMax
  document.getElementById('tempoSubida').innerHTML =
    'Tempo de Subida = ' + tSubida
}
