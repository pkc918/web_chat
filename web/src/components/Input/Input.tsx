import React, { ReactNode } from "react";
import classNames from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  className?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { className, label, children, ...rest } = props;
  const cn = classNames("grow-[1] shrink-0 basis-1", className, {
    "border-l-none": children,
  });

  return (
    <div className="flex justify-center">
      {label ? (
        <div className="text-left text-nowrap flex items-center">{label}</div>
      ) : null}
      <input className={cn} {...rest} />
      {children}
    </div>
  );
};
