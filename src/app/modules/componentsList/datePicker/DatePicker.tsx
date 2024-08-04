import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import CopyCard from "../copyCard/CopyCard";

const DatePicker = () => {
  const [dateState, setDateState] = useState<any>({
    date1: new Date(),
  });
  const paragraphContent = `
  import React, { useState } from "react";
import Flatpickr from "react-flatpickr";

const DatePicker = () => {
  const [dateState, setDateState] = useState<any>({
    date1: new Date(),
  });

  return (
    <div className="px-10 ">
      <div>
        <Flatpickr
          value={dateState.date1}
          onChange={(selectedDates: Date[]) => {
            const [date1] = selectedDates;
            setDateState({ ...dateState, date1 });
          }}
          className="form-control"
          placeholder="Pick date"
        />
      </div>
    </div>
  );
};

export default DatePicker;

  `;

  return (
    <div className="px-10 ">
      <div>
        <Flatpickr
          value={dateState.date1}
          onChange={(selectedDates: Date[]) => {
            const [date1] = selectedDates;
            setDateState({ ...dateState, date1 });
          }}
          className="form-control"
          placeholder="Pick date"
        />
      </div>
      <div className="mt-5">
        <CopyCard content={paragraphContent} />
      </div>
    </div>
  );
};

export default DatePicker;
