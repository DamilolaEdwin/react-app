import useFetch from "../customHook/useFetch"
import { useParams } from "react-router-dom"
import Loader from "./Loader"

function Details(){
    const {name} = useParams()
    const {repo, error, isLoading} = useFetch(`https://api.github.com/repos/DamilolaEdwin/${name}`)
    return(
        <>
            {isLoading && <Loader/> } 
            {error && <p>{error}</p>}
            <div>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <p>{repo.stargazers_count}</p>
                <p>{repo.forks_count}</p>
                <p>{repo.watchers_count}</p>
                <p>{repo.visibility}</p>
                <p>{repo.url}</p>
                <p>{repo.created_at}</p>
                <p>{repo.watchers}</p>

            </div>
        </>
    ) 
}

export default Details;