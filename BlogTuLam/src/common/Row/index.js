import cls from 'classnames';

export default function Row({ 
  children,
  className,
  gutters = true
}) {

  const classes = cls('tcl-row', className, {
    // 'tcl-no-gutters': gutters === false,
    'tcl-no-gutters': !gutters,
  })

  return (
    <div className={classes}>{children}</div>
  )
}