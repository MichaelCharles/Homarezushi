import "./slide.css";

const GradientSlide = ({
    colors,
    isFlex = false,
    customStyles = {},
    children,
}: {
    colors: string[];
    isFlex?: boolean;
    customStyles?: any;
    children?: any;
}) => {
    const bgStyles = {
        background: `linear-gradient(135deg${colors
            .map((a) => `, ${a}`)
            .join("")})`,
    };

    const flexStyles = isFlex
        ? { display: "flex", alignItems: "center", justifyContent: "center" }
        : {};

    return (
        <div
            className="slide"
            style={{ ...flexStyles, ...bgStyles, ...customStyles }}
        >
            {children}
        </div>
    );
};

const ParallaxSlide = ({
    image,
    isFlex = false,
    customStyles = {},
    children,
}: {
    image: string;
    isFlex?: boolean;
    customStyles?: any;
    children?: any;
}) => {
    const flexStyles = isFlex
        ? { display: "flex", alignItems: "center", justifyContent: "center" }
        : {};
    const bgStyles = {
        backgroundImage: `url("${image}")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };
    return (
        <div
            className="slide"
            style={{ ...flexStyles, ...bgStyles, ...customStyles }}
        >
            {children}
        </div>
    );
};

const SlidesCommon = {
    GradientSlide,
    ParallaxSlide,
};
export default SlidesCommon;
