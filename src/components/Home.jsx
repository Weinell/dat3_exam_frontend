import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import HomeAdmin from "./HomeAdmin";
import HomeUser from "./HomeUser";

const Home = () => {

    return (
        <Container>
            { localStorage.getItem("userType")=== "admin" &&
                <HomeAdmin/>
            }
            { localStorage.getItem("userType")=== "user" &&
                <HomeUser/>
            }

        </Container>
    );
};

export default Home;