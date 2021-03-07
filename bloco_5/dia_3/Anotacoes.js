addEventListener(TipoEvento, função);

tipos de evento: click, dbclick, mouseover, mouseleave, keydown, scroll, change.

EXEMPLO 1: Tela carregada

windows.onload = jsCarregado //Quando a tela for carregada, chama a função jsCarregado.

function jsCarregado() {
	alert('Página foi carregada');
}

EXEMPLO 2: click

	let clickP = document.getElementById("clicar");

	clickP.addEventListener("click", recebeClick);

	function recebeClick(eventoDeOrigem) {
		console.log(eventoDeOrigem.target);
		console.log(eventoDeOrigem.type);
	}

EXEMPLO 3: Mouseover, mouse leave
	let mouseOverLeaveButton = document.getElementById('mouse-over-leave');

	mouseOverLeaveButton.addEventListener('mouseover', mouseEmCima); //Adiciona o evento de mouse over
	mouseOverLeaveButton.addEventListener('mouseleave', mouseSaiuDoElemento); //Adiciona eveneto mouse leave

	function mouseEmCima() {
		console.log('Mouse passou por cima');
	}

	function mouseSaiuDoElemento() {
		console.log('MOuse saiu do elemento');
	}

	