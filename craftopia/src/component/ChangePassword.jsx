import { useState } from "react";
import './pass.scss';

export default function ChangePassword() {

    // 定義 state，用來控制是否顯示表單和按鈕
    const [isPasswordFormVisible, setPasswordFormVisible] = useState(false);

    // 展開密碼表單
    const handleShowPasswordForm = () => {
        setPasswordFormVisible(true);
    };

    // 隱藏密碼表單
    const handleCancelPasswordForm = () => {
        setPasswordFormVisible(false);
    };


    return (

        <div className="password">
            {/* 標題 */}
            <div className="title">
                <h2>
                    <img src="./images/title/修改密碼.svg" alt="修改密碼" />
                </h2>
                <button
                    className={`password-btn ${isPasswordFormVisible ? "change-password" : ""}`}
                    onClick={handleShowPasswordForm} // 綁定展開事件
                >
                    修改密碼
                </button>
            </div>
            {/* 表單 */}
            <div
                className={`form-container ${isPasswordFormVisible ? "open" : ""}`}
            >
                <form
                    action=""
                    method="post"
                    name="member-form"
                    id="password-form2"
                    title="會員資料修改"
                    className={isPasswordFormVisible ? "show" : ""} // 動態 className
                >
                    <label htmlFor="oldPassword">*請輸入舊密碼：</label>
                    <input
                        type="password"
                        name="oldPassword"
                        id="oldPassword"
                        title="請輸入舊密碼"
                        placeholder="請輸入6-8混合字元"
                        required
                        maxLength="8"
                    />

                    <label htmlFor="newPassword">*請輸入新密碼：</label>
                    <input
                        type="password"
                        name="newPassword"
                        id="newPassword2"
                        title="請輸入新密碼"
                        placeholder="請輸入6-8混合字元"
                        required
                        maxLength="8"
                    />

                    <label htmlFor="confirmPassword">*再次確認新密碼</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        title="再次確認新密碼"
                        placeholder="請輸入6-8混合字元"
                        required
                        maxLength="8"
                    />
                </form>
                {/* 確認按鈕 */}
                <div
                    className={`confirm-btn ${isPasswordFormVisible ? "show" : ""}`} // 動態 className
                >
                    <button className="password-btn">確認密碼</button>
                    <button
                        className="password-cancel"
                        onClick={handleCancelPasswordForm} // 綁定取消事件
                    >
                        取消
                    </button>
                    </div >
                </div>
            </div>
            )
}