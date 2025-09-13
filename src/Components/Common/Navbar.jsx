function Navbar() {
    const NavNAme=["Studio","Projects","Blog","Contact"];
  return (
    <div className="bg-gray-200">
    <div className="flex flex-row font-bold py-4 items-center justify-between px-10 list-none">
      <li className="text-[18px]" >Dezvolta</li>
      {NavNAme.map((Values,index)=>{
        return <li className="cursor-pointer" key={index}>{Values}</li>
      })}
      <li className="flex justify-center items-center flex-col gap-2 cursor-pointer"><div className="border-b-3 px-7 "></div><div className="border-b-3 px-7"></div></li>
    </div>
    </div>
  );
}

export default Navbar;
