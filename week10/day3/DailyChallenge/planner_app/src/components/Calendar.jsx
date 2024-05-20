import { useState } from 'react';

const Calendar = ({ onSelectDay }) => {
    const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);
  
    const handleChange = (e) => {
      const day = e.target.value;
      setSelectedDay(day);
      onSelectDay(day);
    };
  
    return (
      <input type="date" value={selectedDay} onChange={handleChange} />
    );
  };
  
  export default Calendar;
