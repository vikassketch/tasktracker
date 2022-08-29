

const Button = ({color,backgroundColor,text,show}) => {
  
  return (
    <button onClick={show} className='btn' style={{color:color,backgroundColor:backgroundColor}}>{text}</button>
  )
}

export default Button
