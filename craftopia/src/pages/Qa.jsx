import ShowQa from '../component/ShowQa'
import './qa.scss'

export default function Qa() {
    return (
        <>
            {/* <!-- 主要內容區 --> */}
            <section id="banner">
                <div className="banner-deco">
                    <img src="./images/BG-img-過度邊緣.png" alt="" />
                </div>
            </section>

            <main>
                <div className="content-bg">
                    {/* 麵包穴 */}
                    <div className="bread2">
                        <a href="">首頁</a>
                        <img src="./images/icon-tag/type=arrowRight_bold.svg" alt="" />
                        <a href="">常見問題</a>
                    </div>

                    <div className="content">
                        <ul className="member-QA-left">
                            <li>
                                <a className="left-list" href="">
                                    <img src="./images/Vector-1.svg" alt="" />
                                    會員相關
                                </a>
                            </li>
                            <li>
                                <a className="left-list" href="">
                                    <img src="./images/Vector-2.svg" alt="" />
                                    課程相關
                                </a>
                            </li>
                            <li>
                                <a className="left-list" href="">
                                    <img src="./images/Vector-3.svg" alt="" />
                                    預約相關
                                </a>
                            </li>
                        </ul>

                        <div className="member-QA-right">
                            <h2 className="title">
                                <img src="./images/title/會員相關.svg" alt="" />
                            </h2>

                            <ul className="list">

                                <ShowQa/>


                            </ul>
                        </div>
                    </div>



                </div>
            </main>


        </>
    )
}