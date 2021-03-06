import React from "react";
import roles from "../config/roles";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import NotFound from "../pages/notfound/NotFoundPage";
// import { connect } from 'react-redux'

export default function Routes(props) {
  // let role = props.role || "GUEST";å

  return (
    <BrowserRouter>
      <Switch>
        {roles["DEV"].map(({ path, page: PageComponent }, idx) => {
          return (
            <Route key={idx} path={path}>
              <PageComponent />
            </Route>
          );
        })}
        <Redirect to="/login" />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

//DEAL WITH AUTHEN HERE
// const mapStateToProps = state => {
//   return {
//     role: state.userReducer.role
//   }
// }

// export default connect(mapStateToProps)(Routes);
