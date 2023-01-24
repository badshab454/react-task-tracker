import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () => {
    console.log('Click');
  }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <h2>Hello</h2>
        <Button color='green' text='ADD' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header