import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MyTable } from '@/Table/MyTable';

export function HomePage() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-semibold'>Список вещей</h1>
      <div className='flex flex-col gap-[20px] border rounded-3xl p-[30px] shadow-xl/20'>
        <div className='flex gap-5'>
          <Input className='min-w-sm' placeholder='Введите название вещи' />
          <Button>Сохранить</Button>
        </div>
        <MyTable />
      </div>
    </div>
  );
}
