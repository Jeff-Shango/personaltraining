import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

const Sessions = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try{
        const res = await axios.get("http://localhost:7500/list")
        setEvents(res.data);
        console.log(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchEvents()
  }, []);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />

      <div className="container">
        <h1>Events</h1>
        <h3>List of events</h3>
        <p></p>
      </div>
    </div>
  )
}

export default Sessions