//1.import area

import { Component } from "react";
import { Outlet } from "react-router-dom";

//2.class definition area
class Layout extends Component {
    //1.properties

    //2.constructor

    //3.method
    render() {
        //every function return something
        return (
            <>
                <header>Header</header>
                <Outlet/>
                <footer>Footer</footer>
            </>
        )
    }
}

//3.export area
export default Layout;