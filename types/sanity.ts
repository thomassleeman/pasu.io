export type SanityImage = {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  caption?: string;
};

//internal and external link components
export type IntLinkValueProp = {
  _type: string;
  slug?: {
    current?: string;
  };
};

export type ExtLinkValueProp = {
  _type: string;
  url: string;
  newTab: boolean;
};

export type Audio = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type PortableTextBlock = {
  _type: string;
  children: { _type: string; text: string }[];
};

export type Article = {
  id: string;
  title: string;
  audio?: Audio;
  content: PortableTextBlock[];
  slug: string;
  date: string;
  headerImage?: SanityImage;
  author: string;
  readingTime?: number;
  classification: string;
  summary?: string;
};

export type Exercise = {
  title: string;
  content: PortableTextBlock[];
  slug: string;
  headerImage?: SanityImage;
  summary: PortableTextBlock[];
  classification: string;
};

export type CourseResourceSanity = {
  title: string;
  headerImage?: SanityImage;
  slug: string;
  type: "article" | "selfReflectionExercise";
};

export type CourseSanity = {
  _id: string;
  title: string;
  content: PortableTextBlock[];
  slug: string;
  headerImage?: SanityImage;
  summary: PortableTextBlock[];
  resources: CourseResourceSanity[] | null;
};

export type Prompt = {
  type: "prompt";
  _key: string;
  title: string;
  instructions: PortableTextBlock[];
};

// export interface JournalingSection {
//   _key: string;
//   slug: string;
//   sectionTitle: string;
// }

// export interface WritingExercise {
//   slug: { current: string };
//   title: string;
//   journalingSections?: JournalingSection[];
// }

export interface Classification {
  _id: string;
  title?: string;
}

export interface PromptItem {
  _key?: string;
  content?: PortableTextBlock[];
}

export interface PromptGroup {
  _key?: string;
  heading?: string;
  prompts?: PromptItem[];
}

export interface JournalingSection {
  _key?: string;
  slug?: string;
  sectionTitle?: string;
  promptGroups?: PromptGroup[];
}

export interface WritingExercise {
  _id?: string;
  _type?: "writingExercise";
  title: string;
  headerImage?: SanityImage;
  slug: {
    current: string;
  };
  classification?: Classification;
  introduction?: PortableTextBlock[];
  journalingSections?: JournalingSection[];
}
