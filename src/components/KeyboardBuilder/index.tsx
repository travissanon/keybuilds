import * as React from "react";
import TableTitle from "./TableTitle";

export interface IKeyboardBuilderProps {}

export default function KeyboardBuilder(props: IKeyboardBuilderProps) {
  return (
    <div className="keyboardBuilder">
      <TableTitle
        title={"Keyboard Builder"}
        subtitle={"Build your ideal mechanical keyboard."}
      />
      <div className="keyboardBuilder__toolbar"></div>
      <div className="keyboardBuilder__table">
        <div className="keyboardBuilder__tableHead">
          <div className="keyboardBuilder__tableRow">
            <div className="keyboardBuilder__tableCell"></div>
          </div>
        </div>
        <div className="keyboardBuilder__tableBody">
          <div className="keyboardBuilder__tableRow">
            <div className="keyboardBuilder__tableCell"></div>
          </div>
        </div>
      </div>
      <div className="keyBuilder__bottomBar"></div>
    </div>
  );
}
