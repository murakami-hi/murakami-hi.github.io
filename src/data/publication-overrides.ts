import type { Publication } from "./publications";

export type PublicationOverride = Partial<Omit<Publication, "sourceId" | "title">> & {
  sourceId?: string;
  title?: string;
  hidden?: boolean;
};

export const publicationOverrides: PublicationOverride[] = [
  {
    sourceId: "53353201",
    id: "llm-policy-teacher-percom-wip-2026",
    venue: "Proceedings of the IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops'26)",
    publicationType: "Poster",
    links: {
      doi: "https://doi.org/10.1109/percomworkshops68308.2026.11585189",
      project: "/research/themes/building-intelligence/#llm-policy-teacher-hvac-rl",
    },
  },
  {
    sourceId: "53353182",
    venue: "Proceedings of the IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops'26)",
    publicationType: "Poster",
    links: { doi: "https://doi.org/10.1109/percomworkshops68308.2026.11585305" },
  },
  {
    title: "ReFDrone: One-Shot Indoor Drone 4DoF Estimation via Rolling-Shutter AoA from Floor-Reflected Light",
    id: "refdrone-percom-2026",
    venue: "Proceedings of the 24th IEEE International Conference on Pervasive Computing and Communications (PerCom'26)",
    acceptanceRate: "15.62%",
    links: {
      doi: "https://doi.org/10.1109/percom67906.2026.11524473",
      project: "/research/themes/spatial-sensing/#visible-light-drone-tracking-floor-reflection",
    },
  },
  {
    sourceId: "50064351",
    publicationType: "Poster",
    links: { doi: "https://doi.org/10.1145/3715014.3724050" },
  },
  {
    title: "Hypothesis-Based Smartphone Tracking Using Multipath from a Single Speaker",
    links: { doi: "https://doi.org/10.1109/ipin66788.2025.11213143" },
  },
  {
    title: "Acquisition and visualization of HVAC data by autonomous mobile robots",
    id: "mobile-robot-hvac-caadria-2025",
    venue: "Proceedings of the 30th International Conference of the Association for Computer-Aided Architectural Design Research in Asia (CAADRIA'25)",
    acceptanceRate: "26.3%",
    links: {
      doi: "https://doi.org/10.52842/conf.caadria.2025.3.029",
      project: "/research/themes/building-intelligence/#mobile-robot-building-environment-sensing",
    },
  },
  {
    sourceId: "48217652",
    publicationType: "Poster",
  },
  {
    title: "SyncEcho: Echo-Based Single Speaker Time Offset Estimation for Time-of-Flight Localization",
    id: "syncecho-sensys-2024",
    venue: "Proceedings of the 22nd ACM Conference on Embedded Networked Sensor Systems (SenSys'24)",
    acceptanceRate: "18.5%",
    links: {
      doi: "https://doi.org/10.1145/3666025.3699369",
      project: "/research/themes/spatial-sensing/#acoustic-localization-virtual-sources",
    },
  },
  {
    title: "Exploring the Capabilities of Large Language Models in Seat Recommendation Systems for Hot-Desking Offices",
    id: "llm-seat-recommendation-buildsys-2024",
    venue: "Proceedings of the 11th ACM International Conference on Systems for Energy-Efficient Buildings, Cities, and Transportation (BuildSys'24)",
    publicationType: "Short Paper",
    acceptanceRate: "30.3%",
    links: {
      doi: "https://doi.org/10.1145/3671127.3698179",
      project: "/research/themes/building-intelligence/#llm-policy-teacher-hvac-rl",
    },
  },
  {
    title: "Geometric Sound Profile: Multipath-Time-of-Flight Fingerprint for High-Accuracy Acoustic Localization",
    id: "geometric-sound-profile-ipin-2024",
    venue: "Proceedings of the 14th IEEE International Conference on Indoor Positioning and Indoor Navigation (IPIN'24)",
    award: ["Best Paper Award"],
    links: {
      doi: "https://doi.org/10.1109/ipin62893.2024.10786126",
      project: "/research/themes/spatial-sensing/#fingerprint-localization-propagation-learning",
    },
  },
  {
    sourceId: "47790338",
    links: { doi: "https://doi.org/10.1109/ipin62893.2024.10786183" },
  },
  {
    title: "Camera-Based Position Estimation using Frequency-Multiplexed Luminance Gradient",
    venue: "Proceedings of the IEEE International Conference on Pervasive Computing and Communications (PerCom'24)",
    publicationType: "Industry Track Paper",
  },
  {
    sourceId: "46682101",
    title: "Enhancing Fingerprint-based Smartphone Localization Using Acoustic Time-of-Flight for Complex Indoors",
    publicationType: "Poster",
  },
  {
    sourceId: "46682094",
    publicationType: "Poster",
  },
  {
    title: "Efficient Adaptive Beacon Deployment Optimization for Indoor Crowd Monitoring Applications",
    impactFactor: "4.0",
    quartile: "Q1",
    links: { doi: "https://doi.org/10.1145/3569462" },
  },
  {
    title: "NLOS環境における音響センシングを用いたスマートフォン間測距手法",
    award: ["特選論文"],
  },
  {
    title: "ALiSA: A Visible-Light Positioning System Using the Ambient Light Sensor Assembly in a Smartphone",
    impactFactor: "4.3",
    quartile: "Q1",
    links: { doi: "https://doi.org/10.1109/jsen.2021.3074580" },
  },
  {
    title: "Five Degrees-of-Freedom Pose-Estimation Method for Smartphones Using a Single Acoustic Anchor",
    impactFactor: "4.325",
    quartile: "Q1",
    links: { doi: "https://doi.org/10.1109/jsen.2020.3047854" },
  },
  {
    title: "Expanding the Positioning Area for Acoustic Localization Using COTS Mobile Devices",
    venue: "Proceedings of the EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (MobiQuitous'21)",
    links: { doi: "https://doi.org/10.1007/978-3-030-94822-1_23" },
  },
  {
    title: "MOCHA: mobile check-in application for university campuses beyond COVID-19",
    venue: "Proceedings of the ACM MobiHoc Workshop on Mobile Systems for COVID-19 Response (MobiCOVID'22)",
    publicationType: "Workshop Paper",
  },
  {
    sourceId: "46682057",
    publicationType: "Poster",
  },
  {
    sourceId: "46682054",
    publicationType: "Poster",
  },
  {
    sourceId: "46682051",
    publicationType: "Poster",
  },
  {
    title: "鏡像スピーカを用いたスマートフォン高精度3次元測位手法",
    id: "ipsj-outstanding-paper-2020",
    award: ["2020年度論文賞", "特選論文"],
  },
];
