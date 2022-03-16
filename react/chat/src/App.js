import React, { useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

function App() {
  const [login, setLogin] = useState({
    isLoggedIn: false,
    messages: [],
    value: "",
    name: "",
    room: "test_room",
  });

  return <div className="container">{/* {login.isLoggedIn ?  :  } */}</div>;
}

export default App;
