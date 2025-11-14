const DropdownContent = ({ content, open }) => {
  return (
    open && (
      <div
        className={` absolute left-0 right-0 w-full flex flex-col gap-3 items-center p-3 mt-2 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg max-h-[40vh] overflow-y-scroll no-scrollbar z-10 border border-gray-200 shadow-lg`}
      >
        {content}
      </div>
    )
  );
};

export default DropdownContent;
