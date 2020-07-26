import React from 'react';

interface TableHeaderProps {
  columns: any[]
}

function TableHeader({ columns }: TableHeaderProps) {
  return (
    <div className="flex b">
      {
        columns.map(item => (
          <div className="pa3">
            {item.name}
          </div>
        ))
      }
    </div>
  );
}

export default TableHeader;
