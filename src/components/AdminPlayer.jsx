import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import matchesFacade from "../MatchesFacade";

const AdminPlayer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);
  const [playerID, setPlayerID] = useState("");

  const [players, setPlayers] = useState([
    {
      name: "name",
      phone: "phone",
      email: "email",
      status: 1,
    },
  ]);

  const playerObj = {
    name: name,
    phone: phone,
    email: email,
    status: status,
  };

  useEffect(() => {
    matchesFacade
      .getPlayers()
      .then((res) => res.json())
      .then((players) => setPlayers(players))
      .catch((error) => {
        alert(error.status);
        console.log("error");
      });
    setIsLoaded(true);
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = matchesFacade.createPlayer(playerObj);
    if (res.status === 200) {
      setName("");
      setPhone("");
      setEmail("");
      setStatus("");
      console.log("Sheesh gamer moment");
    } else {
      console.log("Fail :(");
    }
  };

  const listOfPlayers = players.map((player) => (
    <li key={player.name}>
      <ul>Player: {player.name}</ul>
      <ul>Phone: {player.phone}</ul>
      <ul>Email: {player.email}</ul>
      <ul>Status: {player.status}</ul>
    </li>
  ));

  let handleDelete = async (e) => {
    e.preventDefault();
    matchesFacade.deletePlayer(playerID);
  };

  return (
    <div className="content">
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div style={{
            fontFamily: '-apple-system',
            fontSize: "1rem",
            fontWeight: 1.5,
            lineHeight: 1.5,
            color: "#292b2c",
            backgroundColor: "#fff",
            padding: "0 2em"
          }} >
          <Container className="shadow-lg p-5 mb-5 bg-white rounded mt-5">
            <h3 className={"text-center"}>Create a player</h3>

            <div className="players">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  value={phone}
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  value={status}
                  placeholder="Status"
                  onChange={(e) => setStatus(e.target.value)}
                />

                <button type="submit">Create</button>
              </form>
            </div>
            <div>
              <h3 className={"text-center"}>Delete a player</h3>

              <div className="playerDelete">
                <form onSubmit={handleDelete}>
                  <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setPlayerID(e.target.value)}
                  />
                  <button type="submit">Delete</button>
                </form>
              </div>
            </div>
          </Container>
          <div>
            <Container className="shadow-lg p-5 mb-5 bg-white rounded mt-5">
              <h3 className={"text-center"}>Players</h3>

              <div className="players">
                <ul>{listOfPlayers}</ul>
              </div>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPlayer;
