const mongoose = require('mongoose');
const { populate } = require('../model/usuario');
const Usuario = require('../model/usuario');

const criar = async (nome, senha, pontos, latitude, longitude) =>{
    const usuario = new Usuario({nome: nome, senha:senha, pontos: pontos, latitude: latitude, longitude: longitude });
    console.log(usuario);
    return await usuario.save();
}

const obter = async(param_usuario) => {

    const usuario = await Usuario.findById(param_usuario).populate("pontos").exec();
    console.log(usuario)
    return{
        nome:usuario.nome,
        senha:usuario.senha,
        pontos:usuario.pontos.pontos,
        latitude:usuario.latitude,
        longitude:usuario.longitude
    };

}

const atualizar = async(param_usuario, nome, senha, pontos, latitude, longitude ) =>{
    const verificacao = await Usuario.findById(param_usuario);

    if(verificacao){
      const usuario= await Usuario.updateOne({_id: new mongoose.Types.ObjectId(param_usuario)},
                                             {$set:{nome: nome,
                                              senha: senha,
                                              pontos: pontos,
                                              latitude: latitude,
                                              longitude:longitude}});
        console.log(usuario)

    }else{
        console.log("id não existe")
    }
}

const deletar = async(param_usuario) =>{
    const verificacao = await Usuario.findById(param_usuario);
    if(verificacao){
        const usuario= await Usuario.deleteOne({_id:param_usuario});
          console.log(usuario)

      }else{
          console.log("id não existe")
      }
}

module.exports.criar=criar;
module.exports.obter=obter;
module.exports.atualizar=atualizar;
module.exports.deletar=deletar;



