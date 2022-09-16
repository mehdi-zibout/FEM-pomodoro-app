import { ColorType } from '../App';

function ColorSelect({
  handleOnClick,
  isSelected = false,
  color,
}: {
  handleOnClick: React.MouseEventHandler<HTMLDivElement>;
  isSelected?: boolean;
  color: ColorType;
}) {
  const backgroundColor =
    color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-purple';
  return (
    <div
      onClick={handleOnClick}
      className={`rounded-full w-[3.125rem] h-[3.125rem] flex justify-center items-center hover:border-[1px]  border-gray cursor-pointer' `}
    >
      <button
        className={`rounded-full w-[2.5rem] h-[2.5rem] ${backgroundColor}  flex justify-center items-center `}
      >
        {isSelected && (
          <svg
            width='14'
            height='12'
            xmlns='http://www.w3.org/2000/svg'
            className='-mb-[0.2rem] -mr-[0.2rem] stroke-black'
          >
            <path stroke-width='3' fill='none' d='M1 5.607 4.393 9l8-8' />
          </svg>
        )}
      </button>
    </div>
  );
}
export default ColorSelect;
