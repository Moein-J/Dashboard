import MagniSvg from "@/components/icons/magni-svg";
const SearchInput = ({
  type,
  placeholder,
}: {
  type: "sm" | "md";
  placeholder: string;
}) => {
  return (
    <div
      className={`flex items-center h-full ${
        type === "sm" ? "w-[225px]" : "w-[468px]"
      } gap-4 bg-white shadow-md shadow-gray-400 rounded-[4px] p-1 px-3`}
    >
      <MagniSvg />
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none flex-grow"
      />
    </div>
  );
};

export default SearchInput;
