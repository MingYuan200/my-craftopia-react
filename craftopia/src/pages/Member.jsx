import ChangePassword from '../component/ChangePassword'
import MemeberInfo from '../component/MemberInfo'
import '../scss/member.scss'
import Blob4 from "../assets/blob4.svg";
import Blob5 from "../assets/blob5.svg";
import ReserveCardsBox from '../component/ReserveCardsBox';
import SeeMore from '../component/SeeMore';

export default function Member() {
    return (
        <>
            <main id='memberArea'>


                {/* 泡泡區 */}
                <div className="bg-blob">
                    <img className='infoBlob1' src="./images/blob-3.svg" alt="" />
                    <img className='infoBlob2' src="./images/blob-4.svg" alt="" />
                    <img className='infoBlob3' src="./images/blob-5.svg" alt="" />


                    <Blob5 className='infoBlob1 left-red' />
                    <Blob4 className='infoBlob2 left-white' />
                    <Blob4 className='right-yelllow' />
                    <Blob4 className='right-brown' />
                </div>

                {/* 會員資料區 */}
                <section id="member">
                    <div className="memberWrap">
                        {/* 會員簡歷 */}
                        <div className="resume">
                            <div className="avatar">
                                <div className="ava-photo">
                                    <img src="./images/avatar/24-02.jpg" alt="" />
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
                            <MemeberInfo />

                            {/* 修改密碼  */}
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
                    <ReserveCardsBox />

                    {/* 看全部按鈕 */}
                    <div className="btn-area">

                        <SeeMore text={'See All'} imgBall={"./images/seeAll-dot.svg"} href={"#"} />

                    </div>
                </section>

                {/* 收藏區 */}
                <section id="like">
                    <div className="title">
                        <h2><img src="./images/title/收藏紀錄.svg" alt="" /></h2>
                    </div>
                    {/* 卡片區 */}
                    <div className="card-area">
                        <div className="classCard">
                            <a href="#">
                                <figure className="classPhoto">
                                    <img className="classPhoto-img" src="./images/classphoto-01.jpg" alt="" />
                                    <img className="tagHotorNew" src="./images/icon-tag/labels-hot.svg" alt="" />
                                </figure>
                                <div className="classTag">
                                    <p className="classLevel">入門</p>
                                    <p className="classTime">3hr</p>
                                </div>
                                <div className="classTitle">
                                    <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                    <img className="icons-heart" src="./images/icon-tag/icons-heart.svg" alt="" />
                                </div>
                                <div className="classPrice">
                                    <p className="classStoreName">草樹工作坊</p>
                                    <p className="classPrice">$ 3800</p>
                                </div>
                            </a>
                        </div>
                        <div className="classCard">
                            <a href="#">
                                <figure className="classPhoto">
                                    <img className="classPhoto-img" src="./images/classphoto-01.jpg" alt="" />
                                    <img className="tagHotorNew" src="./images/icon-tag/labels-hot.svg" alt="" />
                                </figure>
                                <div className="classTag">
                                    <p className="classLevel">入門</p>
                                    <p className="classTime">3hr</p>
                                </div>
                                <div className="classTitle">
                                    <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                    <img className="icons-heart" src="./images/icon-tag/icons-heart.svg" alt="" />
                                </div>
                                <div className="classPrice">
                                    <p className="classStoreName">草樹工作坊</p>
                                    <p className="classPrice">$ 3800</p>
                                </div>
                            </a>
                        </div>
                        <div className="classCard">
                            <a href="#">
                                <figure className="classPhoto">
                                    <img className="classPhoto-img" src="./images/classphoto-01.jpg" alt="" />
                                    <img className="tagHotorNew" src="./images/icon-tag/labels-hot.svg" alt="" />
                                </figure>
                                <div className="classTag">
                                    <p className="classLevel">入門</p>
                                    <p className="classTime">3hr</p>
                                </div>
                                <div className="classTitle">
                                    <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                    <img className="icons-heart" src="./images/icon-tag/icons-heart.svg" alt="" />
                                </div>
                                <div className="classPrice">
                                    <p className="classStoreName">草樹工作坊</p>
                                    <p className="classPrice">$ 3800</p>
                                </div>
                            </a>
                        </div>
                    </div>


                    {/* 看全部按鈕 */}
                    <div className="btn-area">

                        <SeeMore text={'See All'} imgBall={"./images/seeAll-dot.svg"} href={"#"} />

                    </div>
                </section>

                {/* 心得區 */}
                <section id="experience">
                    <div className="expWrapper">
                        <div className="expTitle">
                            <img className='expHeader' src="./images/title/我的心得分享.svg" alt="" />
                            <div className="btn-area">
                                
                            <SeeMore text={'See All'} imgBall={"./images/seeAll-dot.svg"} href={"#"}/>

                            </div>
                        </div>


                        <div className="newestExp">
                            <div className="Exp">
                                <div className="expPic">
                                    <img src="./images/exp-01.jpg" alt="" />
                                </div>
                                <div className="expContent">
                                    <div className="expInfo">
                                        <img src="./images/exp-id-pic-1.png" alt="" />
                                        <p>Amber</p>
                                        <img src="./images/tag-stoneLV.svg" alt="" />
                                    </div>
                                    <div className="expDate">
                                        <p>2020年12月20日</p>
                                        <span>‧</span>
                                        <p>陶冶身心造型飾品碟</p>
                                    </div>
                                    <p className="expTxt">點婆登乙新笑打路有高且昌世了寸蝸學浪：要荷火讀母東，斥只肉拉采夕請真新共聽幸頭條哭間尾，我過讀戶尼東物朵走抓美物由，園松冒同母會彩室。昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。</p>
                                </div>
                            </div>

                            <img src="./images/HrLine_rec.svg" alt="" className="hrline" />

                            <div className="Exp flip">
                                <div className="expPic">
                                    <img src="./images/exp-02.jpg" alt="" />
                                </div>
                                <div className="expContent">
                                    <div className="expInfo">
                                        <img src="./images/exp-id-pic-1.png" alt="" />
                                        <p>Amber</p>
                                        <img src="./images/tag-stoneLV.svg" alt="" />
                                    </div>
                                    <div className="expDate">
                                        <p>2021年8月15日</p>
                                        <span>‧</span>
                                        <p>Overloading 戒指 | 純銀 | 送禮自用</p>
                                    </div>
                                    <p className="expTxt">
                                        點婆登乙新笑打路有高且昌世了寸蝸學浪：要荷火讀母東，斥只肉拉采夕請真新共聽幸頭條哭間尾，我過讀戶尼東物朵走抓美物由，園松冒同母會彩室。昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！昌唱主每發，良又貫春吹工毛課北起目具京游乙草比珠，話而停吃香物洋！文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。文立黑愛身做斗菜兄貓訴正千相常兆媽；口放山放而勿見立八叫色斤跳公從。從八歌吃害都現風百。片就左，冒休夏豆西中，勿且讀男女笑。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* blob裝飾 */}
                    <div className="bg-blob">
                        <img className='expBlob2' src="./images/expBlob-2.svg" alt="" />
                        <img className='expBlob3' src="./images/expBlob-3.svg" alt="" />
                    </div>
                </section>

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
                        {/* <li>
                            <a href="">商城</a>
                            <ul>
                                <li><a href="">商城</a></li>
                            </ul>
                        </li> */}
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