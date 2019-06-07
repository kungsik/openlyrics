let obj = {
    themes: "chan-song-ga-default-theme",
    properties: {
        titles: [
            {
                nodeName: "title",
                textNode: "구 찬송가 397 장"
            }
        ],
        copyright: "Public Domain",
        authors: [
            {
                nodeName: "author",
                textNode: "한국찬송가공회"
            }
        ],
        verseOrder: "v1 c1 v2 c1 v3 c1"
    },
    songbooks: [
        {
            nodeName: "songbook",
            attrName: "찬송가",
            attrEntry: "397"
        }
    ],
    lyrics: [
        {
            nodeName: "verse",
            attrName: "v1",
            lines: [
                "찬송가 397 장 1절.<br/>주 믿는 사람 일어나 힘을 합하여 이 세상 모든 마귀를 다쳐서 멸하세 저 앞에 오는 적군을 다 싸워 이겨라 주 예수 믿는 힘으로 온 세상 이기네"
            ]
        },
        {
            nodeName: "verse",
            attrName: "v2",
            lines: [
                "온 인류 마귀 궤휼로 큰 죄에 빠지니 진리로 띠를 띠고서 늘 기도드리세 참 믿고 의지하면서 겁없이 나갈 때 주 예수 믿는 힘으로 온 세상 이기네"
            ]
        },
        {
            nodeName: "verse",
            attrName: "v3",
            lines: [
                "끝까지 이긴 사람은 흰옷을 입히고 또 영생복을 주시니 참 기쁜일일세 이 어둔 세상 지나서 저 천성 가도록 주 예수 믿는 힘으로 온 세상 이기네"
            ]
        },   
        {
            nodeName: "verse",
            attrName: "c1",
            lines: [
                "믿음이 이기네 믿음이 이기네 주 예수를 믿음이 온 세상 이기네"
            ]
        }         
    ]

}

let newXml = new OLXml();
let xmlResult = newXml.xmlCreate(obj);
document.getElementById('result').innerText = xmlResult;