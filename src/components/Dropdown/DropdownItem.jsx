const DropdownItem = ({items}) => {
    return (
        <>
            <div className="hover:bg-blue-100 w-full p-2 rounded px-3 m-0 transition-colors text-gray-600">
                {items}
            </div>
        </>
    );
};


export default DropdownItem;