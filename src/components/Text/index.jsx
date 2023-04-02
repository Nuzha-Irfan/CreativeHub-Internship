import React from "react";

const variantClasses = {
  h1: "font-semibold sm:text-5xl md:text-5xl text-[64px]",
  h2: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h3: "font-semibold md:text-3xl sm:text-[28px] text-[32px]",
  h4: "font-bold text-2xl md:text-[22px] sm:text-xl",
  h5: "font-semibold text-base",
  h6: "font-normal text-sm",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
