export default function RetroMonitor(props) {
    const template = props.template

    const glitchKeyframes = `
      @keyframes glitch {
        to {
          clip-path: polygon(0 calc(100% - .5em), 100% calc(100% - .5em), 0 100%, 0 100%);
        }
      }
    `;
  
    const glitchStyle = {
      clipPath: "polygon(0 0, 100% 0, 100% 0.5em, 0 0.5em)",
      animation: "glitch 10s linear infinite",
      transform: "translatex(0.1rem)",
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "transparent",
      backgroundSize: "5px 5px, 5px 5px",
      backgroundPosition: "-1px -1px, -1px -1px",
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
    };
  
    glitchStyle.animationName = "glitch";
  

    

    if (template === "retroMonitor") {
        return (
        <>
            <style>{glitchKeyframes}</style>
            <div
            className="overlay"
            style={{
                display: "block",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "transparent",
                backgroundSize: "5px 5px, 5px 5px",
                backgroundPosition: "-1px -1px, -1px -1px",
                backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            }}
            />
            <div className="glitch" style={glitchStyle} />
        </>
        );
    }
}