import Text from '../partials/Text';
import Button from '../partials/Button';
import { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Abstraction() {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible(false);

    // Navigate to next page
    navigate('/abstraction');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section
      ref={ref}
      style={{ position: 'relative' }}
    >
      <Text
        msg={'Hmmm....\nCoba jalan pelan-pelan aja deh 😖'}
      />
      <Button
        content='Jalan &nbsp;&nbsp; 🚶🏼‍♂️'
        parentRef={ref}
        onClick={handleClick}
      />
    </section>
  );
}
