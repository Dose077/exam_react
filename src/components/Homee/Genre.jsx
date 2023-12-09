import axios from "axios";
import { useEffect, useState } from "react";
import right from './img/right.svg';
import left from './img/left.svg';
import { Link } from "react-router-dom";


const Genre = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
      axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: '4b7feb4a7688c3c46324165839ad0ffd'
          }
        })
        .then( (response)=> {
          if(response.status !== 200)  throw new Error('Could not fetch')
          return setData(response.data.results.slice(0,5))
      })
        .catch( (error)=> {
          console.log(error.message);
        })
  },[])
  
  return (
    <div>
       <span className="bg-red-900 text-white font-semibold  p-4 block w-[116px] ml-12  mt-[-30px]">Movies</span>
       <div className="container mx-auto px-5">
       <div className="flex justify-between items-center"> 
          <h2 className="text-3xl text-white">Popular Top 10 In Genres</h2>
          <div className='flex items-center rounded-xl p-2'>
      <button>
      <img className='bg-gray-800 p-1 rounded-sm' src={left} alt="" />
      </button>
        <div>
            <span className='p-1 text-lightred'>-</span>
            <span className='p-1 text-gray-800'>-</span>
            <span className='p-1 text-gray-800'>-</span>
            <span className='p-1 text-gray-800'>-</span>
        </div>
       <button>
       <img className='bg-gray-800 p-1 rounded-sm' src={right} alt="" />
       </button>
       </div>
        </div>
        <div className="flex justify-between items-center gap-8 mt-[51px]">
         {data.map(movie => (
        <Link to={'/movies'} key={movie.id} className="p-8 bg-gray-900 rounded-xl shadow ">
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />       
           <div className="flex justify-between">
           <p className="text-white">Action</p>
            <img src={right} alt="" />
           </div>
        </Link>
        ))}

        </div>
      </div>  
   
    </div>
  );
};

export default Genre;
