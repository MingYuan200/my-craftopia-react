import './member.scss'

export default function Member() {
    return (
        <>
            我是Member頁面

            <main>

                {/* 會員資料區 */}
                <section id="member">
                    <div className="memberWrap">
                        {/* 會員簡歷 */}
                        <div class="resume">
                            <div class="avatar">
                                <div class="ava-photo">
                                    <img src="./images/avatar/member-avatar.svg" alt="" />
                                </div>
                                <div class="camera">
                                    <img src="./images/icon-tag/type=camera.svg" alt="" />
                                </div>
                            </div>

                            <div class="name-default">
                                <p>阿明</p>
                                <img class="icon-edit" src="./images/icon-tag/type=edit.svg" alt="" />
                            </div>

                            <div class="member-level">
                                <p>等級：小俗投
                                    <br />
                                    <span>距離下個俗投還差 400 pt</span>
                                </p>
                                <p class="level-count">累積點數: 100 pt</p>
                            </div>

                        </div>

                        {/* 會員資料盒子 */}
                        <div className="information">
                            {/* 會員基本資料 */}
                            <div class="info">
                                <div class="title">
                                    <h2>
                                        <img src="./images/title/基本資料.svg" alt="" />
                                    </h2>
                                    <img class="icon-edit" src="./images/icon-tag/type=edit.svg" alt="" />
                                </div>
                                <div class="dataBox">
                                    <div class="data">
                                        <p>姓名</p>
                                        <p class="data-text">王曉明</p>
                                    </div>
                                    <div class="data">
                                        <p>電子信箱</p>
                                        <p class="data-text">armincraft@gmail.com</p>
                                    </div>
                                    <div class="data">
                                        <p>行動電話</p>
                                        <p class="data-text">0966-888-888</p>
                                    </div>
                                    <div class="data">
                                        <p>生日</p>
                                        <p class="data-text">未填寫</p>
                                    </div>
                                </div>
                            </div>
                            {/* 修改密碼  */}
                            <div class="password">
                                {/* 標題 */}
                                <div class="title">
                                    <h2>
                                        <img src="./images/修改密碼.svg" alt="" />
                                    </h2>
                                    <button class="password-btn change-password">修改密碼</button>
                                </div>
                                {/* 表單 */}
                                <form action="" method="post" name="member-form" id="password-form" title="會員資料修改">

                                    <label for="passWord">*請輸入舊密碼：</label>
                                    <input type="text" name="passWord" id="passWord" title="請輸入舊密碼" placeholder="請輸入6-8混合字元"
                                        required maxlength="8" />


                                    <label for="passWord">*請輸入新密碼：</label>
                                    <input type="text" name="passWord" id="passWord" title="請輸入新密碼" placeholder="請輸入6-8混合字元"
                                        required maxlength="8" />

                                    <label for="passWord-2">*再次確認新密碼</label>
                                    <input type="text" name="passWord-2" id="passWord-2" title="再次確認新密碼"
                                        placeholder="請輸入6-8混合字元" required maxlength="8" />

                                </form>
                                {/* 確認按鈕 */}
                                <div class="confirm-btn">
                                    <button class="password-btn">確認密碼</button>
                                    <button class="password-cancel">取消</button>
                                </div>


                            </div>

                        </div>
                    </div>
                </section>

                {/* 預約記錄區 */}
                <section id="reserve">
                    <div class="title">
                        <h2>
                            <img src="./images/title/預約紀錄.svg" alt="" />
                        </h2>
                    </div>
                    {/* 列表區 */}
                    <div class="reserve-cardsBox">
                        {/* 訂單狀態:進行中 */}
                        <div class="reserve-row">
                            <div class="rowIMG">
                                <img src="./images/classIMG.jpg" alt="" />
                            </div>

                            <div class="reserve-content">
                                <div class="txt">
                                    <p class="tag-state">即將到來</p>
                                    <h3>聖誕禮物首選!皮革證件套組~適合初學者</h3>
                                    <p>12月07日(週六)13:30-15:30。成人1位</p>
                                    <p class="class-item">證件卡夾</p>
                                </div>
                                <button class="btn-reserve">修改訂單</button>
                            </div>

                        </div>
                        {/* 訂單狀態:完成,多一個標籤finish */}
                        <div class="reserve-row finish">
                            <div class="rowIMG">
                                <img src="./images/classIMG.jpg" alt="" />
                            </div>
                            <div class="reserve-content">
                                <div class="txt">
                                    <p class="tag-state">已完成</p>
                                    <h3>聖誕禮物首選!皮革證件套組~適合初學者</h3>
                                    <p>12月07日(週六)13:30-15:30。成人1位</p>
                                    <p class="class-item">證件卡夾</p>
                                </div>
                                <button class="btn-reserve">分享心得</button>
                            </div>

                        </div>
                    </div>
                    {/* 看全部按鈕 */}
                    <div class="btn-area">
                        <div class="btn-seeAll">
                            <p>
                                See All
                            </p>
                            <img src="./images/icon-tag/type=arrowRight_bold.svg" alt="" />
                            <img class="seeAll-deco" src="./images/seeAll-dot.svg" alt="" />

                        </div>
                    </div>
                </section>

                {/* 收藏區 */}
                <section id="like">
                    <div class="title">
                        <h2><img src="./images/title/收藏紀錄.svg" alt="" /></h2>
                    </div>
                    {/* 卡片區 */}
                    <div class="card-area">
                        <div class="classCard">
                            <a href="#">
                                <figure class="classPhoto">
                                    <img class="classPhoto-img" src="./images/classphoto-01.jpg" alt="" />
                                    <img class="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                                </figure>
                                <div class="classTag">
                                    <p class="classLevel">入門</p>
                                    <p class="classTime">3hr</p>
                                </div>
                                <div class="classTitle">
                                    <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                    <img class="icons-heart" src="./images/icons-heart.svg" alt="" />
                                </div>
                                <div class="classPrice">
                                    <p class="classStoreName">草樹工作坊</p>
                                    <p class="classPrice">$ 3800</p>
                                </div>
                            </a>
                        </div>
                        <div class="classCard">
                            <a href="#">
                                <figure class="classPhoto">
                                    <img class="classPhoto-img" src="./images/classphoto-01.jpg" alt="" />
                                    <img class="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                                </figure>
                                <div class="classTag">
                                    <p class="classLevel">入門</p>
                                    <p class="classTime">3hr</p>
                                </div>
                                <div class="classTitle">
                                    <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                    <img class="icons-heart" src="./images/icons-heart.svg" alt="" />
                                </div>
                                <div class="classPrice">
                                    <p class="classStoreName">草樹工作坊</p>
                                    <p class="classPrice">$ 3800</p>
                                </div>
                            </a>
                        </div>
                        <div class="classCard">
                            <a href="#">
                                <figure class="classPhoto">
                                    <img class="classPhoto-img" src="./images/classphoto-01.jpg" alt="" />
                                    <img class="tagHotorNew" src="./images/labels-hot.svg" alt="" />
                                </figure>
                                <div class="classTag">
                                    <p class="classLevel">入門</p>
                                    <p class="classTime">3hr</p>
                                </div>
                                <div class="classTitle">
                                    <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                    <img class="icons-heart" src="./images/icons-heart.svg" alt="" />
                                </div>
                                <div class="classPrice">
                                    <p class="classStoreName">草樹工作坊</p>
                                    <p class="classPrice">$ 3800</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* 看全部按鈕 */}
                    <div class="btn-area">
                        <div class="btn-seeAll">
                            <p>
                                See All
                            </p>
                            <img src="./images/icon-tag/type=arrowRight_bold.svg" alt="" />
                            <img class="seeAll-deco" src="./images/seeAll-dot.svg" alt="" />

                        </div>
                    </div>
                </section>

                {/* 心得區 */}
                <section id="experience">
                    <div class="expWrapper">
                        <div class="expTitle">
                            <img src="./images/title/我的心得分享.svg" alt="" />
                            <div class="btn-area">
                                <div class="btn-seeAll">
                                    <p>
                                        See All
                                    </p>
                                    <img src="./images/icon-tag/type=arrowRight_bold.svg" alt="" />
                                    <img class="seeAll-deco" src="./images/seeAll-dot.svg" alt="" />

                                </div>
                            </div>
                        </div>


                        <div class="newestExp">
                            <div class="Exp">
                                <div class="expPic">
                                    <img src="./images/exp-01.jpg" alt="" />
                                </div>
                                <div class="expContent">
                                    <div class="expInfo">
                                        <img src="./images/exp-id-pic-1.png" alt="" />
                                        <p>Amber</p>
                                        <img src="./images/tag-stoneLV.svg" alt="" />
                                    </div>
                                    <div class="expDate">
                                        <p>發布日期</p>
                                        <span>‧</span>
                                        <p>參加的課程</p>
                                    </div>
                                    <p>心得內容</p>
                                </div>
                            </div>

                            <img src="./images/HrLine_rec.svg" alt="" class="hrline" />

                            <div class="Exp">
                                <div class="expPic">
                                    <img src="./images/exp-02.jpg" alt="" />
                                </div>
                                <div class="expContent">
                                    <div class="expInfo">
                                        <img src="./images/exp-id-pic-1.png" alt="" />
                                        <p>文仔</p>
                                        <img src="./images/tag-stoneLV.svg" alt="" />
                                    </div>
                                    <div class="expDate">
                                        <p>發布日期</p>
                                        <span>‧</span>
                                        <p>參加的課程</p>
                                    </div>
                                    <p class="expTxt">
                                        點婆登乙新笑打路有高且昌世了寸蝸學浪：要荷火讀母東，斥只肉拉采夕請真新共聽幸頭條哭間尾，我過讀戶尼東物朵走抓美物由，園松冒同母會彩室。昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* 頁尾區 */}
            <footer>
                <div class="footer-bgDeco">
                    <img src="./images/footer-deco.png" alt="" />
                </div>
                <div class="foot-content">
                    <img src="./images/footer-logo.svg" alt="" />
                    {/* 選單*/}
                    <ul class="menu">
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