import { useState, useRef } from 'react';
import { useActions } from '../../hooks/useActions';

const TextEditor: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const { updateCell } = useActions();

  return <div className='text-editor card'></div>;
};
