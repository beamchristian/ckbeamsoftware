const Next = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      aria-hidden='true'
      className={`
                  transform transition-transform 
                  group-hover:translate-x-3 
                  duration-300 w-5 h-5 ml-2
                `}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M17 8l4 4m0 0l-4 4m4-4H3'
      ></path>
    </svg>
  );
};

export default Next;
