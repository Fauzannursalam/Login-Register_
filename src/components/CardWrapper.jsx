import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";

const CardWrapper = ({ avatar, first_name, last_name, onClick, email }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>
            {first_name} {last_name}
          </Card.Title>
          <Card.Text>{email}</Card.Text>
          <ButtonComponent
            variant="primary"
            buttonName="Profile"
            onClick={onClick}
          />
        </Card.Body>
      </Card>
    </>
  );
};

CardWrapper.propTypes = {
  avatar: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default CardWrapper;
