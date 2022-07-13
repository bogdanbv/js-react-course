const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return res.json();
};

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) { // .ok это свойство промиса которое возвращаеться если мы что-то получили
        throw new Error(`Could not fetch ${url}, status: ${res.status}`) // создаъм обьект ошибки, с url и статусом (404, 500)
    }

        // получаем тот статус который вернул сервер

    return res.json();
};

export {postData};
export {getResource};