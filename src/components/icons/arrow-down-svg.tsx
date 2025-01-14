const ArrowDownSvg = ({
  color,
  isOpen,
}: {
  color: string;
  isOpen: boolean;
}) => {
  return (
    <>
      <svg
        className={`${!isOpen && "-rotate-90"}`}
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.146447 0.646447C0.341709 0.451184 0.658291 0.451184 0.853553 0.646447L4 3.79289L7.14645 0.646447C7.34171 0.451184 7.65829 0.451184 7.85355 0.646447C8.04882 0.841709 8.04882 1.15829 7.85355 1.35355L4.35355 4.85355C4.15829 5.04882 3.84171 5.04882 3.64645 4.85355L0.146447 1.35355C-0.0488155 1.15829 -0.0488155 0.841709 0.146447 0.646447Z"
          fill={color}
        />
      </svg>
    </>
  );
};

export default ArrowDownSvg;
