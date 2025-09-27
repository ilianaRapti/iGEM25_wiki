import { useState } from "react";
import "./education.css";

// imports for education events
import { SfhmmyEdu } from "./events-human/sfhmmy-edu";
import { PrisonEdu } from "./events-human/prison-edu";
import { JunhighEdu } from "./events-human/junhigh-edu";




export function Education() {
  // add all education events here
  const options = [SfhmmyEdu,PrisonEdu,JunhighEdu];

  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedEvent(id);
  };

  const event = options.find((opt) => opt.id === selectedEvent);

  return (
    <div className="education-list">
      {!selectedEvent && <h1 className="education-title">Our Educational Activities</h1>}

      {!selectedEvent && (
        <>
          <div className="education-options">
            {options.map((opt) => (
              <div
                key={opt.id}
                className="education-option-card"
                onClick={() => handleSelect(opt.id)}
              >
                <img
                  src={opt.thumbnail}
                  alt={opt.title}
                  className="education-option-image"
                />
                <p className="education-option-title">{opt.title}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedEvent && event && (
        <div
          className="education-details-full"
          style={{ backgroundImage: `url(${event.background})` }}
        >
          <div className="education-details-overlay">
            <h2 className="education-details-title">{event.title}</h2>

            <div className="education-details-text">{event.description}</div>

            <button
              className="back-to-education"
              onClick={() => setSelectedEvent(null)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
