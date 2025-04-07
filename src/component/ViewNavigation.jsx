import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaStop } from "react-icons/fa";

export default function ViewNavigation() {
    return (
        <div className="slide_nav">
            <div className="slide_btn"><FaBackward /></div>
            <div className="slide_btn"><FaStop/></div>
            <div className="slide_btn"><FaForward /></div>
        </div>
    )

}