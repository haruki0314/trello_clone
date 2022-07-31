import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "😀 今からやること",
    tasks: [
      {
        id: uuidv4(),
        title: "react学習",
      },
      {
        id: uuidv4(),
        title: "2",
      },
      {
        id: uuidv4(),
        title: "3",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "今後やること",
    tasks: [
      {
        id: uuidv4(),
        title: "react学習",
      },
      {
        id: uuidv4(),
        title: "2-2",
      },
      {
        id: uuidv4(),
        title: "2-3",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "終了タスク",
    tasks: [
      {
        id: uuidv4(),
        title: "react学習",
      },
      {
        id: uuidv4(),
        title: "3-2",
      },
      {
        id: uuidv4(),
        title: "3-3",
      },
    ],
  },
];
export default dummyData;
