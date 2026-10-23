export interface ThemePalette {
  id: string;
  name: string;
  bgPrimary: string;
  bgSecondary: string;
  bgDark: string;
  textPrimary: string;
  textSecondary: string;
  accentPrimary: string;
  accentSecondary: string;
  borderSubtle: string;
}

export interface HeroScene {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  caption: string;
  timeOfDay: string;
}

export interface CommunityStat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  detail: string;
  code: string;
}

export interface CoreValue {
  title: string;
  description: string;
  principleCode: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface AmenityItem {
  id: string;
  name: string;
  category: "Clubhouse & Social" | "Aquatics" | "Courts & Sport" | "Parks & Trails" | "Wellness & Youth";
  status: "Open Now" | "Resident Keycard" | "By Reservation";
  hours: string;
  location: string;
  capacity: string;
  description: string;
  highlights: string[];
  guidelines: string[];
  imageUrl: string;
  reservationNote: string;
}

export interface AnnouncementItem {
  id: string;
  referenceCode: string;
  title: string;
  category: "Maintenance Advisory" | "Board Notice" | "Community Update" | "Architectural Review";
  priority: "Important Advisory" | "Scheduled Notice" | "Community News";
  date: string;
  effectivePeriod: string;
  summary: string;
  fullDetails: string[];
  affectedAreas: string;
  contactDepartment: string;
  imageUrl?: string;
  readTime?: string;
  author?: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}

export interface CommunityEventItem {
  id: string;
  title: string;
  category: "Social & Seasonal" | "HOA Governance" | "Wellness & Recreation" | "Volunteer & Stewardship";
  date: string;
  monthShort: string;
  dayNumeric: string;
  time: string;
  location: string;
  summary: string;
  agenda: string[];
  organizer: string;
  isPublicWelcome: boolean;
  imageUrl: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Architecture & Streetscapes" | "Clubhouse & Pools" | "Parks & Trails" | "Community Gatherings";
  location: string;
  photographerNote: string;
  imageUrl: string;
  aspect: "wide" | "tall" | "square";
}

export interface SecurityContact {
  role: string;
  phone: string;
  availability: string;
  note: string;
  isEmergency?: boolean;
}

export interface SecurityPolicy {
  title: string;
  code: string;
  summary: string;
  bullets: string[];
}

export interface MapPin {
  id: string;
  name: string;
  category: "Gatehouse" | "Clubhouse & Pool" | "Park & Trailhead" | "Courts & Recreation" | "Nearby Landmark";
  xPercent: number;
  yPercent: number;
  addressOrZone: string;
  description: string;
  hoursOrDistance: string;
}

export interface BoardMember {
  id: string;
  name: string;
  position: string;
  roleType: "Board of Directors" | "Management Team";
  termOrDepartment: string;
  bio: string;
  focusAreas: string[];
  publicEmail: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  residentName: string;
  enclave: string;
  residentSince: string;
  quote: string;
  highlightTag: string;
  avatarUrl: string;
}

export interface CommunityDocument {
  id: string;
  code: string;
  title: string;
  category: "Governing Documents" | "Architectural Guidelines" | "Policies & Rules" | "Forms & Disclosures";
  version: string;
  updatedDate: string;
  fileSize: string;
  summary: string;
  keySections: {
    heading: string;
    content: string;
  }[];
}

export interface FaqItem {
  id: string;
  category: "General & Office" | "Assessments & Dues" | "Amenities & Access" | "Architectural (ARC)" | "Safety & Visitors";
  question: string;
  answer: string;
  relatedDocCode?: string;
}

export interface HoaTenantConfig {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  establishedYear: number;
  locationCityState: string;
  fullAddress: string;
  gpsCoordinates: string;
  gatehousePhone: string;
  officePhone: string;
  publicEmail: string;
  arcEmail: string;
  officeHours: string;
  gateStatusText: string;
  nextBoardMeeting: string;
  theme: ThemePalette;
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    scenes: HeroScene[];
  };
  about: {
    eyebrow: string;
    headline: string;
    leadParagraph: string;
    secondaryParagraph: string;
    mission: string;
    vision: string;
    architecturalNote: string;
    featuredImageUrl: string;
    secondaryImageUrl: string;
    coreValues: CoreValue[];
    milestones: { year: string; title: string; description: string }[];
  };
  stats: CommunityStat[];
  amenities: AmenityItem[];
  announcements: AnnouncementItem[];
  events: CommunityEventItem[];
  gallery: GalleryPhoto[];
  safety: {
    headline: string;
    subtitle: string;
    patrolStatus: string;
    visitorPassNote: string;
    contacts: SecurityContact[];
    policies: SecurityPolicy[];
  };
  location: {
    headline: string;
    subtitle: string;
    directionsFromNorth: string;
    directionsFromSouth: string;
    transitAndAccessNote: string;
    nearbyLandmarks: {
      name: string;
      category: string;
      distance: string;
      driveTime: string;
    }[];
    mapPins: MapPin[];
  };
  boardAndManagement: {
    governanceStatement: string;
    meetingSchedule: string;
    members: BoardMember[];
  };
  testimonials: TestimonialItem[];
  documents: CommunityDocument[];
  faqs: FaqItem[];
  socials: {
    platform: string;
    handle: string;
    url: string;
  }[];
}
