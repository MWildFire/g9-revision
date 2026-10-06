export type DefinitionText = { en: string; ru: string };
export type DefinitionSource = { title: string; url: string; language: 'en' | 'ru' | 'fr' | 'ar'; section: string };
export type DefinitionReview = {
  englishTerm: string;
  russianTerm: string;
  explanation?: DefinitionText;
  contrast: DefinitionText;
  model?: DefinitionText;
  sources: DefinitionSource[];
  visual?: {
    kind: 'flow' | 'comparison' | 'parts';
    title: DefinitionText;
    items: { label: DefinitionText; detail?: DefinitionText }[];
    caption: DefinitionText;
  };
};
