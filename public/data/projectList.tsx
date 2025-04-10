import projectTycoon from "../dataimage/projecttycoon.png";
export interface ProjectSet {
  title: string;
  img: string;
  info: string;
  tags: string[];
  link: string;
  git: string;
  color: string;
  start: string;
}
export const Original: ProjectSet[] = [
  {
    title: "ProjectTycoon",
    img: projectTycoon,
    info: "",
    tags: ["Original", "Team Project", "Front", "Back"],
    link: "http://projecttycoon.com",
    git: "https://github.com/ReverserofCode/projecttycoon",
    color: "082359",
    start: "2023.07.24",
  },
  {
    title: "MOVER",
    img: "../dataimage/Mover.png",
    info: "",
    tags: ["Original", "Kobis API", "React", "Naver API"],
    link: "https://mover-delta.vercel.app/",
    git: "https://github.com/minicastle/MovieInfo",
    color: "57C5B6",
    start: "2023.03.06",
  },
  {
    title: "Audio Effector",
    img: "../dataimage/audioeffector.png",
    info: "",
    tags: ["Original", "Electron", "React", "WebAudioApi"],
    link: "https://github.com/minicastle/AudioEffector/releases/tag/1.0.1",
    git: "https://github.com/minicastle/AudioEffector",
    color: "38E54D",
    start: "2022.04.07",
  },
  {
    title: "Nature Republic - 제고조사기",
    img: "../dataimage/nature.png",
    info: "",
    tags: ["Original", "Electron", "React"],
    link: "https://github.com/minicastle/NatureRepublic/releases/tag/1.0.1",
    git: "https://github.com/minicastle/NatureRepublic",
    color: "54B435",
    start: "2021.10.21",
  },
  {
    title: "Music Selector",
    img: "../dataimage/musicselector.png",
    info: "",
    tags: ["Original", "React", "Netlify"],
    link: "https://musicselector.netlify.app/",
    git: "https://github.com/minicastle/MusicSelector2",
    color: "00FFD1",
    start: "2020.08.05",
  },
];

export const Clone: ProjectSet[] = [
  {
    title: "카카오",
    img: "../dataimage/kakao.png",
    info: "카카오 페이지의 클론코딩 페이지 입니다.",
    tags: ["Clone", "React", "contents-board"],
    link: "https://minicastle.github.io/Clone-Kakao/",
    git: "https://github.com/minicastle/Clone-Kakao",
    color: "E8F044",
    start: "2023.01.13",
  },
  {
    title: "Colco",
    img: "../dataimage/colco.png",
    info: "",
    tags: ["Clone", "React", "App"],
    link: "https://minicastle.github.io/Clone-Colco/",
    git: "https://github.com/minicastle/Clone-Colco",
    color: "EA047E",
    start: "2022.12.04",
  },
  {
    title: "Jolly-Flow",
    img: "../dataimage/jollyflow.png",
    info: "",
    tags: ["Clone", "React", "christmas"],
    link: "https://minicastle.github.io/Clone-JollyFlow/",
    git: "https://github.com/minicastle/Clone-JollyFlow",
    color: "FF6464",
    start: "2022.11.10",
  },
];
