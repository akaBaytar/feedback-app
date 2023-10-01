import PropTypes from 'prop-types';

function Header({ text, backgroundColor, textColor }) {
  const headerStyles = {
    backgroundColor: backgroundColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
  textColor: '#ff6a95',
  backgroundColor: 'rgba(0,0,0,0.3)',
};

Header.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Header;
