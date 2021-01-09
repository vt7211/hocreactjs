import cls from 'classnames';
import './title.css';
import Button from '../Button'

export default function Title({
  spacing,
  main,
  children,
  link,
  className,
  more = 'View More'
}) {
  const classes = className+' '+cls({
    spacing: spacing,
    ["main-title"]: main
  })

  return (
    <div className={classes}>
      <h2>{children}</h2>
      { link && <Button htmlType="a" link={link}>{more}</Button> }
    </div>
  )
}