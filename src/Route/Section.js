import { ROUTES } from "./Routes";
import {Switch} from "react-router-dom"
import React from "react"
import PrviateRoute from "./PrivateRoute";

const Section = props => {
    const [routes, setRoutes] = React.useState([]);

    React.useEffect(() => {
        setRoutes(Object.values(ROUTES));
    }, [])

    return (
        <Switch>
            {
                routes.length > 0 && routes.map((item, index) => <PrviateRoute key={index} {...item}/>)
            }
        </Switch>
    )
} 

export default Section;