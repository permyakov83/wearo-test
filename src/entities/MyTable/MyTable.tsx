import { Table, TableBody } from '@/components/ui/table';
import { Row, type RowProps } from '@/shared/Row';

export interface MyTablePops {
  things: RowProps[] | [];
}

export function MyTable(props: MyTablePops) {
  const { things } = props;
  return (
    <div className='w-full'>
      <div className='overflow-hidden rounded-md border'>
        <Table>
          <TableBody>{things.map((el) => Row(el))}</TableBody>
        </Table>
      </div>
    </div>
  );
}
