import { IconThermometer } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';

interface Props {}

export const Temperature: FC<Props> = () => {
  const [temperature, setTemperature] = useState<number>(0.5);

  const { t } = useTranslation('sidebar');

  localStorage.getItem('temperature');

  useEffect(() => {
    if (localStorage.getItem('temperature')) {
      setTemperature(parseFloat(localStorage.getItem('temperature') || '0.5'));
    }
  }, []);

  function handleTemperatureChange(event: any) {
    setTemperature(event.target.value);
    localStorage.setItem('temperature', event.target.value);
  }

  return (
    <div className="py-3">
      <div className="mb-2 flex w-full items-center gap-3 px-3">
        <IconThermometer size={18} />
        <label
          htmlFor="temperature"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Temperatura: {temperature}
        </label>
      </div>
      <input
        type="range"
        name="temperatureRange"
        min="0"
        max="1"
        step="0.01"
        value={temperature}
        onChange={handleTemperatureChange}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
      />
    </div>
  );
};
