import Pedidos from '../../imports/api/pedidos'

Meteor.methods({
    resetPedidos() {
        // check(seccion, {
        //     key: String,
        //     titleLink: Match.Maybe(String),
        //     title: Match.Maybe(String),
        //     body: Match.Maybe(String),
        //     bodyInvisible: Match.Maybe(String),
        // });

        Pedidos.remove({})
    }
})
