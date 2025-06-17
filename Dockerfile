FROM node:20-bullseye-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    git \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/kawaki20/CELI1.git /ovl_bot

WORKDIR /ovl_bot

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "Ovl"]
