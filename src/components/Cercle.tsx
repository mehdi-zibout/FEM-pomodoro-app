import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { ColorType, ModeType, SettingsType } from '../App';
function Cercle({
  settings,
  color,
  defaultTime,
  timer,
  setTimer,
  mode,
}: CercleProps) {
  const percentage = (timer.remaining / settings[timer.type]) * 100;
  const barColor =
    color === 'red'
      ? 'rgb(248, 112, 112)'
      : color === 'cyan'
      ? 'rgb(112, 243, 248)'
      : 'rgb(216, 129, 248)';
  const textColor =
    color === 'red'
      ? 'text-red'
      : color === 'cyan'
      ? 'text-cyan'
      : 'text-purple';
  const getTimerMessage = () => {
    if (!timer.isRunning) {
      if (timer.remaining === settings[timer.type]) return 'start';
      if (
        timer.remaining < settings[timer.type] &&
        mode === timer.type &&
        timer.remaining > 0.017
      )
        return 'resume';
    } else {
      if (mode === timer.type) return 'pause';
    }
    if (timer.type === 'pomodoro') {
      return (
        <div className='tracking-normal text-body1'>
          Enough! I need a break.
        </div>
      );
    }
    if (timer.type === 'longBreak' || timer.type === 'shortBreak') {
      if (mode === 'pomodoro')
        return (
          <div className='tracking-normal text-body1'>
            Breaks are boring! I want to work.
          </div>
        );
      if (timer.type === 'longBreak')
        return (
          <div className='tracking-normal text-body1'>
            I just need a short break.
          </div>
        );
      return (
        <div className='tracking-normal  text-body1'>
          I need a longer break.
        </div>
      );
    }
  };
  return (
    <div
      className='rounded-full'
      style={{ boxShadow: '50px 50px 100px 0px rgba(18, 21, 48, 1)' }}
    >
      <div
        className='box rounded-full tablet:w-[25.625rem] tablet:h-[25.625rem] w-[18.75rem] h-[18.75rem] bg-gradient-to-br from-[#2E325A] to-[#0E112A] flex justify-center items-center'
        style={{ boxShadow: '-50px -50px 100px 0px rgba(39, 44, 90, 1)' }}
      >
        <div className='bg-black rounded-full h-[16.73rem] w-[16.73rem] tablet:w-[22.875rem] tablet:h-[22.875rem] relative'>
          <CircularProgressbar
            value={percentage}
            strokeWidth={3.3}
            styles={buildStyles({
              pathColor: barColor,
              trailColor: '#161932',
            })}
          />
          <div className='m-auto flex flex-col justify-center items-center h-[16.73rem] w-[16.73rem] tablet:w-[22.875rem] tablet:h-[22.875rem] left-0 right-0 top-0 bottom-0 absolute'>
            <h1 className='text-h1 text-[5rem] tablet:text-[6.25rem] '>
              {mode === timer.type
                ? formatDuration(timer.remaining)
                : formatDuration(defaultTime)}
            </h1>
            <button
              className={`uppercase text-h3 ${textColor} `}
              onClick={
                timer.type === mode
                  ? () =>
                      setTimer({
                        ...timer,
                        isRunning: !timer.isRunning,
                      })
                  : () =>
                      setTimer({
                        type: mode,
                        remaining: defaultTime,
                        isRunning: true,
                      })
              }
            >
              {getTimerMessage()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cercle;

function formatDuration(duration: number) {
  if (duration >= 60)
    return new Date(duration * 60 * 1000).toISOString().slice(11, 19);
  else return new Date(duration * 60 * 1000).toISOString().slice(14, 19);
}

type CercleProps = {
  mode: ModeType;
  settings: SettingsType;
  color: ColorType;
  defaultTime: number;
  timer: { type: ModeType; isRunning: boolean; remaining: number };
  setTimer: React.Dispatch<
    React.SetStateAction<{
      type: ModeType;
      isRunning: boolean;
      remaining: number;
    }>
  >;
};
