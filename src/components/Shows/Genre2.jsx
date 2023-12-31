import axios from "axios";
import { useEffect, useState } from "react";
import left from '../Homee/img/left.svg';
import right from '../Homee/img/right.svg';
import { Link } from "react-router-dom";

const Genre2 = () => {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [startIndex, ] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/trending/all/week", {
          params: {
            api_key: "11cedbb1d6d79381b452e2fdec102159",
          },
        });

        if (response.status !== 200) {
          throw new Error("Could not fetch data");
        }

        console.log(response.data.results);
        setData(response.data.results);
        setDisplayedData(response.data.results.slice(startIndex, startIndex + 5));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [startIndex]);

  

 
  return (
    <div>
        <span className="bg-red-900 text-white font-semibold  p-4 block w-[116px] ml-12  mt-[-30px]">Shows</span>
      <div className="container px-5 flex-wrap mx-auto flex justify-between items-center mb-12">
        <div>
          <h3 className="text-[#FFF] mt-[35px] text-4xl"> Our Genres</h3>
        </div>
        <div>
    
            <button
              className="bg-[#1F1F1F] hover:bg-[#1A1A1A] mr-4 text-white font-bold py-2 px-4 rounded"
             >
              <img src={left} alt="Navigate to the Left" />
            </button>
       
            <button
              className="bg-[#1F1F1F] hover:bg-[#1A1A1A] text-white font-bold py-2 px-4 rounded"
            >
              <img src={right} alt="Navigate to the Right" />
            </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mb-24">
      
{displayedData.map((movie) => (
  <Link to={'/shows'} key={movie.id} className="max-w-[250px] mx-2 my-4 overflow-hidden border gap-7 bg-[#1A1A1A]  border-[#262626] p-5 rounded-lg shadow-lg">
    <img
      className="w-[200px] h-[250px] bg-cover items-center"
      src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
      alt={`Backdrop of ${movie.original_title}`}
    />
    <div className="px-6 py-4">
      <p className="text-[#999999] p-2  ">Name: {movie.name}{movie.original_title}</p>
    </div>
  </Link>
))}
      </div>
    </div>
  );
};

export default Genre2;
