addEventListener(TipoEvento, função);

tipos de evento: click, dbclick, mouseover, mouseleave, keydown, scroll, change.

EXEMPLO 1: click

	let clickP = document.getElementById("clicar");

	clickP.addEventListener("click", recebeClick);

	function recebeClick(eventoDeOrigem) {
		console.log(eventoDeOrigem.target);
		console.log(eventoDeOrigem.type);
	}

EXEMPLO 2: Mouseover, mouse leave
	let mouseOverLeaveButton = document.getElementById('mouse-over-leave');

	mouseOverLeaveButton.addEventListener('mouseover', mouseEmCima); //Adiciona o evento de mouse over
	mouseOverLeaveButton.addEventListener('mouseleave', mouseSaiuDoElemento); //Adiciona eveneto mouse leave

	function mouseEmCima() {
		console.log('Mouse passou por cima');
	}

	function mouseSaiuDoElemento() {
		console.log('MOuse saiu do elemento');
	}

	