import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';

function AboutIcon() {
  return (
    <Link
      to={{
        pathname: '/about',
        search: '?LinkedIn=',
        hash: 'akaBaytar',
      }}
    >
      <div className='about-link'>
        <span>
          <FaQuestion size={30} />
        </span>
      </div>
    </Link>
  );
}

export default AboutIcon;
