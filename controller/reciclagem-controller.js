const mongoose = require('mongoose');
const Reciclagem = require('../model/reciclagem');

const criar = async (item, imagem, peso, pontos) =>{
    const reciclagem = new Reciclagem({item: item, imagem: imagem, peso: peso, data: new Date(), pontos: pontos });
    console.log(reciclagem);
    return await reciclagem.save();
}

const obter = async(param_reciclagem) => {

    //obter reciclagem
    const reciclagem = await Reciclagem.findById(param_reciclagem).exec();
    console.log(reciclagem)
    return{
        item:reciclagem.item,
        imagem:reciclagem.imagem,
        peso:reciclagem.peso,
        data:reciclagem.data,
        pontos:reciclagem.pontos
    };

}

const atualizar = async(param_reciclagem, item, imagem, peso, pontos ) =>{
    const verificacao = await Reciclagem.findById(param_reciclagem);

    if(verificacao){
      const reciclagem= await Reciclagem.updateOne({_id: new mongoose.Types.ObjectId(param_reciclagem)},
                                             {$set:{item: item,
                                              imagem: imagem,
                                              peso: peso,
                                              data: new Date(),
                                              pontos:pontos}});
        console.log(reciclagem)

    }else{
        console.log("id não existe")
    }
}

const deletar = async(param_reciclagem) =>{
    const verificacao = await Reciclagem.findById(param_reciclagem);
    if(verificacao){
        const reciclagem= await Reciclagem.deleteOne({_id:param_reciclagem});
          console.log(reciclagem)

      }else{
          console.log("id não existe")
      }
}

module.exports.criar=criar;
module.exports.obter=obter;
module.exports.atualizar=atualizar;
module.exports.deletar=deletar;

