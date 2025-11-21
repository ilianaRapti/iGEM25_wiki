import { useState, ReactNode } from "react";
import "./Accordion.css";

interface AccordionPanelData {
  title: string;
  content: ReactNode;
  id?: string;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
}

interface AccordionProps {
  panels: AccordionPanelData[];
  className?: string;
  id?: string;
}

export function Accordion({ panels, className, id }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id={id} className={`accordion ${className || ""}`}>
      {panels.map((panel, index) => (
        <div key={index} id={panel.id} className={`accordion-item ${panel.className || ""}`}>
          <button
            className={`accordion-header ${openIndex === index ? "open" : ""} ${panel.buttonClassName || ""}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{panel.title}</span>
            <span className={`accordion-arrow ${openIndex === index ? "rotated" : ""}`}>▶</span>
          </button>
          {openIndex === index && <div className={`accordion-content ${panel.contentClassName || ""}`}>{panel.content}</div>}
        </div>
      ))}
    </div>
  );
}
