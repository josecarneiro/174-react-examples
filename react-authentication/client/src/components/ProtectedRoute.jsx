import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  const isAllowed = props.verify();
  if (isAllowed && props.render) {
    return <Route path={props.path} render={props.render} />;
  } else if (isAllowed) {
    return <Route path={props.path} component={props.component} />;
  } else {
    return <Redirect to={props.redirect} />;
  }
};

export default ProtectedRoute;

// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// export default ({ verify, render, component: ViewComponent, ...other }) => {
//   return (
//     <Route
//       {...other}
//       render={props => {
//         const authorized = verify();
//         if (authorized) {
//           if (typeof render === "function") {
//             return render(props);
//           } else if (typeof ViewComponent !== "undefined") {
//             return <ViewComponent {...props} />;
//           }
//         } else {
//           return <Redirect to="/sign-in" />;
//         }
//       }}
//     />
//   );
// };
