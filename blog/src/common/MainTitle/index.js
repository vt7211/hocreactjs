import './MainTitle.css';
import cls from 'classnames';
import Button from '../Button';

MainTitle.defaultProps = {
    isShowBtn: false,
    btnProps: {}
}

export default function MainTitle({ 
    children,
    isShowBtn,
    btnProps: {
        btnText,
        ...restBtnProps
    }
}) {
    return (
        <div className={cls('main-title spacing', {
            'd-flex tcl-jc-between tcl-ais-center': isShowBtn
        })}>
            <h2>{ children }</h2>
            { isShowBtn && <Button {...restBtnProps} >{btnText}</Button> }
        </div>
    )
}
