export type ResourceCategory = 
  | 'Ogun State Laws'
  | 'High Court Judgments'
  | 'Court of Appeal Reports'
  | 'Supreme Court Precedents'
  | 'Practice Directions'
  | 'Court Rules & Procedure'
  | 'Cause Lists'
  | 'Magistrate Court Directives'
  | 'Customary Court Records'
  | 'Law Commission Gazettes';

export type JudicialDivision = 
  | 'Abeokuta Judicial Division'
  | 'Ijebu-Ode Judicial Division'
  | 'Sagamu Judicial Division'
  | 'Ota Judicial Division'
  | 'Ilaro Judicial Division'
  | 'Ijebu-Igbo Judicial Division'
  | 'Odeda Division'
  | 'Appellate Division';

export interface LawResource {
  id: string;
  slug: string;
  title: string;
  suitNumber?: string;
  citation?: string;
  category: ResourceCategory;
  division?: JudicialDivision;
  year: number;
  datePromulgatedOrDelivered: string;
  presidingJudge?: string;
  parties?: {
    appellantOrClaimant: string;
    respondentOrDefendant: string;
  };
  summary: string;
  subjectMatter: string[];
  statutesConsidered?: string[];
  ratioDecidendi?: string[];
  fullTextOrExcerpts: string;
  pdfFileSize?: string;
  callNumber: string; // e.g. "OGS/HC/ABK/2026/014"
  shelfLocation: string; // e.g. "Main Wing, Shelf 4B, Vol. XII"
  isFeatured?: boolean;
  isRecent?: boolean;
}

export interface LibraryDivisionInfo {
  name: JudicialDivision;
  slug: string;
  headquarters: string;
  residentJudge: string;
  address: string;
  contactEmail: string;
  totalHoldings: number;
}
