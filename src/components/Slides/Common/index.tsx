import styled from "styled-components";
import "./slide.css";

const windowHeight =
    window.outerHeight > window.innerWidth
        ? window.outerHeight
        : window.innerWidth;

const ParallaxSlideBase =
    window.navigator.userAgent.match(/iPad/i) ||
    window.navigator.userAgent.match(/iPhone/i)
        ? styled.div`
              background-image: url(${({ url }: { url: string }) => url});
              background-size: ${windowHeight * (16 / 9) + 100}px
                  ${windowHeight + 100}px;
              background-position: center;
          `
        : styled.div`
              background: url(${({ url }: { url: string }) => url}) no-repeat
                  center center fixed;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
          `;

const GradientSlideBase = styled.div`
    background: ${({ colors }: { colors: string[] }) => colors[0]};
    background: linear-gradient(
        135deg
            ${({ colors }: { colors: string[] }) =>
                colors.map((a: string) => `, ${a}`).join("")}
    );
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        ${({ colors }: { colors: string[] }) =>
            colors.map((a: string) => `, color-stop(${a})`).join("")}
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
        top,
        ${({ colors }: { colors: string[] }) =>
            colors.map((a: string) => `, ${a}`).join("")}
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
        top,
        ${({ colors }: { colors: string[] }) =>
            colors.map((a: string) => `, ${a}`).join("")}
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
        top,
        ${({ colors }: { colors: string[] }) =>
            colors.map((a: string) => `, ${a}`).join("")}
    ); /* IE10+ */
    background: linear-gradient(
        to bottom,
        ${({ colors }: { colors: string[] }) =>
            colors.map((a: string) => `, ${a}`).join("")}
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${({
        colors,
    }: {
        colors: string[];
    }) => colors[0]}', endColorstr='${({ colors }: { colors: string[] }) =>
        colors[1]}',GradientType=0 ); /* IE6-9 */
`;

const RepeatingImageSlideBase = styled.div`
    ${({ image, baseColor }: { image: string; baseColor: string }) => {
        return `
        background-image: url(${image});
        background-color: ${baseColor};
        `;
    }}
`;

const GradientSlide = ({
    colors,
    isFlex = false,
    customStyles = {},
    children,
    id,
}: {
    colors: string[];
    isFlex?: boolean;
    customStyles?: any;
    children?: any;
    id?: string;
}) => {
    const flexStyles = isFlex
        ? { display: "flex", alignItems: "center", justifyContent: "center" }
        : {};

    const opt: { id?: string } = {};
    if (id) {
        opt.id = id;
    }
    return (
        <GradientSlideBase
            colors={colors}
            className="slide"
            style={{ ...flexStyles, ...customStyles }}
            {...opt}
        >
            {children}
        </GradientSlideBase>
    );
};

const RepeatingImageSlide = ({
    image,
    baseColor = "#212121",
    isFlex = false,
    customStyles = {},
    children,
    id,
}: {
    image: string;
    baseColor?: string;
    isFlex?: boolean;
    customStyles?: any;
    children?: any;
    id?: string;
}) => {
    const flexStyles = isFlex
        ? { display: "flex", alignItems: "center", justifyContent: "center" }
        : {};

    const opt: { id?: string } = {};
    if (id) {
        opt.id = id;
    }
    return (
        <RepeatingImageSlideBase
            image={image}
            baseColor={baseColor}
            className="slide"
            style={{
                ...flexStyles,
                ...customStyles,
            }}
            {...opt}
        >
            {children}
        </RepeatingImageSlideBase>
    );
};

const ParallaxSlide = ({
    image,
    isFlex = false,
    customStyles = {},
    children,
    id,
}: {
    image: string;
    isFlex?: boolean;
    customStyles?: any;
    children?: any;
    id?: string;
}) => {
    const flexStyles = isFlex
        ? { display: "flex", alignItems: "center", justifyContent: "center" }
        : {};
    const bgStyles = {};
    const opt: { id?: string } = {};
    if (id) {
        opt.id = id;
    }
    return (
        <ParallaxSlideBase
            url={image}
            className="slide"
            style={{ ...flexStyles, ...bgStyles, ...customStyles }}
            {...opt}
        >
            {children}
        </ParallaxSlideBase>
    );
};

const SlidesCommon = {
    GradientSlide,
    ParallaxSlide,
    RepeatingImageSlide,
};
export default SlidesCommon;
