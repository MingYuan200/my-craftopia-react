import { useState } from "react";
import Blob from "../assets/blob.svg";
import ChangePassword from "../component/ChangePassword";
import MemeberInfo from "../component/MemberInfo";
import MemberTest from "../component/MemberTest";
import Test from "../component/Test";


export default function Try() {

    


    return (
        <>
            999
            <Blob ></Blob>
            {/* 會員資料區 */}
            <section id="member">
                <div className="memberWrap">
                    {/* 會員簡歷 */}
                    <div className="resume">
                        <div className="avatar">
                            <div className="ava-photo">
                                <img src="./images/avatar/member-avatar.svg" alt="" />
                            </div>
                            <div className="camera">
                                <img src="./images/icon-tag/type=camera.svg" alt="" />
                            </div>
                        </div>

                        <div className="name-default">
                            <p>阿明</p>
                            <img className="icon-edit" src="./images/icon-tag/type=edit.svg" alt="" />
                        </div>

                        <div className="member-level">
                            <p>等級：小俗投
                                <br />
                                <span>距離下個俗投還差 400 pt</span>
                            </p>
                            <p className="level-count">累積點數: 100 pt</p>
                        </div>

                    </div>

                    {/* 會員資料盒子 */}
                    <div className="information">
                        {/* 會員基本資料 */}
                        {/* <MemeberInfo /> */}

                        {/* <MemberTest/> */}

                        <Test/>

                        <ChangePassword />

                    </div>
                </div>
            </section>

            {/* 預約記錄區 */}
            <section id="reserve">
                <div className="title">
                    <h2>
                        <img src="./images/title/預約紀錄.svg" alt="" />
                    </h2>
                </div>
                {/* 列表區 */}
                <div className="reserve-cardsBox">
                    {/* 訂單狀態:進行中 */}
                    <div className="reserve-row">
                        <div className="rowIMG">
                            <img src="./images/classIMG.jpg" alt="" />
                        </div>

                        <div className="reserve-content">
                            <div className="txt">
                                <p className="tag-state">即將到來</p>
                                <h3>聖誕禮物首選!皮革證件套組~適合初學者</h3>
                                <p>12月07日(週六)13:30-15:30。成人1位</p>
                                <p className="class-item">證件卡夾</p>
                            </div>
                            <button className="btn-reserve">修改訂單</button>
                        </div>

                    </div>
                    {/* 訂單狀態:完成,多一個標籤finish */}
                    <div className="reserve-row finish">
                        <div className="rowIMG">
                            <img src="./images/classIMG.jpg" alt="" />
                        </div>
                        <div className="reserve-content">
                            <div className="txt">
                                <p className="tag-state">已完成</p>
                                <h3>聖誕禮物首選!皮革證件套組~適合初學者</h3>
                                <p>12月07日(週六)13:30-15:30。成人1位</p>
                                <p className="class-item">證件卡夾</p>
                            </div>
                            <button className="btn-reserve">分享心得</button>
                        </div>

                    </div>
                </div>
                {/* 看全部按鈕 */}
                <div className="btn-area">
                    <div className="btn-seeAll">
                        <p>
                            See All
                        </p>
                        <img src="./images/icon-tag/type=arrowRight_bold.svg" alt="" />
                        <img className="seeAll-deco" src="./images/seeAll-dot.svg" alt="" />

                    </div>
                </div>
            </section>


        </>
    )
}