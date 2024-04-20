import useFetch from "../customHook/useFetch"
import { useParams } from "react-router-dom"

function Details(){
    const {name} = useParams()
    const {repo, error, isLoading} = useFetch(`https://api.github.com/repos/DamilolaEdwin/${name}`)
    return(
        <>
            <div>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <p>{repo.stargazers_count}</p>
                <p>{repo.forks_count}</p>
                <p>{repo.watchers_count}</p>
                <p>{repo.visibility}</p>
                <p>{repo.url}</p>
            </div>
        </>
    ) 
}

export default Details;