import * as React from "react";
import TableTitle from "./TableTitle.tsx";
import TableToolbar from "./TableToolbar.tsx";
import Table from "./Table.tsx";
import TableBottomBar from "./TableBottomBar.tsx";

export interface IKeyboardBuilderProps {}

export default function KeyboardBuilder(props: IKeyboardBuilderProps) {
  return (
    <div className="keyboardBuilder">
      <TableTitle
        title={"Keyboard Builder"}
        subtitle={"Build your ideal mechanical keyboard."}
      />
      <TableToolbar />
      <Table />
      <TableBottomBar />
    </div>
  );
}
