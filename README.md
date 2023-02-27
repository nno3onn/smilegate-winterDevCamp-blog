# Smilegate WinterDevCamp 개인 프로젝트

## 🍒 프로젝트 주제

**BLOG**

## 시연 영상 및 사진

회원가입 및 로그인
![회원가입 및 로그인](https://user-images.githubusercontent.com/60952506/221483777-eaff51f5-def8-41cc-8e19-09c9100ae715.gif)

댓글 CRUD
![댓글](https://user-images.githubusercontent.com/60952506/221484873-1d670e2f-f508-4157-99b9-20395d1994e3.gif)


글 좋아요
![글 좋아요](https://user-images.githubusercontent.com/60952506/221484183-c86c923e-9f28-4259-bfba-1f35fabcfc96.gif)


글 쓰기 - 일반
<img width="1080" alt="글쓰기" src="https://user-images.githubusercontent.com/60952506/221483899-0c4b0a6b-4503-4081-9155-914cb7864c50.png">

글 쓰기 - 썸네일 등록 (출간하기 버튼 클릭 시)

<img width="1080" alt="글쓰기 썸네일 등록" src="https://user-images.githubusercontent.com/60952506/221483948-1b4631d0-9c03-4b5e-a447-e6f74f1e93ff.png">


글 보기
<img width="1080" alt="글" src="https://user-images.githubusercontent.com/60952506/221483915-38fab51e-f25e-40a7-805b-7b01d3a5d30c.png">


글 삭제
<img width="1080" alt="글 삭제 모달" src="https://user-images.githubusercontent.com/60952506/221483875-597669e8-1188-4597-812e-3d1dfaa22278.png">




## ⚠️ 필수 사항 및 세부 고려 사항

### Requirements

- 글 쓰기/수정
- 글 목록/삭제
- 댓글
- UI디자인
- 관리자도구
- 좋아요 (option)
- Trackback (option)
- RSS (option)
- 인증(로그인) 기능은 제외 (되어있다고 가정)

### Details

- 최신글( )개를 블로그형태 Layout으로보여주고, 각 기능에 접근 가능한 UI를 표시

- 글 쓰기/수정

  Plain Text 글 쓰기 형태로 개발해도 되지만, 웹 에디터를 연결해서 HTML 및 사진 등까지

  지원하면 더 좋음

- 글 목록/삭제

  게시물 페이지네이션, 삭제처리할 때의 권한 및 컨텐츠 관리를 고려

- 댓글

  게시물과 댓글의 구조로직, 댓글수와 댓글작성자 등 관련된 퍼포먼스 고민

- 관리자기능

  설정, 게시물, 댓글 등 모든 내용 관리



## 🖥️ 기술 스택

- Next.js, TypeScript, Redux, Styped Components
- MySQL
- AWS RDS, S3


## 📔DB 설계

https://www.erdcloud.com/d/avSHhH4wFTvaE6GjD

![smg-winterdevcamp-blog](https://user-images.githubusercontent.com/60952506/221479279-8da08560-b754-4924-9352-ecfb96dfb9ac.png)




## 프로젝트 목표 설정

### 🏃‍♂️개인 목표

- SQL를 공부하고 프로젝트에서 직접 사용해보면서 SQL에 대한 이해도 높이기
- TypeScript 경험 부재 → TypeScript를 직접 사용해보면서 타입 언어의 장점을 체득하기
- velog를 참고하면서 좋은 UI, UX란 무엇인지 고민하기
- 코드 한 줄을 작성하더라도 허투루 작성하지 않고 논리적 견해를 가지고 작성하기
- 목표한 내용들을 이루면서 개인 프로젝트 끝까지 **완성**하기



### ⛳ 프로젝트 목표(List)

#### 1차 목표

- ✅ 회원가입 / 로그인 / 로그아웃 -> (인증 제외)
- ✅ 포스트 작성(C), 읽기(R), 수정(U), 삭제(D)
- ✅ 댓글(CRUD)
- ✅ UI 디자인
- ✅ 관리자 기능 (게시물, 댓글 등 모든 내용 관리)

#### 2차 목표

- ✅ 포스트 좋아요
- 대댓글
- 댓글/대댓글 좋아요
- 포스트 목록 무한 스크롤
- Trackback
- RSS
- 글 검색 기능



### 🕹️구현 기능(Detail)

* ✅ 회원가입 및 로그인
* ✅ 최신글 n개를 블로그 형태 Layout으로 보여주고, 각 기능에 접근 가능한 UI를 표시하기
* 포스트 작성 / 수정
  - ✅ 웹 에디터를 연결하여 HTML 및 사진 등까지 지원 (React-Quill 라이브러리 사용)
* 포스트 목록 / 삭제
  - ✅ 목록 로딩 시 loading skeleton 띄우기 (React Loading Skeleton 라이브러리 사용)
  - 포스트 목록 검색 기능
  - 포스트 목록 무한 스크롤 적용
* 댓글 CRUD
  * ✅ 본인이 작성한 댓글은 수정 및 삭제 가능
* 관리자 기능 **(관리자 계정 - id: nno3onn, password: password1)**
  - ✅ 포스트 작성/수정/삭제 및 댓글 삭제 가능
* 좋아요
  - ✅ 글 좋아요 기능
  - 댓글/대댓글 좋아요 기능
* RSS
* Trackback



## 구현 시 발생한 문제 사항 및 느낀점

**💫 DB에 썸네일 이미지 저장하기**

* 본래 포스트의 썸네일 이미지를 저장할 때 파일을 Blob로 변환하고 DB에 저장하고자 하였으나, 구현하는 과정에서 생각하는 바대로 잘 이뤄지지 않고 지금 방법이 효율적인 방법인지 의문이 들어서 지인에게 자문을 구하였더니 Blob로 변환하고 DB에 저장하면 DB에 저장되는 데이터의 크기가 너무 커지므로 오히려 AWS S3와 같은 클라우드 서비스를 사용하는 것이 더 효율적일 수 있다는 의견을 들었고, 의견을 반영하여 AWS S3를 추가로 사용하여 이미지의 url을 DB에 저장하도록 변경하였습니다. 프로젝트를 구현하기 이전에 구현할 요소 하나하나를 살펴보고 더 디테일하게 설계해야한다는 것을 깨달았습니다.

**💫  처음 사용해보는 기술들: MySQL, TypeScript**

* 추후 팀프로젝트에서 MySQL과 TypeScript를 사용할 예정이라 미리 사용해보고자 이번 프로젝트에 적용해보았습니다. MySQL과 TypeScript 둘다 사용해본 경험이 없어서 공부하고 프로젝트에 적용하는데에 생각보다 시간이 많이 소요된 것 같습니다. TypeScript에 익숙하지 않아서 이번 프로젝트에 TypeScript를 완벽하게 사용하진 못했지만, 계속 꾸준히 공부하여 다음 팀프로젝트에는 빠짐 없이 꼼꼼하게 적용하려 합니다.

**💫 Redux에 대한 이해: redux-toolkit, redux-thunk**

* 로그인한 사용자의 정보를 저장하기 위해서 리덕스를 사용하였습니다. 단순 리덕스의 개념은 알고 있었으나 기능을 구현하기 위해 좀 더 공부해보니 리덕스를 좀 더 쉽게 사용할 수 있는 redux-toolkit과 리듀서에 도달하기 전 비동기 처리를 해주는 redux-thunk를 알게 되었고 직접 사용해보았습니다. 세팅하고 적용하는 과정에서 헤매기도 하였으나 프로젝트에 성공적으로 적용하고 나니 단순 리덕스를 사용하는 것보다 더 짧고도 직관적이게 코드를 작성할 수 있었습니다. 리덕스 관련 라이브러리를 더 찾아보고 다른 사람들의 코드도 살펴보면서 공부하고 다음 팀 프로젝트에도 직접 적용해보면서 직관적이고 깔끔하게 코드를 작성하는 방법을 배울 것입니다.

**💫 styled-components로 깔끔하게 스타일 적용하기**

* 프로젝트를 구현하면서 스타일이 정리가 되지 않고 하드코딩이 가득한 제 코드가 마음에 들지 않았고, 어떻게 하면 더 효율적으로 코드를 작성하고 정리할 수 있을까에 대해 고민을 하게 되면서 style-components의 다양한 기능에 대해 알게 되었습니다. createGlobalStyle을 사용하여 전체에 스타일을 적용하였고, 현재 DefaultTheme를 사용하여 하드코딩으로 작성한 스타일 상수들을 정리하며 적용해나가는 중입니다. 앞으로도 styled-components의 더 다양한 기능들을 공부하며 코드를 하나씩 정리해나갈 것입니다.

**💫 github 커밋(...)**

* 프로젝트의 총 커밋 개수와 커밋 메시지를 살펴보니 너무 잘게 쪼개어 자주 커밋을 한 것 같습니다(...). 팀프로젝트를 진행할 때 문제가 없도록 하기 위해 어느 단위로 커밋을 해야 적당한지 알아보고, 추가로 깃허브 협동 방법도 미리 익혀야겠습니다.



## 개발관련 과정에서 궁금했던 부분

* 현업에서는 **이미지를 저장**할 때 어떤 방법 가장 많이 사용되며, 어떤 방법이 가장 효율적인가요?
* 전체 **글**을 CRUD하고 관리할 때 지금처럼 필요에 따라 불러오는 방법과 redux(+thunk)를 이용하는 방법 둘 중 어느 것이 더 효율적인지 궁금합니다. 혹은 더 좋은 방법이 있을까요?
* 위의 질문과 비슷하게, 글과 관련된 **댓글**을 불러오고 관리할 때 어떤 방법이 현업에서 많이 사용되는지 궁금합니다.
* 깃허브 사용 시 기능을 어느 정도 구현했을 때 커밋하는 것이 적당하나요? (ㅠㅠ)
* 관리자 기능으로 전체 글 CRUD와 댓글 삭제를 구현하였는데 제가 요구해주신 바를 잘 이해하고 구현했는지 잘 모르겠습니다.. 관리자 기능이라면 어떤 기능이 더 있을까요?
* 추가로 공부하면 좋을 주제나 참고하면 좋을 자료를 추천받을 수 있을까요?

