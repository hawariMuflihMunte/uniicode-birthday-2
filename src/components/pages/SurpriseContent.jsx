import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Text from '../partials/Text';
import Button from '../partials/Button';

export default function SurpriseContent() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  function handleClick() {
    setIsVisible(false);

    // Navigate to next page
    navigate('/surprise-main');
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
          width: '300px',
          height: '150px',
          transform: 'translateX(-50%)',
          left: '50%',
          bottom: '0px'
        }}
      >
        <Text
          msg={'🎊✨ Selamat Ulang Tahun ✨🎊'}
        />
        <Button
          content='Lanjut &nbsp;&nbsp; ▶'
          onClick={handleClick}
        />
      </section>
    </section>
  );
}
