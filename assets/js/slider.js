    //Slider navebation auto
    let counter = 1;
    let btnRadio = document.getElementById('radio1').checked = true;
    
    function nextNews() {
        counter++;
        if (counter > 3) {
            counter = 1;
        }
        btnRadio = document.getElementById('radio' + counter).checked = true;
    }
    
    setInterval(() => {
        nextNews()
    }, 4000)