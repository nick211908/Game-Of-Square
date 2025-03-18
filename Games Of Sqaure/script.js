const num = document.getElementById('Number');
const changebg=document.getElementById('ChangeBg');
const redOrGreen=document.getElementById('RedOrGreen');
function GenrateRandomNumber(){
    return Math.floor(Math.random()*100);
}
let flag=true;
function GenerateRandomColor(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
//box -3
changebg.addEventListener('mouseenter', function(){
    changebg.style.backgroundColor = GenerateRandomColor();
});
changebg.addEventListener('mouseleave', function(){
    changebg.style.backgroundColor = 'white';
});
//box -1
num.addEventListener('mouseenter', function(){
    num.innerHTML = `<h1>${GenrateRandomNumber()}</h1>`;
});
num.addEventListener('mouseleave', function(){
    num.innerHTML = `<h1>1</h1>`;
})
//box-2
redOrGreen.addEventListener('mouseenter', function(){
    if(flag){
        redOrGreen.style.backgroundColor = 'green';
    }else{
        redOrGreen.style.backgroundColor = 'red';
    }
    flag = !flag;
}); 
redOrGreen.addEventListener('mouseleave', function(){
    redOrGreen.style.backgroundColor='white'
}); 
//box-4
const changeOthers=document.getElementById('ChangeOthersBg');
changeOthers.addEventListener('click',()=>{
    num.style.backgroundColor=GenerateRandomColor();
    changebg.style.backgroundColor=GenerateRandomColor();
    redOrGreen.style.backgroundColor=GenerateRandomColor();

})


