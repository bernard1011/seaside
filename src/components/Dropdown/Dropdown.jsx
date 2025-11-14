import { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import DropdownItem from "./DropdownItem";


const Dropdown = ({name, buttonText, content}) => {
    const [open, setOpen] = useState(false);
    const isOpen = () => setOpen(prev=>!prev);

    return (
        <>
        <div className={`relative md:w-full`}>
        <h3 className="font-semibold text-sm mb-1.5 ">{name}</h3>
        <DropdownButton buttonText={buttonText} open={open} isOpen={isOpen}/>
        <DropdownContent content={content} open={open}/>
        </div>
        </>
    )
}

export default Dropdown;