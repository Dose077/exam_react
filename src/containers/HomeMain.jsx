import left from '../assets/left.svg'
import right from '../assets/right.svg'
import phone from '../assets/phone.svg'
import table from '../assets/table.svg'
import tv from '../assets/tv.svg'
import laptop from '../assets/laptop.svg'
import jostic from '../assets/joistic.svg'
import vr from '../assets/vr.svg'
import { AccordionCustomIcon } from '../components/Accordion'
import Plan from '../components/Plan'
import MovieList from '../components/MovieList'
import Search from '../components/Search'
const HomeMain = () => {
  return (
    <main>
    <section>    

    <div className="container mx-auto px-5">
      <Search/>
      <div className='flex items-center justify-between mt-[200px]'>
      <div>
        <h2 className=' text-3xl text-white'>Explore our wide variety of categories</h2>
        <p className='text-gray-700 mt-3'>Whether youre looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
       </div>
       <div className='flex items-center bg-black rounded-xl p-2'>
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

       <MovieList/>
       <div className='container mx-auto px-5'>
       <div className='mt-[150px]'>
        <h2 className='text-3xl text-white'>We Provide you streaming experience across various devices.</h2>
        <p className='text-gray-700 mt-3 w-4/5'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
       </div>
       <div className="mt-{80px} w-full  grid grid-cols-3 grid-rows-2  gap-[30px]  mt-[80px] mb-[150px] max-lg:grid-cols-2">
          <div className=" bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span >
                <img className=" p-4 bg-gray-900 rounded-xl" src={phone} alt="" />
              </span>
              <p className=" font-bold text-2xl  text-white">Smartphones</p>
            </div>
            <p className="text-gray-500">
            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className=" bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span >
                <img className=" p-4 bg-gray-900 rounded-xl" src={table} alt="" />
              </span>
              <p className=" font-bold text-2xl  text-white">Smartphones</p>
            </div>
            <p className="text-gray-500">
            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>  <div className=" bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span >
                <img className=" p-4 bg-gray-900 rounded-xl" src={tv} alt="" />
              </span>
              <p className=" font-bold text-2xl  text-white">Smartphones</p>
            </div>
            <p className="text-gray-500">
            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>  <div className=" bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span >
                <img className=" p-4 bg-gray-900 rounded-xl" src={laptop} alt="" />
              </span>
              <p className=" font-bold text-2xl  text-white">Smartphones</p>
            </div>
            <p className="text-gray-500">
            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>  <div className=" bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span >
                <img className=" p-4 bg-gray-900 rounded-xl" src={jostic} alt="" />
              </span>
              <p className=" font-bold text-2xl  text-white">Smartphones</p>
            </div>
            <p className="text-gray-500">
            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>  <div className=" bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span >
                <img className=" p-4 bg-gray-900 rounded-xl" src={vr} alt="" />
              </span>
              <p className=" font-bold text-2xl  text-white">Smartphones</p>
            </div>
            <p className="text-gray-500">
            StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        
       
        </div>
       </div>
        <section>

        </section>
     <div className="container mx-auto px-5">

   <AccordionCustomIcon/>
      
     </div>
            </section>

            <section>
       <div className="container mx-auto px-5">
      
      <Plan/>
       </div>
            </section>
    </main>
  )
}

export default HomeMain