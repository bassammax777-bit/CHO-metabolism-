import { Question } from '../types/quiz';

export const questionsPart2: Question[] = [
  // --- GLYCOLYSIS REGULATION & RBC FEATURES (Q51 - Q57) ---
  {
    id: 51,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Medium',
    text: 'What are the three irreversible, committed key regulatory enzymes of glycolysis?',
    options: [
      'Phosphohexose isomerase, Aldolase, and Enolase',
      'Glucokinase (or Hexokinase), Phosphofructokinase-1 (PFK-1), and Pyruvate kinase',
      'Phosphoglycerate kinase, Phosphoglycerate mutase, and Lactate dehydrogenase',
      'Glyceraldehyde-3-phosphate dehydrogenase, Triose isomerase, and Citrate synthase'
    ],
    correctAnswer: 1,
    explanation: 'The three physiologically irreversible and committed steps of glycolysis are catalyzed by kinases: (1) Glucokinase/Hexokinase, (2) Phosphofructokinase-1 (PFK-1, the rate-limiting committed step), and (3) Pyruvate kinase.',
    keyConcepts: ['Three Irreversible Steps', 'Glucokinase/Hexokinase', 'PFK-1 (Rate-Limiting)', 'Pyruvate Kinase'],
    sourcePage: 30
  },
  {
    id: 52,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Hard',
    text: 'Which feature distinguishes Glucokinase (in liver) from Hexokinase (in extrahepatic tissues)?',
    options: [
      'Glucokinase has high affinity (low Km) and is inhibited by glucose-6-phosphate',
      'Glucokinase has low affinity (high Km), is induced by insulin, and is NOT inhibited by glucose-6-phosphate',
      'Hexokinase is only found in liver parenchymal cells',
      'Hexokinase cannot phosphorylate fructose or galactose'
    ],
    correctAnswer: 1,
    explanation: 'Glucokinase (liver only) has a high Km (low affinity) so it functions mainly after meals when portal blood glucose is high. It is induced by insulin and not inhibited by its product G-6-P. Hexokinase (all tissues) has a low Km (high affinity), is active even during fasting, and is allosterically inhibited by G-6-P.',
    keyConcepts: ['Glucokinase vs Hexokinase', 'Low Affinity (High Km)', 'Insulin Inducible', 'Not Inhibited by G-6-P'],
    sourcePage: 35
  },
  {
    id: 53,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Medium',
    text: 'What is the most potent allosteric activator of phosphofructokinase-1 (PFK-1) in hepatocytes?',
    options: [
      'ATP and Citrate',
      'Fructose 2,6-bisphosphate',
      'Glucose-6-phosphate',
      'Phosphoenolpyruvate'
    ],
    correctAnswer: 1,
    explanation: 'Fructose 2,6-bisphosphate is the most potent positive allosteric activator of PFK-1. It overrides the inhibitory effect of ATP, powerfully stimulating glycolysis in the fed state. It also inhibits fructose 1,6-bisphosphatase in gluconeogenesis.',
    keyConcepts: ['Fructose 2,6-Bisphosphate', 'Most Potent PFK-1 Activator', 'Overrides ATP Inhibition', 'Fed State Signal'],
    sourcePage: 31
  },
  {
    id: 54,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Hard',
    text: 'How does the bifunctional enzyme PFK-2 regulate glycolysis in response to glucagon and insulin?',
    options: [
      'Insulin stimulates its kinase activity producing F-2,6-BP to activate glycolysis; glucagon stimulates its phosphatase activity, reducing F-2,6-BP',
      'Glucagon stimulates its kinase activity to promote glycolysis',
      'Insulin degrades F-2,6-BP to stimulate gluconeogenesis',
      'PFK-2 only functions in skeletal muscle during exercise'
    ],
    correctAnswer: 0,
    explanation: 'PFK-2 is a bifunctional enzyme with kinase and phosphatase domains. In the fed state, insulin stimulates the kinase domain, raising F-2,6-BP and stimulating PFK-1 (glycolysis). During fasting, glucagon-induced phosphorylation activates the phosphatase domain, lowering F-2,6-BP and halting glycolysis.',
    keyConcepts: ['Bifunctional PFK-2', 'Insulin Activates Kinase', 'Glucagon Activates Phosphatase', 'F-2,6-BP Switch'],
    sourcePage: 31
  },
  {
    id: 55,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Medium',
    text: 'What is the "Pasteur Effect" in carbohydrate metabolism?',
    options: [
      'The conversion of lactose to lactic acid in sour milk',
      'The inhibition of glycolysis (anaerobic oxidation) in the presence of oxygen, mediated by elevated ATP and citrate',
      'The rapid fermentation of glucose to ethanol by yeast',
      'The stimulation of gluconeogenesis by high AMP'
    ],
    correctAnswer: 1,
    explanation: 'The Pasteur effect is the inhibition of glycolysis by oxygen. Under aerobic conditions, mitochondrial oxidation yields abundant ATP and citrate, both of which allosterically inhibit PFK-1, thereby slowing glucose consumption.',
    keyConcepts: ['Pasteur Effect', 'Aerobic Inhibition of Glycolysis', 'ATP & Citrate Inhibition of PFK-1'],
    sourcePage: 47
  },
  {
    id: 56,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Medium',
    text: 'What is the primary physiological function of 2,3-bisphosphoglycerate (2,3-BPG) produced in RBCs via the Rapoport-Luebering cycle?',
    options: [
      'It produces two additional ATP molecules',
      'It binds deoxyhemoglobin and decreases hemoglobin’s affinity for oxygen, promoting O2 release to peripheral tissues',
      'It directly reduces methemoglobin to functional hemoglobin',
      'It activates phosphofructokinase-1'
    ],
    correctAnswer: 1,
    explanation: 'In red blood cells, 2,3-BPG is synthesized from 1,3-BPG via bisphosphoglycerate mutase (bypassing the phosphoglycerate kinase ATP step). 2,3-BPG binds to hemoglobin and decreases its oxygen affinity, facilitating unloading of O2 to oxygen-deprived tissues.',
    keyConcepts: ['2,3-BPG', 'Rapoport-Luebering Cycle', 'Decreases Hb-O2 Affinity', 'Tissue Oxygen Delivery'],
    sourcePage: 33
  },
  {
    id: 57,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Hard',
    text: 'Which enzyme system uses NADH produced by glycolysis to reduce Met-hemoglobin (Fe3+) back into functional Hemoglobin (Fe2+) in RBCs?',
    options: [
      'Glutathione peroxidase',
      'Cytochrome b5-methemoglobin reductase',
      'Superoxide dismutase',
      'Lactate dehydrogenase'
    ],
    correctAnswer: 1,
    explanation: 'Met-hemoglobin contains ferric iron (Fe3+) which cannot reversibly bind O2. Glycolysis generates NADH + H+, which is utilized by the cytochrome b5-methemoglobin reductase system to reduce Fe3+ back to functional ferrous hemoglobin (Fe2+).',
    keyConcepts: ['Met-Hemoglobin Reduction', 'Cytochrome b5 Reductase', 'NADH Dependent', 'Maintains Fe2+ State'],
    sourcePage: 33
  },

  // --- CLINICAL GLYCOLYSIS, INHIBITORS & CORI CYCLE (Q58 - Q64) ---
  {
    id: 58,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Medium',
    text: 'Why do clinical diagnostic laboratories add sodium fluoride to blood collection tubes used for measuring blood glucose?',
    options: [
      'Fluoride destroys red blood cell membranes instantly',
      'Fluoride inhibits the glycolytic enzyme enolase, preventing in vitro consumption of glucose by RBCs before testing',
      'Fluoride binds calcium to prevent clotting',
      'Fluoride converts all glucose into fructose'
    ],
    correctAnswer: 1,
    explanation: 'In collected blood samples, intact RBCs continue glycolysis, artificially lowering plasma glucose levels by ~10 mg/dL per hour. Sodium fluoride forms a complex with magnesium and phosphate that inhibits enolase, stopping glycolysis and preserving accurate glucose readings.',
    keyConcepts: ['Sodium Fluoride', 'Enolase Inhibitor', 'Preserves Blood Glucose', 'Stops In Vitro Glycolysis'],
    sourcePage: 36
  },
  {
    id: 59,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Hard',
    text: 'How does Arsenate poison glycolysis in vitro?',
    options: [
      'It irreversibly blocks glucokinase',
      'It competes with inorganic phosphate (Pi) in the glyceraldehyde-3-phosphate dehydrogenase reaction, creating an unstable compound that hydrolyzes without producing ATP',
      'It destroys cytochrome oxidase',
      'It prevents the exit of lactate from the cell'
    ],
    correctAnswer: 1,
    explanation: 'Arsenate resembles inorganic phosphate (Pi) structurally and competes for the active site of GAPDH, forming 1-arseno-3-phosphoglycerate. This compound spontaneously hydrolyzes to 3-PG, uncoupling substrate-level phosphorylation so that no ATP is generated.',
    keyConcepts: ['Arsenate Poisoning', 'Competes with Pi at GAPDH', 'Uncouples ATP Generation', 'No Substrate Phosphorylation'],
    sourcePage: 36
  },
  {
    id: 60,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Easy',
    text: 'What are the terminal end products of alcoholic fermentation of glucose by yeast enzymes?',
    options: [
      'Lactate and ATP only',
      'Carbon dioxide (CO2) and Ethanol',
      'Methanol and formic acid',
      'Acetic acid and water'
    ],
    correctAnswer: 1,
    explanation: 'In yeast fermentation, pyruvate produced by glycolysis is decarboxylated by pyruvate decarboxylase to acetaldehyde and CO2, followed by reduction to ethanol by alcohol dehydrogenase (consuming NADH).',
    keyConcepts: ['Fermentation', 'CO2 and Ethanol', 'Pyruvate Decarboxylase', 'Alcohol Dehydrogenase'],
    sourcePage: 36
  },
  {
    id: 61,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Medium',
    text: 'What is the definition of the Cori Cycle (lactic acid cycle)?',
    options: [
      'The oxidation of fatty acids in adipose tissue to generate acetyl-CoA',
      'The conversion of glucose to lactate in peripheral tissues (muscles/RBCs), transport to the liver, and reconversion to glucose via gluconeogenesis',
      'The synthesis of ketone bodies from leucine in the brain',
      'The recycling of adenine nucleotides between muscle and kidney'
    ],
    correctAnswer: 1,
    explanation: 'The Cori Cycle is the physiological pathway where glucose is converted to lactate in contracting skeletal muscle and RBCs, released into the blood, taken up by the liver, converted back to glucose via gluconeogenesis, and returned to peripheral tissues.',
    keyConcepts: ['Cori Cycle', 'Lactate to Liver', 'Hepatic Gluconeogenesis', 'Peripheral Recycling'],
    sourcePage: 36
  },
  {
    id: 62,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Hard',
    text: 'Why does genetic deficiency of Pyruvate Kinase (PK) lead to non-spherocytic hemolytic anemia?',
    options: [
      'Pyruvate accumulates and precipitates in the red cell membrane',
      'Lack of PK decreases ATP production; insufficient ATP impairs the Na+-K+ ATPase pump, causing osmotic swelling and hemolysis',
      'PK deficiency prevents oxygen from binding to hemoglobin',
      'It causes excessive glycogen accumulation in lysosomes'
    ],
    correctAnswer: 1,
    explanation: 'RBCs lack mitochondria and depend 100% on glycolytic ATP. Pyruvate kinase deficiency severely drops ATP yield. Without ATP, membrane Na+-K+ ATPase fails, electrolyte and water balance cannot be maintained, causing cell deformity, membrane rigidity, and premature splenic hemolysis.',
    keyConcepts: ['Pyruvate Kinase Deficiency', 'Hemolytic Anemia', 'Na+-K+ ATPase Failure', 'Osmotic Fragility'],
    sourcePage: 37
  },
  {
    id: 63,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Medium',
    text: 'What biochemical disturbance defines Lactic Acidosis?',
    options: [
      'High blood glucose and high blood urea nitrogen',
      'Lowered blood pH and decreased bicarbonate levels due to blood lactate accumulation above normal limits',
      'Elevated blood insulin and respiratory alkalosis',
      'Deposition of urate crystals in joints'
    ],
    correctAnswer: 1,
    explanation: 'Lactic acidosis is characterized by elevated blood lactate, which consumes bicarbonate buffer (yielding carbonic acid, CO2, and water), resulting in metabolic acidosis with a decreased arterial pH and decreased serum bicarbonate.',
    keyConcepts: ['Lactic Acidosis', 'Low Blood pH', 'Bicarbonate Depletion', 'Hyperlactatemia'],
    sourcePage: 38
  },
  {
    id: 64,
    topicId: 'glycolysis-regulation',
    topicName: 'Glycolysis Regulation & RBC Features',
    difficulty: 'Hard',
    text: 'Which oral hypoglycemic biguanide was historically associated with severe lactic acidosis by increasing anaerobic glycolysis?',
    options: [
      'Glibenclamide',
      'Phenformin',
      'Acarbose',
      'Pioglitazone'
    ],
    correctAnswer: 1,
    explanation: 'Phenformin (a biguanide oral hypoglycemic agent) inhibits complex I of the respiratory chain, causing excessive anaerobic glycolysis and high lactate production, frequently precipitating fatal lactic acidosis.',
    keyConcepts: ['Phenformin', 'Biguanide Side Effect', 'Anaerobic Overdrive', 'Severe Lactic Acidosis'],
    sourcePage: 38
  },

  // --- PYRUVATE DEHYDROGENASE COMPLEX (Q65 - Q70) ---
  {
    id: 65,
    topicId: 'pdh-complex',
    topicName: 'Pyruvate Dehydrogenase (PDH)',
    difficulty: 'Medium',
    text: 'What are the three catalytic enzyme subunits of the multienzyme Pyruvate Dehydrogenase (PDH) Complex?',
    options: [
      'Hexokinase, PFK-1, and Pyruvate kinase',
      'Pyruvate decarboxylase (E1), Dihydrolipoyl transacetylase (E2), and Dihydrolipoyl dehydrogenase (E3)',
      'Citrate synthase, Aconitase, and Isocitrate dehydrogenase',
      'Enolase, Aldolase, and Phosphoglycerate mutase'
    ],
    correctAnswer: 1,
    explanation: 'The PDH complex consists of three core enzymes: E1 = Pyruvate decarboxylase, E2 = Dihydrolipoyl transacetylase, and E3 = Dihydrolipoyl dehydrogenase, working together inside the mitochondrial matrix.',
    keyConcepts: ['PDH Complex Subunits', 'E1 (Decarboxylase)', 'E2 (Transacetylase)', 'E3 (Dehydrogenase)'],
    sourcePage: 38
  },
  {
    id: 66,
    topicId: 'pdh-complex',
    topicName: 'Pyruvate Dehydrogenase (PDH)',
    difficulty: 'Medium',
    text: 'Which 5 B-complex vitamin-derived coenzymes are indispensable for the PDH complex reaction?',
    options: [
      'Vitamin C, Folic acid, Biotin, Vitamin B12, and Vitamin K',
      'TPP (Vit B1), Lipoic acid, CoASH (Pantothenate), FAD (Vit B2), and NAD+ (Vit B3)',
      'Pyridoxal phosphate, Biotin, Retinol, Cholecalciferol, and Tocopherol',
      'Niacin, Riboflavin, Ascorbate, Carnitine, and Cobalamin'
    ],
    correctAnswer: 1,
    explanation: 'PDH requires 5 coenzymes: Thiamine pyrophosphate (TPP from Vitamin B1), Lipoic acid, Coenzyme A (from Pantothenate/B5), FAD (from Riboflavin/B2), and NAD+ (from Niacin/B3).',
    keyConcepts: ['5 Coenzymes of PDH', 'TPP (B1)', 'Lipoic Acid', 'CoASH', 'FAD & NAD+'],
    sourcePage: 39
  },
  {
    id: 67,
    topicId: 'pdh-complex',
    topicName: 'Pyruvate Dehydrogenase (PDH)',
    difficulty: 'Easy',
    text: 'How many ATP molecules are generated through the respiratory chain by the oxidative decarboxylation of ONE molecule of pyruvate to acetyl-CoA?',
    options: [
      '1 ATP',
      '2 ATP',
      '3 ATP',
      '12 ATP'
    ],
    correctAnswer: 2,
    explanation: 'Oxidative decarboxylation of one pyruvate to acetyl-CoA reduces one NAD+ to NADH + H+. Oxidation of this NADH via the mitochondrial respiratory chain generates 3 ATP molecules (6 ATP per glucose).',
    keyConcepts: ['PDH Energetics', '1 NADH per Pyruvate', '3 ATP Generated', '6 ATP per Glucose'],
    sourcePage: 39
  },
  {
    id: 68,
    topicId: 'pdh-complex',
    topicName: 'Pyruvate Dehydrogenase (PDH)',
    difficulty: 'Hard',
    text: 'In which state is the Pyruvate Dehydrogenase complex active, and what controls this covalent modification?',
    options: [
      'Phosphorylated state is active; stimulated by ATP and NADH',
      'Dephosphorylated state is active; activated by PDH phosphatase (promoted by Insulin and Ca2+)',
      'Methylated state is active; stimulated by glucagon',
      'Acetylated state is active; promoted by citrate'
    ],
    correctAnswer: 1,
    explanation: 'PDH is regulated by reversible phosphorylation: Dephosphorylated PDH is ACTIVE; Phosphorylated PDH is INACTIVE. PDH phosphatase removes phosphate to activate PDH (stimulated by insulin and Ca2+). PDH kinase adds phosphate to inactivate it (stimulated by ATP, NADH, and acetyl-CoA).',
    keyConcepts: ['PDH Covalent Regulation', 'Dephosphorylated = Active', 'PDH Phosphatase', 'Insulin & Ca2+ Activators'],
    sourcePage: 40
  },
  {
    id: 69,
    topicId: 'pdh-complex',
    topicName: 'Pyruvate Dehydrogenase (PDH)',
    difficulty: 'Medium',
    text: 'Which heavy metal/poison binds to the sulfhydryl groups of lipoic acid, inhibiting PDH in vitro?',
    options: [
      'Arsenic',
      'Lead',
      'Iron',
      'Zinc'
    ],
    correctAnswer: 0,
    explanation: 'Arsenic (arsenite) reacts with the two adjacent sulfhydryl (-SH) groups of reduced lipoic acid, forming a stable cyclic chelate that inactivates the dihydrolipoyl transacetylase (E2) subunit of PDH.',
    keyConcepts: ['Arsenic Poisoning', 'Lipoic Acid Chelation', 'Inhibition of PDH', 'Sulfhydryl Binding'],
    sourcePage: 40
  },
  {
    id: 70,
    topicId: 'pdh-complex',
    topicName: 'Pyruvate Dehydrogenase (PDH)',
    difficulty: 'Hard',
    text: 'Why does severe Thiamine (Vitamin B1) deficiency cause dramatic impairment of pyruvate oxidation and brain dysfunction (Wernicke-Korsakoff)?',
    options: [
      'Thiamine is the precursor of NAD+',
      'Thiamine pyrophosphate (TPP) is the essential prosthetic group for pyruvate decarboxylase (E1); lack of TPP arrests aerobic glucose catabolism in the brain',
      'Thiamine is needed to absorb glucose from the stomach',
      'Thiamine activates glucokinase in astrocytes'
    ],
    correctAnswer: 1,
    explanation: 'Thiamine is converted to TPP, the coenzyme for pyruvate decarboxylase (E1). The central nervous system relies almost exclusively on aerobic glucose oxidation. In thiamine deficiency (Beriberi, Wernicke encephalopathy), pyruvate cannot enter the TCA cycle, causing cellular energy depletion and fatal lactic acidosis.',
    keyConcepts: ['Thiamine Deficiency', 'TPP Coenzyme Deficit', 'Brain Energy Failure', 'Lactic Acid Build-up'],
    sourcePage: 40
  },

  // --- TRICARBOXYLIC ACID (KREBS / TCA) CYCLE (Q71 - Q77) ---
  {
    id: 71,
    topicId: 'tca-cycle',
    topicName: 'Citric Acid (Krebs / TCA) Cycle',
    difficulty: 'Easy',
    text: 'What are the two substrates that condense in the initial step of the Krebs cycle to synthesize Citrate (6 carbons)?',
    options: [
      'Pyruvate (3C) and Lactate (3C)',
      'Acetyl-CoA (2C) and Oxaloacetate (4C)',
      'Succinyl-CoA (4C) and Glycine (2C)',
      'α-Ketoglutarate (5C) and CO2 (1C)'
    ],
    correctAnswer: 1,
    explanation: 'The citric acid cycle begins when the 2-carbon acetyl unit of Acetyl-CoA condenses with the 4-carbon dicarboxylic acid Oxaloacetate, catalyzed by Citrate Synthase to form the 6-carbon tricarboxylic acid Citrate.',
    keyConcepts: ['Citrate Synthase', 'Acetyl-CoA (2C)', 'Oxaloacetate (4C)', 'Citrate (6C)'],
    sourcePage: 41
  },
  {
    id: 72,
    topicId: 'tca-cycle',
    topicName: 'Citric Acid (Krebs / TCA) Cycle',
    difficulty: 'Medium',
    text: 'Which step in the TCA cycle produces a high-energy phosphate bond (GTP or ATP) by substrate-level phosphorylation?',
    options: [
      'Citrate to isocitrate',
      'Succinyl-CoA to Succinate (catalyzed by succinate thiokinase)',
      'Succinate to fumarate',
      'Malate to oxaloacetate'
    ],
    correctAnswer: 1,
    explanation: 'Succinate thiokinase (succinyl-CoA synthetase) cleaves the high-energy thioester bond of Succinyl-CoA to form succinate, directly generating 1 high-energy phosphate molecule (GTP or ATP) by substrate-level phosphorylation.',
    keyConcepts: ['Succinate Thiokinase', 'Substrate-Level Phosphorylation', 'Succinyl-CoA to Succinate', '1 GTP/ATP'],
    sourcePage: 41
  },
  {
    id: 73,
    topicId: 'tca-cycle',
    topicName: 'Citric Acid (Krebs / TCA) Cycle',
    difficulty: 'Easy',
    text: 'How many total ATP molecules are produced by the complete catabolism of ONE molecule of Acetyl-CoA through the Krebs cycle?',
    options: [
      '2 ATP',
      '8 ATP',
      '12 ATP',
      '38 ATP'
    ],
    correctAnswer: 2,
    explanation: 'One turn of the TCA cycle yields: 3 NADH (9 ATP via ETC), 1 FADH2 (2 ATP via ETC), and 1 GTP/ATP via substrate-level phosphorylation, making a total of 12 ATP molecules per Acetyl-CoA.',
    keyConcepts: ['12 ATP per Acetyl-CoA', '3 NADH (9 ATP)', '1 FADH2 (2 ATP)', '1 GTP Substrate-Level'],
    sourcePage: 42
  },
  {
    id: 74,
    topicId: 'tca-cycle',
    topicName: 'Citric Acid (Krebs / TCA) Cycle',
    difficulty: 'Medium',
    text: 'What is the grand total of ATP molecules synthesized by the COMPLETE aerobic oxidation of ONE molecule of Glucose to CO2 and H2O?',
    options: [
      '24 or 26 ATP',
      '36 or 38 ATP',
      '44 or 48 ATP',
      '12 ATP'
    ],
    correctAnswer: 1,
    explanation: 'Complete oxidation of one glucose molecule yields 36 or 38 ATP: Glycolysis = 6 or 8 ATP; Pyruvate to Acetyl-CoA (2 pyruvates) = 2 × 3 = 6 ATP; Krebs cycle (2 acetyl-CoA) = 2 × 12 = 24 ATP. Total = 36 or 38 ATP.',
    keyConcepts: ['Complete Glucose Oxidation', '36 or 38 ATP', 'Glycolysis (6-8)', 'PDH (6)', 'TCA (24)'],
    sourcePage: 43
  },
  {
    id: 75,
    topicId: 'tca-cycle',
    topicName: 'Citric Acid (Krebs / TCA) Cycle',
    difficulty: 'Hard',
    text: 'Which competitive inhibitor binds to succinate dehydrogenase because of its close structural similarity to succinate?',
    options: [
      'Fluoroacetate',
      'Arsenite',
      'Malonic acid (Malonate)',
      'Rotenone'
    ],
    correctAnswer: 2,
    explanation: 'Malonic acid (malonate, -OOC-CH2-COO-) is a dicarboxylic acid containing 3 carbons that acts as a classic competitive inhibitor of succinate dehydrogenase by blocking the active site without being dehydrogenated.',
    keyConcepts: ['Malonate (Malonic Acid)', 'Competitive Inhibitor', 'Succinate Dehydrogenase', 'Structural Analogue'],
    sourcePage: 45
  },
  {
    id: 76,
    topicId: 'tca-cycle',
    topicName: 'Citric Acid (Krebs / TCA) Cycle',
    difficulty: 'Hard',
    text: 'How does Fluoroacetate poison the citric acid cycle?',
    options: [
      'It condenses into Fluorocitrate, which selectively inhibits the enzyme Aconitase',
      'It precipitates calcium ions in the matrix',
      'It prevents the oxidation of FADH2',
      'It uncouples oxidative phosphorylation'
    ],
    correctAnswer: 0,
    explanation: 'Fluoroacetate is condensed with oxaloacetate by citrate synthase into fluorocitrate ("suicide inhibition"). Fluorocitrate then irreversibly inhibits aconitase, blocking the isomerization of citrate to isocitrate.',
    keyConcepts: ['Fluoroacetate', 'Fluorocitrate Formation', 'Aconitase Inhibitor', 'TCA Blockade'],
    sourcePage: 45
  },
  {
    id: 77,
    topicId: 'tca-cycle',
    topicName: 'Citric Acid (Krebs / TCA) Cycle',
    difficulty: 'Medium',
    text: 'Why is the Krebs cycle termed "amphibolic"?',
    options: [
      'Because it occurs in both humans and plants',
      'Because it functions both in catabolism (oxidizing fuel molecules) and anabolism (supplying carbon intermediates for amino acids, glucose, and heme)',
      'Because it operates equally under aerobic and anaerobic conditions',
      'Because it uses both RNA and DNA enzymes'
    ],
    correctAnswer: 1,
    explanation: 'The TCA cycle is amphibolic because it serves dual purposes: Catabolic (terminal common pathway for oxidative breakdown of carbs, lipids, and proteins) and Anabolic (provides precursors like α-ketoglutarate for glutamate, oxaloacetate for aspartate/glucose, and succinyl-CoA for heme synthesis).',
    keyConcepts: ['Amphibolic Nature', 'Catabolic Breakdown', 'Anabolic Synthesis', 'Heme & Amino Acid Precursors'],
    sourcePage: 43
  },

  // --- PENTOSE PHOSPHATE PATHWAY & FAVISM (Q78 - Q83) ---
  {
    id: 78,
    topicId: 'hmp-shunt-favism',
    topicName: 'Pentose Phosphate Pathway & Favism',
    difficulty: 'Easy',
    text: 'What are the two primary metabolic products generated by the Pentose Phosphate Pathway (Hexose Monophosphate Shunt)?',
    options: [
      'ATP and Lactate',
      'NADPH + H+ and Pentoses (such as Ribose-5-phosphate)',
      'NADH and Acetyl-CoA',
      'FADH2 and Glycogen'
    ],
    correctAnswer: 1,
    explanation: 'The main physiological functions of the PPP are: (1) generation of reducing power in the form of NADPH + H+ (for reductive biosynthesis and antioxidant defense), and (2) production of pentoses like ribose-5-phosphate for RNA, DNA, and nucleotide synthesis. Zero ATP is consumed or produced.',
    keyConcepts: ['HMP Shunt Products', 'NADPH + H+', 'Ribose-5-Phosphate', 'No ATP Involved'],
    sourcePage: 47
  },
  {
    id: 79,
    topicId: 'hmp-shunt-favism',
    topicName: 'Pentose Phosphate Pathway & Favism',
    difficulty: 'Medium',
    text: 'Which is the key, committed, and rate-limiting enzyme of the oxidative phase of the pentose phosphate pathway?',
    options: [
      'Transketolase',
      'Transaldolase',
      'Glucose-6-phosphate dehydrogenase (G6PD)',
      'Phosphohexose isomerase'
    ],
    correctAnswer: 2,
    explanation: 'Glucose-6-phosphate dehydrogenase (G6PD) catalyzes the first, rate-limiting, irreversible reaction of the oxidative phase, converting glucose-6-phosphate to 6-phosphogluconolactone while reducing NADP+ to NADPH.',
    keyConcepts: ['G6PD Key Enzyme', 'Rate-Limiting Step', 'Oxidative Phase', 'Produces NADPH'],
    sourcePage: 48
  },
  {
    id: 80,
    topicId: 'hmp-shunt-favism',
    topicName: 'Pentose Phosphate Pathway & Favism',
    difficulty: 'Hard',
    text: 'Which coenzyme is required by the non-oxidative enzyme Transketolase?',
    options: [
      'Thiamin pyrophosphate (TPP)',
      'Biotin',
      'Pyridoxal phosphate (PLP)',
      'Coenzyme A'
    ],
    correctAnswer: 0,
    explanation: 'Transketolase transfers 2-carbon ketol units between phosphorylated sugars in the reversible non-oxidative branch of the HMP shunt. It strictly requires Thiamin pyrophosphate (TPP, Vitamin B1) as its coenzyme.',
    keyConcepts: ['Transketolase', 'TPP Coenzyme', 'Vitamin B1 Dependent', 'Two-Carbon Transfer'],
    sourcePage: 49
  },
  {
    id: 81,
    topicId: 'hmp-shunt-favism',
    topicName: 'Pentose Phosphate Pathway & Favism',
    difficulty: 'Medium',
    text: 'How does NADPH protect red blood cell membranes against hemolytic oxidative damage?',
    options: [
      'It is used by glutathione reductase to regenerate reduced glutathione (G-SH), which neutralizes toxic H2O2',
      'It acts as an antibody against complement proteins',
      'It directly binds to membrane phospholipids to make them rigid',
      'It phosphorylates spectrin in the cytoskeleton'
    ],
    correctAnswer: 0,
    explanation: 'RBCs generate reactive oxygen species like hydrogen peroxide (H2O2) that cause lipid peroxidation. Glutathione peroxidase removes H2O2 by converting reduced glutathione (G-SH) to oxidized glutathione (G-S-S-G). Glutathione reductase uses NADPH to regenerate active G-SH.',
    keyConcepts: ['Reduced Glutathione (G-SH)', 'Glutathione Reductase', 'Removal of H2O2', 'RBC Membrane Integrity'],
    sourcePage: 50
  },
  {
    id: 82,
    topicId: 'hmp-shunt-favism',
    topicName: 'Pentose Phosphate Pathway & Favism',
    difficulty: 'Medium',
    text: 'During "respiratory burst" in phagocytosing white blood cells, what cytotoxic agent is produced by myeloperoxidase to kill engulfed bacteria?',
    options: [
      'Hypochlorite (HOCl-)',
      'Lactic acid',
      'Carbonic acid',
      'Uric acid'
    ],
    correctAnswer: 0,
    explanation: 'Phagocytosis triggers respiratory burst: NADPH oxidase converts O2 to superoxide (O2•-), which superoxide dismutase turns into H2O2. Then myeloperoxidase combines H2O2 with chloride (Cl-) to produce hypochlorite (HOCl-), a potent antibacterial agent.',
    keyConcepts: ['Respiratory Burst', 'NADPH Oxidase', 'Myeloperoxidase', 'Hypochlorite (HOCl-)'],
    sourcePage: 51
  },
  {
    id: 83,
    topicId: 'hmp-shunt-favism',
    topicName: 'Pentose Phosphate Pathway & Favism',
    difficulty: 'Hard',
    text: 'What clinical manifestation occurs in patients with G6PD deficiency (Favism) after ingesting fava beans, primaquine, or sulfa drugs?',
    options: [
      'Severe hypoglycemia with massive glycogen accumulation',
      'Acute hemolytic crisis presenting with jaundice, dark urine, and severe drop in hemoglobin',
      'Chronic diarrhea and steatorrhea',
      'Spastic muscle rigidity'
    ],
    correctAnswer: 1,
    explanation: 'G6PD-deficient erythrocytes cannot generate enough NADPH to maintain reduced glutathione when confronted with oxidative stressors (fava beans, primaquine, sulfonamides, or infections). Unchecked H2O2 causes lipid peroxidation and Heinz body formation, precipitating acute intravascular hemolysis, jaundice, and hemoglobinuria.',
    keyConcepts: ['Favism / G6PD Deficiency', 'Acute Hemolytic Anemia', 'Fava Beans & Primaquine Triggers', 'Jaundice & Low Hb'],
    sourcePage: 52
  },

  // --- URONIC ACID PATHWAY & ESSENTIAL PENTOSURIA (Q84 - Q86) ---
  {
    id: 84,
    topicId: 'uronic-acid-pathway',
    topicName: 'Uronic Acid Pathway & Pentosuria',
    difficulty: 'Medium',
    text: 'What is the principal biological function of UDP-glucuronic acid synthesized in the uronic acid pathway in humans?',
    options: [
      'Synthesis of ATP in the mitochondria',
      'Synthesis of glycosaminoglycans (GAGs), conjugation of bilirubin and steroid hormones, and xenobiotic detoxification',
      'Direct degradation of glycogen in skeletal muscle',
      'Stimulation of glucagon secretion'
    ],
    correctAnswer: 1,
    explanation: 'UDP-glucuronic acid is used for: (1) synthesis of glycosaminoglycans (proteoglycans), (2) conjugation reactions in the liver to increase water solubility of bilirubin and steroid hormones for excretion, and (3) detoxification of xenobiotics (e.g. phenols).',
    keyConcepts: ['UDP-Glucuronic Acid', 'Conjugation of Bilirubin', 'Detoxification', 'Glycosaminoglycan (GAG) Synthesis'],
    sourcePage: 55
  },
  {
    id: 85,
    topicId: 'uronic-acid-pathway',
    topicName: 'Uronic Acid Pathway & Pentosuria',
    difficulty: 'Hard',
    text: 'Why can humans not synthesize Vitamin C (L-ascorbic acid) from glucose via the uronic acid pathway?',
    options: [
      'Humans lack UDP-glucose dehydrogenase',
      'The conversion of L-gulonolactone to L-ascorbic acid is blocked due to the genetic absence of the enzyme L-gulonolactone oxidase',
      'Ascorbic acid is toxic to primate hepatocytes',
      'Dietary vitamin C inhibits liver enzymes'
    ],
    correctAnswer: 1,
    explanation: 'Unlike most mammals, humans, primates, and guinea pigs cannot synthesize Vitamin C (L-ascorbic acid) because the pathway is genetically blocked at the last step in human liver due to the absence of the enzyme L-gulonolactone oxidase.',
    keyConcepts: ['Vitamin C Synthesis Block', 'Lack of L-Gulonolactone Oxidase', 'Dietary Essential'],
    sourcePage: 54
  },
  {
    id: 86,
    topicId: 'uronic-acid-pathway',
    topicName: 'Uronic Acid Pathway & Pentosuria',
    difficulty: 'Medium',
    text: 'What enzyme deficiency causes the benign, asymptomatic hereditary condition known as "Essential Pentosuria"?',
    options: [
      'Fructokinase',
      'L-Xylulose reductase',
      'Galactokinase',
      'Glucose-6-phosphatase'
    ],
    correctAnswer: 1,
    explanation: 'Essential pentosuria is a harmless autosomal recessive disorder caused by deficiency of L-xylulose reductase. L-xylulose cannot be converted to D-xylitol, leading to excretion of 1 to 4 grams of L-xylulose daily in urine, which gives a false positive reduction test.',
    keyConcepts: ['Essential Pentosuria', 'L-Xylulose Reductase Deficiency', 'Benign Hereditary Condition', 'Urinary L-Xylulose'],
    sourcePage: 55
  },

  // --- GLYCOGEN METABOLISM (Q87 - Q91) ---
  {
    id: 87,
    topicId: 'glycogen-metabolism',
    topicName: 'Glycogen Synthesis & Breakdown',
    difficulty: 'Easy',
    text: 'What are the two chemical linkage types found in the branched homopolysaccharide structure of glycogen?',
    options: [
      'β(1->4) and β(1->6) bonds',
      'α(1->4) linkages in linear chains, and α(1->6) linkages at branch points',
      'α(1->2) and α(1->3) bonds',
      'Peptide and ester linkages'
    ],
    correctAnswer: 1,
    explanation: 'Glycogen is a branched homopolysaccharide composed of D-glucose residues joined by α(1->4) glycosidic bonds along the straight chains, with branching points formed by α(1->6) glycosidic bonds every 12-14 glucose units.',
    keyConcepts: ['Glycogen Structure', 'α(1->4) Straight Chains', 'α(1->6) Branch Points', 'Homopolysaccharide'],
    sourcePage: 55
  },
  {
    id: 88,
    topicId: 'glycogen-metabolism',
    topicName: 'Glycogen Synthesis & Breakdown',
    difficulty: 'Medium',
    text: 'Why can muscle glycogen NOT directly contribute to maintaining systemic blood glucose during fasting?',
    options: [
      'Muscle cells do not have glycogen phosphorylase',
      'Muscle tissue lacks the enzyme glucose-6-phosphatase',
      'Muscle glycogen cannot be broken down during rest',
      'Glucose is converted to cholesterol inside myocytes'
    ],
    correctAnswer: 1,
    explanation: 'Muscle tissue lacks glucose-6-phosphatase (present only in liver and kidney ER). Therefore, glucose-6-phosphate released from muscle glycogen cannot be dephosphorylated to free glucose to enter the bloodstream; it enters glycolysis for internal muscle contraction.',
    keyConcepts: ['Muscle Glycogen', 'Lacks Glucose-6-Phosphatase', 'Cannot Form Free Glucose', 'Private Fuel for Muscle'],
    sourcePage: 59
  },
  {
    id: 89,
    topicId: 'glycogen-metabolism',
    topicName: 'Glycogen Synthesis & Breakdown',
    difficulty: 'Medium',
    text: 'Which activated nucleotide sugar acts as the immediate glucosyl donor for Glycogen Synthase?',
    options: [
      'ATP-glucose',
      'UDP-Glucose (Uridine diphosphate glucose)',
      'GTP-glucose',
      'CDP-glucose'
    ],
    correctAnswer: 1,
    explanation: 'Glucose-1-phosphate reacts with UTP (catalyzed by UDP-glucose pyrophosphorylase) to form UDP-glucose (UDP-G). Glycogen synthase transfers glucosyl residues from UDP-glucose onto the growing glycogen chain.',
    keyConcepts: ['UDP-Glucose (UDP-G)', 'Activated Glucosyl Donor', 'Glycogen Synthase Substrate'],
    sourcePage: 57
  },
  {
    id: 90,
    topicId: 'glycogen-metabolism',
    topicName: 'Glycogen Synthesis & Breakdown',
    difficulty: 'Hard',
    text: 'During glycogenolysis, what are the two distinct catalytic activities of the "debranching enzyme"?',
    options: [
      'Phosphorylase and isomerase',
      'Glucan transferase (shifts 3 glucosyl residues) and Amylo-α(1,6)-glucosidase (hydrolyzes the branch point releasing free glucose)',
      'Aldolase and enolase',
      'Mutase and dehydrogenase'
    ],
    correctAnswer: 1,
    explanation: 'When phosphorylase halts 4 residues from a branch point, the bifunctional debranching enzyme carries out: (1) 4:4 glucan transferase activity (moves 3 glucosyl residues to the end of a nearby chain), and (2) amylo-α(1,6)-glucosidase activity (cleaves the remaining α-1,6 linked glucose by hydrolysis, releasing 1 free glucose).',
    keyConcepts: ['Debranching Enzyme', 'Glucan Transferase', 'Amylo-α(1,6)-Glucosidase', 'Releases Free Glucose'],
    sourcePage: 58
  },
  {
    id: 91,
    topicId: 'glycogen-metabolism',
    topicName: 'Glycogen Synthesis & Breakdown',
    difficulty: 'Medium',
    text: 'How does glucagon regulate glycogen metabolism during fasting via protein phosphorylation?',
    options: [
      'Glucagon dephosphorylates both enzymes',
      'Glucagon triggers cAMP synthesis and Protein Kinase A activation, which phosphorylates and ACTIVATES glycogen phosphorylase while INACTIVATING glycogen synthase',
      'Glucagon directly hydrolyzes glycogen synthase',
      'Glucagon stimulates insulin receptors'
    ],
    correctAnswer: 1,
    explanation: 'During fasting, glucagon stimulates adenylate cyclase -> cAMP -> Protein Kinase A. PKA activates phosphorylase kinase, which phosphorylates and activates glycogen phosphorylase (stimulating glycogenolysis). Simultaneously, phosphorylation INACTIVATES glycogen synthase, ensuring coordinated reciprocal control.',
    keyConcepts: ['Hormonal Reciprocal Control', 'cAMP & Protein Kinase A', 'Phosphorylated = Active Phosphorylase', 'Phosphorylated = Inactive Synthase'],
    sourcePage: 60
  },

  // --- GLYCOGEN STORAGE DISEASES (Q92 - Q95) ---
  {
    id: 92,
    topicId: 'glycogen-storage-diseases',
    topicName: 'Glycogen Storage Diseases (GSD I-VIII)',
    difficulty: 'Medium',
    text: 'Von Gierke’s Disease (Type I GSD) is caused by the deficiency of which enzyme, and what are its hallmark clinical features?',
    options: [
      'Muscle phosphorylase; causes muscle cramps during exercise',
      'Glucose-6-phosphatase; causes severe fasting hypoglycemia, massive hepatomegaly, lactic acidosis, and gout (hyperuricemia)',
      'Branching enzyme; causes early infantile death',
      'Lysosomal acid maltase; causes massive cardiomegaly'
    ],
    correctAnswer: 1,
    explanation: 'Von Gierke disease (Type I) is caused by glucose-6-phosphatase deficiency. Glucose cannot be released into the blood from glycogenolysis or gluconeogenesis, producing profound fasting hypoglycemia, severe hepatomegaly, lactic acidosis, hyperlipidemia, and hyperuricemia (gout from shunting into the HMP shunt).',
    keyConcepts: ['Von Gierke (Type I)', 'Glucose-6-Phosphatase Deficiency', 'Profound Fasting Hypoglycemia', 'Hepatomegaly & Gout'],
    sourcePage: 63
  },
  {
    id: 93,
    topicId: 'glycogen-storage-diseases',
    topicName: 'Glycogen Storage Diseases (GSD I-VIII)',
    difficulty: 'Medium',
    text: 'Which glycogen storage disease is caused by deficiency of lysosomal α-1,4-glucosidase (acid maltase) and typically causes fatal heart failure in the first year of life?',
    options: [
      'Pompe’s disease (Type II GSD)',
      'Cori’s disease (Type III GSD)',
      'McArdle’s disease (Type V GSD)',
      'Hers’ disease (Type VI GSD)'
    ],
    correctAnswer: 0,
    explanation: 'Pompe’s disease (Type II GSD) is due to deficiency of lysosomal α-glucosidase (acid maltase). Glycogen accumulates within lysosomes in all tissues, especially cardiac and skeletal muscle, leading to severe cardiomegaly and death in infancy from cardiac failure.',
    keyConcepts: ['Pompe’s Disease (Type II)', 'Lysosomal Acid Maltase Deficit', 'Lysosomal Glycogen Overload', 'Fatal Infant Heart Failure'],
    sourcePage: 64
  },
  {
    id: 94,
    topicId: 'glycogen-storage-diseases',
    topicName: 'Glycogen Storage Diseases (GSD I-VIII)',
    difficulty: 'Hard',
    text: 'A 22-year-old athlete develops severe painful muscle cramps, fatigue, and dark burgundy urine (myoglobinuria) after brief strenuous exercise, with normal fasting blood glucose. Which enzyme is deficient?',
    options: [
      'Liver glycogen phosphorylase (Hers disease)',
      'Muscle glycogen phosphorylase / Myophosphorylase (McArdle syndrome, Type V)',
      'Branching enzyme (Amylopectinosis, Type IV)',
      'Glucose-6-phosphatase (Von Gierke, Type I)'
    ],
    correctAnswer: 1,
    explanation: 'McArdle syndrome (Type V GSD) is caused by deficiency of skeletal muscle glycogen phosphorylase. Glycogen cannot be mobilized during anaerobic exercise, starving myocytes of ATP and causing severe muscle cramping, rhabdomyolysis, and myoglobinuria. Liver function and fasting blood glucose are completely normal.',
    keyConcepts: ['McArdle Syndrome (Type V)', 'Muscle Phosphorylase Deficit', 'Exercise Muscle Cramps', 'Normal Blood Glucose'],
    sourcePage: 64
  },
  {
    id: 95,
    topicId: 'glycogen-storage-diseases',
    topicName: 'Glycogen Storage Diseases (GSD I-VIII)',
    difficulty: 'Hard',
    text: 'Which enzyme deficiencies correspond to Cori disease (Type III) and Andersen disease (Type IV) respectively?',
    options: [
      'Type III = Debranching enzyme (short outer branches); Type IV = Branching enzyme (few/no branches, fatal)',
      'Type III = Branching enzyme; Type IV = Debranching enzyme',
      'Type III = Glucokinase; Type IV = Pyruvate kinase',
      'Type III = PFK-1; Type IV = Hexokinase'
    ],
    correctAnswer: 0,
    explanation: 'Cori disease (Type III / Limit Dextrinosis) is caused by debranching enzyme deficiency, accumulating abnormal glycogen with very short outer branches. Andersen disease (Type IV / Amylopectinosis) is caused by branching enzyme deficiency, resulting in poorly soluble unbranched glycogen that triggers immune reaction and early fatal cirrhosis.',
    keyConcepts: ['Cori Disease (Type III)', 'Debranching Enzyme Defect', 'Andersen Disease (Type IV)', 'Branching Enzyme Defect'],
    sourcePage: 64
  },

  // --- GLUCONEOGENESIS, GALACTOSE & FRUCTOSE (Q96 - Q98) ---
  {
    id: 96,
    topicId: 'gluconeogenesis',
    topicName: 'Gluconeogenesis & Substrates',
    difficulty: 'Medium',
    text: 'Which four specific gluconeogenic enzymes bypass the three irreversible kinase steps of glycolysis?',
    options: [
      'Hexokinase, PFK-1, Pyruvate kinase, and Enolase',
      'Pyruvate carboxylase, Phosphoenolpyruvate carboxykinase (PEPCK), Fructose-1,6-bisphosphatase, and Glucose-6-phosphatase',
      'Citrate synthase, Isocitrate DH, Aconitase, and Fumarase',
      'Glycogen synthase, Branching enzyme, Phosphorylase, and Mutase'
    ],
    correctAnswer: 1,
    explanation: 'Gluconeogenesis bypasses: (1) Pyruvate kinase via mitochondrial Pyruvate Carboxylase (requires Biotin + ATP) and cytosolic PEPCK (requires GTP); (2) PFK-1 via Fructose-1,6-bisphosphatase; and (3) Glucokinase via Glucose-6-phosphatase.',
    keyConcepts: ['Four Bypassing Enzymes', 'Pyruvate Carboxylase (Biotin)', 'PEPCK (GTP)', 'F-1,6-Bisphosphatase', 'G-6-Phosphatase'],
    sourcePage: 65
  },
  {
    id: 97,
    topicId: 'galactose-fructose',
    topicName: 'Galactose & Fructose Inborn Errors',
    difficulty: 'Hard',
    text: 'In Classic Galactosemia (galactose-1-phosphate uridyl transferase deficiency), what causes the formation of early cataracts in infants?',
    options: [
      'Insolubility of unphosphorylated lactose crystals',
      'Excess galactose in the lens is reduced by Aldose Reductase into Galactitol (dulcitol), which cannot escape and causes osmotic lens swelling and opacity',
      'Severe calcium precipitation in the cornea',
      'Direct destruction of the retina by glucuronic acid'
    ],
    correctAnswer: 1,
    explanation: 'Accumulated galactose enters the lens of the eye and is reduced by Aldose Reductase to Galactitol. Because galactitol cannot diffuse across lens membranes, it draws water osmotically, inducing lens fiber swelling, protein denaturation, and cataract formation.',
    keyConcepts: ['Classic Galactosemia', 'Aldose Reductase', 'Galactitol Accumulation', 'Osmotic Cataract'],
    sourcePage: 73
  },
  {
    id: 98,
    topicId: 'galactose-fructose',
    topicName: 'Galactose & Fructose Inborn Errors',
    difficulty: 'Hard',
    text: 'Why does ingestion of fructose or sucrose trigger severe hypoglycemia and hepatic dysfunction in Hereditary Fructose Intolerance (HFI)?',
    options: [
      'Fructose stimulates massive insulin surge from beta cells',
      'Deficiency of Aldolase B causes accumulation of Fructose-1-phosphate, trapping intracellular inorganic phosphate (Pi) and inhibiting glycogen phosphorylase and gluconeogenesis',
      'Fructokinase is completely absent from the liver',
      'Fructose binds irreversibly to hemoglobin'
    ],
    correctAnswer: 1,
    explanation: 'In Hereditary Fructose Intolerance (HFI), Aldolase B is deficient. Fructose-1-phosphate accumulates in hepatocytes, trapping inorganic phosphate (Pi). The depletion of ATP and free Pi inhibits glycogen phosphorylase and gluconeogenesis, precipitating severe hypoglycemia, vomiting, and liver failure.',
    keyConcepts: ['Hereditary Fructose Intolerance (HFI)', 'Aldolase B Deficiency', 'Fructose-1-P Phosphate Trapping', 'Severe Hypoglycemia'],
    sourcePage: 76
  },

  // --- BLOOD GLUCOSE & DIABETES MELLITUS (Q99 - Q100) ---
  {
    id: 99,
    topicId: 'diabetes-blood-glucose',
    topicName: 'Blood Glucose Regulation & Diabetes',
    difficulty: 'Medium',
    text: 'According to WHO diagnostic criteria, which blood glucose thresholds establish a diagnosis of Diabetes Mellitus?',
    options: [
      'Fasting plasma glucose > 90 mg/dL, 2-hr postprandial > 120 mg/dL',
      'Fasting plasma glucose > 126 mg/dL (7.0 mmol/L), or 2-hour post-load glucose > 200 mg/dL during OGTT',
      'Fasting plasma glucose > 160 mg/dL only',
      'Any random plasma glucose > 110 mg/dL'
    ],
    correctAnswer: 1,
    explanation: 'WHO diagnostic criteria define Diabetes Mellitus as: Fasting plasma glucose > 126 mg/dL (7.0 mmol/L) after an 8-12 hour fast, or a 2-hour postprandial / post-load glucose > 200 mg/dL during an Oral Glucose Tolerance Test (OGTT). Normal fasting is 65-110 mg/dL.',
    keyConcepts: ['WHO Criteria for Diabetes', 'Fasting > 126 mg/dL', '2-Hour OGTT > 200 mg/dL', 'Normal Fasting 65-110 mg/dL'],
    sourcePage: 88
  },
  {
    id: 100,
    topicId: 'diabetes-blood-glucose',
    topicName: 'Blood Glucose Regulation & Diabetes',
    difficulty: 'Medium',
    text: 'Why is Glycated Hemoglobin (HbA1c) superior to spot fasting blood glucose for assessing long-term diabetic glycemic control?',
    options: [
      'HbA1c is synthesized solely in the pancreatic islets',
      'Glucose binds slowly and non-enzymatically to Hemoglobin A over the 120-day lifespan of erythrocytes, reflecting average blood glucose control over the preceding 2-3 months',
      'HbA1c measures urinary glucose threshold',
      'HbA1c levels fluctuate hour-by-hour with meals'
    ],
    correctAnswer: 1,
    explanation: 'Hemoglobin A undergoes slow, irreversible non-enzymatic glycation proportional to ambient blood glucose. Because red blood cells survive ~120 days, HbA1c (normal 5-8%, elevated ≥ 6.5% or > 12% in uncontrolled diabetes) provides a stable, uncheatable index of average glycemic control over the past 2-3 months.',
    keyConcepts: ['Glycated Hemoglobin (HbA1c)', 'Non-Enzymatic Glycation', 'Reflects 2-3 Months Average', '120-Day RBC Lifespan'],
    sourcePage: 91
  }
];
