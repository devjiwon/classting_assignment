## 클래스팅 과제테스트

클래스팅 과제 테스트입니다.

### 프로젝트 실행 방법
* package.json을 통해 npm install
* npm run start

### 버전정보
* node version : v16.20.2
* npm version : v8.19.4

### 추가적인 라이브러리 설치
* react-router-dom 설치 (v6.22.1)
* recoil 설치 (v0.7.7)
* axios 설치 (v1.6.7)
* sass 설치 (v1.71.1)
* react-spinners 설치 (v0.13.8)
* apexcharts 설치 (v3.46.0)

### 프로젝트 구조

```bash
├── src
│   ├── assets
│   │   └── icon
│   │       ├── icon_correct.png
│   │       └── icon_incorrect.png
│   ├── common
│   │   ├── recoil
│   │   │   └── atom.js
│   │   └── routes.js
│   ├── components
│   │   ├── style
│   │   │   └── Button.scss
│   │   └── Button.jsx
│   ├── pages
│   │   └── quiz
│   │       ├── index.scss
│   │       ├── Main.jsx
│   │       ├── Quiz.jsx
│   │       └── Result.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── index.js
├── README.md
├── README.old.md
├── package-lock.json
└── package.json
```

### 요구사항 체크 리스트 및 구현내용
**필수 구현**
- [x] 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
- [x] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
  - [x] 답안 선택 후 다음 문항 버튼을 볼 수 있다.
  - [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  - [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [ ] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
  - [ ] 퀴즈를 마칠 때까지 소요된 시간
  - [ ] 정답 개수
  - [ ] 오답 수
  - [ ] 정 오답에 대한 비율을 차트로 표기
- [ ] 오답 노트 기능

**추가 구현**
* [ ] API 에러 처리
* [ ] 보기 클릭 시, 정답 여부 모달

메모
* ~~라우팅~~
  * ~~메인~~
  * ~~퀴즈~~
  * ~~결과~~
* 퀴즈 풀기 버튼 클릭 시, 문제 API 호출 & 문제 정보 어따 저장하지 ?
  * recoil
* ~~보기는 정렬 순서~~
* ~~보기 클릭 시, 바로 정답 확인 및 하단에 다음 문항 버튼~~
  * ~~틀렸을 경우, recoil로 문제 저장하기~~
* ~~마지막 문제 보기 클릭 시, 결과 확인 보러가기 버튼~~
* 결과 화면
  * 결과 보여주기
  * 차트는 원형 차트 ?
* 오답 노트
  * 틀린 문제들만 다시 보여주기 (내가 찍은 답, 실제 정답까지)

문제와 답은 **recoil**로 저장하기


감사합니다.
