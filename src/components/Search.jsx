import { useEffect, useState } from "react"
import search from '../assets/search.svg'
import axios from "axios"
import { Link } from "react-router-dom"


const Search = () => {
    const [searchText,setSearchText] =useState('')
    const [data,setData] =useState([])
    const handleSearch =(e)=>{
        setSearchText(e.target.value);
    }
        useEffect(() =>{
               axios.get('https://api.themoviedb.org/3/search/movie',{
                params: {
                  api_key: '4b7feb4a7688c3c46324165839ad0ffd',
                  query:searchText
                },
              })
              .then((response)=> {
                if(response.status !== 200)  throw new Error('Could not fetch')
                console.log(response.data.results);
                return setData(response.data.results)
            })
              .catch( (error)=> {
                console.log(error.message);
              }) 
        },[searchText])
  return (
  <>
    <div className="flex gap-2">
          <div className="flex items-center gap-2">
          <input type="search" 
            placeholder="searach movie..."
            className="text-white w-[1380px] border bg-inherit mt-[80px]  px-3 py-2"
            onChange={handleSearch}
            value={searchText}
            />
           <span ><img className="mt-[80px] " src={search} alt="" /></span>
          </div>

    </div>
    <Link to='/movies' className="grid grid-cols-5 gap-5 mt-5">
      {data?.map((movie)=> (
        <div className="bg-gray-900 p-6 rounded-xl" key={movie.id}>
          {movie.orginal_title}
          <img  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />
          <p className="text-white text-center mt-2">{movie.original_title}</p>
          </div>
      ))}
      </Link>
  </>
  )
}

export default Search