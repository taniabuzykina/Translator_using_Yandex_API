let translate = (text) => {
    let xhr = new XMLHttpRequest();
    const key = 'trnsl.1.1.20180212T144108Z.a4abf848e52820a3.eee565c1f2668137e318bdd1d4e3787bfc0b3ba8';
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
