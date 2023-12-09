import axios from "axios"
import { useEffect, useState } from "react"

const Shows_MoviseBg = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
              api_key: '4b7feb4a7688c3c46324165839ad0ffd'
            }
          })
          .then( (response)=> {
            if(response.status !== 200)  throw new Error('Could not fetch')
            return setData(response)
        })
          .catch( (error)=> {
            console.log(error.message);
          })
    },[])
  return (
    <div className="container mx-auto px-5">
    <div className="flex justify-between items-center gap-8 mt-80">
     {data.map(movie => (
    <div key={movie.id} className='' >
      <img className="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie}`} alt="" />
    </div>
    ))}

    </div>
  </div>
  )
}

export default Shows_MoviseBg