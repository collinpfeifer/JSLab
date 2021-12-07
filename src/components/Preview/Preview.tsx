import { useRef } from 'react';
import './Preview.css';

interface PreviewProps {
  code: string;
  err: string;
}

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();
  return (
    <div className='preview-wrapper'>
      <iframe/>
    </div>
  );
};
export default Preview;
