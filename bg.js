const colors = ["cyan", "red", "green", "pink", "violet", "yellow"]
    function changecolor(){
         
        const randomcolor = Math.floor(Math.random() * colors.length);
        const change = colors[randomcolor];
       document.body.style.backgroundColor = change;

    }