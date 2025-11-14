import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';

const DropdownButton = ({buttonText, open, isOpen}) => {
    return (
        <>
        <div className={`relative flex items-center justify-between w-full p-3 text-gray-500 bg-gray-50 rounded-lg cursor-pointer border border-gray-200 ${open ? 'shadow-lg' : 'shadow-none'}`} onClick={isOpen}>
        {buttonText} 
        <span>
        {open ? <ChevronUp /> : <ChevronDown />}
        </span>
        </div>
        </>
    )
};

export default DropdownButton;