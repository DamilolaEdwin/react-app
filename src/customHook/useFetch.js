import { useEffect, useState } from "react";

function useFetch(url) {
  const [repo, setRepo] = useState([]);

  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchRepo() {
      setIsLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Could not fetch the repos");
        }

        const data = await res.json();
        setIsLoading(false);
        setRepo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepo()
  }, [url]);
  return {repo, isLoading, error}
}
export default useFetch

