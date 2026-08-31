import type { WorldSection } from './scroll-world';
export const sections: WorldSection[] = [
  {
    "id": "entrance",
    "label": "校門入口",
    "title": "走進朝陽，\n日常皆是風景。",
    "body": "沿著樹蔭與日常的步伐，展開一趟溫暖的校園漫遊。",
    "tags": [
      "校門",
      "公車站",
      "YouBike"
    ],
    "still": "/media/entrance.webp",
    "endStill": "/media/entrance-end.webp",
    "clip": "/media/entrance.mp4",
    "eyebrow": "01 / 校門入口",
    "accent": "#66785E",
    "scroll": 2,
    "linger": 0.22
  },
  {
    "id": "administration",
    "label": "行政核心",
    "title": "在校園的心，\n遇見日常。",
    "body": "鐘樓、拱廊與花圃，串起行政核心的親切光景。",
    "tags": [
      "行政大樓",
      "管理大樓",
      "花園步道"
    ],
    "still": "/media/administration.webp",
    "endStill": "/media/administration-end.webp",
    "clip": "/media/administration.mp4",
    "eyebrow": "02 / 行政核心",
    "accent": "#66785E",
    "scroll": 1.6,
    "linger": 0.1
  },
  {
    "id": "learning",
    "label": "教學與設計",
    "title": "讓想法，\n在這裡發芽。",
    "body": "從教室走向交流空間，學習與創意在相遇中展開。",
    "tags": [
      "教學大樓",
      "設計大樓",
      "交流空間"
    ],
    "still": "/media/learning.webp",
    "endStill": "/media/learning-end.webp",
    "clip": "/media/learning.mp4",
    "eyebrow": "03 / 教學與設計",
    "accent": "#66785E",
    "scroll": 1.6,
    "linger": 0.1
  },
  {
    "id": "knowledge",
    "label": "圖書資訊",
    "title": "把好奇，\n交給下一頁。",
    "body": "在書頁與數位世界之間，找到自己的探索節奏。",
    "tags": [
      "圖書館",
      "資訊大樓",
      "閱讀步道"
    ],
    "still": "/media/knowledge.webp",
    "endStill": "/media/knowledge-end.webp",
    "clip": "/media/knowledge.mp4",
    "eyebrow": "04 / 圖書資訊",
    "accent": "#66785E",
    "scroll": 1.6,
    "linger": 0.1
  },
  {
    "id": "sports",
    "label": "運動休閒",
    "title": "讓生活，\n多一點舒展。",
    "body": "跑道、球場與綠地，留一段時間給身體與心情。",
    "tags": [
      "運動場",
      "多元球場",
      "體育館"
    ],
    "still": "/media/sports.webp",
    "endStill": "/media/sports-end.webp",
    "clip": "/media/sports.mp4",
    "eyebrow": "05 / 運動休閒",
    "accent": "#66785E",
    "scroll": 1.6,
    "linger": 0.1
  },
  {
    "id": "living",
    "label": "宿舍生活",
    "title": "把平凡日常，\n住成回憶。",
    "body": "回宿舍的路、熟悉的綠地，收好一天的學習與相遇。",
    "tags": [
      "學生宿舍",
      "生活機能",
      "綠地"
    ],
    "still": "/media/living.webp",
    "endStill": "/media/living-end.webp",
    "clip": "/media/living.mp4",
    "eyebrow": "06 / 宿舍生活",
    "accent": "#66785E",
    "scroll": 1.6,
    "linger": 0.1
  },
  {
    "id": "clocktower",
    "label": "鐘樓光景",
    "title": "在光影裡，\n記住朝陽。",
    "body": "抬頭望見鐘樓，讓紅磚與綠意成為記憶中的座標。",
    "tags": [
      "鐘樓",
      "紅磚",
      "光影"
    ],
    "still": "/media/clocktower.webp",
    "endStill": "/media/clocktower-end.webp",
    "clip": "/media/clocktower.mp4",
    "eyebrow": "07 / 鐘樓光景",
    "accent": "#C96C55",
    "scroll": 1.6,
    "linger": 0.1
  },
  {
    "id": "overview",
    "label": "結尾總覽",
    "title": "步步朝陽，\n處處是風景。",
    "body": "回望一路走過的地方，讓下一段校園故事從你開始。",
    "tags": [
      "校園全景",
      "學習",
      "生活"
    ],
    "still": "/media/overview.webp",
    "endStill": "/media/overview-end.webp",
    "clip": "/media/overview.mp4",
    "eyebrow": "08 / 結尾總覽",
    "accent": "#66785E",
    "scroll": 2,
    "linger": 0.22
  }
];
// Filled only with verified generated frame-conditioned connectors.
export const connectors: (string | null)[] = Array.from({length:7},(_,i)=>`/media/connector-${String(i+1).padStart(2,'0')}.mp4`);
