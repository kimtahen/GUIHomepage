2019.11
## Introduction
운영체제의 GUI를 react로 구현해 본 프로젝트 입니다. react.js를 처음 공부하고 만든 페이지여서 부족한 부분이 많습니다. 

## Description
이 당시에는 웹개발을 배우기 시작하는 단계여서 git을 사용하지 않았기 때문에 react로 만들어만 두고, 나중에 build파일만 github에 올려두었습니다. 현 시점에서 소스코드가 없다보니 github page를 사용할 수 없습니다. 따라서 직접 로컬에서 로컬 서버를 통해 실행해야 하는 문제가 있습니다.

```
git clone https://github.com/kimtahen/guipage-client-reactjs
```

```
npm install
```

```
node app.js
```

브라우저로 **localhost:8080** 으로 접속하면 됩니다.

## Preview
![Screenshot from 2022-02-11 14-31-56](https://user-images.githubusercontent.com/52111798/153542444-0f231354-c554-4778-b6af-5ce2f65b921a.png)
처음 나오는 화면에서는 자신의 닉네임을 아무거나 입력하고 connect를 클릭하면 됩니다.

![Screenshot from 2022-02-11 14-32-25](https://user-images.githubusercontent.com/52111798/153542440-535d50e1-4ab6-4823-8ea8-0afcf8defa6f.png)
바탕화면의 아이콘을 클릭하면 각 항목에 맞는 window가 열리도록 하였고, 위의 작업표시줄 에서 창을 클릭하거나 뒤에 있는 창을 클릭하면 가장 위로 올라오도록 했습니다.

![Screenshot from 2022-02-11 14-33-50](https://user-images.githubusercontent.com/52111798/153542445-2d9ef1f7-1f71-4f0d-a09c-047a231b4d3a.png)
시작버튼을 누르면 닉네임이 표시되도록 하였고, 윈도우 처럼 오른쪽에는 시계가 표시되도록 하였습니다.
