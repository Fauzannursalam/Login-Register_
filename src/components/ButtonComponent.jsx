import PropTypes from 'prop-types'
import Button from "react-bootstrap/Button"


const ButtonComponent = ({onClick, variant, buttonName}) => {
  return (
    <>
    <Button variant={variant} onClick={onClick}>
        {buttonName}
    </Button>
    </>
  )
}

ButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired
}

export default ButtonComponent