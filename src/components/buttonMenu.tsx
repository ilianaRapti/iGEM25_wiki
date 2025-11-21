
import "./buttonMenu.css"

export function ButtonMenu(img: string[], direction: string, bg: string) {
    var classes = "custom-button-menu display-flex flex-direction-" + direction;

    function handleClick() {

    }

    return (
        <>
            <div className={classes} style={{backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                {img.map((scr, index) => (
                    <button onClick={handleClick}>
                        <img key={index} src={scr} alt="" />
                    </button>
                ))}
            </div>  
        </>
    );
}