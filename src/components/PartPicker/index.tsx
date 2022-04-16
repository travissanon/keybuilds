import * as React from 'react';
import TableTitle from '../TableTitle/index.tsx';
import TableToolbar from '../TableToolbar/index.tsx';
import Table from '../Table/index.tsx';

export interface IPartPickerProps {
}

const mockKeyboardData = [
  {
      partName: "GATERON YELLOW LINEAR SWITCHES",
      type: "Linear",
      pin: "3/5",
      stem: "MX",
      count: "10",
      store: "KBDFans",
      price: "$2.00"
  },
  {
      partName: "GATERON BROWN TACTILE SWITCHES",
      type: "Tactile",
      pin: "3/5",
      stem: "MX",
      count: "10",
      store: "KBDFans",
      price: "$2.00"
  },
  {
    partName: "GATERON BLUE TACTILE SWITCHES",
    type: "Tactile",
    pin: "3/5",
    stem: "MX",
    count: "10",
    store: "KBDFans",
    price: "$2.00"
  },
  {
      partName: "GATERON CLEAR LINEAR SWITCHES",
      type: "Linear",
      pin: "3/5",
      stem: "MX",
      count: "10",
      store: "KBDFans",
      price: "$2.00"
  },
];

export default function PartPicker (props: IPartPickerProps) {
  return (
    <div>
        <TableTitle
            title={"Part Picker"}
            subtitle={"So many options."}
        />
        <TableToolbar />
        <Table data={mockKeyboardData} headers={['Name', 'Type', 'PIN', 'Stem', 'Count', 'Store', 'Price']} addButton={true} />
    </div>
  );
}
