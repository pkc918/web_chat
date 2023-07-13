import React from "react";
import classNames from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
}

export const Input: React.FC<InputProps> = ( props ) => {
    const { className, label, ...rest } = props;
    const cn = classNames("grow-[1] shrink-0 basis-1", className);

    return (
        <div className="flex justify-center">
            { label ? <div className="text-left text-nowrap flex items-center">{ label }</div> : null }
            <input className={ cn } { ...rest } />
        </div>
    );
};