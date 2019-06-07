// 이 스크립트는 OpenOL에서 사용하는 찬양 가사를 지원하는 openlyrics 형식으로 된 xml을 생성하는 스크립트입니다. 
// openlyrics에서 정의하는 xml 형식에 관해서는 다음 페이지를 참고하세요: https://openlyrics.org/dataformat.html
// 본 스크립트를 사용하기 위해서는 자바스크립트 오브젝트 형식으로 데이터를 입력해야 합니다. 생성자에서 정의하는 요소를 참고해 주세요.
// 제작: 김경식 (kungsik@gmail.com)

class OLXml {

    constructor() {
        this.currentTime = new Date();
    }

    xmlCreate(obj) {
        let xmlDoc=new ActiveXObject("microsoft.XMLDOM");
    
        //선언문 <?xml version='1.0' encoding='euc-kr'?>
        let PInode=xmlDoc.createProcessingInstruction("xml", "version='1.0' encoding='utf-8'");
        
        //루트엘리먼트 song 추가와 속성 추가
        let rootNode=xmlDoc.createElement("song");
        rootNode.setAttribute("xmlns", "http://openlyrics.info/namespace/2009/song");
        rootNode.setAttribute("version", "0.8");
        rootNode.setAttribute("createdIn", "alphalef_song");
        rootNode.setAttribute("modifiedIn", "alphalef_song");
        rootNode.setAttribute("modifiedDate", this.currentTime);
        
        //themes  
        let themesNode = xmlDoc.createElement("themes");
        rootNode.appendChild(themesNode);
        let themesTextNode = xmlDoc.createTextNode(obj.themes);
        themesNode.appendChild(themesTextNode);

        //properties 
        let propertiesNode = xmlDoc.createElement("properties");
        rootNode.appendChild(propertiesNode);
       
        //titles < title
        let titlesNode = xmlDoc.createElement("titles");
        propertiesNode.appendChild(titlesNode);

        let titleNode, titleTextNode;
        for (let i = 0; i < obj.properties.titles.length; i ++) {
            titleNode = xmlDoc.createElement(obj.properties.titles[i].nodeName);
            titlesNode.appendChild(titleNode);
            titleTextNode = xmlDoc.createTextNode(obj.properties.titles[i].textNode);
            titleNode.appendChild(titleTextNode);
        }

        //copyright
        let copyrightNode = xmlDoc.createElement("copyright");
        propertiesNode.appendChild(copyrightNode);

        //authors
        let authorsNode = xmlDoc.createElement("authors");
        propertiesNode.appendChild(authorsNode);

        let authorNode, authorTextNode;
        for (i = 0; i < obj.properties.authors.length; i++) {
            authorNode = xmlDoc.createElement(obj.properties.authors[i].nodeName);
            authorsNode.appendChild(authorNode);
            authorTextNode = xmlDoc.createTextNode(obj.properties.autrhos[i].textNode);
            authorNode.appendChild(authorTextNode);
        }

        //verse order
        let verseOderNode = xmlDoc.createElement("verseOrder");
        propertiesNode.appendChild(verseOderNode);
        let verseOderTextNode = xmlDoc.createTextNode(obj.properties.verseOrder);
        verseOderNode.appendChild(verseOderTextNode);

        // songbooks
        let songbooksNode = xmlDoc.createElement("songbooks");
        rootNode.appendChild(songbooksNode);

        //songbook
        let songbookNode;
        for (i = 0; i < obj.songbooks.length; i++) {
            songbookNode = xmlDoc.createElement(obj.properties.songbooks[i].nodeName);
            songbooksNode.appendChild(songbookNode);
            songbookNode.setAttribute("name", obj.songbooks[i].attrName);
            songbookNode.setAttribute("entry", obj.songbooks[i].attrEntry);
        }

        //lyrics
        let lyricsNode = xmlDoc.createElement("lyrics");
        rootNode.appendChild(lyricsNode);
        
        //출력
        document.all.txtResult.value=xmlDoc.xml;
        
    }


}