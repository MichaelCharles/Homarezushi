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
                padding: "0px 1em"
            }}
        >
            <div> ≡ 誉寿司 </div>
            <header>option 1, 2, and 3</header>
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
                    maxWidth: "60vw",
                    paddingBottom: "60px",
                }}
            />
        </div>
    </ParallaxSlide>
);

export default Hero;
