import Animasi from "../assets/vidio/animsi logo.mp4";

const Gordeng = () => {
    function toggleGordeng(isInit = false) {
        if (isInit) {
            setTimeout(() => {
                document.querySelector("body").style = "overflow-y: auto;";
            }, 3700);
        }
    }
    toggleGordeng(true);
    return (
        <div id="videoContainer" className="loader w-[100vw] h-[100vh] bg-[#b3ed72] flex justify-center items-center fixed top-0 left-0 z-[100] max-w-[100vw] overflow-x-hidden">
            <video id="introVideo" width="1000" height="850" autoPlay muted>
                <source src={Animasi} type="video/mp4" />
            </video>
        </div>
    );
};

export default Gordeng;
