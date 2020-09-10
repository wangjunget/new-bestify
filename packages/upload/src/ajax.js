function getBody(xhr) {
    const text = xhr.responseText || xhr.response;
    if (!text) {
        return text;
    }

    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}
function getError(action, xhr) {
    let msg;
    if (xhr.response) {
        msg = `${xhr.response.msg}`
    } else {
        // eslint-disable-next-line no-unused-vars
        msg = '上传失败'
    }

    const error = new Error();
    error.status = xhr.status;
    error.method = 'post';
    error.action = action;

    return error;
}
export default function upload(option) {
    let promise = new Promise((resolve, reject) => {
        if (typeof XMLHttpRequest == 'undefined') {
            return;
        }
        let xhr = new XMLHttpRequest();
        const action = option.action;

        if (xhr.upload) {
            xhr.upload.onprogress = function (e) {
                if (e.total > 0) {
                    e.percent = e.loaded / e.total * 100
                }
                option.onProgress(e)
            }
        }

        let formData = new FormData();
        formData.append('file', option.file)
        formData.append('type', option.type)
        if (option.data) {
            Object.keys(option.data).forEach(key => {
                formData.append(key, option.data[key])
            })
        }
        xhr.open('post', action, true);

        let headers = option.headers || {};
        for (let item in headers) {
            // eslint-disable-next-line no-prototype-builtins
            if (headers.hasOwnProperty(item) && headers[item] !== null) {
                xhr.setRequestHeader(item, headers[item]);
            }
        }
        xhr.send(formData);

        xhr.onerror = function error(e) {
            reject(e);
            option.onError(e)
        }

        xhr.onload = function onload() {
            if (xhr.status < 200 || xhr.status >= 300) {
                reject(getError(action, xhr));
            }
            resolve(getBody(xhr))
            option.onSuccess(getBody(xhr))
        }
    })
    return promise;
}