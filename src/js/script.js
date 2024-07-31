document.addEventListener('DOMContentLoaded', () => {

    var id_cuadro_seleccionado = null;

    document.querySelectorAll('.cuadro_blanco, .cuadro_negro').forEach(function (cuadro) {
        cuadro.addEventListener('click', function () {

            if (cuadro.querySelector('p')) {
                if (id_cuadro_seleccionado == null) {
                    cuadro.classList.add('cuadro_seleccionado');

                    id_cuadro_seleccionado = cuadro.id;

                    // P ADENTRO DEL DIV
                    var p_div = document.getElementById(id_cuadro_seleccionado).querySelector('p');

                    // CUADRO POSIBLE
                    var div_cuadro_seleccionado = document.getElementById(parseInt(id_cuadro_seleccionado) + 8);

                    div_cuadro_seleccionado.classList.add('cuadro_movimiento_posible');

                    // SI CLICKEO EL DIV CON BG DE COLOR VERDE
                    div_cuadro_seleccionado.addEventListener('click', function () {

                        document.getElementById(id_cuadro_seleccionado).classList.remove('cuadro_seleccionado');

                        // CUADRO POSIBLE
                        document.getElementById(parseInt(id_cuadro_seleccionado) + 8).classList.remove('cuadro_movimiento_posible');

                        var new_p_div = document.createElement('p');

                        new_p_div.innerText = p_div.innerHTML;

                        p_div.remove();

                        // AÑADO EL P AL DIV SELECCIONADO
                        div_cuadro_seleccionado.appendChild(new_p_div);

                        id_cuadro_seleccionado = null;

                    });

                } else if (id_cuadro_seleccionado == cuadro.id) {
                    document.getElementById(id_cuadro_seleccionado).classList.toggle('cuadro_seleccionado');

                    document.getElementById(parseInt(id_cuadro_seleccionado) + 8).classList.toggle('cuadro_movimiento_posible');

                    id_cuadro_seleccionado = null;
                } else {

                    document.getElementById(id_cuadro_seleccionado).classList.remove('cuadro_seleccionado');

                    document.getElementById(parseInt(id_cuadro_seleccionado) + 8).classList.remove('cuadro_movimiento_posible');

                    id_cuadro_seleccionado = cuadro.id;

                    document.getElementById(id_cuadro_seleccionado).classList.add('cuadro_seleccionado');

                    // CUADRO POSIBLE
                    var div_cuadro_seleccionado = document.getElementById(parseInt(id_cuadro_seleccionado) + 8);

                    // CAMBIO EL BG DEL CUADRO POSIBLE 
                    div_cuadro_seleccionado.classList.add('cuadro_movimiento_posible');

                    // SI CLICKEO EL DIV CON BG DE COLOR VERDE
                    div_cuadro_seleccionado.addEventListener('click', function () {

                        document.getElementById(id_cuadro_seleccionado).classList.remove('cuadro_seleccionado');

                        // CUADRO POSIBLE
                        document.getElementById(parseInt(id_cuadro_seleccionado) + 8).classList.remove('cuadro_movimiento_posible');

                        var new_p_div = document.createElement('p');

                        new_p_div.innerText = p_div.innerHTML;

                        p_div.remove();

                        // AÑADO EL P AL DIV SELECCIONADO
                        div_cuadro_seleccionado.appendChild(new_p_div);

                        id_cuadro_seleccionado = null;

                    });
                }
            } else {
                return;
            }
        })
    })

})