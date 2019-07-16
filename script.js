function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    

    var data = new Date();
    var horas = data.getHours();    
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    if(horas < 10){
        horas = "0" + horas
    }
    if(minutos < 10){
        minutos = "0" + minutos
    }
    if(segundos < 10){
        segundos = "0" + segundos
    }


    msg.innerHTML = `Agora são ${horas} : ${minutos} : ${segundos} horas`;
    if(horas >= 0 && horas < 12){
        msg.innerHTML = `Agora são ${horas} : ${minutos} : ${segundos} horas, Bom Dia!`;
        
        img.src = 'manha.png'
        document.body.style.background = '#fee7b3'
    }else if(horas >=12 && horas < 18){
        msg.innerHTML = `Agora são ${horas} : ${minutos} : ${segundos} horas, Boa Tarde!`;
        img.src = 'tarde.png'
        document.body.style.background = '#f56f30'
    }else{
        msg.innerHTML = `Agora são ${horas} : ${minutos} : ${segundos} horas, Boa Noite!`;
        img.src = 'noite.png'
        document.body.style.background = '#162e38'
    }

    window.setInterval("carregar()",1000)
    
}

