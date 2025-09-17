import React from "react";
import { useState } from "react";

const FlipCard = ({ frontContent, backContent }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="group [perspective:1000px] w-90 h-100"
            onClick={() => setFlipped(f => !f)}
        >
            <div className={"relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] " + (flipped ? "[transform:rotateY(180deg)]" : "") + " group-hover:[transform:rotateY(180deg)]"}>
            <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-white dark:bg-darkgray rounded-xl shadow-lg border-2 border-gray/10">
                {frontContent}
            </div>
            <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-purple text-white rounded-xl shadow-lg p-8 [transform:rotateY(180deg)]">
                {backContent}
            </div>
            </div>
        </div>
  )
};

export default FlipCard;