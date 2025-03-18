const num=document.getElementById('Number')
function GenrateRandomNumber(){
    return Math.floor(Math.random()*100)
}
function GenerateRandomColor(){
    hex='0123456789ABCDEF'
    color='#'
    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
num.addEventListener('click',function(){
    num.innerText=GenrateRandomNumber()
})
