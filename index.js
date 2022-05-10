let botaoPesquisar = document.getElementById('botaoPesquisar')
let titulo = document.getElementById('apodTitulo')
let texto = document.getElementById('apodTxt')
let img = document.getElementById('apodImg')

botaoPesquisar.addEventListener('click', function(){
    apiKey = 'BfhPwLYLfzhkf2tBwWpsd4PdGSX9bVUBF4Dw26LW'
    data = document.getElementById('selecionaData').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${data}`
  
    $.ajax({
        url: url,
        success: function(result){
            titulo.innerHTML = `<hr style="width:50%;color:white;background-color:white;margin-bottom:3%">${result.title}<hr style="width:50%;color:white;background-color:white;margin-bottom:3%">`
            texto.innerHTML = `${result.explanation}`
            img.innerHTML = `<img src="${result.url}"/>`
          }
      })
  });
  
  