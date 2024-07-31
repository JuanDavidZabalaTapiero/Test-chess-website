document.addEventListener('DOMContentLoaded', () => {

    var cuadro_seleccionado = null;

    document.querySelectorAll('.cuadro_blanco').forEach(function (cuadro) {
        cuadro.addEventListener('click', function () {

            if (cuadro_seleccionado == null) {
                cuadro.classList.add('cuadro_seleccionado');

                cuadro_seleccionado = cuadro.id;

                // CUADRO POSIBLE
                document.getElementById(parseInt(cuadro_seleccionado) + 8).classList.add('cuadro_movimiento_posible');

            } else if (cuadro_seleccionado == cuadro.id) {
                document.getElementById(cuadro_seleccionado).classList.toggle('cuadro_seleccionado');

                document.getElementById(parseInt(cuadro_seleccionado) + 8).classList.toggle('cuadro_movimiento_posible');
            } else {
                document.getElementById(cuadro_seleccionado).classList.remove('cuadro_seleccionado');

                document.getElementById(parseInt(cuadro_seleccionado) + 8).classList.remove('cuadro_movimiento_posible');

                cuadro_seleccionado = cuadro.id;

                document.getElementById(cuadro_seleccionado).classList.add('cuadro_seleccionado');

                document.getElementById(parseInt(cuadro_seleccionado) + 8).classList.add('cuadro_movimiento_posible');
            }
        })
    })

})