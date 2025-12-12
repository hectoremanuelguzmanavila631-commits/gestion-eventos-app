// Ejemplo conceptual en React
// EventCard.js

import React from 'react';

// Componente para mostrar la información del evento
const EventCard = ({ event }) => {
  // Copilot podría haber ayudado a generar la estructura JSX basada en un comentario:
  // "Crear un componente EventCard que muestre el título, la fecha y el lugar del evento
  // usando un div con la clase 'event-card'"
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>📅 {event.date}</p>
      <p>📍 {event.location}</p>
      {/* ... más detalles */}
    </div>
  );
};

export default EventCard;

// Ejemplo de vinculación de datos bidireccional (si EventCard fuera también un formulario)
// Si fuera un formulario de edición:
// Copilot podría haber sugerido automáticamente el hook useState y el manejador de cambios:
// const [title, setTitle] = useState(event.title);
// const handleTitleChange = (e) => setTitle(e.target.value);
