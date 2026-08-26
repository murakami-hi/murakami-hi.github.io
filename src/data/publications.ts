import { publicationOverrides } from "./publication-overrides";
import { generatedPublications } from "./publications.generated";

export type PublicationCategory = "journal" | "conference";

export type Publication = {
  sourceId?: string;
  id?: string;
  title: string;
  authors: string[];
  year: number;
  category: PublicationCategory;
  venue: string;
  publicationType?: string;
  acceptanceRate?: string;
  impactFactor?: string;
  quartile?: string;
  award?: string[];
  links?: {
    paper?: string;
    doi?: string;
    project?: string;
  };
};

const normalizeTitle = (title: string) =>
  title
    .toLowerCase()
    .replace(/[.,:;!?'"“”‘’()[\]{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const venueYearSuffix = (publication: Publication) => String(publication.year).slice(2);

const normalizeVenue = (publication: Publication) => {
  const venue = publication.venue;
  const year = venueYearSuffix(publication);

  if (venue.includes("IEEE Journal of Indoor and Seamless Positioning and Navigation")) {
    return "IEEE Journal of Indoor and Seamless Positioning and Navigation (J-ISPIN)";
  }

  if (venue.includes("Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies")) {
    return "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)";
  }

  if (publication.category !== "conference") return venue;

  if (venue.includes("Pervasive Computing and Communications Workshops")) {
    return `Proceedings of the IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops'${year})`;
  }

  if (venue.includes("Pervasive Computing and Communications") || venue.includes("IEEE PerCom")) {
    return `Proceedings of the IEEE International Conference on Pervasive Computing and Communications (PerCom'${year})`;
  }

  if (venue.includes("Embedded Networked Sensor Systems")) {
    return `Proceedings of the ACM Conference on Embedded Networked Sensor Systems (SenSys'${year})`;
  }

  if (venue.includes("Systems for Energy-Efficient Buildings, Cities, and Transportation")) {
    return `Proceedings of the ACM International Conference on Systems for Energy-Efficient Buildings, Cities, and Transportation (BuildSys'${year})`;
  }

  if (venue.includes("Indoor Positioning and Indoor Navigation")) {
    return `Proceedings of the IEEE International Conference on Indoor Positioning and Indoor Navigation (IPIN'${year})`;
  }

  if (venue.includes("Computer-Aided Architectural Design Research in Asia") || venue.includes("CAADRIA")) {
    return `Proceedings of the International Conference of the Association for Computer-Aided Architectural Design Research in Asia (CAADRIA'${year})`;
  }

  if (venue.includes("User Interface Software and Technology")) {
    return `Proceedings of the ACM Symposium on User Interface Software and Technology (UIST'${year})`;
  }

  if (venue.includes("Mobile Networks and Mobile Computing")) {
    return `Proceedings of the International Symposium on Theory, Algorithmic Foundations, and Protocol Design for Mobile Networks and Mobile Computing (MobiHoc'${year})`;
  }

  if (venue.includes("Mobile and Ubiquitous Systems")) {
    const venueYear = venue.match(/MobiQuitous'(\d{2})/)?.[1] ?? year;
    return `Proceedings of the EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (MobiQuitous'${venueYear})`;
  }

  return venue;
};

export const publications: Publication[] = generatedPublications
  .map((publication) => {
    const override = publicationOverrides.find((item) =>
      item.sourceId
        ? item.sourceId === publication.sourceId
        : item.title && normalizeTitle(item.title) === normalizeTitle(publication.title),
    );

    if (override?.hidden) return null;

    return {
      ...publication,
      ...override,
      links: {
        ...publication.links,
        ...override?.links,
      },
      title: override?.title ?? publication.title,
    };
  })
  .map((publication) =>
    publication
      ? {
          ...publication,
          venue: normalizeVenue(publication),
        }
      : publication,
  )
  .filter((publication): publication is Publication => Boolean(publication))
  .sort((a, b) => b.year - a.year || Number(b.sourceId ?? 0) - Number(a.sourceId ?? 0));

export const publicationLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.co.jp/citations?user=bqgvjosAAAAJ&hl=en",
  },
  {
    label: "researchmap",
    href: "https://researchmap.jp/hiroaki-murakami",
  },
];
