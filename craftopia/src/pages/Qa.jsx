import './qa.scss'

export default function Qa() {
    return (
        <>
            我是Qa頁面

            {/* <!-- 主要內容區 --> */}
            <section id="banner">
                <div class="banner-deco">
                    <img src="./images/BG-img-過度邊緣.png" alt="" />
                </div>
            </section>

            <main>
                <div className="content-bg">
                    {/* 麵包穴 */}
                    <div class="bread2">
                        <a href="">首頁</a>
                        <img src="./images/icon-tag/type=arrowRight_bold.svg" alt="" />
                        <a href="">常見問題</a>
                    </div>

                    <div className="content">
                        <ul class="member-QA-left">
                            <li>
                                <a class="left-list" href="">
                                    <img src="./images/Vector-1.svg" alt="" />
                                    會員相關
                                </a>
                            </li>
                            <li>
                                <a class="left-list" href="">
                                    <img src="./images/Vector-2.svg" alt="" />
                                    課程相關
                                </a>
                            </li>
                            <li>
                                <a class="left-list" href="">
                                    <img src="./images/Vector-3.svg" alt="" />
                                    預約相關
                                </a>
                            </li>
                        </ul>

                        <div className="member-QA-right">
                            <h2 class="title">
                                <img src="./images/會員相關.svg" alt="" />
                            </h2>

                            <ul className="list">
                                <li className="list-row">
                                    <div>
                                        <p class="quest-mark">?</p>
                                    </div>
                                    <div class="QAset">
                                        <div class="question">
                                            <p>如何註冊會員</p>
                                            <div class="icon-arrow">
                                                <img class="QA-arrowDown" src="./images/icon-tag/type=arrowDown_bold.svg" alt="" />
                                                <img class="QA-arrowUp" src="./images/icon-tag/type=arrowUp_bold.svg" alt="" />
                                            </div>
                                        </div>
                                        <div class="answer">
                                            <p>
                                                手機訊號不佳，建議至訊號良好的地方再次獲取驗證碼。確實關閉手機wifi 功能，使用個人網路後再次嘗試。
                                                <br />
                                                · 開啟「飛航模式」後等待3 分鐘再關閉，並再次嘗試操作。
                                                <br />
                                                · 開啟「飛航模式」後等待3 分鐘再關閉，並再次嘗試操作。
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>



                </div>
            </main>


        </>
    )
}