import { useState, useEffect } from "react";
import "./AccessibilityToolbar.css";

interface AccessibilityToolbarProps {
  id: string | undefined;
}

function AccessibilityToolbar({ id }: AccessibilityToolbarProps) {
    const content = id ? document.getElementById(id) : null;

    // toggle visibility
    const [isVisible, setIsVisible] = useState(false);
    const toggleAccessibilityToolBar = () => {
        setIsVisible(prev => !prev);
    };

    // toggle presets
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleColorBlindMenu = () => {
        setMenuVisible((prev) => !prev);
    };

    // toggle filters
    const toggleFilter = (filter: string) => {
        if (!content) return;
        if (content.classList.contains(filter)) {
            content.classList.remove(filter);
            return;
        }
        content.classList.remove("invert", "grayscale", "lowsaturation", "highsaturation", "protanopia", "deuteranopia", "tritanopia", "acromatopsia");
        content.classList.add(filter);
    };
    const [activeMode, setActiveMode] = useState<"none" | "adhd" | "dyslexia" | "epilepsy" | "visual">("none");
    useEffect(() => {
        document.body.style.fontSize = "";
        (document.body.style as any).zoom = "";
        content?.classList.remove("grayscale");
        setReadFocusEnabled(false);
        content?.classList.remove("dyslexia-mode");

        if (activeMode === "adhd") {
            setReadFocusEnabled((prev) => !prev);
        } else if (activeMode === "dyslexia") {
            content?.classList.add("dyslexia-mode");
        } else if (activeMode === "epilepsy") {
            content?.classList.add("grayscale");
        } else if (activeMode === "visual") {
            document.body.style.fontSize = "120%";
            (document.body.style  as any).zoom = "120%";
        }
        }, [activeMode]);

    // toggle cursors
    const [whiteCursorActive, setWhiteCursorActive] = useState(false);
    const [blackCursorActive, setBlackCursorActive] = useState(false);
    const toggleWhiteCursor = () => {
        const btn = document.getElementById("whitecursor");
        const buttons = document.querySelectorAll("button");
        const links = document.querySelectorAll("a");

        const newState = !whiteCursorActive;
        setWhiteCursorActive(newState);
        setBlackCursorActive(false);

        if (newState) {
            if (btn) btn.style.backgroundColor = "lightblue";
            document.body.style.cursor = "url('https://static.igem.wiki/teams/5684/wikipics/accessibility/pointer-white.webp'), auto";
            buttons.forEach(
                (b) => (b.style.cursor = "url('https://static.igem.wiki/teams/5684/wikipics/accessibility/hand-pointer-white.webp'), auto")
            );
            links.forEach(
                (l) => (l.style.cursor = "url('https://static.igem.wiki/teams/5684/wikipics/accessibility/hand-pointer-white.webp'), auto")
            );

            const blackBtn = document.getElementById("blackcursor");
            if (blackBtn) blackBtn.style.backgroundColor = "";
        } 
        else {
            if (btn) btn.style.backgroundColor = "";
            document.body.style.cursor = "auto";
            buttons.forEach((b) => (b.style.cursor = "auto"));
            links.forEach((l) => (l.style.cursor = "auto"));
        }
    };
    const toggleBlackCursor = () => {
        const btn = document.getElementById("blackcursor");
        const buttons = document.querySelectorAll("button");
        const links = document.querySelectorAll("a");

        const newState = !blackCursorActive;
        setBlackCursorActive(newState);
        setWhiteCursorActive(false);

        if (newState) {
            if (btn) btn.style.backgroundColor = "lightblue";
            document.body.style.cursor = "url('https://static.igem.wiki/teams/5684/wikipics/accessibility/black-pointer.webp'), auto";
            buttons.forEach(
                (b) => (b.style.cursor = "url('https://static.igem.wiki/teams/5684/wikipics/accessibility/hand-pointer-black.webp'), auto")
            );
            links.forEach(
                (l) => (l.style.cursor = "url('https://static.igem.wiki/teams/5684/wikipics/accessibility/hand-pointer-black.webp'), auto")
            );

            const whiteBtn = document.getElementById("whitecursor");
            if (whiteBtn) whiteBtn.style.backgroundColor = "";
        } 
        else {
            if (btn) btn.style.backgroundColor = "";
            document.body.style.cursor = "auto";
            buttons.forEach((b) => (b.style.cursor = "auto"));
            links.forEach((l) => (l.style.cursor = "auto"));
        }
    };

    // alter font size
    const changeFontSize = (direction: "increase" | "decrease") => {
        const currentFontSize = window.getComputedStyle(document.body).fontSize;

        let fontSizeUnit = "px"; // Default
        let fontSizeValue = parseFloat(currentFontSize);

        if (currentFontSize.includes("em")) {
            fontSizeUnit = "em";
        } 
        else if (currentFontSize.includes("rem")) {
            fontSizeUnit = "rem";
        }

        const newFontSize =
        direction === "increase"
            ? fontSizeValue * 1.2
            : fontSizeValue / 1.2;

        document.body.style.fontSize = newFontSize + fontSizeUnit;
    };

    // only increase letter spacing
    const increaseLetterSpacing = () => {
        const currentLetterSpacing = window.getComputedStyle(document.body).letterSpacing;
        let letterSpacingValue = parseFloat(currentLetterSpacing);

        if (isNaN(letterSpacingValue)) {
            letterSpacingValue = 0;
        }

        const newLetterSpacing = letterSpacingValue + 1; // px
        document.body.style.letterSpacing = newLetterSpacing + "px";
    };

    // only increase line height
    const increaseLineHeight = () => {
        const currentLineHeight = window.getComputedStyle(document.body).lineHeight;
        let lineHeightValue = parseFloat(currentLineHeight);

        if (isNaN(lineHeightValue)) {
            lineHeightValue = 50; // fallback
        }

        const newLineHeight = lineHeightValue + 5; // px
        document.body.style.lineHeight = newLineHeight + "px";
    };

    // toogle zooms
    const [zoomInActive, setZoomInActive] = useState(false);
    const [zoomOutActive, setZoomOutActive] = useState(false);
    const toggleZoomIn = () => {
        const btn = document.getElementById("zoomin");

        if (!content || !btn) return;

        const newState = !zoomInActive;
        setZoomInActive(newState);
        setZoomOutActive(false);

        if (newState) {
            (content.style as any).zoom = "150%";
            btn.style.backgroundColor = "lightblue";
        } else {
            (content.style as any).zoom = "100%";
            btn.style.backgroundColor = "";
        }

        const zoomOutBtn = document.getElementById("zoomout");
        if (zoomOutBtn) zoomOutBtn.style.backgroundColor = "";
    };
    const toggleZoomOut = () => {
        const btn = document.getElementById("zoomout");

        if (!content || !btn) return;

        const newState = !zoomOutActive;
        setZoomOutActive(newState);
        setZoomInActive(false);

        if (newState) {
            (content.style as any).zoom = "50%";
            btn.style.backgroundColor = "lightblue";
        } else {
            (content.style as any).zoom = "100%";
            btn.style.backgroundColor = "";
        }

        const zoomInBtn = document.getElementById("zoomin");
        if (zoomInBtn) zoomInBtn.style.backgroundColor = "";
    };

    // toggle highlights
    const [linksHighlighted, setLinksHighlighted] = useState(false);
    const toggleLinkHighlight = () => {
        const newState = !linksHighlighted;
        setLinksHighlighted(newState);
        document.body.classList.toggle("link-highlight-enabled", newState);
        document.body.classList.toggle("button-highlight-enabled", newState);
    };

    // toggle read focus
    const [readFocusEnabled, setReadFocusEnabled] = useState(false);
    useEffect(() => {
        if (!readFocusEnabled) return;

        const highlightHeight = 100;
        const topBox = document.createElement("div");
        topBox.className = "black-box top-box";
        document.body.appendChild(topBox);

        const bottomBox = document.createElement("div");
        bottomBox.className = "black-box bottom-box";
        document.body.appendChild(bottomBox);

        const handleMouseMove = (e: MouseEvent) => {
            const mouseY = e.clientY;
            const topBoxHeight = mouseY - highlightHeight / 2;
            const bottomBoxHeight = window.innerHeight - mouseY - highlightHeight / 2;

            topBox.style.height = `${Math.max(0, topBoxHeight)}px`;
            bottomBox.style.height = `${Math.max(0, bottomBoxHeight)}px`;
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            topBox.remove();
            bottomBox.remove();
        };
    }, [readFocusEnabled]);

    // reset
    const handleReset = () => {
        if (content) content.classList.remove("invert", "grayscale", "lowsaturation", "highsaturation", "protanopia", "deuteranopia", "tritanopia", "acromatopsia");
        setActiveMode("none");
        
        setWhiteCursorActive(false);
        setBlackCursorActive(false);
        const blackBtn = document.getElementById("blackcursor");
        if (blackBtn) blackBtn.style.backgroundColor = "";
        const whiteBtn = document.getElementById("whitecursor");
        if (whiteBtn) whiteBtn.style.backgroundColor = "";
        document.body.style.cursor = "auto";

        document.body.style.fontSize = "";

        document.body.style.letterSpacing = "";

        document.body.style.lineHeight = "";

        setZoomInActive(false);
        setZoomOutActive(false);
        const zoomInBtn = document.getElementById("zoomin");
        if (zoomInBtn) zoomInBtn.style.backgroundColor = "";
        const zoomOutBtn = document.getElementById("zoomout");
        if (zoomOutBtn) zoomOutBtn.style.backgroundColor = "";
        if (content) (content.style as any).zoom = "100%";

        setLinksHighlighted(false);
        document.body.classList.remove("link-highlight-enabled");
        document.body.classList.remove("button-highlight-enabled");

        setReadFocusEnabled(false);
    };

    return (
    <div>
        <button                                                     // main button
            tabIndex={1} 
            id="accesstool" 
            className="accesstool" 
            title="Accessibility-Toolbar-Plugin" 
            onClick={toggleAccessibilityToolBar}>
            <div>
                <img src ="https://static.igem.wiki/teams/5684/wikipics/accessibility/wheelchair.svg" alt="Description of the image" style={{color:"#279af1", fontSize:"50px"}}/>
            </div>
        </button>

        <div                                                        // toolbar root
            id="access-tool-bar" 
            className="access-tool-bar"
            style={{
                visibility: isVisible ? "visible" : "hidden",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.3s ease"}}>      
            <div                                                    // close button
                id="main-header" 
                className="main-header">
                Accessibility Plugin
                <button 
                    id="close-button"
                    className="close-button" 
                    title="Close-Button"
                    onClick={toggleAccessibilityToolBar}> 
                <div>
                    <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/exit.svg" alt="Description of the image" style={{color:"#279af1", fontSize:"5px"}} />
                </div>    
                </button>
            </div>

            <div className="preset">
                <div className="toolbar-header"> 
                    Preset
                </div>
                <div id="colorblind" className="preset-button" onClick={toggleColorBlindMenu}>
                    Color-Blindness
                    <div className="caret" 
                        title="ClickToAccessTheDropDown"
                        style={{
                            transform: menuVisible ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                        }}></div>
                    <ul className="toolbar-menu"
                        style={{
                            visibility: menuVisible ? "visible" : "hidden",
                            opacity: menuVisible ? 1 : 0,
                            transition: "opacity 0.2s ease",
                        }}>
                        <li id="Protanopia" 
                            onClick={() => toggleFilter("protanopia")
                            }> <a href="#"> Protanopia </a> </li>
                        <li id="Deuteranopia"
                            onClick={() => toggleFilter("deuteranopia")
                            }> <a href="#"> Deuteranopia </a> </li>
                        <li id="Tritanopia"
                            onClick={() => toggleFilter("tritanopia")
                            }> <a href="#"> Tritanopia </a> </li>
                        <li id="Acromatopsia"
                            onClick={() => toggleFilter("acromatopsia")
                            }> <a href="#"> Acromatopsia </a> </li>
                    </ul>
                </div>
                <div id="visualimpairment" className="preset-button">
                    Visual Impairment
                    <div>
                        <label className="toggle-switch">
                            <input id="visualimpairment" 
                                type="checkbox" 
                                className="toggle-input-visual"
                                checked={activeMode === "visual"}
                                readOnly={true}
                                onClick={() => setActiveMode(activeMode === "visual" ? "none" : "visual")}
                                style={{ backgroundColor: activeMode === "visual" ? "lightblue" : "" }}
                            />
                            <span className="toggle-slider"></span>
                        </label>
                    </div>            
                </div>
                <div id="ADHD" className="preset-button">
                    ADHD
                    <div>
                    <label className="toggle-switch">
                        <input id="ADHD" 
                            type="checkbox" 
                            className="toggle-input-adhd"
                            checked={activeMode === "adhd"}
                            readOnly={true}
                            onClick={() => setActiveMode(activeMode === "adhd" ? "none" : "adhd")}
                            style={{ backgroundColor: activeMode === "adhd" ? "lightblue" : "" }}/>
                        <span className="toggle-slider"></span>
                    </label>
                    </div>
                </div>
                <div id="Dyslexia" className="preset-button">
                    Dyslexia
                    <div>
                        <label className="toggle-switch">
                            <input id="Dyslexia" 
                                type="checkbox"
                                className="toggle-input-dyslexia"
                                checked={activeMode === "dyslexia"}
                                readOnly={true}
                                onClick={() => setActiveMode(activeMode === "dyslexia" ? "none" : "dyslexia")}
                                style={{ backgroundColor: activeMode === "dyslexia" ? "lightblue" : "" }}/>
                            <span className="toggle-slider"></span>
                        </label>
                    </div>
                </div>
                <div id="Epilepsy" className="preset-button">
                    Epilepsy
                    <div>
                        <label className="toggle-switch">
                            <input id="Epilepsy" 
                                type="checkbox" 
                                className="toggle-input-epilepsy"
                                checked={activeMode === "epilepsy"}
                                readOnly={true}
                                onClick={() => setActiveMode(activeMode === "epilepsy" ? "none" : "epilepsy")}
                                style={{ backgroundColor: activeMode === "epilepsy" ? "lightblue" : "" }}/>
                            <span className="toggle-slider"></span>
                        </label>
                        </div>
                </div>
            </div>

            <div id="color" className="color">
                <div id="color-header" className="toolbar-header"> 
                    Color
                </div>
                <div className="icon-row">
                <div id="Invert" className="icon" onClick={() => toggleFilter("invert")}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/invert.svg" alt="Invert" />
                    </div>
                        <span> Invert </span>   
                </div>
                <div id="Grayscale" className="icon" onClick={() => toggleFilter("grayscale")}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/grayscale.svg" alt="Grayscale" />
                    </div>
                    <span> Grayscale </span>   
                </div>
                <div id="lowsaturation" className="icon" onClick={() => toggleFilter("lowsaturation")}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/drop.svg" alt="lowsaturation" />
                    </div>
                    <span> Low Saturation </span>   
                </div>
                <div id="highsaturation" className="icon" onClick={() => toggleFilter("highsaturation")}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/drop-black.svg" alt="highsaturation" />
                    </div>
                    <span> High Saturation </span>   
                </div>
                </div>
            </div>
        
            <div className="Cursororg">
                <div className="toolbar-header"> 
                    Cursor
                </div>
                <div className="icon-row">
                <div id="whitecursor" className="icon" onClick={() => toggleWhiteCursor()}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/cursor-white.svg" alt="whitecursor" />
                    </div>
                        <span> White </span>   
                </div>
                <div id="blackcursor" className="icon" onClick={() => toggleBlackCursor()}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/cursor.svg" alt="blackcursor" />
                    </div>
                    <span> Black </span>   
                </div>
                </div>
            </div>

            <div className="Cursor">
                <div className="toolbar-header"> 
                    Font
                </div>
                <div className="icon-row">
                <div id="increasefontsize" className="icon" onClick={() => changeFontSize("increase")}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/add.svg" alt="Increasefontsize" />
                    </div>
                        <span> A+ </span>   
                </div>
                <div id="decreasefontsize" className="icon" onClick={() => changeFontSize("decrease")}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/remove.svg" alt="decreasefontsize" style={{color:"#279af1", fontSize:"50px"}} />
                    </div>
                    <span> A- </span>   
                </div>
                <div id="increaseletterspacing" className="icon" onClick={() => increaseLetterSpacing()}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/code.svg" alt="increaseletterspacing" style={{color:"#279af1", fontSize:"50px"}} />
                    </div> 
                    <span> Text-Width </span>   
                </div>
                <div id="increaselineheight" className="icon" onClick={() => increaseLineHeight()}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/code.svg" alt="increaselineheight" style={{transform:"rotate(90deg)"}} />
                    </div>
                    <span> line-height </span>   
                </div>
                </div>
            </div>


            <div className="General">
                <div className="toolbar-header"> 
                    General
                </div>
                <div className="icon-row">
                <div id="zoomin" className="icon" onClick={() => toggleZoomIn()}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/zoom-in.svg" alt="zoomin" style={{color:"#279af1", fontSize:"50px"}} />
                    </div>
                        <span> Zoom-in </span>   
                </div>
                <div id="zoomout" className="icon" onClick={() => toggleZoomOut()}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/zoom-out.svg" alt="zoomout" style={{color:"#279af1", fontSize:"50px"}} />
                    </div>
                    <span> Zoom-out </span>   
                </div>
                <div id="linkhighlighter" className="icon" onClick={() => toggleLinkHighlight()}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/highlighter.svg" alt="linkhighlighter" style={{color:"#279af1", fontSize:"50px"}} />
                    </div>
                    <span> Clickable-highlight </span>   
                </div>
                <div id="readfocus" className="icon" onClick={() => setReadFocusEnabled((prev) => !prev)}
                    style={{ backgroundColor: readFocusEnabled ? "lightblue" : "" }}>
                    <div>
                        <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/readfocus.svg" alt="readfocus" style={{color:"#279af1", fontSize:"50px"}} />
                    </div>
                    <span> Read-Focus </span>
                </div>
                </div>
            </div> 

            <div className="Reset">
                <div className="toolbar-header"> 
                    Reset
                </div>
                <div className="icn-rw">
                    <div id="reset" className="icon" onClick={() => handleReset()}>
                        <div>
                            <img src="https://static.igem.wiki/teams/5684/wikipics/accessibility/refresh.svg" alt="Reset" style={{color:"#279af1", fontSize:"50px"}} />
                        </div>
                            <span> Reset </span>   
                    </div>
                </div>
            
                <div className="Reset">
                    <div className="toolbar-header"> 
                        Thanks to
                    </div>
                    <div className="icn-rw">
                        <div id="help" style={{textAlign: "center"}}>
                            <i style={{fontSize:"50px", backgroundColor:"transparent"}} aria-hidden="true"></i>
                            <a style={{fontFamily:"Arial", color:"black", fontSize:"25px", textDecoration: "none"}}> IISc-Software-iGEM</a>
                            <a style={{fontFamily:"Arial", color:"#279af1", fontSize:"25px", textDecoration: "underline"}} href="https://github.com/IISc-Software-iGEM/Accessibility-Tool/tree/main">Github Repo</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    );
};

export default AccessibilityToolbar;