import { FontType } from '../App';

function FontSelect({
  isSelected = false,
  font,
}: {
  isSelected?: boolean;
  font: FontType;
}) {
  return (
    <div
      className={`rounded-full w-[3.125rem] h-[3.125rem] flex justify-center items-center hover:border-[1px]  ${
        isSelected ? 'border-black' : 'border-gray cursor-pointer'
      }  `}
    >
      <button
        className={`rounded-full w-[2.5rem] h-[2.5rem] ${font} ${
          isSelected ? 'bg-black text-white' : 'bg-gray text-darkBlue'
        } flex justify-center items-center `}
      >
        Aa
      </button>
    </div>
  );
}
export default FontSelect;
