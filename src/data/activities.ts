export type ActivityLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Talk = {
  date: string;
  title: string;
  event: string;
  location?: string;
  links?: ActivityLink[];
};

export type Award = {
  date: string;
  title: string;
  work: string;
  organization: string;
  links?: ActivityLink[];
};

export const invitedTalks: Talk[] = [
  {
    date: "2026.06.26",
    title: "AI 時代の屋内測位：計測から空間の物理理解へ",
    event: "DICOMO2026 UBI統一テーマセッション",
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
    date: "2025.10.29",
    title: "低コストな屋内自動運転に向けて - 屋内測位技術の体系化と信号処理の基礎",
    event: "いすゞ中央研究所 技術講演",
    links: [
      {
        label: "Project",
        href: "/research/themes/spatial-sensing/",
      },
    ],
  },
  {
    date: "2025.09.03",
    title: "SyncEcho：単一スピーカーの高次反射を活用したToF測位のための時間オフセット推定",
    event: "FIT2025 トップコンファレンス3-3 ユビキタス・パーベイシブコンピューティング",
    links: [
      {
        label: "FIT2025",
        href: "https://www.ipsj.or.jp/event/fit/fit2025/abstract/data/html/event/TCS3-3.html",
        external: true,
      },
      {
        label: "Project",
        href: "/research/themes/spatial-sensing/#acoustic-localization-virtual-sources",
      },
    ],
  },
];

export const awards: Award[] = [
  {
    date: "2024.10",
    title: "IEEE IPIN 2024 Best Paper Award",
    work: "Geometric Sound Profile: Multipath-Time-of-Flight Fingerprint for High-Accuracy Acoustic Localization",
    organization: "IEEE International Conference on Indoor Positioning and Indoor Navigation",
    links: [
      {
        label: "Project",
        href: "/research/themes/spatial-sensing/#fingerprint-localization-propagation-learning",
      },
    ],
  },
  {
    date: "2022.06",
    title: "情報処理学会論文誌ジャーナル/JIP特選論文",
    work: "NLOS環境における音響センシングを用いたスマートフォン間測距手法",
    organization: "情報処理学会",
  },
  {
    date: "2021.03",
    title: "IPSJ Outstanding Paper Award",
    work: "鏡像スピーカを用いたスマートフォン高精度3次元測位手法",
    organization: "情報処理学会",
    links: [
      {
        label: "Project",
        href: "/research/themes/spatial-sensing/#acoustic-localization-virtual-sources",
      },
    ],
  },
  {
    date: "2019.12",
    title: "情報処理学会論文誌ジャーナル/JIP特選論文",
    work: "鏡像スピーカを用いたスマートフォン高精度3次元測位手法",
    organization: "情報処理学会",
    links: [
      {
        label: "Project",
        href: "/research/themes/spatial-sensing/#acoustic-localization-virtual-sources",
      },
    ],
  },
];
