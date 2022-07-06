# vuestudy

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### CSS

---

- position: relative
- position: absolute
- display: flex
- flex
  - direction: row, column
  - grow:
  - basis: px
  - shrink

### Vue.js study

---

- study 전에 html, css를 생활코딩 유튜브를 통해 수강하고 배우려고함
- [html 생활코딩](https://www.youtube.com/watch?v=OGFgdro160I&list=PLuHgQVnccGMDUzDDCKW-pCZQY-MMCX5yB&index=2) 22.06.21 ~ 22 완강
- [css 생활코딩](https://www.youtube.com/watch?v=ONcmkf07EuI&list=PLuHgQVnccGMDaVaBmkX0qfB45R_bYrV62&index=2) 22.06.28 완강
  - [css diner](https://flukeout.github.io/)
  - [css flex](https://codepen.io/enxaneta/embed/adLPwv?default-tab=result&theme-id=light)
- JS 수강
  - [JS 기초편](https://www.youtube.com/watch?v=KF6t61yuPCY) 22.06.29 완강
  - [JS 중급편](https://www.youtube.com/watch?v=4_WLS9Lj6n4) 22.06.30 수강중
  - JS는 어떠한 타입의 변수가 문제가 된지 모르기 때문에 TS를 이용하면 좋다.
  - 특이한 것
    - ES6부터 생김 - 변수 앞 let 선언
      - var는 같은 이름의 변수를 재 선언 가능
    - ⭐️ Symbol 부분 다시 봐야함 ⭐️
      - ===를 사용해도 false가 나옴
      - 유일한 프로퍼티를 사용하고 싶을 때 사용
        - property : 객체 내부의 속성
    - alert, prompt, confirm
      - 팝업 창, 값 입력 가능
    - 다른것
      - isNaN() 신기함
      - includes() = Java.container()
      - 배열 메소드들 다시보기
      - arr.map(fn) = 함수를 받아 기능 실행 후 새로운 배열 반환 - 자주사용
      - arr.find(fn) = 함수를 받아 기능 실행 후 첫 번째만 반환
      - arr.findIndex(fn) = 인덱스 반환
      - arr.filter(fn) = 만족하는 모든 요소를 배열로
      - reduce(fn) = 누산값? 배열 계속 더하기 조건을 걸어서 원하는 배열만 필터링 하는 것도 가능
    - Lodash

---

- Vue 수강
  - Vue 장∙단점?
    - 가장 빠름, 메모리도 적게 사용, 배우기 쉬움
    - 중국인의 포지션이 큼, 대기업에서 재정적 지원이없음, 플러그인 부족, 전문가∙모바일 지원부족

- Vue
  - v-model   : 데이터 동적으로 연결
    - `<input type="text" v-model="food" />`
  - v-html    : 태그가 있는 문자열을 html로 인식함
    - `<div v-html="alertmsg" />`
  - mustache  : template에서 사용
    - {{ ??? }}
  - v-bind    : 각 종 태그 연결 가능
    - `<img v-bind:src="imgsrc" alt="random" />`
    - `<a :href="naverUrl">{{ food }}</a>`
    - `:class="{red: food==='banana', 'not-good': food==='rice'}">원숭이는 {{ food }}를 좋아합니다.`
      - 클래스명: 참,거짓 조건 설정 가능, 한 클래스 안에 여러개의 설정 가능.
  - v-if      : 조건부로 렌더링 가능
    - 반드시 같은 부모안에 연속되어야한다.
    - 다른 태그가 중간에 삽입되서는 안된다.
    - `<h3 v-if="age > 18">당신은 어른입니다.</h3>`
    - `<h3 v-else-if="age > 13 && age <= 18">당신은 청소년입니다.</h3>`
    - `<h3 v-else>당신은 어른이 아닙니다.</h3>`
  - v-for     : 반복, 게시판같은 곳 사용할 듯
    - `<h2 v-for="(animal, index) in animals" :key="index">{{animal}}, {{index}}</h2>`
  - methods   : 함수
  - Event     : 매개변수로 넘기고 싶다면 $를 붙히면 된다.

---

- 데이터바인딩
  - 자주 변경될 데이터들은 저장해놔야함, 유지보수

- vue 이미지 변수로 연결하기
  - `<img :src="require(`@assets/images/${변수명}.png`)"/>`
  - [link](https://ordinary-code.tistory.com/85)

- 날짜 시간 처리
  - dayjs 사용
  - [link](https://codingcoding.tistory.com/1321)
  - [link](https://ordinary-code.tistory.com/60)

- 동적 UI 작성
  - 디자인
  - UI의 현재 상태를 데이터로 만들어둠
  - 데이터에 따라서 UI가 어떻게 보일지 작성
