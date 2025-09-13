import { TableCell, TableRow } from '@/components/ui/table';

interface RowProps {
  key: number;
  data: string;
}

export function Row(props: RowProps) {
  const { key, data } = props;
  return (
    <TableRow key={key}>
      <TableCell key='TableCell'>{data}</TableCell>
    </TableRow>
  );
}
