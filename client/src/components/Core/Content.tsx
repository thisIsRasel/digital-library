import {Outlet} from "react-router-dom";

const Content = () => {
    return (
        <main className="container mx-auto content p-32">
            <Outlet/>
        </main>
    )
}
export default Content;