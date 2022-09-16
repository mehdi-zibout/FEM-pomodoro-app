import { useState } from 'react';
import Button from './components/Button';
import FontSelect from './components/FontSelect';

function App() {
  const [settings, setSettings] = useState<SettingsType>({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    font: 'font-sans',
    color: 'red',
  });
  return (
    <div
      className={`w-screen h-screen ${settings.font} text-blueishGray bg-darkBlue `}
    >
      <div className=''>Hello, World!</div>
      <Button color='red' isActive={true}>
        pomodoro
      </Button>
      <Button color='red' isActive={false}>
        short break
      </Button>
      <div className='flex justify-evenly'>
        <FontSelect font={settings.font} isSelected={true} />
        <FontSelect font={'font-serif'} />
        <FontSelect font={'font-mono'} />
      </div>
    </div>
  );
}

export default App;

export type FontType = 'font-sans' | 'font-serif' | 'font-mono';
export type ColorType = `red` | `cyan` | `purple`;
type SettingsType = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  font: FontType;
  color: ColorType;
};
