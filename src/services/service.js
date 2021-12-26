import url from "./config";

export default class Service {
  static _api = url;
  static getResource = async () => {
    const res = await fetch(this._api);
    if (!res.ok) {
      throw new Error("Coud not fetch url");
    } else {
      return await res.json();
    }
  };

  static sendData = (item) => {
    fetch(`${url}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          console.log("Status: " + resp.status);
          return Promise.reject("server");
        }
      })
      .catch((err) => {
        if (err === "server") return;
        console.log(err);
      });
  };

  static reSendData = (item) => {
    fetch(`http://localhost:3000/data/cards`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          console.log("Status: " + resp.status);
          return Promise.reject("server");
        }
      })
      .catch((err) => {
        if (err === "server") return;
        console.log(err);
      });
  };

  static deleteData = (id='') => {
    fetch(`${url}/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          console.log("Status: " + resp.status);
          return Promise.reject("server");
        }
      })
      .catch((err) => {
        if (err === "server") return;
        console.log(err);
      });
  };
}
