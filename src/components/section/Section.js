import { Title, SectionBox } from "./Section.styled";
const Section = ( {title, children} ) => (
    <SectionBox>
        <Title>{title}</Title>
        {children}
    </SectionBox>
)

export default Section;