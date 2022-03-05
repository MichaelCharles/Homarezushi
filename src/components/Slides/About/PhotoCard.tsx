import { Fade, Slide } from "react-awesome-reveal";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: ${({ isRight = false }: { isRight: boolean }) =>
        isRight ? "row-reverse" : "row"};
    margin: 2em 0em;
    background: #f2f2f2f2;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15),
        0px 6px 12px 0px rgba(0, 0, 0, 0.15);
    @media (max-width: 512px) {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    ${({ isRight = false }: { isRight: boolean }) =>
        isRight ? `padding-left: 1em;` : `padding-right: 1em;`}
    @media (max-width: 512px) {
        padding: 0px !important;
    }
`;

const CardImage = styled.img`
    width: 220px;
    height: 220px;
    object-fit: cover;
    display: block;
    @media (max-width: 512px) {
        height: auto;
        width: 100%;
    }
`;

const CardContent = styled.p`
    ${({ isRight = false }: { isRight: boolean }) =>
        isRight ? `padding-left: 1em;` : `padding-right: 1em;`}
    @media (max-width: 512px) {
        margin: 1em;
        padding: 0px !important;
    }
`;

const CardHeader = styled.h2`
    font-size: 18px;
    font-weight: bold;
    ${({ isRight = false }: { isRight: boolean }) =>
        isRight ? `padding-left: 1em;` : `padding-right: 1em;`}
    @media (max-width: 512px) {
        margin: 1em;
        padding: 0px !important;
    }
`;

const PhotoCard = ({
    title,
    content,
    isRight = false,
    image,
}: {
    isRight?: boolean;
    title: string;
    content: string;
    image: string;
}) => (
    <Fade triggerOnce>
        <Slide direction={isRight ? "left" : "right"} triggerOnce>
            <CardContainer isRight={isRight}>
                <ImageContainer isRight={isRight}>
                    <CardImage src={image} alt="alt" />
                </ImageContainer>
                <div>
                    <CardHeader isRight={isRight}>{title}</CardHeader>
                    <CardContent isRight={isRight}>{content}</CardContent>
                </div>
            </CardContainer>
        </Slide>
    </Fade>
);

export default PhotoCard;
