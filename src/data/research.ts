export type Publication = {
  title: string;
  venue?: string;
  year?: number;
  doi?: string;
  pdf?: string;
  code?: string;
  video?: string;
};

export type ResearchProject = {
  slug: string;
  title: string;
  summary: string;
  badge: string;
  badgeHref?: string;
  badges?: {
    label: string;
    href?: string;
    type?: "venue" | "award" | "muted";
  }[];
  venue?: string;
  award?: string;
  status?: "published" | "ongoing" | "preparation";
  image?: string;
  idea: string;
  themeId: string;
  publications: Publication[];
  note?: string;
  media?:
    | {
        type: "youtube";
        id: string;
        title: string;
      }
    | {
        type: "image";
        src: string;
        alt: string;
      };
  links?: {
    project?: string;
    external?: string;
  };
};

export type ResearchTheme = {
  id: string;
  title: string;
  titleEn: string;
  image: string;
  lead: string[];
  projects: ResearchProject[];
};

export const researchIntro =
  "私は、実世界の現象や人・モノ・環境の相互作用に潜む情報を読み解き、空間や環境を理解する研究に取り組んでいます。現在は、反射や伝搬を活用した『屋内測位・空間センシング』と、センシング・AI・制御を統合した『建物インテリジェンス』を中心に研究を進めています。";

export const researchThemes: ResearchTheme[] = [
  {
    id: "spatial-sensing",
    title: "屋内測位・空間センシング",
    titleEn: "Indoor Localization / Spatial Sensing",
    image: "/assets/indoor_localization.png",
    lead: [
      "音・電波・光などの<strong>反射や伝搬に含まれる情報を読み解き、人やロボットの位置、空間の状態を捉えるセンシング技術</strong>を研究しています。特に、従来はノイズや誤差要因とされてきた反射波を新たな情報源（仮想アンカー）として積極的に活用し、幾何・物理モデルとAIによる学習の両面から、<strong>高精度と頑健性を両立する次世代の屋内測位技術</strong>の実現を目指しています。",
      "音響を中心に、可視光、UWB、BLE、IMUなど幅広いセンシング技術を扱い、ロボット・ドローントラッキングへと対象を広げています。さらに現在は、これまで培ってきた反射・伝搬情報の活用を発展させ、<strong>極めて少ないインフラで成立する屋内測位</strong>にも取り組んでいます。",
    ],
    projects: [
      {
        slug: "acoustic-localization-virtual-sources",
        title: "反射波を仮想アンカーとして活用する屋内測位",
        summary:
          "従来の屋内測位では、送信機から受信機へ直接届く<strong>直接波を利用して位置を推定する</strong>ことが一般的です。一方、実際の屋内では、音や電波は壁や床、天井といった構造物で反射し、これらの反射波は測位精度を低下させる誤差要因として扱われてきました。\n\n本プロジェクトでは、こうした<strong>反射波を新たな情報源として積極的に利用する屋内測位技術</strong>を研究しています。例えば音響測位では、反射波を壁や床の向こう側に存在する「鏡像スピーカ」から届く信号として捉え、幾何・物理モデルによって読み解くことで、鏡像スピーカを仮想的なアンカーとして利用し、少数のスピーカから高精度に位置を推定します。\n\nその鍵となるのが、多数の反射波から<strong>利用すべき信号を正しく特定する技術</strong>です。信号処理に加え、反射経路の確率モデル、送信機の指向性・周波数特性、幾何的制約などを組み合わせて反射波を識別します。こうした<strong>反射を情報へ変換する考え方と、それを支える信号処理・推定・モデリング技術</strong>が、その後の屋内測位研究につながる基盤となっています。",
        badge: "ACM SenSys'24",
        badgeHref: "/publications/#syncecho-sensys-2024",
        badges: [
          {
            label: "情報処理学会論文誌 2020年度論文賞",
            href: "/publications/#ipsj-outstanding-paper-2020",
            type: "venue",
          },
          {
            label: "ACM SenSys'24",
            href: "/publications/#syncecho-sensys-2024",
            type: "venue",
          },
        ],
        venue: "ACM SenSys",
        status: "published",
        themeId: "spatial-sensing",
        idea: "反射波を仮想音源として捉え、空間の幾何情報として利用する。",
        publications: [],
        media: {
          type: "image",
          src: "/assets/syncecho_overview.jpg",
          alt: "SyncEchoの概要図。直接波では測距が難しい状況に対し、高次反射を用いて時刻ずれを推定する。",
        },
      },
      {
        slug: "fingerprint-localization-propagation-learning",
        title: "複雑な反射・伝搬特性を学習する位置指紋測位",
        summary:
          "反射波を鏡像スピーカや仮想アンカーとして幾何的に利用するアプローチは強力ですが、実環境では多数の反射や遮蔽が重なり合います。すべての反射波を人間が識別し、明示的なモデルとして利用するには限界があります。\n\n本プロジェクトでは、音の到達時間や相関波形に現れる<strong>直接波・反射波の複雑なパターンを位置指紋として捉え、深層学習によって位置推定に結びつける技術</strong>を研究しています。人間の目では区別が難しい高次反射や伝搬特性も、AIによって利用可能な情報として引き出せるのではないか、という考え方に基づいています。\n\n少数の実測データに加え、シミュレーターによる大規模な学習データを組み合わせることで、実環境ごとの反射・伝搬特性を効率的に学習します。近年は、データ駆動型の学習に物理モデルや幾何的制約を組み込む<strong>Physics-informedなアプローチ</strong>に特に注目しています。",
        badge: "IEEE IPIN Best Paper Award",
        badgeHref: "/publications/#geometric-sound-profile-ipin-2024",
        badges: [
          {
            label: "IEEE IPIN'24 Best Paper Award",
            href: "/publications/#geometric-sound-profile-ipin-2024",
            type: "venue",
          },
        ],
        award: "IEEE IPIN Best Paper Award",
        status: "published",
        themeId: "spatial-sensing",
        idea: "複雑な反射・伝搬特性をデータから学習し、位置推定に利用する。",
        publications: [],
        media: {
          type: "image",
          src: "/assets/位置指紋.png",
          alt: "音響位置指紋測位の概要図。直接波と反射波を含む相関波形をCNNで学習し、スマートフォンの2次元位置を推定する。",
        },
      },
      {
        slug: "visible-light-drone-tracking-floor-reflection",
        title: "可視光ドローントラッキング",
        summary:
          "<strong>夜間巡視や建物点検</strong>などの用途に向けて、障害物の影響を受けにくく、屋内でも安定して飛行できるドローンへの期待が高まっています。安全な制御には、<strong>GNSSが使えない屋内環境でも高速かつ高精度にドローンの位置・向きを推定する技術</strong>が必要です。\n\n本プロジェクトでは、天井に設置した変調LEDとドローンに標準装備される着陸用の下向きカメラを活用し、床面に反射した光からドローンの状態を推定する可視光測位に取り組んでいます。ローリングシャッター画像に現れる周波数パターンからLEDの到来角（AoA）を読み出すことで、追加センサを抑えた屋内ドローン測位を実現します。\n\n本研究は、北海道大学 <a href=\"https://iis-lab.ist.hokudai.ac.jp/\" target=\"_blank\" rel=\"noreferrer\">知能情報学研究室</a> のリードのもと、ともに進めています。",
        badge: "IEEE PerCom'26",
        badgeHref: "/publications/#refdrone-percom-2026",
        venue: "IEEE PerCom",
        status: "published",
        themeId: "spatial-sensing",
        idea: "床面で反射した可視光から、ドローンの状態を推定する。",
        publications: [],
        media: {
          type: "youtube",
          id: "IhsCV8Qep0g",
          title: "床反射光を利用した可視光ドローントラッキングのデモ動画",
        },
      },
      {
        slug: "minimal-infrastructure-indoor-localization",
        title: "ミニマルインフラによる屋内測位",
        summary:
          "これまで培ってきた反射・伝搬情報の活用をさらに発展させ、できるだけ少ないインフラで高精度かつ頑健な屋内測位を実現することを目指しています。現在は、<strong>スパースなアンカー配置</strong>に加え、<strong>アンカー間、およびアンカー・タグ間が非同期な環境でも成立する屋内測位技術</strong>の研究を進めています。",
        badge: "Ongoing Project",
        status: "preparation",
        themeId: "spatial-sensing",
        idea: "少ないインフラで実用的な屋内測位を実現する。",
        publications: [],
      },
    ],
  },
  {
    id: "building-intelligence",
    title: "建物インテリジェンス",
    titleEn: "Building Intelligence",
    image: "/assets/building_intelligence.png",
    lead: [
      "建物の中では、人・環境・設備が互いに影響しながら絶えず変化しています。こうした<strong>人・環境・設備の相互作用をセンシングとAIによって読み解き、建物やそこで過ごす人の状態を理解する「建物インテリジェンス」</strong>の研究に取り組んでいます。",
      "IoTセンシングやロボティクスによる環境計測から、LLMによる人や環境の理解、強化学習による空調制御まで、<strong>センシング・AI・制御を横断し、実世界を理解して働きかける知能システム</strong>の実現を目指しています。",
    ],
    projects: [
      {
        slug: "mobile-robot-building-environment-sensing",
        title: "自律移動ロボットによる建物環境センシング",
        summary:
          "建物内の環境は、空調設備の動作、人の滞在、家具や間仕切り、外気条件などの影響を受けて、時間的・空間的に変化します。一方で、固定センサだけでは計測点が限られるため、居住者が実際に過ごす場所の環境分布を十分に捉えきれない場合があります。\n\n本プロジェクトでは、自律移動ロボットに<strong>温度・湿度・CO2・気流などの環境センサ</strong>を搭載し、建物内を移動しながら環境データを取得・可視化するシステムを研究しています。さらに、<strong>鉛直方向に伸びるアクチュエータ</strong>を活用することで、床面付近だけでなく高さ方向の変化も含めた<strong>3次元的な環境データの取得</strong>を可能にします。\n\nロボットが空間内を巡回して計測することで、固定センサでは見えにくい局所的な環境差や時間変化を捉えます。こうして得られた高密度な環境データは、建物の状態理解、設備運用の改善、快適性や省エネルギー性を考慮した制御へとつなげるための基盤になります。",
        badge: "CAADRIA 2025",
        badgeHref: "/publications/#mobile-robot-hvac-caadria-2025",
        venue: "CAADRIA",
        status: "published",
        themeId: "building-intelligence",
        idea: "移動ロボットを用いて、建物内の環境分布を詳細にセンシングする。",
        publications: [],
        media: {
          type: "image",
          src: "/assets/環境センシング.jpg",
          alt: "自律移動ロボットに環境センサと鉛直方向に伸びるアクチュエータを搭載し、建物内の環境データを取得する様子。",
        },
      },
      {
        slug: "llm-policy-teacher-hvac-rl",
        title: "LLMの知識を活用した強化学習による空調制御",
        summary:
          "建物の空調制御では、快適性と省エネルギー性を両立するために、室内環境、人の利用状況、設備の応答を考慮した意思決定が求められます。一方で、モデルフリー強化学習は環境についての事前知識を持たないため、十分な制御方策を獲得するまでに多くの試行錯誤を必要とします。\n\n本プロジェクトでは、<strong>LLMが持つ一般知識をPolicy Teacherとして活用</strong>し、強化学習の探索を支援することで、より効率的に空調制御を学習する手法を研究しています。人間の知識や設計意図を自然言語で扱えるLLMを介して、<strong>センシングされた環境情報を意思決定や制御へつなげる</strong>ことを目指しています。\n\nまた、LLMによる自然言語理解を、フリーアドレスオフィスにおける座席推薦などにも応用しています。利用者の要求を環境情報と結びつけることで、<strong>人の状態や意図を踏まえた建物サービス</strong>へ展開する可能性を探っています。",
        badge: "IEEE PerCom'26 WiP",
        badgeHref: "/publications/#llm-policy-teacher-percom-wip-2026",
        badges: [
          {
            label: "IEEE PerCom'26 WiP",
            href: "/publications/#llm-policy-teacher-percom-wip-2026",
            type: "venue",
          },
          {
            label: "ACM BuildSys'24",
            href: "/publications/#llm-seat-recommendation-buildsys-2024",
            type: "venue",
          },
        ],
        venue: "IEEE PerCom Workshops",
        year: 2026,
        status: "published",
        themeId: "building-intelligence",
        idea: "LLMの一般知識をPolicy Teacherとして用い、空調制御の強化学習を支援する。",
        publications: [],
        media: {
          type: "image",
          src: "/assets/空調制御.jpg",
          alt: "LLMをPolicy Teacherとして活用し、強化学習による空調制御を支援する研究の概要図。",
        },
      },
    ],
  },
];

export const projects = researchThemes.flatMap((theme) => theme.projects);
