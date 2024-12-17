import { useState } from "react";

export default function MemberTest() {
    const [memberData, setMemberData] = useState({
        name: "王曉明",
        email: "armincraft@gmail.com",
        phone: "0966-888-888",
        birthday: "未填寫",
    });

    const [isEditing, setIsEditing] = useState(false); // 控制編輯模式
    const [errors, setErrors] = useState({}); // 儲存驗證錯誤訊息

    // 處理 input 變更並驗證輸入格式
    const handleInputChange = (field, value) => {
        setMemberData({
            ...memberData,
            [field]: value,
        });

        // 驗證輸入格式
        let newErrors = { ...errors };
        if (field === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
            newErrors.email = "請輸入有效的電子信箱";
        } else if (field === "phone" && !/^09\d{8}$/.test(value)) {
            newErrors.phone = "電話格式需為 09 開頭的 10 位數字";
        } else {
            delete newErrors[field]; // 若輸入正確，移除錯誤訊息
        }
        setErrors(newErrors);
    };

    // 確認按鈕 - 驗證所有欄位
    const handleConfirm = () => {
        const newErrors = {};
        if (!memberData.name.trim()) newErrors.name = "姓名不能為空";
        if (!/^\S+@\S+\.\S+$/.test(memberData.email)) newErrors.email = "請輸入有效的電子信箱";
        if (!/^09\d{8}$/.test(memberData.phone)) newErrors.phone = "電話格式需為 09 開頭的 10 位數字";

        setErrors(newErrors);

        // 若沒有錯誤才退出編輯模式
        if (Object.keys(newErrors).length === 0) {
            setIsEditing(false);
        }
    };

    return (
        <div className="info">
            <div className="title">
                <h2>
                    <img src="./images/title/基本資料.svg" alt="基本資料" />
                </h2>
                <img
                    className="icon-edit"
                    src="./images/icon-tag/type=edit.svg"
                    alt="edit"
                    onClick={() => setIsEditing(true)}
                    style={{ cursor: "pointer" }}
                />
            </div>

            <div className="dataBox">
                <div className="data">
                    <p>姓名</p>
                    {isEditing ? (
                        <div>
                            <input
                                type="text"
                                value={memberData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                    ) : (
                        <p className="data-text">{memberData.name}</p>
                    )}
                </div>
                <div className="data">
                    <p>電子信箱</p>
                    {isEditing ? (
                        <div>
                            <input
                                type="email"
                                value={memberData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                    ) : (
                        <p className="data-text">{memberData.email}</p>
                    )}
                </div>
                <div className="data">
                    <p>行動電話</p>
                    {isEditing ? (
                        <div>
                            <input
                                type="tel"
                                value={memberData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>
                    ) : (
                        <p className="data-text">{memberData.phone}</p>
                    )}
                </div>
                <div className="data">
                    <p>生日</p>
                    {isEditing ? (
                        <input
                            type="text"
                            value={memberData.birthday}
                            onChange={(e) => handleInputChange("birthday", e.target.value)}
                        />
                    ) : (
                        <p className="data-text">{memberData.birthday}</p>
                    )}
                </div>
            </div>

            {/* 確認與取消按鈕 */}
            {isEditing && (
                <div className="buttons">
                    <button onClick={handleConfirm}>完成</button>
                    <button onClick={() => setIsEditing(false)}>取消</button>
                </div>
            )}
        </div>
    );
}
