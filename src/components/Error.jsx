import { useRouteError, Link } from "react-router-dom";

function Error(){
    const error = useRouteError()
    return(
        <>
            <h3>Error</h3>
            <p>{error.message}</p>
            <Link to="/" >Go To Homepage</Link>
        </>
    )
}

export default Error;