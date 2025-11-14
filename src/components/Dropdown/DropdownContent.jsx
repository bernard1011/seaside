const DropdownContent = ({ content, open }) => {
  return (
    open && (
      <div
        className={` absolute left-0 right-0 w-full flex flex-col items-center p-3 mt-2 bg-gray-50 rounded-lg max-h-[40vh] overflow-y-scroll z-10 border border-gray-200 shadow-lg`}
      >
        {content}
      </div>
    )
  );
};

export default DropdownContent;
