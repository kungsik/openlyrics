// 이 스크립트는 OpenOL에서 사용하는 찬양 가사를 지원하는 openlyrics 형식으로 된 xml을 생성하는 스크립트입니다. 
// openlyrics에서 정의하는 xml 형식에 관해서는 다음 페이지를 참고하세요: https://openlyrics.org/dataformat.html
// 본 스크립트를 사용하기 위해서는 자바스크립트 오브젝트 형식으로 데이터를 입력해야 합니다. 생성자에서 정의하는 요소를 참고해 주세요.
// 제작: 김경식 (kungsik@gmail.com)

class OlXml {

    constructor() {
        this.currentTime = new Date();
    }

    formToJSON = elements => [].reduce.call(elements, (obj, element) => {
        
        if(element.name == 'titles' || element.name == 'authors') {
            obj.properties[element.name][0].nodeName = element.name; 
            obj.properties[element.name][0].textNode = element.value;
        }

        else if(element.name == 'copyright' || element.name == 'verseOrder') {
            obj.properties[element.name].nodeName = element.name;
            obj.properties[element.name].textNode = element.value;
        }

        else {
            obj[element.name] = element.value;
        }

        console.log(obj);
        // return data;
    }, {});

    handleFormSubmit = event => {
        event.preventDefault();
        const data = this.formToJSON(form.elements);
        // result = this.xmlCreate(data);
        console.log(data);
        // return result;    
        
    }
 
    // 입력 폼을 통해 받은 값을 갖고 xml 파일을 생성함. (IE에서는 실행안됨)
<<<<<<< HEAD
    xmlCreate(elements) {
=======
    xmlCreate = obj => {
>>>>>>> 313bca7a41d18f20b832699469a0f003e9f07070
        let xmlDoc = document.implementation.createDocument("", "", null); 

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
        let themesTextNode = xmlDoc.createTextNode(elements.theme.value);
        themesNode.appendChild(themesTextNode);

        //properties 
        let propertiesNode = xmlDoc.createElement("properties");
        rootNode.appendChild(propertiesNode);
       
        //titles < title
        let titlesNode = xmlDoc.createElement("titles");
        propertiesNode.appendChild(titlesNode);

        let titleNode, titleTextNode
        let title = elements.title.value.split('|');
        for (let i=0; i<title.length; i++) {
            titleNode = xmlDoc.createElement("title");
            titlesNode.appendChild(titleNode);
            titleTextNode = xmlDoc.createTextNode(title[i]);
            titleNode.appendChild(titleTextNode);
        }

        //copyright
        let copyrightNode = xmlDoc.createElement("copyright");
        propertiesNode.appendChild(copyrightNode);

        //authors
        let authorsNode = xmlDoc.createElement("authors");
        propertiesNode.appendChild(authorsNode);

        let authorNode, authorTextNode;
        let author = elements.author.value.split('|');
        for (let i = 0; i < author.length; i++) {
            authorNode = xmlDoc.createElement("author")
            authorsNode.appendChild(authorNode);
            authorTextNode = xmlDoc.createTextNode(author[i]);
            authorNode.appendChild(authorTextNode);
        }

        //verse order
        let verseOderNode = xmlDoc.createElement("verseOrder");
        propertiesNode.appendChild(verseOderNode);
        let verseOderTextNode = xmlDoc.createTextNode(elements.verseOrder.value);
        verseOderNode.appendChild(verseOderTextNode);

        // songbooks
        let songbooksNode = xmlDoc.createElement("songbooks");
        rootNode.appendChild(songbooksNode);

        //songbook - 여기부터 작업
        let songbookNode;
        let songbook = elements.songbook.value.split('|');
        for (let i = 0; i < songbook.length; i++) {
            songbookNode = xmlDoc.createElement("songbook");
            songbookNode.setAttribute("name", obj.songbooks[i].attrName);
            songbookNode.setAttribute("entry", obj.songbooks[i].attrEntry);
            songbooksNode.appendChild(songbookNode);
        }

        //lyrics
        let lyricsNode = xmlDoc.createElement("lyrics");
        rootNode.appendChild(lyricsNode);

        //verse
        let verseNode, linesNode, linesTextNode;
        for (let i = 0; i < obj.lyrics.length; i++) {
            verseNode = xmlDoc.createElement(obj.lyrics[i].nodeName);
            verseNode.setAttribute("name", obj.lyrics[i].attrName);
            for (let j=0; j < obj.lyrics[i].lines.length; j++) {
                linesNode = xmlDoc.createElement("lines");
                linesTextNode = xmlDoc.createTextNode(obj.lyrics[i].lines[j]);
                linesNode.appendChild(linesTextNode);
                verseNode.appendChild(linesNode);
            }
            lyricsNode.appendChild(verseNode);
        }
        return rootNode;
    }


}