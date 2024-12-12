import { useState } from "react";

export default function ShowQa() {

    // 可以修改資料的方式
    const [qaData, setQaData] = useState([
        {
            id: 1,
            question: '如何註冊會員',
            ans: '透過信箱綁定',
            isClicked: false,
        },
        {
            id: 2,
            question: '如何更改會員資料',
            ans: '手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。',
            isClicked: false,
        },
        ,
        {
            id: 3,
            question: '收不到驗證碼',
            ans: '手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。',
            isClicked: false,
        },
    ]);

    // 建立切換 雙向展開收合 的函式
    // const toggleClick = (id) => {
    //     setQaData(qaData.map((data) => {
    //         return {
    //             ...data,
    //             isClicked: data.id === id ? !data.isClicked : false,
    //         };
    //     }))
    // }

    // toDoList的方式：適合多選，可以一次展開多個選項，不會自動收合
    const toggleClick = (id) => {
        setQaData(qaData.map((data) => {
            return data.id === id
                ? { ...data, isClicked: !data.isClicked }
                : data
        }))
    }





    return (
        <>
            {
                qaData.map((item) => {
                    return (

                        <li className="list-row" key={item.id}>
                            <div>
                                <p className="quest-mark">?</p>
                            </div>
                            <div className="QAset" >
                                <div className={item.isClicked ? 'question show' : 'question'} onClick={() => toggleClick(item.id)}>
                                    <p>{item.question}</p>

                                    <div className={item.isClicked ? 'icon-arrow show' : 'icon-arrow'}>

                                        <img className="QA-arrowDown" src="./images/icon-tag/type=arrowDown_bold.svg" alt="" />
                                        {/* <img className="QA-arrowUp" src="./images/icon-tag/type=arrowUp_bold.svg" alt="" /> */}

                                    </div>
                                </div>
                                <div className={item.isClicked ? 'ansWrap show' : 'ansWrap'}>

                                    <div className="answer">
                                        <p>
                                            {item.ans}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </li>

                    )
                })
            }
        </>
    )
}

{/* <div className={item.isClicked ? 'answer show' : 'answer'}>
                                    <p>
                                        {item.ans}
                                    </p>
                                </div> */}




// 資料
// const qaData = [
//     {
//         id: 1,
//         question: '如何註冊會員',
//         ans: '透過信箱綁定',
//     },
//     {
//         id: 2,
//         question: '收不到驗證碼',
//         ans: '手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。',
//     }
// ];

// const qaData = {
//     課程頁面:[{id: 1, question: '如何註冊會員', ans: '透過信箱綁定' },],
//     問題頁面之會員:[],
//     問題頁面之課程:[],
//     問題頁面之預約:[],
// };

// const toggleClick = (id) => {
//     setQaData(
//         qaData.map((data) => {
//             if (data.id === id) {
//                 const targetElement = document.getElementById(`answer-${id}`);
//                 const contentHeight = targetElement.scrollHeight;
//                 targetElement.style.height = data.isClicked ? "0px" : `${contentHeight}px`; // 切換高度
//                 return {
//                     ...data,
//                     isClicked: !data.isClicked,
//                 };
//             }
//             return { ...data, isClicked: false }; // 其他項目折疊
//         })
//     );
// };