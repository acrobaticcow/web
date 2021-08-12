export default function ({method, uri, onerror, onload, headers, body}) {
    let xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.open(method, uri);

    xhr.send(JSON.stringify(body));

    xhr.onerror = onerror ? onerror : () => console.log("Cannot send request!!!");

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) onload(xhr.response);
        else console.log("Error", xhr.response);
    };
}