let translate = () => {
    let langFrom = document.querySelector('.translate-from').value;
    let langTo = document.querySelector('.translate-to').value;
    let langDuo = (langFrom === langTo) ? alert('Languages are the same!') : `${langFrom}-${langTo}`;

    let xhr = new XMLHttpRequest();

    const key = 'trnsl.1.1.20180212T170957Z.610dcf1db261e404.5f0ef5f921dd000987d5e71976c4dddb9a049940';

    let body = `key=${encodeURIComponent(key)}
                &text=${encodeURIComponent(toTranslate.value)}
                &lang=${encodeURIComponent(langDuo)}`;

    xhr.open('POST', 'https://translate.yandex.net/api/v1.5/tr.json/translate?', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onloadstart  = function () {
        loadingStatus.innerHTML = "Loading...";
    };

    xhr.onload = function () {
        if (this.status == 200) {
            loadingStatus.innerHTML = "";
            let result = JSON.parse(this.responseText);
            let translatedText = result.text;

            let resText = document.querySelector('.js-result');
            resText.innerHTML = translatedText;
        } else
            console.log('There was an error');
    };

    xhr.send(body);
};

let loadingStatus = document.querySelector('.js-pending');
let toTranslate = document.querySelector('.js-toTranslate');
let translateBtn = document.querySelector('.js-translate');

translateBtn.addEventListener('click', translate);
toTranslate.addEventListener('keydown', translate);