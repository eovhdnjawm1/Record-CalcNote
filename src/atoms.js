import { atom, selector } from "recoil";

// 상태값을 받는다
//

export const recordState = atom({
  key: "record",
  default: [],
});

export const categoryState = atom({
  key: "categoryState",
  default: [],
});

export const recordSelector = selector({
  key: "recordSelector",
  get: ({ get }) => {
    const records = get(recordState);
    return records;
  },
});
