import { Container } from "react-bootstrap";


const Home = () => {

    function LoggedIn() {

        return (
            <Container style={{
                textAlign: "center",
                maxWidth: "950px",
                margin: "0 auto",
                border: "1px solid #e6e6e6",
                padding: "40px 25px",
                marginTop: "50px"
              }} className="shadow-lg p-5 mb-5 bg-white rounded mt-5">
                <div className={"mb-5"}>
                    <h1>Homepage user</h1>
                </div>



            </Container>
        )

    }

    return (
        <Container>
            <LoggedIn />
        </Container>
    );
};

export default Home;