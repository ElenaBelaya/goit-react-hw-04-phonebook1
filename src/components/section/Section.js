import { Title } from "./Section.styled";
const Section = ( {title, children} ) => (
    <div>
        <Title>{title}</Title>
        {children}
    </div>
)

export default Section;