import PropTypes from 'prop-types';
import { Title, SectionBox } from './Section.styled';
const Section = ({ title, children }) => (
  <SectionBox>
    <Title>{title}</Title>
    {children}
  </SectionBox>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
