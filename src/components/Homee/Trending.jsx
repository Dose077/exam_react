import axios from "axios";
import { useEffect, useState } from "react";
import left from './img/left.svg';
import right from './img/right.svg';
import { Link } from "react-router-dom";

const Trending = () => {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [startIndex, ] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "11cedbb1d6d79381b452e2fdec102159",
        },
      })
      .then((response) => {
        if (response.status !== 200) throw new Error("Could not fetch");
        console.log(response.data.results);
        setData(response.data.results);
        setDisplayedData(response.data.results.slice(startIndex, startIndex + 5));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [startIndex]);




  return (
   <div>
      <div className="container px-5 flex-wrap mx-auto flex justify-between items-center mb-12">
        <div>
          <h3 className="text-[#FFF] text-4xl">Trending Now</h3>
        </div>
        <div>
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
      </div>
      <div className="flex grid-cols-5 justify-center mb-24">
        {displayedData.map((movie) => (
          <Link to={'/movies'} key={movie.id} className="max-w-[250px] mx-2 my-4 overflow-hidden border gap-7 bg-[#1A1A1A]  border-[#262626] p-5 rounded-lg shadow-lg">
            <img
              className="w-[200px] h-[250px] bg-cover items-center "
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt={`Backdrop of ${movie.original_title}`}
            />
            <div className=" py-4">
            
              <button className="text-[#999999] bg-[#141414] p-2 border-[#262626] rounded-3xl ">Release Date: {movie.release_date}</button>
             
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
        }
export default Trending;









