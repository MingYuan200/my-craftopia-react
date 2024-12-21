import ReserveCard from "./ReserveCard";

export default function ReserveCardsBox() {
    const cardsData = [
        {
            imgSrc: './images/classIMG.jpg',
            stateTag: '即將到來',
            title: '聖誕禮物首選!皮革證件套組~適合初學者',
            dateTime: '12月07日(週六)13:30-15:30',
            attendees: '成人1位',
            classType: '證件卡夾',
            isFinished: false,
            buttonText: '修改訂單',
        },
        {
            imgSrc: './images/classIMG.jpg',
            stateTag: '已完成',
            title: '聖誕禮物首選!皮革證件套組~適合初學者',
            dateTime: '12月07日(週六)13:30-15:30',
            attendees: '成人1位',
            classType: '證件卡夾',
            isFinished: true,
            buttonText: '分享心得',
        },
    ];

    return (
        <div className="reserve-cardsBox">
            {cardsData.map((card, index) => (
                <ReserveCard key={index} {...card} />
            ))}
        </div>
    )
}