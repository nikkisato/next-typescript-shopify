type FetchParams = { 
    query: string
}

type FetcherResults<T> = { 
    data:T
}

const fetchApi  = async <T>({ query} : FetchParams): Promise<FetcherResults<T>> => {
    const url = "http://localhost:4000/graphql";



  const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    })

    const {data, error} = await res.json()

    if (error) {
        throw new Error(error)
    }
    return { data }
}

export default fetchApi;
