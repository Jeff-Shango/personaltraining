import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { Link } from "react-router-dom"
import "./sessions.css"

const Sessions = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:7500/list');
        setEvents(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <FullCalendar 
        className="calendarShit"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
              {/* add button */}
        <Link id='addText' to="/add" target='_self'>
          <button id='addButton'>
            Add New Event
          </button>
        </Link>
        <ul id='eventContainer'>
          <h1 id='eventTitle'>Events</h1>
          {events.map((event) => (
            <li key={event.id} className="eventID">
              <div>
                <h1>{event.Name}</h1>
                <p>{event.Event}</p>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>Type: {event.Type}</p>
                <p>Notes: {event.notes}</p>
              </div>
            </li>
          ))}
        </ul>

        <div id="explainTextContainer">
          <p id="explainText">
            Scheduling your appointments in advance secures your spot and ensures that you have the time and resources you need. You can also cancel your appointments if needed. Make the most of your time by scheduling with us today!
            <br/>
            <a href="/termscondition">Terms and Condition</a>
          </p>
        </div>

    </div>
  );
};

export default Sessions;
