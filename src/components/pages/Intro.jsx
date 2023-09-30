import Text from '../partials/Text';
import Button from '../partials/Button';
import { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible(false);

    // Navigate to next page
    navigate('/abstraction');
  };

  if (!isVisible) {
    return <>Done</>;
  }

  return (
    <section style={{ position: 'relative' }}>
      <Text
        msg={'Lho, kok gelap disini ya ... ?'}
      />
      <Button
        content='Lanjut &nbsp;&nbsp; ▶'
        onClick={handleClick}
      />
    </section>
  );
}
