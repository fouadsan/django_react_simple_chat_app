import React from "react";

import defaultImage from "../assets/default.png";

function Room({ client, login, setLogin }) {
  const handleSendMessage = (e) => {
    e.preventDefault();
    client.send(
      JSON.stringify({
        type: "message",
        message: login.value,
        name: login.name,
      })
    );
    setLogin({ ...login, value: "" });
  };

  return (
    <div className="row justify-content-center p-4 mt-5">
      <div className="col-12 text-center mb-5">
        <h3>
          <b>Room: {login.room}</b>
        </h3>
      </div>
      <div className="col-6">
        <div className="row border p-5">
          {login.messages.length ? (
            login.messages.map((message, index) => {
              const { name, msg } = message;
              return (
                <div key={index} className="card message-card p-2 mt-1 mb-1">
                  <div className="row">
                    <div className="col-3">
                      <div className="img-container">
                        <img
                          src={defaultImage}
                          alt={name}
                          className=" rounded-circle"
                        />
                      </div>
                      <small>{name}</small>
                    </div>
                    <div className="col-6">
                      <p>{msg}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <p className="text-center">No messages yet, Start adding some.</p>
            </div>
          )}
        </div>
        <form className="mt-5" noValidate onSubmit={handleSendMessage}>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              <b>Write a message</b>
            </label>
            <textarea
              type="text"
              className="form-control"
              name="message"
              aria-describedby="emailHelp"
              value={login.value}
              onChange={(e) => setLogin({ ...login, value: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-outline-success">
            <b>Send Message</b>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Room;
