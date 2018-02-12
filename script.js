let translate = () => {
    const toTranslate = document.querySelector('.js-toTranslate');
    let xhr = new XMLHttpRequest();

    const key = 'trnsl.1.1.20180212T170957Z.610dcf1db261e404.5f0ef5f921dd000987d5e71976c4dddb9a049940';

    let body = `key=${encodeURIComponent(key)}
                &text=${encodeURIComponent(toTranslate.value)}
                &lang=${encodeURIComponent('en-ru')}`;

    xhr.open('POST', 'https://translate.yandex.net/api/v1.5/tr.json/translate?', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);
            let translatedText = result.text;

            let resText = document.querySelector('.js-result');
            resText.innerHTML = translatedText;
        } else
            console.log('There was an error');
    };

    xhr.send(body);
};

let translateBtn = document.querySelector('.js-translate');

translateBtn.addEventListener('click', translate);
