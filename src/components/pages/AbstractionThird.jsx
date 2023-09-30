import Text from '../partials/Text';
import Button from '../partials/Button';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function AbstractionThird() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible(false);

    // Navigate to next page
    navigate('/abstraction-second');
  };

  if (!isVisible) {
    return <>Done</>;
  }

  return (
    <section style={{ position: 'relative' }}>
      <Text
        msg={'Hidupin lampu lah ya biar terang 💡'}
      />
      <Button
        content='Hidupkan &nbsp;&nbsp; 💡'
        onClick={handleClick}
      />
    </section>
  );
}
