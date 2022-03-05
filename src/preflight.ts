declare global {
    interface Window {}
}

function setCookie(c_name: string, value: string, exdays: number) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value =
        escape(value) +
        (exdays == null ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

if ((window.location.pathname === "/en")) {
    setCookie("lang", "en", 30);
} else if (window.location.pathname === "/ja") {
    setCookie("lang", "ja", 30);
}

const updateViewHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const preflight = () => {
    window.addEventListener("resize", () => {
        updateViewHeight();
    });

    updateViewHeight();
};

export default preflight;
