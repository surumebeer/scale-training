import { SubScaleName } from "./types";

type SubScaleNames = Record<number, SubScaleName[]>;

export const subScaleNames: SubScaleNames = {
  0: [
    {
      id: 0,
      name: "アイオニアン・スケール",
      degrees: [0, 2, 4, 5, 7, 9, 11],
    },
    {
      id: 1,
      name: "ドリアン・スケール",
      degrees: [0, 2, 3, 5, 7, 9, 10],
    },
    {
      id: 2,
      name: "フリジアン・スケール",
      degrees: [0, 2, 3, 5, 7, 8, 10],
    },
    {
      id: 3,
      name: "リディアン・スケール",
      degrees: [0, 2, 4, 6, 7, 9, 11],
    },
    {
      id: 4,
      name: "ミクソリディアン・スケール",
      degrees: [0, 2, 4, 5, 7, 9, 10],
    },
    {
      id: 5,
      name: "エオリアン・スケール",
      degrees: [0, 2, 3, 5, 7, 8, 10],
    },
    {
      id: 6,
      name: "ロクリアン・スケール ",
      degrees: [0, 1, 3, 5, 6, 8, 10],
    },
  ],
  1: [
    {
      id: 0,
      name: "aアイオニアン・スケール",
      degrees: [0, 2, 3, 5, 7, 8, 10],
    },
    {
      id: 1,
      name: "ドリアン・スケール",
      degrees: [0, 2, 4, 5, 7, 9, 11],
    },
    {
      id: 2,
      name: "フリジアン・スケール",
      degrees: [0, 2, 3, 5, 7, 8, 10],
    },
    {
      id: 3,
      name: "リディアン・スケール",
      degrees: [0, 2, 4, 6, 7, 9, 11],
    },
    {
      id: 4,
      name: "ミクソリディアン・スケール",
      degrees: [0, 2, 4, 5, 7, 9, 10],
    },
    {
      id: 5,
      name: "エオリアン・スケール",
      degrees: [0, 2, 3, 5, 7, 8, 10],
    },
    {
      id: 6,
      name: "ロクリアン・スケール ",
      degrees: [0, 1, 3, 5, 6, 8, 10],
    },
  ],
  2: [
    {
      id: 0,
      name: "ハーモニック・マイナー・スケール",
      degrees: [0, 2, 3, 5, 7, 8, 11],
    },
    {
      id: 1,
      name: "ロクリアン♮6・スケール",
      degrees: [0, 1, 3, 5, 6, 9, 10],
    },
    {
      id: 2,
      name: "アイオニアン♯5・スケール",
      degrees: [0, 2, 4, 5, 8, 9, 11],
    },
    {
      id: 3,
      name: "ドリアン♯4・スケール",
      degrees: [0, 2, 3, 6, 7, 9, 10],
    },
    {
      id: 4,
      name: "フリジアン・メジャー・スケール",
      degrees: [0, 1, 4, 5, 7, 8, 10],
    },
    {
      id: 5,
      name: "リディアン♯2・スケール	",
      degrees: [0, 3, 4, 6, 7, 9, 11],
    },
    {
      id: 6,
      name: "スーパー・ロクリアン♭7・スケール",
      degrees: [0, 1, 3, 4, 6, 8, 9],
    },
  ],
};