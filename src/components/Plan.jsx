import {  Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';

const Plan = () => {
  return (
    
    <div className="container mx-auto mt-28">
      <div className='flex items-center justify-between mt-[200px]'>
      <div>
        <h2 className=' text-3xl text-white'>Choose the plan that's right for you</h2>
        <p className='text-gray-700 mt-3'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
       </div>
       <div className='flex bg-black p-1'>
       <button className='p-3 rounded-xl bg-gray-800 text-white'>
       Monthly
       </button>  <button className='p-3  text-gray-400'>
       Yearly
       </button>
       </div>
      </div>
      <div className='flex justify-between'>
      <Card className="mt-6 w-[450px] bg-[#1A1A1A] p-3" >
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-[#FFF]">
           Basic Plan
          </Typography>
          <Typography className='text-[#999]'>
          Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
          </Typography>
          <Typography className='text-4xl text-[#FFF]  mt-3'>
            $9.99
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 gap-5">
          <Button className='py-4 bg-[#000] mr-5'>Start Free Trial</Button>
          <Button className='py-4 bg-[#E50000]'>Choose Plan</Button>
        </CardFooter>
      </Card>
 <Card className="mt-6 w-[450px] bg-[#1A1A1A] p-3" >
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-[#FFF]">
          Standard Plan
          </Typography>
          <Typography className='text-[#999]'>
          Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
          </Typography>
          <Typography className='text-4xl text-[#FFF]  mt-3'>
          $12.99
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 gap-5">
          <Button className='py-4 bg-[#000] mr-5'>Start Free Trial</Button>
          <Button className='py-4 bg-[#E50000]'>Choose Plan</Button>
        </CardFooter>
      </Card>
       <Card className="mt-6 w-[450px] bg-[#1A1A1A] p-3" >
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-[#FFF]">
          Premium Plan
          </Typography>
          <Typography className='text-[#999]'>
          Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
          </Typography>
          <Typography className='text-4xl text-[#FFF]  mt-3'>
          $14.99
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 gap-5">
          <Button className='py-4 bg-[#000] mr-5'>Start Free Trial</Button>
          <Button className='py-4 bg-[#E50000]'>Choose Plan</Button>
        </CardFooter>
      </Card>
      </div>
    </div>
  );
};

export default Plan;
