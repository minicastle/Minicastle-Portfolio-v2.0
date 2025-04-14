import projectTycoon from "../dataImage/projecttycoon.png";
import mover from "../dataImage/Mover.png";
import AE from "../dataImage/AE.png";
import nature from "../dataImage/nature.png";
import musicSelector from "../dataImage/musicselector.png";
import kakao from "../dataImage/kakao.png";
import colco from "../dataImage/colco.png";
import jollyFlow from "../dataImage/jollyflow.png";
export interface ProjectSet {
  title: string;
  img: string;
  info: string;
  tags: string[];
  link: string;
  git: string;
  color: string;
  start: string;
  deg: number;
}
export const Original: ProjectSet[] = [
  {
    title: "ProjectTycoon",
    img: projectTycoon,
    info: `
# Proejct Tycoon
- 쉬운 인원 모집 활성화된 프로젝트 플랫폼

# 개발 목적
- 이 프로젝트는 Korea IT 학원내 자율 프로젝트를 위해 개발하게 되었습니다.
- 학원이라는 환경은 개인의 적성에 맞는 언어 및 스킬을 배울수 있는 공간입니다. 하지만 개발자에게 <br/> 가장 중요한 협업을 배우기에는 부족한 환경입니다.
- 때문에 학원 측에는 자율 프로젝트를 진행하는 과정이 있습니다. 하지만 **백엔드**와 **프론트엔드**는 <br/> 같은 수업을 수강하지 않고 서로에 대한 이해가 부족하기 때문에 각각의 프로젝트를 한정된 <br/> 자원으로 끝내는 경향을 가지고 있습니다.
- 위와 같은 경험은 회사에서 원하는 협업 경험이 아니기 때문에 많은 수강생들이 아쉬움을 느끼지만 서로의 이해와 <br/> 조율이 어려워 포기하고 마는 경우가 다수 있었습니다. 
- 저희는 학원과 수강생 모두가 만족할수 있는 환경을 만들기 위해 위 프로젝트를 진행하게 되었습니다.
# 기능
- 회원가입
	- 서버에 자신의 계정을 등록시키는 기능
		- 신규 등록시 아이디 중복 확인 및 비밀번호 규칙이 정해져 있습니다.
		- 등록시 회원 정보 페이지에 필요한 간단한 자기소개와 사용가능 프로그램 언어들을 입력할 수 있습니다.
- 세션 로그인
	- 서버와의 통신을 통해 세션 데이터를 받아와 로그인을 관리하는 기능
		- 로그인시 서버에서 DB 조회를 통해 세션 데이터를 생성 및 발신 받아 세션 유지 기간 동안 로그인 상태를 유지합니다.
- 게시글 CRUD
	- 프로젝트를 진행하기 위해 모집 공고를 관리하는 기능
		- 프로젝트의 상세한 인원 프로젝트의 목적과 프로젝트 로고 등을 입력할 수 있습니다.
		- 인원 모집 기간과 프로젝트 진행 예정 기간을 입력함으로써 함께 할 인원을 모집하고 프로젝트 완성시 주목도를 올릴수 있는 게시글입니다.
		- 인원 모집 기간중 작성자는 글의 내용과 사진, 모집기간 들을 수정할 수 있습니다.
		- 인원 모집이 조기에 종료될 수 있도록 인원수를 실시간으로 수정할 수 있습니다.
- 게시글 정렬 및 조건에 따른 게시물 검색
	- 자신이 원하는 조건에 해당하는 게시물 정렬 기능 및 검색 기능
		- 자신이 원하는 선정 기준을 지정해 게시물을 검색할 수 있습니다. 모집 분야, 모집 현황, 지역과 같은 조건에 맞는 게시물을 검색해 확인할 수 있습니다.
		- 무한 스크롤 기능을 활용해 초기 로딩 부하를 줄였습니다.
- 게시글 댓글
	- 해당 프로젝트에 직접적인 댓글을 입력하는 것이 가능하며 가벼운 의사표시를 위한 기능
		- DM을 사용하기 전 혹은 DM을 통해 확답을 받은 이후 인원수 조정이 되기전에 미리 표기해두는 것에 목적을둔 기능입니다.
- 게시물 스크랩 기능
	- 로그인 데이터를 기반으로 프로젝트를 스크랩해두는 기능
		- 로그인 시 세션에 저장된 스크랩 리스트를 불러옵니다.
		- 현재 어떤 프로젝트에 몇명의 사람이 관심을 가져 스크랩 했는지 볼 수 있습니다.
		- 스크랩 데이터는 DM기능 상단의 스크랩 리스트를 통해 확인이 가능합니다.
- Direct Message
	- 로그인시 사용가능한 기능으로 회원간의 소통을 위한 기능
		- 포스팅된 프로젝트에 나와있는 사용자의 닉네임을 확인후 직접 DM이 가능하며 멤버 보드에 있는 정보를 통해서도 DM이 가능합니다.
		- 프로젝트에 참여하기 위해 DM을 하는 경우 해당 프로젝트의 간단한 정보를 사용자에게 보냄으로써 어떤 프로젝트의 참여를 원하는지 확인이 가능합니다.
- 회원 페이지
	- 회원 정보를 바탕으로 조회 가능한 자기소개 기능
		- 자신의 데이터를 확인 할 수 있는 페이지와 다른 이용자의 데이터를 확인할 수 있는 페이지로 나뉘어져 있습니다.
		- 자신의 데이터를 수정가능합니다. 짧은 자기소개 및 프로필 사진, 사용가능 언어 등의 데이터를 입력 할 수 있습니다.
		- 멤버 보드를 통해 자신 이외의 사용자들의 정보를 확인해 DM을 통해 프로젝트 참여 여부를 확인 할 수 있습니다.
# 개발 언어 및 NPM 패키지
- BackEnd

| Type            | Name       | Version    |
| --------------- | ---------- | ---------- |
| Server          | CentOs     | v 7.9.2009 |
| DB              | MySql      | v 8.0.34   |
| Version Control | Git Hub    | *          |
| FrameWork       | SpringBoot | v 2.7.15   |
- FrontEnd

| Package          | Version  |
| ---------------- | -------- |
| react            | ^18.2.0  |
| react-dom        | ^18.2.0  |
| @emotion/react   | ^11.11.1 |
| @emotion/styled  | ^11.11.0 |
| axios            | ^1.4.0   |
| react-icons      | ^4.10.1  |
| vite             | ^4.4.5   |
| eslint           | ^8.45.0  |
| react-router-dom | ^6.15.0  |
  `,
    tags: ["Original", "Team Project", "Front", "Back"],
    link: "http://projecttycoon.com",
    git: "https://github.com/ReverserofCode/projecttycoon",
    color: "082359",
    start: "2023.07.24",
    deg: 5,
  },
  {
    title: "MOVER",
    img: mover,
    info: ``,
    tags: ["Original", "Kobis API", "React", "Naver API"],
    link: "https://mover-delta.vercel.app/",
    git: "https://github.com/minicastle/MovieInfo",
    color: "57C5B6",
    start: "2023.03.06",
    deg: -3,
  },
  {
    title: "Audio Effector",
    info: ``,
    img: AE,
    tags: ["Original", "Electron", "React", "WebAudioApi"],
    link: "https://github.com/minicastle/AudioEffector/releases/tag/1.0.1",
    git: "https://github.com/minicastle/AudioEffector",
    color: "38E54D",
    start: "2022.04.07",
    deg: 0,
  },
  {
    title: "Nature Republic - 제고조사기",
    img: nature,
    info: ``,
    tags: ["Original", "Electron", "React"],
    link: "https://github.com/minicastle/NatureRepublic/releases/tag/1.0.1",
    git: "https://github.com/minicastle/NatureRepublic",
    color: "54B435",
    start: "2021.10.21",
    deg: -4,
  },
  {
    title: "Music Selector",
    img: musicSelector,
    info: ``,
    tags: ["Original", "React", "Netlify"],
    link: "https://musicselector.netlify.app/",
    git: "https://github.com/minicastle/MusicSelector2",
    color: "00FFD1",
    start: "2020.08.05",
    deg: 3,
  },
];

export const Clone: ProjectSet[] = [
  {
    title: "카카오",
    img: kakao,
    info: ``,
    tags: ["Clone", "React", "contents-board"],
    link: "https://minicastle.github.io/Clone-Kakao/",
    git: "https://github.com/minicastle/Clone-Kakao",
    color: "E8F044",
    start: "2023.01.13",
    deg: 0,
  },
  {
    title: "Colco",
    img: colco,
    info: ``,
    tags: ["Clone", "React", "App"],
    link: "https://minicastle.github.io/Clone-Colco/",
    git: "https://github.com/minicastle/Clone-Colco",
    color: "EA047E",
    start: "2022.12.04",
    deg: 3,
  },
  {
    title: "Jolly-Flow",
    img: jollyFlow,
    info: ``,
    tags: ["Clone", "React", "christmas"],
    link: "https://minicastle.github.io/Clone-JollyFlow/",
    git: "https://github.com/minicastle/Clone-JollyFlow",
    color: "FF6464",
    start: "2022.11.10",
    deg: -3,
  },
];
