import useFetch from "../customHook/useFetch"
import Loader from "./Loader"
import { Link } from "react-router-dom"

function Home(){
    const {error, repo, isLoading} = useFetch("https://api.github.com/users/DamilolaEdwin/repos")
    console.log(repo) 
    return(
        <>
            {/* { {isLoading && <Loader/> } } */}
            {repo.map((data) => (
                <div key={data.id}>
                    <Link to={`code/repos/${data.name}`} >
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                    <p>{data.stargazers_count}</p>
                    <p>{data.forks_count}</p>
                    <p>{data.watchers_count}</p>
                    <p>{data.visibility}</p>
                    <p>{data.url}</p>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Home;