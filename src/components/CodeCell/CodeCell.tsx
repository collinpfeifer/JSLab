import CodeEditor from '../CodeEditor/CodeEditor'
import { useEffect } from 'react';
import Preview from '../Preview/Preview'
import Resizable from '../Resizable/Resizable'
import { Cell } from '../../state'
import { useActions } from '../../hooks/useActions';
import './CodeCell.css';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {

  return (
    <Resizable direction='vertical'>
    </Resizable>
  );
};

export default CodeCell;
