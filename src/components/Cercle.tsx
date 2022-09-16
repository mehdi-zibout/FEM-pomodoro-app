function Cercle() {
  return (
    <div
      className='rounded-full'
      style={{ boxShadow: '50px 50px 100px 0px rgba(18, 21, 48, 1)' }}
    >
      <div
        className='box rounded-full tablet:w-[25.625rem] tablet:h-[25.625rem] w-[18.75rem] h-[18.75rem] bg-gradient-to-br from-[#2E325A] to-[#0E112A] flex justify-center items-center'
        style={{ boxShadow: '-50px -50px 100px 0px rgba(39, 44, 90, 1)' }}
      >
        <div className='bg-black rounded-full h-[16.73rem] w-[16.73rem] tablet:w-[22.875rem] tablet:h-[22.875rem]'></div>
      </div>
    </div>
  );
}
export default Cercle;
