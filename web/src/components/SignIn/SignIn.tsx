import React, { useEffect, useState } from "react";
import { Input } from "../Input/Input";

export const SignIn: React.FC = () => {
    const [val, setVal] = useState("");
    const onChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setVal(event.target.value.trim());
    };
    const onBlur = ( event: React.FocusEvent<HTMLInputElement> ) => {
        console.log("blur", event.target.value);
        /* 验证输入框内容 */
    };

    const handleSubmit = ( event: React.MouseEvent<HTMLInputElement> ) => {
        console.log("onClick");
    };

    useEffect(() => {
        console.log("effect", val);
        // 验证输入的值
    }, [val]);

    return (
        <div className="m-auto">
            <h2 className="text-[red]">Web_Chat LoGo</h2>
            <div className="inline-block rounded-[10px] bg-[white]">

                <div className="flex">
                    <div className="signBox">左边</div>
                    <div className="signBox">
                        <div>
                            <Input className="inputBorder" type="text" value={ val }
                                   label="邮箱" onBlur={ onBlur } onChange={ onChange }></Input>
                            <Input className="inputBorder" type="password" value={ val }
                                   label="密码" onBlur={ onBlur } onChange={ onChange }></Input>
                        </div>
                        <button className="w-full h-[40px]" onClick={ handleSubmit }>登录</button>
                    </div>
                </div>
            </div>
        </div>

    );
};