import SlidesCommon from "../Common";
import Gallery from "react-grid-gallery";
import { useEffect, useState } from "react";
const { GradientSlide } = SlidesCommon;

const images = [
    {
        src: "/images/gallery/anago-bowl.jpg",
        thumbnail: "/images/gallery/anago-bowl.jpg",
        thumbnailWidth: 400,
        thumbnailHeight: 300,
    },
    {
        src: "/images/gallery/big-set.jpg",
        thumbnail: "/images/gallery/big-set.jpg",
        thumbnailWidth: 400,
        thumbnailHeight: 300,
    },
    {
        src: "/images/gallery/counter-items-1.jpg",
        thumbnail: "/images/gallery/counter-items-1.jpg",
        thumbnailWidth: 1600,
        thumbnailHeight: 900,
    },
    {
        src: "/images/gallery/counter-items-2.jpg",
        thumbnail: "/images/gallery/counter-items-2.jpg",
        thumbnailWidth: 1600,
        thumbnailHeight: 900,
    },
    {
        src: "/images/gallery/counter-wide.jpg",
        thumbnail: "/images/gallery/counter-wide.jpg",
        thumbnailWidth: 1600,
        thumbnailHeight: 900,
    },
    {
        src: "/images/gallery/magically-delicious.jpg",
        thumbnail: "/images/gallery/magically-delicious.jpg",
        thumbnailWidth: 400,
        thumbnailHeight: 300,
    },
    {
        src: "/images/gallery/pano-shop.jpg",
        thumbnail: "/images/gallery/pano-shop.jpg",
        thumbnailWidth: 1600,
        thumbnailHeight: 900,
    },
    {
        src: "/images/gallery/sushi-plate.jpg",
        thumbnail: "/images/gallery/sushi-plate.jpg",
        thumbnailWidth: 400,
        thumbnailHeight: 300,
    },
    {
        src: "/images/gallery/side-dish.jpg",
        thumbnail: "/images/gallery/side-dish.jpg",
        thumbnailWidth: 400,
        thumbnailHeight: 300,
    },
    {
        src: "/images/gallery/plate.jpeg",
        thumbnail: "/images/gallery/plate.jpeg",
        thumbnailWidth: 400,
        thumbnailHeight: 300,
    },
    {
        src: "/images/gallery/plate2.jpeg",
        thumbnail: "/images/gallery/plate2.jpeg",
        thumbnailWidth: 400,
        thumbnailHeight: 300,
    },
].sort((a, b) => {
    return Math.floor(Math.random() * 2) + 1 === 2 ? -1 : 1;
});

const Photos = () => {
    const [flex, setFlex] = useState(false);

    useEffect(() => {
        setFlex(true);
    }, []);

    return (
        <GradientSlide
            id="photos"
            colors={["#111121", "#21212f"]}
            isFlex={flex}
        >
            <div
                style={{
                    maxWidth: "1024px",
                    margin: "0 auto",
                }}
            >
                <Gallery
                    maxRows={3}
                    images={images}
                    enableImageSelection={false}
                    rowHeight={300}
                />
            </div>
        </GradientSlide>
    );
};
export default Photos;
