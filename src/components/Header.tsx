import './Header.css';

interface HeaderProps {
  title: string;
  lead: string;
  source_header: string;
}

export function Header({ title,  source_header }: HeaderProps) {
  return (
    <header className="header-container">
            <img src= { source_header } alt={title} className="our-header" />
    </header>
  );
}
