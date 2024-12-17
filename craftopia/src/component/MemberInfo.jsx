import { useState } from "react"

export default function MemeberInfo() {

    const [memberData, setMemberData] = useState([
        {
            id: 1,
            name: "王曉明",
            email: "armincraft@gmail.com",
            phone: "0966-888-888",
            birthday: "未填寫",
        }
    ]);

    return (
        <>
            <div className="info">
                <div className="title">
                    <h2>
                        <img src="./images/title/基本資料.svg" alt="" />
                    </h2>
                    <img className="icon-edit" src="./images/icon-tag/type=edit.svg" alt="" />
                </div>

                {
                    memberData.map((item) => {
                        return (
                            <div className="dataBox" key={item.id}>

                                <div className="data">
                                    <p>姓名</p>
                                    <p className="data-text">{item.name}</p>
                                </div>
                                <div className="data">
                                    <p>電子信箱</p>
                                    <p className="data-text">{item.email}</p>
                                </div>
                                <div className="data">
                                    <p>行動電話</p>
                                    <p className="data-text">{item.phone}</p>
                                </div>
                                <div className="data">
                                    <p>生日</p>
                                    <p className="data-text">{item.birthday}</p>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

