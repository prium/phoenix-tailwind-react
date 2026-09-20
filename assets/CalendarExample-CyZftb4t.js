import{PA as e,PB as r,PC as l,PD as a,R7 as n}from"./index-Czji80o6.js";import{C as t,F as o}from"./FullCalendar-Ba93jNoS.js";const d=`
import FullCalendar from 'components/base/FullCalendar';
import CalendarProvider from 'providers/CalendarProvider';

function Calendar() {
  return (
    <CalendarProvider>
      <FullCalendar
        height={800}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        buttonText={{
          month: 'Month',
          week: 'Week',
          day: 'Day',
          today: 'Today'
        }}
      />
    </CalendarProvider>
  );
};`,c=()=>e.jsxs("div",{children:[e.jsx(r,{title:"Calendar",description:"Phoenix-React uses FullCalendar for calendar component. FullCalendar seamlessly integrates with the React JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar’s standard API.",link:{text:"FullCalendar Documentation",url:"https://fullcalendar.io/"}}),e.jsx(l,{children:e.jsxs(a,{className:"mb-4",children:[e.jsx(a.Header,{title:"Calendar Example",children:e.jsxs("p",{className:"mb-0",children:["Basic example of FullCalendar with default options in Phoenix. You can also pass any"," ",e.jsx("a",{href:"https://fullcalendar.io/docs#toc",target:"_blank",rel:"noopener noreferrer",children:"FullCalendar props"})," ","to the FullCalendar component."," ",e.jsx(n,{to:"/apps/calendar",target:"_blank",children:"See advanced implementation of fullCalendar"})]})}),e.jsx(a.Body,{code:d,scope:{FullCalendar:o,CalendarProvider:t}})]})})]});export{c as default};
