

export default function Container(props) {
  return (
    <div className={props.fluid ? "container-fluid" : 'container'}>{props.children}</div>
  )
}