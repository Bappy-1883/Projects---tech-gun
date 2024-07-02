
// var body_color = document.getElementById("body_color");
// let block_color = document.getElementById("block_color");

body_color.addEventListener('input',function(){
    // console.log(this.value);
    // document.getElementById("h2_1").style.color = this.value;
    document.body.style.backgroundColor = this.value;
    document.body.style.color = this.value;
});

block_color.addEventListener('input',function(){
    // console.log(this.value);
    // document.getElementById("h2_1").style.color = this.value;
    let div1 = document.getElementById("div1");
    div1.style.backgroundColor = this.value;
    div1.style.color = this.value;
    // div1.getElementsByTagName("h2").style.color = this.value;
    
});


