// const severino = function () {

// };

function severino (hora, funcionalidade) {
    console.log('--------------');
    console.log('--' + hora);
    console.log('--------------');
    funcionalidade()
}

severino('08:34', () => {
    console.log('Lavando o carro')
})

severino('13:02', () => {
    console.log('Buscano o mequetrefe no colégio')
    console.log('Comprando a ração do xero verde')
    console.log('alimentando meus papagaios')
})