import { Question, TopicId } from '../types/quiz';

export interface TopicMeta {
  id: TopicId;
  name: string;
  chapter: string;
  description: string;
  iconName: string;
}

export const TOPICS: TopicMeta[] = [
  {
    id: 'bioenergetics',
    name: 'Bioenergetics & Free Energy',
    chapter: 'Chapter 1: Bioenergetics',
    description: 'Enthalpy, entropy, ΔG, exergonic/endergonic reactions, and high-energy phosphate bonds.',
    iconName: 'Zap',
  },
  {
    id: 'respiratory-chain',
    name: 'Biologic Oxidation & ETC Complexes',
    chapter: 'Chapter 1: Biologic Oxidation',
    description: 'Redox potentials, electron transport chain complexes I to IV, and mobile carriers.',
    iconName: 'Activity',
  },
  {
    id: 'etc-inhibitors',
    name: 'Oxidative Phosphorylation & Inhibitors',
    chapter: 'Chapter 1: Biologic Oxidation',
    description: 'Chemiosmotic hypothesis, ATP synthase, site-specific inhibitors, and uncouplers.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'shuttles-mitochondria',
    name: 'Substrate Shuttles & Mitochondria',
    chapter: 'Chapter 1: Biologic Oxidation',
    description: 'Glycerophosphate vs Malate-Aspartate shuttles and mitochondrial membrane permeability.',
    iconName: 'RefreshCw',
  },
  {
    id: 'carb-digestion-absorption',
    name: 'Carbohydrate Digestion & Absorption',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Amylases, disaccharidases, SGLT-1 active transport, GLUT transporters, and cellulose.',
    iconName: 'Utensils',
  },
  {
    id: 'glycolysis-steps',
    name: 'Glycolysis: Steps & Energetics',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Embden-Meyerhof pathway reactions, substrate-level phosphorylation, and ATP balance.',
    iconName: 'Flame',
  },
  {
    id: 'glycolysis-regulation',
    name: 'Glycolysis Regulation & RBC Features',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Glucokinase vs Hexokinase, PFK-1/PFK-2, Pasteur effect, and Rapoport-Luebering cycle.',
    iconName: 'Sliders',
  },
  {
    id: 'pdh-complex',
    name: 'Pyruvate Dehydrogenase (PDH)',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Multienzyme complex, 5 vitamin coenzymes, covalent regulation, and clinical deficits.',
    iconName: 'Cpu',
  },
  {
    id: 'tca-cycle',
    name: 'Citric Acid (Krebs / TCA) Cycle',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'TCA reactions, 12 ATP generation per acetyl CoA, amphibolic roles, and inhibitors.',
    iconName: 'RotateCw',
  },
  {
    id: 'hmp-shunt-favism',
    name: 'Pentose Phosphate Pathway & Favism',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'G6PD, NADPH functions, glutathione reduction, respiratory burst, and acute favism.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'uronic-acid-pathway',
    name: 'Uronic Acid Pathway & Pentosuria',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Glucuronic acid synthesis, conjugation, and benign essential pentosuria.',
    iconName: 'FlaskConical',
  },
  {
    id: 'glycogen-metabolism',
    name: 'Glycogen Synthesis & Breakdown',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Glycogen synthase, branching enzyme, phosphorylase, cAMP cascade, and reciprocal control.',
    iconName: 'GitBranch',
  },
  {
    id: 'glycogen-storage-diseases',
    name: 'Glycogen Storage Diseases (GSD I-VIII)',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Von Gierke, Pompe, Cori, Andersen, McArdle, Hers, and Tarui diseases.',
    iconName: 'AlertTriangle',
  },
  {
    id: 'gluconeogenesis',
    name: 'Gluconeogenesis & Substrates',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Reversal of glycolysis, pyruvate carboxylase, PEPCK, F-1,6-bisphosphatase, and cost.',
    iconName: 'Layers',
  },
  {
    id: 'galactose-fructose',
    name: 'Galactose & Fructose Inborn Errors',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Galactokinase/GALT deficiency, cataracts, fructokinase deficiency, and hereditary fructose intolerance.',
    iconName: 'HeartPulse',
  },
  {
    id: 'diabetes-blood-glucose',
    name: 'Blood Glucose Regulation & Diabetes',
    chapter: 'Chapter 2: Carbohydrate Metabolism',
    description: 'Type 1 vs Type 2 DM, OGTT criteria, HbA1c, microalbuminuria, diabetic comas, and glycosuria.',
    iconName: 'Stethoscope',
  },
];
