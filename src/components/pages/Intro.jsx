import Text from '../partials/Text';
import Button from '../partials/Button';
import { useState, useRef } from 'react';

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef();

  const handleClick = () => {
    setIsVisible(false);
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
        msg={'Check Check Check'}
      />
      <Button
        content='Click'
        parentRef={ref}
        onClick={handleClick}
      />
    </section>
  );
}
