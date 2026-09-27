import { LibraryDivisionInfo } from '../types';

export const JUDICIAL_DIVISIONS: LibraryDivisionInfo[] = [
  {
    name: 'Abeokuta Judicial Division',
    slug: 'abeokuta',
    headquarters: 'Judiciary Complex, Kobape Road, Abeokuta',
    residentJudge: 'The Hon. Chief Judge of Ogun State',
    address: 'High Court of Justice Complex, Kobape Road, P.M.B. 2001, Abeokuta, Ogun State',
    contactEmail: 'library.abeokuta@ogunstatelawlibrary.gov.ng',
    totalHoldings: 18450
  },
  {
    name: 'Ijebu-Ode Judicial Division',
    slug: 'ijebu-ode',
    headquarters: 'High Court Complex, Igbeba, Ijebu-Ode',
    residentJudge: 'Administrative Judge, Ijebu-Ode Division',
    address: 'Igbeba High Court Road, Ijebu-Ode, Ogun State',
    contactEmail: 'library.ijebuode@ogunstatelawlibrary.gov.ng',
    totalHoldings: 9240
  },
  {
    name: 'Sagamu Judicial Division',
    slug: 'sagamu',
    headquarters: 'High Court Complex, GRA, Sagamu',
    residentJudge: 'Administrative Judge, Sagamu Division',
    address: 'GRA Road, Sagamu, Ogun State',
    contactEmail: 'library.sagamu@ogunstatelawlibrary.gov.ng',
    totalHoldings: 8120
  },
  {
    name: 'Ota Judicial Division',
    slug: 'ota',
    headquarters: 'High Court Complex, Idiroko Road, Ota',
    residentJudge: 'Administrative Judge, Ota Division',
    address: 'KM 2, Idiroko Expressway, Ota Industrial Axis, Ogun State',
    contactEmail: 'library.ota@ogunstatelawlibrary.gov.ng',
    totalHoldings: 11400
  },
  {
    name: 'Ilaro Judicial Division',
    slug: 'ilaro',
    headquarters: 'High Court Complex, Leslie Road, Ilaro',
    residentJudge: 'Administrative Judge, Ilaro Division',
    address: 'Leslie Road, Yewa South, Ilaro, Ogun State',
    contactEmail: 'library.ilaro@ogunstatelawlibrary.gov.ng',
    totalHoldings: 5630
  },
  {
    name: 'Ijebu-Igbo Judicial Division',
    slug: 'ijebu-igbo',
    headquarters: 'High Court of Justice, Station Road, Ijebu-Igbo',
    residentJudge: 'Presiding Judge, Ijebu-Igbo Division',
    address: 'Station Road, Ijebu-Igbo, Ogun State',
    contactEmail: 'library.ijebuigbo@ogunstatelawlibrary.gov.ng',
    totalHoldings: 3890
  }
];

export const RESOURCE_CATEGORIES = [
  'Ogun State Laws',
  'High Court Judgments',
  'Court of Appeal Reports',
  'Supreme Court Precedents',
  'Practice Directions',
  'Court Rules & Procedure',
  'Cause Lists',
  'Magistrate Court Directives',
  'Customary Court Records',
  'Law Commission Gazettes'
] as const;
