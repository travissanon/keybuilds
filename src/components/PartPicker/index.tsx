import * as React from 'react';
import TableTitle from '../TableTitle/index.tsx';
import TableToolbar from '../TableToolbar/index.tsx';
import Table from '../Table/index.tsx';

export interface IPartPickerProps {
}

export default function PartPicker (props: IPartPickerProps) {
  return (
    <div>
        <TableTitle
            title={"Part Picker"}
            subtitle={"So many options."}
        />
        {/* <TableToolbar />
        <Table /> */}
    </div>
  );
}
