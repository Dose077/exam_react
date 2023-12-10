import axios from "axios"
import { useEffect, useState } from "react"

import right from '../assets/right.svg'
const MovieList = () => {
  
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
              api_key: '4b7feb4a7688c3c46324165839ad0ffd'
            }
          })
          .then( (response)=> {
            if(response.status !== 200)  throw new Error('Could not fetch')
            return setData(response.data.results.slice(6,11))
        })
          .catch( (error)=> {
            console.log(error.message);
          })
    },[])
  return (

      <>    
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center gap-8 mt-[80px]">
         {data.map(movie => (
        <div key={movie.id} className="p-8 bg-gray-900 rounded-xl shadow ">
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />       
           <div className="flex justify-between">
           <p className="text-white">Action</p>
            <img src={right} alt="" />
           </div>
        </div>
        ))}

        </div>
      </div>
        </>
  )
}

export default MovieList