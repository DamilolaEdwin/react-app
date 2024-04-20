import { useNavigate } from "react-router-dom";


function NotFound(){
    const navigate = useNavigate()
    return(
        <>
            <h3>Page Not Found</h3>
            <button onClick={() => navigate("/")}>Go To Homepage</button>
        </>
    )
}

export default NotFound;