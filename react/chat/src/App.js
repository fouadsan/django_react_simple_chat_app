import React, { useEffect, useState } from "react";

import Login from "./components/Login";
import Room from "./components/Room";

function App() {
  const [login, setLogin] = useState({
    isLoggedIn: false,
    messages: [],
    value: "",
    name: "",
    room: "testRoom",
  });
  const [client, setClient] = useState({});

  useEffect(() => {
    client.onopen = () => {
      console.log("connected");
    };

    client.onmessage = (message) => {
      const serverData = JSON.parse(message.data);

      if (serverData) {
        setLogin({
          ...login,
          messages: [
            ...login.messages,
            {
              msg: serverData.message,
              name: serverData.name,
            },
          ],
        });
      }
    };
  }, [client, login]);

  return (
    <main className="container">
      {login.isLoggedIn ? (
        <Room client={client} login={login} setLogin={setLogin} />
      ) : (
        <Login login={login} setLogin={setLogin} setClient={setClient} />
      )}
    </main>
  );
}

export default App;
