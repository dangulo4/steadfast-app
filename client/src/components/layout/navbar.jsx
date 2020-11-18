import { useEffect } from 'react';

export default function Navbar({
  title = 'Steadfast API | Get underway with your contacts',
  icon = 'fas fa-id-card-alt',
}) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className='navbar bg-dark'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
}
