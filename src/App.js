import "./App.css";
import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./action/auth";
import setAuthToken from "./utils/setAuthToken";

// components
import Navbar from "./Components/layout/Navbar";
import Landing from "./Components/layout/Landing";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Alert from "./Components/layout/Alert";
import Dashboard from "./Components/dashboard/Dashboard";
import ProfileForm from "./Components/profile-form/ProfileForm";
import PrivateRoute from "./Components/routing/PrivateRoute";
import AddExperience from "./Components/profile-form/AddExperience";
import AddEducation from "./Components/profile-form/AddEducation";
import Profiles from "./Components/profiles/Profiles";
import Profile from "./Components/profile/Profile";
import Posts from "./Components/Posts/Posts";
import Post from "./Components/Post/Post";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter history={window.history}>


        <Fragment>
          <Navbar />

          <Route exact path="/" component={Landing} />

          <section className="container-c">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={ProfileForm}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={ProfileForm}
              />

              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
              <PrivateRoute exact path="/posts/:id" component={Post} />
              <PrivateRoute exact path="/posts" component={Posts} />
            </Switch>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider >
  );
};

export default App;
