import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CrashProbPublic from "./components/crashPage/crashProbPublic";
import Home from "./components/home/home";
import Error from "./components/404";
import Comments from "./components/comments/comments"
import CheckUserCrash from "./components/userCrashCheckPage/checkUserCrash";
import Tweet from "./components/tweets/twitter";
import Login from "./components/login/login";
import Signup from "./components/login/signup";
<<<<<<< HEAD
=======
import SentimentHome from "./components/sentiments/sentimentHome";
import PredictedChart from "./components/crashPage/predictedChart";
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path="/crashProb" component={CrashProbPublic}/>
                    <Route exact path={"/comments"} component={Comments} />
                    <Route exact path={"/checkCrash"} component={CheckUserCrash} />
                    <Route exact path={"/tweets"} component={Tweet} />
                    <Route exact path={"/login"} component={Login} />
                    <Route exact path={"/signup"} component={Signup} />
<<<<<<< HEAD
=======
                    <Route exact path={"/sentiments"} component={SentimentHome} />
                    <Route exact path={"/charts"} component={PredictedChart} />
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
                    <Route exact path={"*"} component={Error} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
