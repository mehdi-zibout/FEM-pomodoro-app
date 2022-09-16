import { useState, Fragment } from 'react';
import { SettingsType } from '../App';
import Button from './Button';
import ColorSelect from './ColorSelect';
import FontSelect from './FontSelect';
import NumberSelect from './NumberSelect';

function SettingsModal({
  settings,
  setSettings,
}: {
  settings: SettingsType;
  setSettings: React.Dispatch<React.SetStateAction<SettingsType>>;
}) {
  const [tempSettings, setTempSettings] = useState(settings);

  return (
    <div className='w-screen h-screen z-40 fixed flex justify-center items-center bg-[#0A0C1C] bg-opacity-50'>
      <div className='bg-white relative tablet:rounded-[25px] rounded-[15px] tablet:py-[2.125rem] py-[1rem] z-50 tablet:w-[33.75rem] tablet:h-[29em] w-[20.43rem] h-[34.32rem]'>
        <div className='px-[1.5rem] tablet:px-[2.5rem]  text-[1.25rem] leading-6 tablet:text-[1.75rem] tablet:leading-9 tablet:pb-[2rem] pb-[1.44rem] text-black border-b-[1px] border-[#E3E1E1] flex justify-between items-center'>
          <div> Settings</div>
          <div className='cursor-pointer'>
            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
              <path
                fill='#1E213F'
                fillRule='evenodd'
                d='M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z'
                opacity='.5'
              />
            </svg>
          </div>
        </div>
        <div className='px-[1.5rem]  tablet:px-[2.5rem] '>
          <div className='border-b-[1px] border-[#E3E1E1] pb-[1rem]'>
            <div className='text-center tablet:text-left py-[1.6rem]   text-h4 text-black uppercase'>
              time (minutes)
            </div>
            <div className='flex flex-col tablet:flex-row justify-between items-center'>
              <NumberSelect
                label='pomodoro'
                value={tempSettings.pomodoro}
                increment={() =>
                  setTempSettings({
                    ...tempSettings,
                    pomodoro: tempSettings.pomodoro + 1,
                  })
                }
                decrement={() => {
                  if (tempSettings.pomodoro === 0) {
                    return;
                  }
                  setTempSettings({
                    ...tempSettings,
                    pomodoro: tempSettings.pomodoro - 1,
                  });
                }}
                handleChange={(value) => {
                  if (isNaN(value)) {
                    return;
                  }
                  setTempSettings({ ...tempSettings, pomodoro: value });
                }}
              />
              <NumberSelect
                label='short break'
                value={tempSettings.shortBreak}
                increment={() =>
                  setTempSettings({
                    ...tempSettings,
                    shortBreak: tempSettings.shortBreak + 1,
                  })
                }
                decrement={() => {
                  if (tempSettings.shortBreak === 0) {
                    return;
                  }
                  setTempSettings({
                    ...tempSettings,
                    shortBreak: tempSettings.shortBreak - 1,
                  });
                }}
                handleChange={(value) => {
                  if (isNaN(value)) {
                    return;
                  }
                  setTempSettings({ ...tempSettings, shortBreak: value });
                }}
              />
              <NumberSelect
                label='long break'
                value={tempSettings.longBreak}
                increment={() =>
                  setTempSettings({
                    ...tempSettings,
                    longBreak: tempSettings.longBreak + 1,
                  })
                }
                decrement={() => {
                  if (tempSettings.longBreak === 0) {
                    return;
                  }
                  setTempSettings({
                    ...tempSettings,
                    longBreak: tempSettings.longBreak - 1,
                  });
                }}
                handleChange={(value) => {
                  if (isNaN(value)) {
                    return;
                  }
                  setTempSettings({ ...tempSettings, longBreak: value });
                }}
              />
            </div>
          </div>
          <div className='flex flex-col justify-center tablet:flex-row tablet:justify-between items-center border-b-[1px] border-[#E3E1E1] py-[0.9rem]'>
            <div className='text-h4 text-black uppercase mb-[0.625rem] tablet:mb-[0]'>
              font
            </div>
            <div className='flex justify-evenly items-center'>
              <FontSelect
                font={'font-sans'}
                isSelected={tempSettings.font === 'font-sans'}
                handleOnClick={() =>
                  setTempSettings({ ...tempSettings, font: 'font-sans' })
                }
              />

              <FontSelect
                font={'font-serif'}
                isSelected={tempSettings.font === 'font-serif'}
                handleOnClick={() =>
                  setTempSettings({ ...tempSettings, font: 'font-serif' })
                }
              />

              <FontSelect
                font={'font-mono'}
                isSelected={tempSettings.font === 'font-mono'}
                handleOnClick={() =>
                  setTempSettings({ ...tempSettings, font: 'font-mono' })
                }
              />
            </div>
          </div>
          <div className='flex flex-col justify-center tablet:flex-row tablet:justify-between items-center  pt-[1rem]'>
            <div className='    text-h4 text-black uppercase mb-[0.625rem] tablet:mb-[0]'>
              color
            </div>
            <div className='flex justify-evenly items-center'>
              <ColorSelect
                color='red'
                isSelected={tempSettings.color === 'red'}
                handleOnClick={() =>
                  setTempSettings({ ...tempSettings, color: 'red' })
                }
              />

              <ColorSelect
                color='cyan'
                isSelected={tempSettings.color === 'cyan'}
                handleOnClick={() =>
                  setTempSettings({ ...tempSettings, color: 'cyan' })
                }
              />

              <ColorSelect
                color='purple'
                isSelected={tempSettings.color === 'purple'}
                handleOnClick={() =>
                  setTempSettings({ ...tempSettings, color: 'purple' })
                }
              />
            </div>
          </div>
        </div>
        <div className='absolute w-[8.75rem] left-0 right-0 mx-auto -bottom-[1.5rem] '>
          <Button
            color={settings.color}
            isActive={true}
            className={`w-[8.75rem] ${
              settings.color === 'cyan' ? 'text-black ' : 'text-white'
            }`}
            onClick={() => setSettings(tempSettings)}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
export default SettingsModal;
