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
    <Resizable direction={'vertical'}>
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Resizable direction={'horizontal'}>
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className={'progress-wrapper'}>
          {!bundle || bundle.loading ? (
            <div className={'progress-cover'}>
              <progress className={'progress is-small is-primary'} max='100'>
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} err={bundle.error} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
