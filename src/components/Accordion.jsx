import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"; 
 
export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
<div className=" container  mx-auto   ">
<div className='flex items-center justify-between mt-[200px]'>
      <div>
        <h2 className=' text-3xl text-white'>Frequently Asked Questions</h2>
        <p className='text-gray-700 mt-3'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
       </div>
       <div >
       <button className='p-3 rounded-sm bg-red-900 text-white'>
       Ask a Question
       </button>
       </div>
      </div>
    </div>
<div className=" container  mx-auto   ">
    
    <div className="flex mt-16 justify-between">
    <div>
        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">01</button></div>
      <Accordion className="w-[600px] p-8" open={open === 1}  >
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(1)}>What is StreamVibe?
       <button className="ml-auto text-3xl " >+</button>
       </AccordionHeader>
        <AccordionBody className='text-[#999]'>
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">02</button></div>
      <Accordion className="w-[600px] p-8" open={open === 2}  >
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(2)}>How much does StreamVibe cost? 
       <button className="ml-auto text-3xl " >+</button>
       
       </AccordionHeader>
        <AccordionBody className='text-[#999]'>
         StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">03</button></div>
      <Accordion className="w-[600px] p-8" open={open === 3} >
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(3)}>What content is available on StreamVibe? 
       <button className="ml-auto text-3xl " >+</button>
       
       </AccordionHeader>
        <AccordionBody className='text-[#999]'>
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">04</button></div>
      <Accordion className="w-[600px] p-8" open={open === 4} >
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(4)}>How can I watch StreamVibe? 
       <button className="ml-auto text-3xl " >+</button>
       
       </AccordionHeader>
        <AccordionBody className='text-[#999]'>
         StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>
     
    </div>
     <div>
        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">05</button></div>
      <Accordion className="w-[600px] p-8" open={open === 5} >
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(5)}>How do I sign up for StreamVibe? 
       <button className="ml-auto text-3xl " >+</button>
       
       </AccordionHeader>
        <AccordionBody className='text-[#999]'>
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">06</button></div>
      <Accordion className="w-[600px] p-8" open={open === 6} >
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(6)}>What is the StreamVibe free trial? 
       <button className="ml-auto text-3xl " >+</button>
       
       </AccordionHeader>
        <AccordionBody className='text-[#999]'>
         StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">07</button></div>
      <Accordion className="w-[600px] p-8" open={open === 7} >
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(7)}>How do I contact StreamVibe customer support? 
       <button className="ml-auto text-3xl " >+</button>
       
       </AccordionHeader>
        <AccordionBody className='text-[#999]'>
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">08</button></div>
      <Accordion className="w-[600px] p-8" open={open === 8} >
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(8)}>What are the StreamVibe payment methods? 
       <button className="ml-auto text-3xl " >+</button>
       
       </AccordionHeader>
        <AccordionBody className='text-[#999]'>
         StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>
     
    </div>
</div>
</div>
    </>
  );
}