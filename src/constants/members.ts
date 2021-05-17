export type Member = {
  src: string;
  width: number;
  height: number;
  name: string;
  id: string;
  nickname: string;
};

export const members: Member[] = [
  {
    src: "/images/members/napat.jpg",
    name: "Napat Samsow",
    id: "6030171221",
    width: 960,
    height: 960,
    nickname: "Pat",
  },
  {
    src: "/images/members/thanawat.jpg",
    name: "Thanawat Jierawatanakanok",
    id: "6031020321",
    width: 640,
    height: 640,
    nickname: "Taan",
  },
  {
    src: "/images/members/tanawit.png",
    name: "Tanawit Kritwongwiman",
    id: "6031021021",
    width: 725,
    height: 725,
    nickname: "Kao-Oat",
  },
  {
    src: "/images/members/niti.jpg",
    name: "Niti Assavaplakorn",
    id: "6031031221",
    width: 949,
    height: 948,
    nickname: "Tee",
  },
];
