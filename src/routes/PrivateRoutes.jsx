import React from 'react'
import {Route ,Redirect} from 'react-router-dom'
const PrivateRoutes = ({auth,component:Component ,...rest}) => {
    return (
        <>
            <Route 
            {...rest}
            render={
                props => auth ?(<Component {...props}/>):(<Redirect to={{pathname:"/"}}/>)

            }
            />
        </>
    )
}

export default PrivateRoutes
