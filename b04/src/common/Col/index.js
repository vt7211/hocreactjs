import cls from 'classnames';

export default function Col({
  xs,
  sm,
  md,
  lg,
  children
}) {
  const classes = cls({
    ['tcl-col-' + xs]: xs >= 1 && xs <= 12,
    ['tcl-col-sm-' + sm]: sm >= 1 && sm <= 12,
    ['tcl-col-md-' + md]: md >= 1 && md <= 12,
    ['tcl-col-lg-' + lg]: lg >= 1 && lg <= 12,
  })

  return (
    <div className={classes}>{children}</div>
  )
}