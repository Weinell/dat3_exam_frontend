import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Home from 'components/Home';
import UserMatch from "components/UserMatch";
import AdminPlayer from "components/AdminPlayer";
import AdminMatch from "components/AdminMatch";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route exact="true" path="/" element={<App />}>
                <Route path="/" element={<Home />}/>

                <Route path="/adminmatches" element={<AdminMatch />} />
                <Route path="/adminplayers" element={<AdminPlayer />} />

                <Route path="/matches" element={<UserMatch />} />
                               
                
            </Route>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>404, try "/"</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>
);
