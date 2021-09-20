export type ScaleNames = ScaleName[];

export type ScaleName = {
  id: number;
  name: string;
};

export type SubScaleNames = Record<number, SubScaleName[]>;

export type SubScaleName = {
  id: number;
  name: string;
  degrees: Sounds;
};

export type KeyName = string;

export type KeyNames = KeyName[];

export type Sounds = number[];
