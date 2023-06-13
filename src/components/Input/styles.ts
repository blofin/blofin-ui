const InputClassName = {
  input: 'border-none focus:outline-none text-sm w-full h-full',
  light: {
    small: {
      inputWrapper:
        'h-[36px] w-[320px] border-solid border rounded-[4px] inline-flex px-[12px] transition-[border-color] duration-100 ease-linear',
      default: 'border-light-input-gray ',
      focus: 'focuse:border-light-input-primary',
      hover: 'hover:border-light-input-primary'
    },
    medium: {
      inputWrapper:
        'h-[40px] w-[380px] border-solid border rounded-[6px] inline-flex px-[14px] transition-[border-color] duration-100 ease-linear',
      default: 'border-light-input-gray ',
      focus: 'focuse:border-light-input-primary',
      hover: 'hover:border-light-input-primary'
    },
    large: {
      inputWrapper:
        'h-[50px] w-[440px] border-solid border rounded-[8px] inline-flex px-[14px] transition-[border-color] duration-100 ease-linear',
      default: 'border-light-input-gray ',
      focus: 'focuse:border-light-input-primary',
      hover: 'hover:border-light-input-primary'
    }
  },
  dark: {}
};

export default InputClassName;
