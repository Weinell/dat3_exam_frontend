import { Container, Form, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import MatchesFacade from "../MatchesFacade";
import { Link } from "react-router-dom";
import matchesFacade from "../MatchesFacade";

const AdminMatch = () => {
  const [opponentTeam, setOpponentTeam] = useState("");
  const [judge, setJudge] = useState("");
  const [type, setType] = useState("");
  const [inDoors, setInDoors] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [matches, setMatches] = useState([
    {
      opponentTeam: "Placeholder",
      judge: "Mr. Placeholder",
      type: 1,
      inDoors: false,
    },
  ]);

  useEffect(() => {
    MatchesFacade.getMatches()
      .then((res) => res.json())
      .then((matches) => setMatches(matches))
      .catch((error) => {
        alert(error.status);
        console.log("error");
      });
    setIsLoaded(true);
  }, []);

  const listOfMatches = matches.map((match) => (
    <li key={match.opponentTeam}>
      <ul>Team name: {match.opponentTeam}</ul>
      <ul>Judge: {match.judge}</ul>
      <ul>Type: {match.type}</ul>
      <ul>Indoors: {match.inDoors}</ul>
    </li>
  ));

  const matchObj = {
    opponentTeam: opponentTeam,
    judge: judge,
    type: type,
    inDoors: inDoors,
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = matchesFacade.createMatch(matchObj);
  };

  let handleUpdate = async (e) => {
    e.preventDefault();
    let res = matchesFacade.createMatch(matchObj);
  };

  return (
    <div className="content">
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Container className="shadow-lg p-5 mb-5 bg-white rounded mt-5">
            <h3 className={"text-center"}>Create a match</h3>

            <div className="matches">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={opponentTeam}
                  placeholder="Opponent Team"
                  onChange={(e) => setOpponentTeam(e.target.value)}
                />
                <input
                  type="text"
                  value={judge}
                  placeholder="Judge"
                  onChange={(e) => setJudge(e.target.value)}
                />
                <input
                  type="text"
                  value={type}
                  placeholder="Type"
                  onChange={(e) => setType(e.target.value)}
                />
                <input
                  type="text"
                  value={inDoors}
                  placeholder="InDoors"
                  onChange={(e) => setInDoors(e.target.value)}
                />

                <button type="submit">Create</button>
              </form>
            </div>
            <h3 className={"text-center"}>Update a match</h3>

            <div className="matches">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={opponentTeam}
                  placeholder="Opponent Team"
                  onChange={(e) => setOpponentTeam(e.target.value)}
                />
                <input
                  type="text"
                  value={judge}
                  placeholder="Judge"
                  onChange={(e) => setJudge(e.target.value)}
                />
                <input
                  type="text"
                  value={type}
                  placeholder="Type"
                  onChange={(e) => setType(e.target.value)}
                />
                <input
                  type="text"
                  value={inDoors}
                  placeholder="InDoors"
                  onChange={(e) => setInDoors(e.target.value)}
                />
                <button type="submit">Update</button>
              </form>
            </div>
            <div>
              <Container className="shadow-lg p-5 mb-5 bg-white rounded mt-5">
                <h3 className={"text-center"}>Matches</h3>

                <div className="matches">
                  <ul>{listOfMatches}</ul>
                </div>
              </Container>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default AdminMatch;
