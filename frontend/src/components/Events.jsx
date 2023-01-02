import { useState, useEffect } from "react";

export const Events = () => {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    try {
      const response = await fetch("http://localhost:3000/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};
