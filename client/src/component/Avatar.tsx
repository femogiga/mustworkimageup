// import { Props } from '../types/allTypes';

const Avatar = ({ src ,onDragEnter,onDragLeave,onDrop,onDragOver}) => {
  return (
    <div className='avatar' onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDragOver={onDragOver } onDrop={onDrop} >
      <div className='inner-card' id = 'inner-card'>
        <div>
          <img src={src} />
        </div>
        <p style={{ color: 'var(--clr-light-gray)', fontSize: '.75rem' }}>Drag & Drop your image here</p>
      </div>
    </div>
  );
};

export default Avatar;
