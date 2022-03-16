import React from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

function Login({ login, setLogin, setClient }) {
  const handleLogin = (e) => {
    e.preventDefault();
    setClient(new W3CWebSocket(`ws://127.0.0.1:8000/ws/chat/${login.room}/`));
    setLogin({ ...login, isLoggedIn: true });
  };

  return (
    <div className="row justify-content-center p-4 mt-5">
      <div className="col-12 text-center mb-5">
        <h3>
          <b>Simple Chat Application</b>
        </h3>
      </div>
      <div className="col-6">
        <form noValidate onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="room" className="form-label">
              <b>Room name</b>
            </label>
            <input
              type="text"
              name="room"
              className="form-control"
              aria-describedby="emailHelp"
              value={login.room}
              onChange={(e) =>
                setLogin({
                  ...login,
                  room: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <b>Username</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={login.name}
              onChange={(e) =>
                setLogin({
                  ...login,
                  name: e.target.value,
                })
              }
            />
          </div>

          <button type="submit" className="btn btn-outline-success">
            <b>Start Chatting</b>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
