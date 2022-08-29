import PropTypes from 'prop-types'
import Button from './Button'
import{useLocation} from 'react-router-dom'

const Header = ({title,show,showText}) => {
  const location=useLocation()
  return (
    <header className='header'>
      <h1>{title}</h1>
{location.pathname==='/' && <Button color='white' backgroundColor={showText?"Red" : "Green"}  text={showText?"Close" : "ADD"} show={show} />}

    </header>
  )
}

Header.defaultProps={
    title:'Task Tracker'
}

Header.propTypes={
    title:PropTypes.string.isRequired
}


export default Header
