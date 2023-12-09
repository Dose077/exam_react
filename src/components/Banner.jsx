
const Banner = () => {
  return (
    <div className="container mx-auto px-5">

        <div className=" w-full mb-[134px]  bg-no-repeat h-[344px] mt-[200px] bg-[url('./assets/Background.png')]">

        <div className=' flex items-center justify-between px-[80px] py-[115px]'> 
      <div>
        <h2 className=' text-5xl text-white'>Start your free trial today!</h2>
        <p className='text-gray-700 mt-3'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
       </div>
       <div >
       <button className='p-4 rounded-sm bg-red-900 text-white'>
       Start a Free Trail
       </button>  
       </div>
      </div>
        </div>

    </div>
  )
}

export default Banner