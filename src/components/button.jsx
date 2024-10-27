


function Button(props) {
    const links = {
        GitHub: "https://github.com/ibnuladib",
        LinkedIn: "https://www.linkedin.com/in/ibnul-adib-9b75772a7/"
    };
    
    const link = links[props.btnName] || "#";

    return (
        <button 
            onClick={() => {
                if (link !== "#") {
                    window.open(link, "_blank");
                } else {
                    console.warn("Invalid link specified");
                }
            }}
            className="social-icon border-white border-2 w-36 text-white font-bold py-2 px-4 rounded-full text-xl">
            {props.btnName}
        </button>
    );
}

export default Button;