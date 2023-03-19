function invertePalavra(string){
    var saida = "";
        for(var i=string.length-1; i>=0; i--){
            saida+= string[i];
        }
        console.log(saida);
}
invertePalavra("target")
invertePalavra("teste")
invertePalavra("palavra")