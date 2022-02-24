import SlidesCommon from "../Common";

const { ParallaxSlide } = SlidesCommon;

const Hero = () => (
    <ParallaxSlide
        image={`images/header.jpg`}
        isFlex
        customStyles={{ flexDirection: "column" }}
    >
        <header
            style={{
                minHeight: "60px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                color: "white",
            }}
        >
            <div>{` `}</div>
            <header style={{ padding: "0px 1em", flex: 1, textAlign: "right" }}>
                English
            </header>
        </header>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}
        >
            <img
                alt="誉寿司"
                src="images/logo-white.png"
                style={{
                    width: "60vw",
                    maxWidth: "800px",
                    paddingBottom: "60px",
                }}
            />
        </div>
    </ParallaxSlide>
);

export default Hero;
