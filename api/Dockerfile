# Node.js公式イメージ
FROM node:24

# 作業ディレクトリ
WORKDIR /app

# 依存関係だけ先にコピー（キャッシュ効かせる）
COPY package*.json ./

RUN npm install

# アプリ全体コピー
COPY . .

# NestJSのデフォルトポート
EXPOSE 3000

# 開発サーバ起動
CMD ["npm", "run", "start:dev"]