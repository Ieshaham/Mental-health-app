import React, { useRef} from "react";

function App() {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior:'smooth'});
        }
    };

    return (
        <div>
            <button onClick={scrollToSection}>Scroll to Section</button>
        </div>
    );
}

export default App;
