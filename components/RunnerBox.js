export default function RunnerBox({ text }) {
  return (
    <div className='runner-box'>
      <h3>运行结果</h3>
      <div id='console' className='output'>
        <code>{text}</code>
      </div>
      <style jsx>{`
        .runner-box {
          box-sizing: border-box;
          padding: 16px;
          width: 100vw;
          height: 100vh;
          border-left: 1px dashed #efefef;
          display: flex;
          flex-direction: column;
        }
        .output {
          flex: 1;
          box-sizing: border-box;
          border: 1px solid #ddd;
          padding: 12px;
          border-radius: 8px;
          box-sizing: border-box;
          background: #f9f9fb;
          overflow-y: auto;
        }
        code {
          white-space: pre;
          vertical-align: middle;
          word-break: break-word;
        }
      `}</style>
    </div>
  );
}
