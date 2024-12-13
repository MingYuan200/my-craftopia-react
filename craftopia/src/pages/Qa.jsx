import ShowQa from '../component/ShowQa'
import './qa.scss'

export default function Qa() {
    return (
        <>
            {/* <!-- 主要內容區 --> */}
            <section id="banner">
                <div className="banner-mask"> </div>
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
                                <ShowQa />
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* 頁尾區 */}
            <footer>
                <div className="footer-bgDeco">
                    <img src="./images/footer-deco.png" alt="" />
                </div>
                <div className="foot-content">
                    <img src="./images/footer-logo.svg" alt="" />
                    {/* 選單*/}
                    <ul className="menu">
                        <li><a href="">首頁</a></li>
                        <li>
                            <a href="">發掘店家</a>
                            <ul>
                                <li><a href="">金工</a></li>
                                <li><a href="">陶藝</a></li>
                                <li><a href="">皮革</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">預約課程</a>
                            <ul>
                                <li><a href="">熱門課程</a></li>
                                <li><a href="">最新課程</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">商城</a>
                            <ul>
                                <li><a href="">商城</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">會員中心</a>
                            <ul>
                                <li><a href="">會員資料</a></li>
                                <li><a href="">預約紀錄</a></li>
                                <li><a href="">收藏紀錄</a></li>
                                <li><a href="">我的分享</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="">常見問題</a>
                            <ul>
                                <li><a href="">會員相關</a></li>
                                <li><a href="">預約相關</a></li>
                                <li><a href="">課程相關</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <small> Copyright© 2024 CRAFTOPIA All rights reserved. </small>
            </footer>

        </>
    )
}