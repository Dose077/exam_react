
import Genre from '../components/Homee/Genre';
import Popular from '../components/Homee/Popular';
import Trending from '../components/Homee/Trending';
import Releases from '../components/Homee/Releases';
import Watch from '../components/Homee/Watch';
import Genre2 from '../components/Shows/Genre2';
import Trending2 from '../components/Shows/Trending2';
import Releases2 from '../components/Shows/Releases2';
import Watch2 from '../components/Shows/Watch2';
import Backgraund from '../components/Homee/Backgraund';
import PopularShow from '../components/Shows/PopularShow';
import Search from '../components/Search';


const Shows_Movies = () => {
  return (
  < >
  <div className="container mx-auto px-5">
    <Backgraund/>
  </div>
 <div className='container mx-auto px-5'>
  <Search/>
 <div className='border mt-[180px]'>
  <Genre/>
  <Popular/>
  <Trending/>
  <Releases/>
  <Watch/>
  </div>
 </div>
 <div className='container mx-auto px-5'>
 <div className='border mt-[180px]'>
    <Genre2/>
    <Trending2/>
    <PopularShow/>
    <Releases2/>
    <Watch2/>
  </div>
 </div>

  </>
  )
}

export default Shows_Movies