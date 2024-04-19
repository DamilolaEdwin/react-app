import useFetch from "../customHook/useFetch"
import Loader from "./Loader"

function Home(){
    const {error, repo, isLoading} = useFetch("https://api.github.com/users/DamilolaEdwin/repos")
    console.log(repo) 
    return(
        <>
            {/* { {isLoading && <Loader/> } } */}
            {repo.map((data) => (
                <div key={data.id}>
                    <h3>{data.name}</h3>
                </div>
            ))}
        </>
    )
}

export default Home;