//React router
import { BrowserRouter, Route, Switch} from 'react-router-dom'
//Home
import Home from 'Components/Home'

const Routes = () => {
    return (
        <BrowserRouter basename='/personalsite/dist/index.html'>
            <Switch>
                <Route exact path='/'><Home /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes