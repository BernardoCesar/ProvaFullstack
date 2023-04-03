const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const usuarioController= require('./controller/usuario-controller');
const premioController=require('./controller/premio-controller');
const reciclagemController=require('./controller/reciclagem-controller');

const uri="mongodb+srv://root:root@sensatolindao.kk7fiwe.mongodb.net/cidadeverde?retryWrites=true&w=majority";

mongoose.connect(uri).then(async(conn)=>{

    //testes para Criação
    //const usuario = usuarioController.criar("Be", '123', "642a045be9b0929efcafd45d", '1011', '1212');
    //const premio = premioController.criar('premio', 10, 1)
    //const reciclagem = reciclagemController.criar('Lata', 'imagem', 5, 20)

    //testes para Recuperação
    //const premio=await premioController.obter("642a045be9b0929efcafd45c");
    //const usuario=await usuarioController.obter("642a0492227b120c487d546b");
    //const reciclagem=await reciclagemController.obter("642a045be9b0929efcafd45d");

    //testes para Atualizar
    //const usuario = usuarioController.atualizar("642a0492227b120c487d546b","Sensato", '321', "642a19b96f6569ec6acc9307", '1212', '3434');
    //const premio = premioController.atualizar("642a045be9b0929efcafd45c", "premio atualizado", 11, 2);
    //const reciclagem = reciclagemController.atualizar("642a045be9b0929efcafd45d","garrafa atualizada","imagem atualizada", 20, 200 );

    //testes para Exclusão
    //const premio = premioController.deletar("642a1f8ba0517ab219feccb1")
    //const usuario = usuarioController.deletar("642a20f838f9f9dbb601e2fb")
    //const reciclagem = reciclagemController.deletar("642a20f838f9f9dbb601e2fc")
})
