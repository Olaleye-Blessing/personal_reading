const btnRequest = document.getElementById("make-request");
const btnConsole = document.getElementById("clear");
const btnGetUsers = document.getElementById("get-users");
const btnExpress = document.getElementById("express");

btnConsole.addEventListener("click", () => {
    console.clear();
});

const getHeaders = (headers) =>
    headers.forEach((val, key) => console.log({ val, key }));

async function fetchReq(path = "", base_url = `http://127.0.0.1:8000/api/v1`) {
    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    // getHeaders(headers);

    const url = `${base_url}/${path}`.trim();

    try {
        let req = await fetch(url, {
            method: "GET",
            headers,
            mode: "cors",
            credentials: "include",
            // credentials: "same-origin",
        });
        let header = req.headers;
        // let cookies = req
        let result = await req.json();

        getHeaders(header);

        console.log({ header, result });
    } catch (error) {
        console.warn(error);
    }
}

btnRequest.addEventListener("click", async (e) => {
    console.log("tour...");

    await fetchReq("tours");
});

btnGetUsers.addEventListener("click", async (e) => {
    console.log("user...");

    await fetchReq("users");
});

btnExpress.addEventListener("click", async (e) => {
    console.log("express");

    await fetchReq("", "http://127.0.0.1:2000");
});
