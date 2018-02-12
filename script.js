let translate = () => {

    let statusOutput =  document.querySelector(".loading");
    let transFrom = document.querySelector(".js-translate-from").value;
    let transTo = document.querySelector(".js-translate-to").value;
    let langDuo = (transFrom == transTo) ? alert('Languages are the same!') : `${transFrom}-${transTo}`;
    
    let xhr = new XMLHttpRequest();

    const key = 'trnsl.1.1.20180212T170957Z.610dcf1db261e404.5f0ef5f921dd000987d5e71976c4dddb9a049940';

    let body = `key=${encodeURIComponent(key)}
                &text=${encodeURIComponent(text)}
                &lang=${encodeURIComponent(transOption)}`;

    xhr.open('POST', 'https://translate.yandex.net/api/v1.5/tr.json/translate?', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onloadstart  = function () {
        statusOutput.innerHTML = "Loading...";
    };

    xhr.onload = function () {
            console.log(langDuo);
        if (this.status == 200) {
            statusOutput.innerHTML = "";
            let result = JSON.parse(this.responseText);
            let translatedText = result.text;

            let resText = document.querySelector('.js-result');
            resText.innerHTML = translatedText;
        } else
            console.log('There was an error');
    };
};

let toTranslate = document.querySelector('.js-input');
let translateBtn = document.querySelector('.js-translate-button');

translateBtn.addEventListener('click', translate);
toTranslate.addEventListener('keydown', translate);