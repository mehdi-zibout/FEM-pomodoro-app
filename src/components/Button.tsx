import { ColorType } from '../App';
type ButtonProps = {
  children: React.ReactNode;
  color: ColorType;
  isActive: boolean;
  className?: string;
  onClick(): any;
};
function Button({
  children,
  color,
  isActive,
  className = '',
  onClick,
}: ButtonProps) {
  const backgroundColor =
    color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-purple';
  return (
    <button
      onClick={onClick}
      className={`rounded-full ${className} ${
        isActive
          ? `text-darkBlue ${backgroundColor}`
          : 'opacity-40 hover:opacity-100'
      } text-[1rem] leading-5   `}
    >
      <div
        className={`px-[1.625rem] py-[1.07rem] ${
          isActive ? 'hover:bg-white hover:bg-opacity-20' : ''
        }  rounded-full`}
      >
        {children}
      </div>
    </button>
  );
}
export default Button;
