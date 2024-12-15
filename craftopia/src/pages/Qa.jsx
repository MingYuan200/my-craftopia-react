import ShowQa from '../component/ShowQa'
import './qa.scss'
import Blob from "../assets/blob.svg";
import Blob2 from "../assets/blob2.svg";
import Blob3 from "../assets/blob3.svg";
import { useRef, useState } from 'react';



export default function Qa() {
    // 一開始就要先渲染sctive1 所以要先在useState給值
    const [activeId, setActiveId] = useState('qaPart1');
    const refPart1 = useRef();
    const refPart2 = useRef();
    const refPart3 = useRef();

    const handleClick = (id, ref) => {
        setActiveId(id);
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                        <a href="#">首頁</a>
                        <img src="./images/icon-tag/type=arrowRight_bold.svg" alt="" />
                        <a href="/qa">常見問題</a>
                    </div>

                    <div className="content">
                        <ul className="member-QA-left">
                            <div className="QaLeftSticky">
                                <li>
                                    <a className="left-list" href="#" 
                                    onClick={(e) => {
                                            e.preventDefault(); // 阻止預設行為
                                            handleClick('qaPart1', refPart1);
                                        }}>
                                        <Blob className={`leftIcon  ${activeId === 'qaPart1' ? 'active' : ''}`}></Blob>
                                        會員相關
                                    </a>
                                </li>
                                <li>
                                    <a className="left-list" href="#" 
                                    onClick={(e) => {
                                        e.preventDefault(); // 阻止預設行為
                                        handleClick('qaPart2', refPart2);
                                    }}>
                                        <Blob2 className={`leftIcon ${activeId === 'qaPart2' ? 'active' : ''}`}></Blob2>
                                        課程相關
                                    </a>
                                </li>
                                <li>
                                    <a className="left-list" href="#" 
                                    onClick={(e) => {
                                        e.preventDefault(); // 阻止預設行為
                                        handleClick('qaPart3', refPart3);
                                    }}>
                                        <Blob3 className={`leftIcon ${activeId === 'qaPart3' ? 'active' : ''}`}></Blob3>
                                        預約相關
                                    </a>
                                </li>
                            </div>

                        </ul>

                        <div className="member-QA-right">
                            <section id='qaPart1' ref={refPart1}>
                                <h2 className="title">
                                    <img src="./images/title/會員相關.svg" alt="" />
                                </h2>
                                <ul className="list">
                                    <ShowQa />
                                </ul>
                            </section>

                            <section id='qaPart2' ref={refPart2}>
                                <h2 className="title">
                                    <img src="./images/title/課程相關.svg" alt="" />
                                </h2>
                                <ul className="list">
                                    <ShowQa />
                                </ul>
                            </section>

                            <section id='qaPart3' ref={refPart3}>
                                <h2 className="title">
                                    <img src="./images/title/預約相關.svg" alt="" />
                                </h2>
                                <ul className="list">
                                    <ShowQa />
                                </ul>
                            </section>

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