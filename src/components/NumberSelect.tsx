type NumberSelectProps = {
  label: string;
  value: number;
  increment: React.MouseEventHandler<HTMLDivElement>;
  decrement: React.MouseEventHandler<HTMLDivElement>;
  handleChange: (value: number) => void;
};
function NumberSelect({
  value,
  increment,
  decrement,
  handleChange,
  label,
}: NumberSelectProps) {
  return (
    <div className='flex justify-between items-center tablet:flex-col tablet:items-start w-full mb-[0.5rem] '>
      <label
        className='text-body2 text-darkBlue opacity-40 mb-[0.31rem]'
        htmlFor={`${label}`}
      >
        {label}
      </label>
      <div
        id='form'
        className='bg-gray px-[1rem] flex justify-between items-center rounded-[0.625rem] w-[8.75rem] tablet:h-[3rem] h-[2.5rem]'
      >
        <div className='py-[1rem] text-darkBlue'>
          <input
            value={value}
            onChange={(e) => handleChange(+e.target.value)}
            type='text'
            name={`${label}`}
            id={`${label}`}
            className='w-[5rem] bg-gray bg-opacity-0 focus:outline-none'
          />
        </div>
        <div className='flex flex-col justify-evenly  h-full'>
          <div className='cursor-pointer' onClick={increment}>
            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='7'>
              <path
                fill='none'
                stroke='#1E213F'
                strokeOpacity='.25'
                strokeWidth='2'
                d='M1 6l6-4 6 4'
              />
            </svg>
          </div>
          <div className='cursor-pointer' onClick={decrement}>
            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='7'>
              <path
                fill='none'
                stroke='#1E213F'
                strokeOpacity='.25'
                strokeWidth='2'
                d='M1 1l6 4 6-4'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NumberSelect;
