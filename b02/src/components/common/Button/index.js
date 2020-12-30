import './button.css';
import { useEffect, useState } from 'react';
import classnames from 'classnames';

Button.defaultProps = {
  class: 'btn-default',
  size: 'normal'
}

export default function Button({
  text,
  type,
  size,
  spin,
  link
}) {
  const svg = <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <circle cx={50} cy={50} fill="none" stroke="currentColor" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(120.057 50 50)">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
  </circle>
</svg>;
  const [localType, setlocalType] = useState('btn-default');
//   const [valueText, setValueText] = useState('');

  useEffect(() => {
    if(type) {
        setlocalType(type);
    }
  }, [type])
  if(link){
    return(
      <a href="#" 
      href={link}
      className={classnames('btn', {
          'btn-default': localType === 'btn-default',
          'btn-primary': localType === 'primary',
          'btn-category': localType === 'category',
          'btn-size-large': size === 'large',
        })}
      >{ spin && svg } {text}</a>
    )
  }
  return (
    <button href="#" 
    className={classnames('btn', {
        'btn-default': localType === 'btn-default',
        'btn-primary': localType === 'primary',
        'btn-category': localType === 'category',
        'btn-size-large': size === 'large',
      })}
    >{ spin && svg } {text}</button>
  )
}



// Props down
// Function up
// Component con -> KHÔNG ĐƯỢC QUYỀN thay đổi props của thằng cha truyền vào