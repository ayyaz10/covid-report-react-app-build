import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <>
      <Nav
        className='justify-content-center py-3 bg-dark text-white'
        activeKey='/home'
      >
        <Nav.Item className='me-3'>
          <Link to='/'>Home</Link>
        </Nav.Item>
        <Nav.Item className='me-3'>
          <Link to='/report'>Reports</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/covid-cases'>Covid Cases</Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navigation;
