let translate = (text) => {
    let xhr = new XMLHttpRequest();
    const key = 'trnsl.1.1.20180212T152351Z.2753a157dc3c5ab3.084990b177e396db4c2e8ee9c4146a87e0d03e0a';
    let body = `key=${encodeURIComponent(key)}
                &text=${encodeURIComponent(text)}
                &lang=ru`;

    xhr.open('GET', 'https://translate.yandex.net', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send(body);

    xhr.onload = () => {
        if (this.status == 200) {
            let response = JSON.parse(this.responseText);

            console.log("OK");
        }
    };
};

translate('hello from the other side');
