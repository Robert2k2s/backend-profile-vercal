const express = require("express");
const app = express();

let port = 8080 || 6969;

const Football = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/80/7c/e3/807ce33226e3d5c78079f80570f7097a.jpg",
    title: "Kevin De Bruyne",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/4b/d1/1c/4bd11c71180f241a3d52a97faba54751.jpg",
    title: "Ricasdo Kaka",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/50/11/6b/50116b4bc79b7e3df43aef934b9c5cc6.jpg",
    title: "Ronaldo De Lima",
  },
];

const Skill = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/bf/e1/f2/bfe1f230ec0f4642eb6a3097835de129.jpg",
    title: "JavasCrip",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/da/1c/1b/da1c1ba16e52114d1a59e9ad666a4ae6.jpg",
    title: "React Js",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/99/49/77/994977c48fde58ac674a2d05ba5a5efb.jpg",
    title: "Node Js",
  },
];

const Game = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/54/f9/99/54f999dc342b749230f99068203f33d0.jpg",
    title: "FiFa Online",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/7f/9c/e0/7f9ce005dd5ef351e6f480e786250063.jpg",
    title: "Zing Speed Mobie",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/81/c9/6a/81c96a0ff0ed273a5c23b7610801180b.jpg",
    title: "Clash of Clan",
  },
];

const Story = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/36/7c/c0/367cc0267ec63813c76b903a0430f5e5.jpg",
    title: "Trung Chau Cong Chua",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/46/20/75/462075256b46959626e0a963ef71b134.jpg",
    title: "Ly That Da",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/90/9b/88/909b88dfe358ba34947ca7c5a032df4e.jpg",
    title: "Ly Suong Nhan",
  },
];

app.get("/api/Skill", (req, res) => {
  res.status(200).json(Skill);
});
app.get("/api/Football", (req, res) => {
  res.status(200).json(Football);
});
app.get("/api/Story", (req, res) => {
  res.status(200).json(Story);
});
app.get("/api/Game", (req, res) => {
  res.status(200).json(Game);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
