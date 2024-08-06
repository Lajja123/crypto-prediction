import { FC } from 'react';

interface FrameImageProps {
  text: string;
}

const FrameImage: FC<FrameImageProps> = ({ text }) => {
  return (
    <div
      style={{
        display: 'flex',
        fontSize: 60,
        color: 'white',
        background: 'black',
        width: '100%',
        height: '100%',
        padding: '50px 200px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {text}
    </div>
  );
};

export default FrameImage;