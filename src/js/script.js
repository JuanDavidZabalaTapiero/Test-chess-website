document.addEventListener('DOMContentLoaded', () => {

    let idCuadroSeleccionado = null;

    document.querySelectorAll('.cuadro_blanco, .cuadro_negro').forEach(cuadro => {
        cuadro.addEventListener('click', () => {

            const p = cuadro.querySelector('p');
            if (!p) return;

            if (idCuadroSeleccionado === null) {
                seleccionarCuadro(cuadro, p);
            } else if (idCuadroSeleccionado === cuadro.id) {
                deseleccionarCuadro(cuadro);
            } else {
                cambiarSeleccion(cuadro, p);
            }
        });
    });

    function seleccionarCuadro(cuadro, p) {
        cuadro.classList.add('cuadro_seleccionado');
        idCuadroSeleccionado = cuadro.id;

        const divCuadroPosible = document.getElementById(parseInt(idCuadroSeleccionado) + 8);
        divCuadroPosible.classList.add('cuadro_movimiento_posible');

        divCuadroPosible.addEventListener('click', moverP, { once: true });
    }

    function deseleccionarCuadro(cuadro) {
        cuadro.classList.toggle('cuadro_seleccionado');
        const divCuadroPosible = document.getElementById(parseInt(idCuadroSeleccionado) + 8);
        divCuadroPosible.classList.toggle('cuadro_movimiento_posible');
        idCuadroSeleccionado = null;
    }

    function cambiarSeleccion(cuadro, p) {
        const cuadroAnterior = document.getElementById(idCuadroSeleccionado);
        cuadroAnterior.classList.remove('cuadro_seleccionado');
        const divCuadroPosible = document.getElementById(parseInt(idCuadroSeleccionado) + 8);
        divCuadroPosible.classList.remove('cuadro_movimiento_posible');

        seleccionarCuadro(cuadro, p);
    }

    function moverP(event) {
        const cuadroSeleccionado = document.getElementById(idCuadroSeleccionado);
        cuadroSeleccionado.classList.remove('cuadro_seleccionado');

        const divCuadroPosible = document.getElementById(parseInt(idCuadroSeleccionado) + 8);
        divCuadroPosible.classList.remove('cuadro_movimiento_posible');

        const newP = document.createElement('p');
        const p = cuadroSeleccionado.querySelector('p');
        newP.innerText = p.innerHTML;
        p.remove();

        event.currentTarget.appendChild(newP);
        idCuadroSeleccionado = null;
    }

});
