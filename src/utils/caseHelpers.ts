import { LAW_RESOURCES } from '../data/cases';
import { JUDICIAL_DIVISIONS } from '../data/divisions';
import { LawResource, LibraryDivisionInfo, ResourceCategory } from '../types';

export function getAllLawResources(): LawResource[] {
  return [...LAW_RESOURCES].sort((a, b) => {
    return b.datePromulgatedOrDelivered.localeCompare(a.datePromulgatedOrDelivered);
  });
}

export function getResourceBySlug(slug: string): LawResource | undefined {
  const lower = slug.toLowerCase();
  return LAW_RESOURCES.find(r => r.slug.toLowerCase() === lower || r.id.toLowerCase() === lower);
}

export function getFeaturedResource(): LawResource {
  return LAW_RESOURCES.find(r => r.isFeatured) || LAW_RESOURCES[0];
}

export function getRecentResources(limit: number = 4): LawResource[] {
  return getAllLawResources().slice(0, limit);
}

export function getResourcesByCategory(category: ResourceCategory): LawResource[] {
  return getAllLawResources().filter(r => r.category === category);
}

export function getResourcesByDivision(divisionSlug: string): LawResource[] {
  const div = JUDICIAL_DIVISIONS.find(d => d.slug.toLowerCase() === divisionSlug.toLowerCase());
  if (!div) return [];
  return getAllLawResources().filter(r => r.division === div.name);
}

export function getDivisionBySlug(slug: string): LibraryDivisionInfo | undefined {
  return JUDICIAL_DIVISIONS.find(d => d.slug.toLowerCase() === slug.toLowerCase());
}

export interface LibraryStatistics {
  totalCatalogedVolumes: number;
  highCourtJudgmentsCount: number;
  stateLawsCount: number;
  practiceDirectionsCount: number;
  causeListsCount: number;
  divisionsCount: number;
  byCategory: Record<string, number>;
  byDivision: Record<string, number>;
  byYear: Record<number, number>;
}

export function getLibraryStatistics(): LibraryStatistics {
  const all = getAllLawResources();
  const byCategory: Record<string, number> = {};
  const byDivision: Record<string, number> = {};
  const byYear: Record<number, number> = {};

  let judgments = 0;
  let laws = 0;
  let practiceDirections = 0;
  let causeLists = 0;

  for (const item of all) {
    byCategory[item.category] = (byCategory[item.category] || 0) + 1;
    if (item.division) {
      byDivision[item.division] = (byDivision[item.division] || 0) + 1;
    }
    byYear[item.year] = (byYear[item.year] || 0) + 1;

    if (item.category === 'High Court Judgments') judgments++;
    if (item.category === 'Ogun State Laws') laws++;
    if (item.category === 'Practice Directions') practiceDirections++;
    if (item.category === 'Cause Lists') causeLists++;
  }

  return {
    totalCatalogedVolumes: all.length,
    highCourtJudgmentsCount: judgments,
    stateLawsCount: laws,
    practiceDirectionsCount: practiceDirections,
    causeListsCount: causeLists,
    divisionsCount: JUDICIAL_DIVISIONS.length,
    byCategory,
    byDivision,
    byYear
  };
}
