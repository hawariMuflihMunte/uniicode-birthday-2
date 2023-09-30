import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Text from '../partials/Text';
import Button from '../partials/Button';

import aviImg from '../images/Avi.jpg';

export default function SurpriseMain() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  function handleClick() {
    setIsVisible(false);

    // Navigate to next page
    navigate('/closing');
  }

  if (!isVisible) {
    return <>Done</>;
  }

  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: 'url(https://img.freepik.com/premium-vector/birthday-typography-poster-colorful-pennant-flags-3d-text-happy-birthday-party-card-design-celebration-vector-background-surprise-anniversary-banner-with-colored-pennant-hanging-illustration_53562-14959.jpg)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
    >
      <section
        style={{
          position: 'absolute',
          width: '440px',
          height: '150px',
          transform: 'translateX(-50%)',
          left: '50%',
          top: '20%'
        }}
      >
        <img
          src={aviImg}
          alt="Aviciena Hasibuan"
          style={{
            borderRadius: '6px'
          }}
        />
        <Text
          msg={'🎊✨ Buat Abang Avi member UNIICODE ✨🎊'}
        />
        <Button
          content='😇'
          onClick={handleClick}
        />
      </section>
    </section>
  );
}
