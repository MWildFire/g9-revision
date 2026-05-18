export const ROUTES = {
  HUB: '/',
  TIMETABLE: '/timetable',
  ABOUT: '/about',

  PHYSICS: {
    ROOT: '/physics',
    COMMAND_TERMS: '/physics/command-terms',
    FORCE_MOTION: '/physics/force-motion',
    FORCES_ENERGY: '/physics/forces-energy',
    ELECTRICITY: '/physics/electricity',
    WAVES_OPTICS: '/physics/waves-optics',
    CRITERIA: '/physics/criteria',
    RESOURCES: '/physics/resources',
  },

  MATH: {
    ROOT: '/math',
    NUMBER_SYSTEMS: '/math/number-systems',
    FUNCTIONS_ALGEBRA: '/math/functions-algebra',
    SEQUENCES: '/math/sequences',
    GEOMETRY_TRIG: '/math/geometry-trig',
    STATS_PROB: '/math/stats-prob',
    EOY_PRACTICE: '/math/eoy-practice',
    CRITERIA_TRAINER: '/math/criteria-trainer',
  },

  CHEMISTRY: {
    ROOT: '/chemistry',
  },

  BIOLOGY: {
    ROOT: '/biology',
  },

  ENGLISH: {
    ROOT: '/english',
  },

  FRENCH: {
    ROOT: '/french',
  },

  ARABIC: {
    ROOT: '/arabic',
  },

  GEOGRAPHY: {
    ROOT: '/geography',
    RIVERS: '/geography/rivers',
    TOURISM: '/geography/tourism',
    RESOURCE_RELIANCE: '/geography/resource-reliance',
    ATMOSPHERIC_HAZARDS: '/geography/atmospheric-hazards',
  },
} as const;

export type MathTopicId =
  | 'number-systems'
  | 'functions-algebra'
  | 'sequences'
  | 'geometry-trig'
  | 'stats-prob';

export type PhysicsTopicId =
  | 'force-motion'
  | 'forces-energy'
  | 'electricity'
  | 'waves-optics';

export type GeographyTopicId =
  | 'rivers'
  | 'tourism'
  | 'resource-reliance'
  | 'atmospheric-hazards';
