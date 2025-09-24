npm init -y
npm i express mongoose dotenv
thêm "type": "module" vào package.json để import kiểu mới 
"dev": "node BE/server.js" cho cái này vào script để chạy file server.js bằng lệnh npm run dev
npm i nodemon -D : cài nodemon vào Dependencies ,giúp cho ko cần chạy lại server mỗi khi đổi code
  khi đó phải là "dev": "nodemon BE/server.js"
tạo 1 project mới trên mongo...copy lấy passworld =>create User =>Close =>getconnectionstring =>copy lấy string đó
  dán vào env rồi nhét password vào,

- Thêm forder config vào BE ,tạo file db.js

+ Đến phần fe

cd vào fe
- npm create vite@latest .
-Cài Chakra v2
 npm i @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion 
-Cài thư viên routing
  npm i react-router-dom
npm i react-icons
npm i @chakra-ui/icons
npm install zustand