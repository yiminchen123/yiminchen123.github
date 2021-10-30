function ajax({url, data={}, method}) {
    return new Promise((resolve, reject) => {
    let p;
    const xhr = new XMLHttpRequest();
    if(method == 'GET') {
        xhr.open('GET', 'http://localhost:8000/server');
        xhr.send();
        p = xhr.response;
    }else {
        xhr.open('POST', 'http://localhost:8000/server');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();
        p = xhr.response;
    }
    p.then(res => {
            resolve(res.data);
    }).catch(err => {
            reject(err);
        })
    })
}
