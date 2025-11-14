import { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import DropdownItem from "./DropdownItem";


const Dropdown = ({buttonText, content}) => {
    const [open, setOpen] = useState(false);
    const isOpen = () => setOpen(prev=>!prev);

    return (
        <>
        <div className={`relative`}>
        <h3 className="font-medium mb-1.5">Adults</h3>
        <DropdownButton buttonText={buttonText} open={open} isOpen={isOpen}/>
        <DropdownContent content={content} open={open}/>
        </div>
        </>
    )
}

export default Dropdown;