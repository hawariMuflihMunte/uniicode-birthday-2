import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Text from '../partials/Text';
import Button from '../partials/Button';

export default function Surprise() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  function handleClick() {
    setIsVisible(false);

    // Navigate to next page
    navigate('/surprise-content');
  }

  if (!isVisible) {
    return <>Done</>;
  }

  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-zoom-effect-background_23-2149735597.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
    >
      <section
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          transform: 'translateX(50%) translateY(60%)'
        }}
      >
        <Text
          msg={'Waduh kaget  😱'}
        />
        <Button
          content='Lanjut &nbsp;&nbsp; ▶'
          onClick={handleClick}
        />
      </section>
    </section>
  );
}
