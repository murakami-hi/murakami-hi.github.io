export type NewsItem = {
  date: string;
  text: string;
  links?: {
    label: string;
    href: string;
    external?: boolean;
  }[];
};

export const newsItems: NewsItem[] = [
  {
    date: "2026.08.11",
    text: "大学見本市2026～イノベーションジャパンに出展します。屋内測位技術について紹介します。",
    links: [
      {
        label: "大学見本市2026",
        href: "https://innovationjapan.jst.go.jp/",
        external: true,
      },
      {
        label: "Project",
        href: "/research/themes/spatial-sensing/",
      },
    ],
  },
  {
    date: "2026.06.26",
    text: "DICOMO2026 UBI統一テーマセッションにて、招待講演「AI 時代の屋内測位：計測から空間の物理理解へ」を行いました。",
    links: [
      {
        label: "DICOMO2026",
        href: "https://tsys.jp/dicomo/2026/program/program.html",
        external: true,
      },
      {
        label: "Project",
        href: "/research/themes/spatial-sensing/",
      },
    ],
  },
  {
    date: "2026.04.10",
    text: "科研費 基盤研究(B)に採択されました。移動ロボットの死角センシングに取り組みます。",
    links: [
      {
        label: "KAKEN",
        href: "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-26K03006/",
        external: true,
      },
    ],
  },
];
