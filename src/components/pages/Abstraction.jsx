import Text from '../partials/Text';
import Button from '../partials/Button';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Abstraction() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible(false);

    // Navigate to next page
    navigate('/');
  };

  if (!isVisible) {
    return <>Done</>;
  }

  return (
    <section style={{ position: 'relative' }}>
      <Text
        msg={'Hmmm....\nCoba jalan pelan-pelan aja deh 😖'}
      />
      <Button
        content='Jalan &nbsp;&nbsp; 🚶🏼‍♂️'
        onClick={handleClick}
      />
    </section>
  );
}
