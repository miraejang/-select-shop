# Select Shop
사용자가 물건을 구입할 수 있고, 관리자는 상품을 관리할 수 있는 쇼핑몰 앱입니다.   
https://select-shop.netlify.app   
　　　   
## 사용 기술
React, Yarn Berry, React Query, React router, React icons, Firebase (Authentication, Realtime Database), Cloudinary, uuid, Netlify   
　　　   
## 기술 상세 내용
### React
  - Custom hooks 사용   
  - Context API사용   
    - 권한없는 페이지 접근 방지          
### React Query
  - 비동기 데이터 관리   
  - StaleTime 지정   
  - Mutation을 통한 데이터 업데이트 실시간 반응   
### Firebase
  - Authentication
    - 구글 아이디를 통한 로그인
  - Realtime Database
    - 상품, 유저 정보등의 데이터를 저장하고 동기화
### cloudinary
  - 이미지 저장, 최적화
### Netlify
  - CD 배포   
　　　   
## 구현 기능
### 메인페이지
![image](https://user-images.githubusercontent.com/45534877/223000171-0f188c45-5fa8-4dbb-9d5d-5041d22b0bce.png)   
　   
　   
　   
### 제품 상세페이지
- 상품을 장바구니에 추가
- 관심있는 아이템을 ❤ 버튼으로 저장   
　   
![image](https://user-images.githubusercontent.com/45534877/223000227-519b28e8-b2f5-4815-b938-ada48fa0da90.png)   
　   
　   
　   
### 장바구니
- 장바구니에 추가된 아이템 확인
- 장바구니의 아이템 수량 수정
- 장바구니의 아이템 삭제
- 총 주문 상품의 금액과 배송비를 계산   
　   
![image](https://user-images.githubusercontent.com/45534877/223000302-e2b25500-3147-4b97-a646-e74ad48b9585.png)   
　   
　   
　   
### 마이페이지
- 저장된 관심있는(❤) 아이템 보기   
　   
![image](https://user-images.githubusercontent.com/45534877/223000437-95631ec7-9814-4690-93d2-99831c05c0e5.png)   
　   
　   
　   
### 관리자 페이지
- __상품 관리__
  - 등록된 상품 리스트 확인
  - 등록된 상품 삭제   
　   
![image](https://user-images.githubusercontent.com/45534877/223000879-6c9a6287-dbd7-44ea-84b2-3a7802cc8571.png)   
　   
　   
- __상품 등록__
  - 새로운 상품 등록
  - 상품 등록시 상품 등록 버튼 비활성화
  - 상품 등록 완료시 등록 완료 메세지를 보여줌   
　   
![image](https://user-images.githubusercontent.com/45534877/223000982-80a80fc9-09d5-462b-adff-b278bf1b18bf.png)   
　   
　   

