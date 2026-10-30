import { Question } from '../types/quiz';

export const questionsPart1: Question[] = [
  // --- BIOENERGETICS (Q1 - Q8) ---
  {
    id: 1,
    topicId: 'bioenergetics',
    topicName: 'Bioenergetics & Free Energy',
    difficulty: 'Easy',
    text: 'What mathematical equation defines the change in free energy (ΔG) in a biochemical system?',
    options: [
      'ΔG = ΔH - TΔS',
      'ΔG = ΔH + TΔS',
      'ΔG = TΔS - ΔH',
      'ΔG = ΔH / (T + ΔS)'
    ],
    correctAnswer: 0,
    explanation: 'The change in free energy is defined by the Gibbs equation ΔG = ΔH - TΔS, where ΔH represents enthalpy (heat content change), T is absolute temperature in Kelvin (°K = °C + 273), and ΔS is entropy (randomness or disorder). ΔG predicts whether a biochemical reaction is spontaneous and favorable.',
    keyConcepts: ['Gibbs Equation', 'ΔG = ΔH - TΔS', 'Enthalpy (ΔH)', 'Entropy (ΔS)', 'Spontaneity'],
    sourcePage: 1
  },
  {
    id: 2,
    topicId: 'bioenergetics',
    topicName: 'Bioenergetics & Free Energy',
    difficulty: 'Easy',
    text: 'Which statement accurately describes an exergonic reaction (-ΔG)?',
    options: [
      'The reaction requires an external input of ATP to proceed',
      'Free energy content of the product is less than that of the reactant, proceeding spontaneously',
      'The reactants and products are at thermodynamic equilibrium',
      'Free energy content of the product is greater than that of the reactant'
    ],
    correctAnswer: 1,
    explanation: 'In an exergonic reaction (-ΔG), free energy content of the product (B) is less than that of the reactant (A). Energy is released spontaneously in the cell (irreversible without external work), and this liberated energy is captured to synthesize ATP.',
    keyConcepts: ['Exergonic (-ΔG)', 'Spontaneous Reaction', 'Net Energy Loss', 'ATP Generation'],
    sourcePage: 1
  },
  {
    id: 3,
    topicId: 'bioenergetics',
    topicName: 'Bioenergetics & Free Energy',
    difficulty: 'Medium',
    text: 'What minimum energy release upon bond hydrolysis qualifies a chemical bond as a "high-energy bond" (~)?',
    options: [
      '≥ 1.0 Kcal/mol',
      '≥ 3.0 Kcal/mol',
      '≥ 5.0 Kcal/mol',
      '≥ 12.0 Kcal/mol'
    ],
    correctAnswer: 2,
    explanation: 'According to bioenergetics definitions, any chemical bond whose breakdown is accompanied by a large decrease in free energy of ≥ 5 Kcal/mol is termed a high-energy bond and represented by the tilde symbol (~).',
    keyConcepts: ['High-Energy Bond (~)', 'Threshold ≥ 5 Kcal/mol', 'Large Free Energy Decrease'],
    sourcePage: 4
  },
  {
    id: 4,
    topicId: 'bioenergetics',
    topicName: 'Bioenergetics & Free Energy',
    difficulty: 'Medium',
    text: 'How much free energy is liberated by the hydrolysis of one high-energy phosphoanhydride bond of ATP to ADP and Pi?',
    options: [
      '3.4 Kcal/mol',
      '7.3 Kcal/mol',
      '10.3 Kcal/mol',
      '14.8 Kcal/mol'
    ],
    correctAnswer: 1,
    explanation: 'Breakdown of one high-energy phosphoanhydride bond in ATP (between phosphate groups 1-2 or 2-3) releases approximately 7.3 Kcal/mol of free energy under standard physiological conditions.',
    keyConcepts: ['ATP Hydrolysis', '7.3 Kcal/mol', 'Phosphoanhydride Bond', 'ADP + Pi'],
    sourcePage: 4
  },
  {
    id: 5,
    topicId: 'bioenergetics',
    topicName: 'Bioenergetics & Free Energy',
    difficulty: 'Hard',
    text: 'Which of the following phosphorylated compounds contains the highest negative free energy of hydrolysis (~14.8 Kcal/mol)?',
    options: [
      'Creatine phosphate',
      'Phosphoenolpyruvate (PEP)',
      'Glucose-6-phosphate',
      'Carbamoyl phosphate'
    ],
    correctAnswer: 1,
    explanation: 'Phosphoenolpyruvate (PEP) has the highest free energy of hydrolysis at -14.8 Kcal/mol, followed by carbamoyl phosphate (-12.3 Kcal/mol), creatine phosphate (-10.3 Kcal/mol), and ATP (-7.3 Kcal/mol).',
    keyConcepts: ['Phosphoenolpyruvate (-14.8 Kcal/mol)', 'Highest Energy Phosphate', 'Creatine Phosphate (-10.3 Kcal/mol)'],
    sourcePage: 2
  },
  {
    id: 6,
    topicId: 'bioenergetics',
    topicName: 'Bioenergetics & Free Energy',
    difficulty: 'Easy',
    text: 'What are the physiological caloric values yielded per gram of carbohydrate, fat, and protein upon in vivo oxidation?',
    options: [
      'Carbohydrate: 4 Kcal/g, Fat: 9 Kcal/g, Protein: 4 Kcal/g',
      'Carbohydrate: 9 Kcal/g, Fat: 4 Kcal/g, Protein: 4 Kcal/g',
      'Carbohydrate: 4 Kcal/g, Fat: 4 Kcal/g, Protein: 9 Kcal/g',
      'Carbohydrate: 7 Kcal/g, Fat: 9 Kcal/g, Protein: 4 Kcal/g'
    ],
    correctAnswer: 0,
    explanation: 'In vivo cellular oxidation yields approximately 4 Kcal per gram of carbohydrate and protein, whereas fat provides 9 Kcal per gram due to its highly reduced hydrocarbon state.',
    keyConcepts: ['Caloric Density', 'Carbohydrate 4 Kcal/g', 'Fat 9 Kcal/g', 'Protein 4 Kcal/g'],
    sourcePage: 5
  },
  {
    id: 7,
    topicId: 'bioenergetics',
    topicName: 'Bioenergetics & Free Energy',
    difficulty: 'Medium',
    text: 'Which of the following is classified as a "low-energy" phosphate bond (< 7.3 Kcal/mol)?',
    options: [
      'Creatine phosphate',
      'Carbamoyl phosphate',
      'Glucose-6-phosphate',
      '1,3-Bisphosphoglycerate'
    ],
    correctAnswer: 2,
    explanation: 'Glucose-6-phosphate (-3.3 Kcal/mol), AMP (-3.4 Kcal/mol), and Glucose-1-phosphate (-5 Kcal/mol) are low-energy phosphate bonds because their hydrolysis releases less than 7.3 Kcal/mol.',
    keyConcepts: ['Low-Energy Phosphate', 'Glucose-6-phosphate (-3.3 Kcal/mol)', 'Below 7.3 Kcal/mol'],
    sourcePage: 5
  },
  {
    id: 8,
    topicId: 'bioenergetics',
    topicName: 'Bioenergetics & Free Energy',
    difficulty: 'Medium',
    text: 'What is the fundamental difference between in vitro and in vivo oxidation of foodstuffs?',
    options: [
      'In vitro produces ATP while in vivo produces only heat',
      'In vitro oxidation releases all free energy as heat, whereas in vivo part is trapped as ATP and the remainder as heat',
      'In vitro requires biological enzymes while in vivo occurs non-enzymatically',
      'In vitro yields more net ATP than in vivo oxidation'
    ],
    correctAnswer: 1,
    explanation: 'In vitro burning (e.g. bomb calorimeter) releases 100% of the free energy uncontrollably as heat. In living cells (in vivo), energy is captured stepwise into ATP (~40% efficiency), while the rest maintains body temperature.',
    keyConcepts: ['In Vitro vs In Vivo', 'Stepwise Energy Capture', 'ATP Conservation', 'Heat Maintenance'],
    sourcePage: 5
  },

  // --- RESPIRATORY CHAIN & BIOLOGIC OXIDATION (Q9 - Q18) ---
  {
    id: 9,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Easy',
    text: 'Which chemical transformation defines "biological oxidation"?',
    options: [
      'Addition of hydrogen or electrons to a compound',
      'Removal of oxygen from an oxide',
      'Removal of hydrogen or removal of electrons from an atom/molecule',
      'Addition of water across a double bond'
    ],
    correctAnswer: 2,
    explanation: 'Oxidation is defined as: (1) addition of oxygen, (2) removal of hydrogen (dehydrogenation), or (3) removal of electrons (increasing positive charge, e.g., Fe2+ -> Fe3+ + e-). Reduction is the gain of electrons or hydrogen.',
    keyConcepts: ['Oxidation Definition', 'Dehydrogenation', 'Loss of Electrons', 'Redox Reactions'],
    sourcePage: 6
  },
  {
    id: 10,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Medium',
    text: 'In the respiratory chain, why do electrons flow directionally from NADH to molecular oxygen (O2)?',
    options: [
      'Electrons flow spontaneously from the most electronegative donor (lowest redox potential) to the most electropositive acceptor (highest redox potential)',
      'Molecular oxygen donates protons to stimulate complex I',
      'NADH has the highest electron affinity among all mitochondrial carriers',
      'ATP synthase pumps electrons in reverse from oxygen'
    ],
    correctAnswer: 0,
    explanation: 'Standard reduction potential (E0) dictates electron flow. NADH has a strongly negative redox potential (low electron affinity, strong reducing agent), while O2 has the highest positive redox potential (+0.82 V, highest electron affinity), making oxygen the terminal electron acceptor.',
    keyConcepts: ['Redox Potential (E0)', 'Electron Flow Direction', 'Oxygen (Highest Affinity)', 'NADH (Electronegative)'],
    sourcePage: 7
  },
  {
    id: 11,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Medium',
    text: 'Which component of the respiratory chain is a non-protein, lipid-soluble quinone derivative with an isoprenoid tail?',
    options: [
      'Cytochrome c',
      'Coenzyme Q (Ubiquinone)',
      'NADH dehydrogenase',
      'Cytochrome oxidase'
    ],
    correctAnswer: 1,
    explanation: 'All members of the respiratory chain are proteins EXCEPT Coenzyme Q (Ubiquinone). Coenzyme Q is a benzoquinone derivative with a long hydrophobic isoprenoid tail that diffuses freely within the lipid bilayer of the inner mitochondrial membrane.',
    keyConcepts: ['Coenzyme Q (Ubiquinone)', 'Non-Protein Carrier', 'Isoprenoid Tail', 'Mobile Carrier'],
    sourcePage: 9
  },
  {
    id: 12,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Hard',
    text: 'What are the prosthetic groups present in Complex I (NADH dehydrogenase)?',
    options: [
      'FAD and Copper (Cu)',
      'FMN (Flavin mononucleotide) and Iron-Sulfur (Fe-S) centers',
      'Heme a and Heme a3',
      'Biotin and Pyridoxal phosphate'
    ],
    correctAnswer: 1,
    explanation: 'Complex I (NADH dehydrogenase) contains flavin mononucleotide (FMN) and multiple iron-sulfur (Fe-S) clusters. It oxidizes NADH + H+ back to NAD+ while reducing FMN to FMNH2, then transfers electrons through Fe-S to Coenzyme Q.',
    keyConcepts: ['Complex I', 'NADH Dehydrogenase', 'FMN Coenzyme', 'Iron-Sulfur (Fe-S) Clusters'],
    sourcePage: 9
  },
  {
    id: 13,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Medium',
    text: 'Which electron transport complex also functions as a key enzyme in the Krebs (TCA) cycle?',
    options: [
      'Complex I (NADH-Q reductase)',
      'Complex II (Succinate dehydrogenase)',
      'Complex III (Cytochrome bc1 complex)',
      'Complex IV (Cytochrome c oxidase)'
    ],
    correctAnswer: 1,
    explanation: 'Complex II contains succinate dehydrogenase, the only TCA cycle enzyme embedded directly in the inner mitochondrial membrane. It oxidizes succinate to fumarate using FAD, transferring electrons to Coenzyme Q without pumping protons.',
    keyConcepts: ['Complex II', 'Succinate Dehydrogenase', 'FAD-Linked', 'TCA Cycle Dual Role'],
    sourcePage: 10
  },
  {
    id: 14,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Medium',
    text: 'Which is the ONLY electron carrier in the respiratory chain capable of reacting directly with molecular oxygen (O2)?',
    options: [
      'Cytochrome b',
      'Cytochrome c',
      'Cytochrome c oxidase (Complex IV, a + a3)',
      'Coenzyme Q'
    ],
    correctAnswer: 2,
    explanation: 'Cytochrome c oxidase (Complex IV, consisting of cytochromes a and a3 containing copper and iron) is the terminal enzyme of the respiratory chain and the only carrier that directly reduces molecular oxygen to form water.',
    keyConcepts: ['Cytochrome c Oxidase', 'Complex IV (a + a3)', 'Terminal Electron Acceptor', 'H2O Formation'],
    sourcePage: 11
  },
  {
    id: 15,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Medium',
    text: 'How does the heme iron of cytochromes function during electron transfer?',
    options: [
      'It binds oxygen irreversibly like hemoglobin',
      'It oscillates between ferric (Fe3+) when losing an electron and ferrous (Fe2+) when accepting an electron',
      'It gets phosphorylated to create ATP directly',
      'It binds carbon dioxide for decarboxylation'
    ],
    correctAnswer: 1,
    explanation: 'Unlike hemoglobin which remains in the ferrous (Fe2+) state during oxygen transport, cytochromes act as redox electron carriers where heme iron oscillates between the oxidized ferric state (Fe3+) and reduced ferrous state (Fe2+).',
    keyConcepts: ['Cytochromes', 'Heme Ring Iron', 'Fe3+ / Fe2+ Oscillation', 'Single Electron Transfer'],
    sourcePage: 10
  },
  {
    id: 16,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Hard',
    text: 'Which of the following cytochromes is unique because it is associated with sulfur (S) in addition to iron (Fe)?',
    options: [
      'Cytochrome a',
      'Cytochrome a3',
      'Cytochrome b',
      'Cytochrome c'
    ],
    correctAnswer: 2,
    explanation: 'According to Oraby Biochemistry, Cytochrome b is specially associated with sulfur (S) in addition to its iron (Fe) center within Complex III.',
    keyConcepts: ['Cytochrome b', 'Iron and Sulfur Association', 'Complex III'],
    sourcePage: 10
  },
  {
    id: 17,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Easy',
    text: 'How many ATP molecules are synthesized per pair of electrons entering the ETC via NADH compared to FADH2?',
    options: [
      'NADH yields 3 ATP; FADH2 yields 2 ATP',
      'NADH yields 2 ATP; FADH2 yields 3 ATP',
      'NADH yields 4 ATP; FADH2 yields 1 ATP',
      'Both yield identical 3 ATP'
    ],
    correctAnswer: 0,
    explanation: 'Electrons from NADH enter at Complex I and traverse three proton-pumping sites (Complex I, III, IV), supporting the synthesis of 3 ATP (P/O ratio 3:1). Electrons from FADH2 enter downstream at Coenzyme Q (Complex II), bypassing Site I and supporting only 2 ATP (P/O ratio 2:1).',
    keyConcepts: ['P/O Ratio', 'NADH = 3 ATP', 'FADH2 = 2 ATP', 'Three Coupling Sites'],
    sourcePage: 12
  },
  {
    id: 18,
    topicId: 'respiratory-chain',
    topicName: 'Biologic Oxidation & ETC Complexes',
    difficulty: 'Hard',
    text: 'At which specific sites in the electron transport chain is the free energy drop sufficient to phosphorylate ADP to ATP (ΔE0 ≥ 0.22 V)?',
    options: [
      'At Complex II only',
      'At NAD-Q, Cytochrome b -> Cytochrome c1, and Cytochrome a3 -> O2',
      'At Cytochrome c -> Cytochrome a only',
      'At Succinate -> FAD only'
    ],
    correctAnswer: 1,
    explanation: 'Sufficient free energy (≥ 7 Kcal/mol) for ATP synthesis is released at 3 distinct sites: Site 1 (NAD+ to Q, ΔE0 = 0.27 V, 12.2 Kcal), Site 2 (Cyto b to Cyto c1, ΔE0 = 0.22 V, 9.9 Kcal), and Site 3 (Cyto a3 to O2, ΔE0 = 0.53 V, 23.8 Kcal).',
    keyConcepts: ['ATP Phosphorylation Sites', 'Site 1 (NAD-Q)', 'Site 2 (Cyt b-c1)', 'Site 3 (Cyt a3-O2)'],
    sourcePage: 13
  },

  // --- ETC INHIBITORS & OXIDATIVE PHOSPHORYLATION (Q19 - Q26) ---
  {
    id: 19,
    topicId: 'etc-inhibitors',
    topicName: 'Oxidative Phosphorylation & Inhibitors',
    difficulty: 'Medium',
    text: 'Which group of substances inhibits electron flow specifically at Site I (Complex I, preventing transfer from FMN to CoQ)?',
    options: [
      'Antimycin A and dimercaprol',
      'Cyanide (CN-), carbon monoxide (CO), and sodium azide',
      'Barbiturates (Amytal), Piericidin A, and Rotenone',
      'Oligomycin and 2,4-dinitrophenol'
    ],
    correctAnswer: 2,
    explanation: 'Site I inhibitors block electron transfer from Complex I (FMN/Fe-S) to Coenzyme Q. Classic Site I inhibitors are Barbiturates (e.g., Amytal), the antibiotic Piericidin A, and the fish poison/insecticide Rotenone.',
    keyConcepts: ['Site I Inhibitors', 'Rotenone', 'Amytal (Barbiturates)', 'Piericidin A'],
    sourcePage: 11
  },
  {
    id: 20,
    topicId: 'etc-inhibitors',
    topicName: 'Oxidative Phosphorylation & Inhibitors',
    difficulty: 'Medium',
    text: 'Antimycin A and dimercaprol (BAL) block electron transport at which site?',
    options: [
      'Site I (Complex I to CoQ)',
      'Site II (Complex III: Cytochrome b to Cytochrome c1)',
      'Site III (Complex IV: Cytochrome a3 to O2)',
      'Complex V (ATP synthase)'
    ],
    correctAnswer: 1,
    explanation: 'Antimycin A and dimercaprol bind to Complex III, inhibiting electron flow from Cytochrome b to Cytochrome c1 (Site II).',
    keyConcepts: ['Site II Inhibitor', 'Antimycin A', 'Dimercaprol', 'Complex III Blockade'],
    sourcePage: 11
  },
  {
    id: 21,
    topicId: 'etc-inhibitors',
    topicName: 'Oxidative Phosphorylation & Inhibitors',
    difficulty: 'Easy',
    text: 'Cyanide (CN-), carbon monoxide (CO), H2S, and sodium azide cause rapid asphyxiation by inhibiting which complex?',
    options: [
      'Complex I (NADH dehydrogenase)',
      'Complex II (Succinate dehydrogenase)',
      'Complex III (Cytochrome bc1)',
      'Complex IV (Cytochrome c oxidase, a + a3)'
    ],
    correctAnswer: 3,
    explanation: 'Cyanide (CN-), CO, H2S, and sodium azide bind tightly to the heme iron and copper of Cytochrome oxidase (Complex IV, a + a3), completely arresting electron transfer to O2 and collapsing cellular respiration.',
    keyConcepts: ['Complex IV Inhibitors', 'Cyanide (CN-)', 'Carbon Monoxide (CO)', 'Cytochrome c Oxidase'],
    sourcePage: 11
  },
  {
    id: 22,
    topicId: 'etc-inhibitors',
    topicName: 'Oxidative Phosphorylation & Inhibitors',
    difficulty: 'Medium',
    text: 'According to Peter Mitchell’s chemiosmotic hypothesis, how is electron transport coupled to ATP synthesis?',
    options: [
      'High-energy chemical intermediates directly transfer phosphate to ADP in the matrix',
      'Complexes I, III, and IV pump protons (H+) into the intermembrane space, generating an electrochemical gradient that drives ATP synthase',
      'Protons are pumped exclusively into the mitochondrial matrix to acidify it',
      'ATP synthase directly reduces oxygen to water'
    ],
    correctAnswer: 1,
    explanation: 'Mitchell’s chemiosmotic hypothesis states that electron transfer through Complexes I, III, and IV drives outward proton pumping from the matrix into the intermembrane space. This creates an electrical and pH gradient (outside positive and acidic), driving proton reentry through ATP synthase (Complex V) to produce ATP.',
    keyConcepts: ['Chemiosmotic Hypothesis', 'Mitchell Model', 'Proton Gradient', 'Complexes I, III, IV Pumping'],
    sourcePage: 13
  },
  {
    id: 23,
    topicId: 'etc-inhibitors',
    topicName: 'Oxidative Phosphorylation & Inhibitors',
    difficulty: 'Medium',
    text: 'What are the two structural subunits of ATP synthase (Complex V) and their respective locations?',
    options: [
      'F0 subunit in the inner membrane (proton channel) and F1 subunit protruding into the mitochondrial matrix (catalytic knob)',
      'F1 in the outer membrane and F0 in the intermembrane space',
      'Both F0 and F1 reside floating freely in the cytosol',
      'F0 subunit in the matrix and F1 subunit embedded in the cristae'
    ],
    correctAnswer: 0,
    explanation: 'ATP synthase consists of: (1) F0 subunit embedded in the inner mitochondrial membrane forming the proton channel, and (2) F1 subunit protruding into the matrix, which catalyzes the phosphorylation of ADP + Pi into ATP.',
    keyConcepts: ['ATP Synthase (Complex V)', 'F0 Subunit (Proton Channel)', 'F1 Subunit (Catalytic Knob)'],
    sourcePage: 14
  },
  {
    id: 24,
    topicId: 'etc-inhibitors',
    topicName: 'Oxidative Phosphorylation & Inhibitors',
    difficulty: 'Hard',
    text: 'What is the precise mechanism of action of the antibiotic Oligomycin?',
    options: [
      'It increases proton permeability across the lipid bilayer',
      'It binds to the stalk/F0 subunit of ATP synthase, closing the H+ channel and blocking proton re-entry',
      'It competitively inhibits succinate dehydrogenase',
      'It oxidizes cytochromes directly'
    ],
    correctAnswer: 1,
    explanation: 'Oligomycin binds to the stalk of ATP synthase (specifically the F0 subunit), closing the proton channel and preventing proton return into the matrix. Because oxidation and phosphorylation are tightly coupled, electron transport secondarily arrests.',
    keyConcepts: ['Oligomycin', 'F0 Channel Blocker', 'Inhibition of ATP Synthase', 'Coupled Arrest'],
    sourcePage: 15
  },
  {
    id: 25,
    topicId: 'etc-inhibitors',
    topicName: 'Oxidative Phosphorylation & Inhibitors',
    difficulty: 'Medium',
    text: 'How do chemical uncouplers such as 2,4-Dinitrophenol (2,4-DNP) cause hyperthermia (profuse sweating and fever)?',
    options: [
      'They inhibit glycogen phosphorylase in muscle',
      'They allow electron transport to continue while dissipating the proton gradient, converting all free energy into heat instead of ATP',
      'They block the absorption of glucose from the intestine',
      'They activate insulin receptors excessively'
    ],
    correctAnswer: 1,
    explanation: 'Uncouplers (such as 2,4-DNP, calcium, and toxic doses of aspirin) make the inner mitochondrial membrane leaky to protons. The proton gradient collapses, so respiration accelerates without ATP synthesis, dissipating all energy as heat (hyperthermia).',
    keyConcepts: ['Uncouplers', '2,4-Dinitrophenol', 'Proton Gradient Dissipation', 'Heat Liberation (Fever)'],
    sourcePage: 15
  },
  {
    id: 26,
    topicId: 'etc-inhibitors',
    topicName: 'Oxidative Phosphorylation & Inhibitors',
    difficulty: 'Hard',
    text: 'Which group of lipophilic antibiotics acts as "ionophores" by forming lipid-soluble complexes with K+ cations to dissipate mitochondrial membrane gradients?',
    options: [
      'Penicillin and Cephalosporin',
      'Valinomycin and Nigericin',
      'Streptomycin and Chloramphenicol',
      'Erythromycin and Clindamycin'
    ],
    correctAnswer: 1,
    explanation: 'Valinomycin and Nigericin are ionophores—lipophilic substances that bind cations like K+ and facilitate their transport across biological membranes, destroying both the electrical and pH gradients and thus inhibiting oxidative phosphorylation.',
    keyConcepts: ['Ionophores', 'Valinomycin & Nigericin', 'K+ Cation Transport', 'Gradient Collapse'],
    sourcePage: 15
  },

  // --- SUBSTRATE SHUTTLES & MITOCHONDRIA (Q27 - Q32) ---
  {
    id: 27,
    topicId: 'shuttles-mitochondria',
    topicName: 'Substrate Shuttles & Mitochondria',
    difficulty: 'Medium',
    text: 'Why are substrate shuttles required for the oxidation of cytosolic NADH + H+ produced by glycolysis?',
    options: [
      'Cytosolic NADH is chemically unstable at neutral pH',
      'The inner mitochondrial membrane is strictly impermeable to NADH',
      'NADH can only produce ATP when bound to ribosomes',
      'Glycolysis occurs exclusively inside the mitochondrial matrix'
    ],
    correctAnswer: 1,
    explanation: 'Cytosolic NADH produced during glycolysis cannot cross the inner mitochondrial membrane because the membrane lacks an NADH transporter. Reducing equivalents must be carried across via special shuttles (glycerophosphate or malate-aspartate shuttle).',
    keyConcepts: ['Inner Membrane Impermeability', 'Cytosolic NADH', 'Substrate Shuttles Required'],
    sourcePage: 16
  },
  {
    id: 28,
    topicId: 'shuttles-mitochondria',
    topicName: 'Substrate Shuttles & Mitochondria',
    difficulty: 'Medium',
    text: 'In the Glycerophosphate Shuttle (active in skeletal muscle and brain), what is the net ATP yield per cytosolic NADH oxidized?',
    options: [
      '1 ATP',
      '2 ATP',
      '3 ATP',
      '4 ATP'
    ],
    correctAnswer: 1,
    explanation: 'In the glycerophosphate shuttle, cytosolic glycerol-3-phosphate dehydrogenase uses NAD+, but the mitochondrial isozyme uses FAD as coenzyme. Reducing equivalents enter the ETC at CoQ as FADH2, generating 2 ATP per cytosolic NADH (2 × 2 = 4 ATP per glucose).',
    keyConcepts: ['Glycerophosphate Shuttle', 'Mitochondrial FAD', '2 ATP per NADH', 'Muscle and Brain'],
    sourcePage: 16
  },
  {
    id: 29,
    topicId: 'shuttles-mitochondria',
    topicName: 'Substrate Shuttles & Mitochondria',
    difficulty: 'Medium',
    text: 'In which tissues is the Malate-Aspartate Shuttle primarily active, and what is its net ATP yield per cytosolic NADH?',
    options: [
      'Skeletal muscle and brain; yields 2 ATP',
      'Liver and heart; yields 3 ATP',
      'Mature red blood cells; yields 0 ATP',
      'Adipose tissue only; yields 1 ATP'
    ],
    correctAnswer: 1,
    explanation: 'The malate-aspartate shuttle is predominant in liver and heart. Because both cytosolic and mitochondrial malate dehydrogenases use NAD+, reducing equivalents enter the respiratory chain as mitochondrial NADH, yielding 3 ATP per NADH (2 × 3 = 6 ATP per glucose).',
    keyConcepts: ['Malate-Aspartate Shuttle', 'Liver and Heart', '3 ATP per NADH', 'Mitochondrial NAD+'],
    sourcePage: 16
  },
  {
    id: 30,
    topicId: 'shuttles-mitochondria',
    topicName: 'Substrate Shuttles & Mitochondria',
    difficulty: 'Hard',
    text: 'Because the inner mitochondrial membrane is impermeable to oxaloacetate, how does it cross into the cytosol during the malate-aspartate shuttle?',
    options: [
      'It is converted by transamination into Aspartate (via AST/GOT), which exits through an amino acid transporter',
      'It is cleaved directly into two molecules of acetate',
      'It diffuses through porin channels in the inner membrane',
      'It binds to albumin in the matrix'
    ],
    correctAnswer: 0,
    explanation: 'The inner membrane has no oxaloacetate transporter. Inside the matrix, oxaloacetate undergoes transamination with glutamate (catalyzed by aspartate aminotransferase) to form aspartate and α-ketoglutarate, which readily cross into the cytosol.',
    keyConcepts: ['Oxaloacetate Impermeability', 'Transamination to Aspartate', 'Glutamate / α-KG Carrier'],
    sourcePage: 17
  },
  {
    id: 31,
    topicId: 'shuttles-mitochondria',
    topicName: 'Substrate Shuttles & Mitochondria',
    difficulty: 'Easy',
    text: 'What is the functional anatomical role of the mitochondrial cristae?',
    options: [
      'They synthesize glycogen granules',
      'They greatly increase the surface area of the inner mitochondrial membrane to accommodate respiratory complexes',
      'They act as a selective barrier to water',
      'They store calcium carbonate crystals'
    ],
    correctAnswer: 1,
    explanation: 'The convolutions of the inner mitochondrial membrane are called cristae. They serve to greatly increase the total membrane surface area, providing maximum docking space for respiratory chain complexes and ATP synthases.',
    keyConcepts: ['Cristae', 'Inner Membrane Convolutions', 'Surface Area Expansion', 'ETC Docking'],
    sourcePage: 18
  },
  {
    id: 32,
    topicId: 'shuttles-mitochondria',
    topicName: 'Substrate Shuttles & Mitochondria',
    difficulty: 'Hard',
    text: 'Which TCA cycle enzyme is located embedded in the inner mitochondrial membrane rather than soluble in the matrix?',
    options: [
      'Citrate synthase',
      'Isocitrate dehydrogenase',
      'Succinate dehydrogenase',
      'Malate dehydrogenase'
    ],
    correctAnswer: 2,
    explanation: 'All enzymes of the tricarboxylic acid (TCA) cycle are dissolved in the gel-like matrix of the mitochondrion EXCEPT succinate dehydrogenase, which is an integral inner membrane protein (Complex II).',
    keyConcepts: ['Succinate Dehydrogenase', 'Inner Membrane Embedded', 'Matrix Exception', 'Complex II'],
    sourcePage: 18
  },

  // --- CARBOHYDRATE DIGESTION & ABSORPTION (Q33 - Q40) ---
  {
    id: 33,
    topicId: 'carb-digestion-absorption',
    topicName: 'Carbohydrate Digestion & Absorption',
    difficulty: 'Easy',
    text: 'What are the optimal pH and activating ion for salivary α-amylase (ptyalin)?',
    options: [
      'Optimum pH 1.5; activated by H+ ions',
      'Optimum pH 6.7; activated by chloride ions (Cl-)',
      'Optimum pH 8.5; activated by bicarbonate ions (HCO3-)',
      'Optimum pH 4.0; activated by calcium ions (Ca2+)'
    ],
    correctAnswer: 1,
    explanation: 'Salivary α-amylase (ptyalin) operates at an optimum pH of 6.7 and requires chloride ions (Cl-) for activation. It is inactivated when swallowed into the highly acidic gastric juice of the stomach.',
    keyConcepts: ['Salivary α-Amylase (Ptyalin)', 'Optimum pH 6.7', 'Chloride (Cl-) Activator', 'Gastric Inactivation'],
    sourcePage: 19
  },
  {
    id: 34,
    topicId: 'carb-digestion-absorption',
    topicName: 'Carbohydrate Digestion & Absorption',
    difficulty: 'Medium',
    text: 'Which chemical linkage in dietary starch is cleaved by salivary and pancreatic α-amylases?',
    options: [
      'α(1->4) glucosidic bonds',
      'α(1->6) glucosidic bonds',
      'β(1->4) glucosidic bonds',
      'β(1->6) fructosidic bonds'
    ],
    correctAnswer: 0,
    explanation: 'Both salivary and pancreatic α-amylases are endoglucosidases that specifically hydrolyze internal α(1->4) glucosidic bonds. They cannot hydrolyze α(1->6) branch points or the α(1->4) bond of maltose.',
    keyConcepts: ['α(1->4) Glucosidic Bonds', 'Amylase Specificity', 'Cannot Cleave α(1->6)'],
    sourcePage: 19
  },
  {
    id: 35,
    topicId: 'carb-digestion-absorption',
    topicName: 'Carbohydrate Digestion & Absorption',
    difficulty: 'Easy',
    text: 'Which brush-border disaccharidase hydrolyzes lactose, and what are its cleavage products?',
    options: [
      'Maltase; produces two glucose molecules',
      'Sucrase; produces glucose and fructose',
      'Lactase (β-galactosidase); produces glucose and galactose',
      'α-Dextrinase; produces two galactose molecules'
    ],
    correctAnswer: 2,
    explanation: 'Lactase (a β-galactosidase located in the brush border of intestinal mucosal cells) hydrolyzes lactose into one molecule of D-glucose and one molecule of D-galactose.',
    keyConcepts: ['Lactase (β-Galactosidase)', 'Lactose Hydrolysis', 'Glucose + Galactose'],
    sourcePage: 20
  },
  {
    id: 36,
    topicId: 'carb-digestion-absorption',
    topicName: 'Carbohydrate Digestion & Absorption',
    difficulty: 'Medium',
    text: 'Why can humans not digest cellulose present in dietary plant matter?',
    options: [
      'Human digestive tracts have too acidic a pH for cellulose breakdown',
      'Cellulose contains β(1->4) glycosidic bonds, and humans lack β(1->4) glucosidase',
      'Cellulose is rapidly destroyed by salivary amylase before reaching the intestine',
      'Cellulose lacks carbon rings'
    ],
    correctAnswer: 1,
    explanation: 'Cellulose consists of repeating D-glucose units linked by β(1->4) bonds. Humans lack the enzyme β(1->4) glucosidase (cellulase). Unabsorbed cellulose acts as dietary fiber, retaining water to produce soft bulk and prevent constipation.',
    keyConcepts: ['Cellulose', 'β(1->4) Glycosidic Bonds', 'Lack of β-Glucosidase', 'Prevents Constipation'],
    sourcePage: 21
  },
  {
    id: 37,
    topicId: 'carb-digestion-absorption',
    topicName: 'Carbohydrate Digestion & Absorption',
    difficulty: 'Hard',
    text: 'What structural features are essential for a monosaccharide to undergo active transport via SGLT-1?',
    options: [
      'Pentose ring, keto group at C2, and phosphate at C6',
      'Hexose ring, an -OH group at position 2 oriented to the right, and a methyl/substituted methyl at C5',
      'Disaccharide structure with α(1->6) bond',
      'Branched ketone with no hydroxyl groups'
    ],
    correctAnswer: 1,
    explanation: 'For secondary active transport via SGLT-1, a sugar must possess: (1) a hexose ring, (2) an -OH group at carbon 2 pointing to the right (present in glucose and galactose), and (3) a methyl or substituted methyl group at carbon 5. Fructose lacks the C2 right -OH and is absorbed by facilitated diffusion.',
    keyConcepts: ['Active Transport Criteria', 'Hexose Ring', 'C2 -OH to the Right', 'SGLT-1 Specificity'],
    sourcePage: 21
  },
  {
    id: 38,
    topicId: 'carb-digestion-absorption',
    topicName: 'Carbohydrate Digestion & Absorption',
    difficulty: 'Medium',
    text: 'Which drug acts as a cardiac glycoside that inhibits the Na+-K+ ATPase pump, thereby halting active glucose absorption in the intestine?',
    options: [
      'Phlorhizin',
      'Ouabain',
      'Phenformin',
      'Aspirin'
    ],
    correctAnswer: 1,
    explanation: 'Ouabain is a cardiac glycoside that directly inhibits the Na+-K+ ATPase pump. Without the sodium gradient maintained by this pump, secondary active glucose absorption via SGLT-1 ceases.',
    keyConcepts: ['Ouabain', 'Na+-K+ ATPase Inhibitor', 'Abolishes Sodium Gradient', 'Stops SGLT-1'],
    sourcePage: 22
  },
  {
    id: 39,
    topicId: 'carb-digestion-absorption',
    topicName: 'Carbohydrate Digestion & Absorption',
    difficulty: 'Medium',
    text: 'Which glucose transporter functions primarily for facilitated diffusion of fructose in the intestine and sperm?',
    options: [
      'SGLT-1',
      'GLUT-2',
      'GLUT-4',
      'GLUT-5'
    ],
    correctAnswer: 3,
    explanation: 'GLUT-5 is a sodium-independent facilitative transporter specialized for fructose transport across the luminal membrane of enterocytes and in spermatozoa.',
    keyConcepts: ['GLUT-5', 'Fructose Transporter', 'Facilitated Diffusion', 'Intestine & Sperm'],
    sourcePage: 23
  },
  {
    id: 40,
    topicId: 'carb-digestion-absorption',
    topicName: 'Carbohydrate Digestion & Absorption',
    difficulty: 'Medium',
    text: 'What causes explosive watery diarrhea and abdominal cramps in lactase-deficient patients after drinking milk?',
    options: [
      'Overproduction of insulin by pancreatic beta cells',
      'Osmotic drawing of water into the large intestine and bacterial fermentation of undigested lactose producing CO2 gas and lactic acid',
      'Direct allergic histamine release causing pyloric spasms',
      'Rapid systemic hypoglycemia from sudden galactose release'
    ],
    correctAnswer: 1,
    explanation: 'Unabsorbed lactose exerts a high osmotic pressure in the intestinal lumen, drawing water from tissue into the bowel (causing osmotic diarrhea). Colonic bacteria ferment lactose into CO2, H2, and irritant organic acids, causing bloating, distention, and cramps.',
    keyConcepts: ['Lactase Deficiency', 'Osmotic Diarrhea', 'Bacterial Fermentation', 'CO2 Gas & Cramps'],
    sourcePage: 24
  },

  // --- GLYCOLYSIS STEPS & ENERGETICS (Q41 - Q50) ---
  {
    id: 41,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Easy',
    text: 'In which intracellular compartment does glycolysis (the Embden-Meyerhof pathway) take place?',
    options: [
      'Mitochondrial matrix',
      'Cytosol',
      'Endoplasmic reticulum lumen',
      'Nucleolus'
    ],
    correctAnswer: 1,
    explanation: 'All ten enzymatic reactions of glycolysis take place in the cytosol of the cell in all living tissue cells.',
    keyConcepts: ['Glycolysis Location', 'Cytosol', 'Embden-Meyerhof Pathway'],
    sourcePage: 25
  },
  {
    id: 42,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Medium',
    text: 'Why are mature red blood cells (erythrocytes) entirely dependent upon glycolysis for their ATP production?',
    options: [
      'They lack glucose transporters',
      'They contain no mitochondria and cannot perform oxidative phosphorylation',
      'Their hemoglobin destroys all acetyl-CoA',
      'They have an acidic intracellular pH'
    ],
    correctAnswer: 1,
    explanation: 'Mature erythrocytes lack mitochondria and nuclei; therefore, they cannot oxidize pyruvate via the Krebs cycle or perform oxidative phosphorylation, making anaerobic glycolysis to lactate their sole source of ATP (2 ATP per glucose).',
    keyConcepts: ['Mature RBCs', 'Lack Mitochondria', 'Sole ATP Source', 'Lactate End Product'],
    sourcePage: 26
  },
  {
    id: 43,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Easy',
    text: 'How many molecules of ATP are consumed during stage one (the energy-requiring preparatory phase) of glycolysis?',
    options: [
      '1 ATP',
      '2 ATP',
      '4 ATP',
      '6 ATP'
    ],
    correctAnswer: 1,
    explanation: 'Two molecules of ATP are consumed in the preparatory phase: (1) during phosphorylation of glucose to glucose-6-phosphate (by hexokinase/glucokinase), and (2) during phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate (by PFK-1).',
    keyConcepts: ['Stage One Glycolysis', '2 ATP Invested', 'Hexokinase', 'PFK-1'],
    sourcePage: 28
  },
  {
    id: 44,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Medium',
    text: 'Which enzyme splits fructose 1,6-bisphosphate into two triose phosphates (DHAP and glyceraldehyde-3-phosphate)?',
    options: [
      'Phosphohexose isomerase',
      'Aldolase',
      'Enolase',
      'Phosphotriose isomerase'
    ],
    correctAnswer: 1,
    explanation: 'Aldolase cleaves the 6-carbon intermediate fructose 1,6-bisphosphate into two 3-carbon triose phosphates: dihydroxyacetone phosphate (DHAP) and glyceraldehyde 3-phosphate (GAP).',
    keyConcepts: ['Aldolase', 'Fructose 1,6-bisphosphate Cleavage', 'DHAP and GAP Formation'],
    sourcePage: 26
  },
  {
    id: 45,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Hard',
    text: 'Which active-site amino acid functional group is essential for the catalytic activity of glyceraldehyde-3-phosphate dehydrogenase (GAPDH)?',
    options: [
      'A sulfhydryl (-SH) group of cysteine',
      'A hydroxyl (-OH) group of serine',
      'An amino (-NH2) group of lysine',
      'A carboxyl (-COOH) group of aspartate'
    ],
    correctAnswer: 0,
    explanation: 'Glyceraldehyde-3-phosphate dehydrogenase contains an essential sulfhydryl (-SH) group on a cysteine residue in its active center, which forms a high-energy thioester bond with the substrate during oxidation.',
    keyConcepts: ['GAPDH Active Center', 'Sulfhydryl (-SH) Group', 'Cysteine Residue', 'Target of Iodoacetate'],
    sourcePage: 34
  },
  {
    id: 46,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Medium',
    text: 'What are the two reactions in glycolysis that produce ATP by "substrate-level phosphorylation"?',
    options: [
      'Hexokinase and PFK-1 reactions',
      '1,3-Bisphosphoglycerate -> 3-Phosphoglycerate, and Phosphoenolpyruvate -> Pyruvate',
      'Enolase and Aldolase reactions',
      'Glucose-6-phosphate -> Fructose-6-phosphate, and DHAP -> GAP'
    ],
    correctAnswer: 1,
    explanation: 'Substrate-level phosphorylation is the direct synthesis of ATP from ADP at the enzyme without the ETC. In glycolysis, this occurs twice: (1) 1,3-BPG to 3-PG (phosphoglycerate kinase), yielding 2 ATP, and (2) PEP to pyruvate (pyruvate kinase), yielding 2 ATP.',
    keyConcepts: ['Substrate-Level Phosphorylation', 'Phosphoglycerate Kinase', 'Pyruvate Kinase', '4 ATP Produced'],
    sourcePage: 32
  },
  {
    id: 47,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Easy',
    text: 'What is the net ATP yield of anaerobic glycolysis per molecule of glucose oxidized to lactate?',
    options: [
      '0 ATP',
      '2 ATP',
      '6 ATP',
      '8 ATP'
    ],
    correctAnswer: 1,
    explanation: 'In anaerobic glycolysis: 4 ATP are produced by substrate-level phosphorylation, and 2 ATP are consumed during priming. Thus, Net ATP = 4 - 2 = 2 ATP per glucose molecule.',
    keyConcepts: ['Anaerobic Net Energy', '2 Net ATP', '4 Produced - 2 Utilized', 'Lactate End Product'],
    sourcePage: 29
  },
  {
    id: 48,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Medium',
    text: 'What is the net ATP yield of aerobic glycolysis per molecule of glucose (including re-oxidation of the 2 cytosolic NADH)?',
    options: [
      '2 ATP',
      '4 ATP',
      '6 or 8 ATP',
      '12 ATP'
    ],
    correctAnswer: 2,
    explanation: 'Aerobic glycolysis produces 2 net ATP via substrate-level phosphorylation, plus 2 cytosolic NADH. Depending on which shuttle is utilized (glycerophosphate shuttle gives 4 ATP vs malate-aspartate shuttle gives 6 ATP), total net yield is 6 or 8 ATP.',
    keyConcepts: ['Aerobic Net ATP', '6 or 8 ATP', 'Glycerophosphate (6)', 'Malate-Aspartate (8)'],
    sourcePage: 29
  },
  {
    id: 49,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Medium',
    text: 'Which glycolytic intermediate serves as the precursor for the synthesis of triacylglycerols and phospholipids (lipogenesis)?',
    options: [
      'Dihydroxyacetone phosphate (DHAP)',
      '2-Phosphoglycerate',
      'Enolpyruvate',
      'Fructose-6-phosphate'
    ],
    correctAnswer: 0,
    explanation: 'Dihydroxyacetone phosphate (DHAP) is reduced to glycerol-3-phosphate by glycerol-3-phosphate dehydrogenase, which provides the glycerol backbone required for triacylglycerol and phospholipid synthesis.',
    keyConcepts: ['DHAP Precursor', 'Glycerol-3-Phosphate', 'Triacylglycerol Synthesis', 'Lipogenesis'],
    sourcePage: 29
  },
  {
    id: 50,
    topicId: 'glycolysis-steps',
    topicName: 'Glycolysis: Steps & Energetics',
    difficulty: 'Hard',
    text: 'Which non-essential amino acids can be directly synthesized from 3-phosphoglycerate and pyruvate respectively?',
    options: [
      'Serine from 3-phosphoglycerate, and Alanine from pyruvate',
      'Glutamate from 3-phosphoglycerate, and Aspartate from pyruvate',
      'Leucine from 3-phosphoglycerate, and Valine from pyruvate',
      'Proline from 3-phosphoglycerate, and Cysteine from pyruvate'
    ],
    correctAnswer: 0,
    explanation: '3-Phosphoglycerate is oxidized and transaminated to synthesize Serine. Pyruvate undergoes transamination with glutamate (via ALT) to synthesize Alanine.',
    keyConcepts: ['Serine from 3-PG', 'Alanine from Pyruvate', 'Anabolic Intermediates'],
    sourcePage: 29
  }
];
