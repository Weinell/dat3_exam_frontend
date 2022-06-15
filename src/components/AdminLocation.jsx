import { Container, Form, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import MatchesFacade from "../MatchesFacade";
import { Link } from "react-router-dom";
import matchesFacade from "../MatchesFacade";

const AdminLocation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);

  const player = {
    name: name,
    phone: phone,
    email: email,
    status: status,
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = matchesFacade.createPlayer(player);
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


  

  return (
    <div className="content">
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
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
          </Container>
        </div>
      )}
    </div>
  );
};

export default AdminLocation;
