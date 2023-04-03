var i = 0;

document.addEventListener("keyup", function(event){
    if (event.keyCode === 27){ 
        document.getElementById('final').style.display = 'none';
        document.getElementById('estasquad-video').style.display = 'none';
        document.getElementById('princesas-video').style.display = 'none';
        document.getElementById('arlett-video').style.display = 'none';
        document.getElementById('puzzle').style.display = 'none';
    } else return;
});

function counter(){
    i++;
    if(i == 20){
        document.getElementById('age').innerHTML = i;
        document.getElementById('flame').style.display = 'none';
        document.getElementById('blinking-glow').style.display = 'none';
        document.getElementById('glow').style.display = 'none';
        finalImg()
    } else if (i == 18){
        document.getElementById('tailus4').style.display = 'inline';
        document.getElementById('tailus3').style.display = 'none';
        document.getElementById('age').innerHTML = i;
    } else if (i == 12){
        document.getElementById('tailus3').style.display = 'inline';
        document.getElementById('tailus2').style.display = 'none';
        document.getElementById('age').innerHTML = i;
    }else if (i == 6){
        document.getElementById('tailus2').style.display = 'inline';
        document.getElementById('tailus1').style.display = 'none';
        document.getElementById('age').innerHTML = i;
    } else if (i < 20){
        document.getElementById('age').innerHTML = i;
    } 
    
}
function estasquad(){
    document.getElementById('estasquad-video').style.display = 'flex';
}

function princesas(){
    document.getElementById('princesas-video').style.display = 'flex';
}

function arlett(){
    document.getElementById('arlett-video').style.display = 'flex';
}

function finalImg(){
    document.getElementById('final').style.display = 'inline-block';
}

function puzzle(){
    document.getElementById('puzzle').style.display = 'flex';
}
function closeScreen(){
    document.getElementById('puzzle').style.display = 'none';
    document.getElementById('posterMom').style.display = 'none';
}
function posterMom(){
    document.getElementById('posterMom').style.display = 'flex';
}