import { FiMenu } from 'react-icons/fi';
import { SlPresent } from 'react-icons/sl';
import { BsStar, BsStarFill } from 'react-icons/bs';

const icons = {
  hamburger: (props) => <FiMenu {...props} />,
  present: <SlPresent />,
  star: <BsStar />,
  filledStar: <BsStarFill />,
};

export default icons;
