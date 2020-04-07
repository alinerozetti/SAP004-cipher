const cipher =  {
  encode: function (palavra, offset)   {
    
    palavra = palavra.toUpperCase();
    offset = offset % 26;
    let palavraCodificada = '';
    
    for (let contador = 0; contador < palavra.length; contador++)
    {
      //este vai ser o numero correspondente a letra na tabela ascii
      let tabelaAsc = palavra.charCodeAt(contador);
    
      //acrescenta o valor do offset no valor da tabela asc
      tabelaAsc = tabelaAsc + offset;
    
      //verifica se o valor da tabela asc passou de 90 (valor da letra z)
      if(tabelaAsc > 90)
      {
        //tirando 26 faz o valor da tabela ascii voltar ao inicio (a)
        tabelaAsc = tabelaAsc - 26;
      }
      //função para retornar o caracter correspondente ao indice passado 
      palavraCodificada =palavraCodificada+ String.fromCharCode(tabelaAsc);	
    }
    
    return palavraCodificada;
    
    
  },
  decode: function(palavra, offset){

    palavra = palavra.toUpperCase();
    offset = offset % 26;
    let palavraDecodificada = '';

    for (let contador  = 0; contador < palavra.length; contador++) 
    {
     let tabelaAsc= palavra.charCodeAt(contador);
     tabelaAsc= tabelaAsc -
      offset;
     if(tabelaAsc< 65){
     tabelaAsc= tabelaAsc + 26;
     }
     palavraDecodificada= palavraDecodificada+ String.fromCharCode(tabelaAsc);
    }

    return palavraDecodificada;
  }
}

export default cipher;
