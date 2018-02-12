//js-input.addEventListener('keydown', translate);

let translate = (text) => {
    let statusOutput =  document.querySelector(".loading");
    let transFrom = document.querySelector(".js-translate-from").value;
    let transTo = document.querySelector(".js-translate-to").value;
    if(transFrom===transTo)
        statusOutput.innerHTML = "Languages are the same!";
    else {
        statusOutput.innerHTML = " ";
        let transOption = transFrom+'-'+transTo;
    
        let xhr = new XMLHttpRequest();

        const key = 'trnsl.1.1.20180212T170957Z.610dcf1db261e404.5f0ef5f921dd000987d5e71976c4dddb9a049940';

        let body = `key=${encodeURIComponent(key)}
                    &text=${encodeURIComponent(text)}
                    &lang=${encodeURIComponent(transOption)}`;

        xhr.open('POST', 'https://translate.yandex.net/api/v1.5/tr.json/translate?', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function () {
            statusOutput.innerHTML = "Loading";
            console.log(transOption);
            console.log("i'm on xhr.onload");
            if (this.status == 200) {
                let result = JSON.parse(this.responseText);
                let translate = result.text;
                console.log(this.responseText);
                let resText = document.querySelector(".js-result");
                resText.innerHTML = translate;
            } 
            else console.log('There was an error');
        };

        xhr.send(body);
    }
};

let requestTranslate = () =>{
    let inputText = document.querySelector(".js-input").value;
    translate(inputText);
};

let toTranslate = document.querySelector(".js-input");
toTranslate.onkeypress =toTranslate.onkeydown = translate();