import React from 'react';
import { Redirect, Route } from 'react-router-dom'
function PrivateRoute({ component: Component, ...rest }) {
  return (<Route
    {...rest}
    render={(props) => {
      // localStorage.getItem('user-tooken') ? (<Component {...props}/>) : (<Redirect to ={{pathname :"", state:{from : props.location}}}/>)
      if (typeof localStorage.getItem('token') === "string") {
        return <Component />
      }
      else {
        return (<Redirect to={{ pathname: '/HomePage', state: { from: props.location } }}
        />)
      }
    }}
  />
  )
}
export default PrivateRoute;