import React, { useEffect, useState } from "react";
import weChat from "@/assets/imgs/wechat.jpg";
import { Input } from "@/components/Input/Input";
import { useNavigate } from "react-router";
import SvgIcon from "@/components/SvgIcon/SvgIcon";

type signInTitleType = "验证码登录" | "密码登录";

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const signInTitle: signInTitleType[] = ["验证码登录", "密码登录"];
  const [signTitleIndex, setSignTitleIndex] = useState<number>(1);
  const [val, setVal] = useState<string>("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value.trim());
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log("blur", event.target.value);
    /* 验证输入框内容 */
  };

  // 切换登录模式
  const handleChangeSignMode = () => {
    console.log("切换登录方式");
    signTitleIndex === 1 ? setSignTitleIndex(0) : setSignTitleIndex(1);
  };

  // 提交
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("onClick", event);
    navigate("/");
  };

  useEffect(() => {
    console.log("effect", val);
    // 验证输入的值
  }, [val]);

  return (
    <div className="m-auto">
      <h1 className="text-[3rem] py-[2rem] flex justify-center">
        <SvgIcon className="w-[10rem]" name="logo" />
        <div className="flex items-center">叮叮叮</div>
      </h1>
      <div className="inline-block rounded-t-[10px] bg-[white]">
        <div className="flex">
          <div className="signBox mt-[1rem] border-r-2 border-solid border-[#eee]">
            <h2 className="text-left text-[1.3rem]">联系我</h2>
            <img
              className="my-[1rem] border-2 border-solid border-black"
              src={weChat}
              alt="weChat"
            />
          </div>
          <div className="signBox mt-[1rem]">
            <h2 className="text-left text-[1.3rem]">
              {signInTitle[signTitleIndex === 1 ? 0 : 1]}
            </h2>
            <div>
              <Input
                className="inputBorder px-[10px] my-[1rem]"
                type="text"
                placeholder="请输入邮箱/手机号"
                value={val}
                onBlur={onBlur}
                onChange={onChange}
              ></Input>
              {signTitleIndex === 0 ? (
                <Input
                  className="inputBorder px-[10px] mb-[1rem]"
                  type="password"
                  placeholder="请输入密码"
                  value={val}
                  onBlur={onBlur}
                  onChange={onChange}
                ></Input>
              ) : (
                <Input
                  className="inputBorder px-[10px] mb-[1rem]"
                  type="password"
                  placeholder="请输入验证码"
                  value={val}
                  onBlur={onBlur}
                  onChange={onChange}
                >
                  <div className="h-[40px] text-[0.6rem] flex items-center rounded-r-[5px] border-2 border-l-0 border-black border-solid px-[10px] text-white bg-[#3361ff] cursor-pointer">
                    获取验证码
                  </div>
                </Input>
              )}
            </div>
            <button
              className="w-full h-[40px] my-[1rem] text-white bg-[#3361ff]"
              onClick={handleSubmit}
            >
              登录
            </button>
            <div className="flex justify-between">
              <div className="flex">
                <span>其他登录：</span>
                <div>微信</div>
              </div>
              <div className="cursor-pointer" onClick={handleChangeSignMode}>
                {signInTitle[signTitleIndex]}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-[1rem] rounded-b-[10px]">
        注册登录即表示同意
        <span className="private"> 用户协议 </span>和
        <span className="private"> 隐私政策 </span>
      </div>
    </div>
  );
};
