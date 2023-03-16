import { useEffect, useState } from "react"

const useFetch =(url) => {
    const[data, setData] = useState([])
    const [loading, setLoading]= useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res=> res.json())
            .then(data=>{
                setData(data)
                setLoading(false)
            })
    }, [url])

    return {data, loading}
}

export default useFetch
