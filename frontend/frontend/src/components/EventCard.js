export const EventCard = ({ event, onDelete, onEdit }) => (
  <div className="card">
    {event.imageUrl && (
      <img src={event.imageUrl} alt={event.title} className="event-image" />
    )}
    <div className="card-content">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Start:</strong> {event.startTime}</p>
      <p><strong>End:</strong> {event.endTime}</p>
      <p><em>{event.location}</em></p>
      <button className="edit-btn" onClick={() => onEdit(event)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(event.id)}>Delete</button>
    </div>
  </div>
);