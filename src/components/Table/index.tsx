import React from 'react';
import TableHeader from '../TableHeader';

const columns = [{
  type: 'checkbox',
  name: '',
  key: 'cell1'
}, {
  type: 'text',
  name: 'Desert serving',
  key: 'cell2'
}, {
  type: 'text',
  name: 'Desert(100g serving)',
  key: 'cell2'
}, {
  type: 'text',
  name: 'Calories',
  key: 'cell3'
}, {
  type: 'text',
  name: 'Fat',
  key: 'cell3'
}, {
  type: 'text',
  name: 'Carbs',
  key: 'cell3'
}, {
  type: 'text',
  name: 'Protiene',
  key: 'cell3'
}]


function Table() {
  return (
    <div>
      <TableHeader columns={columns} />
    </div>
  );
}

export default Table;
