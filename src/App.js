import { BrowserRouter } from "react-router-dom";
import Routes from "./services/routes";

function app() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}


export default app;