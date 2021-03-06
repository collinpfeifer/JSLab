import { useEffect, useRef } from 'react';
import './Preview.css';

interface PreviewProps {
  code: string;
  err: string;
}

const html = `
        <html>
            <head>
                <style> html { background-color: white }</style>
            </head>
            <body>
                <div id='root'>
                    <script>
                        const handleError = (err) => {
                            const root = document.querySelector('#root');
                            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
                            console.error(err);
                        };
                        window.addEventListener('error', (err) => {
                            e.preventDefault();
                            handleError(err.error);
                        })
                        window.addEventListener('message', (err) => {
                            try {
                                eval(err.data);
                           } catch (err) {
                                handleError(err)
                            }
                        }, false)
                    </script>
                </div>
            </body>
        </html>
    `;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className='preview-wrapper'>
      <iframe
        title='preview'
        ref={iframe}
        sandbox='allow-scripts'
        srcDoc={html}
      />
      {err && <div className='preview-error'>{err}</div>}
    </div>
  );
};

export default Preview;
