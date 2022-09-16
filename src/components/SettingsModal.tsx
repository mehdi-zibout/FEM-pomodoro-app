import { useState, Fragment } from 'react';
import { SettingsType } from '../App';
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
  const settingsData = [
    {
      title: 'time (minutes)',
      data: [
        {
          id: 1,
          content: (
            <NumberSelect
              label='pomodoro'
              value={tempSettings.pomodoro}
              increment={() =>
                setSettings({
                  ...tempSettings,
                  pomodoro: tempSettings.pomodoro + 1,
                })
              }
              decrement={() => {
                if (tempSettings.pomodoro === 0) {
                  return;
                }
                setSettings({
                  ...tempSettings,
                  pomodoro: tempSettings.pomodoro - 1,
                });
              }}
              handleChange={(value) => {
                if (isNaN(value)) {
                  return;
                }
                setSettings({ ...tempSettings, pomodoro: value });
              }}
            />
          ),
        },
        {
          id: 2,
          content: (
            <NumberSelect
              label='short break'
              value={tempSettings.shortBreak}
              increment={() =>
                setSettings({
                  ...tempSettings,
                  shortBreak: tempSettings.shortBreak + 1,
                })
              }
              decrement={() => {
                if (tempSettings.shortBreak === 0) {
                  return;
                }
                setSettings({
                  ...tempSettings,
                  shortBreak: tempSettings.shortBreak - 1,
                });
              }}
              handleChange={(value) => {
                if (isNaN(value)) {
                  return;
                }
                setSettings({ ...tempSettings, shortBreak: value });
              }}
            />
          ),
        },
        {
          id: 3,
          content: (
            <NumberSelect
              label='long break'
              value={tempSettings.longBreak}
              increment={() =>
                setSettings({
                  ...tempSettings,
                  longBreak: tempSettings.longBreak + 1,
                })
              }
              decrement={() => {
                if (tempSettings.longBreak === 0) {
                  return;
                }
                setSettings({
                  ...tempSettings,
                  longBreak: tempSettings.longBreak - 1,
                });
              }}
              handleChange={(value) => {
                if (isNaN(value)) {
                  return;
                }
                setSettings({ ...tempSettings, longBreak: value });
              }}
            />
          ),
        },
      ],
    },
    {
      title: 'font',
      data: [
        {
          id: 1,
          content: (
            <FontSelect
              font={'font-sans'}
              isSelected={tempSettings.font === 'font-sans'}
              handleOnClick={() =>
                setTempSettings({ ...tempSettings, font: 'font-sans' })
              }
            />
          ),
        },
        {
          id: 2,
          content: (
            <FontSelect
              font={'font-serif'}
              isSelected={tempSettings.font === 'font-serif'}
              handleOnClick={() =>
                setTempSettings({ ...tempSettings, font: 'font-serif' })
              }
            />
          ),
        },
        {
          id: 3,
          content: (
            <FontSelect
              font={'font-mono'}
              isSelected={tempSettings.font === 'font-mono'}
              handleOnClick={() =>
                setTempSettings({ ...tempSettings, font: 'font-mono' })
              }
            />
          ),
        },
      ],
    },
    {
      title: 'color',
      data: [
        {
          id: 1,
          content: (
            <ColorSelect
              color='red'
              isSelected={tempSettings.color === 'red'}
              handleOnClick={() =>
                setTempSettings({ ...tempSettings, color: 'red' })
              }
            />
          ),
        },
        {
          id: 2,
          content: (
            <ColorSelect
              color='cyan'
              isSelected={tempSettings.color === 'cyan'}
              handleOnClick={() =>
                setTempSettings({ ...tempSettings, color: 'cyan' })
              }
            />
          ),
        },
        {
          id: 3,
          content: (
            <ColorSelect
              color='purple'
              isSelected={tempSettings.color === 'purple'}
              handleOnClick={() =>
                setTempSettings({ ...tempSettings, color: 'purple' })
              }
            />
          ),
        },
      ],
    },
  ];
  return (
    <div className='w-screen h-screen z-40 fixed flex justify-center items-center bg-[#0A0C1C] bg-opacity-50'>
      <div className='bg-white tablet:rounded-[25px] rounded-[15px] tablet:py-[2.125rem] py-[1.5rem] z-50 tablet:w-[33.75rem] tablet:h-[29em] w-[20.43rem] h-[34.31rem]'>
        <div className='px-[1.5rem] tablet:px-[2.5rem] border-b-[1px] text-[1.25rem] leading-6 tablet:text-[1.75rem] tablet:leading-9 tablet:pb-[2rem] pb-[1.44rem] text-black border-[#E3E1E1] flex justify-between items-center'>
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
          {settingsData.map((setting) => (
            <Fragment key={setting.title}>
              <div className='text-center  border-b-[1px] '>
                {setting.title}
              </div>
              <ul className='flex first-of-type:flex-col first-of-type:tablet:flex-row  flex-row justify-between items-center'>
                {setting.data.map((item) => (
                  <li key={item.id}>{item.content}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SettingsModal;
