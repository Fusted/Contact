import links from "./config";
const { dataUrl, url, accountsUrl } = links;

export default class Service {
  static _api = url;
  static _data = dataUrl;
  static _accountsUrl = accountsUrl;

  static getResource = async () => {
    const res = await fetch(this._data);
    if (!res.ok) {
      throw new Error("Coud not fetch url");
    } else {
      return await res.json();
    }
  };

  static getAccounts = async () => {
    const res = await fetch(this._accountsUrl);
    if (!res.ok) {
      throw new Error("Coud not fetch url");
    } else {
      return await res.json();
    }
  };

  static sendData = (item) => {
    fetch(`${this._data}/`, {
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
    fetch(`${this._data}/cards`, {
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

  static deleteData = (id = "") => {
    fetch(`${this._data}/${id}`, {
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
