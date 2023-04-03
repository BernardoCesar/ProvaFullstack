const mongoose = require('mongoose');
const Premio = require('../model/premio');

const criar = async (descricao, pontos, quantidade) =>{
    const premio = new Premio({descricao: descricao, pontos: pontos, quantidade: quantidade});
    console.log(premio);
    return await premio.save();
}

const obter = async(param_premio) => {

    const premio = await Premio.findById(param_premio).exec();
    console.log(premio)
    return{
        pontos:premio.pontos,
        descricao:premio.descricao,
        quantidade:premio.quantidade
    };

}

const atualizar = async(param_premio, descricao, pontos, quantidade ) =>{
    const verificacao = await Premio.findById(param_premio);

    if(verificacao){
      const premio= await Premio.updateOne({_id: new mongoose.Types.ObjectId(param_premio)},
                                             {$set:{descricao: descricao,
                                             pontos: pontos,
                                             quantidade: quantidade}});
        console.log(premio)

    }else{
        console.log("id não existe")
    }
}

const deletar = async(param_premio) =>{
    const verificacao = await Premio.findById(param_premio);
    if(verificacao){
        const premio= await Premio.deleteOne({_id:param_premio});
          console.log(premio)

      }else{
          console.log("id não existe")
      }
}

module.exports.criar=criar;
module.exports.obter=obter;
module.exports.atualizar=atualizar;
module.exports.deletar=deletar;
