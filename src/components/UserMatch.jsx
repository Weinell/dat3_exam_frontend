import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import MatchesFacade from "../MatchesFacade";


const UserMatch = () => {
  const [matches, setMatches] = useState([
    {
      opponentTeam: "Placeholder",
      judge: "Mr. Placeholder",
      type: 1,
      inDoors: false,
    },
  ]);
  const [isLoaded, setIsLoaded] = useState(false);

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

  return (
    <div className="content">
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Container style={{
          textAlign: "center",
          maxWidth: "950px",
          margin: "0 auto",
          border: "1px solid #e6e6e6",
          padding: "40px 25px",
          marginTop: "50px"
        }} className="shadow-lg p-5 mb-5 bg-white rounded mt-5">
            <h3 className={"text-center"}>Matches</h3>

            <div className="matches">
              <ul>{listOfMatches}</ul>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default UserMatch;
