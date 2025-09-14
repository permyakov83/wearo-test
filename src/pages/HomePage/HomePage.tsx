import { addDataLS, getDataLS } from '@/api/LocalStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MyTable } from '@/entities/MyTable/MyTable';

import { things } from '@/mock/things';
import type { RowProps } from '@/shared/Row';
import { useEffect, useState } from 'react';

export function HomePage() {
  const [inputValue, setInputValue] = useState<string>('');
  const [thingsArr, setThingsArr] = useState<RowProps[]>([]);

  useEffect(() => {
    const dataLS = getDataLS();
    if (dataLS.length === 0) {
      for (const value of things) {
        addDataLS(value);
        console.log('zero');
      }
      setThingsArr(getDataLS());
    } else {
      setThingsArr(dataLS);
    }
  }, [thingsArr]);

  const handleInputValue: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    setThingsArr(getDataLS());
    const key = Math.max(...thingsArr.map((item) => Number(item.key))) + 1;
    const row: RowProps = { key: key.toString(), data: inputValue };
    console.log(row);
    addDataLS(row);
    setInputValue('');
  };

  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-semibold'>Список вещей</h1>
      <div className='flex flex-col gap-[20px] border rounded-3xl p-[30px] shadow-xl/20'>
        <div className='flex gap-5'>
          <Input
            className='min-w-sm'
            placeholder='Введите название вещи'
            value={inputValue}
            onChange={handleInputValue}
          />
          <Button onClick={handleSave} disabled={inputValue.length === 0}>
            Сохранить
          </Button>
        </div>
        <MyTable things={thingsArr} />
      </div>
    </div>
  );
}
