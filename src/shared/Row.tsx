import { delDataLS } from '@/api/LocalStorage';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';

export interface RowProps {
  key: string;
  data: string;
}

export function Row(props: RowProps) {
  const { key, data } = props;

  const del = () => {
    delDataLS(key);
  };

  return (
    <TableRow key={key}>
      <TableCell className='flex justify-between items-center' key='TableCell'>
        <span>{data}</span>
        <Button onClick={del} variant='destructive' size={'sm'}>
          Удалить
        </Button>
      </TableCell>
    </TableRow>
  );
}
