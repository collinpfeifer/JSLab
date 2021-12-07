import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';

const CellList: React.FC = () => {
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  return (
    <div className='cell-list'>

    </div>
  );
};

export default CellList;
