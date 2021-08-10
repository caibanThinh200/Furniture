import { Route } from "react-router-dom"

const PrviateRoute = ({ component, ...rest }) => {
    return <Route {...rest}>
        {component(rest)}
    </Route>
}

export default PrviateRoute;