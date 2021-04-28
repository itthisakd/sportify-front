import React from 'react';
import roles from '../../config/roles';
import { Switch, Route } from "react-router-dom";
import NotFound from "../pages/notfound/NotFoundPage";
// import { connect } from 'react-redux'

export default function Routes(props) {
  let role = props.role || "GUEST";

  return (
    <Switch>
      {roles[role].map(({ path, page: PageComponent }, idx) => <Route key={idx} exact path={path}>
        <PageComponent />
      </Route>)}
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

//DEAL WITH AUTHEN HERE 
// const mapStateToProps = state => {
//   return {
//     role: state.userReducer.role
//   }
// }

// export default connect(mapStateToProps)(Routes);