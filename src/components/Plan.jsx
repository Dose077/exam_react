
const Plan = () => {
  return (
    
    <div className="container mx-auto mt-28">
      <div className='flex items-center justify-between mt-[200px]'>
      <div>
        <h2 className=' text-3xl text-white'>Choose the plan thats right for you</h2>
        <p className='text-gray-700 mt-3'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
       </div>
       <div className='flex bg-black p-1'>
       <button className='p-3 rounded bg-gray-800 text-white'>
       Monthly
       </button>  <button className='p-3  text-gray-400'>
       Yearly
       </button>
       </div>
      </div>
      <div className='flex justify-between'>
      <div className="mt-6 w-[450px] bg-[#1A1A1A] p-3" >
        <div className='p-5'>
          <h5  color="blue-gray" className="mb-2 text-xl text-[#FFF]">
           Basic Plan
          </h5>
          <p className='text-[#999]'>
          Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
          </p>
          <p className='text-4xl text-[#FFF]  mt-3'>
            $9.99<span className="text-base text-[#999]">/month</span>
          </p>
        <div className="pt-4 gap-5">
          <button className='p-4 bg-[#000] rounded-xl text-white ml mr-5'>Start Free Trial</button>
          <button className='p-4 bg-[#E50000] rounded-xl text-white '>Choose Plan</button>
        </div>
        </div>
      </div>
      <div className="mt-6 w-[450px] bg-[#1A1A1A] p-3" >
        <div className='p-5'>
          <h5  color="blue-gray" className="mb-2 text-xl text-[#FFF]">
          Standard Plan
          </h5>
          <p className='text-[#999]'>
          Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
          </p>
          <p className='text-4xl text-[#FFF]  mt-3'>
            $12.99 <span className="text-base text-[#999]">/month</span>
          </p>
        <div className="pt-4 gap-5">
          <button className='p-4 bg-[#000] rounded-xl text-white mr-5'>Start Free Trial</button>
          <button className='p-4 bg-[#E50000] rounded-xl text-white '>Choose Plan</button>
        </div>
        </div>
      </div>
      <div className="mt-6 w-[450px] bg-[#1A1A1A] p-3" >
        <div className='p-5'>
          <h5  color="blue-gray" className="mb-2 text-xl text-[#FFF]">
          Premium Plan
          </h5>
          <p className='text-[#999]'>
          Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
          </p>
          <p className='text-4xl text-[#FFF]  mt-3'>
          $14.99<span className="text-base text-[#999]">/month</span>
          </p>
        <div className="pt-4 gap-5">
          <button className='p-4 bg-[#000] rounded-xl text-white mr-5'>Start Free Trial</button>
          <button className='p-4 bg-[#E50000] rounded-xl text-white '>Choose Plan</button>
        </div>
        </div>
      </div>
 
   
      </div>
    </div>
  );
};

export default Plan;
