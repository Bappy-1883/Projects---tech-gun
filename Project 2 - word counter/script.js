var textbox = document.getElementById("text");

text.addEventListener('input',function(){
    var text = this.value;
    var alpha = text.length;
    
    for(let x = 0;x<text.length;x++){
        if(text[x] == " "){
            alpha -= 1;
        }
    }

    // console.log(alpha);

    document.getElementById("char").innerHTML = text.length;
    document.getElementById("alpha").innerHTML = alpha;

    text.trim;

    let word = text.split(" ");
    let cleanList = word.filter(function(elm){
        return elm != "";
    });
    document.getElementById("word").innerHTML = cleanList.length;
    // console.log(word);
});