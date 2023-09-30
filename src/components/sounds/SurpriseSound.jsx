import { useState, useEffect } from 'react';
import { Howl } from 'howler';

export default function SurpriseSound() {
  const [sound, setSound] = useState();

  useEffect(() => {
    const sound = new Howl({
      /**
       * Sound Effect by Sandro Lima
       * https://pixabay.com/users/phoenix_connection_brazil-6017471/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=99300
       */
      src: ['./surprise-sound-effect-99300.mp3']
    });

    setSound(sound);

    return () => {
      sound.unload();
    };
  }, []);

  const playSound = () => {
    sound.play();
  };

  return null;
}
