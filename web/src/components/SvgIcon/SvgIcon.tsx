import React from "react";

type IconProps = {
    name?: string;
    prefix?: string;
    color?: string;
} & React.SVGAttributes<SVGElement>

const SvgIcon = ( props: IconProps ) => {
    const { name, prefix = "icon", color = "#333", ...rest } = props;
    const symbolId = `#${ prefix }-${ name }`;

    return (
        <svg { ...rest }  aria-hidden="true">
            <use href={ symbolId } fill={ color }/>
        </svg>
    );
};
export default SvgIcon;