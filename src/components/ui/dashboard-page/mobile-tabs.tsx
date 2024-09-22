const MobileTabs = () => {
  return (
    <>
      <div className="hidden max-sm:grid grid-cols-3 items-center justify-around  text-[15px] font-semibold ">
        <button className="px-4 py-2 border-b-2 border-[#5B5FC7] text-center">Tab 1</button>
        <button className="px-4 py-2 text-center">Tab 2</button>
        <button className="px-4 py-2 text-center">Tab 3</button>
      </div>
    </>
  );
};

export default MobileTabs;
