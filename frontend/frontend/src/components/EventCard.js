import './EventCard.css'
import dayjs from 'dayjs';

export const EventCard = ({ event, onDelete, onEdit }) => (
  <div className="card">
    {/* Status badge in top-right */}
    <div className="event-status">{event.status}</div>

    {event.imageUrl && (
      <img src={event.imageUrl} alt={event.title} className="event-image" />
    )}
    <div className="card-content">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Start:</strong> {dayjs(event.startTime).format('MMMM D, YYYY [at] h:mm A')}</p>
      <p><strong>End:</strong> {dayjs(event.endTime).format('MMMM D, YYYY [at] h:mm A')}</p>
      <p><em>{event.location}</em></p>
      <button className="edit-btn" onClick={() => onEdit(event)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(event.id)}>Delete</button>
    </div>
  </div>
);