let size = 10;
let backgroundColor = 161;
for (let i = 1; i < 6; i++) {
  const h1 = document.createElement("h1");
  h1.innerText = "Rad"+i;

  h1.style.fontSize= size + "px";
  size += 5;
  h1.style.textAlign="center";
  h1.style.backgroundColor= `hsl(${backgroundColor}, 100%, 76%)`;
  backgroundColor += 10;

  document.body.append(h1);
  
    
}



for (let i = 0; i < 10; i++) {

    const div = document.createElement("div");
    div.innerText = "" +i ;

    document.body.append(div);

    if(i===4){
      div.style.background = "plum"
    }
    else if(i%2===0){
        div.style.background = "black";
        div.style.color = "white";
    }

    else{
        div.style.backgroundcolor = "white";
    
    }
}

for (let i = 0; i < 10; i++) {

    const div = document.createElement("div");
    div.innerText = "" +i ;

    document.body.append(div);

    if(i===8){
      div.style.background = "plum"
    }
    else if(i%2===0){
        div.style.background = "black";
        div.style.color = "white";
    }

    else{
        div.style.backgroundcolor = "white";
    
    }
}






