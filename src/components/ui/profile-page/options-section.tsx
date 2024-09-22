import Option from "./option";

const OptionsSection = () => {
  return (
    <>
      <div className="lg:flex max-lg:hidden flex-col w-[173px] h-full p-2">
        <Option title="Group Title">
          <Option title="Option" />
          <Option title="Option">
            <Option title="Item" />
            <Option title="Item" />
            <Option title="Item" />
            <Option title="Item" />
          </Option>
        </Option>
      </div>
    </>
  );
};

export default OptionsSection;
