import { PropTypes } from "./icon.type";

const IconTrashCircle = (props: PropTypes) => {
  return (
    <svg
      onClick={props.onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
    >
      <circle cx="12" cy="12" r="11.5" fill="white" stroke="#C2C2C2" />
      <path
        d="M9.2625 16.5C9.05625 16.5 8.87969 16.4266 8.73281 16.2797C8.58594 16.1328 8.5125 15.9563 8.5125 15.75V8.625H8V7.875H10.35V7.5H13.65V7.875H16V8.625H15.4875V15.75C15.4875 15.95 15.4125 16.125 15.2625 16.275C15.1125 16.425 14.9375 16.5 14.7375 16.5H9.2625ZM14.7375 8.625H9.2625V15.75H14.7375V8.625ZM10.5875 14.675H11.3375V9.6875H10.5875V14.675ZM12.6625 14.675H13.4125V9.6875H12.6625V14.675Z"
        fill="#C5C5C5"
      />
    </svg>
  );
};

export default IconTrashCircle;
