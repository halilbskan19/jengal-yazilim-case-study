## Kullanılan Teknolojiler

- **Frontend**:
    - React.js
    - Next.js
    - i18next
    - Sass
    - Tailwind CSS
    - TypeScript

- **UI**
    - Material UI (MUI)
    - Emotion

- **State Management**
    - Redux Toolkit

- **Diğer**:
    - Axios
    - ESLint / Prettier
  
## Başlarken

Bu adımlar, local ortamda projeyi çalıştırmanızı sağlayacaktır.

### Gerekli Araçlar

- Node.js (v20.17.0) - nvm kullanıyorsanız ve geçerli paket yüklüyse nvm use diyerek kolaylıkla paket geçişi sağlayabilirsiniz
- NPM

### Kurulum

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

**Depoyu Klonlayın**

```bash
git clone https://github.com/halilbskan19/jengal-yazilim-case-study.git
cd jengal-yazilim-case-study
npm install

# Projenin kök dizinine .env.local adında .env dosyasını oluşturun.
touch .env.local

# İçeriği şu şekilde olmalı:
NEXT_PUBLIC_BRANDA=brandA
NEXT_PUBLIC_BRANDB=brandB
NEXT_PUBLIC_BRANDC=brandC
NEXT_PUBLIC_DEFAULT_THEME=brandA

npm run dev

