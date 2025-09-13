import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export function MyTable() {
  return (
    <div className='w-full'>
      <div className='overflow-hidden rounded-md border'>
        <Table>
          <TableBody>
            <TableRow key='Кроссовки'>
              <TableCell key='TableCell'>Кроссовки</TableCell>
            </TableRow>
            <TableRow key='Кофта'>
              <TableCell key='TableCell'>Кофта</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
