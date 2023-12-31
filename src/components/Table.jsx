

const Table = () => {
  return (
    <>
      <div className="container mx-auto mt-40">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-5xl font-semibold leading-[72px] text-white">
              Choose the plan thats right for you
            </h4>
            <p className="text-lg text-[#999999] font-normal mb-12 mt-2">
              Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
            </p>
          </div>
          <div></div>
        </div>
        <div className="container mx-auto">
          <table className="table-auto border-collapse border border-gray-500">
            <thead>
              <tr className="bg-[#000] ">
                <th className="border text-[#FFF] w-1/4   text-start  border-[#262626] p-4">Features</th>
                <th className="border text-[#FFF] w-1/4   text-start  border-[#262626] p-4">Basic</th>
                <th className="border text-[#FFF] w-1/4  text-start  border-[#262626] p-4">Standard <span className="bg-red-800 p-1 text-sm">popular</span></th>
                <th className="border text-[#FFF] w-1/4 text-start  border-[#262626] p-4">Premium </th>
              </tr>
            </thead>
           <tbody>
       
        <tr>
          <td className="border  border-[#262626] text-[#999999] p-4">Price</td>
          <td className="border  border-[#262626] text-[#999999] p-4">$9.99/Month</td>
           <td className="border  border-[#262626] text-[#999999] p-4">$12.99/Month</td>
            <td className="border  border-[#262626] text-[#999999] p-4">$14.99/Month</td>
        </tr>
       
        <tr>
          <td className="border  border-[#262626] text-[#999999] p-4">Content</td>
          <td className="border  border-[#262626] text-[#999999] p-4">Access to a wide selection of movies and shows, including some new releases.</td>
           <td className="border  border-[#262626] text-[#999999] p-4">Access to a wider selection of movies and shows, including most new releases and exclusive content</td>
            <td className="border  border-[#262626] text-[#999999] p-4">Access to a widest selection of movies and shows, including most new releases and Offline Viewing</td>
        </tr>
               
        <tr>
           <td className="border  border-[#262626] text-[#999999] p-4">Devices</td>
          <td className="border  border-[#262626] text-[#999999] p-4">Watch on one device simultaneously</td>
           <td className="border  border-[#262626] text-[#999999] p-4">Watch on Two device simultaneously</td>
            <td className="border  border-[#262626] text-[#999999] p-4">Watch on Four device simultaneously</td>
        </tr>

          <tr>
           <td className="border  border-[#262626] text-[#999999] p-4">Free Trail</td>
          <td className="border  border-[#262626] text-[#999999] p-4">7 Days</td>
           <td className="border  border-[#262626] text-[#999999] p-4">7 Days</td>
            <td className="border  border-[#262626] text-[#999999] p-4">7 Days</td>
        </tr>

          <tr>
           <td className="border  border-[#262626] text-[#999999] p-4">Cancel Anytime</td>
          <td className="border  border-[#262626] text-[#999999] p-4">Yes</td>
           <td className="border  border-[#262626] text-[#999999] p-4">Yes</td>
            <td className="border  border-[#262626] text-[#999999] p-4">Yes</td>
        </tr>

          <tr>
           <td className="border border- border-[#262626] text-[#999999] p-4">HDR</td>
          <td className="border  border-[#262626] text-[#999999] p-4">No</td>
           <td className="border  border-[#262626] text-[#999999] p-4">Yes</td>
            <td className="border border-[#262626] text-[#999999] p-4">Yes</td>
        </tr>

          <tr>
           <td className="border  border-[#262626] text-[#999999] p-4">Dolby Atmos</td>
          <td className="border  border-[#262626] text-[#999999] p-4">No</td>
           <td className="border  border-[#262626] text-[#999999] p-4">Yes</td>
            <td className="border  border-[#262626] text-[#999999] p-4">Yes</td>
        </tr>

         <tr>
           <td className="border border-[#262626] text-[#999999] p-4">Ad - Free</td>
          <td className="border border-[#262626] text-[#999999] p-4">No</td>
           <td className="border border-[#262626] text-[#999999] p-4">Yes</td>
            <td className="border border-[#262626] text-[#999999] p-4">Yes</td>
        </tr>

         <tr>
           <td className="border border-[#262626] text-[#999999] p-4">Offline Viewing</td>
          <td className="border border-[#262626] text-[#999999] p-4">No</td>
           <td className="border border-[#262626] text-[#999999] p-4">Yes, for select titles.</td>
            <td className="border border-[#262626] text-[#999999] p-4">Yes, for all titles.</td>
        </tr>

         <tr>
           <td className="border border-[#262626] text-[#999999] p-4">Family Sharing</td>
          <td className="border border-[#262626] text-[#999999] p-4">No</td>
           <td className="border border-[#262626] text-[#999999] p-4">Yes, up to 5 family members.</td>
            <td className="border border-[#262626] text-[#999999] p-4">Yes, up to 6 family members.</td>
        </tr>
       
      </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
