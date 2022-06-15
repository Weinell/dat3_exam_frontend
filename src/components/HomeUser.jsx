import { Container } from "react-bootstrap";


const Home = () => {

    function LoggedIn() {

        return (
            <Container className="shadow-lg p-5 mb-5 bg-white rounded mt-5">
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