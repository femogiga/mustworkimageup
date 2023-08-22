import { useRef } from 'react';

const SuccessCard = ({ src, newPhoto, onChange, onClick }) => {
  const style = {
    color: 'var(--clr-gray)',
  };
  return (
    <div className='success-card flex flex-col'>
      <div className='flex flex-col align-cent gap-1 flow-2 '>
        <div>
          <span className='material-symbols-outlined'>check_circle</span>
        </div>
        <p className='bold' style={style}>
          Uploaded successfully
        </p>
      </div>
      <div className='img-cont flow-2'>
        <img src={src} />
      </div>
      <div className='copy-cont'>
        <input
          type='text'
          value={`http://localhost:9000/${newPhoto}`}
          onChange={onChange}
          readOnly
          disabled
        />
        <button onClick={onClick}>Copy Link</button>
      </div>
    </div>
  );
};

export default SuccessCard;
