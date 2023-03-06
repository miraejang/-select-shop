# Select Shop
사용자가 물건을 구입할 수 있고, 관리자는 상품을 관리할 수 있는 쇼핑몰 앱입니다.   
https://select-shop.netlify.app   
　　　   
## 사용 기술
![image](https://user-images.githubusercontent.com/45534877/223015746-26a1430d-4374-423f-91fa-f82d9d5557aa.png)   
![image](https://user-images.githubusercontent.com/45534877/223015876-cc49972a-72ff-4425-b5ba-0dac0543469b.png)   
![image](https://user-images.githubusercontent.com/45534877/223016045-d00eedb4-6d6a-441f-89c7-d9582db1fc11.png)   
![image](https://user-images.githubusercontent.com/45534877/223016606-38f42f2e-949a-497a-b5c0-e35e3beeeded.png)   
![image](https://user-images.githubusercontent.com/45534877/223016182-8e14198d-f587-4ded-9b3c-b0f999b7c6ea.png)   
![image](https://user-images.githubusercontent.com/45534877/223011885-62f0c74e-6c14-4e7b-81c3-cc6a31a2c042.png)  
![image](https://user-images.githubusercontent.com/45534877/223020255-4fe8cc88-7be6-4c3b-a67c-097ad95eedd5.png) ![image](https://user-images.githubusercontent.com/45534877/223018781-4434bc63-6bc4-4223-938a-f8d6e29a5827.png)
![image](https://user-images.githubusercontent.com/45534877/223018562-8e653bb4-f1b7-4f92-bbbd-87be97dbb050.png)   
![image](https://user-images.githubusercontent.com/45534877/223019827-4f1a3fad-7b28-4cd7-9f8e-631b6944650c.png)   
![image](https://user-images.githubusercontent.com/45534877/223061890-5f89c2f6-d50d-4e89-95dd-e3af6978a928.png)   
　　　　<img src="https://img.shields.io/badge/uuid-darkblue?style=for-the-badge">  
　　　   
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
　   
　   

