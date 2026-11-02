// Product catalogue compiled from the supplied PDFs. Source records are traceable below.
export interface ProductVariant {
  label: string;
  composition: string;
  sourceComposition: string;
  sourcePdf: string;
  page: number;
  sourceNumber: string;
  sourceRecordId: string;
}

export interface ProductItem {
  id: string;
  name: string;
  division: 'General' | 'Hormones' | 'Nutraceuticals' | 'Softgel';
  category: string;
  regulatoryType: 'DRUG' | 'FOOD' | null;
  dosageForm: string;
  phRef?: 'IP' | 'BP' | 'USP' | null;
  availableStrengths: string[];
  composition: string;
  ingredients: string[];
  sourcePdf: string;
  aliases: string[];
  variants: ProductVariant[];
  sources: { recordId: string; pdf: string; page: number; number: string }[];
}

export const PRODUCTS: ProductItem[] = [
  {
    "id": "p-3f40188c0362",
    "name": "4G Omega-3, Botanical Extracts, Vitamins & Minerals Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "4 g (Drug) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg",
    "ingredients": [
      "Omega 3 Fatty Acids Providing",
      "Green Tea Extract",
      "Ginseng Extract",
      "Ginkgo Biloba Extract",
      "Grape Seed Extract",
      "Lactic Acid Bacillus",
      "Citrus Bioflavonoids",
      "Vitamin D3",
      "wheat Germ Oil",
      "Menadione Sodium Bisulphate",
      "Benfotiamine",
      "Vitamin B6",
      "Vitamin B12",
      "Niacinamide",
      "Calcium Ascorbate",
      "Folic Acid",
      "D.Biotin",
      "Choline Bitartrate",
      "Lutein",
      "Dibasic Calcium Phosphate",
      "Ferrous Fumarate",
      "Zinc Oxide",
      "Potassium Iodide",
      "Magnesium Oxide",
      "Manganese Sulphate",
      "Copper Sulphate Pentahydrate",
      "Chromium Picosulphate",
      "Sodium Molybdate Dihydrate",
      "Sodium Selenite Pentahydrate",
      "Potassium Chloride",
      "Sodium Borate",
      "Colloidal Silicon Dioxide",
      "Nickel Sulphate",
      "Stannous Chloride Dihydrate",
      "Sodium Metavanadate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "4 g (Drug) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg",
      "4 g (Food) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Omega 3 Fatty Acids Providing — 90 mg; Green Tea Extract — 10 mg; Ginseng Extract — 42.5 mg; Ginkgo Biloba Extract — 10 mg; Grape Seed Extract — 15 mg; Lactic Acid Bacillus — 500 lacs Spores; Citrus Bioflavonoids — 20 mg; Vitamin D3 — 200 I.U; wheat Germ Oil — 25 mg; Menadione Sodium Bisulphate — 10 mcg; Benfotiamine — 1.5 mg; Vitamin B6 — 1 mg; Vitamin B12 — 1 mcg; Niacinamide — 20 mg; Calcium Ascorbate — 45 mg; Folic Acid — 150 mcg; D.Biotin — 100 mcg; Choline Bitartrate — 25 mg; Lutein — 250 mcg; Dibasic Calcium Phosphate — 20 mg; Ferrous Fumarate — 30 mg; Zinc Oxide — 15 mg; Potassium Iodide — 150 mcg; Magnesium Oxide — 30 mg; Manganese Sulphate — 1.5 mg; Copper Sulphate Pentahydrate — 0.5 mg; Chromium Picosulphate — 65 mcg; Sodium Molybdate Dihydrate — 25 mcg; Sodium Selenite Pentahydrate — 20 mcg; Potassium Chloride — 4 mg; Sodium Borate — 150 mcg; Colloidal Silicon Dioxide — 2 mg; Nickel Sulphate — 5 mcg; Stannous Chloride Dihydrate — 10 mcg; Sodium Metavanadate — 10 mcg",
        "sourceComposition": "4 g (Drug) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "1",
        "sourceRecordId": "source-0682"
      }
    ],
    "sources": [
      {
        "recordId": "source-0682",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "1"
      },
      {
        "recordId": "source-0764",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "32"
      }
    ]
  },
  {
    "id": "p-9722ced28f6b",
    "name": "5G Omega-3, Botanical Extracts, Vitamins & Minerals Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "5 g (Food) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, L-Glutathione 2 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Garlic Extract 50 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg",
    "ingredients": [
      "Omega 3 Fatty Acids Providing",
      "L-Glutathione",
      "Green Tea Extract",
      "Ginseng Extract",
      "Ginkgo Biloba Extract",
      "Grape Seed Extract",
      "Garlic Extract",
      "Lactic Acid Bacillus",
      "Citrus Bioflavonoids",
      "Vitamin D3",
      "wheat Germ Oil",
      "Menadione Sodium Bisulphate",
      "Benfotiamine",
      "Vitamin B6",
      "Vitamin B12",
      "Niacinamide",
      "Calcium Ascorbate",
      "Folic Acid",
      "D.Biotin",
      "Choline Bitartrate",
      "Lutein",
      "Dibasic Calcium Phosphate",
      "Ferrous Fumarate",
      "Zinc Oxide",
      "Potassium Iodide",
      "Magnesium Oxide",
      "Manganese Sulphate",
      "Copper Sulphate Pentahydrate",
      "Chromium Picosulphate",
      "Sodium Molybdate Dihydrate",
      "Sodium Selenite Pentahydrate",
      "Potassium Chloride",
      "Sodium Borate",
      "Colloidal Silicon Dioxide",
      "Nickel Sulphate",
      "Stannous Chloride Dihydrate",
      "Sodium Metavanadate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "5 g (Food) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, L-Glutathione 2 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Garlic Extract 50 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Omega 3 Fatty Acids Providing — 90 mg; L-Glutathione — 2 mg; Green Tea Extract — 10 mg; Ginseng Extract — 42.5 mg; Ginkgo Biloba Extract — 10 mg; Grape Seed Extract — 15 mg; Garlic Extract — 50 mg; Lactic Acid Bacillus — 500 lacs Spores; Citrus Bioflavonoids — 20 mg; Vitamin D3 — 200 I.U; wheat Germ Oil — 25 mg; Menadione Sodium Bisulphate — 10 mcg; Benfotiamine — 1.5 mg; Vitamin B6 — 1 mg; Vitamin B12 — 1 mcg; Niacinamide — 20 mg; Calcium Ascorbate — 45 mg; Folic Acid — 150 mcg; D.Biotin — 100 mcg; Choline Bitartrate — 25 mg; Lutein — 250 mcg; Dibasic Calcium Phosphate — 20 mg; Ferrous Fumarate — 30 mg; Zinc Oxide — 15 mg; Potassium Iodide — 150 mcg; Magnesium Oxide — 30 mg; Manganese Sulphate — 1.5 mg; Copper Sulphate Pentahydrate — 0.5 mg; Chromium Picosulphate — 65 mcg; Sodium Molybdate Dihydrate — 25 mcg; Sodium Selenite Pentahydrate — 20 mcg; Potassium Chloride — 4 mg; Sodium Borate — 150 mcg; Colloidal Silicon Dioxide — 2 mg; Nickel Sulphate — 5 mcg; Stannous Chloride Dihydrate — 10 mcg; Sodium Metavanadate — 10 mcg",
        "sourceComposition": "5 g (Food) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, L-Glutathione 2 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Garlic Extract 50 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "33",
        "sourceRecordId": "source-0765"
      }
    ],
    "sources": [
      {
        "recordId": "source-0765",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "33"
      }
    ]
  },
  {
    "id": "p-279085f98cc0",
    "name": "7G Omega-3, Botanical Extracts, Vitamins & Minerals Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "7 g (Food) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Garlic Extract 50 mg Ginger Extract 2 mg Glutamic Acid 20 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg L-Glutathione 2 mg, Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg",
    "ingredients": [
      "Omega 3 Fatty Acids Providing",
      "Green Tea Extract",
      "Ginseng Extract",
      "Ginkgo Biloba Extract",
      "Grape Seed Extract",
      "Garlic Extract",
      "Ginger Extract",
      "Glutamic Acid",
      "Lactic Acid Bacillus",
      "Citrus Bioflavonoids",
      "Vitamin D3",
      "wheat Germ Oil",
      "L-Glutathione",
      "Menadione Sodium Bisulphate",
      "Benfotiamine",
      "Vitamin B6",
      "Vitamin B12",
      "Niacinamide",
      "Calcium Ascorbate",
      "Folic Acid",
      "D.Biotin",
      "Choline Bitartrate",
      "Lutein",
      "Dibasic Calcium Phosphate",
      "Ferrous Fumarate",
      "Zinc Oxide",
      "Potassium Iodide",
      "Magnesium Oxide",
      "Manganese Sulphate",
      "Copper Sulphate Pentahydrate",
      "Chromium Picosulphate",
      "Sodium Molybdate Dihydrate",
      "Sodium Selenite Pentahydrate",
      "Potassium Chloride",
      "Sodium Borate",
      "Colloidal Silicon Dioxide",
      "Nickel Sulphate",
      "Stannous Chloride Dihydrate",
      "Sodium Metavanadate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "7 g (Food) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Garlic Extract 50 mg Ginger Extract 2 mg Glutamic Acid 20 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg L-Glutathione 2 mg, Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Omega 3 Fatty Acids Providing — 90 mg; Green Tea Extract — 10 mg; Ginseng Extract — 42.5 mg; Ginkgo Biloba Extract — 10 mg; Grape Seed Extract — 15 mg; Garlic Extract — 50 mg; Ginger Extract — 2 mg; Glutamic Acid — 20 mg; Lactic Acid Bacillus — 500 lacs Spores; Citrus Bioflavonoids — 20 mg; Vitamin D3 — 200 I.U; wheat Germ Oil — 25 mg; L-Glutathione — 2 mg; Menadione Sodium Bisulphate — 10 mcg; Benfotiamine — 1.5 mg; Vitamin B6 — 1 mg; Vitamin B12 — 1 mcg; Niacinamide — 20 mg; Calcium Ascorbate — 45 mg; Folic Acid — 150 mcg; D.Biotin — 100 mcg; Choline Bitartrate — 25 mg; Lutein — 250 mcg; Dibasic Calcium Phosphate — 20 mg; Ferrous Fumarate — 30 mg; Zinc Oxide — 15 mg; Potassium Iodide — 150 mcg; Magnesium Oxide — 30 mg; Manganese Sulphate — 1.5 mg; Copper Sulphate Pentahydrate — 0.5 mg; Chromium Picosulphate — 65 mcg; Sodium Molybdate Dihydrate — 25 mcg; Sodium Selenite Pentahydrate — 20 mcg; Potassium Chloride — 4 mg; Sodium Borate — 150 mcg; Colloidal Silicon Dioxide — 2 mg; Nickel Sulphate — 5 mcg; Stannous Chloride Dihydrate — 10 mcg; Sodium Metavanadate — 10 mcg",
        "sourceComposition": "7 g (Food) Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Garlic Extract 50 mg Ginger Extract 2 mg Glutamic Acid 20 mg Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg L-Glutathione 2 mg, Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "34",
        "sourceRecordId": "source-0766"
      }
    ],
    "sources": [
      {
        "recordId": "source-0766",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "34"
      }
    ]
  },
  {
    "id": "p-7f1f672102a2",
    "name": "9G Omega-3, Botanical Extracts, Vitamins & Minerals Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "9 g (Food) Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Garlic Extract 50 mg Ginger Extract 2 mg Glutamic Acid 20 mg Green Coffee Bean Extract 10 mg Glycyrrhia Glabra Extract 5 mg Guggul 5 mg Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, L-Glutathione 2 mg, Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg",
    "ingredients": [
      "Green Tea Extract",
      "Ginseng Extract",
      "Ginkgo Biloba Extract",
      "Grape Seed Extract",
      "Garlic Extract",
      "Ginger Extract",
      "Glutamic Acid",
      "Green Coffee Bean Extract",
      "Glycyrrhia Glabra Extract",
      "Guggul",
      "Omega 3 Fatty Acids Providing",
      "L-Glutathione",
      "Lactic Acid Bacillus",
      "Citrus Bioflavonoids",
      "Vitamin D3",
      "wheat Germ Oil",
      "Menadione Sodium Bisulphate",
      "Benfotiamine",
      "Vitamin B6",
      "Vitamin B12",
      "Niacinamide",
      "Calcium Ascorbate",
      "Folic Acid",
      "D.Biotin",
      "Choline Bitartrate",
      "Lutein",
      "Dibasic Calcium Phosphate",
      "Ferrous Fumarate",
      "Zinc Oxide",
      "Potassium Iodide",
      "Magnesium Oxide",
      "Manganese Sulphate",
      "Copper Sulphate Pentahydrate",
      "Chromium Picosulphate",
      "Sodium Molybdate Dihydrate",
      "Sodium Selenite Pentahydrate",
      "Potassium Chloride",
      "Sodium Borate",
      "Colloidal Silicon Dioxide",
      "Nickel Sulphate",
      "Stannous Chloride Dihydrate",
      "Sodium Metavanadate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "9 g (Food) Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Garlic Extract 50 mg Ginger Extract 2 mg Glutamic Acid 20 mg Green Coffee Bean Extract 10 mg Glycyrrhia Glabra Extract 5 mg Guggul 5 mg Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, L-Glutathione 2 mg, Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Green Tea Extract — 10 mg; Ginseng Extract — 42.5 mg; Ginkgo Biloba Extract — 10 mg; Grape Seed Extract — 15 mg; Garlic Extract — 50 mg; Ginger Extract — 2 mg; Glutamic Acid — 20 mg; Green Coffee Bean Extract — 10 mg; Glycyrrhia Glabra Extract — 5 mg; Guggul — 5 mg; Omega 3 Fatty Acids Providing — 90 mg; L-Glutathione — 2 mg; Lactic Acid Bacillus — 500 lacs Spores; Citrus Bioflavonoids — 20 mg; Vitamin D3 — 200 I.U; wheat Germ Oil — 25 mg; Menadione Sodium Bisulphate — 10 mcg; Benfotiamine — 1.5 mg; Vitamin B6 — 1 mg; Vitamin B12 — 1 mcg; Niacinamide — 20 mg; Calcium Ascorbate — 45 mg; Folic Acid — 150 mcg; D.Biotin — 100 mcg; Choline Bitartrate — 25 mg; Lutein — 250 mcg; Dibasic Calcium Phosphate — 20 mg; Ferrous Fumarate — 30 mg; Zinc Oxide — 15 mg; Potassium Iodide — 150 mcg; Magnesium Oxide — 30 mg; Manganese Sulphate — 1.5 mg; Copper Sulphate Pentahydrate — 0.5 mg; Chromium Picosulphate — 65 mcg; Sodium Molybdate Dihydrate — 25 mcg; Sodium Selenite Pentahydrate — 20 mcg; Potassium Chloride — 4 mg; Sodium Borate — 150 mcg; Colloidal Silicon Dioxide — 2 mg; Nickel Sulphate — 5 mcg; Stannous Chloride Dihydrate — 10 mcg; Sodium Metavanadate — 10 mcg",
        "sourceComposition": "9 g (Food) Green Tea Extract eq.to Polyphenol 10 mg Ginseng Extract 42.5 mg Ginkgo Biloba Extract 10 mg Grape Seed Extract 15 mg Garlic Extract 50 mg Ginger Extract 2 mg Glutamic Acid 20 mg Green Coffee Bean Extract 10 mg Glycyrrhia Glabra Extract 5 mg Guggul 5 mg Omega 3 Fatty Acids Providing (eq. to Eicosapentaenoic Acid 90 mg and eq. to Docosahexaenoic Acid 60 mg, L-Glutathione 2 mg, Lactic Acid Bacillus 500 lacs Spores Citrus Bioflavonoids 20 mg (8 mg of Bioflavonoids Natural Mixed) Carotenoids(10%) 11.33 mg Vitamin D3 200 I.U. wheat Germ Oil 25 mg Menadione Sodium Bisulphate (Vit.K) 10 mcg Benfotiamine 1.5 mg Vitamin B6 1 mg Vitamin B12 1 mcg Niacinamide 20 mg Calcium Ascorbate 45 mg Folic Acid 150 mcg D.Biotin 100 mcg Choline Bitartrate 25 mg Lutein 250 mcg Dibasic Calcium Phosphate 20 mg eq. to Elemental Phosphorus 15.45 mg Ferrous Fumarate 30 mg Zinc Oxide 15 mg Potassium Iodide 150 mcg Magnesium Oxide 30 mg Manganese Sulphate 1.5 mg Copper Sulphate Pentahydrate 0.5 mg Chromium Picosulphate 65 mcg Sodium Molybdate Dihydrate 25 mcg Sodium Selenite Pentahydrate 20 mcg Potassium Chloride 4 mg eq.to Elemental Chloride 3.6 mg Sodium Borate 150 mcg Colloidal Silicon Dioxide 2 mg Nickel Sulphate 5 mcg Stannous Chloride Dihydrate 10 mcg Sodium Metavanadate 10 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "35",
        "sourceRecordId": "source-0767"
      }
    ],
    "sources": [
      {
        "recordId": "source-0767",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "35"
      }
    ]
  },
  {
    "id": "p-c25a6f31ae51",
    "name": "Acebrophylline & Montelukast Sodium & Fexofenadine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg + 10 mg + 120 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Acebrophylline (assustainedreleaseform) 200 mg Montelukast Sodium Equivalentto Montelukast IP 10 mg Fexofenadine Hydrochloride IP 120 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Acebrophylline",
      "Montelukast Sodium",
      "Fexofenadine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Acebrophylline(SR), Montelukast Sodium &Fexofenadine Hydrochloride Tablets (For Export Only)"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Acebrophylline — 200 mg; Montelukast Sodium — 10 mg; Fexofenadine Hydrochloride — 120 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Acebrophylline (assustainedreleaseform) 200 mg Montelukast Sodium Equivalentto Montelukast IP 10 mg Fexofenadine Hydrochloride IP 120 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 63,
        "sourceNumber": "394",
        "sourceRecordId": "source-0490"
      }
    ],
    "sources": [
      {
        "recordId": "source-0490",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 63,
        "number": "394"
      }
    ]
  },
  {
    "id": "p-b3e06c9247ff",
    "name": "Acebrophylline Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Acebrophylline 100 mg Excipients q.s. Approved Colour Usedin emptycapsules shells",
    "ingredients": [
      "Acebrophylline"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Acebrophylline Capsules 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Acebrophylline — 100 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Acebrophylline 100 mg Excipients q.s. Approved Colour Usedin emptycapsules shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "sourceNumber": "472",
        "sourceRecordId": "source-0568"
      }
    ],
    "sources": [
      {
        "recordId": "source-0568",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "number": "472"
      }
    ]
  },
  {
    "id": "p-8d1f76ab3a09",
    "name": "Aceclofenac & Drotaverine Hydrochloride Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 80 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Drotaverine Hydrochloride IP 80 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Aceclofenac",
      "Drotaverine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Aceclofenac&Drotaverine Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Aceclofenac — 100 mg; Drotaverine Hydrochloride — 80 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Drotaverine Hydrochloride IP 80 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "sourceNumber": "212",
        "sourceRecordId": "source-0308"
      }
    ],
    "sources": [
      {
        "recordId": "source-0308",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "number": "212"
      }
    ]
  },
  {
    "id": "p-a06b95ce2bd0",
    "name": "Aceclofenac & Paracetamol & Chlorzoxazone Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 mg + 325 mg + 250 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Aceclofenac I.P. 100 mg Paracetamol I.P. 325 mg Chlorzoxazone U.S.P. 250 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Aceclofenac",
      "Paracetamol",
      "Chlorzoxazone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Aceclofenac,Paracetamol& Chlorzoxazone Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Aceclofenac — 100 mg; Paracetamol — 325 mg; Chlorzoxazone — 250 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Aceclofenac I.P. 100 mg Paracetamol I.P. 325 mg Chlorzoxazone U.S.P. 250 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 17,
        "sourceNumber": "106",
        "sourceRecordId": "source-0202"
      }
    ],
    "sources": [
      {
        "recordId": "source-0202",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 17,
        "number": "106"
      }
    ]
  },
  {
    "id": "p-355d6b4ce5a2",
    "name": "Aceclofenac & Paracetamol & Serratiopeptidase Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 325 mg + 15 mg",
      "100 mg + 325 mg + 10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Paracetamol IP 325 mg Serratiopeptidase (asentericcoatedgranulesequivalentto Enzymaticactivity30,000Units) IP 15 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Aceclofenac",
      "Paracetamol",
      "Serratiopeptidase"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Aceclofenac,Paracetamol& Serratiopeptidase Tablets",
      "Aceclofenac,Paracetamol&S rratiopeptidase Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Aceclofenac — 100 mg; Paracetamol — 325 mg; Serratiopeptidase — 15 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Paracetamol IP 325 mg Serratiopeptidase (asentericcoatedgranulesequivalentto Enzymaticactivity30,000Units) IP 15 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "sourceNumber": "126",
        "sourceRecordId": "source-0222"
      },
      {
        "label": "Enteric coated",
        "composition": "Aceclofenac — 100 mg; Paracetamol — 325 mg; Serratiopeptidase — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Paracetamol IP 325 mg Serratiopeptidase (asentericcoatedgranulesequivalentto Enzymaticactivity) IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "sourceNumber": "174",
        "sourceRecordId": "source-0270"
      }
    ],
    "sources": [
      {
        "recordId": "source-0222",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "number": "126"
      },
      {
        "recordId": "source-0270",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "number": "174"
      }
    ]
  },
  {
    "id": "p-4b968f6e313a",
    "name": "Aceclofenac & Paracetamol & Thiocolchicoside Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 325 mg + 4 mg",
      "100 mg + 325 mg + 8 mg"
    ],
    "composition": "Each Film Coated Tablet Contains Aceclofenac IP 100 mg Paracetamol IP 325 mg Thiocolchicoside IP 4 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Aceclofenac",
      "Paracetamol",
      "Thiocolchicoside"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Aceclofenac,Paracetamol&Thiocolchicoside Tablets",
      "Thiocolchicoside,Aceclofenac & Paracetamol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Aceclofenac — 100 mg; Paracetamol — 325 mg; Thiocolchicoside — 4 mg",
        "sourceComposition": "Each Film Coated Tablet Contains Aceclofenac IP 100 mg Paracetamol IP 325 mg Thiocolchicoside IP 4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "sourceNumber": "33",
        "sourceRecordId": "source-0129"
      },
      {
        "label": "Standard formulation",
        "composition": "Thiocolchicoside — 8 mg; Aceclofenac — 100 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Thiocolchicoside IP 8 mg Aceclofenac IP 100 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "sourceNumber": "399",
        "sourceRecordId": "source-0495"
      }
    ],
    "sources": [
      {
        "recordId": "source-0129",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "number": "33"
      },
      {
        "recordId": "source-0495",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "number": "399"
      }
    ]
  },
  {
    "id": "p-71dfd54e8d61",
    "name": "Aceclofenac & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 325 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Aceclofenac",
      "Paracetamol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Aceclofenac&Paracetamol Tablets",
      "Aceclofenac&Paracetamol Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Aceclofenac — 100 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "sourceNumber": "173",
        "sourceRecordId": "source-0269"
      }
    ],
    "sources": [
      {
        "recordId": "source-0269",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "number": "173"
      },
      {
        "recordId": "source-0497",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "number": "401"
      }
    ]
  },
  {
    "id": "p-2229aff357b2",
    "name": "Aceclofenac & Rabeprazole Sodium Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg + 20 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains : Aceclofenac (as Sustained Release Pellets) IP 200 mg Rabeprazole Sodium (as Enteric Coated Pellets) IP 20 mg Excipients q.s. Approved Colour Used in emply Capsules shells",
    "ingredients": [
      "Aceclofenac",
      "Rabeprazole Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Aceclofenac (SR) & Rabeprazole Sodium Enteric Coated Capsules"
    ],
    "variants": [
      {
        "label": "Sustained release, Enteric coated",
        "composition": "Aceclofenac — 200 mg; Rabeprazole Sodium — 20 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains : Aceclofenac (as Sustained Release Pellets) IP 200 mg Rabeprazole Sodium (as Enteric Coated Pellets) IP 20 mg Excipients q.s. Approved Colour Used in emply Capsules shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "sourceNumber": "480",
        "sourceRecordId": "source-0576"
      }
    ],
    "sources": [
      {
        "recordId": "source-0576",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "number": "480"
      }
    ]
  },
  {
    "id": "p-849e16a8fd50",
    "name": "Aceclofenac & Thiocolchicoside Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 4 mg",
      "100 mg + 8 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Thiocolchicoside IP 4 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Aceclofenac",
      "Thiocolchicoside"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Aceclofenac &Thiocolchicoside Tblets",
      "Aceclofenac &Thiocolchicoside Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Aceclofenac — 100 mg; Thiocolchicoside — 4 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Thiocolchicoside IP 4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "sourceNumber": "210",
        "sourceRecordId": "source-0306"
      },
      {
        "label": "Standard formulation",
        "composition": "Aceclofenac — 100 mg; Thiocolchicoside — 8 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Aceclofenac IP 100 mg Thiocolchicoside IP 8 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "sourceNumber": "260",
        "sourceRecordId": "source-0356"
      }
    ],
    "sources": [
      {
        "recordId": "source-0306",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "number": "210"
      },
      {
        "recordId": "source-0356",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "number": "260"
      }
    ]
  },
  {
    "id": "p-3e05fc6b791a",
    "name": "Aceclofenac Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg"
    ],
    "composition": "Each Uncoated Sustained Relesae Tablet Contains: Aceclofenac IP 200 mg Excipients q.s.",
    "ingredients": [
      "Aceclofenac"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Aceclofenac Sustained Release Tablets200 mg"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Aceclofenac — 200 mg",
        "sourceComposition": "Each Uncoated Sustained Relesae Tablet Contains: Aceclofenac IP 200 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 49,
        "sourceNumber": "301",
        "sourceRecordId": "source-0397"
      }
    ],
    "sources": [
      {
        "recordId": "source-0397",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 49,
        "number": "301"
      }
    ]
  },
  {
    "id": "p-d8e29250a377",
    "name": "Acitretin Capsules",
    "division": "General",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains : Acitretin IP 25 mg Excipients q.s. Approved Colour Used in emptycapsules shells",
    "ingredients": [
      "Acitretin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Acitretin Capsules IP 25 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Acitretin — 25 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains : Acitretin IP 25 mg Excipients q.s. Approved Colour Used in emptycapsules shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 76,
        "sourceNumber": "470",
        "sourceRecordId": "source-0566"
      }
    ],
    "sources": [
      {
        "recordId": "source-0566",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 76,
        "number": "470"
      }
    ]
  },
  {
    "id": "p-db89ca46c1d1",
    "name": "Ademetionine1,4- Butane Disulfonate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "200 mg",
      "400 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains : Ademetionine1,4- Butane Disulfonate (SD4) Equivalent to Ademetionine ion 200 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ademetionine1,4- Butane Disulfonate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ademetionine Enteric Coated Tablets 200 mg",
      "Ademetionine Enteric Coated Tablets 400 mg"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Ademetionine1,4- Butane Disulfonate — 200 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains : Ademetionine1,4- Butane Disulfonate (SD4) Equivalent to Ademetionine ion 200 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "sourceNumber": "473",
        "sourceRecordId": "source-0569"
      },
      {
        "label": "Enteric coated",
        "composition": "Ademetionine1,4- Butane Disulfonate — 400 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains : Ademetionine1,4- Butane Disulfonate (SD4) Equivalent to Ademetionine ion 400 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "sourceNumber": "474",
        "sourceRecordId": "source-0570"
      }
    ],
    "sources": [
      {
        "recordId": "source-0569",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "number": "473"
      },
      {
        "recordId": "source-0570",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "number": "474"
      }
    ]
  },
  {
    "id": "p-3657c388fe4e",
    "name": "Albendazole Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "400 mg"
    ],
    "composition": "Each Uncoated Chewable Tablet Contains : Albendazole IP 400 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Albendazole"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Albendazole Tablets IP 400 mg",
      "Albendazole Tablets"
    ],
    "variants": [
      {
        "label": "Chewable",
        "composition": "Albendazole — 400 mg",
        "sourceComposition": "Each Uncoated Chewable Tablet Contains : Albendazole IP 400 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 76,
        "sourceNumber": "469",
        "sourceRecordId": "source-0565"
      }
    ],
    "sources": [
      {
        "recordId": "source-0565",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 76,
        "number": "469"
      },
      {
        "recordId": "source-0584",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "number": "488"
      }
    ]
  },
  {
    "id": "p-5c351e442f3e",
    "name": "Alfacalcidol & Calcium Carbonate & Zinc Sulphate Monohydrate Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "0.25 mcg + 500 mg + 7.5 mg"
    ],
    "composition": "Alfacalcidol 0.25 mcg Calcium Carbonate 500 mg eq. to Elemental Calcium 200 mg Zinc Sulphate Monohydrate Eq. to Elemental Zin C 7.5 mg",
    "ingredients": [
      "Alfacalcidol",
      "Calcium Carbonate",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Alfacalcidol 0.25 mcg Calcium Carbonate 500 mg eq. to Elemental Calcium 200 mg Zinc Sulphate Monohydrate Eq. to Elemental Zin C 7.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Alfacalcidol — 0.25 mcg; Calcium Carbonate — 500 mg; Zinc Sulphate Monohydrate — 7.5 mg",
        "sourceComposition": "Alfacalcidol 0.25 mcg Calcium Carbonate 500 mg eq. to Elemental Calcium 200 mg Zinc Sulphate Monohydrate Eq. to Elemental Zin C 7.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "15",
        "sourceRecordId": "source-0696"
      }
    ],
    "sources": [
      {
        "recordId": "source-0696",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "15"
      }
    ]
  },
  {
    "id": "p-d092ee212bde",
    "name": "Allylestrenol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "5 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Allylestrenol 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Allylestrenol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Allylestrenol Tablets5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Allylestrenol — 5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Allylestrenol 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "sourceNumber": "36",
        "sourceRecordId": "source-0636"
      }
    ],
    "sources": [
      {
        "recordId": "source-0636",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "number": "36"
      }
    ]
  },
  {
    "id": "p-c3f2ac653b5f",
    "name": "Alpha Lipoic Acid, Folic Acid, Methylcobalamin & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Alpha Lipoic Acid USP 100 mg Folic Acid IP 1.5 mg Methylcobalamin IP 1500 mcg Pyridoxine Hydrochloride IP 3 mg Vitamin D3 IP 1000 iu Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Alpha Lipoic Acid",
      "Folic Acid",
      "Methylcobalamin",
      "Pyridoxine Hydrochloride",
      "Vitamin D3"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Alpha Lipoic Acid, Folic Acid,Pyridoxine HCl&Vitamin D3 Tablets",
      "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5 mg, Pyridoxine Hydrochloride 3 mg, Vitamin D3 1000 I.U."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Alpha Lipoic Acid — 100 mg; Folic Acid — 1.5 mg; Methylcobalamin — 1500 mcg; Pyridoxine Hydrochloride — 3 mg; Vitamin D3 — 1000 iu",
        "sourceComposition": "Each Film Coated Tablet Contains: Alpha Lipoic Acid USP 100 mg Folic Acid IP 1.5 mg Methylcobalamin IP 1500 mcg Pyridoxine Hydrochloride IP 3 mg Vitamin D3 IP 1000 iu Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "sourceNumber": "287",
        "sourceRecordId": "source-0383"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Folic Acid — 1.5 mg; Pyridoxine Hydrochloride — 3 mg; Vitamin D3 — 1000 I.U",
        "sourceComposition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 1.5 mg, Pyridoxine Hydrochloride 3 mg, Vitamin D3 1000 I.U.",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "2",
        "sourceRecordId": "source-0804"
      }
    ],
    "sources": [
      {
        "recordId": "source-0383",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "number": "287"
      },
      {
        "recordId": "source-0804",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "2"
      }
    ]
  },
  {
    "id": "p-86d6e2d184da",
    "name": "Alpha-Keto-Isoleucine,Calcium Salt, Alpha-Keto-Leucine,Calcium Salt, Alpha-Keto-Phenylalanine,Calcium Salt & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Alpha-Keto-Isoleucine,Calcium Salt 67 mg Alpha-Keto-Leucine,Calcium Salt 101 mg Alpha-Keto-Phenylalanine,Calcium Salt 68 mg Alpha-Keto-Valine,Calcium Salt 86 mg Alpha-Hydroxy Methionine,Calcium Salt 59 mg Threonine IP 53 mg Tryptophan IP 23 mg Histidine USP 38 mg Tyrosine USP 30 mg Lysine Acetate USP 105 mg Total Nitrogen Content/Tablet 36 mg Total Calcium Content 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Alpha-Keto-Isoleucine,Calcium Salt",
      "Alpha-Keto-Leucine,Calcium Salt",
      "Alpha-Keto-Phenylalanine,Calcium Salt",
      "Alpha-Keto-Valine,Calcium Salt",
      "Alpha-Hydroxy Methionine,Calcium Salt",
      "Threonine",
      "Tryptophan",
      "Histidine",
      "Tyrosine",
      "Lysine Acetate",
      "Total Nitrogen Content/",
      "Total Calcium Content"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Alpha Ketoanalogues and Essential Amino Acids Tablets (For Export Only)"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Alpha-Keto-Isoleucine,Calcium Salt — 67 mg; Alpha-Keto-Leucine,Calcium Salt — 101 mg; Alpha-Keto-Phenylalanine,Calcium Salt — 68 mg; Alpha-Keto-Valine,Calcium Salt — 86 mg; Alpha-Hydroxy Methionine,Calcium Salt — 59 mg; Threonine — 53 mg; Tryptophan — 23 mg; Histidine — 38 mg; Tyrosine — 30 mg; Lysine Acetate — 105 mg; Total Nitrogen Content/ — 36 mg; Total Calcium Content — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Alpha-Keto-Isoleucine,Calcium Salt 67 mg Alpha-Keto-Leucine,Calcium Salt 101 mg Alpha-Keto-Phenylalanine,Calcium Salt 68 mg Alpha-Keto-Valine,Calcium Salt 86 mg Alpha-Hydroxy Methionine,Calcium Salt 59 mg Threonine IP 53 mg Tryptophan IP 23 mg Histidine USP 38 mg Tyrosine USP 30 mg Lysine Acetate USP 105 mg Total Nitrogen Content/Tablet 36 mg Total Calcium Content 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 64,
        "sourceNumber": "396",
        "sourceRecordId": "source-0492"
      }
    ],
    "sources": [
      {
        "recordId": "source-0492",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 64,
        "number": "396"
      }
    ]
  },
  {
    "id": "p-7224a2f364f4",
    "name": "Amisulpride Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg",
      "100 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Amisulpride IP 50 mg Excipients q.s.",
    "ingredients": [
      "Amisulpride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Amisulpride Tablets IP 50 mg",
      "Amisulpride Tablets IP 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Amisulpride — 50 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Amisulpride IP 50 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "sourceNumber": "07",
        "sourceRecordId": "source-0103"
      },
      {
        "label": "Standard formulation",
        "composition": "Amisulpride — 100 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Amisulpride IP 100 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "sourceNumber": "08",
        "sourceRecordId": "source-0104"
      }
    ],
    "sources": [
      {
        "recordId": "source-0103",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "number": "07"
      },
      {
        "recordId": "source-0104",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "number": "08"
      }
    ]
  },
  {
    "id": "p-2948d152acc0",
    "name": "Amitriptyline Hydrochloride Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "25 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Amitriptyline Hydrochloride Equivalentto Amitriptyline IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Amitriptyline Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Amitriptyline HCl Tablets IP 10 mg",
      "Amitriptyline HCl Tablets IP25 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Amitriptyline Hydrochloride — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amitriptyline Hydrochloride Equivalentto Amitriptyline IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "sourceNumber": "190",
        "sourceRecordId": "source-0286"
      },
      {
        "label": "Standard formulation",
        "composition": "Amitriptyline Hydrochloride — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amitriptyline Hydrochloride Equivalentto Amitriptyline IP 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "sourceNumber": "346",
        "sourceRecordId": "source-0442"
      }
    ],
    "sources": [
      {
        "recordId": "source-0286",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "number": "190"
      },
      {
        "recordId": "source-0442",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "346"
      }
    ]
  },
  {
    "id": "p-e8072713feea",
    "name": "Amlodipine Besylate & Atenolol Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg + 50 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Amlodipine Besilate Equivalentto Amlodipine IP 5 mg Atenolol IP 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Amlodipine Besylate",
      "Atenolol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Amlodipine&Atenolol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 5 mg; Atenolol — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besilate Equivalentto Amlodipine IP 5 mg Atenolol IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "sourceNumber": "460",
        "sourceRecordId": "source-0556"
      }
    ],
    "sources": [
      {
        "recordId": "source-0556",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "number": "460"
      }
    ]
  },
  {
    "id": "p-2be495ead017",
    "name": "Amlodipine Besylate & Olmesartan Medoxomil & Hydrochlorothiazide Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 40 mg + 25 mg",
      "5 mg + 40 mg + 12.5 mg",
      "5 mg + 20 mg + 12.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 10 mg Olmesartan Medoxomin IP 40 mg Hydrochlorothiazide IP 25 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Amlodipine Besylate",
      "Olmesartan Medoxomil",
      "Hydrochlorothiazide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Amlodipine, Olmesartan Medoxomil &Hydrochlorothiazide Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 10 mg; Olmesartan Medoxomil — 40 mg; Hydrochlorothiazide — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 10 mg Olmesartan Medoxomin IP 40 mg Hydrochlorothiazide IP 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "sourceNumber": "273",
        "sourceRecordId": "source-0369"
      },
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 5 mg; Olmesartan Medoxomil — 40 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Olmesartan Medoxomin IP 40 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "sourceNumber": "274",
        "sourceRecordId": "source-0370"
      },
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 5 mg; Olmesartan Medoxomil — 20 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Olmesartan Medoxomin IP 20 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "sourceNumber": "275",
        "sourceRecordId": "source-0371"
      }
    ],
    "sources": [
      {
        "recordId": "source-0369",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "number": "273"
      },
      {
        "recordId": "source-0370",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "number": "274"
      },
      {
        "recordId": "source-0371",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "number": "275"
      }
    ]
  },
  {
    "id": "p-3f8e913b1e94",
    "name": "Amlodipine Besylate & Telmisartan & Hydrochlorothiazide Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 80 mg + 12.5 mg",
      "5 mg + 40 mg + 12.5 mg",
      "2.5 mg + 20 mg + 12.5 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 10 mg Telmisartan IP 80 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s.",
    "ingredients": [
      "Amlodipine Besylate",
      "Telmisartan",
      "Hydrochlorothiazide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Amlodipine,Telmisartan&Hydrochlorothiazide"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 10 mg; Telmisartan — 80 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 10 mg Telmisartan IP 80 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "sourceNumber": "269",
        "sourceRecordId": "source-0365"
      },
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 5 mg; Telmisartan — 40 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Telmisartan IP 40 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "sourceNumber": "270",
        "sourceRecordId": "source-0366"
      },
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 2.5 mg; Telmisartan — 20 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 2.5 mg Telmisartan IP 20 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "sourceNumber": "271",
        "sourceRecordId": "source-0367"
      }
    ],
    "sources": [
      {
        "recordId": "source-0365",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "number": "269"
      },
      {
        "recordId": "source-0366",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "number": "270"
      },
      {
        "recordId": "source-0367",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "number": "271"
      }
    ]
  },
  {
    "id": "p-f745a875dda1",
    "name": "Amlodipine Besylate & Valsartan & Hydrochlorothiazide Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg + 320 mg + 12.5 mg",
      "2.5 mg + 80 mg + 12.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Valsartan IP 320 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Amlodipine Besylate",
      "Valsartan",
      "Hydrochlorothiazide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Amlodipine, Valsartan &Hydrochlorothiazide Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 5 mg; Valsartan — 320 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Valsartan IP 320 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "sourceNumber": "267",
        "sourceRecordId": "source-0363"
      },
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 2.5 mg; Valsartan — 80 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 2.5 mg Valsartan IP 80 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "sourceNumber": "268",
        "sourceRecordId": "source-0364"
      }
    ],
    "sources": [
      {
        "recordId": "source-0363",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "number": "267"
      },
      {
        "recordId": "source-0364",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "number": "268"
      }
    ]
  },
  {
    "id": "p-97558d8aeb1c",
    "name": "Amlodipine Besylate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Amlodipine Besilate Equivalentto Amlodipine I.P. 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Amlodipine Besylate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Amlodipine Tablets I.P.",
      "Amlodipine Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besilate Equivalentto Amlodipine I.P. 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "sourceNumber": "61",
        "sourceRecordId": "source-0157"
      },
      {
        "label": "Standard formulation",
        "composition": "Amlodipine Besylate — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besilate Equivalentto Amlodipine I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "sourceNumber": "62",
        "sourceRecordId": "source-0158"
      }
    ],
    "sources": [
      {
        "recordId": "source-0157",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "number": "61"
      },
      {
        "recordId": "source-0158",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "number": "62"
      },
      {
        "recordId": "source-0599",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 82,
        "number": "503"
      }
    ]
  },
  {
    "id": "p-fbca22501399",
    "name": "Artemether & Lumefantrine Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "80 mg + 480 mg"
    ],
    "composition": "Each Film Coated Tablet Contains : Artemether IP 80 mg Lumefantrine IP 480 mg Approved Colour Used",
    "ingredients": [
      "Artemether",
      "Lumefantrine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Artemether And Lumefantrine Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Artemether — 80 mg; Lumefantrine — 480 mg",
        "sourceComposition": "Each Film Coated Tablet Contains : Artemether IP 80 mg Lumefantrine IP 480 mg Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "sourceNumber": "490",
        "sourceRecordId": "source-0586"
      }
    ],
    "sources": [
      {
        "recordId": "source-0586",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "number": "490"
      }
    ]
  },
  {
    "id": "p-57135964ead0",
    "name": "Ascorbic Acid & Sodium Ascorbate & Zinc Citrate Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 450 mg / 400 mg + 5 mg"
    ],
    "composition": "Each Uncoated Chewable Tablet Contains: Ascorbic Acid I.P. 100 mg Sodium Ascorbate Eqto Ascorbic Acid I.P. 450 mg 400 mg Zinc Citrate 5 mg Excipients q.s. Colour:Sunset Yellow Fcf",
    "ingredients": [
      "Ascorbic Acid",
      "Sodium Ascorbate",
      "Zinc Citrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ascorbic Acid(Vitamin C), Sodium Ascorbate&Zinc Chewable Tablets"
    ],
    "variants": [
      {
        "label": "Chewable",
        "composition": "Ascorbic Acid — 100 mg; Sodium Ascorbate — 450 mg / 400 mg; Zinc Citrate — 5 mg",
        "sourceComposition": "Each Uncoated Chewable Tablet Contains: Ascorbic Acid I.P. 100 mg Sodium Ascorbate Eqto Ascorbic Acid I.P. 450 mg 400 mg Zinc Citrate 5 mg Excipients q.s. Colour:Sunset Yellow Fcf",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "sourceNumber": "113",
        "sourceRecordId": "source-0209"
      }
    ],
    "sources": [
      {
        "recordId": "source-0209",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "number": "113"
      }
    ]
  },
  {
    "id": "p-981d9d53a46f",
    "name": "Ascorbic Acid Coated, Lepidium Meyer, Coenzyme Q10 & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Ascorbic Acid Coated 65 mg Lepidium Meyer 100 mg Coenzyme Q10 200 mg Zinc Amino Acetate Chelate 75 mg Vitamin E Acetate50%Powder 10 mg Acetyl-Lcarnitine 50 mg Astaxanthin10%Powder 16 mg L-Methylfolate Calcium 0.5 mg L-Selenomethionine 161.5 mcg Cyanocobalamin 1 mcg",
    "ingredients": [
      "Ascorbic Acid Coated",
      "Lepidium Meyer",
      "Coenzyme Q10",
      "Zinc Amino Acetate Chelate",
      "Vitamin E Acetate Powder",
      "Acetyl-Lcarnitine",
      "Astaxanthin Powder",
      "L-Methylfolate Calcium",
      "L-Selenomethionine",
      "Cyanocobalamin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Ascorbic Acid Coated 65 mg Lepidium Meyer 100 mg Coenzyme Q10 200 mg Zinc Amino Acetate Chelate 75 mg Vitamin E Acetate50%Powder 10 mg Acetyl-Lcarnitine 50 mg Astaxanthin10%Powder 16 mg L-Methylfolate Calcium 0.5 mg L-Selenomethionine 161.5 mcg Cyanocobalamin 1 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ascorbic Acid Coated — 65 mg; Lepidium Meyer — 100 mg; Coenzyme Q10 — 200 mg; Zinc Amino Acetate Chelate — 75 mg; Vitamin E Acetate Powder — 10 mg; Acetyl-Lcarnitine — 50 mg; Astaxanthin Powder — 16 mg; L-Methylfolate Calcium — 0.5 mg; L-Selenomethionine — 161.5 mcg; Cyanocobalamin — 1 mcg",
        "sourceComposition": "Ascorbic Acid Coated 65 mg Lepidium Meyer 100 mg Coenzyme Q10 200 mg Zinc Amino Acetate Chelate 75 mg Vitamin E Acetate50%Powder 10 mg Acetyl-Lcarnitine 50 mg Astaxanthin10%Powder 16 mg L-Methylfolate Calcium 0.5 mg L-Selenomethionine 161.5 mcg Cyanocobalamin 1 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 16,
        "sourceNumber": "90",
        "sourceRecordId": "source-0090"
      }
    ],
    "sources": [
      {
        "recordId": "source-0090",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 16,
        "number": "90"
      }
    ]
  },
  {
    "id": "p-ebc55dbedfe4",
    "name": "Ascorbic Acid Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Ascorbic Acid IP 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ascorbic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ascorbic Acid Tablets IP500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ascorbic Acid — 500 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Ascorbic Acid IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "sourceNumber": "382",
        "sourceRecordId": "source-0478"
      }
    ],
    "sources": [
      {
        "recordId": "source-0478",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "number": "382"
      }
    ]
  },
  {
    "id": "p-57cd5c0b023d",
    "name": "Ascorbic Acid, Magnesium Oxide Light, Coenzyme Q10 & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Ascorbic Acid 60 mg Magnesium Oxide Light 175 mg Coenzyme Q10 100 mg Vitamin E Acetate50%Powder 10 mg Zinc Sulphate Monohydrate 14 mg Vitamin E Acetate50%Powder 10 mg Vitamin B3 15 mg Magnesium Sulphate 4 mg Calcium Ascorbate 10 mg Calcium D-Pantothenate 4.6 mg Astaxanthin10%Powder 4 mg Copper Sulphate 2 mg Vitamin B2 1.5 mg Vitamin B1 1.5 mg Melatonin 0.5 mg L-Methylfolate Calcium 0.5 mg Pyridoxal 5-Phosphate 0.5 mg Potassium Iodide 197 mcg L-Selenomethionine 161.5 mcg Cyanocobalamin 1 mcg Beta Carotene20% 1.5 mcg D-Biotin 30 mcg",
    "ingredients": [
      "Ascorbic Acid",
      "Magnesium Oxide Light",
      "Coenzyme Q10",
      "Vitamin E Acetate Powder",
      "Zinc Sulphate Monohydrate",
      "Vitamin B3",
      "Magnesium Sulphate",
      "Calcium Ascorbate",
      "Calcium D-Pantothenate",
      "Astaxanthin Powder",
      "Copper Sulphate",
      "Vitamin B2",
      "Vitamin B1",
      "Melatonin",
      "L-Methylfolate Calcium",
      "Pyridoxal 5-Phosphate",
      "Potassium Iodide",
      "L-Selenomethionine",
      "Cyanocobalamin",
      "Beta Carotene",
      "D-Biotin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Ascorbic Acid 60 mg Magnesium Oxide Light 175 mg Coenzyme Q10 100 mg Vitamin E Acetate50%Powder 10 mg Zinc Sulphate Monohydrate 14 mg Vitamin E Acetate50%Powder 10 mg Vitamin B3 15 mg Magnesium Sulphate 4 mg Calcium Ascorbate 10 mg Calcium D-Pantothenate 4.6 mg Astaxanthin10%Powder 4 mg Copper Sulphate 2 mg Vitamin B2 1.5 mg Vitamin B1 1.5 mg Melatonin 0.5 mg L-Methylfolate Calcium 0.5 mg Pyridoxal 5-Phosphate 0.5 mg Potassium Iodide 197 mcg L-Selenomethionine 161.5 mcg Cyanocobalamin 1 mcg Beta Carotene20% 1.5 mcg D-Biotin 30 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ascorbic Acid — 60 mg; Magnesium Oxide Light — 175 mg; Coenzyme Q10 — 100 mg; Vitamin E Acetate Powder — 10 mg; Zinc Sulphate Monohydrate — 14 mg; Vitamin B3 — 15 mg; Magnesium Sulphate — 4 mg; Calcium Ascorbate — 10 mg; Calcium D-Pantothenate — 4.6 mg; Astaxanthin Powder — 4 mg; Copper Sulphate — 2 mg; Vitamin B2 — 1.5 mg; Vitamin B1 — 1.5 mg; Melatonin — 0.5 mg; L-Methylfolate Calcium — 0.5 mg; Pyridoxal 5-Phosphate — 0.5 mg; Potassium Iodide — 197 mcg; L-Selenomethionine — 161.5 mcg; Cyanocobalamin — 1 mcg; Beta Carotene — 1.5 mcg; D-Biotin — 30 mcg",
        "sourceComposition": "Ascorbic Acid 60 mg Magnesium Oxide Light 175 mg Coenzyme Q10 100 mg Vitamin E Acetate50%Powder 10 mg Zinc Sulphate Monohydrate 14 mg Vitamin E Acetate50%Powder 10 mg Vitamin B3 15 mg Magnesium Sulphate 4 mg Calcium Ascorbate 10 mg Calcium D-Pantothenate 4.6 mg Astaxanthin10%Powder 4 mg Copper Sulphate 2 mg Vitamin B2 1.5 mg Vitamin B1 1.5 mg Melatonin 0.5 mg L-Methylfolate Calcium 0.5 mg Pyridoxal 5-Phosphate 0.5 mg Potassium Iodide 197 mcg L-Selenomethionine 161.5 mcg Cyanocobalamin 1 mcg Beta Carotene20% 1.5 mcg D-Biotin 30 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "sourceNumber": "48",
        "sourceRecordId": "source-0048"
      }
    ],
    "sources": [
      {
        "recordId": "source-0048",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "number": "48"
      }
    ]
  },
  {
    "id": "p-ca096957ac45",
    "name": "Ascorbic Acid, Magnesium Oxide, Vitamin E Acetate & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Ascorbic Acid 200 mg Magnesium Oxide 175 mg Vitamin E Acetate 147 mg Coenzyme 60 mg Zinc Sulphate Monohydrate 17 mg Vitamin B3 20 mg Ferrous Fumarate 18.85 mg Magnesium Sulphate 15.4 mg Calcium Ascorbate 10 mg Calcium D-Pantothenate 4.6 mg Astaxanthin10%Powder 4 mg Vitamin B2 1.5 mg Copper Sulphate 3.3 mg Vitamin B1 1.5 mg Beta Carotene20% 1.5 mg L-Methylfolate Calcium 0.5 mg Pyridoxal-5Phosphate 0.5 mg Potassium Iodide 197 mcg D-Biotin 100 mcg Cyanocobalamin 2.5 mcg Melatonin 0.5 mg L-Selenomethionine 161.5 mcg",
    "ingredients": [
      "Ascorbic Acid",
      "Magnesium Oxide",
      "Vitamin E Acetate",
      "Coenzyme",
      "Zinc Sulphate Monohydrate",
      "Vitamin B3",
      "Ferrous Fumarate",
      "Magnesium Sulphate",
      "Calcium Ascorbate",
      "Calcium D-Pantothenate",
      "Astaxanthin Powder",
      "Vitamin B2",
      "Copper Sulphate",
      "Vitamin B1",
      "Beta Carotene",
      "L-Methylfolate Calcium",
      "Pyridoxal-5Phosphate",
      "Potassium Iodide",
      "D-Biotin",
      "Cyanocobalamin",
      "Melatonin",
      "L-Selenomethionine"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Ascorbic Acid 200 mg Magnesium Oxide 175 mg Vitamin E Acetate 147 mg Coenzyme 60 mg Zinc Sulphate Monohydrate 17 mg Vitamin B3 20 mg Ferrous Fumarate 18.85 mg Magnesium Sulphate 15.4 mg Calcium Ascorbate 10 mg Calcium D-Pantothenate 4.6 mg Astaxanthin10%Powder 4 mg Vitamin B2 1.5 mg Copper Sulphate 3.3 mg Vitamin B1 1.5 mg Beta Carotene20% 1.5 mg L-Methylfolate Calcium 0.5 mg Pyridoxal-5Phosphate 0.5 mg Potassium Iodide 197 mcg D-Biotin 100 mcg Cyanocobalamin 2.5 mcg Melatonin 0.5 mg L-Selenomethionine 161.5 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ascorbic Acid — 200 mg; Magnesium Oxide — 175 mg; Vitamin E Acetate — 147 mg; Coenzyme — 60 mg; Zinc Sulphate Monohydrate — 17 mg; Vitamin B3 — 20 mg; Ferrous Fumarate — 18.85 mg; Magnesium Sulphate — 15.4 mg; Calcium Ascorbate — 10 mg; Calcium D-Pantothenate — 4.6 mg; Astaxanthin Powder — 4 mg; Vitamin B2 — 1.5 mg; Copper Sulphate — 3.3 mg; Vitamin B1 — 1.5 mg; Beta Carotene — 1.5 mg; L-Methylfolate Calcium — 0.5 mg; Pyridoxal-5Phosphate — 0.5 mg; Potassium Iodide — 197 mcg; D-Biotin — 100 mcg; Cyanocobalamin — 2.5 mcg; Melatonin — 0.5 mg; L-Selenomethionine — 161.5 mcg",
        "sourceComposition": "Ascorbic Acid 200 mg Magnesium Oxide 175 mg Vitamin E Acetate 147 mg Coenzyme 60 mg Zinc Sulphate Monohydrate 17 mg Vitamin B3 20 mg Ferrous Fumarate 18.85 mg Magnesium Sulphate 15.4 mg Calcium Ascorbate 10 mg Calcium D-Pantothenate 4.6 mg Astaxanthin10%Powder 4 mg Vitamin B2 1.5 mg Copper Sulphate 3.3 mg Vitamin B1 1.5 mg Beta Carotene20% 1.5 mg L-Methylfolate Calcium 0.5 mg Pyridoxal-5Phosphate 0.5 mg Potassium Iodide 197 mcg D-Biotin 100 mcg Cyanocobalamin 2.5 mcg Melatonin 0.5 mg L-Selenomethionine 161.5 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 5,
        "sourceNumber": "28",
        "sourceRecordId": "source-0028"
      }
    ],
    "sources": [
      {
        "recordId": "source-0028",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 5,
        "number": "28"
      }
    ]
  },
  {
    "id": "p-5d9a91165f36",
    "name": "Astaxanthin Powder, Coenzyme Q10, Lycopene Powder & Multinutrient Blend Food Formulation with L-Carnitine L-Tartrate, Zinc Sulphate Monohydrate, Piperinepowder, Sodium Selenate",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Astaxanthin10%Powder 8 mg Coenzyme Q10 100 mg Lycopene Powder10% 2500 mcg L-Carnitine L-Tartrate 250 mg Zinc Sulphate Monohydrate 10 mg Piperinepowder95% 10 mg Sodium Selenate 30 mcg",
    "ingredients": [
      "Astaxanthin Powder",
      "Coenzyme Q10",
      "Lycopene Powder",
      "L-Carnitine L-Tartrate",
      "Zinc Sulphate Monohydrate",
      "Piperinepowder",
      "Sodium Selenate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Astaxanthin10%Powder 8 mg Coenzyme Q10 100 mg Lycopene Powder10% 2500 mcg L-Carnitine L-Tartrate 250 mg Zinc Sulphate Monohydrate 10 mg Piperinepowder95% 10 mg Sodium Selenate 30 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Astaxanthin Powder — 8 mg; Coenzyme Q10 — 100 mg; Lycopene Powder — 2500 mcg; L-Carnitine L-Tartrate — 250 mg; Zinc Sulphate Monohydrate — 10 mg; Piperinepowder — 10 mg; Sodium Selenate — 30 mcg",
        "sourceComposition": "Astaxanthin10%Powder 8 mg Coenzyme Q10 100 mg Lycopene Powder10% 2500 mcg L-Carnitine L-Tartrate 250 mg Zinc Sulphate Monohydrate 10 mg Piperinepowder95% 10 mg Sodium Selenate 30 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "sourceNumber": "52",
        "sourceRecordId": "source-0052"
      }
    ],
    "sources": [
      {
        "recordId": "source-0052",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "number": "52"
      }
    ]
  },
  {
    "id": "p-a3db8b1e4607",
    "name": "Astaxanthin Powder, Coenzyme Q10, Lycopene Powder & Multinutrient Blend Food Formulation with L-Carnitine Base, Zinc Sulphate Monohydrate, Vitamin D3 Stabilized, Folic Acid, Cyanocobalamin, L-Glutathione Reduced",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Astaxanthin10%Powder 8 mg Coenzyme Q10 100 mg Lycopene Powder10% 2500 mcg L-Carnitine Base 1000 mg Zinc Sulphate Monohydrate 12.5 mg Vitamin D3 Stabilized 600 iu Folic Acid 570 mcg Cyanocobalamin 1 mcg L-Glutathione Reduced 20 mg",
    "ingredients": [
      "Astaxanthin Powder",
      "Coenzyme Q10",
      "Lycopene Powder",
      "L-Carnitine Base",
      "Zinc Sulphate Monohydrate",
      "Vitamin D3 Stabilized",
      "Folic Acid",
      "Cyanocobalamin",
      "L-Glutathione Reduced"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Astaxanthin10%Powder 8 mg Coenzyme Q10 100 mg Lycopene Powder10% 2500 mcg L-Carnitine Base 1000 mg Zinc Sulphate Monohydrate 12.5 mg Vitamin D3 Stabilized 600 iu Folic Acid 570 mcg Cyanocobalamin 1 mcg L-Glutathione Reduced 20 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Astaxanthin Powder — 8 mg; Coenzyme Q10 — 100 mg; Lycopene Powder — 2500 mcg; L-Carnitine Base — 1000 mg; Zinc Sulphate Monohydrate — 12.5 mg; Vitamin D3 Stabilized — 600 iu; Folic Acid — 570 mcg; Cyanocobalamin — 1 mcg; L-Glutathione Reduced — 20 mg",
        "sourceComposition": "Astaxanthin10%Powder 8 mg Coenzyme Q10 100 mg Lycopene Powder10% 2500 mcg L-Carnitine Base 1000 mg Zinc Sulphate Monohydrate 12.5 mg Vitamin D3 Stabilized 600 iu Folic Acid 570 mcg Cyanocobalamin 1 mcg L-Glutathione Reduced 20 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "sourceNumber": "66",
        "sourceRecordId": "source-0066"
      }
    ],
    "sources": [
      {
        "recordId": "source-0066",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "number": "66"
      }
    ]
  },
  {
    "id": "p-aa79461db17f",
    "name": "Astaxanthin Powder, Coenzyme Q10, Lycopene Powder & Multinutrient Blend Food Formulation with Melatonin, L-Carnitine Base, Vitamin D3 Stabilized, Folic Acid, Cyanocobalamin, Vitamin E Acetate",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Astaxanthin10%Powder 8 mg Coenzyme Q10 60 mg Lycopene Powder10% 5000 mcg Melatonin 1 mg L-Carnitine Base 500 mg Vitamin D3 Stabilized 500 iu Folic Acid 570 mcg Cyanocobalamin 1 mcg Vitamin E Acetate 10 mg",
    "ingredients": [
      "Astaxanthin Powder",
      "Coenzyme Q10",
      "Lycopene Powder",
      "Melatonin",
      "L-Carnitine Base",
      "Vitamin D3 Stabilized",
      "Folic Acid",
      "Cyanocobalamin",
      "Vitamin E Acetate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Astaxanthin10%Powder 8 mg Coenzyme Q10 60 mg Lycopene Powder10% 5000 mcg Melatonin 1 mg L-Carnitine Base 500 mg Vitamin D3 Stabilized 500 iu Folic Acid 570 mcg Cyanocobalamin 1 mcg Vitamin E Acetate 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Astaxanthin Powder — 8 mg; Coenzyme Q10 — 60 mg; Lycopene Powder — 5000 mcg; Melatonin — 1 mg; L-Carnitine Base — 500 mg; Vitamin D3 Stabilized — 500 iu; Folic Acid — 570 mcg; Cyanocobalamin — 1 mcg; Vitamin E Acetate — 10 mg",
        "sourceComposition": "Astaxanthin10%Powder 8 mg Coenzyme Q10 60 mg Lycopene Powder10% 5000 mcg Melatonin 1 mg L-Carnitine Base 500 mg Vitamin D3 Stabilized 500 iu Folic Acid 570 mcg Cyanocobalamin 1 mcg Vitamin E Acetate 10 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "sourceNumber": "67",
        "sourceRecordId": "source-0067"
      }
    ],
    "sources": [
      {
        "recordId": "source-0067",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "number": "67"
      }
    ]
  },
  {
    "id": "p-342986f09443",
    "name": "Atenolol Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg",
      "25 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Atenolol IP 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Atenolol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Atenolol Tablets IP50 mg",
      "Atenolol Tablets IP 25 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Atenolol — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atenolol IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "sourceNumber": "459",
        "sourceRecordId": "source-0555"
      },
      {
        "label": "Standard formulation",
        "composition": "Atenolol — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atenolol IP 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "sourceNumber": "462",
        "sourceRecordId": "source-0558"
      }
    ],
    "sources": [
      {
        "recordId": "source-0555",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "number": "459"
      },
      {
        "recordId": "source-0558",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "number": "462"
      }
    ]
  },
  {
    "id": "p-1aec29a81232",
    "name": "Atorvastatin Calcium & Aspirin Capsules",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 150 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Atorvastatin Calcium Equivalentto Atorvastatin IP 10 mg Aspirin IP 150 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
    "ingredients": [
      "Atorvastatin Calcium",
      "Aspirin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Atorvastatin&Aspirin Capsules"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Atorvastatin Calcium — 10 mg; Aspirin — 150 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Atorvastatin Calcium Equivalentto Atorvastatin IP 10 mg Aspirin IP 150 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 45,
        "sourceNumber": "281",
        "sourceRecordId": "source-0377"
      }
    ],
    "sources": [
      {
        "recordId": "source-0377",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 45,
        "number": "281"
      }
    ]
  },
  {
    "id": "p-178bc1756bd0",
    "name": "Atorvastatin Calcium & Fenofibrate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 160 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin I.P. 10 mg Fenofibrate I.P. 160 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Atorvastatin Calcium",
      "Fenofibrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Atorvastatin and Fenofibrate Tablets I.P."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Atorvastatin Calcium — 10 mg; Fenofibrate — 160 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin I.P. 10 mg Fenofibrate I.P. 160 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "sourceNumber": "71",
        "sourceRecordId": "source-0167"
      }
    ],
    "sources": [
      {
        "recordId": "source-0167",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "number": "71"
      }
    ]
  },
  {
    "id": "p-d3d0405698d2",
    "name": "Atorvastatin Calcium & Telmisartan Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg + 20 mg",
      "10 mg + 20 mg",
      "5 mg + 40 mg",
      "10 mg + 40 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin IP 5 mg Telmisartan IP 20 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Atorvastatin Calcium",
      "Telmisartan"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Atorvastatin Calcium&Telmisartan Tablets",
      "Telmisartan&Atorvastatin Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Atorvastatin Calcium — 5 mg; Telmisartan — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin IP 5 mg Telmisartan IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "sourceNumber": "207",
        "sourceRecordId": "source-0303"
      },
      {
        "label": "Standard formulation",
        "composition": "Atorvastatin Calcium — 10 mg; Telmisartan — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin IP 10 mg Telmisartan IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "sourceNumber": "208",
        "sourceRecordId": "source-0304"
      },
      {
        "label": "Standard formulation",
        "composition": "Atorvastatin Calcium — 5 mg; Telmisartan — 40 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin IP 5 mg Telmisartan IP 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "sourceNumber": "209",
        "sourceRecordId": "source-0305"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 40 mg; Atorvastatin Calcium — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Telmisartan IP 40 mg Atorvastatin Calcium Equivalentto Atorvastatin IP 10 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "sourceNumber": "249",
        "sourceRecordId": "source-0345"
      }
    ],
    "sources": [
      {
        "recordId": "source-0303",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "number": "207"
      },
      {
        "recordId": "source-0304",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "number": "208"
      },
      {
        "recordId": "source-0305",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "number": "209"
      },
      {
        "recordId": "source-0345",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "number": "249"
      }
    ]
  },
  {
    "id": "p-2c28e6d6be41",
    "name": "Atorvastatin Calcium Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "20 mg",
      "40 mg",
      "80 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin I.P. 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Atorvastatin Calcium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Atorvastatin Tablets I.P",
      "Atorvastatin Tablets IP 20 mg",
      "Atorvastatin Tablets IP 40 mg",
      "Atorvastatin Tablets IP80 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Atorvastatin Calcium — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "sourceNumber": "85",
        "sourceRecordId": "source-0181"
      },
      {
        "label": "Standard formulation",
        "composition": "Atorvastatin Calcium — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin I.P. 20 mg Excipients Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "sourceNumber": "132",
        "sourceRecordId": "source-0228"
      },
      {
        "label": "Standard formulation",
        "composition": "Atorvastatin Calcium — 40 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin I.P. 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "sourceNumber": "133",
        "sourceRecordId": "source-0229"
      },
      {
        "label": "Standard formulation",
        "composition": "Atorvastatin Calcium — 80 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Atorvastatin Calcium Equivalentto Atorvastatin IP 80 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "sourceNumber": "306",
        "sourceRecordId": "source-0402"
      }
    ],
    "sources": [
      {
        "recordId": "source-0181",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "number": "85"
      },
      {
        "recordId": "source-0228",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "number": "132"
      },
      {
        "recordId": "source-0229",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "number": "133"
      },
      {
        "recordId": "source-0402",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "number": "306"
      }
    ]
  },
  {
    "id": "p-bed1c7d1396b",
    "name": "Azithromycin Dihydrate Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg",
      "250 mg"
    ],
    "composition": "Each Film Coated Tablet Contains:: Azithromycin Dihydrate Equivalentto Azithromycin Anhydrous I.P. 500 mg Excipients q.s.",
    "ingredients": [
      "Azithromycin Dihydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Azithromycin Tablets IP 500 mg",
      "Azithromycin Tablets IP 250 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Azithromycin Dihydrate — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains:: Azithromycin Dihydrate Equivalentto Azithromycin Anhydrous I.P. 500 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "sourceNumber": "125",
        "sourceRecordId": "source-0221"
      },
      {
        "label": "Standard formulation",
        "composition": "Azithromycin Dihydrate — 250 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Azithromycin Dihydrate Equivalentto Azithromycin Anhydrous I.P. 250 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "sourceNumber": "130",
        "sourceRecordId": "source-0226"
      }
    ],
    "sources": [
      {
        "recordId": "source-0221",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "number": "125"
      },
      {
        "recordId": "source-0226",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "number": "130"
      }
    ]
  },
  {
    "id": "p-26ab3ad7f483",
    "name": "Benfotiamine, D-Biotin, Calcium Ascorbate & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Benfotiamine 1.5 mg D-Biotin 30 mcg Calcium Ascorbate 45 mg Cholinebitartrate 25 mg Citrus Bioflavonoids 2.0 mg Docosahexaenoic Acid(DHA30%) 60 mg Elcosapentaenoicacid(EPA) 90 mg Folic Acid 150 mcg Ginkgo Biloba Extract 10 mg Ginseng 42.5 mg Lactobacillus 500Million Menadione Sodium Bisulphate (Vitamin K3)10 mcg Mixed Carotene 11.33 mg Vitamin B3(Niacinamide) 20 mg Vitamin B6 (Pyridoxine Hydrochloride ) 1 mg Vitamin D3 Stabilized 200 iu Cyanocobalamin 1 mcg",
    "ingredients": [
      "Benfotiamine",
      "D-Biotin",
      "Calcium Ascorbate",
      "Cholinebitartrate",
      "Citrus Bioflavonoids",
      "Docosahexaenoic Acid",
      "Elcosapentaenoicacid",
      "Folic Acid",
      "Ginkgo Biloba Extract",
      "Ginseng",
      "Lactobacillus 500Million Menadione Sodium Bisulphate",
      "Mixed Carotene",
      "Vitamin B3",
      "Vitamin B6",
      "Vitamin D3 Stabilized",
      "Cyanocobalamin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Benfotiamine 1.5 mg D-Biotin 30 mcg Calcium Ascorbate 45 mg Cholinebitartrate 25 mg Citrus Bioflavonoids 2.0 mg Docosahexaenoic Acid(DHA30%) 60 mg Elcosapentaenoicacid(EPA) 90 mg Folic Acid 150 mcg Ginkgo Biloba Extract 10 mg Ginseng 42.5 mg Lactobacillus 500Million Menadione Sodium Bisulphate (Vitamin K3)10 mcg Mixed Carotene 11.33 mg Vitamin B3(Niacinamide) 20 mg Vitamin B6 (Pyridoxine Hydrochloride ) 1 mg Vitamin D3 Stabilized 200 iu Cyanocobalamin 1 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Benfotiamine — 1.5 mg; D-Biotin — 30 mcg; Calcium Ascorbate — 45 mg; Cholinebitartrate — 25 mg; Citrus Bioflavonoids — 2.0 mg; Docosahexaenoic Acid — 60 mg; Elcosapentaenoicacid — 90 mg; Folic Acid — 150 mcg; Ginkgo Biloba Extract — 10 mg; Ginseng — 42.5 mg; Lactobacillus 500Million Menadione Sodium Bisulphate — 10 mcg; Mixed Carotene — 11.33 mg; Vitamin B3 — 20 mg; Vitamin B6 — 1 mg; Vitamin D3 Stabilized — 200 iu; Cyanocobalamin — 1 mcg",
        "sourceComposition": "Benfotiamine 1.5 mg D-Biotin 30 mcg Calcium Ascorbate 45 mg Cholinebitartrate 25 mg Citrus Bioflavonoids 2.0 mg Docosahexaenoic Acid(DHA30%) 60 mg Elcosapentaenoicacid(EPA) 90 mg Folic Acid 150 mcg Ginkgo Biloba Extract 10 mg Ginseng 42.5 mg Lactobacillus 500Million Menadione Sodium Bisulphate (Vitamin K3)10 mcg Mixed Carotene 11.33 mg Vitamin B3(Niacinamide) 20 mg Vitamin B6 (Pyridoxine Hydrochloride ) 1 mg Vitamin D3 Stabilized 200 iu Cyanocobalamin 1 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "sourceNumber": "5",
        "sourceRecordId": "source-0005"
      }
    ],
    "sources": [
      {
        "recordId": "source-0005",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "number": "5"
      }
    ]
  },
  {
    "id": "p-3ae4e70fcfd0",
    "name": "Benidipine Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "4 mg",
      "8 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Benidipine 4 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Benidipine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Benidipine Tablets4 mg",
      "Benidipine Tablets8 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Benidipine — 4 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Benidipine 4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "sourceNumber": "184",
        "sourceRecordId": "source-0280"
      },
      {
        "label": "Standard formulation",
        "composition": "Benidipine — 8 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Benidipine 8 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "sourceNumber": "185",
        "sourceRecordId": "source-0281"
      }
    ],
    "sources": [
      {
        "recordId": "source-0280",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "number": "184"
      },
      {
        "recordId": "source-0281",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "number": "185"
      }
    ]
  },
  {
    "id": "p-355367a4de75",
    "name": "Beta Carotene, Selenium, Manganese & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Beta Carotene(30% Dispersion) 10 mg Selenium (From Selenium Dioxide) 70 mcg Manganese (From Manganese Sulphate) 2 mg Zinc Sulphate Monohydrate 27.5 mg Copper(From Copper Sulphate Pentahydrat) 2 mg",
    "ingredients": [
      "Beta Carotene",
      "Selenium",
      "Manganese",
      "Zinc Sulphate Monohydrate",
      "Copper"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Beta Carotene(30% Dispersion) 10 mg Selenium (From Selenium Dioxide) 70 mcg Manganese (From Manganese Sulphate) 2 mg Zinc Sulphate Monohydrate 27.5 mg Copper(From Copper Sulphate Pentahydrat) 2 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Beta Carotene — 10 mg; Selenium — 70 mcg; Manganese — 2 mg; Zinc Sulphate Monohydrate — 27.5 mg; Copper — 2 mg",
        "sourceComposition": "Beta Carotene(30% Dispersion) 10 mg Selenium (From Selenium Dioxide) 70 mcg Manganese (From Manganese Sulphate) 2 mg Zinc Sulphate Monohydrate 27.5 mg Copper(From Copper Sulphate Pentahydrat) 2 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "41",
        "sourceRecordId": "source-0722"
      }
    ],
    "sources": [
      {
        "recordId": "source-0722",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "41"
      }
    ]
  },
  {
    "id": "p-686eff93fe7a",
    "name": "Betahistine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "8 mg",
      "16 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Betahistine Hydrochloride I.P. 8 mg Excipients q.s.",
    "ingredients": [
      "Betahistine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Betahistine Tablets I.P."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Betahistine Hydrochloride — 8 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Betahistine Hydrochloride I.P. 8 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "sourceNumber": "101",
        "sourceRecordId": "source-0197"
      },
      {
        "label": "Standard formulation",
        "composition": "Betahistine Hydrochloride — 16 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Betahistine Hydrochloride I.P. 16 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "sourceNumber": "102",
        "sourceRecordId": "source-0198"
      }
    ],
    "sources": [
      {
        "recordId": "source-0197",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "number": "101"
      },
      {
        "recordId": "source-0198",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "number": "102"
      }
    ]
  },
  {
    "id": "p-7efb16a8bd83",
    "name": "Bilastine & Montelukast Sodium Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg + 10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains : Bilastine IP 20 mg Montelukast Sodium Equivalent to Montelukast IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Bilastine",
      "Montelukast Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Bilastineand Montelukast Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Bilastine — 20 mg; Montelukast Sodium — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains : Bilastine IP 20 mg Montelukast Sodium Equivalent to Montelukast IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 76,
        "sourceNumber": "471",
        "sourceRecordId": "source-0567"
      }
    ],
    "sources": [
      {
        "recordId": "source-0567",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 76,
        "number": "471"
      }
    ]
  },
  {
    "id": "p-fa57758fcf08",
    "name": "Biotin, N-Acetyl Cysteine, Calcium Pantothenate & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Biotin IP 10 mg N-Acetyl Cysteine USP 50 mg Calcium Pantothenate IP 100 mg Sodium Selenite Equivalentto Elemental Selenium BP 65 mcg Cupric Oxide Equivalentto Elemental Copper 3 mg Zinc Oxide Equivalentto Elemental Zinc IP 22.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Biotin",
      "N-Acetyl Cysteine",
      "Calcium Pantothenate",
      "Sodium Selenite",
      "Cupric Oxide",
      "Zinc Oxide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Biotin,N-Acetyl Cysteine, Calcium Pantothenateand Minerals Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Biotin — 10 mg; N-Acetyl Cysteine — 50 mg; Calcium Pantothenate — 100 mg; Sodium Selenite — 65 mcg; Cupric Oxide — 3 mg; Zinc Oxide — 22.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Biotin IP 10 mg N-Acetyl Cysteine USP 50 mg Calcium Pantothenate IP 100 mg Sodium Selenite Equivalentto Elemental Selenium BP 65 mcg Cupric Oxide Equivalentto Elemental Copper 3 mg Zinc Oxide Equivalentto Elemental Zinc IP 22.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "sourceNumber": "307",
        "sourceRecordId": "source-0403"
      }
    ],
    "sources": [
      {
        "recordId": "source-0403",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "number": "307"
      }
    ]
  },
  {
    "id": "p-58a94530ca27",
    "name": "Bisoprolol Fumarate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains : Bisoprolol Fumarate IP 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Bisoprolol Fumarate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Bisoprolol Fumarate Tablets USP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Bisoprolol Fumarate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains : Bisoprolol Fumarate IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "sourceNumber": "478",
        "sourceRecordId": "source-0574"
      }
    ],
    "sources": [
      {
        "recordId": "source-0574",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "number": "478"
      }
    ]
  },
  {
    "id": "p-63f62538c61f",
    "name": "Boswellic Acid, Glucosamine Sulphate Hydrochloride, Methylsulfonylmethane & Multinutrient Blend Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Boswellic Acid (65% Boswellia Serrata) 200 mg, Glucosamine Sulphate Hydrochloride 750 mg, Methylsulfonylmethane 200 mg, Chondroitin Sulphate 100 mg, Curcuma Longa (95% of Curcumin) 50 mg, Hyaluronic Acid 10 mg, Vitamin K2-7 22.5 mcg, Vitamin D3 400 iu, Zinc as Zinc Oxide 7.5 mg",
    "ingredients": [
      "Boswellic Acid",
      "Glucosamine Sulphate Hydrochloride",
      "Methylsulfonylmethane",
      "Chondroitin Sulphate",
      "Curcuma Longa",
      "Hyaluronic Acid",
      "Vitamin K2-7",
      "Vitamin D3",
      "Zinc as Zinc Oxide"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Boswellic Acid (65% Boswellia Serrata) 200 mg, Glucosamine Sulphate Hydrochloride 750 mg, Methylsulfonylmethane 200 mg, Chondroitin Sulphate 100 mg, Curcuma Longa (95% of Curcumin) 50 mg, Hyaluronic Acid 10 mg, Vitamin K2-7 22.5 mcg, Vitamin D3 400 iu, Zinc as Zinc Oxide 7.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Boswellic Acid — 200 mg; Glucosamine Sulphate Hydrochloride — 750 mg; Methylsulfonylmethane — 200 mg; Chondroitin Sulphate — 100 mg; Curcuma Longa — 50 mg; Hyaluronic Acid — 10 mg; Vitamin K2-7 — 22.5 mcg; Vitamin D3 — 400 iu; Zinc as Zinc Oxide — 7.5 mg",
        "sourceComposition": "Boswellic Acid (65% Boswellia Serrata) 200 mg, Glucosamine Sulphate Hydrochloride 750 mg, Methylsulfonylmethane 200 mg, Chondroitin Sulphate 100 mg, Curcuma Longa (95% of Curcumin) 50 mg, Hyaluronic Acid 10 mg, Vitamin K2-7 22.5 mcg, Vitamin D3 400 iu, Zinc as Zinc Oxide 7.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "17",
        "sourceRecordId": "source-0819"
      }
    ],
    "sources": [
      {
        "recordId": "source-0819",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "17"
      }
    ]
  },
  {
    "id": "p-c595d9f5121d",
    "name": "Brivaracetam Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg",
      "100 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Brivaracetam IP 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Brivaracetam"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Brivaracetam Tablets IP50 mg",
      "Brivaracetam Tablets IP100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Brivaracetam — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Brivaracetam IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "sourceNumber": "348",
        "sourceRecordId": "source-0444"
      },
      {
        "label": "Standard formulation",
        "composition": "Brivaracetam — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Brivaracetam IP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "sourceNumber": "438",
        "sourceRecordId": "source-0534"
      }
    ],
    "sources": [
      {
        "recordId": "source-0444",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "348"
      },
      {
        "recordId": "source-0534",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "number": "438"
      }
    ]
  },
  {
    "id": "p-b08c5641d761",
    "name": "Cabergoline Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "0.5 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Cabergoline IP 0.5 mg Excipients q.s.",
    "ingredients": [
      "Cabergoline"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Cabergoline Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Cabergoline — 0.5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Cabergoline IP 0.5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "sourceNumber": "53",
        "sourceRecordId": "source-0653"
      }
    ],
    "sources": [
      {
        "recordId": "source-0653",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "number": "53"
      }
    ]
  },
  {
    "id": "p-92231d6ff849",
    "name": "Calcitriol & Calcium Carbonate & Zinc Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "0.25 mcg + 500 mg + 7.5 mg"
    ],
    "composition": "Calcitriol 0.25 mcg, Calcium Carbonate 500 mg, eq. to Elemental Calcium 200 mg, Zinc 7.5 mg As Zinc Sulphate Monohydrate",
    "ingredients": [
      "Calcitriol",
      "Calcium Carbonate",
      "Zinc"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcitriol 0.25 mcg, Calcium Carbonate 500 mg, eq. to Elemental Calcium 200 mg, Zinc 7.5 mg As Zinc Sulphate Monohydrate"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcitriol — 0.25 mcg; Calcium Carbonate — 500 mg; Zinc — 7.5 mg",
        "sourceComposition": "Calcitriol 0.25 mcg, Calcium Carbonate 500 mg, eq. to Elemental Calcium 200 mg, Zinc 7.5 mg As Zinc Sulphate Monohydrate",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "13",
        "sourceRecordId": "source-0694"
      }
    ],
    "sources": [
      {
        "recordId": "source-0694",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "13"
      }
    ]
  },
  {
    "id": "p-7268d3e8a18e",
    "name": "Calcitriol & Calcium Carbonate & Zinc Sulphate Monohydrate Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "0.25 mcg + 200 mg + 7.5 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Calcitriol IP 0.25 mcg Calcium Carbonate Equivalentto Elemental Calcium IP 200 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 7.5 mg Excipients q.s.",
    "ingredients": [
      "Calcitriol",
      "Calcium Carbonate",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcitriol,Calcium&Zinc Capsules"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcitriol — 0.25 mcg; Calcium Carbonate — 200 mg; Zinc Sulphate Monohydrate — 7.5 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Calcitriol IP 0.25 mcg Calcium Carbonate Equivalentto Elemental Calcium IP 200 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 7.5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 37,
        "sourceNumber": "237",
        "sourceRecordId": "source-0333"
      }
    ],
    "sources": [
      {
        "recordId": "source-0333",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 37,
        "number": "237"
      }
    ]
  },
  {
    "id": "p-ddfa4fdca428",
    "name": "Calcitriol & Calcium Citrate & Zinc Sulphate Monohydrate & Magnesium Oxide Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "0.25 mcg + 425 mg + 20 mg + 40 mg"
    ],
    "composition": "Calcitriol 0.25 mcg Calcium Citrate 425 mg Zinc Sulphate Monohydrate 20 mg Magnesium Oxide 40 mg",
    "ingredients": [
      "Calcitriol",
      "Calcium Citrate",
      "Zinc Sulphate Monohydrate",
      "Magnesium Oxide"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcitriol 0.25 mcg Calcium Citrate 425 mg Zinc Sulphate Monohydrate 20 mg Magnesium Oxide 40 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcitriol — 0.25 mcg; Calcium Citrate — 425 mg; Zinc Sulphate Monohydrate — 20 mg; Magnesium Oxide — 40 mg",
        "sourceComposition": "Calcitriol 0.25 mcg Calcium Citrate 425 mg Zinc Sulphate Monohydrate 20 mg Magnesium Oxide 40 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "16",
        "sourceRecordId": "source-0697"
      }
    ],
    "sources": [
      {
        "recordId": "source-0697",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "16"
      }
    ]
  },
  {
    "id": "p-fa2b7100d230",
    "name": "Calcitriol Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "0.25 mcg"
    ],
    "composition": "Calcitriol 0.25 mcg",
    "ingredients": [
      "Calcitriol"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcitriol 0.25 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcitriol — 0.25 mcg",
        "sourceComposition": "Calcitriol 0.25 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "12",
        "sourceRecordId": "source-0693"
      }
    ],
    "sources": [
      {
        "recordId": "source-0693",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "12"
      }
    ]
  },
  {
    "id": "p-c5c48af475f3",
    "name": "Calcitriol, Calcium Carbonate, Zinc & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcitriol 0.25 mcg Calcium Carbonate 500 mg Zinc 7.5 mg Magnesium 50 mg Vitamin K27 45 mcg Methylcobalamin 1500 mcg L-Methylfolate 800 mcg",
    "ingredients": [
      "Calcitriol",
      "Calcium Carbonate",
      "Zinc",
      "Magnesium",
      "Vitamin K27",
      "Methylcobalamin",
      "L-Methylfolate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcitriol 0.25 mcg Calcium Carbonate 500 mg Zinc 7.5 mg Magnesium 50 mg Vitamin K27 45 mcg Methylcobalamin 1500 mcg L-Methylfolate 800 mcg",
      "Calcium Carbonate 1250 mg, Calcitriol 0.25 mcg, Zinc 12 mg, Magnesium 50 mg, Vitamin K27 45 mcg, Methylcobalamin 1500 mcg, L-Methyl Folate 800 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcitriol — 0.25 mcg; Calcium Carbonate — 500 mg; Zinc — 7.5 mg; Magnesium — 50 mg; Vitamin K27 — 45 mcg; Methylcobalamin — 1500 mcg; L-Methylfolate — 800 mcg",
        "sourceComposition": "Calcitriol 0.25 mcg Calcium Carbonate 500 mg Zinc 7.5 mg Magnesium 50 mg Vitamin K27 45 mcg Methylcobalamin 1500 mcg L-Methylfolate 800 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "19",
        "sourceRecordId": "source-0700"
      },
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 1250 mg; Calcitriol — 0.25 mcg; Zinc — 12 mg; Magnesium — 50 mg; Vitamin K27 — 45 mcg; Methylcobalamin — 1500 mcg; L-Methyl Folate — 800 mcg",
        "sourceComposition": "Calcium Carbonate 1250 mg, Calcitriol 0.25 mcg, Zinc 12 mg, Magnesium 50 mg, Vitamin K27 45 mcg, Methylcobalamin 1500 mcg, L-Methyl Folate 800 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "7",
        "sourceRecordId": "source-0739"
      }
    ],
    "sources": [
      {
        "recordId": "source-0700",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "19"
      },
      {
        "recordId": "source-0739",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "7"
      }
    ]
  },
  {
    "id": "p-9f92cb7104d3",
    "name": "Calcitriol, Calcium Citrate, Zinc Sulphate Monohydrate & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcitriol 0.25 mcg Calcium Citrate 1000 mg Zinc Sulphate Monohydrate 7.5 mg Methylcobalamin 1500 mcg L-Methylfolate 800 mcg Boron(As Sodium Borate) 5 mg Magnesium Oxide 50 mg",
    "ingredients": [
      "Calcitriol",
      "Calcium Citrate",
      "Zinc Sulphate Monohydrate",
      "Methylcobalamin",
      "L-Methylfolate",
      "Boron",
      "Magnesium Oxide"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcitriol 0.25 mcg Calcium Citrate 1000 mg Zinc Sulphate Monohydrate 7.5 mg Methylcobalamin 1500 mcg L-Methylfolate 800 mcg Boron(As Sodium Borate) 5 mg Magnesium Oxide 50 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcitriol — 0.25 mcg; Calcium Citrate — 1000 mg; Zinc Sulphate Monohydrate — 7.5 mg; Methylcobalamin — 1500 mcg; L-Methylfolate — 800 mcg; Boron — 5 mg; Magnesium Oxide — 50 mg",
        "sourceComposition": "Calcitriol 0.25 mcg Calcium Citrate 1000 mg Zinc Sulphate Monohydrate 7.5 mg Methylcobalamin 1500 mcg L-Methylfolate 800 mcg Boron(As Sodium Borate) 5 mg Magnesium Oxide 50 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "17",
        "sourceRecordId": "source-0698"
      }
    ],
    "sources": [
      {
        "recordId": "source-0698",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "17"
      }
    ]
  },
  {
    "id": "p-cec52896a223",
    "name": "Calcitriol, Vitamin K2-7, Calcium Carbonate & Multinutrient Blend Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcitriol 0.25 mcg, Vitamin K2-7 22.5 mcg, Calcium Carbonate eq. to Elemental Calcium 250 mg 625 mg, Boron as Calcium Fructo Borate 500 mcg, Zinc as Zinc Oxide 7.5 mg",
    "ingredients": [
      "Calcitriol",
      "Vitamin K2-7",
      "Calcium Carbonate",
      "Boron as Calcium Fructo Borate",
      "Zinc as Zinc Oxide"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcitriol 0.25 mcg, Vitamin K2-7 22.5 mcg, Calcium Carbonate eq. to Elemental Calcium 250 mg 625 mg, Boron as Calcium Fructo Borate 500 mcg, Zinc as Zinc Oxide 7.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcitriol — 0.25 mcg; Vitamin K2-7 — 22.5 mcg; Calcium Carbonate — 250 mg; Boron as Calcium Fructo Borate — 500 mcg; Zinc as Zinc Oxide — 7.5 mg",
        "sourceComposition": "Calcitriol 0.25 mcg, Vitamin K2-7 22.5 mcg, Calcium Carbonate eq. to Elemental Calcium 250 mg 625 mg, Boron as Calcium Fructo Borate 500 mcg, Zinc as Zinc Oxide 7.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "15",
        "sourceRecordId": "source-0817"
      }
    ],
    "sources": [
      {
        "recordId": "source-0817",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "15"
      }
    ]
  },
  {
    "id": "p-cb7b27c91b49",
    "name": "Calcium Carbonate & Calcitriol & Vitamin K2 7 Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "625 mg + 0.25 mcg + 45 mcg"
    ],
    "composition": "Calcium Carbonate 625 mg eq. to Elemental Calcium 250 mg Calcitriol 0.25 mcg Vitamin K2 7 45 mcg",
    "ingredients": [
      "Calcium Carbonate",
      "Calcitriol",
      "Vitamin K2 7"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcium Carbonate 625 mg eq. to Elemental Calcium 250 mg Calcitriol 0.25 mcg Vitamin K2 7 45 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 625 mg; Calcitriol — 0.25 mcg; Vitamin K2 7 — 45 mcg",
        "sourceComposition": "Calcium Carbonate 625 mg eq. to Elemental Calcium 250 mg Calcitriol 0.25 mcg Vitamin K2 7 45 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "14",
        "sourceRecordId": "source-0695"
      }
    ],
    "sources": [
      {
        "recordId": "source-0695",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "14"
      }
    ]
  },
  {
    "id": "p-9d24f07c7d1b",
    "name": "Calcium Carbonate & Calcitriol Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1250 mg / 500 mg + 0.25 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Calcium Carbonate (Fromanorganicoyster Shell) Equivalentto Elemental Calcium) IP 1250 mg 500 mg Calcitriol IP 0.25 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Carbonate",
      "Calcitriol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium&Calcitriol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 1250 mg / 500 mg; Calcitriol — 0.25 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Carbonate (Fromanorganicoyster Shell) Equivalentto Elemental Calcium) IP 1250 mg 500 mg Calcitriol IP 0.25 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "sourceNumber": "146",
        "sourceRecordId": "source-0242"
      }
    ],
    "sources": [
      {
        "recordId": "source-0242",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "number": "146"
      }
    ]
  },
  {
    "id": "p-6189ab8949c2",
    "name": "Calcium Carbonate & Simethicone Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "600 mg + 80 mg"
    ],
    "composition": "Each Uncoated Chewable Tablet Contains: Calcium Carbonate IP 600 mg Simethicone IP 80 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Carbonate",
      "Simethicone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium Carbonate &Simethicone Chewable Tablets"
    ],
    "variants": [
      {
        "label": "Chewable",
        "composition": "Calcium Carbonate — 600 mg; Simethicone — 80 mg",
        "sourceComposition": "Each Uncoated Chewable Tablet Contains: Calcium Carbonate IP 600 mg Simethicone IP 80 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "sourceNumber": "266",
        "sourceRecordId": "source-0362"
      }
    ],
    "sources": [
      {
        "recordId": "source-0362",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "number": "266"
      }
    ]
  },
  {
    "id": "p-2293fc10578e",
    "name": "Calcium Carbonate & Vitamin D3 Stabilized & Folic Acid & L-Glycine Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "400 mg + 400 iu + 100 mcg + 10 mg"
    ],
    "composition": "Calcium Carbonate 400 mg Vitamin D3 Stabilized 400 iu Folic Acid 100 mcg L-Glycine 10 mg",
    "ingredients": [
      "Calcium Carbonate",
      "Vitamin D3 Stabilized",
      "Folic Acid",
      "L-Glycine"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Calcium Carbonate 400 mg Vitamin D3 Stabilized 400 iu Folic Acid 100 mcg L-Glycine 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 400 mg; Vitamin D3 Stabilized — 400 iu; Folic Acid — 100 mcg; L-Glycine — 10 mg",
        "sourceComposition": "Calcium Carbonate 400 mg Vitamin D3 Stabilized 400 iu Folic Acid 100 mcg L-Glycine 10 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "sourceNumber": "76",
        "sourceRecordId": "source-0076"
      }
    ],
    "sources": [
      {
        "recordId": "source-0076",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "number": "76"
      }
    ]
  },
  {
    "id": "p-cf72f6bda229",
    "name": "Calcium Carbonate & Vitamin D3 Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "625 mg / 250 mg + 200 iu",
      "1250 mg / 500 mg + 250 iu"
    ],
    "composition": "Each Film Coated Tablet Contains: Calcium Carbonate (Fromanorganicoyster Shell) Equivalentto Elemental Calcium) IP 625 mg 250 mg Vitamin D3 IP 200 iu Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Carbonate",
      "Vitamin D3"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium&Vitamin D3Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 625 mg / 250 mg; Vitamin D3 — 200 iu",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Carbonate (Fromanorganicoyster Shell) Equivalentto Elemental Calcium) IP 625 mg 250 mg Vitamin D3 IP 200 iu Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "sourceNumber": "144",
        "sourceRecordId": "source-0240"
      },
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 1250 mg / 500 mg; Vitamin D3 — 250 iu",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Carbonate (Fromanorganicoyster Shell) Equivalentto Elemental Calcium) IP 1250 mg 500 mg Vitamin D3 IP 250 iu Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "sourceNumber": "145",
        "sourceRecordId": "source-0241"
      }
    ],
    "sources": [
      {
        "recordId": "source-0240",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "number": "144"
      },
      {
        "recordId": "source-0241",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "number": "145"
      }
    ]
  },
  {
    "id": "p-3af74681708a",
    "name": "Calcium Carbonate, Calcitriol, Eicosapentaenoic Acid & Multinutrient Blend Softgel Capsules (7-ingredient blend)",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcium Carbonate 500 mg, Calcitriol 0.025 mcg, Eicosapentaenoic Acid 180 mg, Docosahexaenoic Acid 120 mg, Methylcobalamin 1500 mcg, Folic Acid 400 mcg, Boron 1.5 mg",
    "ingredients": [
      "Calcium Carbonate",
      "Calcitriol",
      "Eicosapentaenoic Acid",
      "Docosahexaenoic Acid",
      "Methylcobalamin",
      "Folic Acid",
      "Boron"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcium Carbonate 500 mg, Calcitriol 0.025 mcg, Eicosapentaenoic Acid 180 mg, Docosahexaenoic Acid 120 mg, Methylcobalamin 1500 mcg, Folic Acid 400 mcg, Boron 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 500 mg; Calcitriol — 0.025 mcg; Eicosapentaenoic Acid — 180 mg; Docosahexaenoic Acid — 120 mg; Methylcobalamin — 1500 mcg; Folic Acid — 400 mcg; Boron — 1.5 mg",
        "sourceComposition": "Calcium Carbonate 500 mg, Calcitriol 0.025 mcg, Eicosapentaenoic Acid 180 mg, Docosahexaenoic Acid 120 mg, Methylcobalamin 1500 mcg, Folic Acid 400 mcg, Boron 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "4",
        "sourceRecordId": "source-0736"
      }
    ],
    "sources": [
      {
        "recordId": "source-0736",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "4"
      }
    ]
  },
  {
    "id": "p-56b865a22dcb",
    "name": "Calcium Carbonate, Calcitriol, Eicosapentaenoic Acid & Multinutrient Blend Softgel Capsules with Vitamin K27, Magnesium, Zinc",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcium Carbonate 1250 mg, Calcitriol 0.025 mcg, Eicosapentaenoic Acid 90 mg, Docosahexaenoic Acid 60 mg, Folic Acid 200 mcg, Vitamin K27 50 mcg, Methylcobalamin 1500 mcg, Magnesium 100 mg, Boron 1.5 mg, Zinc 12 mg",
    "ingredients": [
      "Calcium Carbonate",
      "Calcitriol",
      "Eicosapentaenoic Acid",
      "Docosahexaenoic Acid",
      "Folic Acid",
      "Vitamin K27",
      "Methylcobalamin",
      "Magnesium",
      "Boron",
      "Zinc"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcium Carbonate 1250 mg, Calcitriol 0.025 mcg, Eicosapentaenoic Acid 90 mg, Docosahexaenoic Acid 60 mg, Folic Acid 200 mcg, Vitamin K27 50 mcg, Methylcobalamin 1500 mcg, Magnesium 100 mg, Boron 1.5 mg, Zinc 12 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 1250 mg; Calcitriol — 0.025 mcg; Eicosapentaenoic Acid — 90 mg; Docosahexaenoic Acid — 60 mg; Folic Acid — 200 mcg; Vitamin K27 — 50 mcg; Methylcobalamin — 1500 mcg; Magnesium — 100 mg; Boron — 1.5 mg; Zinc — 12 mg",
        "sourceComposition": "Calcium Carbonate 1250 mg, Calcitriol 0.025 mcg, Eicosapentaenoic Acid 90 mg, Docosahexaenoic Acid 60 mg, Folic Acid 200 mcg, Vitamin K27 50 mcg, Methylcobalamin 1500 mcg, Magnesium 100 mg, Boron 1.5 mg, Zinc 12 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "8",
        "sourceRecordId": "source-0740"
      }
    ],
    "sources": [
      {
        "recordId": "source-0740",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "8"
      }
    ]
  },
  {
    "id": "p-866afc5e1317",
    "name": "Calcium Carbonate, Calcitriol, Methylcobalamin & Multinutrient Blend Softgel Capsules with Zinc Oxide",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcium Carbonate 625 mg eq.to Elemental Calcium 250 mg Calcitriol 0.25 mcg Methylcobalamin 500 mcg Folic Acid 1.5 mg Pyridoxine Hydrochloride 3 mg Zinc Oxide 7.5 mg",
    "ingredients": [
      "Calcium Carbonate",
      "Calcitriol",
      "Methylcobalamin",
      "Folic Acid",
      "Pyridoxine Hydrochloride",
      "Zinc Oxide"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcium Carbonate 625 mg eq.to Elemental Calcium 250 mg Calcitriol 0.25 mcg Methylcobalamin 500 mcg Folic Acid 1.5 mg Pyridoxine Hydrochloride 3 mg Zinc Oxide 7.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 625 mg; Calcitriol — 0.25 mcg; Methylcobalamin — 500 mcg; Folic Acid — 1.5 mg; Pyridoxine Hydrochloride — 3 mg; Zinc Oxide — 7.5 mg",
        "sourceComposition": "Calcium Carbonate 625 mg eq.to Elemental Calcium 250 mg Calcitriol 0.25 mcg Methylcobalamin 500 mcg Folic Acid 1.5 mg Pyridoxine Hydrochloride 3 mg Zinc Oxide 7.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "18",
        "sourceRecordId": "source-0699"
      }
    ],
    "sources": [
      {
        "recordId": "source-0699",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "18"
      }
    ]
  },
  {
    "id": "p-1f6cd2298bb4",
    "name": "Calcium Carbonate, Calcitriol, Methylcobalamin & Multinutrient Blend Softgel Capsules (5-ingredient blend)",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcium Carbonate 500 mg eq. to Elemental Calcium 200 mg, Calcitriol 0.25 mcg, Methylcobalamin 1500 mcg, Folic Acid 1.5 mg, Pyridoxine Hydrochloride 3 mg",
    "ingredients": [
      "Calcium Carbonate",
      "Calcitriol",
      "Methylcobalamin",
      "Folic Acid",
      "Pyridoxine Hydrochloride"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcium Carbonate 500 mg eq. to Elemental Calcium 200 mg, Calcitriol 0.25 mcg, Methylcobalamin 1500 mcg, Folic Acid 1.5 mg, Pyridoxine Hydrochloride 3 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 500 mg; Calcitriol — 0.25 mcg; Methylcobalamin — 1500 mcg; Folic Acid — 1.5 mg; Pyridoxine Hydrochloride — 3 mg",
        "sourceComposition": "Calcium Carbonate 500 mg eq. to Elemental Calcium 200 mg, Calcitriol 0.25 mcg, Methylcobalamin 1500 mcg, Folic Acid 1.5 mg, Pyridoxine Hydrochloride 3 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "20",
        "sourceRecordId": "source-0701"
      }
    ],
    "sources": [
      {
        "recordId": "source-0701",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "20"
      }
    ]
  },
  {
    "id": "p-52036a316e25",
    "name": "Calcium Carbonate, L-Methylfolate Calcium, Pyridoxal 5-Phosphate & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcium Carbonate 1250 mg L-Methylfolate Calcium 1 mg Pyridoxal 5-Phosphate 0.6 mg Cyanocobalamin 2.5 mcg Vitamin D3 Stabilized 600 iu",
    "ingredients": [
      "Calcium Carbonate",
      "L-Methylfolate Calcium",
      "Pyridoxal 5-Phosphate",
      "Cyanocobalamin",
      "Vitamin D3 Stabilized"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Calcium Carbonate 1250 mg L-Methylfolate Calcium 1 mg Pyridoxal 5-Phosphate 0.6 mg Cyanocobalamin 2.5 mcg Vitamin D3 Stabilized 600 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 1250 mg; L-Methylfolate Calcium — 1 mg; Pyridoxal 5-Phosphate — 0.6 mg; Cyanocobalamin — 2.5 mcg; Vitamin D3 Stabilized — 600 iu",
        "sourceComposition": "Calcium Carbonate 1250 mg L-Methylfolate Calcium 1 mg Pyridoxal 5-Phosphate 0.6 mg Cyanocobalamin 2.5 mcg Vitamin D3 Stabilized 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "sourceNumber": "73",
        "sourceRecordId": "source-0073"
      }
    ],
    "sources": [
      {
        "recordId": "source-0073",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "number": "73"
      }
    ]
  },
  {
    "id": "p-d37db40e3e39",
    "name": "Calcium Carbonate, Vitamin D3, Methylcobalamin & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Calcium Carbonate (fromanorganicsourceof Oystershell) Equivalenttoelemental Calcium I.P. 1250 mg 500 mg Vitamin D3 I.P. 2000I.U. Methylcobalamin I.P. 1500 mcg L-Methylfolate Calcium 1 mg Pyridoxal-5-Phosphate 0.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Carbonate",
      "Vitamin D3",
      "Methylcobalamin",
      "L-Methylfolate Calcium",
      "Pyridoxal-5-Phosphate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium , Vitamin D3, Methylcobalamin,L-Methylfolate Calcium&Pyridoxal- 5-Phosphate Tablets",
      "Calcium, Vitamin D3, Methylcobalamin,Pyridoxal-5 Phosphate&L-Methylfolate Calcium Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 1250 mg / 500 mg; Vitamin D3 — 2000I.U; Methylcobalamin — 1500 mcg; L-Methylfolate Calcium — 1 mg; Pyridoxal-5-Phosphate — 0.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Carbonate (fromanorganicsourceof Oystershell) Equivalenttoelemental Calcium I.P. 1250 mg 500 mg Vitamin D3 I.P. 2000I.U. Methylcobalamin I.P. 1500 mcg L-Methylfolate Calcium 1 mg Pyridoxal-5-Phosphate 0.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "sourceNumber": "51",
        "sourceRecordId": "source-0147"
      },
      {
        "label": "Standard formulation",
        "composition": "Calcium Carbonate — 1250 mg / 500 mg; Vitamin D3 — 2000 iu; Methylcobalamin — 1500 mcg; Pyridoxal-5Phosphate — 20 mg; L-Methylfolate Calcium — 1 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Carbonate (Fromanorganicoyster Shell) Equivalentto Elemental Calcium IP 1250 mg 500 mg Vitamin D3 IP 2000 iu Methylcobalamin IP 1500 mcg Pyridoxal-5Phosphate 20 mg L-Methylfolate Calcium IP 1 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "sourceNumber": "383",
        "sourceRecordId": "source-0479"
      }
    ],
    "sources": [
      {
        "recordId": "source-0147",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "number": "51"
      },
      {
        "recordId": "source-0479",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "number": "383"
      }
    ]
  },
  {
    "id": "p-e02ccb953990",
    "name": "Calcium Citrate & Magnesium Hydroxide & Zinc Sulphate Monohydrate Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "750 mg + 50 mg + 17 mg"
    ],
    "composition": "Calcium Citrate 750 mg Magnesium Hydroxide 50 mg Zinc Sulphate Monohydrate 17 mg",
    "ingredients": [
      "Calcium Citrate",
      "Magnesium Hydroxide",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Calcium Citrate 750 mg Magnesium Hydroxide 50 mg Zinc Sulphate Monohydrate 17 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate — 750 mg; Magnesium Hydroxide — 50 mg; Zinc Sulphate Monohydrate — 17 mg",
        "sourceComposition": "Calcium Citrate 750 mg Magnesium Hydroxide 50 mg Zinc Sulphate Monohydrate 17 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 10,
        "sourceNumber": "54",
        "sourceRecordId": "source-0054"
      }
    ],
    "sources": [
      {
        "recordId": "source-0054",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 10,
        "number": "54"
      }
    ]
  },
  {
    "id": "p-dfc4595df52a",
    "name": "Calcium Citrate & Magnesium Oxide & Vitamin K2 Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "1000 mg + 300 mg + 55 mcg"
    ],
    "composition": "Calcium Citrate 1000 mg Magnesium Oxide 300 mg Vitamin K2 55 mcg",
    "ingredients": [
      "Calcium Citrate",
      "Magnesium Oxide",
      "Vitamin K2"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Calcium Citrate 1000 mg Magnesium Oxide 300 mg Vitamin K2 55 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate — 1000 mg; Magnesium Oxide — 300 mg; Vitamin K2 — 55 mcg",
        "sourceComposition": "Calcium Citrate 1000 mg Magnesium Oxide 300 mg Vitamin K2 55 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "sourceNumber": "21",
        "sourceRecordId": "source-0021"
      }
    ],
    "sources": [
      {
        "recordId": "source-0021",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "number": "21"
      }
    ]
  },
  {
    "id": "p-8a411a5c712b",
    "name": "Calcium Citrate & Vitamin D3 & Magnesium Hydroxide & Zinc Sulphate Monohydrate Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "1000 mg / 210 mg + 200I.U + 100 mg + 4 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Calcium Citrate Equivalentto Elemental Calcium U.S.P. 1000 mg 210 mg Vitamin D3 I.P. 200I.U. Magnesium Hydroxide Equivalentto Elemental Magnesium I.P. 100 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc I.P. 4 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Citrate",
      "Vitamin D3",
      "Magnesium Hydroxide",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium Citrate,Vitamin D3,Magnesium Hydroxide and Zinc Sulphate Monohydrate Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate — 1000 mg / 210 mg; Vitamin D3 — 200I.U; Magnesium Hydroxide — 100 mg; Zinc Sulphate Monohydrate — 4 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Citrate Equivalentto Elemental Calcium U.S.P. 1000 mg 210 mg Vitamin D3 I.P. 200I.U. Magnesium Hydroxide Equivalentto Elemental Magnesium I.P. 100 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc I.P. 4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "sourceNumber": "78",
        "sourceRecordId": "source-0174"
      }
    ],
    "sources": [
      {
        "recordId": "source-0174",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "number": "78"
      }
    ]
  },
  {
    "id": "p-72dff879997c",
    "name": "Calcium Citrate Malate & Cholecalciferol & Folic Acid Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1250 mg / 250 mg + 100 iu + 50 mcg",
      "250 mg + 100 iu + 50 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Calcium Citrate Malate Equivalentto Elemental Calcium IP 1250 mg 250 mg Cholecalciferol (asstabilided Vitamin D3) IP 100 iu Folic Acid IP 50 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Citrate Malate",
      "Cholecalciferol",
      "Folic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium Citrate Malate ,Vitamin D3&Folic Acid Tablets",
      "Calcium,Vitamin D3 & Folic Acid Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 1250 mg / 250 mg; Cholecalciferol — 100 iu; Folic Acid — 50 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Citrate Malate Equivalentto Elemental Calcium IP 1250 mg 250 mg Cholecalciferol (asstabilided Vitamin D3) IP 100 iu Folic Acid IP 50 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 72,
        "sourceNumber": "451",
        "sourceRecordId": "source-0547"
      },
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 250 mg; Vitamin D3 — 100 iu; Folic Acid — 50 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains : Calcium Citrate Malate Equivalent to Elemental Calcium IP 250 mg Vitamin D3 IP 100 iu Folic Acid IP 50 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "sourceNumber": "497",
        "sourceRecordId": "source-0593"
      }
    ],
    "sources": [
      {
        "recordId": "source-0547",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 72,
        "number": "451"
      },
      {
        "recordId": "source-0593",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "number": "497"
      }
    ]
  },
  {
    "id": "p-e139c626d9a1",
    "name": "Calcium Citrate Malate & Vitamin D3 & Magnesium Sulphate & Zinc Sulphate Monohydrate Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1250 mg / 250 mg + 1000 iu + 100 mg + 7.5 mg"
    ],
    "composition": "Each Film Coated Tablets Contains: Calcium Citrate Malate Equivalentto Elemental Calcium IP 1250 mg 250 mg Vitamin D3 (Prestabilized Form) IP 1000 iu Magnesium Sulphate IP 100 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 7.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Citrate Malate",
      "Vitamin D3",
      "Magnesium Sulphate",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium Citrate Malate,Vitamin D3,Magnesium Sulphate & Zinc Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 1250 mg / 250 mg; Vitamin D3 — 1000 iu; Magnesium Sulphate — 100 mg; Zinc Sulphate Monohydrate — 7.5 mg",
        "sourceComposition": "Each Film Coated Tablets Contains: Calcium Citrate Malate Equivalentto Elemental Calcium IP 1250 mg 250 mg Vitamin D3 (Prestabilized Form) IP 1000 iu Magnesium Sulphate IP 100 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 7.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 54,
        "sourceNumber": "337",
        "sourceRecordId": "source-0433"
      }
    ],
    "sources": [
      {
        "recordId": "source-0433",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 54,
        "number": "337"
      }
    ]
  },
  {
    "id": "p-24311991c9b9",
    "name": "Calcium Citrate Malate & Vitamin D3 Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "1250 mg + 600 iu"
    ],
    "composition": "Calcium Citrate Malate 1250 mg Vitamin D3 600 iu",
    "ingredients": [
      "Calcium Citrate Malate",
      "Vitamin D3"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Calcium Citrate Malate 1250 mg Vitamin D3 600 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 1250 mg; Vitamin D3 — 600 iu",
        "sourceComposition": "Calcium Citrate Malate 1250 mg Vitamin D3 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "sourceNumber": "7",
        "sourceRecordId": "source-0007"
      }
    ],
    "sources": [
      {
        "recordId": "source-0007",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "number": "7"
      }
    ]
  },
  {
    "id": "p-3fce83e54f5e",
    "name": "Calcium Citrate Malate & Vitamin D3 Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1250 mg / 250 mg + 200 iu",
      "1000 mg / 250 mg + 1000 iu",
      "250 mg + 200 iu",
      "1000 mg / 250 mg + 200 iu"
    ],
    "composition": "Each Film Coated Tablet Contains: Calcium Citrate Maleate Equivalentto Elemental Calcium IP 1250 mg 250 mg Vitamin D3 IP 200 iu Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Citrate Malate",
      "Vitamin D3"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium&Vitamin D3 Tablets",
      "Calcium Citrate Malate&Vitamin D3 Tablets",
      "Calcium Citrate Malate&Vitamin D3 Tablets (For Export Only)"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 1250 mg / 250 mg; Vitamin D3 — 200 iu",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Citrate Maleate Equivalentto Elemental Calcium IP 1250 mg 250 mg Vitamin D3 IP 200 iu Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "sourceNumber": "201",
        "sourceRecordId": "source-0297"
      },
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 1000 mg / 250 mg; Vitamin D3 — 1000 iu",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Citrate Malate Equivalentto Elemental Calcium IP 1000 mg 250 mg Vitamin D3 IP 1000 iu Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "sourceNumber": "339",
        "sourceRecordId": "source-0435"
      },
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 250 mg; Vitamin D3 — 200 iu",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Citrate Malate Equivalenttoelemental Calcium IP 1000 mg250 mg Vitamin D3 IP 200 iu Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "sourceNumber": "388",
        "sourceRecordId": "source-0484"
      },
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 1000 mg / 250 mg; Vitamin D3 — 200 iu",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Citrate Malate Equivalenttoelemental Calcium IP 1000 mg 250 mg Vitamin D3 IP 200 iu Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 63,
        "sourceNumber": "393",
        "sourceRecordId": "source-0489"
      }
    ],
    "sources": [
      {
        "recordId": "source-0297",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "number": "201"
      },
      {
        "recordId": "source-0435",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "number": "339"
      },
      {
        "recordId": "source-0484",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "number": "388"
      },
      {
        "recordId": "source-0489",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 63,
        "number": "393"
      }
    ]
  },
  {
    "id": "p-7dd957fe77a9",
    "name": "Calcium Citrate Malate, Calcitriol, Omega-3 Fatty Acid [Eicosapentaenoic Acid & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcium Citate Maleate 1000 mg, Calcitriol 0.025 mcg, Omega-3 Fatty Acid [Eicosapentaenoic Acid 90 mg, Docosahexaenoic Acid 60 mg, Folic Acid 160 mcg, Vitamin K27 45 mcg, Vitamin B12 [as Cyanocobalamin] 0.8 mcg, Boron [as Boron Proteonate] 150 mcg",
    "ingredients": [
      "Calcium Citrate Malate",
      "Calcitriol",
      "Omega-3 Fatty Acid [Eicosapentaenoic Acid",
      "Docosahexaenoic Acid",
      "Folic Acid",
      "Vitamin K27",
      "Vitamin B12 [as Cyanocobalamin]",
      "Boron [as Boron Proteonate]"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcium Citate Maleate 1000 mg, Calcitriol 0.025 mcg, Omega-3 Fatty Acid [Eicosapentaenoic Acid 90 mg, Docosahexaenoic Acid 60 mg, Folic Acid 160 mcg, Vitamin K27 45 mcg, Vitamin B12 [as Cyanocobalamin] 0.8 mcg, Boron [as Boron Proteonate] 150 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 1000 mg; Calcitriol — 0.025 mcg; Omega-3 Fatty Acid [Eicosapentaenoic Acid — 90 mg; Docosahexaenoic Acid — 60 mg; Folic Acid — 160 mcg; Vitamin K27 — 45 mcg; Vitamin B12 [as Cyanocobalamin] — 0.8 mcg; Boron [as Boron Proteonate] — 150 mcg",
        "sourceComposition": "Calcium Citate Maleate 1000 mg, Calcitriol 0.025 mcg, Omega-3 Fatty Acid [Eicosapentaenoic Acid 90 mg, Docosahexaenoic Acid 60 mg, Folic Acid 160 mcg, Vitamin K27 45 mcg, Vitamin B12 [as Cyanocobalamin] 0.8 mcg, Boron [as Boron Proteonate] 150 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "6",
        "sourceRecordId": "source-0738"
      }
    ],
    "sources": [
      {
        "recordId": "source-0738",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "6"
      }
    ]
  },
  {
    "id": "p-82fa4ead6be5",
    "name": "Calcium Citrate Malate, Vitamin D3 Stabilized, Magnesium Oxide Light & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcium Citrate Malate 1250 mg Vitamin D3 Stabilized 400 iu Magnesium Oxide Light 50 mg Zinc Sulphate Monohydrate 7.5 mg Vitamin K2 45 mcg",
    "ingredients": [
      "Calcium Citrate Malate",
      "Vitamin D3 Stabilized",
      "Magnesium Oxide Light",
      "Zinc Sulphate Monohydrate",
      "Vitamin K2"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Calcium Citrate Malate 1250 mg Vitamin D3 Stabilized 400 iu Magnesium Oxide Light 50 mg Zinc Sulphate Monohydrate 7.5 mg Vitamin K2 45 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 1250 mg; Vitamin D3 Stabilized — 400 iu; Magnesium Oxide Light — 50 mg; Zinc Sulphate Monohydrate — 7.5 mg; Vitamin K2 — 45 mcg",
        "sourceComposition": "Calcium Citrate Malate 1250 mg Vitamin D3 Stabilized 400 iu Magnesium Oxide Light 50 mg Zinc Sulphate Monohydrate 7.5 mg Vitamin K2 45 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "sourceNumber": "72",
        "sourceRecordId": "source-0072"
      }
    ],
    "sources": [
      {
        "recordId": "source-0072",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "number": "72"
      }
    ]
  },
  {
    "id": "p-5a97e3a3c339",
    "name": "Calcium Citrate Malate, Vitamin K2, Calcitriol & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcium Citrate Malate 750 mg Vitamin K2 50 mg Calcitriol 0.25 mcg Zinc Sulphate Monohydrate 7.5 mg Magnesium Hydroxide 50 mg Boron 1 mg Sodium Selenate 35 mcg Copper Sulphate 1 mg",
    "ingredients": [
      "Calcium Citrate Malate",
      "Vitamin K2",
      "Calcitriol",
      "Zinc Sulphate Monohydrate",
      "Magnesium Hydroxide",
      "Boron",
      "Sodium Selenate",
      "Copper Sulphate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Calcium Citrate Malate 750 mg Vitamin K2 50 mg Calcitriol 0.25 mcg Zinc Sulphate Monohydrate 7.5 mg Magnesium Hydroxide 50 mg Boron 1 mg Sodium Selenate 35 mcg Copper Sulphate 1 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 750 mg; Vitamin K2 — 50 mg; Calcitriol — 0.25 mcg; Zinc Sulphate Monohydrate — 7.5 mg; Magnesium Hydroxide — 50 mg; Boron — 1 mg; Sodium Selenate — 35 mcg; Copper Sulphate — 1 mg",
        "sourceComposition": "Calcium Citrate Malate 750 mg Vitamin K2 50 mg Calcitriol 0.25 mcg Zinc Sulphate Monohydrate 7.5 mg Magnesium Hydroxide 50 mg Boron 1 mg Sodium Selenate 35 mcg Copper Sulphate 1 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "sourceNumber": "58",
        "sourceRecordId": "source-0058"
      }
    ],
    "sources": [
      {
        "recordId": "source-0058",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "number": "58"
      }
    ]
  },
  {
    "id": "p-aba766e046b0",
    "name": "Calcium Citrate Malate, Vitamin K2-7, Calcitriol & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Calcium Citrate Maleate USP 750 mg Vitamin K2-7 50 mcg Calcitriol IP 0.25 mcg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 7.5 mg Magnesium Hydroxide Equivalentto Elemental Magnesium IP 50 mg Sodium Borate Equivalentto Elemental Boron IP 1 mg Sodium Selenite Equivalentto Elemental Selenium USP 35 mcg Copper Sulphate Equivalentto Elemental Copper USP 1 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Citrate Malate",
      "Vitamin K2-7",
      "Calcitriol",
      "Zinc Sulphate Monohydrate",
      "Magnesium Hydroxide",
      "Sodium Borate",
      "Sodium Selenite",
      "Copper Sulphate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium Citrate Maleate, Vitamin K2-7,Calcitriol, Zinc Sulphate,Magnesium, Sodium Borate, Sodium Selenite&Copper Sulphate Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 750 mg; Vitamin K2-7 — 50 mcg; Calcitriol — 0.25 mcg; Zinc Sulphate Monohydrate — 7.5 mg; Magnesium Hydroxide — 50 mg; Sodium Borate — 1 mg; Sodium Selenite — 35 mcg; Copper Sulphate — 1 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Citrate Maleate USP 750 mg Vitamin K2-7 50 mcg Calcitriol IP 0.25 mcg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 7.5 mg Magnesium Hydroxide Equivalentto Elemental Magnesium IP 50 mg Sodium Borate Equivalentto Elemental Boron IP 1 mg Sodium Selenite Equivalentto Elemental Selenium USP 35 mcg Copper Sulphate Equivalentto Elemental Copper USP 1 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "sourceNumber": "41",
        "sourceRecordId": "source-0137"
      }
    ],
    "sources": [
      {
        "recordId": "source-0137",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "number": "41"
      }
    ]
  },
  {
    "id": "p-4702bf163bb9",
    "name": "Calcium Citrate Malate, Vitamin K27, Calcitriol & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Calcium Citate Maleate 1000 mg, Vitamin K27 45 mcg, Calcitriol 0.025 mcg, Zinc Sulphate 12, Magnisium Oxide 50 mg, Folic Acid 160 mcg",
    "ingredients": [
      "Calcium Citrate Malate",
      "Vitamin K27",
      "Calcitriol",
      "Zinc Sulphate 12, Magnisium Oxide",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Calcium Citate Maleate 1000 mg, Vitamin K27 45 mcg, Calcitriol 0.025 mcg, Zinc Sulphate 12, Magnisium Oxide 50 mg, Folic Acid 160 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Citrate Malate — 1000 mg; Vitamin K27 — 45 mcg; Calcitriol — 0.025 mcg; Zinc Sulphate 12, Magnisium Oxide — 50 mg; Folic Acid — 160 mcg",
        "sourceComposition": "Calcium Citate Maleate 1000 mg, Vitamin K27 45 mcg, Calcitriol 0.025 mcg, Zinc Sulphate 12, Magnisium Oxide 50 mg, Folic Acid 160 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "5",
        "sourceRecordId": "source-0737"
      }
    ],
    "sources": [
      {
        "recordId": "source-0737",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "5"
      }
    ]
  },
  {
    "id": "p-5aed1f79aeeb",
    "name": "Calcium Dobesilate Monohydrate Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Calcium Dobesilate Monohydrate IP 500 mg Excipients q.s. Approved Colour Usedin Empty Capsule Shells",
    "ingredients": [
      "Calcium Dobesilate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium Dobesilate Capsules 500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Dobesilate Monohydrate — 500 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Calcium Dobesilate Monohydrate IP 500 mg Excipients q.s. Approved Colour Usedin Empty Capsule Shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "sourceNumber": "349",
        "sourceRecordId": "source-0445"
      }
    ],
    "sources": [
      {
        "recordId": "source-0445",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "349"
      }
    ]
  },
  {
    "id": "p-9fcc73120e7c",
    "name": "Calcium Orotate & Vitamin D3 Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "740 mg + 400I.U"
    ],
    "composition": "Each Film Coated Tablet Contains: Calcium Orotate 740 mg Vitamin D3 I.P. 400I.U. Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Calcium Orotate",
      "Vitamin D3"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Calcium Orotatewith Vitamin D3Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Calcium Orotate — 740 mg; Vitamin D3 — 400I.U",
        "sourceComposition": "Each Film Coated Tablet Contains: Calcium Orotate 740 mg Vitamin D3 I.P. 400I.U. Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "sourceNumber": "116",
        "sourceRecordId": "source-0212"
      }
    ],
    "sources": [
      {
        "recordId": "source-0212",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "number": "116"
      }
    ]
  },
  {
    "id": "p-777270d30249",
    "name": "Carbonyl Iron, Folic Acid, Calcium D-Pantothenate & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Carbonyl Iron 29 mg Folic Acid 300 mcg Calcium D-Pantothenate 5 mg D-Biotin 30 mcg Cyanocobalamin 2.5 mcg Vitamin B12 mg Vitamin B2 3 mg Vitamin B3 23 mg Vitamin B6 3.1 mg",
    "ingredients": [
      "Carbonyl Iron",
      "Folic Acid",
      "Calcium D-Pantothenate",
      "D-Biotin",
      "Cyanocobalamin",
      "Vitamin B",
      "Vitamin B2",
      "Vitamin B3",
      "Vitamin B6"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Carbonyl Iron 29 mg Folic Acid 300 mcg Calcium D-Pantothenate 5 mg D-Biotin 30 mcg Cyanocobalamin 2.5 mcg Vitamin B12 mg Vitamin B2 3 mg Vitamin B3 23 mg Vitamin B6 3.1 mg",
      "Carbonyl Iron 29 mg Folic Acid 570 mcg Cyanocobalamin 2.5 mcg Vitamin B12 mg Calcium D-Pantothenate 5 mg Vitamin B2 3 mg D-Biotin 30 mcg Vitamin B6 3.1 mg Vitamin B3 23 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Carbonyl Iron — 29 mg; Folic Acid — 300 mcg; Calcium D-Pantothenate — 5 mg; D-Biotin — 30 mcg; Cyanocobalamin — 2.5 mcg; Vitamin B — 12 mg; Vitamin B2 — 3 mg; Vitamin B3 — 23 mg; Vitamin B6 — 3.1 mg",
        "sourceComposition": "Carbonyl Iron 29 mg Folic Acid 300 mcg Calcium D-Pantothenate 5 mg D-Biotin 30 mcg Cyanocobalamin 2.5 mcg Vitamin B12 mg Vitamin B2 3 mg Vitamin B3 23 mg Vitamin B6 3.1 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "sourceNumber": "27",
        "sourceRecordId": "source-0027"
      },
      {
        "label": "Standard formulation",
        "composition": "Carbonyl Iron — 29 mg; Folic Acid — 570 mcg; Cyanocobalamin — 2.5 mcg; Vitamin B — 12 mg; Calcium D-Pantothenate — 5 mg; Vitamin B2 — 3 mg; D-Biotin — 30 mcg; Vitamin B6 — 3.1 mg; Vitamin B3 — 23 mg",
        "sourceComposition": "Carbonyl Iron 29 mg Folic Acid 570 mcg Cyanocobalamin 2.5 mcg Vitamin B12 mg Calcium D-Pantothenate 5 mg Vitamin B2 3 mg D-Biotin 30 mcg Vitamin B6 3.1 mg Vitamin B3 23 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 14,
        "sourceNumber": "79",
        "sourceRecordId": "source-0079"
      }
    ],
    "sources": [
      {
        "recordId": "source-0027",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "number": "27"
      },
      {
        "recordId": "source-0056",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "number": "56"
      },
      {
        "recordId": "source-0079",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 14,
        "number": "79"
      }
    ]
  },
  {
    "id": "p-906185be4f4c",
    "name": "Carica Papaya Extract & Tinospora Cordifolia Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "350 mg + 150 mg"
    ],
    "composition": "Carica Papaya Extract 350 mg, Tinospora Cordifolia 150 mg",
    "ingredients": [
      "Carica Papaya Extract",
      "Tinospora Cordifolia"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Carica Papaya Extract 350 mg, Tinospora Cordifolia 150 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Carica Papaya Extract — 350 mg; Tinospora Cordifolia — 150 mg",
        "sourceComposition": "Carica Papaya Extract 350 mg, Tinospora Cordifolia 150 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "25",
        "sourceRecordId": "source-0757"
      }
    ],
    "sources": [
      {
        "recordId": "source-0757",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "25"
      }
    ]
  },
  {
    "id": "p-b7305eaff58f",
    "name": "Celecoxib Capsules",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "BP",
    "availableStrengths": [
      "100 mg",
      "200 mg"
    ],
    "composition": "Each Hard Gelatin Capsules Contains: Celecoxib BP 100 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell",
    "ingredients": [
      "Celecoxib"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Celecoxib Capsules BP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Celecoxib — 100 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains: Celecoxib BP 100 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "sourceNumber": "440",
        "sourceRecordId": "source-0536"
      },
      {
        "label": "Standard formulation",
        "composition": "Celecoxib — 200 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains: Celecoxib BP 200 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "sourceNumber": "441",
        "sourceRecordId": "source-0537"
      }
    ],
    "sources": [
      {
        "recordId": "source-0536",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "number": "440"
      },
      {
        "recordId": "source-0537",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "number": "441"
      }
    ]
  },
  {
    "id": "p-e7d3993c5a5e",
    "name": "Chlorpheniramine Maleate & Dextromethorphan Hydrobromide & Phenylephrine Hydrochloride Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "2 mg + 10 mg + 5 mg"
    ],
    "composition": "Chlorpheniramine Maleate 2 mg Dextromethorphan Hydrobromide 10 mg Phenylephrine Hydrochloride 5 mg",
    "ingredients": [
      "Chlorpheniramine Maleate",
      "Dextromethorphan Hydrobromide",
      "Phenylephrine Hydrochloride"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Chlorpheniramine Maleate 2 mg Dextromethorphan Hydrobromide 10 mg Phenylephrine Hydrochloride 5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Chlorpheniramine Maleate — 2 mg; Dextromethorphan Hydrobromide — 10 mg; Phenylephrine Hydrochloride — 5 mg",
        "sourceComposition": "Chlorpheniramine Maleate 2 mg Dextromethorphan Hydrobromide 10 mg Phenylephrine Hydrochloride 5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "8",
        "sourceRecordId": "source-0689"
      }
    ],
    "sources": [
      {
        "recordId": "source-0689",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "8"
      }
    ]
  },
  {
    "id": "p-33b30ef0dd98",
    "name": "Cholecalciferol Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "60,000 I.U"
    ],
    "composition": "Cholecalciferol ( Vitamin D3) 60,000 I.U.",
    "ingredients": [
      "Cholecalciferol"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Cholecalciferol ( Vitamin D3) 60,000 I.U."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Cholecalciferol — 60,000 I.U",
        "sourceComposition": "Cholecalciferol ( Vitamin D3) 60,000 I.U.",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "11",
        "sourceRecordId": "source-0692"
      }
    ],
    "sources": [
      {
        "recordId": "source-0692",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "11"
      }
    ]
  },
  {
    "id": "p-20fff9bd2658",
    "name": "Cholecalciferol Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "60000I.U"
    ],
    "composition": "Each Uncoated Tablet Contains: Cholecalciferol I.P. 60000I.U. Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Cholecalciferol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Cholecalciferol Tablets I.P."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Cholecalciferol — 60000I.U",
        "sourceComposition": "Each Uncoated Tablet Contains: Cholecalciferol I.P. 60000I.U. Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "sourceNumber": "119",
        "sourceRecordId": "source-0215"
      }
    ],
    "sources": [
      {
        "recordId": "source-0215",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "number": "119"
      }
    ]
  },
  {
    "id": "p-0c78d7561faf",
    "name": "Cilnidipine & Telmisartan Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 40 mg"
    ],
    "composition": "Each Uncoated Bilayered Tablet Contains: Cilnidipine IP 10 mg Telmisartan IP 40 mg Excipients q.s Approved Colour Used",
    "ingredients": [
      "Cilnidipine",
      "Telmisartan"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Cilnidipine&Telmisartan Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Cilnidipine — 10 mg; Telmisartan — 40 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Cilnidipine IP 10 mg Telmisartan IP 40 mg Excipients q.s Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 71,
        "sourceNumber": "444",
        "sourceRecordId": "source-0540"
      }
    ],
    "sources": [
      {
        "recordId": "source-0540",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 71,
        "number": "444"
      }
    ]
  },
  {
    "id": "p-e0c96bcd5855",
    "name": "Cilnidipine Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg",
      "20 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Cilnidipine I.P. 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Cilnidipine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Cilnidipine Tablets I.P.5 mg",
      "Cilnidipine Tablets I.P 10 mg",
      "Cilnidipine Tablets I.P 20 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Cilnidipine — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Cilnidipine I.P. 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "sourceNumber": "63",
        "sourceRecordId": "source-0159"
      },
      {
        "label": "Standard formulation",
        "composition": "Cilnidipine — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Cilnidipine I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "sourceNumber": "64",
        "sourceRecordId": "source-0160"
      },
      {
        "label": "Standard formulation",
        "composition": "Cilnidipine — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Cilnidipine I.P. 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "sourceNumber": "65",
        "sourceRecordId": "source-0161"
      }
    ],
    "sources": [
      {
        "recordId": "source-0159",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "number": "63"
      },
      {
        "recordId": "source-0160",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "number": "64"
      },
      {
        "recordId": "source-0161",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "number": "65"
      }
    ]
  },
  {
    "id": "p-a3451e8a6b22",
    "name": "Cissus Quadrangularis Capsules",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Cissus Quadrangularis 500 mg",
    "ingredients": [
      "Cissus Quadrangularis"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Cissus Quadrangularis 500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Cissus Quadrangularis — 500 mg",
        "sourceComposition": "Cissus Quadrangularis 500 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "32",
        "sourceRecordId": "source-0799"
      }
    ],
    "sources": [
      {
        "recordId": "source-0799",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "32"
      }
    ]
  },
  {
    "id": "p-4d1ffaccc1ba",
    "name": "Cissus Quandragularis Linn Ext & Vitex Nirgundo Ext & Boswellia Serrata Ext & Withania Somnifera Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "400 mg + 100 mg + 100 mg + 100 mg"
    ],
    "composition": "Cissus Quandragularis Linn Ext 400 mg, Vitex Nirgundo Ext 100 mg, Boswellia Serrata Ext 100 mg, Withania Somnifera 100 mg",
    "ingredients": [
      "Cissus Quandragularis Linn Ext",
      "Vitex Nirgundo Ext",
      "Boswellia Serrata Ext",
      "Withania Somnifera"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Cissus Quandragularis Linn Ext 400 mg, Vitex Nirgundo Ext 100 mg, Boswellia Serrata Ext 100 mg, Withania Somnifera 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Cissus Quandragularis Linn Ext — 400 mg; Vitex Nirgundo Ext — 100 mg; Boswellia Serrata Ext — 100 mg; Withania Somnifera — 100 mg",
        "sourceComposition": "Cissus Quandragularis Linn Ext 400 mg, Vitex Nirgundo Ext 100 mg, Boswellia Serrata Ext 100 mg, Withania Somnifera 100 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "19",
        "sourceRecordId": "source-0751"
      }
    ],
    "sources": [
      {
        "recordId": "source-0751",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "19"
      }
    ]
  },
  {
    "id": "p-3df6de005a6a",
    "name": "Citicoline Sodium & Piracetam Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg + 400 mg",
      "500 mg + 800 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Citicoline Sodium IP 500 mg Piracetam IP 400 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Citicoline Sodium",
      "Piracetam"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Citicoline Sodium&Piracetam Tablets",
      "Citicoline&Piracetam Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Citicoline Sodium — 500 mg; Piracetam — 400 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Citicoline Sodium IP 500 mg Piracetam IP 400 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "sourceNumber": "258",
        "sourceRecordId": "source-0354"
      },
      {
        "label": "Standard formulation",
        "composition": "Citicoline Sodium — 500 mg; Piracetam — 800 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Citicoline Sodium Equivalentto Citicoline IP 500 mg Piracetam IP 800 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "sourceNumber": "319",
        "sourceRecordId": "source-0415"
      }
    ],
    "sources": [
      {
        "recordId": "source-0354",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "number": "258"
      },
      {
        "recordId": "source-0415",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "number": "319"
      }
    ]
  },
  {
    "id": "p-8c20e5e0ae6b",
    "name": "Citicoline Sodium Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Citicoline Sodium Equivalentto Citicoline I.P. 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Citicoline Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Citicoline Sodium Tablets I.P."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Citicoline Sodium — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Citicoline Sodium Equivalentto Citicoline I.P. 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "sourceNumber": "66",
        "sourceRecordId": "source-0162"
      }
    ],
    "sources": [
      {
        "recordId": "source-0162",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "number": "66"
      }
    ]
  },
  {
    "id": "p-5688dce183b3",
    "name": "Clindamycin Hydrochloride Capsules",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg",
      "300 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Clindamycin Hydrochloride Equivalentto Clindamycin IP 150 mg Excipients q.s. Approved Colour Usedinemptycapsuleshells",
    "ingredients": [
      "Clindamycin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Clindamycin Capsules IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Clindamycin Hydrochloride — 150 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Clindamycin Hydrochloride Equivalentto Clindamycin IP 150 mg Excipients q.s. Approved Colour Usedinemptycapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "419",
        "sourceRecordId": "source-0515"
      },
      {
        "label": "Standard formulation",
        "composition": "Clindamycin Hydrochloride — 300 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Clindamycin Hydrochloride Equivalentto Clindamycin IP 300 mg Excipients q.s. Approved Colour Usedinemptycapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "420",
        "sourceRecordId": "source-0516"
      }
    ],
    "sources": [
      {
        "recordId": "source-0515",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "419"
      },
      {
        "recordId": "source-0516",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "420"
      }
    ]
  },
  {
    "id": "p-0f16813e01d0",
    "name": "Clindamycin Phosphate & Clotrimazole Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "100 mg + 200 mg",
      "100 mg + 100 mg"
    ],
    "composition": "Clindamycin Phosphate eq. to Clindamycin 100 mg Clotrimazole 200 mg",
    "ingredients": [
      "Clindamycin Phosphate",
      "Clotrimazole"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Clindamycin Phosphate eq. to Clindamycin 100 mg Clotrimazole 200 mg",
      "Clindamycin Phosphate Eq. to Clindamycin 100 mg Clotrimazole 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Clindamycin Phosphate — 100 mg; Clotrimazole — 200 mg",
        "sourceComposition": "Clindamycin Phosphate eq. to Clindamycin 100 mg Clotrimazole 200 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "6",
        "sourceRecordId": "source-0687"
      },
      {
        "label": "Standard formulation",
        "composition": "Clindamycin Phosphate — 100 mg; Clotrimazole — 100 mg",
        "sourceComposition": "Clindamycin Phosphate Eq. to Clindamycin 100 mg Clotrimazole 100 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "7",
        "sourceRecordId": "source-0688"
      }
    ],
    "sources": [
      {
        "recordId": "source-0687",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "6"
      },
      {
        "recordId": "source-0688",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "7"
      }
    ]
  },
  {
    "id": "p-768cd3901629",
    "name": "Clomifene Citrate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg",
      "25 mg",
      "50 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Clomifene Citrate I.P. 100 mg Excipients q.s.",
    "ingredients": [
      "Clomifene Citrate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Clomifene Citrate Tablets I.P. 100 mg",
      "Clomifene Citrate Tablets I.P. 25 mg",
      "Clomifene Citrate Tablets I.P. 50 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Clomifene Citrate — 100 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Clomifene Citrate I.P. 100 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "sourceNumber": "6",
        "sourceRecordId": "source-0606"
      },
      {
        "label": "Standard formulation",
        "composition": "Clomifene Citrate — 25 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Clomifene Citrate I.P. 25 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "sourceNumber": "25",
        "sourceRecordId": "source-0625"
      },
      {
        "label": "Standard formulation",
        "composition": "Clomifene Citrate — 50 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Clomifene Citrate I.P. 50 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "sourceNumber": "26",
        "sourceRecordId": "source-0626"
      }
    ],
    "sources": [
      {
        "recordId": "source-0606",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "number": "6"
      },
      {
        "recordId": "source-0625",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "number": "25"
      },
      {
        "recordId": "source-0626",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "number": "26"
      }
    ]
  },
  {
    "id": "p-b9ddd88fb497",
    "name": "Clopidogrel Bisulfate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "75 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Clopidogrel Bisulfate Equivalentto Clopidogrel Psu 75 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Clopidogrel Bisulfate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Clopidogrel Tablets USP (For Export Only)"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Clopidogrel Bisulfate — 75 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Clopidogrel Bisulfate Equivalentto Clopidogrel Psu 75 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "sourceNumber": "385",
        "sourceRecordId": "source-0481"
      }
    ],
    "sources": [
      {
        "recordId": "source-0481",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "number": "385"
      },
      {
        "recordId": "source-0512",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "416"
      }
    ]
  },
  {
    "id": "p-0ac546d27870",
    "name": "Co-Enzymes Q10 Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Co-Enzymes Q10 100 mg (Ubidecarenone)",
    "ingredients": [
      "Co-Enzymes Q10"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Co-Enzymes Q10 100 mg (Ubidecarenone)"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Co-Enzymes Q10 — 100 mg",
        "sourceComposition": "Co-Enzymes Q10 100 mg (Ubidecarenone)",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "16",
        "sourceRecordId": "source-0783"
      }
    ],
    "sources": [
      {
        "recordId": "source-0783",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "16"
      }
    ]
  },
  {
    "id": "p-4d9d96dce659",
    "name": "Coenzyme Q10 & L-Arginine & Omega-3 Fatty Acid & Selenium Dioxide Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": "BP",
    "availableStrengths": [
      "100 mg + 100 mg + 500 mg + 70 mcg"
    ],
    "composition": "(Ubidecarenone BP) Coenzyme Q10 100 mg L-Arginine 100 mg Omega-3 Fatty Acid 500 mg Eq.to Eicosapentaenoic Acid 90 mg Eq. to Docosahexaenoic Acid 60 mg Selenium Dioxide 70 mcg",
    "ingredients": [
      "Coenzyme Q10",
      "L-Arginine",
      "Omega-3 Fatty Acid",
      "Selenium Dioxide"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "(Ubidecarenone BP) Coenzyme Q10 100 mg L-Arginine 100 mg Omega-3 Fatty Acid 500 mg Eq.to Eicosapentaenoic Acid 90 mg Eq. to Docosahexaenoic Acid 60 mg Selenium Dioxide 70 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coenzyme Q10 — 100 mg; L-Arginine — 100 mg; Omega-3 Fatty Acid — 500 mg; Selenium Dioxide — 70 mcg",
        "sourceComposition": "(Ubidecarenone BP) Coenzyme Q10 100 mg L-Arginine 100 mg Omega-3 Fatty Acid 500 mg Eq.to Eicosapentaenoic Acid 90 mg Eq. to Docosahexaenoic Acid 60 mg Selenium Dioxide 70 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "10",
        "sourceRecordId": "source-0691"
      }
    ],
    "sources": [
      {
        "recordId": "source-0691",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "10"
      }
    ]
  },
  {
    "id": "p-3c5b1d786657",
    "name": "Coenzyme Q10 Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Coenzyme Q10 100 mg",
    "ingredients": [
      "Coenzyme Q10"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coenzyme Q10 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coenzyme Q10 — 100 mg",
        "sourceComposition": "Coenzyme Q10 100 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 6,
        "sourceNumber": "31",
        "sourceRecordId": "source-0031"
      }
    ],
    "sources": [
      {
        "recordId": "source-0031",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 6,
        "number": "31"
      }
    ]
  },
  {
    "id": "p-57a272c2ea1f",
    "name": "Coenzyme Q10, Eicosapentaenoic Acid, Docosahexaenoic Acid & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Coenzyme Q10 100 mg, Eicosapentaenoic Acid 180 mg, Docosahexaenoic Acid 120 mg, Methylcobalamin 1500 mcg, L-Carnitine 500 mg, L-Arginine 100 mg, Vitamin E14.9 iu, Astaxanthin (1%) 8 mg, Green Tea Extract 20 mg, Zinc Sulphate 7.5 mg",
    "ingredients": [
      "Coenzyme Q10",
      "Eicosapentaenoic Acid",
      "Docosahexaenoic Acid",
      "Methylcobalamin",
      "L-Carnitine",
      "L-Arginine",
      "Vitamin E",
      "Astaxanthin",
      "Green Tea Extract",
      "Zinc Sulphate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Coenzyme Q10 100 mg, Eicosapentaenoic Acid 180 mg, Docosahexaenoic Acid 120 mg, Methylcobalamin 1500 mcg, L-Carnitine 500 mg, L-Arginine 100 mg, Vitamin E14.9 iu, Astaxanthin (1%) 8 mg, Green Tea Extract 20 mg, Zinc Sulphate 7.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coenzyme Q10 — 100 mg; Eicosapentaenoic Acid — 180 mg; Docosahexaenoic Acid — 120 mg; Methylcobalamin — 1500 mcg; L-Carnitine — 500 mg; L-Arginine — 100 mg; Vitamin E — 14.9 iu; Astaxanthin — 8 mg; Green Tea Extract — 20 mg; Zinc Sulphate — 7.5 mg",
        "sourceComposition": "Coenzyme Q10 100 mg, Eicosapentaenoic Acid 180 mg, Docosahexaenoic Acid 120 mg, Methylcobalamin 1500 mcg, L-Carnitine 500 mg, L-Arginine 100 mg, Vitamin E14.9 iu, Astaxanthin (1%) 8 mg, Green Tea Extract 20 mg, Zinc Sulphate 7.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "2",
        "sourceRecordId": "source-0734"
      }
    ],
    "sources": [
      {
        "recordId": "source-0734",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "2"
      }
    ]
  },
  {
    "id": "p-3865ab52bbef",
    "name": "Coenzyme Q10, L-Carnitine L-Tartrate, Astaxanthin Powder & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Coenzyme Q10 100 mg L-Carnitine L-Tartrate 500 mg Astaxanthin10%Powder 8 mg Lycopene Powder10% 30 mg Zinc Sulphate Monohydrate 5 mg Sodium Selenate Eqtoelementalselenium 40 mcg",
    "ingredients": [
      "Coenzyme Q10",
      "L-Carnitine L-Tartrate",
      "Astaxanthin Powder",
      "Lycopene Powder",
      "Zinc Sulphate Monohydrate",
      "Sodium Selenate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coenzyme Q10 100 mg L-Carnitine L-Tartrate 500 mg Astaxanthin10%Powder 8 mg Lycopene Powder10% 30 mg Zinc Sulphate Monohydrate 5 mg Sodium Selenate Eqtoelementalselenium 40 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coenzyme Q10 — 100 mg; L-Carnitine L-Tartrate — 500 mg; Astaxanthin Powder — 8 mg; Lycopene Powder — 30 mg; Zinc Sulphate Monohydrate — 5 mg; Sodium Selenate — 40 mcg",
        "sourceComposition": "Coenzyme Q10 100 mg L-Carnitine L-Tartrate 500 mg Astaxanthin10%Powder 8 mg Lycopene Powder10% 30 mg Zinc Sulphate Monohydrate 5 mg Sodium Selenate Eqtoelementalselenium 40 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "sourceNumber": "75",
        "sourceRecordId": "source-0075"
      }
    ],
    "sources": [
      {
        "recordId": "source-0075",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "number": "75"
      }
    ]
  },
  {
    "id": "p-376d7415044f",
    "name": "Coenzyme Q10, Lycopene Powder, Coral Calcium & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Coenzyme(Ubiquinone Acetate) 50 mg Lycopene Powder10% 5000 mcg Coral Calcium 225 mg Magnesium Sulphate 18 mg Vitamin E Acetate 10 mg Green Tea Extract 10 mg Ginkgo Biloba Extract 25 mg Vitamin B12.3 mg Vitamin B2 3.1 mg Vitamin B3 23 mg Zinc Sulphate Monohydrate 17 mg Sodium Selenate 40 mcg Vitamin B6 3.1 mg Grape Seed Extract 10 mg L-Arginine 100 mg",
    "ingredients": [
      "Coenzyme Q10",
      "Lycopene Powder",
      "Coral Calcium",
      "Magnesium Sulphate",
      "Vitamin E Acetate",
      "Green Tea Extract",
      "Ginkgo Biloba Extract",
      "Vitamin B",
      "Vitamin B2",
      "Vitamin B3",
      "Zinc Sulphate Monohydrate",
      "Sodium Selenate",
      "Vitamin B6",
      "Grape Seed Extract",
      "L-Arginine"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coenzyme(Ubiquinone Acetate) 50 mg Lycopene Powder10% 5000 mcg Coral Calcium 225 mg Magnesium Sulphate 18 mg Vitamin E Acetate 10 mg Green Tea Extract 10 mg Ginkgo Biloba Extract 25 mg Vitamin B12.3 mg Vitamin B2 3.1 mg Vitamin B3 23 mg Zinc Sulphate Monohydrate 17 mg Sodium Selenate 40 mcg Vitamin B6 3.1 mg Grape Seed Extract 10 mg L-Arginine 100 mg",
      "Coenzyme-10 50 mg Lycopene Powder-10% 5000 mcg Coral Calcium 225 mg Magnesium Sulphate 18 mg Vitamin E Acetate 10 mg Green Tea Extract 10 mg Ginkgo Biloba Extract 25 mg Vitamin B12.3 mg Vitamin B2 3.1 mg Vitamin B3 23 mg Zinc Sulphate Monohydrate 17 mg Sodium Selenate 40 mcg Vitamin B6 3.1 mg Grape Seed Extract 10 mg L-Arginine 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coenzyme Q10 — 50 mg; Lycopene Powder — 5000 mcg; Coral Calcium — 225 mg; Magnesium Sulphate — 18 mg; Vitamin E Acetate — 10 mg; Green Tea Extract — 10 mg; Ginkgo Biloba Extract — 25 mg; Vitamin B — 12.3 mg; Vitamin B2 — 3.1 mg; Vitamin B3 — 23 mg; Zinc Sulphate Monohydrate — 17 mg; Sodium Selenate — 40 mcg; Vitamin B6 — 3.1 mg; Grape Seed Extract — 10 mg; L-Arginine — 100 mg",
        "sourceComposition": "Coenzyme(Ubiquinone Acetate) 50 mg Lycopene Powder10% 5000 mcg Coral Calcium 225 mg Magnesium Sulphate 18 mg Vitamin E Acetate 10 mg Green Tea Extract 10 mg Ginkgo Biloba Extract 25 mg Vitamin B12.3 mg Vitamin B2 3.1 mg Vitamin B3 23 mg Zinc Sulphate Monohydrate 17 mg Sodium Selenate 40 mcg Vitamin B6 3.1 mg Grape Seed Extract 10 mg L-Arginine 100 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "sourceNumber": "13",
        "sourceRecordId": "source-0013"
      }
    ],
    "sources": [
      {
        "recordId": "source-0013",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "number": "13"
      },
      {
        "recordId": "source-0038",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "number": "38"
      }
    ]
  },
  {
    "id": "p-8709a3d148f9",
    "name": "Coenzyme Q10, Lycopene Powder, L-Arginine & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Coenzyme(Ubiquinone Acetate) 50 mg Lycopene Powder10% 5000 mcg L-Arginine 100 mg Vitamin E Acetate 25 iu Green Tea Extract 10 mg Grape Seed Extract 10 mg Ginkgo Biloba Extract 25 mg Vitamin B1 5 mg Vitamin B2 5 mg Vitamin B3 25 mg Zinc Sulphate Monohydrate 10 mg Sodium Selenate 100 mcg Vitamin B6 10 mg",
    "ingredients": [
      "Coenzyme Q10",
      "Lycopene Powder",
      "L-Arginine",
      "Vitamin E Acetate",
      "Green Tea Extract",
      "Grape Seed Extract",
      "Ginkgo Biloba Extract",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B3",
      "Zinc Sulphate Monohydrate",
      "Sodium Selenate",
      "Vitamin B6"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coenzyme(Ubiquinone Acetate) 50 mg Lycopene Powder10% 5000 mcg L-Arginine 100 mg Vitamin E Acetate 25 iu Green Tea Extract 10 mg Grape Seed Extract 10 mg Ginkgo Biloba Extract 25 mg Vitamin B1 5 mg Vitamin B2 5 mg Vitamin B3 25 mg Zinc Sulphate Monohydrate 10 mg Sodium Selenate 100 mcg Vitamin B6 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coenzyme Q10 — 50 mg; Lycopene Powder — 5000 mcg; L-Arginine — 100 mg; Vitamin E Acetate — 25 iu; Green Tea Extract — 10 mg; Grape Seed Extract — 10 mg; Ginkgo Biloba Extract — 25 mg; Vitamin B1 — 5 mg; Vitamin B2 — 5 mg; Vitamin B3 — 25 mg; Zinc Sulphate Monohydrate — 10 mg; Sodium Selenate — 100 mcg; Vitamin B6 — 10 mg",
        "sourceComposition": "Coenzyme(Ubiquinone Acetate) 50 mg Lycopene Powder10% 5000 mcg L-Arginine 100 mg Vitamin E Acetate 25 iu Green Tea Extract 10 mg Grape Seed Extract 10 mg Ginkgo Biloba Extract 25 mg Vitamin B1 5 mg Vitamin B2 5 mg Vitamin B3 25 mg Zinc Sulphate Monohydrate 10 mg Sodium Selenate 100 mcg Vitamin B6 10 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 5,
        "sourceNumber": "29",
        "sourceRecordId": "source-0029"
      }
    ],
    "sources": [
      {
        "recordId": "source-0029",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 5,
        "number": "29"
      }
    ]
  },
  {
    "id": "p-648dc2448e0f",
    "name": "Coenzyme Q10, Lycopene Powder, L-Carnitine L-Tartrate & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Coenzyme(Ubiquinone Acetate) 60 mg Lycopene Powder10% 5000 mcg L-Carnitine L-Tartrate 500 mg Astaxanthin10%Powder 8 mg L-Arginine HCl 100 mg Zinc Sulphate Monohydrate 5 mg",
    "ingredients": [
      "Coenzyme Q10",
      "Lycopene Powder",
      "L-Carnitine L-Tartrate",
      "Astaxanthin Powder",
      "L-Arginine HCl",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coenzyme(Ubiquinone Acetate) 60 mg Lycopene Powder10% 5000 mcg L-Carnitine L-Tartrate 500 mg Astaxanthin10%Powder 8 mg L-Arginine HCl 100 mg Zinc Sulphate Monohydrate 5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coenzyme Q10 — 60 mg; Lycopene Powder — 5000 mcg; L-Carnitine L-Tartrate — 500 mg; Astaxanthin Powder — 8 mg; L-Arginine HCl — 100 mg; Zinc Sulphate Monohydrate — 5 mg",
        "sourceComposition": "Coenzyme(Ubiquinone Acetate) 60 mg Lycopene Powder10% 5000 mcg L-Carnitine L-Tartrate 500 mg Astaxanthin10%Powder 8 mg L-Arginine HCl 100 mg Zinc Sulphate Monohydrate 5 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "sourceNumber": "11",
        "sourceRecordId": "source-0011"
      }
    ],
    "sources": [
      {
        "recordId": "source-0011",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "number": "11"
      }
    ]
  },
  {
    "id": "p-41ae6e602c0b",
    "name": "Coenzyme Q10, Lycopene, L-Arginine & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Coenzyme Q10 100 mg, Lycopene 10% 5000 mcg, L-Arginine 100 mg, Omega-3 Fatty Acid 500 mg, Selenium 70 mcg",
    "ingredients": [
      "Coenzyme Q10",
      "Lycopene",
      "L-Arginine",
      "Omega-3 Fatty Acid",
      "Selenium"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Coenzyme Q10 100 mg, Lycopene 10% 5000 mcg, L-Arginine 100 mg, Omega-3 Fatty Acid 500 mg, Selenium 70 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coenzyme Q10 — 100 mg; Lycopene — 5000 mcg; L-Arginine — 100 mg; Omega-3 Fatty Acid — 500 mg; Selenium — 70 mcg",
        "sourceComposition": "Coenzyme Q10 100 mg, Lycopene 10% 5000 mcg, L-Arginine 100 mg, Omega-3 Fatty Acid 500 mg, Selenium 70 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "3",
        "sourceRecordId": "source-0735"
      }
    ],
    "sources": [
      {
        "recordId": "source-0735",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "3"
      }
    ]
  },
  {
    "id": "p-de8b60e7313a",
    "name": "Colostrum, Shatavari & DHA Protein Powder",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Carbohydrate 70 g Sugar 0 g Protein 24 g Fat 3 g Colostrum 50 g Shatavri Extract 500 mg Docosahexanoic Acid(DHA) 150 mg L-Arginine 333 mg Vitamin A2500 iu Vitamin B12 mg Vitamin B2 2.5 mg Vitamin B3 25 mg Vitamin B5 10 mg Vitamin B6 5 mg Vitaminc 100 mg Vitamin D2 800 iu Vitamin E20 iu Biotin 100 mcg Folic Acid 300 mcg Vitamin B12 3.33 mcg Calcium 1000 mg Phosphorous 500 mg Iron 30 mg Zinc 20 mg Magnesium 100 mg Sodium 300 mg Iodine 300 mcg Chromium 100 mcg Selenium 100 mcg Molybdenum 100 mcg",
    "ingredients": [
      "Carbohydrate",
      "Sugar",
      "Protein",
      "Fat",
      "Colostrum",
      "Shatavri Extract",
      "Docosahexanoic Acid",
      "L-Arginine",
      "Vitamin A",
      "Vitamin B",
      "Vitamin B2",
      "Vitamin B3",
      "Vitamin B5",
      "Vitamin B6",
      "Vitaminc",
      "Vitamin D2",
      "Vitamin E",
      "Biotin",
      "Folic Acid",
      "Vitamin B12",
      "Calcium",
      "Phosphorous",
      "Iron",
      "Zinc",
      "Magnesium",
      "Sodium",
      "Iodine",
      "Chromium",
      "Selenium",
      "Molybdenum"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Carbohydrate 70 g Sugar 0 g Protein 24 g Fat 3 g Colostrum 50 g Shatavri Extract 500 mg Docosahexanoic Acid(DHA) 150 mg L-Arginine 333 mg Vitamin A2500 iu Vitamin B12 mg Vitamin B2 2.5 mg Vitamin B3 25 mg Vitamin B5 10 mg Vitamin B6 5 mg Vitaminc 100 mg Vitamin D2 800 iu Vitamin E20 iu Biotin 100 mcg Folic Acid 300 mcg Vitamin B12 3.33 mcg Calcium 1000 mg Phosphorous 500 mg Iron 30 mg Zinc 20 mg Magnesium 100 mg Sodium 300 mg Iodine 300 mcg Chromium 100 mcg Selenium 100 mcg Molybdenum 100 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Carbohydrate — 70 g; Sugar — 0 g; Protein — 24 g; Fat — 3 g; Colostrum — 50 g; Shatavri Extract — 500 mg; Docosahexanoic Acid — 150 mg; L-Arginine — 333 mg; Vitamin A — 2500 iu; Vitamin B — 12 mg; Vitamin B2 — 2.5 mg; Vitamin B3 — 25 mg; Vitamin B5 — 10 mg; Vitamin B6 — 5 mg; Vitaminc — 100 mg; Vitamin D2 — 800 iu; Vitamin E — 20 iu; Biotin — 100 mcg; Folic Acid — 300 mcg; Vitamin B12 — 3.33 mcg; Calcium — 1000 mg; Phosphorous — 500 mg; Iron — 30 mg; Zinc — 20 mg; Magnesium — 100 mg; Sodium — 300 mg; Iodine — 300 mcg; Chromium — 100 mcg; Selenium — 100 mcg; Molybdenum — 100 mcg",
        "sourceComposition": "Carbohydrate 70 g Sugar 0 g Protein 24 g Fat 3 g Colostrum 50 g Shatavri Extract 500 mg Docosahexanoic Acid(DHA) 150 mg L-Arginine 333 mg Vitamin A2500 iu Vitamin B12 mg Vitamin B2 2.5 mg Vitamin B3 25 mg Vitamin B5 10 mg Vitamin B6 5 mg Vitaminc 100 mg Vitamin D2 800 iu Vitamin E20 iu Biotin 100 mcg Folic Acid 300 mcg Vitamin B12 3.33 mcg Calcium 1000 mg Phosphorous 500 mg Iron 30 mg Zinc 20 mg Magnesium 100 mg Sodium 300 mg Iodine 300 mcg Chromium 100 mcg Selenium 100 mcg Molybdenum 100 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 17,
        "sourceNumber": "1",
        "sourceRecordId": "source-0092"
      }
    ],
    "sources": [
      {
        "recordId": "source-0092",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 17,
        "number": "1"
      }
    ]
  },
  {
    "id": "p-698a8de4677f",
    "name": "Coral Calcium & Vitamin D3 Stabilized & L-Lysine Hydrochloride Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "500 mg + 400 iu + 30 mg"
    ],
    "composition": "Coral Calcium 500 mg Vitamin D3 Stabilized 400 iu L-Lysine Hydrochloride 30 mg",
    "ingredients": [
      "Coral Calcium",
      "Vitamin D3 Stabilized",
      "L-Lysine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coral Calcium 500 mg Vitamin D3 Stabilized 400 iu L-Lysine Hydrochloride 30 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coral Calcium — 500 mg; Vitamin D3 Stabilized — 400 iu; L-Lysine Hydrochloride — 30 mg",
        "sourceComposition": "Coral Calcium 500 mg Vitamin D3 Stabilized 400 iu L-Lysine Hydrochloride 30 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "sourceNumber": "84",
        "sourceRecordId": "source-0084"
      }
    ],
    "sources": [
      {
        "recordId": "source-0084",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "number": "84"
      }
    ]
  },
  {
    "id": "p-2a48d7018719",
    "name": "Coral Calcium & Vitamin D3 Stabilized Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "500 mg + 600 iu",
      "225 mg + 400 iu"
    ],
    "composition": "Coral Calcium 500 mg Vitamin D3 Stabilized 600 iu",
    "ingredients": [
      "Coral Calcium",
      "Vitamin D3 Stabilized"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coral Calcium 500 mg Vitamin D3 Stabilized 600 iu",
      "Coral Calcium 500 mg Vitamin D3 600 iu",
      "Coral Calcium 225 mg Vitamin D3 Stabilized 400 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coral Calcium — 500 mg; Vitamin D3 Stabilized — 600 iu",
        "sourceComposition": "Coral Calcium 500 mg Vitamin D3 Stabilized 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "sourceNumber": "10",
        "sourceRecordId": "source-0010"
      },
      {
        "label": "Standard formulation",
        "composition": "Coral Calcium — 500 mg; Vitamin D3 — 600 iu",
        "sourceComposition": "Coral Calcium 500 mg Vitamin D3 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "sourceNumber": "20",
        "sourceRecordId": "source-0020"
      },
      {
        "label": "Standard formulation",
        "composition": "Coral Calcium — 225 mg; Vitamin D3 Stabilized — 400 iu",
        "sourceComposition": "Coral Calcium 225 mg Vitamin D3 Stabilized 400 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 6,
        "sourceNumber": "34",
        "sourceRecordId": "source-0034"
      }
    ],
    "sources": [
      {
        "recordId": "source-0010",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "number": "10"
      },
      {
        "recordId": "source-0020",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "number": "20"
      },
      {
        "recordId": "source-0034",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 6,
        "number": "34"
      },
      {
        "recordId": "source-0035",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 6,
        "number": "35"
      }
    ]
  },
  {
    "id": "p-db9cf1b5747f",
    "name": "Coral Calcium, Calcium Aspartate, Calcium Orotate Dihydrate & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Coral Calcium 100 mg Calcium Aspartate 100 mg Calcium Orotate Dihydrate 100 mg Calcium Gluconate 100 mg Calcium Ascorbate 100 mg Calciumlactate 100 mg Calcium Citrate 500 mg Calcitriol 0.25 mcg Vitamin D3 Stabilized 400 iu Magnesium Oxide Light 40 mg Zinc Oxide 12 mg Vitamin K2 45 mcg",
    "ingredients": [
      "Coral Calcium",
      "Calcium Aspartate",
      "Calcium Orotate Dihydrate",
      "Calcium Gluconate",
      "Calcium Ascorbate",
      "Calciumlactate",
      "Calcium Citrate",
      "Calcitriol",
      "Vitamin D3 Stabilized",
      "Magnesium Oxide Light",
      "Zinc Oxide",
      "Vitamin K2"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coral Calcium 100 mg Calcium Aspartate 100 mg Calcium Orotate Dihydrate 100 mg Calcium Gluconate 100 mg Calcium Ascorbate 100 mg Calciumlactate 100 mg Calcium Citrate 500 mg Calcitriol 0.25 mcg Vitamin D3 Stabilized 400 iu Magnesium Oxide Light 40 mg Zinc Oxide 12 mg Vitamin K2 45 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coral Calcium — 100 mg; Calcium Aspartate — 100 mg; Calcium Orotate Dihydrate — 100 mg; Calcium Gluconate — 100 mg; Calcium Ascorbate — 100 mg; Calciumlactate — 100 mg; Calcium Citrate — 500 mg; Calcitriol — 0.25 mcg; Vitamin D3 Stabilized — 400 iu; Magnesium Oxide Light — 40 mg; Zinc Oxide — 12 mg; Vitamin K2 — 45 mcg",
        "sourceComposition": "Coral Calcium 100 mg Calcium Aspartate 100 mg Calcium Orotate Dihydrate 100 mg Calcium Gluconate 100 mg Calcium Ascorbate 100 mg Calciumlactate 100 mg Calcium Citrate 500 mg Calcitriol 0.25 mcg Vitamin D3 Stabilized 400 iu Magnesium Oxide Light 40 mg Zinc Oxide 12 mg Vitamin K2 45 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "sourceNumber": "85",
        "sourceRecordId": "source-0085"
      }
    ],
    "sources": [
      {
        "recordId": "source-0085",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "number": "85"
      }
    ]
  },
  {
    "id": "p-9b390e06df56",
    "name": "Coral Calcium, Magnesium Sulphate, Vitamin D3 Stabilized & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Coral Calcium 500 mg Magnesium Sulphate 100 mg Vitamin D3 Stabilized 600 iu Cyanocobalamin 2.5 mcg Zinc Sulphate Monohydrate 17 mg D-Biotin 30 mcg Vitamin B6 2.4 mg Folic Acid 570 mcg",
    "ingredients": [
      "Coral Calcium",
      "Magnesium Sulphate",
      "Vitamin D3 Stabilized",
      "Cyanocobalamin",
      "Zinc Sulphate Monohydrate",
      "D-Biotin",
      "Vitamin B6",
      "Folic Acid"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coral Calcium 500 mg Magnesium Sulphate 100 mg Vitamin D3 Stabilized 600 iu Cyanocobalamin 2.5 mcg Zinc Sulphate Monohydrate 17 mg D-Biotin 30 mcg Vitamin B6 2.4 mg Folic Acid 570 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coral Calcium — 500 mg; Magnesium Sulphate — 100 mg; Vitamin D3 Stabilized — 600 iu; Cyanocobalamin — 2.5 mcg; Zinc Sulphate Monohydrate — 17 mg; D-Biotin — 30 mcg; Vitamin B6 — 2.4 mg; Folic Acid — 570 mcg",
        "sourceComposition": "Coral Calcium 500 mg Magnesium Sulphate 100 mg Vitamin D3 Stabilized 600 iu Cyanocobalamin 2.5 mcg Zinc Sulphate Monohydrate 17 mg D-Biotin 30 mcg Vitamin B6 2.4 mg Folic Acid 570 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 14,
        "sourceNumber": "78",
        "sourceRecordId": "source-0078"
      }
    ],
    "sources": [
      {
        "recordId": "source-0078",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 14,
        "number": "78"
      }
    ]
  },
  {
    "id": "p-1f5eda7d7c6f",
    "name": "Coral Calcium, Vitamin D3 Stabilized, Cyanocobalamin & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Coral Calcium 500 mg Vitamin D3 Stabilized 600 iu Cyanocobalamin 2.5 mcg Pyridoxal 5-Phosphate 5 mg L-Methylfolate Calcium 1 mg",
    "ingredients": [
      "Coral Calcium",
      "Vitamin D3 Stabilized",
      "Cyanocobalamin",
      "Pyridoxal 5-Phosphate",
      "L-Methylfolate Calcium"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Coral Calcium 500 mg Vitamin D3 Stabilized 600 iu Cyanocobalamin 2.5 mcg Pyridoxal 5-Phosphate 5 mg L-Methylfolate Calcium 1 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Coral Calcium — 500 mg; Vitamin D3 Stabilized — 600 iu; Cyanocobalamin — 2.5 mcg; Pyridoxal 5-Phosphate — 5 mg; L-Methylfolate Calcium — 1 mg",
        "sourceComposition": "Coral Calcium 500 mg Vitamin D3 Stabilized 600 iu Cyanocobalamin 2.5 mcg Pyridoxal 5-Phosphate 5 mg L-Methylfolate Calcium 1 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "sourceNumber": "61",
        "sourceRecordId": "source-0061"
      }
    ],
    "sources": [
      {
        "recordId": "source-0061",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "number": "61"
      }
    ]
  },
  {
    "id": "p-bc29f54bd726",
    "name": "Cranberry Extract & D-Mannose Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "200 mg + 50 mg",
      "300 mg + 200 mg"
    ],
    "composition": "Cranberry Extract 200 mg, D-Mannose 50 mg",
    "ingredients": [
      "Cranberry Extract",
      "D-Mannose"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Cranberry Extract 200 mg, D-Mannose 50 mg",
      "Cranberry Extract 300 mg, D-Mannose 200 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Cranberry Extract — 200 mg; D-Mannose — 50 mg",
        "sourceComposition": "Cranberry Extract 200 mg, D-Mannose 50 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "22",
        "sourceRecordId": "source-0754"
      },
      {
        "label": "Standard formulation",
        "composition": "Cranberry Extract — 300 mg; D-Mannose — 200 mg",
        "sourceComposition": "Cranberry Extract 300 mg, D-Mannose 200 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "23",
        "sourceRecordId": "source-0755"
      }
    ],
    "sources": [
      {
        "recordId": "source-0754",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "22"
      },
      {
        "recordId": "source-0755",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "23"
      }
    ]
  },
  {
    "id": "p-1d9442162c81",
    "name": "Curcumin & Lycopene & Piperine Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "111 mg + 2000 mcg + 2.5 mg"
    ],
    "composition": "Curcumin 111 mg, Lycopene 6% 2000 mcg, Piperine 2.5 mg",
    "ingredients": [
      "Curcumin",
      "Lycopene",
      "Piperine"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Curcumin 111 mg, Lycopene 6% 2000 mcg, Piperine 2.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Curcumin — 111 mg; Lycopene — 2000 mcg; Piperine — 2.5 mg",
        "sourceComposition": "Curcumin 111 mg, Lycopene 6% 2000 mcg, Piperine 2.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "22",
        "sourceRecordId": "source-0824"
      }
    ],
    "sources": [
      {
        "recordId": "source-0824",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "22"
      }
    ]
  },
  {
    "id": "p-e937c2f117b5",
    "name": "Curcumin & Piperine Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "500 mg + 10 mg"
    ],
    "composition": "Curcumin 25% 500 mg, Piperine 10 mg",
    "ingredients": [
      "Curcumin",
      "Piperine"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Curcumin 25% 500 mg, Piperine 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Curcumin — 500 mg; Piperine — 10 mg",
        "sourceComposition": "Curcumin 25% 500 mg, Piperine 10 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "24",
        "sourceRecordId": "source-0756"
      }
    ],
    "sources": [
      {
        "recordId": "source-0756",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "24"
      }
    ]
  },
  {
    "id": "p-7d0430d70a54",
    "name": "Cyproterone Acetate & Ethinylestradiol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "2 mg + 35 mcg"
    ],
    "composition": "Each Filmcoated Tablet Contains: Cyproterone Acetate B.P. 2 mg Ethinylestradiol I.P. 35 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Cyproterone Acetate",
      "Ethinylestradiol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Cyproterone Acetate &Ethinylestradiol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Cyproterone Acetate — 2 mg; Ethinylestradiol — 35 mcg",
        "sourceComposition": "Each Filmcoated Tablet Contains: Cyproterone Acetate B.P. 2 mg Ethinylestradiol I.P. 35 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "sourceNumber": "20",
        "sourceRecordId": "source-0620"
      }
    ],
    "sources": [
      {
        "recordId": "source-0620",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "number": "20"
      }
    ]
  },
  {
    "id": "p-83e938f94086",
    "name": "Dalbergia Sissoo Extract & Cissus Quadrangularis Dry Extract Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "400 mg + 500 mg"
    ],
    "composition": "Dalbergia Sissoo Extract 400 mg Cissus Quadrangularis Dry Extract 500 mg",
    "ingredients": [
      "Dalbergia Sissoo Extract",
      "Cissus Quadrangularis Dry Extract"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Dalbergia Sissoo Extract 400 mg Cissus Quadrangularis Dry Extract 500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dalbergia Sissoo Extract — 400 mg; Cissus Quadrangularis Dry Extract — 500 mg",
        "sourceComposition": "Dalbergia Sissoo Extract 400 mg Cissus Quadrangularis Dry Extract 500 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "sourceNumber": "24",
        "sourceRecordId": "source-0024"
      }
    ],
    "sources": [
      {
        "recordId": "source-0024",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "number": "24"
      }
    ]
  },
  {
    "id": "p-0b577c7fe7d0",
    "name": "Dapagliflozin Propanediol Monohydrate & Metformin Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg + 500 mg",
      "5 mg + 1000 mg",
      "10 mg + 500 mg",
      "10 mg + 1000 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Dapagliflozin Propanediol Monohydrate Equivalentto Dapagliflozin IH 5 mg Metformin Hydrochloride (As Extended Release) IP 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Dapagliflozin Propanediol Monohydrate",
      "Metformin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Dapagliflozin & Metformin Hydrochloride Extended Release Tablets",
      "Dapagliflozin&Metformin Hydrochloride Extended Release Tablets"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Dapagliflozin Propanediol Monohydrate — 5 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dapagliflozin Propanediol Monohydrate Equivalentto Dapagliflozin IH 5 mg Metformin Hydrochloride (As Extended Release) IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "sourceNumber": "434",
        "sourceRecordId": "source-0530"
      },
      {
        "label": "Extended release",
        "composition": "Dapagliflozin Propanediol Monohydrate — 5 mg; Metformin Hydrochloride — 1000 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dapagliflozin Propanediol Monohydrate Equivalentto Dapagliflozin IH 5 mg Metformin Hydrochloride (As Extended Release) IP 1000 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "sourceNumber": "435",
        "sourceRecordId": "source-0531"
      },
      {
        "label": "Extended release",
        "composition": "Dapagliflozin Propanediol Monohydrate — 10 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dapagliflozin Propanediol Monohydrate Equivalentto Dapagliflozin IH 10 mg Metformin Hydrochloride (As Extended Release) IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "sourceNumber": "436",
        "sourceRecordId": "source-0532"
      },
      {
        "label": "Extended release",
        "composition": "Dapagliflozin Propanediol Monohydrate — 10 mg; Metformin Hydrochloride — 1000 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dapagliflozin Propanediol Monohydrate Equivalentto Dapagliflozin IH 10 mg Metformin Hydrochloride (As Extended Release) IP 1000 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "sourceNumber": "437",
        "sourceRecordId": "source-0533"
      }
    ],
    "sources": [
      {
        "recordId": "source-0530",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "number": "434"
      },
      {
        "recordId": "source-0531",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "number": "435"
      },
      {
        "recordId": "source-0532",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "number": "436"
      },
      {
        "recordId": "source-0533",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "number": "437"
      }
    ]
  },
  {
    "id": "p-079fff89b12f",
    "name": "Dapagliflozin Propanediol Monohydrate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "5 mg",
      "10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Dapagliflozin Propanediol Monohydrate Equivalentto Dapagliflozin IH 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Dapagliflozin Propanediol Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Dapagliflozin Tablets5 mg",
      "Dapagliflozin Tablets10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dapagliflozin Propanediol Monohydrate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dapagliflozin Propanediol Monohydrate Equivalentto Dapagliflozin IH 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "sourceNumber": "432",
        "sourceRecordId": "source-0528"
      },
      {
        "label": "Standard formulation",
        "composition": "Dapagliflozin Propanediol Monohydrate — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dapagliflozin Propanediol Monohydrate Equivalentto Dapagliflozin IH 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "sourceNumber": "433",
        "sourceRecordId": "source-0529"
      }
    ],
    "sources": [
      {
        "recordId": "source-0528",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "number": "432"
      },
      {
        "recordId": "source-0529",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "number": "433"
      }
    ]
  },
  {
    "id": "p-535af1250849",
    "name": "Dapoxetine Hydrochloride & Sildenafil Citrate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "30 mg + 50 mg",
      "60 mg + 100 mg",
      "60 mg + 50 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Dapoxetine Hydrochloride Equivalentto Dapoxetine IP 30 mg Sildenafil Citrate Equivalentto Sildenafil IP 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Dapoxetine Hydrochloride",
      "Sildenafil Citrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Dapoxetine&Sildenafil Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dapoxetine Hydrochloride — 30 mg; Sildenafil Citrate — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dapoxetine Hydrochloride Equivalentto Dapoxetine IP 30 mg Sildenafil Citrate Equivalentto Sildenafil IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "sourceNumber": "425",
        "sourceRecordId": "source-0521"
      },
      {
        "label": "Standard formulation",
        "composition": "Dapoxetine Hydrochloride — 60 mg; Sildenafil Citrate — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dapoxetine Hydrochloride Equivalentto Dapoxetine IP 60 mg Sildenafil Citrate Equivalentto Sildenafil IP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "sourceNumber": "426",
        "sourceRecordId": "source-0522"
      },
      {
        "label": "Standard formulation",
        "composition": "Dapoxetine Hydrochloride — 60 mg; Sildenafil Citrate — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dapoxetine Hydrochloride Equivalentto Dapoxetine IP 60 mg Sildenafil Citrate Equivalentto Sildenafil IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "sourceNumber": "427",
        "sourceRecordId": "source-0523"
      }
    ],
    "sources": [
      {
        "recordId": "source-0521",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "number": "425"
      },
      {
        "recordId": "source-0522",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "number": "426"
      },
      {
        "recordId": "source-0523",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "number": "427"
      }
    ]
  },
  {
    "id": "p-820b055a6fc3",
    "name": "Deflazacort Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "6 mg",
      "30 mg",
      "12 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Deflazacort 6 mg Excipients q.s.",
    "ingredients": [
      "Deflazacort"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Deflazacort Tablet6 mg",
      "Deflazacort Tablet30 mg",
      "Deflazacort Tablets12 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Deflazacort — 6 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Deflazacort 6 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "sourceNumber": "292",
        "sourceRecordId": "source-0388"
      },
      {
        "label": "Standard formulation",
        "composition": "Deflazacort — 30 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Deflazacort 30 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "sourceNumber": "293",
        "sourceRecordId": "source-0389"
      },
      {
        "label": "Standard formulation",
        "composition": "Deflazacort — 12 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Deflazacort 12 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "sourceNumber": "331",
        "sourceRecordId": "source-0427"
      }
    ],
    "sources": [
      {
        "recordId": "source-0388",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "number": "292"
      },
      {
        "recordId": "source-0389",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "number": "293"
      },
      {
        "recordId": "source-0427",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "number": "331"
      }
    ]
  },
  {
    "id": "p-f41372bb0e2a",
    "name": "Dehydroepiandrosterone & Folic Acid & Vitamin D3 Stabilized Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "75 mg + 570 mcg + 600 iu"
    ],
    "composition": "Dehydroepiandrosterone 75 mg Folic Acid 570 mcg Vitamin D3 Stabilized 600 iu",
    "ingredients": [
      "Dehydroepiandrosterone",
      "Folic Acid",
      "Vitamin D3 Stabilized"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Dehydroepiandrosterone 75 mg Folic Acid 570 mcg Vitamin D3 Stabilized 600 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dehydroepiandrosterone — 75 mg; Folic Acid — 570 mcg; Vitamin D3 Stabilized — 600 iu",
        "sourceComposition": "Dehydroepiandrosterone 75 mg Folic Acid 570 mcg Vitamin D3 Stabilized 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "sourceNumber": "51",
        "sourceRecordId": "source-0051"
      }
    ],
    "sources": [
      {
        "recordId": "source-0051",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "number": "51"
      },
      {
        "recordId": "source-0077",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 14,
        "number": "77"
      }
    ]
  },
  {
    "id": "p-c16b119944b3",
    "name": "Dehydroepiandrosterone & Folic Acid & Vitamin D3 Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "75 mg + 4.5 mg + 3000 iu"
    ],
    "composition": "Each Film Coated Tablet Contains: Dehydroepiandrosterone(Micronized) (As Sustained Release) 75 mg Folic Acid IP 4.5 mg Vitamin D3 (Stabilized) IP 3000 iu Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Dehydroepiandrosterone",
      "Folic Acid",
      "Vitamin D3"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Dehydroepiandrosterone (Sustained Release),Folic Acid & Vitamin D3 Tablets"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Dehydroepiandrosterone — 75 mg; Folic Acid — 4.5 mg; Vitamin D3 — 3000 iu",
        "sourceComposition": "Each Film Coated Tablet Contains: Dehydroepiandrosterone(Micronized) (As Sustained Release) 75 mg Folic Acid IP 4.5 mg Vitamin D3 (Stabilized) IP 3000 iu Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "sourceNumber": "78",
        "sourceRecordId": "source-0678"
      }
    ],
    "sources": [
      {
        "recordId": "source-0678",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "number": "78"
      }
    ]
  },
  {
    "id": "p-abf9e55bc628",
    "name": "Dehydroepiandrosterone, Folic Acid, Vitamin D3 Stabilized & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Dehydroepiandrosterone(Dhea) 75 mg Folic Acid 570 mcg Vitamin D3 Stabilized 600 iu Coenzyme(Ubiquinone Acetate) 100 mg Melatonin 3 mg",
    "ingredients": [
      "Dehydroepiandrosterone",
      "Folic Acid",
      "Vitamin D3 Stabilized",
      "Coenzyme Q10",
      "Melatonin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Dehydroepiandrosterone(Dhea) 75 mg Folic Acid 570 mcg Vitamin D3 Stabilized 600 iu Coenzyme(Ubiquinone Acetate) 100 mg Melatonin 3 mg",
      "Dehydroepiandrosterone 75 mg Folic Acid 570 mcg Vitamin D3 600 iu Coenzyme Q10 100 mg Melatonin 3 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dehydroepiandrosterone — 75 mg; Folic Acid — 570 mcg; Vitamin D3 Stabilized — 600 iu; Coenzyme Q10 — 100 mg; Melatonin — 3 mg",
        "sourceComposition": "Dehydroepiandrosterone(Dhea) 75 mg Folic Acid 570 mcg Vitamin D3 Stabilized 600 iu Coenzyme(Ubiquinone Acetate) 100 mg Melatonin 3 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "sourceNumber": "8",
        "sourceRecordId": "source-0008"
      },
      {
        "label": "Standard formulation",
        "composition": "Dehydroepiandrosterone — 75 mg; Folic Acid — 570 mcg; Vitamin D3 — 600 iu; Coenzyme Q10 — 100 mg; Melatonin — 3 mg",
        "sourceComposition": "Dehydroepiandrosterone 75 mg Folic Acid 570 mcg Vitamin D3 600 iu Coenzyme Q10 100 mg Melatonin 3 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "sourceNumber": "39",
        "sourceRecordId": "source-0039"
      }
    ],
    "sources": [
      {
        "recordId": "source-0008",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "number": "8"
      },
      {
        "recordId": "source-0039",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "number": "39"
      }
    ]
  },
  {
    "id": "p-fe7a5316b1bd",
    "name": "Desogestrel & Ethinylestradiol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "0.15 mg + 0.02 mg",
      "0.15 mg + 0.03 mg",
      "0.150 mg + 0.03 mg",
      "0.150 mg + 0.02 mg"
    ],
    "composition": "Each Film Coated Tablet Contains:: Desogestrel B.P. 0.15 mg Ethinylestradiol I.P. 0.02 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Desogestrel",
      "Ethinylestradiol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Desogestrel and Ethinylestradiol Tablets U.S.P.",
      "Desogestrel&Ethinylestradiol Tablets USP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Desogestrel — 0.15 mg; Ethinylestradiol — 0.02 mg",
        "sourceComposition": "Each Film Coated Tablet Contains:: Desogestrel B.P. 0.15 mg Ethinylestradiol I.P. 0.02 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "sourceNumber": "9",
        "sourceRecordId": "source-0609"
      },
      {
        "label": "Standard formulation",
        "composition": "Desogestrel — 0.15 mg; Ethinylestradiol — 0.03 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Desogestrel B.P. 0.15 mg Ethinylestradiol I.P. 0.03 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "sourceNumber": "10",
        "sourceRecordId": "source-0610"
      },
      {
        "label": "Standard formulation",
        "composition": "Desogestrel — 0.150 mg; Ethinylestradiol — 0.03 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Desogestrel IP 0.150 mg Ethinylestradiol IP 0.03 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "sourceNumber": "65",
        "sourceRecordId": "source-0665"
      },
      {
        "label": "Standard formulation",
        "composition": "Desogestrel — 0.150 mg; Ethinylestradiol — 0.02 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Desogestrel IP 0.150 mg Ethinylestradiol IP 0.02 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "sourceNumber": "66",
        "sourceRecordId": "source-0666"
      }
    ],
    "sources": [
      {
        "recordId": "source-0609",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "number": "9"
      },
      {
        "recordId": "source-0610",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "number": "10"
      },
      {
        "recordId": "source-0665",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "number": "65"
      },
      {
        "recordId": "source-0666",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "number": "66"
      }
    ]
  },
  {
    "id": "p-454a6c6cf999",
    "name": "Desogestrel Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "75 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Desogestrel B.P. 75 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Desogestrel"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Desogestrel Tablets B.P."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Desogestrel — 75 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Desogestrel B.P. 75 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "sourceNumber": "8",
        "sourceRecordId": "source-0608"
      }
    ],
    "sources": [
      {
        "recordId": "source-0608",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "number": "8"
      }
    ]
  },
  {
    "id": "p-f31fd7f3139f",
    "name": "Desvenlafaxine Succinate Monohydrate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "50 mg",
      "100 mg"
    ],
    "composition": "Each Film Coated Extended Release Tablet Contains: Desvenlafaxine Succinate Monohydrate Equivalentto Desvenlafaxine USP 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Desvenlafaxine Succinate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Desvenlafaxine Extended Release Tablets50 mg",
      "Desvenlafaxine Extended Release Tablets100 mg"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Desvenlafaxine Succinate Monohydrate — 50 mg",
        "sourceComposition": "Each Film Coated Extended Release Tablet Contains: Desvenlafaxine Succinate Monohydrate Equivalentto Desvenlafaxine USP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "sourceNumber": "24",
        "sourceRecordId": "source-0120"
      },
      {
        "label": "Extended release",
        "composition": "Desvenlafaxine Succinate Monohydrate — 100 mg",
        "sourceComposition": "Each Film Coated Extended Release Tablet Contains: Desvenlafaxine Succinate Monohydrate Equivalentto Desvenlafaxine USP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "sourceNumber": "25",
        "sourceRecordId": "source-0121"
      }
    ],
    "sources": [
      {
        "recordId": "source-0120",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "number": "24"
      },
      {
        "recordId": "source-0121",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "number": "25"
      }
    ]
  },
  {
    "id": "p-955798c1ddbd",
    "name": "Dexrabeprazole Sodium & Domperidone Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 30 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Dexrabeprazole Sodium (asentericcoatedpellets) IP 10 mg Domperidone IP 30 mg Excipients q.s. Approved Colour Usedincapsuleshells",
    "ingredients": [
      "Dexrabeprazole Sodium",
      "Domperidone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Dexrabeprazole Sodium& Domperidone Capsules"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Dexrabeprazole Sodium — 10 mg; Domperidone — 30 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Dexrabeprazole Sodium (asentericcoatedpellets) IP 10 mg Domperidone IP 30 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 27,
        "sourceNumber": "168",
        "sourceRecordId": "source-0264"
      }
    ],
    "sources": [
      {
        "recordId": "source-0264",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 27,
        "number": "168"
      }
    ]
  },
  {
    "id": "p-f9f7f9ece131",
    "name": "Dexrabeprazole Sodium Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains: Dexrabeprazole Sodium 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Dexrabeprazole Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Dexrabeprazole Sodium Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Dexrabeprazole Sodium — 10 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Dexrabeprazole Sodium 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "sourceNumber": "187",
        "sourceRecordId": "source-0283"
      }
    ],
    "sources": [
      {
        "recordId": "source-0283",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "number": "187"
      }
    ]
  },
  {
    "id": "p-a173ae514215",
    "name": "Diacerein & Aceclofenac Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg + 100 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Diacerein IP 50 mg Aceclofenac IP 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diacerein",
      "Aceclofenac"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diacerein&Aceclofenac Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Diacerein — 50 mg; Aceclofenac — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Diacerein IP 50 mg Aceclofenac IP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "sourceNumber": "243",
        "sourceRecordId": "source-0339"
      }
    ],
    "sources": [
      {
        "recordId": "source-0339",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "number": "243"
      }
    ]
  },
  {
    "id": "p-579f1f38a4b0",
    "name": "Diacerein & Glucosamine Sulphate Potassium Chloride & Methyl Sulphonyl Methane Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "50 mg + 750 mg + 250 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Diacerein IP 50 mg Glucosamine Sulphate Potassium Chloride Equivalentto Glucosamine Sulphate USP 750 mg Methyl Sulphonyl Methane 250 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diacerein",
      "Glucosamine Sulphate Potassium Chloride",
      "Methyl Sulphonyl Methane"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diacerein, Glucosamine Sulphate&Methyl Sulphonyl Methane Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Diacerein — 50 mg; Glucosamine Sulphate Potassium Chloride — 750 mg; Methyl Sulphonyl Methane — 250 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Diacerein IP 50 mg Glucosamine Sulphate Potassium Chloride Equivalentto Glucosamine Sulphate USP 750 mg Methyl Sulphonyl Methane 250 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "sourceNumber": "376",
        "sourceRecordId": "source-0472"
      }
    ],
    "sources": [
      {
        "recordId": "source-0472",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "number": "376"
      }
    ]
  },
  {
    "id": "p-893dbdfbe14c",
    "name": "Diacerein Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Diacerein I.P. 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diacerein"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diacerein Tablets50 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Diacerein — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Diacerein I.P. 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "sourceNumber": "87",
        "sourceRecordId": "source-0183"
      }
    ],
    "sources": [
      {
        "recordId": "source-0183",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "number": "87"
      }
    ]
  },
  {
    "id": "p-8468a1caeb7a",
    "name": "Diacertein Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg"
    ],
    "composition": "Each Hard Gelatin Capsules Contains Diacertein IP 50 mg Excipients q.s. Approved Colour Usedinemptycapsulesshells",
    "ingredients": [
      "Diacertein"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diacerein Capsules IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Diacertein — 50 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains Diacertein IP 50 mg Excipients q.s. Approved Colour Usedinemptycapsulesshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 73,
        "sourceNumber": "455",
        "sourceRecordId": "source-0551"
      }
    ],
    "sources": [
      {
        "recordId": "source-0551",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 73,
        "number": "455"
      }
    ]
  },
  {
    "id": "p-9874964252a9",
    "name": "Diclofenac Potassium & Paracetamol & Chlorzoxazone Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "50 mg + 325 mg + 250 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Diclofenac Potassium B.P. 50 mg Paracetamol I.P. 325 mg Chlorzoxazone U.S.P. 250 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diclofenac Potassium",
      "Paracetamol",
      "Chlorzoxazone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diclofenac Potassium, Paracetamol &Chlorzoxazone Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Diclofenac Potassium — 50 mg; Paracetamol — 325 mg; Chlorzoxazone — 250 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Diclofenac Potassium B.P. 50 mg Paracetamol I.P. 325 mg Chlorzoxazone U.S.P. 250 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 17,
        "sourceNumber": "105",
        "sourceRecordId": "source-0201"
      }
    ],
    "sources": [
      {
        "recordId": "source-0201",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 17,
        "number": "105"
      }
    ]
  },
  {
    "id": "p-0e0212794510",
    "name": "Diclofenac Potassium & Paracetamol & Serratiopeptidase Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "50 mg + 325 mg + 15 mg",
      "50 mg + 325 mg + 10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Diclofenac Potassium BP 50 mg Paracetamol IP 325 mg Serratiopeptidase (asentericcoatedgranulesequivalentto Enzymaticactivity30,000 Units) IP 15 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diclofenac Potassium",
      "Paracetamol",
      "Serratiopeptidase"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diclofenac Potassium, Paracetamol &Serratiopeptidase Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Diclofenac Potassium — 50 mg; Paracetamol — 325 mg; Serratiopeptidase — 15 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Diclofenac Potassium BP 50 mg Paracetamol IP 325 mg Serratiopeptidase (asentericcoatedgranulesequivalentto Enzymaticactivity30,000 Units) IP 15 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 6,
        "sourceNumber": "38",
        "sourceRecordId": "source-0134"
      },
      {
        "label": "Enteric coated",
        "composition": "Diclofenac Potassium — 50 mg; Paracetamol — 325 mg; Serratiopeptidase — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Diclofenac Potassium BP 50 mg Paracetamol IP 325 mg Serratiopeptidase (asentericcoatedgranulesequivalentto Enzymaticactivity20,000Units) IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "sourceNumber": "127",
        "sourceRecordId": "source-0223"
      }
    ],
    "sources": [
      {
        "recordId": "source-0134",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 6,
        "number": "38"
      },
      {
        "recordId": "source-0223",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "number": "127"
      }
    ]
  },
  {
    "id": "p-5bf5894dbb11",
    "name": "Diclofenac Potassium & Serratiopeptidase Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "50 mg + 10 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains: Diclofenac Potassium BP 50 mg Serratiopeptidase (asentericcoatedgranulesequivalentto Enzymaticactivity20,000Units) IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diclofenac Potassium",
      "Serratiopeptidase"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diclofenac Potassium&Serratiopeptidase Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Diclofenac Potassium — 50 mg; Serratiopeptidase — 10 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Diclofenac Potassium BP 50 mg Serratiopeptidase (asentericcoatedgranulesequivalentto Enzymaticactivity20,000Units) IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "sourceNumber": "23",
        "sourceRecordId": "source-0119"
      }
    ],
    "sources": [
      {
        "recordId": "source-0119",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "number": "23"
      }
    ]
  },
  {
    "id": "p-6c96f6e552a5",
    "name": "Diclofenac Sodium & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg + 325 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Diclofenac Sodium IP 50 mg Paracetamol IP 325 mg Excipients q.s.",
    "ingredients": [
      "Diclofenac Sodium",
      "Paracetamol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Paracetamol&Diclofenac Sodium Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Diclofenac Sodium — 50 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Diclofenac Sodium IP 50 mg Paracetamol IP 325 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "sourceNumber": "242",
        "sourceRecordId": "source-0338"
      }
    ],
    "sources": [
      {
        "recordId": "source-0338",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "number": "242"
      }
    ]
  },
  {
    "id": "p-6b76c27db58a",
    "name": "Diclofenac Sodium & Thiocolchicoside Capsules",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg + 8 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Diclofenac Sodium (Asgastroresistantpellets) IP 50 mg Thiocolchicoside (Aspellets) IP 8 mg Excipients q.s. Approved Colour Usedincapsuleshells",
    "ingredients": [
      "Diclofenac Sodium",
      "Thiocolchicoside"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diclofenac Sodium &Thiocolchicoside Capsules",
      "Thiocolchicoside&Diclofenac Sodium Capsules"
    ],
    "variants": [
      {
        "label": "Gastro-resistant",
        "composition": "Diclofenac Sodium — 50 mg; Thiocolchicoside — 8 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Diclofenac Sodium (Asgastroresistantpellets) IP 50 mg Thiocolchicoside (Aspellets) IP 8 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "sourceNumber": "261",
        "sourceRecordId": "source-0357"
      },
      {
        "label": "Enteric coated",
        "composition": "Thiocolchicoside — 8 mg; Diclofenac Sodium — 50 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Thiocolchicoside IP 8 mg Diclofenac Sodium (Asentericcoatedtablets) IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "sourceNumber": "402",
        "sourceRecordId": "source-0498"
      }
    ],
    "sources": [
      {
        "recordId": "source-0357",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "number": "261"
      },
      {
        "recordId": "source-0498",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "number": "402"
      }
    ]
  },
  {
    "id": "p-8110f63a9028",
    "name": "Diclofenac Sodium Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg"
    ],
    "composition": "Each Gastro-Resistant Tablet Contains: Diclofenac Sodium IP 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diclofenac Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diclofenac Sodium Gastro- Resistant Tablets IP50 mg"
    ],
    "variants": [
      {
        "label": "Gastro-resistant",
        "composition": "Diclofenac Sodium — 50 mg",
        "sourceComposition": "Each Gastro-Resistant Tablet Contains: Diclofenac Sodium IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "sourceNumber": "298",
        "sourceRecordId": "source-0394"
      }
    ],
    "sources": [
      {
        "recordId": "source-0394",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "number": "298"
      }
    ]
  },
  {
    "id": "p-11d33ab58db9",
    "name": "Dienogest & Ethinylestradiol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2 mg + 30 mcg"
    ],
    "composition": "Eachfilmcoatedtabletcontains: Dienogest IP 2 mg Ethinylestradiol IP 30 mcg Excipients q.s. Approvedcolourused",
    "ingredients": [
      "Dienogest",
      "Ethinylestradiol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Dienogest&Ethinylestradiol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dienogest — 2 mg; Ethinylestradiol — 30 mcg",
        "sourceComposition": "Eachfilmcoatedtabletcontains: Dienogest IP 2 mg Ethinylestradiol IP 30 mcg Excipients q.s. Approvedcolourused",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 8,
        "sourceNumber": "58",
        "sourceRecordId": "source-0658"
      }
    ],
    "sources": [
      {
        "recordId": "source-0658",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 8,
        "number": "58"
      }
    ]
  },
  {
    "id": "p-4e53ce9114dd",
    "name": "Dienogest Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Dienogest I.P. 2 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Dienogest"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Dienogest Tablets2 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dienogest — 2 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dienogest I.P. 2 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "sourceNumber": "24",
        "sourceRecordId": "source-0624"
      }
    ],
    "sources": [
      {
        "recordId": "source-0624",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "number": "24"
      }
    ]
  },
  {
    "id": "p-74dffbbf928d",
    "name": "Diltiazem Hydrochloride Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "30 mg",
      "60 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Diltiazem Hydrochloride IP 30 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diltiazem Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Diltiazem Hydrochloride Tablets IP 30 mg",
      "Diltiazem Hydrochloride Tablets IP 60 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Diltiazem Hydrochloride — 30 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Diltiazem Hydrochloride IP 30 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "sourceNumber": "296",
        "sourceRecordId": "source-0392"
      },
      {
        "label": "Standard formulation",
        "composition": "Diltiazem Hydrochloride — 60 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Diltiazem Hydrochloride IP 60 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "sourceNumber": "297",
        "sourceRecordId": "source-0393"
      }
    ],
    "sources": [
      {
        "recordId": "source-0392",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "number": "296"
      },
      {
        "recordId": "source-0393",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "number": "297"
      }
    ]
  },
  {
    "id": "p-defca2a9806d",
    "name": "Diluted Glyceryl Trinitrate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.6 mg",
      "6.4 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Diluted Glyceryl Trinitrate Equivalentto Glyceryl Trinitrate (Inacontrolledreleasesystem) IP 2.6 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diluted Glyceryl Trinitrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Glyceryl Trinitrate Controlled Release Tablets 2.6 mg",
      "Glyceryl Trinitrate Controlled Release Tablets 6.4 mg"
    ],
    "variants": [
      {
        "label": "Controlled release",
        "composition": "Diluted Glyceryl Trinitrate — 2.6 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Diluted Glyceryl Trinitrate Equivalentto Glyceryl Trinitrate (Inacontrolledreleasesystem) IP 2.6 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "sourceNumber": "165",
        "sourceRecordId": "source-0261"
      },
      {
        "label": "Controlled release",
        "composition": "Diluted Glyceryl Trinitrate — 6.4 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Diluted Glyceryl Trinitrate Equivalentto Glyceryl Trinitrate(Inacontrolledreleasesystem) IP 6.4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "sourceNumber": "166",
        "sourceRecordId": "source-0262"
      }
    ],
    "sources": [
      {
        "recordId": "source-0261",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "number": "165"
      },
      {
        "recordId": "source-0262",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "number": "166"
      }
    ]
  },
  {
    "id": "p-b6f032cf0918",
    "name": "Diluted Nitroglycerin Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.6 mg",
      "6.4 mg"
    ],
    "composition": "Each Uncoated Controlled Release Tablet Contains: Diluted Nitroglycerin Equivalentto Nitroglycerin IP 2.6 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Diluted Nitroglycerin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Nitroglycerin Controlled Release Tablets2.6 mg",
      "Nitroglycerin Controlled Release Tablets6.4 mg"
    ],
    "variants": [
      {
        "label": "Controlled release",
        "composition": "Diluted Nitroglycerin — 2.6 mg",
        "sourceComposition": "Each Uncoated Controlled Release Tablet Contains: Diluted Nitroglycerin Equivalentto Nitroglycerin IP 2.6 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "sourceNumber": "316",
        "sourceRecordId": "source-0412"
      },
      {
        "label": "Controlled release",
        "composition": "Diluted Nitroglycerin — 6.4 mg",
        "sourceComposition": "Each Uncoated Controlled Release Tablet Contains: Diluted Nitroglycerin Equivalentto Nitroglycerin IP 6.4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "sourceNumber": "317",
        "sourceRecordId": "source-0413"
      }
    ],
    "sources": [
      {
        "recordId": "source-0412",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "number": "316"
      },
      {
        "recordId": "source-0413",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "number": "317"
      }
    ]
  },
  {
    "id": "p-257f13ea69ed",
    "name": "Disulfiram Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Each Uncoated Tablet Contains Disulfiram IP 500 mg Excipients q.s.",
    "ingredients": [
      "Disulfiram"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Disulfiram Tablets IP 500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Disulfiram — 500 mg",
        "sourceComposition": "Each Uncoated Tablet Contains Disulfiram IP 500 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "sourceNumber": "370",
        "sourceRecordId": "source-0466"
      }
    ],
    "sources": [
      {
        "recordId": "source-0466",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "number": "370"
      }
    ]
  },
  {
    "id": "p-fbc1fd16110d",
    "name": "Divalproex Sodium Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Each Film Coated Extended Release Tablet Contains: Divalproex Sodium Equivalentto Valproic Acid I.P. 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Divalproex Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Divalproex Extended Release Tablets I.P.500 mg"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Divalproex Sodium — 500 mg",
        "sourceComposition": "Each Film Coated Extended Release Tablet Contains: Divalproex Sodium Equivalentto Valproic Acid I.P. 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "sourceNumber": "50",
        "sourceRecordId": "source-0146"
      }
    ],
    "sources": [
      {
        "recordId": "source-0146",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "number": "50"
      }
    ]
  },
  {
    "id": "p-3421e85d54ea",
    "name": "Docusate Sodium Powder & Senna Dry Extract Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "100 mg + 86 mg"
    ],
    "composition": "Docusate Sodium85%Powder 100 mg Senna Dry Extract20% 86 mg",
    "ingredients": [
      "Docusate Sodium Powder",
      "Senna Dry Extract"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Docusate Sodium85%Powder 100 mg Senna Dry Extract20% 86 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Docusate Sodium Powder — 100 mg; Senna Dry Extract — 86 mg",
        "sourceComposition": "Docusate Sodium85%Powder 100 mg Senna Dry Extract20% 86 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "sourceNumber": "25",
        "sourceRecordId": "source-0025"
      }
    ],
    "sources": [
      {
        "recordId": "source-0025",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "number": "25"
      }
    ]
  },
  {
    "id": "p-9bbac2ecc817",
    "name": "Doxecalciferol Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "0.50 mcg",
      "0.25 mcg"
    ],
    "composition": "Doxecalciferol 0.50 mcg",
    "ingredients": [
      "Doxecalciferol"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Doxecalciferol 0.50 mcg",
      "Doxecalciferol 0.25 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Doxecalciferol — 0.50 mcg",
        "sourceComposition": "Doxecalciferol 0.50 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "50",
        "sourceRecordId": "source-0731"
      },
      {
        "label": "Standard formulation",
        "composition": "Doxecalciferol — 0.25 mcg",
        "sourceComposition": "Doxecalciferol 0.25 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "51",
        "sourceRecordId": "source-0732"
      }
    ],
    "sources": [
      {
        "recordId": "source-0731",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "50"
      },
      {
        "recordId": "source-0732",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "51"
      }
    ]
  },
  {
    "id": "p-ff162dc324fd",
    "name": "Doxofylline & Montelukast Sodium Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "400 mg + 10 mg",
      "800 mg + 10 mg"
    ],
    "composition": "Each Uncoated Bilayer Tablet Contains: Doxofylline (assustainedreleaseform) I.P. 400 mg Montelukast Sodium Equivalentto Montelukast I.P. 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Doxofylline",
      "Montelukast Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Doxofylline Sustained Releaseand Montelukast Tablets"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Doxofylline — 400 mg; Montelukast Sodium — 10 mg",
        "sourceComposition": "Each Uncoated Bilayer Tablet Contains: Doxofylline (assustainedreleaseform) I.P. 400 mg Montelukast Sodium Equivalentto Montelukast I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "sourceNumber": "21",
        "sourceRecordId": "source-0117"
      },
      {
        "label": "Sustained release",
        "composition": "Doxofylline — 800 mg; Montelukast Sodium — 10 mg",
        "sourceComposition": "Each Uncoated Bilayer Tablet Contains Doxofylline (assustainedreleaseform) I.P. 800 mg Montelukast Sodium Equivalentto Montelukast I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "sourceNumber": "22",
        "sourceRecordId": "source-0118"
      }
    ],
    "sources": [
      {
        "recordId": "source-0117",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "number": "21"
      },
      {
        "recordId": "source-0118",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "number": "22"
      }
    ]
  },
  {
    "id": "p-5701e908470d",
    "name": "Doxycycline Hydrochloride & Lactic Acid Bacillus Capsules",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 5Millionspores"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Doxycycline Hydrochloride Eqto Doxycycline I.P. 100 mg Lactic Acid Bacillus 5Millionspores Excipients q.s. Approvedcolourusedinemptycapsuleshells",
    "ingredients": [
      "Doxycycline Hydrochloride",
      "Lactic Acid Bacillus"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Doxycyclineand Lactic Acid Bacillus Capsules"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Doxycycline Hydrochloride — 100 mg; Lactic Acid Bacillus — 5Millionspores",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Doxycycline Hydrochloride Eqto Doxycycline I.P. 100 mg Lactic Acid Bacillus 5Millionspores Excipients q.s. Approvedcolourusedinemptycapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "sourceNumber": "111",
        "sourceRecordId": "source-0207"
      }
    ],
    "sources": [
      {
        "recordId": "source-0207",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "number": "111"
      }
    ]
  },
  {
    "id": "p-eb5f36a40707",
    "name": "Doxylamine Succinate & L-Methylfolate Calcium & Pyridoxal 5-Phosphate & Cyanocobalamin Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "20 mg + 1.0 mg + 10 mg + 2.5 mcg",
      "20 mg + 1 mg + 10 mg + 2.5 mcg"
    ],
    "composition": "Doxylamine Succinate 20 mg L-Methylfolate Calcium 1.0 mg Pyridoxal 5-Phosphate 10 mg Cyanocobalamin 2.5 mcg",
    "ingredients": [
      "Doxylamine Succinate",
      "L-Methylfolate Calcium",
      "Pyridoxal 5-Phosphate",
      "Cyanocobalamin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Doxylamine Succinate 20 mg L-Methylfolate Calcium 1.0 mg Pyridoxal 5-Phosphate 10 mg Cyanocobalamin 2.5 mcg",
      "Doxylamine Succinate 20 mg L-Methylfolate Calcium 1 mg Pyridoxal 5-Phosphate 10 mg Cyanocobalamin 2.5 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Doxylamine Succinate — 20 mg; L-Methylfolate Calcium — 1.0 mg; Pyridoxal 5-Phosphate — 10 mg; Cyanocobalamin — 2.5 mcg",
        "sourceComposition": "Doxylamine Succinate 20 mg L-Methylfolate Calcium 1.0 mg Pyridoxal 5-Phosphate 10 mg Cyanocobalamin 2.5 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "sourceNumber": "22",
        "sourceRecordId": "source-0022"
      },
      {
        "label": "Standard formulation",
        "composition": "Doxylamine Succinate — 20 mg; L-Methylfolate Calcium — 1 mg; Pyridoxal 5-Phosphate — 10 mg; Cyanocobalamin — 2.5 mcg",
        "sourceComposition": "Doxylamine Succinate 20 mg L-Methylfolate Calcium 1 mg Pyridoxal 5-Phosphate 10 mg Cyanocobalamin 2.5 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "sourceNumber": "40",
        "sourceRecordId": "source-0040"
      }
    ],
    "sources": [
      {
        "recordId": "source-0022",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "number": "22"
      },
      {
        "recordId": "source-0040",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "number": "40"
      }
    ]
  },
  {
    "id": "p-add82b3049d6",
    "name": "Doxylamine Succinate & Pyridoxine Hydrochloride & Folic Acid Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "20 mg + 20 mg + 5 mg",
      "10 mg + 10 mg + 2.5 mg"
    ],
    "composition": "Each Gastro Resistant Tablet Contains: Doxylamine Succinate U.S.P. 20 mg Pyridoxine Hydrochloride I.P. 20 mg Folic Acid I.P. 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Doxylamine Succinate",
      "Pyridoxine Hydrochloride",
      "Folic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Doxylamine Succinate, Pyridoxine H Cl&Folic Acid Tablets",
      "Doxylamine Succinate, Pyridoxine Hydrochloride&Folic Acid Tablets",
      "Brandname-Toxicon Doxylamine Succinate ,Pyridoxine Hydrochloride&Folic Acid Tablets"
    ],
    "variants": [
      {
        "label": "Gastro-resistant",
        "composition": "Doxylamine Succinate — 20 mg; Pyridoxine Hydrochloride — 20 mg; Folic Acid — 5 mg",
        "sourceComposition": "Each Gastro Resistant Tablet Contains: Doxylamine Succinate U.S.P. 20 mg Pyridoxine Hydrochloride I.P. 20 mg Folic Acid I.P. 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "sourceNumber": "96",
        "sourceRecordId": "source-0192"
      },
      {
        "label": "Enteric coated",
        "composition": "Doxylamine Succinate — 10 mg; Pyridoxine Hydrochloride — 10 mg; Folic Acid — 2.5 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Doxylamine Succinate U.S.P. 10 mg Pyridoxine Hydrochloride I.P. 10 mg Folic Acid I.P. 2.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 54,
        "sourceNumber": "336",
        "sourceRecordId": "source-0432"
      }
    ],
    "sources": [
      {
        "recordId": "source-0192",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "number": "96"
      },
      {
        "recordId": "source-0432",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 54,
        "number": "336"
      },
      {
        "recordId": "source-0552",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 73,
        "number": "456"
      }
    ]
  },
  {
    "id": "p-c01604d16aa7",
    "name": "Doxylamine Succinate & Pyridoxine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg + 10 mg",
      "20 mg + 20 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains: Doxylamine Succinate U.S.P. 10 mg Pyridoxine Hydrochloride I.P. 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Doxylamine Succinate",
      "Pyridoxine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Doxylamine Succinate&Pyridoxine Hydrochloride Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Doxylamine Succinate — 10 mg; Pyridoxine Hydrochloride — 10 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Doxylamine Succinate U.S.P. 10 mg Pyridoxine Hydrochloride I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "sourceNumber": "82",
        "sourceRecordId": "source-0178"
      },
      {
        "label": "Enteric coated",
        "composition": "Doxylamine Succinate — 20 mg; Pyridoxine Hydrochloride — 20 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains:: Doxylamine Succinate U.S.P. 20 mg Pyridoxine Hydrochloride I.P. 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "sourceNumber": "83",
        "sourceRecordId": "source-0179"
      }
    ],
    "sources": [
      {
        "recordId": "source-0178",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "number": "82"
      },
      {
        "recordId": "source-0179",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "number": "83"
      }
    ]
  },
  {
    "id": "p-76b419785586",
    "name": "Doxylamine Succinate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "25 mg"
    ],
    "composition": "Each Uncoated Tablets Contains : Doxylamine Succinate USP 25 mg Excipients q.s.",
    "ingredients": [
      "Doxylamine Succinate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Doxylamine Succinate Tablets USP 25 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Doxylamine Succinate — 25 mg",
        "sourceComposition": "Each Uncoated Tablets Contains : Doxylamine Succinate USP 25 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "sourceNumber": "77",
        "sourceRecordId": "source-0677"
      }
    ],
    "sources": [
      {
        "recordId": "source-0677",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "number": "77"
      }
    ]
  },
  {
    "id": "p-2bd29ce726f8",
    "name": "Drospirenone & Ethinylestradiol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "3 mg + 0.02 mg",
      "3 mg + 0.03 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Drospirenone IP 3 mg Ethinylestradiol IP 0.02 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Drospirenone",
      "Ethinylestradiol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Drospirenone&Ethinylestradiol Tablets",
      "Drospirenone&Ethinylestradiol Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Drospirenone — 3 mg; Ethinylestradiol — 0.02 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Drospirenone IP 3 mg Ethinylestradiol IP 0.02 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "sourceNumber": "34",
        "sourceRecordId": "source-0634"
      },
      {
        "label": "Standard formulation",
        "composition": "Drospirenone — 3 mg; Ethinylestradiol — 0.03 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Drospirenone IP 3 mg Ethinylestradiol IP 0.03 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "sourceNumber": "46",
        "sourceRecordId": "source-0646"
      }
    ],
    "sources": [
      {
        "recordId": "source-0634",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "number": "34"
      },
      {
        "recordId": "source-0646",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "number": "46"
      }
    ]
  },
  {
    "id": "p-e574c5c3094a",
    "name": "Drotaverine Hydrochloride & Mefenamic Acid Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "80 mg + 250 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Drotaverine Hydrochloride IP 80 mg Mefenamic Acid IP 250 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Drotaverine Hydrochloride",
      "Mefenamic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Drotaverine Hydrochloride &Mefenamic Acid Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Drotaverine Hydrochloride — 80 mg; Mefenamic Acid — 250 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Drotaverine Hydrochloride IP 80 mg Mefenamic Acid IP 250 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "sourceNumber": "18",
        "sourceRecordId": "source-0114"
      }
    ],
    "sources": [
      {
        "recordId": "source-0114",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "number": "18"
      }
    ]
  },
  {
    "id": "p-c5631db50a16",
    "name": "Duloxetine Hydrochloride Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg",
      "20 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains: Duloxetine Hydrochloride Equivalentto Duloxetine I.P. 40 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Duloxetine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Duloxetine Hydrochloride Gastro-Resistant Tablets I.P.",
      "Duloxetine Gastro-Resistant Tablets IP 20 mg"
    ],
    "variants": [
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Duloxetine Hydrochloride — 40 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Duloxetine Hydrochloride Equivalentto Duloxetine I.P. 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "sourceNumber": "49",
        "sourceRecordId": "source-0145"
      },
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Duloxetine Hydrochloride — 20 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Duloxetine Hydrochloride Equivalentto Duloxetine IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "sourceNumber": "345",
        "sourceRecordId": "source-0441"
      }
    ],
    "sources": [
      {
        "recordId": "source-0145",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "number": "49"
      },
      {
        "recordId": "source-0441",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "345"
      }
    ]
  },
  {
    "id": "p-e71faa98e5d9",
    "name": "Dutasteride Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "0.5 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains : Dutasteride IP 0.5 mg Excipients q.s. Approved Colour Used in empty capsuleshells",
    "ingredients": [
      "Dutasteride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Dutasteride Capsules IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dutasteride — 0.5 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains : Dutasteride IP 0.5 mg Excipients q.s. Approved Colour Used in empty capsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "sourceNumber": "479",
        "sourceRecordId": "source-0575"
      }
    ],
    "sources": [
      {
        "recordId": "source-0575",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "number": "479"
      }
    ]
  },
  {
    "id": "p-3d59aa0aba47",
    "name": "Dutasteride Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "0.5 mg"
    ],
    "composition": "Dutasteride 0.5 mg",
    "ingredients": [
      "Dutasteride"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Dutasteride 0.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dutasteride — 0.5 mg",
        "sourceComposition": "Dutasteride 0.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "49",
        "sourceRecordId": "source-0730"
      }
    ],
    "sources": [
      {
        "recordId": "source-0730",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "49"
      }
    ]
  },
  {
    "id": "p-b1917d41c154",
    "name": "Dydrogesterone Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Dydrogesterone I.P. 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Dydrogesterone"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Dydrogesterone Tablets I.P.",
      "Dydrogesterone Tablets IP 10 mg",
      "Dydrogesterone Tablets USP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Dydrogesterone — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dydrogesterone I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "sourceNumber": "18",
        "sourceRecordId": "source-0618"
      },
      {
        "label": "Standard formulation",
        "composition": "Dydrogesterone — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Dydrogesterone IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "sourceNumber": "72",
        "sourceRecordId": "source-0672"
      }
    ],
    "sources": [
      {
        "recordId": "source-0618",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "number": "18"
      },
      {
        "recordId": "source-0635",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "number": "35"
      },
      {
        "recordId": "source-0672",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "number": "72"
      }
    ]
  },
  {
    "id": "p-741839602129",
    "name": "Ebastine Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Ebastine I.P. 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ebastine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ebastine Tablets I.P.10 mg",
      "Ebastine Tablets I.P.20 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ebastine — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ebastine I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "sourceNumber": "52",
        "sourceRecordId": "source-0148"
      },
      {
        "label": "Standard formulation",
        "composition": "Ebastine — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ebastine I.P. 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "sourceNumber": "53",
        "sourceRecordId": "source-0149"
      }
    ],
    "sources": [
      {
        "recordId": "source-0148",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "number": "52"
      },
      {
        "recordId": "source-0149",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "number": "53"
      }
    ]
  },
  {
    "id": "p-fed789123621",
    "name": "Empagliflozin & Metformin Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "12.5 mg + 500 mg",
      "12.5 mg + 1000 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Empagliflozin 12.5 mg Metformin Hydrochloride IP 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Empagliflozin",
      "Metformin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Empagliflozin and Metformin Hydrochloride Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Empagliflozin — 12.5 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Empagliflozin 12.5 mg Metformin Hydrochloride IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "sourceNumber": "463",
        "sourceRecordId": "source-0559"
      },
      {
        "label": "Standard formulation",
        "composition": "Empagliflozin — 12.5 mg; Metformin Hydrochloride — 1000 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Empagliflozin 12.5 mg Metformin Hydrochloride IP 1000 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "sourceNumber": "464",
        "sourceRecordId": "source-0560"
      }
    ],
    "sources": [
      {
        "recordId": "source-0559",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "number": "463"
      },
      {
        "recordId": "source-0560",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "number": "464"
      }
    ]
  },
  {
    "id": "p-abc22316ed24",
    "name": "Empagliflozin Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg",
      "25 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Empagliflozin IH 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Empagliflozin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Empagliflozin Tablets10 mg",
      "Empagliflozin Tablets25 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Empagliflozin — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Empagliflozin IH 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "sourceNumber": "423",
        "sourceRecordId": "source-0519"
      },
      {
        "label": "Standard formulation",
        "composition": "Empagliflozin — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Empagliflozin IH 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "sourceNumber": "424",
        "sourceRecordId": "source-0520"
      }
    ],
    "sources": [
      {
        "recordId": "source-0519",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "number": "423"
      },
      {
        "recordId": "source-0520",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "number": "424"
      }
    ]
  },
  {
    "id": "p-ac851b4fada7",
    "name": "Enteric Coated Granules of Omeprazole Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "20 mg"
    ],
    "composition": "Enteric Coated Granules of Omeprazole Eq. to Omeprazole 20 mg",
    "ingredients": [
      "Enteric Coated Granules of Omeprazole"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Enteric Coated Granules of Omeprazole Eq. to Omeprazole 20 mg"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Enteric Coated Granules of Omeprazole — 20 mg",
        "sourceComposition": "Enteric Coated Granules of Omeprazole Eq. to Omeprazole 20 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "29",
        "sourceRecordId": "source-0796"
      }
    ],
    "sources": [
      {
        "recordId": "source-0796",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "29"
      }
    ]
  },
  {
    "id": "p-6ff40c49728e",
    "name": "Esomeprazole & Itopride Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "40 mg + 150 mg"
    ],
    "composition": "Esomeprazole 40 mg, (As Enteric Coated Pellets), Itopride 150 mg (As Sustained Release Pellets)",
    "ingredients": [
      "Esomeprazole",
      "Itopride"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Esomeprazole 40 mg, (As Enteric Coated Pellets), Itopride 150 mg (As Sustained Release Pellets)"
    ],
    "variants": [
      {
        "label": "Sustained release, Enteric coated",
        "composition": "Esomeprazole — 40 mg; Itopride — 150 mg",
        "sourceComposition": "Esomeprazole 40 mg, (As Enteric Coated Pellets), Itopride 150 mg (As Sustained Release Pellets)",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "21",
        "sourceRecordId": "source-0788"
      }
    ],
    "sources": [
      {
        "recordId": "source-0788",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "21"
      }
    ]
  },
  {
    "id": "p-6a431dd84def",
    "name": "Esomeprazole Magnesium & Domperidone Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 30 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Esomeprazole Magnesium Equivalentto Esomeprazole (asentericcoatedpellets) IP 40 mg Domperidone (Asprolonged Releasepellets) IP 30 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
    "ingredients": [
      "Esomeprazole Magnesium",
      "Domperidone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Esomeprazole Gastro- Resistantand Domperidone Prolonged Capsules",
      "Esomeprazole Magnesium Trihydrate eq.to Esomeprazole 40 mg (as Enteric Coated Pellets) Domperidone 30 mg (as sustain Release Pellets)"
    ],
    "variants": [
      {
        "label": "Prolonged release, Enteric coated, Gastro-resistant",
        "composition": "Esomeprazole Magnesium — 40 mg; Domperidone — 30 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Esomeprazole Magnesium Equivalentto Esomeprazole (asentericcoatedpellets) IP 40 mg Domperidone (Asprolonged Releasepellets) IP 30 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "sourceNumber": "151",
        "sourceRecordId": "source-0247"
      },
      {
        "label": "Enteric coated",
        "composition": "Esomeprazole Magnesium Trihydrate — 40 mg; Domperidone — 30 mg",
        "sourceComposition": "Esomeprazole Magnesium Trihydrate eq.to Esomeprazole 40 mg (as Enteric Coated Pellets) Domperidone 30 mg (as sustain Release Pellets)",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "6",
        "sourceRecordId": "source-0773"
      }
    ],
    "sources": [
      {
        "recordId": "source-0247",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "number": "151"
      },
      {
        "recordId": "source-0773",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "6"
      }
    ]
  },
  {
    "id": "p-9e29e03bb0af",
    "name": "Esomeprazole Magnesium Trihydrate Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains Esomeprazole Magnesium Trihydrate Equivalentto Esomeprazole I.P. 40 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Esomeprazole Magnesium Trihydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Esomeprazole Gastro- Resistant Tablets I.P. 40 mg"
    ],
    "variants": [
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Esomeprazole Magnesium Trihydrate — 40 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains Esomeprazole Magnesium Trihydrate Equivalentto Esomeprazole I.P. 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "sourceNumber": "60",
        "sourceRecordId": "source-0156"
      }
    ],
    "sources": [
      {
        "recordId": "source-0156",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "number": "60"
      }
    ]
  },
  {
    "id": "p-6f1fd8a5f0b4",
    "name": "Estradiol & Dydrogesterone Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2 mg + 10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Estradiol (as Hemihydrate) IP 2 mg Dydrogesterone IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Estradiol",
      "Dydrogesterone"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Estradiol and Dydrogesterone Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Estradiol — 2 mg; Dydrogesterone — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Estradiol (as Hemihydrate) IP 2 mg Dydrogesterone IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "sourceNumber": "79",
        "sourceRecordId": "source-0679"
      }
    ],
    "sources": [
      {
        "recordId": "source-0679",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "number": "79"
      }
    ]
  },
  {
    "id": "p-b62d677f13b1",
    "name": "Estradiol Valerate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "2 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Estradiol Valerate BP 2 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Estradiol Valerate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Estradiol Valerate Tablet Tablets 2 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Estradiol Valerate — 2 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Estradiol Valerate BP 2 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "sourceNumber": "37",
        "sourceRecordId": "source-0637"
      }
    ],
    "sources": [
      {
        "recordId": "source-0637",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "number": "37"
      }
    ]
  },
  {
    "id": "p-6a9574d020c9",
    "name": "Etamsylate & Tranexamic Acid Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "250 mg + 500 mg",
      "250 mg + 250 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Etamsylate BP 250 mg Tranexamic Acid IP 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Etamsylate",
      "Tranexamic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Etamsylate&Tranexamic Acid Tablets",
      "Tranexamic Acid&Etamsylate Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Etamsylate — 250 mg; Tranexamic Acid — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Etamsylate BP 250 mg Tranexamic Acid IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "sourceNumber": "06",
        "sourceRecordId": "source-0102"
      },
      {
        "label": "Standard formulation",
        "composition": "Tranexamic Acid — 250 mg; Etamsylate — 250 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tranexamic Acid I.P. 250 mg Etamsylate B.P. 250 mg Excipients Colour:Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "sourceNumber": "115",
        "sourceRecordId": "source-0211"
      }
    ],
    "sources": [
      {
        "recordId": "source-0102",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "number": "06"
      },
      {
        "recordId": "source-0211",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "number": "115"
      }
    ]
  },
  {
    "id": "p-8e1f9867dae2",
    "name": "Ethinylestradiol & Levonorgestrel & Ferrous Fumarate Combipack",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Combipack",
    "phRef": null,
    "availableStrengths": [
      "0.03 mg + 0.15 mg + 75 mg / 24.375 mg"
    ],
    "composition": "A)Each Sugar Coated Tablet Contains: Ethinylestradiol IP 0.03 mg Levonorgestrel IP 0.15 mg Excipients q.s. b)Each Sugar Coated Tablet Contains: Ferrous Fumarate Equivalentto Ferrous Iron IP 75 mg 24.375 mg Excipents q.s. Approved Colour Used",
    "ingredients": [
      "Ethinylestradiol",
      "Levonorgestrel",
      "Ferrous Fumarate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Combipackof21Tabletsof (Ethinylestradiol&Levonorgestreltablets IP) and 7 Tabletsof Ferrous Fumarate",
      "Combipack of21 Tabletsof (Ethinylestradiol&Levonorgestreltablets IP) and 7 Tabletsof Ferrous Fumarate IP",
      "Combipackof21Tabletsof (Ethinylestradiol&Levonorgestreltablets BP)and 7 Tablets of Ferrous Fumarate Tablets BP (For Exportonly)",
      "Combipack of21 Tabletsof (Ethinylestradiol&Levonorgestreltablets BP) and 7 Tabletsof Ferrous Fumarate Tablets BP Brand Name-Usecre"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ethinylestradiol — 0.03 mg; Levonorgestrel — 0.15 mg; Ferrous Fumarate — 75 mg / 24.375 mg",
        "sourceComposition": "A)Each Sugar Coated Tablet Contains: Ethinylestradiol IP 0.03 mg Levonorgestrel IP 0.15 mg Excipients q.s. b)Each Sugar Coated Tablet Contains: Ferrous Fumarate Equivalentto Ferrous Iron IP 75 mg 24.375 mg Excipents q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "sourceNumber": "41",
        "sourceRecordId": "source-0641"
      }
    ],
    "sources": [
      {
        "recordId": "source-0641",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "number": "41"
      },
      {
        "recordId": "source-0650",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "number": "50"
      },
      {
        "recordId": "source-0655",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 8,
        "number": "55"
      },
      {
        "recordId": "source-0667",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "number": "67"
      }
    ]
  },
  {
    "id": "p-406b1bcfad99",
    "name": "Ethinylestradiol & Norgestrel & Ferrous Fumarate Combipack",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Combipack",
    "phRef": "IP",
    "availableStrengths": [
      "0.03 mg + 0.30 mg + 75 mg / 24.375 mg"
    ],
    "composition": "A)Each Sugar Coated Tablet Contains: Ethinylestradiol IP 0.03 mg Norgestrel IP 0.30 mg Excipients q.s. Each Sugar Coated Tablet Contains: Ferrous Fumarate Equivalentto Ferrous Iron IP 75 mg 24.375 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ethinylestradiol",
      "Norgestrel",
      "Ferrous Fumarate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Combipackof21Tabletsof (Ethinylestradiol&Norgestrel Tablets IP)and7Tabletsof Ferrous Fumarate"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ethinylestradiol — 0.03 mg; Norgestrel — 0.30 mg; Ferrous Fumarate — 75 mg / 24.375 mg",
        "sourceComposition": "A)Each Sugar Coated Tablet Contains: Ethinylestradiol IP 0.03 mg Norgestrel IP 0.30 mg Excipients q.s. Each Sugar Coated Tablet Contains: Ferrous Fumarate Equivalentto Ferrous Iron IP 75 mg 24.375 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "sourceNumber": "42",
        "sourceRecordId": "source-0642"
      }
    ],
    "sources": [
      {
        "recordId": "source-0642",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "number": "42"
      }
    ]
  },
  {
    "id": "p-c355ff1b59b6",
    "name": "Ethinylestradiol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "0.01 mg",
      "0.05 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Ethinylestradiol IP 0.01 mg Excipients q.s.",
    "ingredients": [
      "Ethinylestradiol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Ethinylestradiol Tablets IP 0.01 mg",
      "Ethinylestradiol Tablets IP 0.05 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ethinylestradiol — 0.01 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Ethinylestradiol IP 0.01 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "sourceNumber": "33",
        "sourceRecordId": "source-0633"
      },
      {
        "label": "Standard formulation",
        "composition": "Ethinylestradiol — 0.05 mg",
        "sourceComposition": "Each Uncoated Tablet Contains Ethinylestradiol IP 0.05 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "sourceNumber": "45",
        "sourceRecordId": "source-0645"
      }
    ],
    "sources": [
      {
        "recordId": "source-0633",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "number": "33"
      },
      {
        "recordId": "source-0645",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "number": "45"
      }
    ]
  },
  {
    "id": "p-6cab96a2557b",
    "name": "Etodolac & Thiocolchicoside Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "400 mg + 4 mg",
      "300 mg + 4 mg",
      "300 mg + 8 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Etodolac IP 400 mg Thiocolchicoside IP 4 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Etodolac",
      "Thiocolchicoside"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Etodolac &Thiocolchicoside Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Etodolac — 400 mg; Thiocolchicoside — 4 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Etodolac IP 400 mg Thiocolchicoside IP 4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "sourceNumber": "01",
        "sourceRecordId": "source-0097"
      },
      {
        "label": "Standard formulation",
        "composition": "Etodolac — 300 mg; Thiocolchicoside — 4 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Etodolac IP 300 mg Thiocolchicoside IP 4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "sourceNumber": "219",
        "sourceRecordId": "source-0315"
      },
      {
        "label": "Standard formulation",
        "composition": "Etodolac — 300 mg; Thiocolchicoside — 8 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Etodolac IP 300 mg Thiocolchicoside IP 8 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "sourceNumber": "220",
        "sourceRecordId": "source-0316"
      }
    ],
    "sources": [
      {
        "recordId": "source-0097",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "number": "01"
      },
      {
        "recordId": "source-0315",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "number": "219"
      },
      {
        "recordId": "source-0316",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "number": "220"
      }
    ]
  },
  {
    "id": "p-85d1b56cf7ff",
    "name": "Etodolac Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "600 mg"
    ],
    "composition": "Each Film Coated Extended Release Tablet Contains: Etodolac IP 600 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Etodolac"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Etodolac Extended Release Tablets IP"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Etodolac — 600 mg",
        "sourceComposition": "Each Film Coated Extended Release Tablet Contains: Etodolac IP 600 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "sourceNumber": "200",
        "sourceRecordId": "source-0296"
      }
    ],
    "sources": [
      {
        "recordId": "source-0296",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "number": "200"
      }
    ]
  },
  {
    "id": "p-14cc9b0df798",
    "name": "Etoricoxib & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "60 mg + 325 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Etoricoxib IP 60 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Etoricoxib",
      "Paracetamol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Etoricoxib&Paracetamol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Etoricoxib — 60 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Etoricoxib IP 60 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "sourceNumber": "259",
        "sourceRecordId": "source-0355"
      }
    ],
    "sources": [
      {
        "recordId": "source-0355",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "number": "259"
      }
    ]
  },
  {
    "id": "p-7f72cd3bfcd9",
    "name": "Etoricoxib & Thiocolchicoside Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "60 mg + 4 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Etoricoxib IP 60 mg Thiocolchicoside 4 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Etoricoxib",
      "Thiocolchicoside"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Etoricoxib&Thiocolchicoside Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Etoricoxib — 60 mg; Thiocolchicoside — 4 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Etoricoxib IP 60 mg Thiocolchicoside 4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "sourceNumber": "328",
        "sourceRecordId": "source-0424"
      }
    ],
    "sources": [
      {
        "recordId": "source-0424",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "number": "328"
      }
    ]
  },
  {
    "id": "p-acdc3ab46caa",
    "name": "Etoricoxib Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "120 mg",
      "60 mg",
      "90 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Etoricoxib I.P. 120 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Etoricoxib"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Etoricoxib Tablet I.P.120 mg",
      "Etoricoxib Tablets IP 60 mg",
      "Etoricoxib Tablets IP 90 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Etoricoxib — 120 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Etoricoxib I.P. 120 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "sourceNumber": "59",
        "sourceRecordId": "source-0155"
      },
      {
        "label": "Standard formulation",
        "composition": "Etoricoxib — 60 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Etoricoxib IP 60 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "sourceNumber": "135",
        "sourceRecordId": "source-0231"
      },
      {
        "label": "Standard formulation",
        "composition": "Etoricoxib — 90 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Etoricoxib IP 90 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "sourceNumber": "136",
        "sourceRecordId": "source-0232"
      }
    ],
    "sources": [
      {
        "recordId": "source-0155",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "number": "59"
      },
      {
        "recordId": "source-0231",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "number": "135"
      },
      {
        "recordId": "source-0232",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "number": "136"
      }
    ]
  },
  {
    "id": "p-6aef451fcc4e",
    "name": "Evening Primrose Oil Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "composition": "Evening Primrose Oil 500 mg",
    "ingredients": [
      "Evening Primrose Oil"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Evening Primrose Oil 500 mg",
      "Evening Primrose Oil 1000 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Evening Primrose Oil — 500 mg",
        "sourceComposition": "Evening Primrose Oil 500 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "26",
        "sourceRecordId": "source-0758"
      },
      {
        "label": "Standard formulation",
        "composition": "Evening Primrose Oil — 1000 mg",
        "sourceComposition": "Evening Primrose Oil 1000 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "27",
        "sourceRecordId": "source-0759"
      }
    ],
    "sources": [
      {
        "recordId": "source-0758",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "26"
      },
      {
        "recordId": "source-0759",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "27"
      }
    ]
  },
  {
    "id": "p-cdc74a7d1577",
    "name": "Febuxostat Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "40 mg",
      "80 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Febuxostat 40 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Febuxostat"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Febuxostat Tablets40 mg",
      "Febuxostat Tablets80 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Febuxostat — 40 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Febuxostat 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "sourceNumber": "138",
        "sourceRecordId": "source-0234"
      },
      {
        "label": "Standard formulation",
        "composition": "Febuxostat — 80 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Febuxostat 80 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "sourceNumber": "139",
        "sourceRecordId": "source-0235"
      }
    ],
    "sources": [
      {
        "recordId": "source-0234",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "number": "138"
      },
      {
        "recordId": "source-0235",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "number": "139"
      }
    ]
  },
  {
    "id": "p-05a66a296ac7",
    "name": "Fenofibrate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "145 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Fenofibrate IP 145 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Fenofibrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Fenofibrate Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Fenofibrate — 145 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Fenofibrate IP 145 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "sourceNumber": "361",
        "sourceRecordId": "source-0457"
      }
    ],
    "sources": [
      {
        "recordId": "source-0457",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "number": "361"
      }
    ]
  },
  {
    "id": "p-dc1a9302fad4",
    "name": "Ferric Pyrophosphate & Ascorbic Acid & Cyanocobalamin & Folic Acid Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "30 mg + 35 mg + 0.5 mcg + 570 mcg",
      "30 mg + 50 mg + 0.75 mcg + 300 mcg",
      "30 mg + 50 mg + 0.75 mcg + 200 mcg"
    ],
    "composition": "Ferric Pyrophosphate (Liposomal Grade) 30 mg Ascorbic Acid 35 mg Cyanocobalamin 0.5 mcg Folic Acid 570 mcg",
    "ingredients": [
      "Ferric Pyrophosphate",
      "Ascorbic Acid",
      "Cyanocobalamin",
      "Folic Acid"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Ferric Pyrophosphate (Liposomal Grade) 30 mg Ascorbic Acid 35 mg Cyanocobalamin 0.5 mcg Folic Acid 570 mcg",
      "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated(vitaminc) 35 mg Cyanocobalamin 0.5 mcg Folic Acid 570 mcg",
      "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated(vitaminc) 50 mg Cyanocobalamin 0.75 mcg Folic Acid 300 mcg",
      "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated(vitaminc) 50 mg Cyanocobalamin 0.75 mcg Folic Acid 200 mcg",
      "Ferric Pyrophosphate 30 mg Ascorbic Acid 35 mg Cyanocobalamin 0.5 mcg Folic Acid 570 mcg",
      "Ferric Pyrophosphate 30 mg Ascorbic Acid 50 mg Cyanocobalamin 0.75 mcg Folic Acid 300 mcg",
      "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated 35 mg Cyanocobalamin 0.5 mcg Folic Acid 570 mcg",
      "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated 50 mg Cyanocobalamin 0.75 mcg Folic Acid 300 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ferric Pyrophosphate — 30 mg; Ascorbic Acid — 35 mg; Cyanocobalamin — 0.5 mcg; Folic Acid — 570 mcg",
        "sourceComposition": "Ferric Pyrophosphate (Liposomal Grade) 30 mg Ascorbic Acid 35 mg Cyanocobalamin 0.5 mcg Folic Acid 570 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "sourceNumber": "12",
        "sourceRecordId": "source-0012"
      },
      {
        "label": "Standard formulation",
        "composition": "Ferric Pyrophosphate — 30 mg; Ascorbic Acid Coated — 35 mg; Cyanocobalamin — 0.5 mcg; Folic Acid — 570 mcg",
        "sourceComposition": "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated(vitaminc) 35 mg Cyanocobalamin 0.5 mcg Folic Acid 570 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "sourceNumber": "15",
        "sourceRecordId": "source-0015"
      },
      {
        "label": "Standard formulation",
        "composition": "Ferric Pyrophosphate — 30 mg; Ascorbic Acid Coated — 50 mg; Cyanocobalamin — 0.75 mcg; Folic Acid — 300 mcg",
        "sourceComposition": "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated(vitaminc) 50 mg Cyanocobalamin 0.75 mcg Folic Acid 300 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "sourceNumber": "16",
        "sourceRecordId": "source-0016"
      },
      {
        "label": "Standard formulation",
        "composition": "Ferric Pyrophosphate — 30 mg; Ascorbic Acid Coated — 50 mg; Cyanocobalamin — 0.75 mcg; Folic Acid — 200 mcg",
        "sourceComposition": "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated(vitaminc) 50 mg Cyanocobalamin 0.75 mcg Folic Acid 200 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "sourceNumber": "17",
        "sourceRecordId": "source-0017"
      },
      {
        "label": "Standard formulation",
        "composition": "Ferric Pyrophosphate — 30 mg; Ascorbic Acid — 50 mg; Cyanocobalamin — 0.75 mcg; Folic Acid — 300 mcg",
        "sourceComposition": "Ferric Pyrophosphate 30 mg Ascorbic Acid 50 mg Cyanocobalamin 0.75 mcg Folic Acid 300 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "sourceNumber": "41",
        "sourceRecordId": "source-0041"
      }
    ],
    "sources": [
      {
        "recordId": "source-0012",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "number": "12"
      },
      {
        "recordId": "source-0015",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "number": "15"
      },
      {
        "recordId": "source-0016",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "number": "16"
      },
      {
        "recordId": "source-0017",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "number": "17"
      },
      {
        "recordId": "source-0033",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 6,
        "number": "33"
      },
      {
        "recordId": "source-0041",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "number": "41"
      },
      {
        "recordId": "source-0042",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "number": "42"
      },
      {
        "recordId": "source-0043",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "number": "43"
      },
      {
        "recordId": "source-0057",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "number": "57"
      },
      {
        "recordId": "source-0063",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "number": "63"
      },
      {
        "recordId": "source-0087",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "number": "87"
      }
    ]
  },
  {
    "id": "p-5eeaec248d49",
    "name": "Ferric Pyrophosphate Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "30 mg"
    ],
    "composition": "Ferric Pyrophosphate 30 mg",
    "ingredients": [
      "Ferric Pyrophosphate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Ferric Pyrophosphate 30 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ferric Pyrophosphate — 30 mg",
        "sourceComposition": "Ferric Pyrophosphate 30 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "sourceNumber": "44",
        "sourceRecordId": "source-0044"
      }
    ],
    "sources": [
      {
        "recordId": "source-0044",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "number": "44"
      }
    ]
  },
  {
    "id": "p-40a0b97b626a",
    "name": "Ferric Pyrophosphate, Ascorbic Acid Coated, Cyanocobalamin & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Ferric Pyrophosphate (Liposomal grade ) 15 mg Ascorbic Acid Coated(Vitamin C) 35 mg Cyanocobalamin 2.5 mcg Folic Acid 570 mcg Lactoferrin 50 mg",
    "ingredients": [
      "Ferric Pyrophosphate",
      "Ascorbic Acid Coated",
      "Cyanocobalamin",
      "Folic Acid",
      "Lactoferrin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Ferric Pyrophosphate (Liposomal grade ) 15 mg Ascorbic Acid Coated(Vitamin C) 35 mg Cyanocobalamin 2.5 mcg Folic Acid 570 mcg Lactoferrin 50 mg",
      "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated 35 mg Cyanocobalamin 2.5 mcg Folic Acid 570 mcg Lactoferrin30% 10 mg",
      "Ferric Pyrophosphate 30 mg Ascorbic Acid 35 mg Cyanocobalamin 2.5 mcg Folic Acid 570 mcg Lactoferrin 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ferric Pyrophosphate — 15 mg; Ascorbic Acid Coated — 35 mg; Cyanocobalamin — 2.5 mcg; Folic Acid — 570 mcg; Lactoferrin — 50 mg",
        "sourceComposition": "Ferric Pyrophosphate (Liposomal grade ) 15 mg Ascorbic Acid Coated(Vitamin C) 35 mg Cyanocobalamin 2.5 mcg Folic Acid 570 mcg Lactoferrin 50 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "sourceNumber": "6",
        "sourceRecordId": "source-0006"
      },
      {
        "label": "Standard formulation",
        "composition": "Ferric Pyrophosphate — 30 mg; Ascorbic Acid Coated — 35 mg; Cyanocobalamin — 2.5 mcg; Folic Acid — 570 mcg; Lactoferrin — 10 mg",
        "sourceComposition": "Ferric Pyrophosphate 30 mg Ascorbic Acid Coated 35 mg Cyanocobalamin 2.5 mcg Folic Acid 570 mcg Lactoferrin30% 10 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "sourceNumber": "64",
        "sourceRecordId": "source-0064"
      },
      {
        "label": "Standard formulation",
        "composition": "Ferric Pyrophosphate — 30 mg; Ascorbic Acid — 35 mg; Cyanocobalamin — 2.5 mcg; Folic Acid — 570 mcg; Lactoferrin — 10 mg",
        "sourceComposition": "Ferric Pyrophosphate 30 mg Ascorbic Acid 35 mg Cyanocobalamin 2.5 mcg Folic Acid 570 mcg Lactoferrin 10 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "sourceNumber": "82",
        "sourceRecordId": "source-0082"
      }
    ],
    "sources": [
      {
        "recordId": "source-0006",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "number": "6"
      },
      {
        "recordId": "source-0064",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "number": "64"
      },
      {
        "recordId": "source-0082",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "number": "82"
      }
    ]
  },
  {
    "id": "p-a1db2bbb8550",
    "name": "Ferrous Ascorbate & Folic Acid & Cyanocobalamin & Zinc Sulphate Monohydrate Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 1.5 mg + 15 mcg + 22.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Ferrous Ascorbate IP 100 mg Folic Acid IP 1.5 mg Cyanocobalamin IP 15 mcg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 22.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ferrous Ascorbate",
      "Folic Acid",
      "Cyanocobalamin",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ferrous Ascorbate,Folic Acid,Cyanocobalamin& Zinc Tablets",
      "Ferrous Ascorbate,Folic Acid,Cyanocobalamin&Zinc Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ferrous Ascorbate — 100 mg; Folic Acid — 1.5 mg; Cyanocobalamin — 15 mcg; Zinc Sulphate Monohydrate — 22.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ferrous Ascorbate IP 100 mg Folic Acid IP 1.5 mg Cyanocobalamin IP 15 mcg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 22.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "sourceNumber": "189",
        "sourceRecordId": "source-0285"
      }
    ],
    "sources": [
      {
        "recordId": "source-0285",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "number": "189"
      },
      {
        "recordId": "source-0429",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 54,
        "number": "333"
      }
    ]
  },
  {
    "id": "p-8cb22bee38b8",
    "name": "Ferrous Ascorbate & Folic Acid & Methylcobalamin & Zinc Sulphate Monohydrate Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 1.5 mg + 1.5 mg + 22.5 mg",
      "100 mg + 1.5 mg + 1500 mcg + 22.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Ferrous Ascorbate Equivalentto Elemental Iron IP 100 mg Folic Acid IP 1.5 mg Methylcobalamin IP 1.5 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 22.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ferrous Ascorbate",
      "Folic Acid",
      "Methylcobalamin",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin, Iron,Folic Acid&Zinc Tablets",
      "Methylcobalamin 1500 mcg, Folic Acid 1.5 mg, Ferrous Ascorbate eq.to Elemental Iron 100 mg, Zinc Sulphate Monohydrate eq. to Elemental Zinc 22.5 mg",
      "Ferrous Ascorbate Eq.to Elemental Iron 100 mg, Folic Acid 1.5 mg, Methylcobalamin 1.5 mg, Zinc Sulphate Monohydrate Eq.to Elemental Zinc 22.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ferrous Ascorbate — 100 mg; Folic Acid — 1.5 mg; Methylcobalamin — 1.5 mg; Zinc Sulphate Monohydrate — 22.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ferrous Ascorbate Equivalentto Elemental Iron IP 100 mg Folic Acid IP 1.5 mg Methylcobalamin IP 1.5 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 22.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 37,
        "sourceNumber": "234",
        "sourceRecordId": "source-0330"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Folic Acid — 1.5 mg; Ferrous Ascorbate — 100 mg; Zinc Sulphate Monohydrate — 22.5 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Folic Acid 1.5 mg, Ferrous Ascorbate eq.to Elemental Iron 100 mg, Zinc Sulphate Monohydrate eq. to Elemental Zinc 22.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "3",
        "sourceRecordId": "source-0805"
      }
    ],
    "sources": [
      {
        "recordId": "source-0330",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 37,
        "number": "234"
      },
      {
        "recordId": "source-0805",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "3"
      },
      {
        "recordId": "source-0811",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "9"
      },
      {
        "recordId": "source-0814",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "12"
      }
    ]
  },
  {
    "id": "p-e1f237602a0a",
    "name": "Ferrous Ascorbate & Folic Acid & Zinc Sulphate Monohydrate Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 1.5 mg + 22.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Ferrous Ascorbate Equivalenttoelemental Iron IP 100 mg Folic Acid IP 1.5 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 22.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ferrous Ascorbate",
      "Folic Acid",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ferrous Ascorbate,Folic Acid & Zinc Tablets",
      "Ferrous Ascorbate eq. to Elemental Iron 100 mg, Folic Acid 1.5 mg, Zinc Sulphate Monohydrate eq. to Elemental Zinc 22.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ferrous Ascorbate — 100 mg; Folic Acid — 1.5 mg; Zinc Sulphate Monohydrate — 22.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ferrous Ascorbate Equivalenttoelemental Iron IP 100 mg Folic Acid IP 1.5 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 22.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 44,
        "sourceNumber": "279",
        "sourceRecordId": "source-0375"
      }
    ],
    "sources": [
      {
        "recordId": "source-0375",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 44,
        "number": "279"
      },
      {
        "recordId": "source-0803",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "1"
      }
    ]
  },
  {
    "id": "p-9f8e2fceeaa4",
    "name": "Ferrous Ascorbate & Folic Acid Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 1.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Ferrous Ascorbate Equivalentto Elemental Iron IP 100 mg Folic Acid IP 1.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ferrous Ascorbate",
      "Folic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ferrous Ascorbate&Folic Acid Tablets IP",
      "Ferrous Ascorbate Eq. to Elemental Iron 100 mg, Folic Acid 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ferrous Ascorbate — 100 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ferrous Ascorbate Equivalentto Elemental Iron IP 100 mg Folic Acid IP 1.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "sourceNumber": "188",
        "sourceRecordId": "source-0284"
      }
    ],
    "sources": [
      {
        "recordId": "source-0284",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "number": "188"
      },
      {
        "recordId": "source-0810",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "8"
      }
    ]
  },
  {
    "id": "p-084b4685b3e9",
    "name": "Ferrous Bisglycinate & Zinc Bis-Glycinate & Folic Acid & Methylcobalamin Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "300 mg / 60 mg + 15 mg + 1 mg + 500 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Ferrous Bisglycinate Equivalentto Elemental Iron 300 mg 60 mg Zinc Bis-Glycinate Equivalentto Elemental Zinc 15 mg Folic Acid IP 1 mg Methylcobalamin IP 500 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ferrous Bisglycinate",
      "Zinc Bis-Glycinate",
      "Folic Acid",
      "Methylcobalamin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ferrous Bisglycinate,Zinc, Folic Acid &Methylcobalamin Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ferrous Bisglycinate — 300 mg / 60 mg; Zinc Bis-Glycinate — 15 mg; Folic Acid — 1 mg; Methylcobalamin — 500 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ferrous Bisglycinate Equivalentto Elemental Iron 300 mg 60 mg Zinc Bis-Glycinate Equivalentto Elemental Zinc 15 mg Folic Acid IP 1 mg Methylcobalamin IP 500 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 6,
        "sourceNumber": "39",
        "sourceRecordId": "source-0135"
      }
    ],
    "sources": [
      {
        "recordId": "source-0135",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 6,
        "number": "39"
      }
    ]
  },
  {
    "id": "p-98a4e380b471",
    "name": "Ferrous Bisglycinate, Calcium D-Pantothenate, Folic Acid & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Ferrous Bisglycinate 200 mg Eqt Oelementaliron 40 mg Calcium D-Pantothenate 5 mg Folic Acid 570 mcg Cyanocobalamin 2.5 mcg Vitamin B12 mg D-Biotin 30 mcg Vitamin B2 3 mg Vitamin B6 2 mg Vitamin B3 5 mg",
    "ingredients": [
      "Ferrous Bisglycinate",
      "Calcium D-Pantothenate",
      "Folic Acid",
      "Cyanocobalamin",
      "Vitamin B",
      "D-Biotin",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B3"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Ferrous Bisglycinate 200 mg Eqt Oelementaliron 40 mg Calcium D-Pantothenate 5 mg Folic Acid 570 mcg Cyanocobalamin 2.5 mcg Vitamin B12 mg D-Biotin 30 mcg Vitamin B2 3 mg Vitamin B6 2 mg Vitamin B3 5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ferrous Bisglycinate — 200 mg; Calcium D-Pantothenate — 5 mg; Folic Acid — 570 mcg; Cyanocobalamin — 2.5 mcg; Vitamin B — 12 mg; D-Biotin — 30 mcg; Vitamin B2 — 3 mg; Vitamin B6 — 2 mg; Vitamin B3 — 5 mg",
        "sourceComposition": "Ferrous Bisglycinate 200 mg Eqt Oelementaliron 40 mg Calcium D-Pantothenate 5 mg Folic Acid 570 mcg Cyanocobalamin 2.5 mcg Vitamin B12 mg D-Biotin 30 mcg Vitamin B2 3 mg Vitamin B6 2 mg Vitamin B3 5 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "sourceNumber": "83",
        "sourceRecordId": "source-0083"
      }
    ],
    "sources": [
      {
        "recordId": "source-0083",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "number": "83"
      }
    ]
  },
  {
    "id": "p-3606bb1aa96a",
    "name": "Fexofenadine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "120 mg",
      "180 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Fexofenadine Hydrochloride I.P. 120 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Fexofenadine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Fexofenadine Tablets I.P."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Fexofenadine Hydrochloride — 120 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Fexofenadine Hydrochloride I.P. 120 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "sourceNumber": "97",
        "sourceRecordId": "source-0193"
      },
      {
        "label": "Standard formulation",
        "composition": "Fexofenadine Hydrochloride — 180 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Fexofenadine Hydrochloride I.P. 180 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "sourceNumber": "98",
        "sourceRecordId": "source-0194"
      }
    ],
    "sources": [
      {
        "recordId": "source-0193",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "number": "97"
      },
      {
        "recordId": "source-0194",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "number": "98"
      }
    ]
  },
  {
    "id": "p-a0aa1669f24b",
    "name": "Finasteride Tablets",
    "division": "General",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Finasteride IP 1 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Finasteride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Finasteride Tablets IP1 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Finasteride — 1 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Finasteride IP 1 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "414",
        "sourceRecordId": "source-0510"
      }
    ],
    "sources": [
      {
        "recordId": "source-0510",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "414"
      }
    ]
  },
  {
    "id": "p-e9ecafc80485",
    "name": "Flavoxate Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg"
    ],
    "composition": "Each Film Coated Tablet Contains : Flavoxate Hydrochloride IP 200 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Flavoxate Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Flavoxate Tablets IP 200 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Flavoxate Hydrochloride — 200 mg",
        "sourceComposition": "Each Film Coated Tablet Contains : Flavoxate Hydrochloride IP 200 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "sourceNumber": "491",
        "sourceRecordId": "source-0587"
      }
    ],
    "sources": [
      {
        "recordId": "source-0587",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "number": "491"
      }
    ]
  },
  {
    "id": "p-12d7f6bbbe24",
    "name": "Flavoxate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Flavoxate IP 200 mg Excipients q.s.",
    "ingredients": [
      "Flavoxate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Flavoxate Tablets IP 200 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Flavoxate — 200 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Flavoxate IP 200 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "sourceNumber": "241",
        "sourceRecordId": "source-0337"
      }
    ],
    "sources": [
      {
        "recordId": "source-0337",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "number": "241"
      }
    ]
  },
  {
    "id": "p-663a1358972b",
    "name": "Flaxseed Oil Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "composition": "Flaxseed Oil 500 mg",
    "ingredients": [
      "Flaxseed Oil"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Flaxseed Oil 500 mg",
      "Flaxseed Oil 1000 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Flaxseed Oil — 500 mg",
        "sourceComposition": "Flaxseed Oil 500 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "30",
        "sourceRecordId": "source-0762"
      },
      {
        "label": "Standard formulation",
        "composition": "Flaxseed Oil — 1000 mg",
        "sourceComposition": "Flaxseed Oil 1000 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "31",
        "sourceRecordId": "source-0763"
      }
    ],
    "sources": [
      {
        "recordId": "source-0762",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "30"
      },
      {
        "recordId": "source-0763",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "31"
      }
    ]
  },
  {
    "id": "p-ea366f394d98",
    "name": "Fluconazole Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg",
      "150 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Fluconazole I.P. 200 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Fluconazole"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Fluconazole Tablets I.P.",
      "Fluconazole Tablets IP150 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Fluconazole — 200 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Fluconazole I.P. 200 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "sourceNumber": "74",
        "sourceRecordId": "source-0170"
      },
      {
        "label": "Standard formulation",
        "composition": "Fluconazole — 150 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Fluconazole IP 150 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "sourceNumber": "123",
        "sourceRecordId": "source-0219"
      }
    ],
    "sources": [
      {
        "recordId": "source-0170",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "number": "74"
      },
      {
        "recordId": "source-0219",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "number": "123"
      }
    ]
  },
  {
    "id": "p-daf3c2b629b1",
    "name": "Flunarizine Dihydrochloride & Propranolol Hydrochloride Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg + 40 mg",
      "10 mg + 40 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains Flunarizine Dihydrochloride Equivalentto Flunarizine IP 5 mg Propranolol Hydrochloride (Assustainedreleasepellets) IP 40 mg Excipients q.s. Approved Colour Usedincapsuleshells",
    "ingredients": [
      "Flunarizine Dihydrochloride",
      "Propranolol Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Flunarizine&Propranolol Hydrochloride (SR) Capsules"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Flunarizine Dihydrochloride — 5 mg; Propranolol Hydrochloride — 40 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains Flunarizine Dihydrochloride Equivalentto Flunarizine IP 5 mg Propranolol Hydrochloride (Assustainedreleasepellets) IP 40 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "sourceNumber": "284",
        "sourceRecordId": "source-0380"
      },
      {
        "label": "Sustained release",
        "composition": "Flunarizine Dihydrochloride — 10 mg; Propranolol Hydrochloride — 40 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains Flunarizine Dihydrochloride Equivalentto Flunarizine IP 10 mg Propranolol Hydrochloride (Assustainedreleasepellets) IP 40 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "sourceNumber": "285",
        "sourceRecordId": "source-0381"
      }
    ],
    "sources": [
      {
        "recordId": "source-0380",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "number": "284"
      },
      {
        "recordId": "source-0381",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "number": "285"
      }
    ]
  },
  {
    "id": "p-d2a573dcad9e",
    "name": "Fluoxetine Hydrochloride Capsules",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Fluoxetine Hydrochloride Equivalentto Fluoxetine I.P. 20 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Fluoxetine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Fluoxetine Capsules IP 20 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Fluoxetine Hydrochloride — 20 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Fluoxetine Hydrochloride Equivalentto Fluoxetine I.P. 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "sourceNumber": "142",
        "sourceRecordId": "source-0238"
      }
    ],
    "sources": [
      {
        "recordId": "source-0238",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "number": "142"
      }
    ]
  },
  {
    "id": "p-56d4f1ccb335",
    "name": "Flupentixol Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "0.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Flupentixol Hydrochloride Equivalentto Flupentixol BP 0.5 mg Excipients q.s.",
    "ingredients": [
      "Flupentixol Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Flupentixol HCl Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Flupentixol Hydrochloride — 0.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Flupentixol Hydrochloride Equivalentto Flupentixol BP 0.5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "sourceNumber": "186",
        "sourceRecordId": "source-0282"
      }
    ],
    "sources": [
      {
        "recordId": "source-0282",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "number": "186"
      }
    ]
  },
  {
    "id": "p-5ac0a9a0a2be",
    "name": "Foilc Acid & Cyanocobalamin & Docosahexaenoic Acid Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "5 mg + 1 mcg + 200 mg"
    ],
    "composition": "Foilc Acid 5 mg Cyanocobalamin 1 mcg Docosahexaenoic Acid 200 mg",
    "ingredients": [
      "Foilc Acid",
      "Cyanocobalamin",
      "Docosahexaenoic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Foilc Acid 5 mg Cyanocobalamin 1 mcg Docosahexaenoic Acid 200 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Foilc Acid — 5 mg; Cyanocobalamin — 1 mcg; Docosahexaenoic Acid — 200 mg",
        "sourceComposition": "Foilc Acid 5 mg Cyanocobalamin 1 mcg Docosahexaenoic Acid 200 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "44",
        "sourceRecordId": "source-0725"
      }
    ],
    "sources": [
      {
        "recordId": "source-0725",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "44"
      }
    ]
  },
  {
    "id": "p-a67cd8218434",
    "name": "Folic Acid & Methylcobalamin Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "5 mg + 750 mcg"
    ],
    "composition": "Folic Acid 5 mg, Methylcobalamin 750 mcg",
    "ingredients": [
      "Folic Acid",
      "Methylcobalamin"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Folic Acid 5 mg, Methylcobalamin 750 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Folic Acid — 5 mg; Methylcobalamin — 750 mcg",
        "sourceComposition": "Folic Acid 5 mg, Methylcobalamin 750 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "7",
        "sourceRecordId": "source-0809"
      }
    ],
    "sources": [
      {
        "recordId": "source-0809",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "7"
      }
    ]
  },
  {
    "id": "p-b32538d8b4bd",
    "name": "Folic Acid Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg"
    ],
    "composition": "Each Uncoated Tablet Contains Folic Acid IP 5 mg Excipients q.s.",
    "ingredients": [
      "Folic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Folic Acid Tablets IP5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Folic Acid — 5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains Folic Acid IP 5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "sourceNumber": "295",
        "sourceRecordId": "source-0391"
      }
    ],
    "sources": [
      {
        "recordId": "source-0391",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "number": "295"
      }
    ]
  },
  {
    "id": "p-9c6d49fd09c4",
    "name": "Fructo-Oligosaccharide Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Fructo-Oligosaccharide 100 mg",
    "ingredients": [
      "Fructo-Oligosaccharide"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Fructo-Oligosaccharide 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Fructo-Oligosaccharide — 100 mg",
        "sourceComposition": "Fructo-Oligosaccharide 100 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "sourceNumber": "18",
        "sourceRecordId": "source-0018"
      }
    ],
    "sources": [
      {
        "recordId": "source-0018",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "number": "18"
      }
    ]
  },
  {
    "id": "p-f5be4365ede8",
    "name": "Gabapentin & Methylcobalamin Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg + 500 mcg",
      "300 mg + 500 mcg",
      "600 mg + 1500 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Gabapentin IP 100 mg Methylcobalamin IP 500 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Gabapentin",
      "Methylcobalamin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Gabapentin &Methylcobalamin Tablets",
      "Methylcobalamin 500 mcg, Gabapentin 300 mg",
      "Methylcobalamin 1500 mcg, Gabapentin 600 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Gabapentin — 100 mg; Methylcobalamin — 500 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Gabapentin IP 100 mg Methylcobalamin IP 500 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 37,
        "sourceNumber": "236",
        "sourceRecordId": "source-0332"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Gabapentin — 300 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin IP 500 mcg Gabapentin IP 300 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "sourceNumber": "318",
        "sourceRecordId": "source-0414"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Gabapentin — 600 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Gabapentin 600 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "6",
        "sourceRecordId": "source-0808"
      }
    ],
    "sources": [
      {
        "recordId": "source-0332",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 37,
        "number": "236"
      },
      {
        "recordId": "source-0414",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "number": "318"
      },
      {
        "recordId": "source-0807",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "5"
      },
      {
        "recordId": "source-0808",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "6"
      }
    ]
  },
  {
    "id": "p-41866dc8e857",
    "name": "Gabapentin & Nortriptyline Hydrochloride Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "300 mg + 10 mg",
      "400 mg + 10 mg",
      "100 mg + 10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Gabapentin IP 300 mg Nortriptyline Hydrochloride Equivalentto Nortriptyline IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Gabapentin",
      "Nortriptyline Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Gabapentin&Nortriptyline Tablets",
      "Gabapentin&Nortriptyline Hydrochloride Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Gabapentin — 300 mg; Nortriptyline Hydrochloride — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Gabapentin IP 300 mg Nortriptyline Hydrochloride Equivalentto Nortriptyline IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "sourceNumber": "34",
        "sourceRecordId": "source-0130"
      },
      {
        "label": "Standard formulation",
        "composition": "Gabapentin — 400 mg; Nortriptyline Hydrochloride — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Gabapentin IP 400 mg Nortriptyline Hydrochloride Equivalentto Nortriptyline IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "sourceNumber": "35",
        "sourceRecordId": "source-0131"
      },
      {
        "label": "Standard formulation",
        "composition": "Gabapentin — 100 mg; Nortriptyline Hydrochloride — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Gabapentin IP 100 mg Nortriptyline Hydrochloride Equivalentto Nortriptyline IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "sourceNumber": "364",
        "sourceRecordId": "source-0460"
      }
    ],
    "sources": [
      {
        "recordId": "source-0130",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "number": "34"
      },
      {
        "recordId": "source-0131",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "number": "35"
      },
      {
        "recordId": "source-0460",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "number": "364"
      }
    ]
  },
  {
    "id": "p-921a346dde75",
    "name": "Gabapentin Capsules",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "300 mg"
    ],
    "composition": "Gabapentin 300 mg",
    "ingredients": [
      "Gabapentin"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Gabapentin 300 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Gabapentin — 300 mg",
        "sourceComposition": "Gabapentin 300 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "23",
        "sourceRecordId": "source-0790"
      }
    ],
    "sources": [
      {
        "recordId": "source-0790",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "23"
      }
    ]
  },
  {
    "id": "p-41a535adf266",
    "name": "Gabapentin Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg",
      "300 mg",
      "200 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Gabapentin I.P. 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Gabapentin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Gabapentin Tablets I.P.",
      "Gabapentin Tablets I.P",
      "Gabapentin Tablets IP(For Export Only)",
      "Gabapentin 300 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Gabapentin — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Gabapentin I.P. 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "sourceNumber": "69",
        "sourceRecordId": "source-0165"
      },
      {
        "label": "Standard formulation",
        "composition": "Gabapentin — 300 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Gabapentin I.P. 300 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "sourceNumber": "70",
        "sourceRecordId": "source-0166"
      },
      {
        "label": "Standard formulation",
        "composition": "Gabapentin — 200 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Gabapentin IP 200 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "sourceNumber": "398",
        "sourceRecordId": "source-0494"
      }
    ],
    "sources": [
      {
        "recordId": "source-0165",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "number": "69"
      },
      {
        "recordId": "source-0166",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "number": "70"
      },
      {
        "recordId": "source-0494",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "number": "398"
      },
      {
        "recordId": "source-0806",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "4"
      }
    ]
  },
  {
    "id": "p-894d2d9d787d",
    "name": "Ginseng Extract Powder, Vitamin A, Vitamin B1 & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Ginseng Extract Powder 42.5 mg, Vitamin A2000 I.U., Vitamin B1 1 mg, Vitamin B2 1.5 mg, Vitamin B3 10 mg, Vitamin B5 5 mg, Vitamin B6 1 mg, Vitamin B12 1 mcg, Vitamin C 40 mg, Vitamin D3 200 iu, Vitamin E5 mg, Folic Acid 200 mcg, Calcium 75 mg, Phosphorus 58 mg, Iron 17 mg, Zinc 10 mg, Magnesium 3 mg, Pottasium 2 mg, Manganese 0.5 mg, Copper 0.5 mg, Iodine 0.1 mg",
    "ingredients": [
      "Ginseng Extract Powder",
      "Vitamin A",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B3",
      "Vitamin B5",
      "Vitamin B6",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D3",
      "Vitamin E",
      "Folic Acid",
      "Calcium",
      "Phosphorus",
      "Iron",
      "Zinc",
      "Magnesium",
      "Pottasium",
      "Manganese",
      "Copper",
      "Iodine"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Ginseng Extract Powder 42.5 mg, Vitamin A2000 I.U., Vitamin B1 1 mg, Vitamin B2 1.5 mg, Vitamin B3 10 mg, Vitamin B5 5 mg, Vitamin B6 1 mg, Vitamin B12 1 mcg, Vitamin C 40 mg, Vitamin D3 200 iu, Vitamin E5 mg, Folic Acid 200 mcg, Calcium 75 mg, Phosphorus 58 mg, Iron 17 mg, Zinc 10 mg, Magnesium 3 mg, Pottasium 2 mg, Manganese 0.5 mg, Copper 0.5 mg, Iodine 0.1 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ginseng Extract Powder — 42.5 mg; Vitamin A — 2000 I.U; Vitamin B1 — 1 mg; Vitamin B2 — 1.5 mg; Vitamin B3 — 10 mg; Vitamin B5 — 5 mg; Vitamin B6 — 1 mg; Vitamin B12 — 1 mcg; Vitamin C — 40 mg; Vitamin D3 — 200 iu; Vitamin E — 5 mg; Folic Acid — 200 mcg; Calcium — 75 mg; Phosphorus — 58 mg; Iron — 17 mg; Zinc — 10 mg; Magnesium — 3 mg; Pottasium — 2 mg; Manganese — 0.5 mg; Copper — 0.5 mg; Iodine — 0.1 mg",
        "sourceComposition": "Ginseng Extract Powder 42.5 mg, Vitamin A2000 I.U., Vitamin B1 1 mg, Vitamin B2 1.5 mg, Vitamin B3 10 mg, Vitamin B5 5 mg, Vitamin B6 1 mg, Vitamin B12 1 mcg, Vitamin C 40 mg, Vitamin D3 200 iu, Vitamin E5 mg, Folic Acid 200 mcg, Calcium 75 mg, Phosphorus 58 mg, Iron 17 mg, Zinc 10 mg, Magnesium 3 mg, Pottasium 2 mg, Manganese 0.5 mg, Copper 0.5 mg, Iodine 0.1 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "15",
        "sourceRecordId": "source-0747"
      }
    ],
    "sources": [
      {
        "recordId": "source-0747",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "15"
      }
    ]
  },
  {
    "id": "p-d0ea2024e176",
    "name": "Ginseng, Lycopene, Vitamin A & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Ginseng 42.5 mg, Lycopene 10% 6000 mcg, Vitamin A2000 iu, Vitamin B1 1 mg, Vitamin B2 1.5 mg, Vitamin B6 1 mg, Vitamin B12 1 mcg, Vitamin D3 200 iu, Vitamin E5 iu, Calcium Pantothenate 2.5 mg, Folic Acid 150 mcg, Niacinamide 18 mg, Vitamin C 40 mg, Iodine as Sodium Iodide 150 mcg, Magnesium as Magnesium Oxide 10 mg, Calcium as Calcium Phosphate 75 mg, Copper as Copper Sulphate 500 mcg, Iron as Ferrous Fumarate 17 mg, Zinc as Zinc Oxide 10 mg, Manganese as Manganese Chloride 1.5 mg",
    "ingredients": [
      "Ginseng",
      "Lycopene",
      "Vitamin A",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Vitamin D3",
      "Vitamin E",
      "Calcium Pantothenate",
      "Folic Acid",
      "Niacinamide",
      "Vitamin C",
      "Iodine as Sodium Iodide",
      "Magnesium as Magnesium Oxide",
      "Calcium as Calcium Phosphate",
      "Copper as Copper Sulphate",
      "Iron as Ferrous Fumarate",
      "Zinc as Zinc Oxide",
      "Manganese as Manganese Chloride"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Ginseng 42.5 mg, Lycopene 10% 6000 mcg, Vitamin A2000 iu, Vitamin B1 1 mg, Vitamin B2 1.5 mg, Vitamin B6 1 mg, Vitamin B12 1 mcg, Vitamin D3 200 iu, Vitamin E5 iu, Calcium Pantothenate 2.5 mg, Folic Acid 150 mcg, Niacinamide 18 mg, Vitamin C 40 mg, Iodine as Sodium Iodide 150 mcg, Magnesium as Magnesium Oxide 10 mg, Calcium as Calcium Phosphate 75 mg, Copper as Copper Sulphate 500 mcg, Iron as Ferrous Fumarate 17 mg, Zinc as Zinc Oxide 10 mg, Manganese as Manganese Chloride 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ginseng — 42.5 mg; Lycopene — 6000 mcg; Vitamin A — 2000 iu; Vitamin B1 — 1 mg; Vitamin B2 — 1.5 mg; Vitamin B6 — 1 mg; Vitamin B12 — 1 mcg; Vitamin D3 — 200 iu; Vitamin E — 5 iu; Calcium Pantothenate — 2.5 mg; Folic Acid — 150 mcg; Niacinamide — 18 mg; Vitamin C — 40 mg; Iodine as Sodium Iodide — 150 mcg; Magnesium as Magnesium Oxide — 10 mg; Calcium as Calcium Phosphate — 75 mg; Copper as Copper Sulphate — 500 mcg; Iron as Ferrous Fumarate — 17 mg; Zinc as Zinc Oxide — 10 mg; Manganese as Manganese Chloride — 1.5 mg",
        "sourceComposition": "Ginseng 42.5 mg, Lycopene 10% 6000 mcg, Vitamin A2000 iu, Vitamin B1 1 mg, Vitamin B2 1.5 mg, Vitamin B6 1 mg, Vitamin B12 1 mcg, Vitamin D3 200 iu, Vitamin E5 iu, Calcium Pantothenate 2.5 mg, Folic Acid 150 mcg, Niacinamide 18 mg, Vitamin C 40 mg, Iodine as Sodium Iodide 150 mcg, Magnesium as Magnesium Oxide 10 mg, Calcium as Calcium Phosphate 75 mg, Copper as Copper Sulphate 500 mcg, Iron as Ferrous Fumarate 17 mg, Zinc as Zinc Oxide 10 mg, Manganese as Manganese Chloride 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "16",
        "sourceRecordId": "source-0748"
      }
    ],
    "sources": [
      {
        "recordId": "source-0748",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "16"
      }
    ]
  },
  {
    "id": "p-e1032ac7bcd3",
    "name": "Glibenclamide & Metformin Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg + 500 mg"
    ],
    "composition": "Each Uncoated Sustained Release Tablet Contains: Glibenclamide IP 5 mg Metformin Hydrochloride IP 500 mg Excipients q.s.",
    "ingredients": [
      "Glibenclamide",
      "Metformin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Glibenclamide &Metformin Hydrochloride Tablets"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Glibenclamide — 5 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Uncoated Sustained Release Tablet Contains: Glibenclamide IP 5 mg Metformin Hydrochloride IP 500 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 49,
        "sourceNumber": "300",
        "sourceRecordId": "source-0396"
      }
    ],
    "sources": [
      {
        "recordId": "source-0396",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 49,
        "number": "300"
      }
    ]
  },
  {
    "id": "p-61a070efb5ef",
    "name": "Glimepiride & Metformin Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1 mg + 500 mg",
      "2 mg + 500 mg",
      "1 mg + 1000 mg",
      "2 mg + 1000 mg",
      "1 mg + Not specified"
    ],
    "composition": "Each Uncoated Tablet Contains: Glimepiride IP 1 mg Metformin Hyrochloride (as Prolonged Release Form) IP 500 mg Excipients q.s.",
    "ingredients": [
      "Glimepiride",
      "Metformin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metformin HCl Prolonged Release & Glimepiride Tablets IP",
      "Glimepiride&Metformin HCl(SR) Tablets",
      "Metformin Hydrochloride Prolonged Release & Glimepiride Tablets IP",
      "Metformin Hydrochloride (Prolonged Release)and Glimepiride Tablets IP"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Glimepiride — 1 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Glimepiride IP 1 mg Metformin Hyrochloride (as Prolonged Release Form) IP 500 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "sourceNumber": "157",
        "sourceRecordId": "source-0253"
      },
      {
        "label": "Prolonged release",
        "composition": "Glimepiride — 2 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Glimepiride IP 2 mg Metformin Hyrochloride (as Prolonged Release Form) IP 500 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "sourceNumber": "158",
        "sourceRecordId": "source-0254"
      },
      {
        "label": "Sustained release",
        "composition": "Glimepiride — 1 mg; Metformin Hydrochloride — 1000 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Glimepiride IP 1 mg Metformin Hydrochloride (assustainedrelease) IP 1000 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "sourceNumber": "159",
        "sourceRecordId": "source-0255"
      },
      {
        "label": "Sustained release",
        "composition": "Glimepiride — 2 mg; Metformin Hydrochloride — 1000 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Glimepiride IP 2 mg Metformin Hydrochloride (assustainedrelease) IP 1000 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "sourceNumber": "160",
        "sourceRecordId": "source-0256"
      },
      {
        "label": "Prolonged release",
        "composition": "Metformin Hydrochloride; Glimepiride — 1 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metformin Hydrochloride (As Prolonged Release Form) IP 1000 Glimepiride IP 1 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "sourceNumber": "310",
        "sourceRecordId": "source-0406"
      },
      {
        "label": "Prolonged release",
        "composition": "Metformin Hydrochloride — 1000 mg; Glimepiride — 2 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metformin Hydrochloride (As Prolonged Release Form) IP 1000 mg Glimepiride IP 2 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "sourceNumber": "311",
        "sourceRecordId": "source-0407"
      }
    ],
    "sources": [
      {
        "recordId": "source-0253",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "number": "157"
      },
      {
        "recordId": "source-0254",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "number": "158"
      },
      {
        "recordId": "source-0255",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "number": "159"
      },
      {
        "recordId": "source-0256",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "number": "160"
      },
      {
        "recordId": "source-0372",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 44,
        "number": "276"
      },
      {
        "recordId": "source-0373",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 44,
        "number": "277"
      },
      {
        "recordId": "source-0406",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "number": "310"
      },
      {
        "recordId": "source-0407",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "number": "311"
      }
    ]
  },
  {
    "id": "p-02c389cae08e",
    "name": "Glucosamine Sulphate Potassium Chloride, Collagen Peptide, Rose Hip Extract & Multinutrient Blend Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Glucosamine Sulphate Potassium Chloride 750 mg, Collagen Peptide 250 mg, Rose Hip Extract 50 mg, Ginger Extract 40 mg, Vitamin C 30 mg, Iron as Ferrous Fumarate 5 mg, Zinc As Zinc Oxide 5 mg, Manganese as Manganese Oxide 2 mg, Copper as Copper Sulphate 0.5 mg, Folic Acid 200 mcg, Selenium as Sodium Selenate 60 mcg, Vitamin D3 10 mcg, Vitamin B12 1 mcg",
    "ingredients": [
      "Glucosamine Sulphate Potassium Chloride",
      "Collagen Peptide",
      "Rose Hip Extract",
      "Ginger Extract",
      "Vitamin C",
      "Iron as Ferrous Fumarate",
      "Zinc As Zinc Oxide",
      "Manganese as Manganese Oxide",
      "Copper as Copper Sulphate",
      "Folic Acid",
      "Selenium as Sodium Selenate",
      "Vitamin D3",
      "Vitamin B12"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Glucosamine Sulphate Potassium Chloride 750 mg, Collagen Peptide 250 mg, Rose Hip Extract 50 mg, Ginger Extract 40 mg, Vitamin C 30 mg, Iron as Ferrous Fumarate 5 mg, Zinc As Zinc Oxide 5 mg, Manganese as Manganese Oxide 2 mg, Copper as Copper Sulphate 0.5 mg, Folic Acid 200 mcg, Selenium as Sodium Selenate 60 mcg, Vitamin D3 10 mcg, Vitamin B12 1 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Glucosamine Sulphate Potassium Chloride — 750 mg; Collagen Peptide — 250 mg; Rose Hip Extract — 50 mg; Ginger Extract — 40 mg; Vitamin C — 30 mg; Iron as Ferrous Fumarate — 5 mg; Zinc As Zinc Oxide — 5 mg; Manganese as Manganese Oxide — 2 mg; Copper as Copper Sulphate — 0.5 mg; Folic Acid — 200 mcg; Selenium as Sodium Selenate — 60 mcg; Vitamin D3 — 10 mcg; Vitamin B12 — 1 mcg",
        "sourceComposition": "Glucosamine Sulphate Potassium Chloride 750 mg, Collagen Peptide 250 mg, Rose Hip Extract 50 mg, Ginger Extract 40 mg, Vitamin C 30 mg, Iron as Ferrous Fumarate 5 mg, Zinc As Zinc Oxide 5 mg, Manganese as Manganese Oxide 2 mg, Copper as Copper Sulphate 0.5 mg, Folic Acid 200 mcg, Selenium as Sodium Selenate 60 mcg, Vitamin D3 10 mcg, Vitamin B12 1 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "18",
        "sourceRecordId": "source-0820"
      }
    ],
    "sources": [
      {
        "recordId": "source-0820",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "18"
      }
    ]
  },
  {
    "id": "p-f2d6304cf9f1",
    "name": "Grape Seed Extract, Lycopene, Lutein & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Grape Seed Extract 25 mg Lycopene 6% 2 mg Lutein 8% 3 mg Vitamin AConcentrate Oil 5000 I.U. (As Palmitate ) Vitamin B1 5 mg Vitamin B2 5 mg Vitamin B6 1.50 mg Vitamin B12 15 mcg Folic Acid 1.50 mg Zinc Sulphate Monohydrate 23 mg Selenium Dioxide Monohydrate 75 mcg",
    "ingredients": [
      "Grape Seed Extract",
      "Lycopene",
      "Lutein",
      "Vitamin AConcentrate Oil",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Folic Acid",
      "Zinc Sulphate Monohydrate",
      "Selenium Dioxide Monohydrate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Grape Seed Extract 25 mg Lycopene 6% 2 mg Lutein 8% 3 mg Vitamin AConcentrate Oil 5000 I.U. (As Palmitate ) Vitamin B1 5 mg Vitamin B2 5 mg Vitamin B6 1.50 mg Vitamin B12 15 mcg Folic Acid 1.50 mg Zinc Sulphate Monohydrate 23 mg Selenium Dioxide Monohydrate 75 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Grape Seed Extract — 25 mg; Lycopene — 2 mg; Lutein — 3 mg; Vitamin AConcentrate Oil — 5000 I.U; Vitamin B1 — 5 mg; Vitamin B2 — 5 mg; Vitamin B6 — 1.50 mg; Vitamin B12 — 15 mcg; Folic Acid — 1.50 mg; Zinc Sulphate Monohydrate — 23 mg; Selenium Dioxide Monohydrate — 75 mcg",
        "sourceComposition": "Grape Seed Extract 25 mg Lycopene 6% 2 mg Lutein 8% 3 mg Vitamin AConcentrate Oil 5000 I.U. (As Palmitate ) Vitamin B1 5 mg Vitamin B2 5 mg Vitamin B6 1.50 mg Vitamin B12 15 mcg Folic Acid 1.50 mg Zinc Sulphate Monohydrate 23 mg Selenium Dioxide Monohydrate 75 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "40",
        "sourceRecordId": "source-0721"
      }
    ],
    "sources": [
      {
        "recordId": "source-0721",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "40"
      }
    ]
  },
  {
    "id": "p-28e7b6894d89",
    "name": "Griseofulvin Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Griseofulvin IP 500 mg Excipients q.s.",
    "ingredients": [
      "Griseofulvin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Griseofulvin Tablets IP500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Griseofulvin — 500 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Griseofulvin IP 500 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "sourceNumber": "366",
        "sourceRecordId": "source-0462"
      }
    ],
    "sources": [
      {
        "recordId": "source-0462",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "number": "366"
      }
    ]
  },
  {
    "id": "p-f01c8f9b9af3",
    "name": "Guaifenesin Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "200 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Guaifenesin USP 200 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Guaifenesin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Guaifenesin Tablets USP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Guaifenesin — 200 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Guaifenesin USP 200 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "sourceNumber": "400",
        "sourceRecordId": "source-0496"
      }
    ],
    "sources": [
      {
        "recordId": "source-0496",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "number": "400"
      }
    ]
  },
  {
    "id": "p-0417e2558d17",
    "name": "Harjod, Ashwagandha, Vitamin D3 & Multinutrient Blend Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Harjod (Cissus Quadrangularis) 500 mg, Ashwagandha (Withania Somnifera) 500 mg, Vitamin D3 400 iu, Vitamin K2-7 50 mcg, Calcium as Calcium Carbonate 250 mg",
    "ingredients": [
      "Harjod",
      "Ashwagandha",
      "Vitamin D3",
      "Vitamin K2-7",
      "Calcium as Calcium Carbonate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Harjod (Cissus Quadrangularis) 500 mg, Ashwagandha (Withania Somnifera) 500 mg, Vitamin D3 400 iu, Vitamin K2-7 50 mcg, Calcium as Calcium Carbonate 250 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Harjod — 500 mg; Ashwagandha — 500 mg; Vitamin D3 — 400 iu; Vitamin K2-7 — 50 mcg; Calcium as Calcium Carbonate — 250 mg",
        "sourceComposition": "Harjod (Cissus Quadrangularis) 500 mg, Ashwagandha (Withania Somnifera) 500 mg, Vitamin D3 400 iu, Vitamin K2-7 50 mcg, Calcium as Calcium Carbonate 250 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "19",
        "sourceRecordId": "source-0821"
      }
    ],
    "sources": [
      {
        "recordId": "source-0821",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "19"
      }
    ]
  },
  {
    "id": "p-2ea1ae148605",
    "name": "Indapamide Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1.5 mg"
    ],
    "composition": "Each Film Coated Sustained Release Tablet Contains: Indapamide IP 1.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Indapamide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Indapamide Prolonged Release Tablets IP1.5 mg"
    ],
    "variants": [
      {
        "label": "Sustained release, Prolonged release",
        "composition": "Indapamide — 1.5 mg",
        "sourceComposition": "Each Film Coated Sustained Release Tablet Contains: Indapamide IP 1.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "sourceNumber": "299",
        "sourceRecordId": "source-0395"
      }
    ],
    "sources": [
      {
        "recordId": "source-0395",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "number": "299"
      }
    ]
  },
  {
    "id": "p-60e482f2677a",
    "name": "Isotretinoin Capsules",
    "division": "General",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg",
      "10 mg",
      "20 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Isotretinoin I.P. 40 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
    "ingredients": [
      "Isotretinoin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Isotretinoin Capsules I.P.",
      "Isotretinoin 10 mg",
      "Isotretinoin 20 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Isotretinoin — 40 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Isotretinoin I.P. 40 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "sourceNumber": "76",
        "sourceRecordId": "source-0172"
      },
      {
        "label": "Standard formulation",
        "composition": "Isotretinoin — 10 mg",
        "sourceComposition": "Isotretinoin 10 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "17",
        "sourceRecordId": "source-0784"
      },
      {
        "label": "Standard formulation",
        "composition": "Isotretinoin — 20 mg",
        "sourceComposition": "Isotretinoin 20 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "18",
        "sourceRecordId": "source-0785"
      }
    ],
    "sources": [
      {
        "recordId": "source-0172",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "number": "76"
      },
      {
        "recordId": "source-0784",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "17"
      },
      {
        "recordId": "source-0785",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "18"
      }
    ]
  },
  {
    "id": "p-abbf6e90088b",
    "name": "Isotretinoin Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "composition": "Isotretinoin 10 mg",
    "ingredients": [
      "Isotretinoin"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Isotretinoin 10 mg",
      "Isotretinoin 20 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Isotretinoin — 10 mg",
        "sourceComposition": "Isotretinoin 10 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "47",
        "sourceRecordId": "source-0728"
      },
      {
        "label": "Standard formulation",
        "composition": "Isotretinoin — 20 mg",
        "sourceComposition": "Isotretinoin 20 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "48",
        "sourceRecordId": "source-0729"
      }
    ],
    "sources": [
      {
        "recordId": "source-0728",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "47"
      },
      {
        "recordId": "source-0729",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "48"
      }
    ]
  },
  {
    "id": "p-350b15b416aa",
    "name": "Isoxsuprine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg",
      "10 mg",
      "20 mg"
    ],
    "composition": "Each Film Coated Sustained Release Tablet Contains: Isoxsuprine Hydrochloride IP 40 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Isoxsuprine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Isoxsuprine Hydrochloride Sustained Release Tablets 40 mg",
      "Isoxsuprine Hydrochloride Tablets I.P.",
      "Isoxsuprine Hydrochloride Tablets IP 20 mg"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Isoxsuprine Hydrochloride — 40 mg",
        "sourceComposition": "Each Film Coated Sustained Release Tablet Contains: Isoxsuprine Hydrochloride IP 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 6,
        "sourceNumber": "37",
        "sourceRecordId": "source-0133"
      },
      {
        "label": "Standard formulation",
        "composition": "Isoxsuprine Hydrochloride — 10 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Isoxsuprine Hydrochloride I.P. 10 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 14,
        "sourceNumber": "89",
        "sourceRecordId": "source-0185"
      },
      {
        "label": "Standard formulation",
        "composition": "Isoxsuprine Hydrochloride — 20 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Isoxsuprine Hydrochloride IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "sourceNumber": "327",
        "sourceRecordId": "source-0423"
      }
    ],
    "sources": [
      {
        "recordId": "source-0133",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 6,
        "number": "37"
      },
      {
        "recordId": "source-0185",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 14,
        "number": "89"
      },
      {
        "recordId": "source-0423",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "number": "327"
      }
    ]
  },
  {
    "id": "p-98508b2fea6d",
    "name": "Itraconazole Capsules",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg",
      "200 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Itraconazole (Aspellets IP 100 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
    "ingredients": [
      "Itraconazole"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Itraconazole Capsules BP 100 mg",
      "Itraconazole Capsules BP 200 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Itraconazole — 100 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Itraconazole (Aspellets IP 100 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "sourceNumber": "152",
        "sourceRecordId": "source-0248"
      },
      {
        "label": "Standard formulation",
        "composition": "Itraconazole — 200 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Itraconazole (Aspellets IP 200 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "sourceNumber": "153",
        "sourceRecordId": "source-0249"
      }
    ],
    "sources": [
      {
        "recordId": "source-0248",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "number": "152"
      },
      {
        "recordId": "source-0249",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "number": "153"
      }
    ]
  },
  {
    "id": "p-2ad9cbaa8e77",
    "name": "Itraconazole Pellets Capsules",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "100 mg",
      "200 mg"
    ],
    "composition": "Itraconazole Pellets eq. to Itraconazole 100 mg",
    "ingredients": [
      "Itraconazole Pellets"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Itraconazole Pellets eq. to Itraconazole 100 mg",
      "Itraconazole Pellets eq. to Itraconazole 200 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Itraconazole Pellets — 100 mg",
        "sourceComposition": "Itraconazole Pellets eq. to Itraconazole 100 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "9",
        "sourceRecordId": "source-0776"
      },
      {
        "label": "Standard formulation",
        "composition": "Itraconazole Pellets — 200 mg",
        "sourceComposition": "Itraconazole Pellets eq. to Itraconazole 200 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "10",
        "sourceRecordId": "source-0777"
      }
    ],
    "sources": [
      {
        "recordId": "source-0776",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "9"
      },
      {
        "recordId": "source-0777",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "10"
      }
    ]
  },
  {
    "id": "p-6df641535293",
    "name": "Ivermectin Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "12 mg",
      "6 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Ivermectin IP 12 mg Excipients q.s.",
    "ingredients": [
      "Ivermectin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ivermectin Tablets USP",
      "Ivermectin Tablets IP6 mg (For Export Only)",
      "Ivermectin Tablets IP12 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ivermectin — 12 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Ivermectin IP 12 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "sourceNumber": "118",
        "sourceRecordId": "source-0214"
      },
      {
        "label": "Standard formulation",
        "composition": "Ivermectin — 6 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Ivermectin IP 6 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "sourceNumber": "350",
        "sourceRecordId": "source-0446"
      }
    ],
    "sources": [
      {
        "recordId": "source-0214",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "number": "118"
      },
      {
        "recordId": "source-0446",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "350"
      },
      {
        "recordId": "source-0451",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "number": "355"
      }
    ]
  },
  {
    "id": "p-9fdc502e0118",
    "name": "L-Arginine & Lycopene Powder Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "1000 mg + 2.5 mg"
    ],
    "composition": "L-Arginine 1000 mg Lycopene Powder10% 2.5 mg",
    "ingredients": [
      "L-Arginine",
      "Lycopene Powder"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Arginine 1000 mg Lycopene Powder10% 2.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Arginine — 1000 mg; Lycopene Powder — 2.5 mg",
        "sourceComposition": "L-Arginine 1000 mg Lycopene Powder10% 2.5 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "sourceNumber": "23",
        "sourceRecordId": "source-0023"
      }
    ],
    "sources": [
      {
        "recordId": "source-0023",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "number": "23"
      }
    ]
  },
  {
    "id": "p-7bbe8deeddde",
    "name": "L-Arginine & Proanthocyanidine & Folic Acid & Zinc Sulphate Monohydrate Sachets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Sachet",
    "phRef": null,
    "availableStrengths": [
      "3 g + 75 mg + 2.5 mg + 10 mg"
    ],
    "composition": "Each10Gmsachetcontains L-Arginine 3 g Proanthocyanidine 75 mg Folic Acid 2.5 mg Zinc Sulphate Monohydrate E.Q.Toelementalzinc 10 mg Excipients q.s. Colour:Approvedcolourused",
    "ingredients": [
      "L-Arginine",
      "Proanthocyanidine",
      "Folic Acid",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Each10Gmsachetcontains L-Arginine 3 g Proanthocyanidine 75 mg Folic Acid 2.5 mg Zinc Sulphate Monohydrate E.Q.Toelementalzinc 10 mg Excipients q.s. Colour:Approvedcolourused"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Arginine — 3 g; Proanthocyanidine — 75 mg; Folic Acid — 2.5 mg; Zinc Sulphate Monohydrate — 10 mg",
        "sourceComposition": "Each10Gmsachetcontains L-Arginine 3 g Proanthocyanidine 75 mg Folic Acid 2.5 mg Zinc Sulphate Monohydrate E.Q.Toelementalzinc 10 mg Excipients q.s. Colour:Approvedcolourused",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 19,
        "sourceNumber": "3",
        "sourceRecordId": "source-0096"
      }
    ],
    "sources": [
      {
        "recordId": "source-0096",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 19,
        "number": "3"
      }
    ]
  },
  {
    "id": "p-f0e879c29bb5",
    "name": "L-Arginine & Proanthocyanidine Sachets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Sachet",
    "phRef": "IP",
    "availableStrengths": [
      "3 g + 75 mg"
    ],
    "composition": "Each10Gmsachetcontains L-Arginine IP 3 g Proanthocyanidine 75 mg Excipients q.s. Colour:Approvedcolourused",
    "ingredients": [
      "L-Arginine",
      "Proanthocyanidine"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Each10Gmsachetcontains L-Arginine IP 3 g Proanthocyanidine 75 mg Excipients q.s. Colour:Approvedcolourused"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Arginine — 3 g; Proanthocyanidine — 75 mg",
        "sourceComposition": "Each10Gmsachetcontains L-Arginine IP 3 g Proanthocyanidine 75 mg Excipients q.s. Colour:Approvedcolourused",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 19,
        "sourceNumber": "2",
        "sourceRecordId": "source-0095"
      }
    ],
    "sources": [
      {
        "recordId": "source-0095",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 19,
        "number": "2"
      }
    ]
  },
  {
    "id": "p-ddf7a122d1eb",
    "name": "L-Arginine Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "1000 mg"
    ],
    "composition": "L-Arginine 1000 mg",
    "ingredients": [
      "L-Arginine"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Arginine 1000 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Arginine — 1000 mg",
        "sourceComposition": "L-Arginine 1000 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "sourceNumber": "88",
        "sourceRecordId": "source-0088"
      }
    ],
    "sources": [
      {
        "recordId": "source-0088",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "number": "88"
      }
    ]
  },
  {
    "id": "p-18dea4204996",
    "name": "L-Arginine HCl, Green Tea Extract, Chastberry Dry Extract & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "L-Arginine HCl 140 mg Green Tea Extract 200 mg Chastberry Dry Extract 200 mg Magnesium Oxide Light 200 mg Carbonyl Iron 9 mg Zinc Gluconate 7.5 mg Vitamin B6 3 mg Folic Acid 200 mcg Cyanocobalamin 2.5 mcg Vitamin E Acetate 75 mg Sodium Selenate 35 mcg",
    "ingredients": [
      "L-Arginine HCl",
      "Green Tea Extract",
      "Chastberry Dry Extract",
      "Magnesium Oxide Light",
      "Carbonyl Iron",
      "Zinc Gluconate",
      "Vitamin B6",
      "Folic Acid",
      "Cyanocobalamin",
      "Vitamin E Acetate",
      "Sodium Selenate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Arginine HCl 140 mg Green Tea Extract 200 mg Chastberry Dry Extract 200 mg Magnesium Oxide Light 200 mg Carbonyl Iron 9 mg Zinc Gluconate 7.5 mg Vitamin B6 3 mg Folic Acid 200 mcg Cyanocobalamin 2.5 mcg Vitamin E Acetate 75 mg Sodium Selenate 35 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Arginine HCl — 140 mg; Green Tea Extract — 200 mg; Chastberry Dry Extract — 200 mg; Magnesium Oxide Light — 200 mg; Carbonyl Iron — 9 mg; Zinc Gluconate — 7.5 mg; Vitamin B6 — 3 mg; Folic Acid — 200 mcg; Cyanocobalamin — 2.5 mcg; Vitamin E Acetate — 75 mg; Sodium Selenate — 35 mcg",
        "sourceComposition": "L-Arginine HCl 140 mg Green Tea Extract 200 mg Chastberry Dry Extract 200 mg Magnesium Oxide Light 200 mg Carbonyl Iron 9 mg Zinc Gluconate 7.5 mg Vitamin B6 3 mg Folic Acid 200 mcg Cyanocobalamin 2.5 mcg Vitamin E Acetate 75 mg Sodium Selenate 35 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "sourceNumber": "69",
        "sourceRecordId": "source-0069"
      }
    ],
    "sources": [
      {
        "recordId": "source-0069",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "number": "69"
      }
    ]
  },
  {
    "id": "p-2674c5701976",
    "name": "L-Carnitine Base & Magnesium Bisglycinate & Vitamin E Acetate Powder & Cyanocobalamin Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "500 mg + 200 mg + 10 mg + 2.5 mcg"
    ],
    "composition": "L-Carnitine Base 500 mg Magnesium Bisglycinate 200 mg Vitamin E Acetate50%Powder 10 mg Cyanocobalamin 2.5 mcg",
    "ingredients": [
      "L-Carnitine Base",
      "Magnesium Bisglycinate",
      "Vitamin E Acetate Powder",
      "Cyanocobalamin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Carnitine Base 500 mg Magnesium Bisglycinate 200 mg Vitamin E Acetate50%Powder 10 mg Cyanocobalamin 2.5 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Carnitine Base — 500 mg; Magnesium Bisglycinate — 200 mg; Vitamin E Acetate Powder — 10 mg; Cyanocobalamin — 2.5 mcg",
        "sourceComposition": "L-Carnitine Base 500 mg Magnesium Bisglycinate 200 mg Vitamin E Acetate50%Powder 10 mg Cyanocobalamin 2.5 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "sourceNumber": "86",
        "sourceRecordId": "source-0086"
      }
    ],
    "sources": [
      {
        "recordId": "source-0086",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "number": "86"
      }
    ]
  },
  {
    "id": "p-d8347fb49a3c",
    "name": "L-Carnitine Base, Coenzyme, Lepidium & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "L-Carnitine Base 50 mg Coenzyme 200 mg Lepidium 100 mg L-Methylfolate 0.5 mg Cyanocobalamin 2.5 mcg Zinc Sulphate Monohydrate 17 mg L-Selenomethionine 372 mcg Ascorbic Acid Coated 65 mg Astaxanthin10%Powder 16 mg Vitamin E Acetate50%Powder 10 mg",
    "ingredients": [
      "L-Carnitine Base",
      "Coenzyme",
      "Lepidium",
      "L-Methylfolate",
      "Cyanocobalamin",
      "Zinc Sulphate Monohydrate",
      "L-Selenomethionine",
      "Ascorbic Acid Coated",
      "Astaxanthin Powder",
      "Vitamin E Acetate Powder"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Carnitine Base 50 mg Coenzyme 200 mg Lepidium 100 mg L-Methylfolate 0.5 mg Cyanocobalamin 2.5 mcg Zinc Sulphate Monohydrate 17 mg L-Selenomethionine 372 mcg Ascorbic Acid Coated 65 mg Astaxanthin10%Powder 16 mg Vitamin E Acetate50%Powder 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Carnitine Base — 50 mg; Coenzyme — 200 mg; Lepidium — 100 mg; L-Methylfolate — 0.5 mg; Cyanocobalamin — 2.5 mcg; Zinc Sulphate Monohydrate — 17 mg; L-Selenomethionine — 372 mcg; Ascorbic Acid Coated — 65 mg; Astaxanthin Powder — 16 mg; Vitamin E Acetate Powder — 10 mg",
        "sourceComposition": "L-Carnitine Base 50 mg Coenzyme 200 mg Lepidium 100 mg L-Methylfolate 0.5 mg Cyanocobalamin 2.5 mcg Zinc Sulphate Monohydrate 17 mg L-Selenomethionine 372 mcg Ascorbic Acid Coated 65 mg Astaxanthin10%Powder 16 mg Vitamin E Acetate50%Powder 10 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "sourceNumber": "19",
        "sourceRecordId": "source-0019"
      }
    ],
    "sources": [
      {
        "recordId": "source-0019",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "number": "19"
      }
    ]
  },
  {
    "id": "p-ad1c890c067e",
    "name": "L-Carnitine L-Tartrate & Methylcobalamin & Folic Acid Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg + Not specified + 1.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: L-Carnitine L-Tartrate Equivalentto L-Carnitine 500 mg Methylcobalamin IP 1500m Folic Acid IP 1.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "L-Carnitine L-Tartrate",
      "Methylcobalamin",
      "Folic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "L-Carnitine,Methylcobalamin and Folic Acid Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Carnitine L-Tartrate — 500 mg; Methylcobalamin; Folic Acid — 1.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: L-Carnitine L-Tartrate Equivalentto L-Carnitine 500 mg Methylcobalamin IP 1500m Folic Acid IP 1.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "sourceNumber": "309",
        "sourceRecordId": "source-0405"
      }
    ],
    "sources": [
      {
        "recordId": "source-0405",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "number": "309"
      }
    ]
  },
  {
    "id": "p-a45d28e2c135",
    "name": "L-Carnitine L-Tartrate, Coenzyme Q10, Lycopene Powder & Multinutrient Blend Food Formulation (5-ingredient blend)",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "L-Carnitine L-Tartrate 500 mg Coenzyme(Ubiquinone Acetate) 200 mg Lycopene Powder-10% 30 mg Zinc Sulphate Monohydrate 5 mg Astaxanthin10%Powder 8 mg",
    "ingredients": [
      "L-Carnitine L-Tartrate",
      "Coenzyme Q10",
      "Lycopene Powder",
      "Zinc Sulphate Monohydrate",
      "Astaxanthin Powder"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Carnitine L-Tartrate 500 mg Coenzyme(Ubiquinone Acetate) 200 mg Lycopene Powder-10% 30 mg Zinc Sulphate Monohydrate 5 mg Astaxanthin10%Powder 8 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Carnitine L-Tartrate — 500 mg; Coenzyme Q10 — 200 mg; Lycopene Powder — 30 mg; Zinc Sulphate Monohydrate — 5 mg; Astaxanthin Powder — 8 mg",
        "sourceComposition": "L-Carnitine L-Tartrate 500 mg Coenzyme(Ubiquinone Acetate) 200 mg Lycopene Powder-10% 30 mg Zinc Sulphate Monohydrate 5 mg Astaxanthin10%Powder 8 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "sourceNumber": "14",
        "sourceRecordId": "source-0014"
      }
    ],
    "sources": [
      {
        "recordId": "source-0014",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 3,
        "number": "14"
      }
    ]
  },
  {
    "id": "p-94cd134c0138",
    "name": "L-Carnitine L-Tartrate, Coenzyme Q10, Lycopene Powder & Multinutrient Blend Food Formulation with Vitamin D3 Stabilized",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "L-Carnitine L-Tartrate 1000 mg Coenzyme Q10 100 mg Lycopene Powder-10% 2500 mcg Zinc Sulphate Monohydrate 12.5 mg Astaxanthin10%Powder 8 mg Vitamin D3 Stabilized 600 iu",
    "ingredients": [
      "L-Carnitine L-Tartrate",
      "Coenzyme Q10",
      "Lycopene Powder",
      "Zinc Sulphate Monohydrate",
      "Astaxanthin Powder",
      "Vitamin D3 Stabilized"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Carnitine L-Tartrate 1000 mg Coenzyme Q10 100 mg Lycopene Powder-10% 2500 mcg Zinc Sulphate Monohydrate 12.5 mg Astaxanthin10%Powder 8 mg Vitamin D3 Stabilized 600 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Carnitine L-Tartrate — 1000 mg; Coenzyme Q10 — 100 mg; Lycopene Powder — 2500 mcg; Zinc Sulphate Monohydrate — 12.5 mg; Astaxanthin Powder — 8 mg; Vitamin D3 Stabilized — 600 iu",
        "sourceComposition": "L-Carnitine L-Tartrate 1000 mg Coenzyme Q10 100 mg Lycopene Powder-10% 2500 mcg Zinc Sulphate Monohydrate 12.5 mg Astaxanthin10%Powder 8 mg Vitamin D3 Stabilized 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 5,
        "sourceNumber": "30",
        "sourceRecordId": "source-0030"
      }
    ],
    "sources": [
      {
        "recordId": "source-0030",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 5,
        "number": "30"
      }
    ]
  },
  {
    "id": "p-7a855437b1c2",
    "name": "L-Carnitine, Coenzyme Q10, Lycopene Powder & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "L-Carnitine 500 mg Coenzyme Q10 50 mg Lycopene Powder-10% 2500 mcg Zinc Sulphate Monohydrate 5 mg Astaxanthin10%Powder 8 mg",
    "ingredients": [
      "L-Carnitine",
      "Coenzyme Q10",
      "Lycopene Powder",
      "Zinc Sulphate Monohydrate",
      "Astaxanthin Powder"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Carnitine 500 mg Coenzyme Q10 50 mg Lycopene Powder-10% 2500 mcg Zinc Sulphate Monohydrate 5 mg Astaxanthin10%Powder 8 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Carnitine — 500 mg; Coenzyme Q10 — 50 mg; Lycopene Powder — 2500 mcg; Zinc Sulphate Monohydrate — 5 mg; Astaxanthin Powder — 8 mg",
        "sourceComposition": "L-Carnitine 500 mg Coenzyme Q10 50 mg Lycopene Powder-10% 2500 mcg Zinc Sulphate Monohydrate 5 mg Astaxanthin10%Powder 8 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "sourceNumber": "37",
        "sourceRecordId": "source-0037"
      }
    ],
    "sources": [
      {
        "recordId": "source-0037",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 7,
        "number": "37"
      }
    ]
  },
  {
    "id": "p-424897cd7045",
    "name": "L-Glutathione Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "composition": "L-Glutathione 500 mg",
    "ingredients": [
      "L-Glutathione"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "L-Glutathione 500 mg",
      "L-Glutathione 1000 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Glutathione — 500 mg",
        "sourceComposition": "L-Glutathione 500 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "20",
        "sourceRecordId": "source-0752"
      },
      {
        "label": "Standard formulation",
        "composition": "L-Glutathione — 1000 mg",
        "sourceComposition": "L-Glutathione 1000 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "21",
        "sourceRecordId": "source-0753"
      }
    ],
    "sources": [
      {
        "recordId": "source-0752",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "20"
      },
      {
        "recordId": "source-0753",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "21"
      }
    ]
  },
  {
    "id": "p-aa00fca07032",
    "name": "L-Isoleucine, L-Leucine, L-Lysine Hydrochloride & Multinutrient Blend Food Formulation with L-Glutamine, Folic Acid, Carbonyl Iron",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "L-Isoleucine 50 mg L-Leucine 65 mg L-Lysine Hydrochloride 80 mg L-Valine 35 mg L-Methionine 15 mg L-Threonine 15 mg L-Phenylalanine 15 mg L-Tryptophan 5 mg L-Glutamine 30 mg L-Arginine HCl 40 mg D-Biotin 30 mcg Vitamin B6(Pyridoxine Hydrochloride ) 1.5 mg Folic Acid 300 mcg Carbonyl Iron 15 mg Zinc Sulphate Monohydrate 7.5 mg Cyanocobalamin 1 mcg",
    "ingredients": [
      "L-Isoleucine",
      "L-Leucine",
      "L-Lysine Hydrochloride",
      "L-Valine",
      "L-Methionine",
      "L-Threonine",
      "L-Phenylalanine",
      "L-Tryptophan",
      "L-Glutamine",
      "L-Arginine HCl",
      "D-Biotin",
      "Vitamin B6",
      "Folic Acid",
      "Carbonyl Iron",
      "Zinc Sulphate Monohydrate",
      "Cyanocobalamin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Isoleucine 50 mg L-Leucine 65 mg L-Lysine Hydrochloride 80 mg L-Valine 35 mg L-Methionine 15 mg L-Threonine 15 mg L-Phenylalanine 15 mg L-Tryptophan 5 mg L-Glutamine 30 mg L-Arginine HCl 40 mg D-Biotin 30 mcg Vitamin B6(Pyridoxine Hydrochloride ) 1.5 mg Folic Acid 300 mcg Carbonyl Iron 15 mg Zinc Sulphate Monohydrate 7.5 mg Cyanocobalamin 1 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Isoleucine — 50 mg; L-Leucine — 65 mg; L-Lysine Hydrochloride — 80 mg; L-Valine — 35 mg; L-Methionine — 15 mg; L-Threonine — 15 mg; L-Phenylalanine — 15 mg; L-Tryptophan — 5 mg; L-Glutamine — 30 mg; L-Arginine HCl — 40 mg; D-Biotin — 30 mcg; Vitamin B6 — 1.5 mg; Folic Acid — 300 mcg; Carbonyl Iron — 15 mg; Zinc Sulphate Monohydrate — 7.5 mg; Cyanocobalamin — 1 mcg",
        "sourceComposition": "L-Isoleucine 50 mg L-Leucine 65 mg L-Lysine Hydrochloride 80 mg L-Valine 35 mg L-Methionine 15 mg L-Threonine 15 mg L-Phenylalanine 15 mg L-Tryptophan 5 mg L-Glutamine 30 mg L-Arginine HCl 40 mg D-Biotin 30 mcg Vitamin B6(Pyridoxine Hydrochloride ) 1.5 mg Folic Acid 300 mcg Carbonyl Iron 15 mg Zinc Sulphate Monohydrate 7.5 mg Cyanocobalamin 1 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 1,
        "sourceNumber": "1",
        "sourceRecordId": "source-0001"
      }
    ],
    "sources": [
      {
        "recordId": "source-0001",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 1,
        "number": "1"
      }
    ]
  },
  {
    "id": "p-16425106c386",
    "name": "L-Isoleucine, L-Leucine, L-Lysine Hydrochloride & Multinutrient Blend Food Formulation with L-Histidine, Vitamin B, Vitamin B2, Vitamin B3, Calcium D-Pantothenate, Ascorbic Acid, Vitamin E Acetate, Vitamin Aacetate, Copper Sulphate, Ferrous Sulphate, Magnesium Sulphate, Potassium Iodide, Sodium Selenate, Chromiumpolynicotianate, Hydroxyanthranlicacid, Vitamin D3",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "L-Isoleucine 5.9 mg L-Leucine 18.3 mg L-Lysine Hydrochloride 25 mg L-Valine 6.7 mg L-Methionine 10 mg L-Threonine 4.2 mg L-Phenylalanine 5 mg L-Tryptophan 4 mg L-Histidine 3.71 mg L-Arginine HCl 13.28 mg D-Biotin 20 mcg Vitamin B6 0.75 mg Vitamin B12.3 mg Vitamin B2 1.5 mg Cyanocobalamin 1 mcg Vitamin B3 23 mg Calcium D-Pantothenate 30 mcg Ascorbic Acid 50 mg Vitamin E Acetate 7.5 iu Vitamin Aacetate 1000 iu Copper Sulphate 1.4 mcg Ferrous Sulphate 0.4 mg Magnesium Sulphate 10 mcg Potassium Iodide 15 mcg Sodium Selenate 200 mcg Zinc Sulphate Monohydrate 17 mg Chromiumpolynicotianate 50 mcg Hydroxyanthranlicacid 0.2 mg Vitamin D3 200 iu",
    "ingredients": [
      "L-Isoleucine",
      "L-Leucine",
      "L-Lysine Hydrochloride",
      "L-Valine",
      "L-Methionine",
      "L-Threonine",
      "L-Phenylalanine",
      "L-Tryptophan",
      "L-Histidine",
      "L-Arginine HCl",
      "D-Biotin",
      "Vitamin B6",
      "Vitamin B",
      "Vitamin B2",
      "Cyanocobalamin",
      "Vitamin B3",
      "Calcium D-Pantothenate",
      "Ascorbic Acid",
      "Vitamin E Acetate",
      "Vitamin Aacetate",
      "Copper Sulphate",
      "Ferrous Sulphate",
      "Magnesium Sulphate",
      "Potassium Iodide",
      "Sodium Selenate",
      "Zinc Sulphate Monohydrate",
      "Chromiumpolynicotianate",
      "Hydroxyanthranlicacid",
      "Vitamin D3"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Isoleucine 5.9 mg L-Leucine 18.3 mg L-Lysine Hydrochloride 25 mg L-Valine 6.7 mg L-Methionine 10 mg L-Threonine 4.2 mg L-Phenylalanine 5 mg L-Tryptophan 4 mg L-Histidine 3.71 mg L-Arginine HCl 13.28 mg D-Biotin 20 mcg Vitamin B6 0.75 mg Vitamin B12.3 mg Vitamin B2 1.5 mg Cyanocobalamin 1 mcg Vitamin B3 23 mg Calcium D-Pantothenate 30 mcg Ascorbic Acid 50 mg Vitamin E Acetate 7.5 iu Vitamin Aacetate 1000 iu Copper Sulphate 1.4 mcg Ferrous Sulphate 0.4 mg Magnesium Sulphate 10 mcg Potassium Iodide 15 mcg Sodium Selenate 200 mcg Zinc Sulphate Monohydrate 17 mg Chromiumpolynicotianate 50 mcg Hydroxyanthranlicacid 0.2 mg Vitamin D3 200 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Isoleucine — 5.9 mg; L-Leucine — 18.3 mg; L-Lysine Hydrochloride — 25 mg; L-Valine — 6.7 mg; L-Methionine — 10 mg; L-Threonine — 4.2 mg; L-Phenylalanine — 5 mg; L-Tryptophan — 4 mg; L-Histidine — 3.71 mg; L-Arginine HCl — 13.28 mg; D-Biotin — 20 mcg; Vitamin B6 — 0.75 mg; Vitamin B — 12.3 mg; Vitamin B2 — 1.5 mg; Cyanocobalamin — 1 mcg; Vitamin B3 — 23 mg; Calcium D-Pantothenate — 30 mcg; Ascorbic Acid — 50 mg; Vitamin E Acetate — 7.5 iu; Vitamin Aacetate — 1000 iu; Copper Sulphate — 1.4 mcg; Ferrous Sulphate — 0.4 mg; Magnesium Sulphate — 10 mcg; Potassium Iodide — 15 mcg; Sodium Selenate — 200 mcg; Zinc Sulphate Monohydrate — 17 mg; Chromiumpolynicotianate — 50 mcg; Hydroxyanthranlicacid — 0.2 mg; Vitamin D3 — 200 iu",
        "sourceComposition": "L-Isoleucine 5.9 mg L-Leucine 18.3 mg L-Lysine Hydrochloride 25 mg L-Valine 6.7 mg L-Methionine 10 mg L-Threonine 4.2 mg L-Phenylalanine 5 mg L-Tryptophan 4 mg L-Histidine 3.71 mg L-Arginine HCl 13.28 mg D-Biotin 20 mcg Vitamin B6 0.75 mg Vitamin B12.3 mg Vitamin B2 1.5 mg Cyanocobalamin 1 mcg Vitamin B3 23 mg Calcium D-Pantothenate 30 mcg Ascorbic Acid 50 mg Vitamin E Acetate 7.5 iu Vitamin Aacetate 1000 iu Copper Sulphate 1.4 mcg Ferrous Sulphate 0.4 mg Magnesium Sulphate 10 mcg Potassium Iodide 15 mcg Sodium Selenate 200 mcg Zinc Sulphate Monohydrate 17 mg Chromiumpolynicotianate 50 mcg Hydroxyanthranlicacid 0.2 mg Vitamin D3 200 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 6,
        "sourceNumber": "32",
        "sourceRecordId": "source-0032"
      }
    ],
    "sources": [
      {
        "recordId": "source-0032",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 6,
        "number": "32"
      }
    ]
  },
  {
    "id": "p-c8341d3ab90e",
    "name": "L-Methionine, L-Threonine, L-Tryptophan & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "L-Methionine 50 mg L-Threonine 30 mg L-Tryptophan 15 mg L-Valine 40 mg L-Isoleucine 30 mg L-Phenylalanine 40 mg L-Lysine Hydrochloride 40 mg L-Arginine 500 mg L-Leucine 40 mg L-Tyrosine 40 mg L-Histidine 30 mg L-Glutamine 25 mg L-Glycine 15 mg L-Glutathione Reduced 5 mg",
    "ingredients": [
      "L-Methionine",
      "L-Threonine",
      "L-Tryptophan",
      "L-Valine",
      "L-Isoleucine",
      "L-Phenylalanine",
      "L-Lysine Hydrochloride",
      "L-Arginine",
      "L-Leucine",
      "L-Tyrosine",
      "L-Histidine",
      "L-Glutamine",
      "L-Glycine",
      "L-Glutathione Reduced"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "L-Methionine 50 mg L-Threonine 30 mg L-Tryptophan 15 mg L-Valine 40 mg L-Isoleucine 30 mg L-Phenylalanine 40 mg L-Lysine Hydrochloride 40 mg L-Arginine 500 mg L-Leucine 40 mg L-Tyrosine 40 mg L-Histidine 30 mg L-Glutamine 25 mg L-Glycine 15 mg L-Glutathione Reduced 5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Methionine — 50 mg; L-Threonine — 30 mg; L-Tryptophan — 15 mg; L-Valine — 40 mg; L-Isoleucine — 30 mg; L-Phenylalanine — 40 mg; L-Lysine Hydrochloride — 40 mg; L-Arginine — 500 mg; L-Leucine — 40 mg; L-Tyrosine — 40 mg; L-Histidine — 30 mg; L-Glutamine — 25 mg; L-Glycine — 15 mg; L-Glutathione Reduced — 5 mg",
        "sourceComposition": "L-Methionine 50 mg L-Threonine 30 mg L-Tryptophan 15 mg L-Valine 40 mg L-Isoleucine 30 mg L-Phenylalanine 40 mg L-Lysine Hydrochloride 40 mg L-Arginine 500 mg L-Leucine 40 mg L-Tyrosine 40 mg L-Histidine 30 mg L-Glutamine 25 mg L-Glycine 15 mg L-Glutathione Reduced 5 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 1,
        "sourceNumber": "4",
        "sourceRecordId": "source-0004"
      }
    ],
    "sources": [
      {
        "recordId": "source-0004",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 1,
        "number": "4"
      },
      {
        "recordId": "source-0045",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 8,
        "number": "45"
      },
      {
        "recordId": "source-0046",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 8,
        "number": "46"
      }
    ]
  },
  {
    "id": "p-b959eeab5af4",
    "name": "L-Methylfolate & Methylcobalamin & Pyridoxal 5-Phosphate Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "1 mg + 1500 mcg + 500 mcg"
    ],
    "composition": "L-Methylfolate 1 mg, Methylcobalamin 1500 mcg, Pyridoxal 5-Phosphate 500 mcg",
    "ingredients": [
      "L-Methylfolate",
      "Methylcobalamin",
      "Pyridoxal 5-Phosphate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "L-Methylfolate 1 mg, Methylcobalamin 1500 mcg, Pyridoxal 5-Phosphate 500 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Methylfolate — 1 mg; Methylcobalamin — 1500 mcg; Pyridoxal 5-Phosphate — 500 mcg",
        "sourceComposition": "L-Methylfolate 1 mg, Methylcobalamin 1500 mcg, Pyridoxal 5-Phosphate 500 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "16",
        "sourceRecordId": "source-0818"
      }
    ],
    "sources": [
      {
        "recordId": "source-0818",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "16"
      }
    ]
  },
  {
    "id": "p-757eda1b3d41",
    "name": "L-Methylfolate & Pyridoxal-5-Phosphate & DHA Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "800 mcg + 500 mcg + 200 mg"
    ],
    "composition": "L-Methylfolate 800 mcg, Pyridoxal-5-Phosphate 500 mcg, DHA 40% 200 mg",
    "ingredients": [
      "L-Methylfolate",
      "Pyridoxal-5-Phosphate",
      "DHA"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "L-Methylfolate 800 mcg, Pyridoxal-5-Phosphate 500 mcg, DHA 40% 200 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Methylfolate — 800 mcg; Pyridoxal-5-Phosphate — 500 mcg; DHA — 200 mg",
        "sourceComposition": "L-Methylfolate 800 mcg, Pyridoxal-5-Phosphate 500 mcg, DHA 40% 200 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "1",
        "sourceRecordId": "source-0733"
      }
    ],
    "sources": [
      {
        "recordId": "source-0733",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "1"
      }
    ]
  },
  {
    "id": "p-4ff2b0aeb781",
    "name": "L-Ornithine L-Aspartate & Pancreatin Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "150 mg + 100 mg"
    ],
    "composition": "L-Ornithine L-Aspartate 150 mg. Pancreatin 100 mg",
    "ingredients": [
      "L-Ornithine L-Aspartate",
      "Pancreatin"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "L-Ornithine L-Aspartate 150 mg. Pancreatin 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "L-Ornithine L-Aspartate — 150 mg; Pancreatin — 100 mg",
        "sourceComposition": "L-Ornithine L-Aspartate 150 mg. Pancreatin 100 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "14",
        "sourceRecordId": "source-0816"
      }
    ],
    "sources": [
      {
        "recordId": "source-0816",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "14"
      }
    ]
  },
  {
    "id": "p-4c322a017abd",
    "name": "Labetalol Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Labetalol Hydrochloride IP 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Labetalol Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Labetalol Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Labetalol Hydrochloride — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Labetalol Hydrochloride IP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "sourceNumber": "31",
        "sourceRecordId": "source-0127"
      }
    ],
    "sources": [
      {
        "recordId": "source-0127",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "number": "31"
      }
    ]
  },
  {
    "id": "p-b3a35a55bcc2",
    "name": "Lactic Acid Bacillus Viable Spores Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Uncoated Tablet Contains: Lactic Acid Bacillus Viable Spores 60 Million Excipients q.s.",
    "ingredients": [
      "Lactic Acid Bacillus Viable Spores"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Lactic Acid Bacillus60 Million Viable Spores Tablets",
      "Lactic Acid Bacillus120 Million Viable Spores Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lactic Acid Bacillus Viable Spores",
        "sourceComposition": "Each Uncoated Tablet Contains: Lactic Acid Bacillus Viable Spores 60 Million Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "sourceNumber": "109",
        "sourceRecordId": "source-0205"
      }
    ],
    "sources": [
      {
        "recordId": "source-0205",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "number": "109"
      },
      {
        "recordId": "source-0206",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "number": "110"
      }
    ]
  },
  {
    "id": "p-d2fd2943de5f",
    "name": "Lactobacillus Acidophilus, Lactobacillus Rhamnosus, Bifidobacterium Longum & Multinutrient Blend Sachets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Sachet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each1Gmsachetcontains Lactobacillusacidophilu 312.5Millionspores Lactobacillus Rhamnosus 312.5Million Spores Bifidobacterium Longum 312.5Millionspores Saccharomyces Boulardill 312.5Millionspores Fungal Amylase 50 mg Fructo Oligo Saccharide 100 mg Colour : Approved Colour Used.",
    "ingredients": [
      "Lactobacillus Acidophilus",
      "Lactobacillus Rhamnosus",
      "Bifidobacterium Longum",
      "Saccharomyces Boulardii",
      "Fungal Amylase",
      "Fructo Oligo Saccharide"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Each1Gmsachetcontains Lactobacillusacidophilu 312.5Millionspores Lactobacillus Rhamnosus 312.5Million Spores Bifidobacterium Longum 312.5Millionspores Saccharomyces Boulardill 312.5Millionspores Fungal Amylase 50 mg Fructo Oligo Saccharide 100 mg Colour : Approved Colour Used."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lactobacillus Acidophilus — 312.5Millionspores; Lactobacillus Rhamnosus — 312.5Million Spores; Bifidobacterium Longum — 312.5Millionspores; Saccharomyces Boulardii — 312.5Millionspores; Fungal Amylase — 50 mg; Fructo Oligo Saccharide — 100 mg",
        "sourceComposition": "Each1Gmsachetcontains Lactobacillusacidophilu 312.5Millionspores Lactobacillus Rhamnosus 312.5Million Spores Bifidobacterium Longum 312.5Millionspores Saccharomyces Boulardill 312.5Millionspores Fungal Amylase 50 mg Fructo Oligo Saccharide 100 mg Colour : Approved Colour Used.",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 19,
        "sourceNumber": "1",
        "sourceRecordId": "source-0094"
      }
    ],
    "sources": [
      {
        "recordId": "source-0094",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 19,
        "number": "1"
      }
    ]
  },
  {
    "id": "p-a14e9897104b",
    "name": "Letrozole Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg",
      "5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Letrozole IP 2.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Letrozole"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Letrozole Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Letrozole — 2.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Letrozole IP 2.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "sourceNumber": "69",
        "sourceRecordId": "source-0669"
      },
      {
        "label": "Standard formulation",
        "composition": "Letrozole — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Letrozole IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "sourceNumber": "70",
        "sourceRecordId": "source-0670"
      }
    ],
    "sources": [
      {
        "recordId": "source-0669",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "number": "69"
      },
      {
        "recordId": "source-0670",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "number": "70"
      }
    ]
  },
  {
    "id": "p-9106e0b677f0",
    "name": "Levetiracetam Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "750 mg",
      "500 mg"
    ],
    "composition": "Each Film Coated Prolonged Release Tablet Contains: Levetiracetam IP 750 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Levetiracetam"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Levetiracetam Prolonged Release Tablets IP",
      "Levetiracetam Prolonged Release Tablets IP500"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Levetiracetam — 750 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains: Levetiracetam IP 750 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "sourceNumber": "20",
        "sourceRecordId": "source-0116"
      },
      {
        "label": "Prolonged release",
        "composition": "Levetiracetam — 500 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains: Levetiracetam IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "sourceNumber": "347",
        "sourceRecordId": "source-0443"
      }
    ],
    "sources": [
      {
        "recordId": "source-0116",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "number": "20"
      },
      {
        "recordId": "source-0443",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "347"
      }
    ]
  },
  {
    "id": "p-799dd7514df3",
    "name": "Levocarnitine Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Levocarnitine IP 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Levocarnitine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Levocarnitine Tablets IP",
      "Levocarnitine Tablets IP (For Export Only)"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Levocarnitine — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Levocarnitine IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 63,
        "sourceNumber": "390",
        "sourceRecordId": "source-0486"
      }
    ],
    "sources": [
      {
        "recordId": "source-0486",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 63,
        "number": "390"
      },
      {
        "recordId": "source-0493",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 64,
        "number": "397"
      }
    ]
  },
  {
    "id": "p-b65897c73bef",
    "name": "Levocetirizine Dihydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Levocetirizine Dihydrochloride I.P. 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Levocetirizine Dihydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Levocetirizine Tablets I.P",
      "Levocetirizine Tablets IP 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Levocetirizine Dihydrochloride — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Levocetirizine Dihydrochloride I.P. 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "sourceNumber": "88",
        "sourceRecordId": "source-0184"
      },
      {
        "label": "Standard formulation",
        "composition": "Levocetirizine Dihydrochloride — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Levocetirizine Dihydrochloride I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "sourceNumber": "131",
        "sourceRecordId": "source-0227"
      }
    ],
    "sources": [
      {
        "recordId": "source-0184",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "number": "88"
      },
      {
        "recordId": "source-0227",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "number": "131"
      }
    ]
  },
  {
    "id": "p-4bf8dd88baea",
    "name": "Levocetirizine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "composition": "Each Uncoated Dispersible Tablet Contains: Levocetirizine Hydrochloride IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Levocetirizine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Levocetirizine Dihydrochloride Dispersible Tablets"
    ],
    "variants": [
      {
        "label": "Dispersible",
        "composition": "Levocetirizine Hydrochloride — 10 mg",
        "sourceComposition": "Each Uncoated Dispersible Tablet Contains: Levocetirizine Hydrochloride IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "sourceNumber": "211",
        "sourceRecordId": "source-0307"
      }
    ],
    "sources": [
      {
        "recordId": "source-0307",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "number": "211"
      }
    ]
  },
  {
    "id": "p-5a925c398fe8",
    "name": "Levofloxacin Hemihydrate Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Levofloxacin Hemihydrate Equivalentto Levofloxacin I.P. 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Levofloxacin Hemihydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Levofloxacin Tablets IP 500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Levofloxacin Hemihydrate — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Levofloxacin Hemihydrate Equivalentto Levofloxacin I.P. 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "sourceNumber": "140",
        "sourceRecordId": "source-0236"
      }
    ],
    "sources": [
      {
        "recordId": "source-0236",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "number": "140"
      }
    ]
  },
  {
    "id": "p-323c7b4611d0",
    "name": "Levonorgestrel & Ethinylestradiol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "0.15 mg + 0.03 mg",
      "100 mcg + 20 mcg",
      "250 mcg + 50 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Levonorgestrel I.P. 0.15 mg Ethinylestradiol I.P. 0.03 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Levonorgestrel",
      "Ethinylestradiol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Levonorgestrel and Ethinylestradiol Tablets I.P.",
      "Levonorgestrel&Ethinylestradiol Tablets",
      "Levonorgestrel&Ethinylestradiol Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Levonorgestrel — 0.15 mg; Ethinylestradiol — 0.03 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Levonorgestrel I.P. 0.15 mg Ethinylestradiol I.P. 0.03 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "sourceNumber": "17",
        "sourceRecordId": "source-0617"
      },
      {
        "label": "Standard formulation",
        "composition": "Levonorgestrel — 100 mcg; Ethinylestradiol — 20 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Levonorgestrel IP 100 mcg Ethinylestradiol IP 20 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "sourceNumber": "40",
        "sourceRecordId": "source-0640"
      },
      {
        "label": "Standard formulation",
        "composition": "Ethinylestradiol — 50 mcg; Levonorgestrel — 250 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ethinylestradiol IP 50 mcg Levonorgestrel IP 250 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "sourceNumber": "64",
        "sourceRecordId": "source-0664"
      }
    ],
    "sources": [
      {
        "recordId": "source-0617",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "number": "17"
      },
      {
        "recordId": "source-0640",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "number": "40"
      },
      {
        "recordId": "source-0664",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "number": "64"
      }
    ]
  },
  {
    "id": "p-f03d3f3333db",
    "name": "Levonorgestrel Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "0.75 mg",
      "1.5 mg",
      "0.03 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Levonorgestrel IP 0.75 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Levonorgestrel"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Levonorgestrel Tablets IP 0.75 mg",
      "Levonorgestrel Tablets IP 1.5 mg",
      "Levonorgestrel Tablets BP (For Export Only)",
      "Levonorgestrel Tablets BP Brand Name-Plusone-D (For Export Only)",
      "Levonorgestrel Tablets BP Brand Name-I-72 (For Export Only)",
      "Levonorgestreltablets BP",
      "Levonorgestreltablets BP One Day Tablets Pack Size-10x1x1Tablets Quantity-20,000 Nos",
      "Levonorgestreltablets BP (For Export Only)",
      "Brand Name - P2 Levonorgestrel Tablets BP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Levonorgestrel — 0.75 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Levonorgestrel IP 0.75 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "sourceNumber": "31",
        "sourceRecordId": "source-0631"
      },
      {
        "label": "Standard formulation",
        "composition": "Levonorgestrel — 1.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Levonorgestrel IP 1.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "sourceNumber": "32",
        "sourceRecordId": "source-0632"
      },
      {
        "label": "Standard formulation",
        "composition": "Levonorgestrel — 0.03 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Levonorgestrel BP 0.03 mg Excipients q.s. Approvedcolourused",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "sourceNumber": "59",
        "sourceRecordId": "source-0659"
      }
    ],
    "sources": [
      {
        "recordId": "source-0631",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "number": "31"
      },
      {
        "recordId": "source-0632",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "number": "32"
      },
      {
        "recordId": "source-0639",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "number": "39"
      },
      {
        "recordId": "source-0651",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "number": "51"
      },
      {
        "recordId": "source-0652",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "number": "52"
      },
      {
        "recordId": "source-0659",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "number": "59"
      },
      {
        "recordId": "source-0660",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "number": "60"
      },
      {
        "recordId": "source-0663",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "number": "63"
      },
      {
        "recordId": "source-0671",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "number": "71"
      }
    ]
  },
  {
    "id": "p-c3b8835f4be8",
    "name": "Linezolid Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "600 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Linezolid I.P. 600 mg Excipients Approved Colour Used",
    "ingredients": [
      "Linezolid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Linezolid Tablets IP600 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Linezolid — 600 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Linezolid I.P. 600 mg Excipients Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "sourceNumber": "141",
        "sourceRecordId": "source-0237"
      }
    ],
    "sources": [
      {
        "recordId": "source-0237",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "number": "141"
      }
    ]
  },
  {
    "id": "p-bd25707b40aa",
    "name": "Lornoxicam & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "4 mg + 325 mg",
      "8 mg + 325 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Lornoxicam IP 4 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Lornoxicam",
      "Paracetamol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Lornoxicam&Paracetamol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lornoxicam — 4 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Lornoxicam IP 4 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "sourceNumber": "257",
        "sourceRecordId": "source-0353"
      },
      {
        "label": "Standard formulation",
        "composition": "Lornoxicam — 8 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Film Coated Tablets Contains: Lornoxicam 8 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "sourceNumber": "332",
        "sourceRecordId": "source-0428"
      }
    ],
    "sources": [
      {
        "recordId": "source-0353",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "number": "257"
      },
      {
        "recordId": "source-0428",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "number": "332"
      }
    ]
  },
  {
    "id": "p-cf0ed49ce83b",
    "name": "Lornoxicam & Thiocolchicoside Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "4 mg + 4 mg",
      "4 mg + 8 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Lornoxicam 4 mg Thiocolchicoside IP 4 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Lornoxicam",
      "Thiocolchicoside"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Lornoxicam &Thiocolchicoside Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lornoxicam — 4 mg; Thiocolchicoside — 4 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Lornoxicam 4 mg Thiocolchicoside IP 4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "sourceNumber": "15",
        "sourceRecordId": "source-0111"
      },
      {
        "label": "Standard formulation",
        "composition": "Lornoxicam — 4 mg; Thiocolchicoside — 8 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Lornoxicam 4 mg Thiocolchicoside IP 8 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "sourceNumber": "16",
        "sourceRecordId": "source-0112"
      }
    ],
    "sources": [
      {
        "recordId": "source-0111",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "number": "15"
      },
      {
        "recordId": "source-0112",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "number": "16"
      }
    ]
  },
  {
    "id": "p-0c1dbef0e8b7",
    "name": "Losartan Potassium & Amlodipine Besylate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg + 5 mg",
      "25 mg + 5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Losartan Potassium I.P. 50 mg Amlodipine Besilate equivalentto Amlodipine I.P. 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Losartan Potassium",
      "Amlodipine Besylate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Losartan Potassium&Amlodipine Tablets IP",
      "Losartan Potassium& Amlodipine Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Losartan Potassium — 50 mg; Amlodipine Besylate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Losartan Potassium I.P. 50 mg Amlodipine Besilate equivalentto Amlodipine I.P. 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 6,
        "sourceNumber": "40",
        "sourceRecordId": "source-0136"
      },
      {
        "label": "Standard formulation",
        "composition": "Losartan Potassium — 25 mg; Amlodipine Besylate — 5 mg",
        "sourceComposition": "Each Film Coated Contains: Losartan Potassium IP 25 mg Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "sourceNumber": "248",
        "sourceRecordId": "source-0344"
      }
    ],
    "sources": [
      {
        "recordId": "source-0136",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 6,
        "number": "40"
      },
      {
        "recordId": "source-0344",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "number": "248"
      }
    ]
  },
  {
    "id": "p-2b24fcf3090e",
    "name": "Losartan Potassium & Chlorthalidone Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg + 6.25 mg",
      "25 mg + 12.5 mg",
      "50 mg + 6.25 mg",
      "50 mg + 12.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Losartan Potassium IP 25 mg Chlorthalidone IP 6.25 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Losartan Potassium",
      "Chlorthalidone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Losartan Potassium&Chlorthalidone Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Losartan Potassium — 25 mg; Chlorthalidone — 6.25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Losartan Potassium IP 25 mg Chlorthalidone IP 6.25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "sourceNumber": "213",
        "sourceRecordId": "source-0309"
      },
      {
        "label": "Standard formulation",
        "composition": "Losartan Potassium — 25 mg; Chlorthalidone — 12.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Losartan Potassium IP 25 mg Chlorthalidone IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "sourceNumber": "214",
        "sourceRecordId": "source-0310"
      },
      {
        "label": "Standard formulation",
        "composition": "Losartan Potassium — 50 mg; Chlorthalidone — 6.25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Losartan Potassium IP 50 mg Chlorthalidone IP 6.25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "sourceNumber": "215",
        "sourceRecordId": "source-0311"
      },
      {
        "label": "Standard formulation",
        "composition": "Losartan Potassium — 50 mg; Chlorthalidone — 12.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Losartan Potassium IP 50 mg Chlorthalidone IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "sourceNumber": "216",
        "sourceRecordId": "source-0312"
      }
    ],
    "sources": [
      {
        "recordId": "source-0309",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 33,
        "number": "213"
      },
      {
        "recordId": "source-0310",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "number": "214"
      },
      {
        "recordId": "source-0311",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "number": "215"
      },
      {
        "recordId": "source-0312",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "number": "216"
      }
    ]
  },
  {
    "id": "p-3b001192b6b9",
    "name": "Losartan Potassium Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg",
      "50 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Losartan Potassium I.P. 25 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Losartan Potassium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Losartan Potassium Tablets I.P.25 mg",
      "Losartan Potassium Tablets IP50 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Losartan Potassium — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Losartan Potassium I.P. 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "sourceNumber": "47",
        "sourceRecordId": "source-0143"
      },
      {
        "label": "Standard formulation",
        "composition": "Losartan Potassium — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains:: Losartan Potassium IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "sourceNumber": "143",
        "sourceRecordId": "source-0239"
      }
    ],
    "sources": [
      {
        "recordId": "source-0143",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "number": "47"
      },
      {
        "recordId": "source-0239",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "number": "143"
      }
    ]
  },
  {
    "id": "p-6872468f87a1",
    "name": "Lycopene Dispersion, Lutein, Lysine Hydrochloride & Multinutrient Blend Softgel Capsules (16-ingredient blend)",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Lycopene 10% Dispersion 5000 mcg, Lutein 8% 6 mg, Lysine Hydrochloride 50 mg, Niacinamide 18 mg, Vitamin B6 1 mg, Folic Acid 200 mcg, Biotin 10 mcg, Vitamin B12 1 mcg, Vitamin D3 5 mcg, Calcium AS Dibasic Calcium Phosphate 75 mg, Iron AS Ferrous Fumarate 17 mg, Magnesium AS Magnesium Hydroxide 10 mg, Zinc AS Zinc Sulphate Monohydrate 10 mg, Copper AS Cupric Sulphate 1.35 mg, Manganese AS Manganese Sulphate 5 mg, Selenium AS Sodium Selenite 200 mcg",
    "ingredients": [
      "Lycopene Dispersion",
      "Lutein",
      "Lysine Hydrochloride",
      "Niacinamide",
      "Vitamin B6",
      "Folic Acid",
      "Biotin",
      "Vitamin B12",
      "Vitamin D3",
      "Calcium AS Dibasic Calcium Phosphate",
      "Iron AS Ferrous Fumarate",
      "Magnesium AS Magnesium Hydroxide",
      "Zinc AS Zinc Sulphate Monohydrate",
      "Copper AS Cupric Sulphate",
      "Manganese AS Manganese Sulphate",
      "Selenium AS Sodium Selenite"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Lycopene 10% Dispersion 5000 mcg, Lutein 8% 6 mg, Lysine Hydrochloride 50 mg, Niacinamide 18 mg, Vitamin B6 1 mg, Folic Acid 200 mcg, Biotin 10 mcg, Vitamin B12 1 mcg, Vitamin D3 5 mcg, Calcium AS Dibasic Calcium Phosphate 75 mg, Iron AS Ferrous Fumarate 17 mg, Magnesium AS Magnesium Hydroxide 10 mg, Zinc AS Zinc Sulphate Monohydrate 10 mg, Copper AS Cupric Sulphate 1.35 mg, Manganese AS Manganese Sulphate 5 mg, Selenium AS Sodium Selenite 200 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lycopene Dispersion — 5000 mcg; Lutein — 6 mg; Lysine Hydrochloride — 50 mg; Niacinamide — 18 mg; Vitamin B6 — 1 mg; Folic Acid — 200 mcg; Biotin — 10 mcg; Vitamin B12 — 1 mcg; Vitamin D3 — 5 mcg; Calcium AS Dibasic Calcium Phosphate — 75 mg; Iron AS Ferrous Fumarate — 17 mg; Magnesium AS Magnesium Hydroxide — 10 mg; Zinc AS Zinc Sulphate Monohydrate — 10 mg; Copper AS Cupric Sulphate — 1.35 mg; Manganese AS Manganese Sulphate — 5 mg; Selenium AS Sodium Selenite — 200 mcg",
        "sourceComposition": "Lycopene 10% Dispersion 5000 mcg, Lutein 8% 6 mg, Lysine Hydrochloride 50 mg, Niacinamide 18 mg, Vitamin B6 1 mg, Folic Acid 200 mcg, Biotin 10 mcg, Vitamin B12 1 mcg, Vitamin D3 5 mcg, Calcium AS Dibasic Calcium Phosphate 75 mg, Iron AS Ferrous Fumarate 17 mg, Magnesium AS Magnesium Hydroxide 10 mg, Zinc AS Zinc Sulphate Monohydrate 10 mg, Copper AS Cupric Sulphate 1.35 mg, Manganese AS Manganese Sulphate 5 mg, Selenium AS Sodium Selenite 200 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "12",
        "sourceRecordId": "source-0744"
      }
    ],
    "sources": [
      {
        "recordId": "source-0744",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "12"
      }
    ]
  },
  {
    "id": "p-e587ad73abba",
    "name": "Lycopene Dispersion, Lutein, Lysine Hydrochloride & Multinutrient Blend Softgel Capsules with Methylcobalamin",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Lycopene 10% Dispersion 5000 mcg, Lutein 8% 6 mg, Lysine Hydrochloride 50 mg, Methylcobalamin 500 mcg, Niacinamide 18 mg, Vitamin B6 1 mg, Folic Acid 200 mcg, Biotin 10 mcg, Vitamin B12 1 mcg, Vitamin D3 5 mcg, Calcium AS Dibasic Calcium Phosphate 75 mg, Iron AS Ferrous Fumarate 17 mg, Magnesium AS Magnesium Hydroxide 10 mg, Zinc AS Zinc Sulphate Monohydrate 10 mg, Copper AS Cupric Sulphate 1.35 mg, Manganese AS Manganese Sulphate 5 mg, Selenium AS Sodium Selenite 200 mcg",
    "ingredients": [
      "Lycopene Dispersion",
      "Lutein",
      "Lysine Hydrochloride",
      "Methylcobalamin",
      "Niacinamide",
      "Vitamin B6",
      "Folic Acid",
      "Biotin",
      "Vitamin B12",
      "Vitamin D3",
      "Calcium AS Dibasic Calcium Phosphate",
      "Iron AS Ferrous Fumarate",
      "Magnesium AS Magnesium Hydroxide",
      "Zinc AS Zinc Sulphate Monohydrate",
      "Copper AS Cupric Sulphate",
      "Manganese AS Manganese Sulphate",
      "Selenium AS Sodium Selenite"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Lycopene 10% Dispersion 5000 mcg, Lutein 8% 6 mg, Lysine Hydrochloride 50 mg, Methylcobalamin 500 mcg, Niacinamide 18 mg, Vitamin B6 1 mg, Folic Acid 200 mcg, Biotin 10 mcg, Vitamin B12 1 mcg, Vitamin D3 5 mcg, Calcium AS Dibasic Calcium Phosphate 75 mg, Iron AS Ferrous Fumarate 17 mg, Magnesium AS Magnesium Hydroxide 10 mg, Zinc AS Zinc Sulphate Monohydrate 10 mg, Copper AS Cupric Sulphate 1.35 mg, Manganese AS Manganese Sulphate 5 mg, Selenium AS Sodium Selenite 200 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lycopene Dispersion — 5000 mcg; Lutein — 6 mg; Lysine Hydrochloride — 50 mg; Methylcobalamin — 500 mcg; Niacinamide — 18 mg; Vitamin B6 — 1 mg; Folic Acid — 200 mcg; Biotin — 10 mcg; Vitamin B12 — 1 mcg; Vitamin D3 — 5 mcg; Calcium AS Dibasic Calcium Phosphate — 75 mg; Iron AS Ferrous Fumarate — 17 mg; Magnesium AS Magnesium Hydroxide — 10 mg; Zinc AS Zinc Sulphate Monohydrate — 10 mg; Copper AS Cupric Sulphate — 1.35 mg; Manganese AS Manganese Sulphate — 5 mg; Selenium AS Sodium Selenite — 200 mcg",
        "sourceComposition": "Lycopene 10% Dispersion 5000 mcg, Lutein 8% 6 mg, Lysine Hydrochloride 50 mg, Methylcobalamin 500 mcg, Niacinamide 18 mg, Vitamin B6 1 mg, Folic Acid 200 mcg, Biotin 10 mcg, Vitamin B12 1 mcg, Vitamin D3 5 mcg, Calcium AS Dibasic Calcium Phosphate 75 mg, Iron AS Ferrous Fumarate 17 mg, Magnesium AS Magnesium Hydroxide 10 mg, Zinc AS Zinc Sulphate Monohydrate 10 mg, Copper AS Cupric Sulphate 1.35 mg, Manganese AS Manganese Sulphate 5 mg, Selenium AS Sodium Selenite 200 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "13",
        "sourceRecordId": "source-0745"
      }
    ],
    "sources": [
      {
        "recordId": "source-0745",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "13"
      }
    ]
  },
  {
    "id": "p-8a501aa26316",
    "name": "Lycopene Dispersion, Vitamin A, Vitamin B1 & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Lycopene 10% Dispersion 7500 mcg, Vitamin A(AS Acetate) 2000 I.U., Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 1.50 mg, Vitamin B12 1 mcg, Vitamin C (Cotaed) 25 mg, Vitamin D3 200 I.U., Vitamin E10 mg, Calcium Pantothenate 5 mg, Zinc AS Zinc Oxide 12 mg, Folic Acid 200 mcg, Copper AS Copper Sulphate 1.35 mg, Potassium AS Potassium Chloride 0.98 mg, Magnesium AS Magnesium Oxide 10 mg, Manganese AS Manganese Chloride 2.80 mg, Selenium AS Sodium Selenite 100 mcg, Chromium AS Chromium Chloride 33 mcg",
    "ingredients": [
      "Lycopene Dispersion",
      "Vitamin A",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D3",
      "Vitamin E",
      "Calcium Pantothenate",
      "Zinc AS Zinc Oxide",
      "Folic Acid",
      "Copper AS Copper Sulphate",
      "Potassium AS Potassium Chloride",
      "Magnesium AS Magnesium Oxide",
      "Manganese AS Manganese Chloride",
      "Selenium AS Sodium Selenite",
      "Chromium AS Chromium Chloride"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Lycopene 10% Dispersion 7500 mcg, Vitamin A(AS Acetate) 2000 I.U., Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 1.50 mg, Vitamin B12 1 mcg, Vitamin C (Cotaed) 25 mg, Vitamin D3 200 I.U., Vitamin E10 mg, Calcium Pantothenate 5 mg, Zinc AS Zinc Oxide 12 mg, Folic Acid 200 mcg, Copper AS Copper Sulphate 1.35 mg, Potassium AS Potassium Chloride 0.98 mg, Magnesium AS Magnesium Oxide 10 mg, Manganese AS Manganese Chloride 2.80 mg, Selenium AS Sodium Selenite 100 mcg, Chromium AS Chromium Chloride 33 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lycopene Dispersion — 7500 mcg; Vitamin A — 2000 I.U; Vitamin B1 — 1.4 mg; Vitamin B2 — 1.6 mg; Vitamin B6 — 1.50 mg; Vitamin B12 — 1 mcg; Vitamin C — 25 mg; Vitamin D3 — 200 I.U; Vitamin E — 10 mg; Calcium Pantothenate — 5 mg; Zinc AS Zinc Oxide — 12 mg; Folic Acid — 200 mcg; Copper AS Copper Sulphate — 1.35 mg; Potassium AS Potassium Chloride — 0.98 mg; Magnesium AS Magnesium Oxide — 10 mg; Manganese AS Manganese Chloride — 2.80 mg; Selenium AS Sodium Selenite — 100 mcg; Chromium AS Chromium Chloride — 33 mcg",
        "sourceComposition": "Lycopene 10% Dispersion 7500 mcg, Vitamin A(AS Acetate) 2000 I.U., Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 1.50 mg, Vitamin B12 1 mcg, Vitamin C (Cotaed) 25 mg, Vitamin D3 200 I.U., Vitamin E10 mg, Calcium Pantothenate 5 mg, Zinc AS Zinc Oxide 12 mg, Folic Acid 200 mcg, Copper AS Copper Sulphate 1.35 mg, Potassium AS Potassium Chloride 0.98 mg, Magnesium AS Magnesium Oxide 10 mg, Manganese AS Manganese Chloride 2.80 mg, Selenium AS Sodium Selenite 100 mcg, Chromium AS Chromium Chloride 33 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "11",
        "sourceRecordId": "source-0743"
      }
    ],
    "sources": [
      {
        "recordId": "source-0743",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "11"
      }
    ]
  },
  {
    "id": "p-5a7b516632ff",
    "name": "Lycopene Powder, Ascorbic Acid Coated, Vitamin B3 & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Lycopene Powder10% 2 mg Ascorbic Acid Coated 25 mg Vitamin B3 12 mg Vitamin E Acetate50%Powder 8 mg Calcium D-Pantothenate 3 mg Vitamin B2 0.9 mg Vitamin B6 1.5 mg Vitamin B1 0.8 mg Vitamin A Acetate Powder 350 mcg Folic Acid 60 mcg Zinc Oxide 9 mg Manganese Chloride 2 mg Copper Gluconate 900 mcg",
    "ingredients": [
      "Lycopene Powder",
      "Ascorbic Acid Coated",
      "Vitamin B3",
      "Vitamin E Acetate Powder",
      "Calcium D-Pantothenate",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B1",
      "Vitamin A Acetate Powder",
      "Folic Acid",
      "Zinc Oxide",
      "Manganese Chloride",
      "Copper Gluconate"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Lycopene Powder10% 2 mg Ascorbic Acid Coated 25 mg Vitamin B3 12 mg Vitamin E Acetate50%Powder 8 mg Calcium D-Pantothenate 3 mg Vitamin B2 0.9 mg Vitamin B6 1.5 mg Vitamin B1 0.8 mg Vitamin A Acetate Powder 350 mcg Folic Acid 60 mcg Zinc Oxide 9 mg Manganese Chloride 2 mg Copper Gluconate 900 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lycopene Powder — 2 mg; Ascorbic Acid Coated — 25 mg; Vitamin B3 — 12 mg; Vitamin E Acetate Powder — 8 mg; Calcium D-Pantothenate — 3 mg; Vitamin B2 — 0.9 mg; Vitamin B6 — 1.5 mg; Vitamin B1 — 0.8 mg; Vitamin A Acetate Powder — 350 mcg; Folic Acid — 60 mcg; Zinc Oxide — 9 mg; Manganese Chloride — 2 mg; Copper Gluconate — 900 mcg",
        "sourceComposition": "Lycopene Powder10% 2 mg Ascorbic Acid Coated 25 mg Vitamin B3 12 mg Vitamin E Acetate50%Powder 8 mg Calcium D-Pantothenate 3 mg Vitamin B2 0.9 mg Vitamin B6 1.5 mg Vitamin B1 0.8 mg Vitamin A Acetate Powder 350 mcg Folic Acid 60 mcg Zinc Oxide 9 mg Manganese Chloride 2 mg Copper Gluconate 900 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "sourceNumber": "55",
        "sourceRecordId": "source-0055"
      }
    ],
    "sources": [
      {
        "recordId": "source-0055",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "number": "55"
      }
    ]
  },
  {
    "id": "p-7c380f26d097",
    "name": "Lycopene, Cyanocobalamin, Pyridoxine Hydrochloride & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Lycopene 10 % 2000 mcg Cyanocobalamin 2.5 mcg Pyridoxine Hydrochloride 1.5 mg Niacinamide 25 mg Zinc Sulphate Monohydrate 7.5 mg Copper Sulphate Pentahydrate 1 mg Manganese Sulphate 1.5 mg Beta Carotene 30 % 10 mg Selenium Dioxide Monohydrate 25 mcg",
    "ingredients": [
      "Lycopene",
      "Cyanocobalamin",
      "Pyridoxine Hydrochloride",
      "Niacinamide",
      "Zinc Sulphate Monohydrate",
      "Copper Sulphate Pentahydrate",
      "Manganese Sulphate",
      "Beta Carotene",
      "Selenium Dioxide Monohydrate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Lycopene 10 % 2000 mcg Cyanocobalamin 2.5 mcg Pyridoxine Hydrochloride 1.5 mg Niacinamide 25 mg Zinc Sulphate Monohydrate 7.5 mg Copper Sulphate Pentahydrate 1 mg Manganese Sulphate 1.5 mg Beta Carotene 30 % 10 mg Selenium Dioxide Monohydrate 25 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lycopene — 2000 mcg; Cyanocobalamin — 2.5 mcg; Pyridoxine Hydrochloride — 1.5 mg; Niacinamide — 25 mg; Zinc Sulphate Monohydrate — 7.5 mg; Copper Sulphate Pentahydrate — 1 mg; Manganese Sulphate — 1.5 mg; Beta Carotene — 10 mg; Selenium Dioxide Monohydrate — 25 mcg",
        "sourceComposition": "Lycopene 10 % 2000 mcg Cyanocobalamin 2.5 mcg Pyridoxine Hydrochloride 1.5 mg Niacinamide 25 mg Zinc Sulphate Monohydrate 7.5 mg Copper Sulphate Pentahydrate 1 mg Manganese Sulphate 1.5 mg Beta Carotene 30 % 10 mg Selenium Dioxide Monohydrate 25 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "39",
        "sourceRecordId": "source-0720"
      }
    ],
    "sources": [
      {
        "recordId": "source-0720",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "39"
      }
    ]
  },
  {
    "id": "p-11a2b6036d40",
    "name": "Lycopene, Ginkgo Biloba, Iron as Carbonyl Iron & Multinutrient Blend Capsules",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Lycopene 6% 5000 mcg, Ginkgo Biloba 60 mg, Iron as Carbonyl Iron 10.25 mg, Calcium as Calcium Carbonate 22.75 mg, Grape Seed Extract 18.65 mg, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B3 12.5 mg, Vitamin B5 2.75 mg, Vitamin B6 2 mg, Vitamin B9 200 mcg, Vitamin B12 1 mcg, Vitamin A2000 iu, Vitamin C 25 mg, Vitamin D325 iu, Vitamin E14.9 iu, Chromium as Chromium Chloride 33 mcg, Magnesium as Magnesium Oxide 11.85 mg, Iodine as Sodium Iodide 100 mcg, Copper as Copper Sulphate 1.35 mcg, Molybdenum as Sodium Mloybdate 16 mcg, Zinc as Zinc Oxide 70 mcg, L-Glutamic Acid 17.5 mg, L-Lysine Hydrochloride 15 mg",
    "ingredients": [
      "Lycopene",
      "Ginkgo Biloba",
      "Iron as Carbonyl Iron",
      "Calcium as Calcium Carbonate",
      "Grape Seed Extract",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B3",
      "Vitamin B5",
      "Vitamin B6",
      "Vitamin B9",
      "Vitamin B12",
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E",
      "Chromium as Chromium Chloride",
      "Magnesium as Magnesium Oxide",
      "Iodine as Sodium Iodide",
      "Copper as Copper Sulphate",
      "Molybdenum as Sodium Mloybdate",
      "Zinc as Zinc Oxide",
      "L-Glutamic Acid",
      "L-Lysine Hydrochloride"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Lycopene 6% 5000 mcg, Ginkgo Biloba 60 mg, Iron as Carbonyl Iron 10.25 mg, Calcium as Calcium Carbonate 22.75 mg, Grape Seed Extract 18.65 mg, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B3 12.5 mg, Vitamin B5 2.75 mg, Vitamin B6 2 mg, Vitamin B9 200 mcg, Vitamin B12 1 mcg, Vitamin A2000 iu, Vitamin C 25 mg, Vitamin D325 iu, Vitamin E14.9 iu, Chromium as Chromium Chloride 33 mcg, Magnesium as Magnesium Oxide 11.85 mg, Iodine as Sodium Iodide 100 mcg, Copper as Copper Sulphate 1.35 mcg, Molybdenum as Sodium Mloybdate 16 mcg, Zinc as Zinc Oxide 70 mcg, L-Glutamic Acid 17.5 mg, L-Lysine Hydrochloride 15 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lycopene — 5000 mcg; Ginkgo Biloba — 60 mg; Iron as Carbonyl Iron — 10.25 mg; Calcium as Calcium Carbonate — 22.75 mg; Grape Seed Extract — 18.65 mg; Vitamin B1 — 1.4 mg; Vitamin B2 — 1.6 mg; Vitamin B3 — 12.5 mg; Vitamin B5 — 2.75 mg; Vitamin B6 — 2 mg; Vitamin B9 — 200 mcg; Vitamin B12 — 1 mcg; Vitamin A — 2000 iu; Vitamin C — 25 mg; Vitamin D — 325 iu; Vitamin E — 14.9 iu; Chromium as Chromium Chloride — 33 mcg; Magnesium as Magnesium Oxide — 11.85 mg; Iodine as Sodium Iodide — 100 mcg; Copper as Copper Sulphate — 1.35 mcg; Molybdenum as Sodium Mloybdate — 16 mcg; Zinc as Zinc Oxide — 70 mcg; L-Glutamic Acid — 17.5 mg; L-Lysine Hydrochloride — 15 mg",
        "sourceComposition": "Lycopene 6% 5000 mcg, Ginkgo Biloba 60 mg, Iron as Carbonyl Iron 10.25 mg, Calcium as Calcium Carbonate 22.75 mg, Grape Seed Extract 18.65 mg, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B3 12.5 mg, Vitamin B5 2.75 mg, Vitamin B6 2 mg, Vitamin B9 200 mcg, Vitamin B12 1 mcg, Vitamin A2000 iu, Vitamin C 25 mg, Vitamin D325 iu, Vitamin E14.9 iu, Chromium as Chromium Chloride 33 mcg, Magnesium as Magnesium Oxide 11.85 mg, Iodine as Sodium Iodide 100 mcg, Copper as Copper Sulphate 1.35 mcg, Molybdenum as Sodium Mloybdate 16 mcg, Zinc as Zinc Oxide 70 mcg, L-Glutamic Acid 17.5 mg, L-Lysine Hydrochloride 15 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "31",
        "sourceRecordId": "source-0798"
      }
    ],
    "sources": [
      {
        "recordId": "source-0798",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "31"
      }
    ]
  },
  {
    "id": "p-8edd7f6a5b15",
    "name": "Lycopene, Lutein, Beta Carotene & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Lycopene 6% 5000 mcg, Lutein 8% 2000 mcg, Beta Carotene 10% 4.8 mg, Zinc AS Zinc Monohydrate 70 mcg, Grape Seed Extract 10 mg",
    "ingredients": [
      "Lycopene",
      "Lutein",
      "Beta Carotene",
      "Zinc AS Zinc Monohydrate",
      "Grape Seed Extract"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Lycopene 6% 5000 mcg, Lutein 8% 2000 mcg, Beta Carotene 10% 4.8 mg, Zinc AS Zinc Monohydrate 70 mcg, Grape Seed Extract 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lycopene — 5000 mcg; Lutein — 2000 mcg; Beta Carotene — 4.8 mg; Zinc AS Zinc Monohydrate — 70 mcg; Grape Seed Extract — 10 mg",
        "sourceComposition": "Lycopene 6% 5000 mcg, Lutein 8% 2000 mcg, Beta Carotene 10% 4.8 mg, Zinc AS Zinc Monohydrate 70 mcg, Grape Seed Extract 10 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "9",
        "sourceRecordId": "source-0741"
      }
    ],
    "sources": [
      {
        "recordId": "source-0741",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "9"
      }
    ]
  },
  {
    "id": "p-acda1d22e546",
    "name": "Lycopene, Vitamin A, Vitamin C & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Lycopene 6% 2000 mg, Vitamin A200 iu, Vitamin C 40 mg, Vitamin E10 iu, Zinc Sulphate Monohydrate 12 mg, Chromium 33 mcg",
    "ingredients": [
      "Lycopene",
      "Vitamin A",
      "Vitamin C",
      "Vitamin E",
      "Zinc Sulphate Monohydrate",
      "Chromium"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Lycopene 6% 2000 mg, Vitamin A200 iu, Vitamin C 40 mg, Vitamin E10 iu, Zinc Sulphate Monohydrate 12 mg, Chromium 33 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lycopene — 2000 mg; Vitamin A — 200 iu; Vitamin C — 40 mg; Vitamin E — 10 iu; Zinc Sulphate Monohydrate — 12 mg; Chromium — 33 mcg",
        "sourceComposition": "Lycopene 6% 2000 mg, Vitamin A200 iu, Vitamin C 40 mg, Vitamin E10 iu, Zinc Sulphate Monohydrate 12 mg, Chromium 33 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "10",
        "sourceRecordId": "source-0742"
      }
    ],
    "sources": [
      {
        "recordId": "source-0742",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "10"
      }
    ]
  },
  {
    "id": "p-b585cb22a044",
    "name": "Lymecycline Capsules",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "BP",
    "availableStrengths": [
      "408 mg / 300 mg"
    ],
    "composition": "Each Hard Gelatin Capsules Contains: Lymecycline Equivalentto Tetracyclinebase BP 408 mg 300 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell",
    "ingredients": [
      "Lymecycline"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Lymecycline Capsules BP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Lymecycline — 408 mg / 300 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains: Lymecycline Equivalentto Tetracyclinebase BP 408 mg 300 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "sourceNumber": "439",
        "sourceRecordId": "source-0535"
      }
    ],
    "sources": [
      {
        "recordId": "source-0535",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 70,
        "number": "439"
      }
    ]
  },
  {
    "id": "p-08951b1afff7",
    "name": "Magnesium Bisglycinate & Calcium Citrate Malate & Vitamin D3 Stabilized Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "350 mg + 1000 mg + 600 iu"
    ],
    "composition": "Magnesium Bisglycinate 350 mg Calcium Citrate Malate 1000 mg Vitamin D3 Stabilized 600 iu",
    "ingredients": [
      "Magnesium Bisglycinate",
      "Calcium Citrate Malate",
      "Vitamin D3 Stabilized"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Magnesium Bisglycinate 350 mg Calcium Citrate Malate 1000 mg Vitamin D3 Stabilized 600 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Magnesium Bisglycinate — 350 mg; Calcium Citrate Malate — 1000 mg; Vitamin D3 Stabilized — 600 iu",
        "sourceComposition": "Magnesium Bisglycinate 350 mg Calcium Citrate Malate 1000 mg Vitamin D3 Stabilized 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 1,
        "sourceNumber": "2",
        "sourceRecordId": "source-0002"
      }
    ],
    "sources": [
      {
        "recordId": "source-0002",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 1,
        "number": "2"
      }
    ]
  },
  {
    "id": "p-ee18d9754655",
    "name": "Mebeverine Hydrochloride Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg"
    ],
    "composition": "Each Prolonged Release Capsule Contains: Mebeverine Hydrochloride IP 200 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
    "ingredients": [
      "Mebeverine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Mebeverine HCl Prolonged Release Capsule200 mg",
      "Mebeverine Hydrochloride Prolonged Release Capsule 200 mg"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Mebeverine Hydrochloride — 200 mg",
        "sourceComposition": "Each Prolonged Release Capsule Contains: Mebeverine Hydrochloride IP 200 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 49,
        "sourceNumber": "303",
        "sourceRecordId": "source-0399"
      },
      {
        "label": "Sustained release, Prolonged release",
        "composition": "Mebeverine Hydrochloride — 200 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains : Mebeverine Hydrochloride (as Sustained Release Form) IP 200 mg Excipients q.s. Approved Colour Used in empty Capsule shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "sourceNumber": "487",
        "sourceRecordId": "source-0583"
      }
    ],
    "sources": [
      {
        "recordId": "source-0399",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 49,
        "number": "303"
      },
      {
        "recordId": "source-0583",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "number": "487"
      }
    ]
  },
  {
    "id": "p-bde17cd414f0",
    "name": "Mebeverine Hydrochloride Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "135 mg"
    ],
    "composition": "Each Film Coated Tablet Contains : Mebeverine Hydrochloride IP 135 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Mebeverine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Mebeverine Hydrochloride Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Mebeverine Hydrochloride — 135 mg",
        "sourceComposition": "Each Film Coated Tablet Contains : Mebeverine Hydrochloride IP 135 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "sourceNumber": "476",
        "sourceRecordId": "source-0572"
      }
    ],
    "sources": [
      {
        "recordId": "source-0572",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "number": "476"
      }
    ]
  },
  {
    "id": "p-287d07590b51",
    "name": "Medroxyprogesterone Acetate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Medroxyprogesterone Acetate IP 10 mg Excipients q.s.",
    "ingredients": [
      "Medroxyprogesterone Acetate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Medroxyprogesteron Eacetate Tablets IP10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Medroxyprogesterone Acetate — 10 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Medroxyprogesterone Acetate IP 10 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "sourceNumber": "44",
        "sourceRecordId": "source-0644"
      }
    ],
    "sources": [
      {
        "recordId": "source-0644",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "number": "44"
      }
    ]
  },
  {
    "id": "p-5388beedc2b2",
    "name": "Mefenamic Acid & Dicyclomine Hydrochloride Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "250 mg + 10 mg",
      "500 mg + 20 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Mefenamic Acid IP 250 mg Dicyclomine Hydrochloride IP 10 mg Excipients q.s.",
    "ingredients": [
      "Mefenamic Acid",
      "Dicyclomine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Mefenamic Acid &Dicyclomine Hydrochloride Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Mefenamic Acid — 250 mg; Dicyclomine Hydrochloride — 10 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Mefenamic Acid IP 250 mg Dicyclomine Hydrochloride IP 10 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "sourceNumber": "321",
        "sourceRecordId": "source-0417"
      },
      {
        "label": "Standard formulation",
        "composition": "Mefenamic Acid — 500 mg; Dicyclomine Hydrochloride — 20 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Mefenamic Acid IP 500 mg Dicyclomine Hydrochloride IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "sourceNumber": "380",
        "sourceRecordId": "source-0476"
      }
    ],
    "sources": [
      {
        "recordId": "source-0417",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "number": "321"
      },
      {
        "recordId": "source-0476",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "number": "380"
      }
    ]
  },
  {
    "id": "p-8a927fdfd90c",
    "name": "Megestrol Acetate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "160 mg",
      "20 mg",
      "80 mg",
      "40 mg"
    ],
    "composition": "Each Uncoated Tablet Contains Megestrol Acetate IP 160 mg Excipients q.s.",
    "ingredients": [
      "Megestrol Acetate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Megestrol Acetate Tablets IP",
      "Megestrol Acetate Tablets USP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Megestrol Acetate — 160 mg",
        "sourceComposition": "Each Uncoated Tablet Contains Megestrol Acetate IP 160 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "sourceNumber": "30",
        "sourceRecordId": "source-0630"
      },
      {
        "label": "Standard formulation",
        "composition": "Megestrol Acetate — 20 mg",
        "sourceComposition": "Each Uncoated Tablet Contains : Megestrol Acetate IP 20 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "sourceNumber": "73",
        "sourceRecordId": "source-0673"
      },
      {
        "label": "Standard formulation",
        "composition": "Megestrol Acetate — 80 mg",
        "sourceComposition": "Each Uncoated Tablets Contains: Megestrol Acetate IP 80 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "sourceNumber": "74",
        "sourceRecordId": "source-0674"
      },
      {
        "label": "Standard formulation",
        "composition": "Megestrol Acetate — 40 mg",
        "sourceComposition": "Each Uncoated Tablets Contains: Megestrol Acetate IP 40 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "sourceNumber": "75",
        "sourceRecordId": "source-0675"
      }
    ],
    "sources": [
      {
        "recordId": "source-0630",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "number": "30"
      },
      {
        "recordId": "source-0673",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "number": "73"
      },
      {
        "recordId": "source-0674",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "number": "74"
      },
      {
        "recordId": "source-0675",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "number": "75"
      }
    ]
  },
  {
    "id": "p-ed0b036dbe3d",
    "name": "Mesterolone Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "10 mg",
      "25 mg"
    ],
    "composition": "Each Uncoated Tablets Contains : Mesterolone BP 10 mg Excipients q.s.",
    "ingredients": [
      "Mesterolone"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Mesterolone Tablets 10 mg",
      "Mesterolone Tablets 25 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Mesterolone — 10 mg",
        "sourceComposition": "Each Uncoated Tablets Contains : Mesterolone BP 10 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "sourceNumber": "80",
        "sourceRecordId": "source-0680"
      },
      {
        "label": "Standard formulation",
        "composition": "Mesterolone — 25 mg",
        "sourceComposition": "Each Uncoated Tablets Contains : Mesterolone BP 25 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 12,
        "sourceNumber": "81",
        "sourceRecordId": "source-0681"
      }
    ],
    "sources": [
      {
        "recordId": "source-0680",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "number": "80"
      },
      {
        "recordId": "source-0681",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 12,
        "number": "81"
      }
    ]
  },
  {
    "id": "p-59fd9212cf5e",
    "name": "Metformin Hydrochloride & Fenofibrate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg + 80 mg",
      "500 mg + 160 mg"
    ],
    "composition": "Each Uncoated Tablet Contains Metformin Hydrochloride (as Extended Releaseform) IP 500 mg Fenofibrate IP 80 mg Excipients q.s.",
    "ingredients": [
      "Metformin Hydrochloride",
      "Fenofibrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metformin HCl(ER)& Fenofibrate Tablets"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Metformin Hydrochloride — 500 mg; Fenofibrate — 80 mg",
        "sourceComposition": "Each Uncoated Tablet Contains Metformin Hydrochloride (as Extended Releaseform) IP 500 mg Fenofibrate IP 80 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "sourceNumber": "244",
        "sourceRecordId": "source-0340"
      },
      {
        "label": "Extended release",
        "composition": "Metformin Hydrochloride — 500 mg; Fenofibrate — 160 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Metformin Hydrochloride (as Extended Releaseform) IP 500 mg Fenofibrate IP 160 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "sourceNumber": "245",
        "sourceRecordId": "source-0341"
      }
    ],
    "sources": [
      {
        "recordId": "source-0340",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "number": "244"
      },
      {
        "recordId": "source-0341",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "number": "245"
      }
    ]
  },
  {
    "id": "p-fefdd3ec6dd4",
    "name": "Metformin Hydrochloride & Glimepiride & Voglibose Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg + 2 mg + 0.3 mg",
      "500 mg + 1 mg + 0.2 mg",
      "500 mg + 2 mg + 0.2 mg"
    ],
    "composition": "Each Uncoated Bilayered Tablet Contains: Metformin Hydrochloride (assustainedreleaseform) IP 500 mg Glimepiride IP 2 mg Voglibose IP 0.3 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metformin Hydrochloride",
      "Glimepiride",
      "Voglibose"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metformin Hydrochloride(SR) Glimepiride & Voglibose Tablets"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Metformin Hydrochloride — 500 mg; Glimepiride — 2 mg; Voglibose — 0.3 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metformin Hydrochloride (assustainedreleaseform) IP 500 mg Glimepiride IP 2 mg Voglibose IP 0.3 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 54,
        "sourceNumber": "334",
        "sourceRecordId": "source-0430"
      },
      {
        "label": "Sustained release",
        "composition": "Metformin Hydrochloride — 500 mg; Glimepiride — 1 mg; Voglibose — 0.2 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metformin Hydrochloride (assustainedreleaseform) IP 500 mg Glimepiride IP 1 mg Voglibose IP 0.2 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 54,
        "sourceNumber": "335",
        "sourceRecordId": "source-0431"
      },
      {
        "label": "Sustained release",
        "composition": "Metformin Hydrochloride — 500 mg; Glimepiride — 2 mg; Voglibose — 0.2 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metformin Hydrochloride (assustainedreleaseform) IP 500 mg Glimepiride IP 2 mg Voglibose IP 0.2 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "sourceNumber": "342",
        "sourceRecordId": "source-0438"
      }
    ],
    "sources": [
      {
        "recordId": "source-0430",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 54,
        "number": "334"
      },
      {
        "recordId": "source-0431",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 54,
        "number": "335"
      },
      {
        "recordId": "source-0438",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "number": "342"
      }
    ]
  },
  {
    "id": "p-93ab55e99a76",
    "name": "Metformin Hydrochloride & Nateglinide Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "500 mg + 60 mg"
    ],
    "composition": "Each Uncoated Bilayered Tablet Contains: Metformin Hydrochloride (assustainedreleaseform) IP 500 mg Nateglinide USP 60 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metformin Hydrochloride",
      "Nateglinide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Nateglinide&Metformin HCl (SR) Tablets"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Metformin Hydrochloride — 500 mg; Nateglinide — 60 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metformin Hydrochloride (assustainedreleaseform) IP 500 mg Nateglinide USP 60 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "sourceNumber": "175",
        "sourceRecordId": "source-0271"
      }
    ],
    "sources": [
      {
        "recordId": "source-0271",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "number": "175"
      }
    ]
  },
  {
    "id": "p-1c18b8eee429",
    "name": "Metformin Hydrochloride & Voglibose Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg + 0.2 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Metformin Hydrochloride IP 500 mg Voglibose IP 0.2 mg Excipients q.s.",
    "ingredients": [
      "Metformin Hydrochloride",
      "Voglibose"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Voglibose&Metformin HCl Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Metformin Hydrochloride — 500 mg; Voglibose — 0.2 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Metformin Hydrochloride IP 500 mg Voglibose IP 0.2 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "sourceNumber": "272",
        "sourceRecordId": "source-0368"
      }
    ],
    "sources": [
      {
        "recordId": "source-0368",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 43,
        "number": "272"
      }
    ]
  },
  {
    "id": "p-70d751119b9b",
    "name": "Metformin Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "composition": "Each Film Coated Prolonged Release Tablet Contains: Metformin Hydrochloride I.P. 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metformin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metformin Hydrochloride Prolonged Release Tablets I.P.",
      "Metformin Hydrochloride Prolonged Release Tablets IP1000 mg"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains: Metformin Hydrochloride I.P. 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "sourceNumber": "73",
        "sourceRecordId": "source-0169"
      },
      {
        "label": "Prolonged release",
        "composition": "Metformin Hydrochloride — 1000 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains: Metformin Hydrochloride IP 1000 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "sourceNumber": "343",
        "sourceRecordId": "source-0439"
      }
    ],
    "sources": [
      {
        "recordId": "source-0169",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "number": "73"
      },
      {
        "recordId": "source-0439",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "343"
      }
    ]
  },
  {
    "id": "p-843be0d0be88",
    "name": "Methylcobalamin & Alpha Lipoic Acid & Benfotiamine & Folic Acid Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "500 mcg + 100 mg + 50 mg + 1.5 mg"
    ],
    "composition": "Methylcobalamin 500 mcg Alpha Lipoic Acid 100 mg Benfotiamine 50 mg Folic Acid 1.5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Benfotiamine",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 500 mcg Alpha Lipoic Acid 100 mg Benfotiamine 50 mg Folic Acid 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Alpha Lipoic Acid — 100 mg; Benfotiamine — 50 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Methylcobalamin 500 mcg Alpha Lipoic Acid 100 mg Benfotiamine 50 mg Folic Acid 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "26",
        "sourceRecordId": "source-0707"
      }
    ],
    "sources": [
      {
        "recordId": "source-0707",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "26"
      }
    ]
  },
  {
    "id": "p-df49b338a231",
    "name": "Methylcobalamin & Alpha Lipoic Acid & Benfotiamine & Pyridoxine Hydrochloride Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "0.5 mg + 100 mg + 100 mg + 50 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Methylcobalamin I.P. 0.5 mg Alpha Lipoic Acid U.S.P. 100 mg Benfotiamine 100 mg Pyridoxine Hydrochloride I.P. 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Benfotiamine",
      "Pyridoxine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Alpha Lipoic Acid, Benfotiamine and Pyridoxine HCl Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 0.5 mg; Alpha Lipoic Acid — 100 mg; Benfotiamine — 100 mg; Pyridoxine Hydrochloride — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin I.P. 0.5 mg Alpha Lipoic Acid U.S.P. 100 mg Benfotiamine 100 mg Pyridoxine Hydrochloride I.P. 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 15,
        "sourceNumber": "92",
        "sourceRecordId": "source-0188"
      }
    ],
    "sources": [
      {
        "recordId": "source-0188",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 15,
        "number": "92"
      }
    ]
  },
  {
    "id": "p-981b005289af",
    "name": "Methylcobalamin & Alpha Lipoic Acid & Folic Acid Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "7500 mcg + 100 mg + 300 mcg",
      "750 mcg + 100 mg + 300 mcg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Methylcobalamin IP 7500 mcg Alpha Lipoic Acid USP 100 mg Folic Acid IP 300 mcg Excipients q.s. Approved Colour Usedincapsuleshells",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Folic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Alpha Lipoic Acid&Folic Acid Capsules",
      "Methylcobalamin 750 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 300 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 7500 mcg; Alpha Lipoic Acid — 100 mg; Folic Acid — 300 mcg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Methylcobalamin IP 7500 mcg Alpha Lipoic Acid USP 100 mg Folic Acid IP 300 mcg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 38,
        "sourceNumber": "239",
        "sourceRecordId": "source-0335"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 750 mcg; Alpha Lipoic Acid — 100 mg; Folic Acid — 300 mcg",
        "sourceComposition": "Methylcobalamin 750 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 300 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "13",
        "sourceRecordId": "source-0780"
      }
    ],
    "sources": [
      {
        "recordId": "source-0335",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 38,
        "number": "239"
      },
      {
        "recordId": "source-0780",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "13"
      }
    ]
  },
  {
    "id": "p-14999469be9e",
    "name": "Methylcobalamin & Alpha Lipoic Acid & Pyridoxine Hydrochloride & Folic Acid Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "1500 mcg + 100 mg + 3 mg + 1.5 mg"
    ],
    "composition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg, Folic Acid 1.5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Pyridoxine Hydrochloride",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg, Folic Acid 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Pyridoxine Hydrochloride — 3 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg, Folic Acid 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "7",
        "sourceRecordId": "source-0774"
      }
    ],
    "sources": [
      {
        "recordId": "source-0774",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "7"
      }
    ]
  },
  {
    "id": "p-1a8362586e38",
    "name": "Methylcobalamin & Alpha Lipoic Acid & Pyridoxine Hydrochloride & Folic Acid Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "1500 mcg + 100 mg + 3 mg + 1.5 mg",
      "500 mcg + 100 mg + 1.5 mg + 3 mg",
      "500 mcg + 100 mg + 3 mg + 1.5 mg"
    ],
    "composition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg, Folic Acid 1.5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Pyridoxine Hydrochloride",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg, Folic Acid 1.5 mg",
      "Methylcobalamin 500 mcg Alpha Lipoic Acid 100 mg Pyridoxine Hydrochloride 1.5 mg Folic Acid 3 mg",
      "Methylcobalamin 500 mcg Alpha Lipoic Acid 100 mg Pyridoxine Hydrochloride 3 mg Folic Acid 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Pyridoxine Hydrochloride — 3 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg, Folic Acid 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "21",
        "sourceRecordId": "source-0702"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Alpha Lipoic Acid — 100 mg; Pyridoxine Hydrochloride — 1.5 mg; Folic Acid — 3 mg",
        "sourceComposition": "Methylcobalamin 500 mcg Alpha Lipoic Acid 100 mg Pyridoxine Hydrochloride 1.5 mg Folic Acid 3 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "25",
        "sourceRecordId": "source-0706"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Alpha Lipoic Acid — 100 mg; Pyridoxine Hydrochloride — 3 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Methylcobalamin 500 mcg Alpha Lipoic Acid 100 mg Pyridoxine Hydrochloride 3 mg Folic Acid 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "28",
        "sourceRecordId": "source-0709"
      }
    ],
    "sources": [
      {
        "recordId": "source-0702",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "21"
      },
      {
        "recordId": "source-0706",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "25"
      },
      {
        "recordId": "source-0709",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "28"
      }
    ]
  },
  {
    "id": "p-ac4d32aa12d1",
    "name": "Methylcobalamin & Alpha Lipoic Acid Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "1500 mcg + 300 mg",
      "500 mcg + 100 mg"
    ],
    "composition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 300 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 300 mg",
      "Methylcobalamin 500 mcg Alpha Lipoic Acid 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 300 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 300 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "24",
        "sourceRecordId": "source-0705"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Alpha Lipoic Acid — 100 mg",
        "sourceComposition": "Methylcobalamin 500 mcg Alpha Lipoic Acid 100 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "27",
        "sourceRecordId": "source-0708"
      }
    ],
    "sources": [
      {
        "recordId": "source-0705",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "24"
      },
      {
        "recordId": "source-0708",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "27"
      }
    ]
  },
  {
    "id": "p-8fdd9aa9826c",
    "name": "Methylcobalamin & Ascorbic Acid & Folic Acid & Carbonyl Iron Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "500 mcg + 75 mg + 5 mg + 100 mg"
    ],
    "composition": "Methylcobalamin 500 mcg, Ascorbic Acid 75 mg, Folic Acid 5 mg, Carbonyl Iron 100 mg",
    "ingredients": [
      "Methylcobalamin",
      "Ascorbic Acid",
      "Folic Acid",
      "Carbonyl Iron"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 500 mcg, Ascorbic Acid 75 mg, Folic Acid 5 mg, Carbonyl Iron 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Ascorbic Acid — 75 mg; Folic Acid — 5 mg; Carbonyl Iron — 100 mg",
        "sourceComposition": "Methylcobalamin 500 mcg, Ascorbic Acid 75 mg, Folic Acid 5 mg, Carbonyl Iron 100 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "15",
        "sourceRecordId": "source-0782"
      }
    ],
    "sources": [
      {
        "recordId": "source-0782",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "15"
      }
    ]
  },
  {
    "id": "p-70f50cc7a618",
    "name": "Methylcobalamin & Folic Acid & Pyridoxal Hydrochloride Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1500 mcg + 5 mg + 20 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Methylcobalamin IP 1500 mcg Folic Acid IP 5 mg Pyridoxal Hydrochloride IP 20 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Folic Acid",
      "Pyridoxal Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Folic Acid&Pyridoxal Hydrochloride Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Folic Acid — 5 mg; Pyridoxal Hydrochloride — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin IP 1500 mcg Folic Acid IP 5 mg Pyridoxal Hydrochloride IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "sourceNumber": "421",
        "sourceRecordId": "source-0517"
      }
    ],
    "sources": [
      {
        "recordId": "source-0517",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "number": "421"
      }
    ]
  },
  {
    "id": "p-fde88e9c7385",
    "name": "Methylcobalamin & L-5Methyltetrahydrofolate Calcium & Pyridoxal-5Phosphate Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1500 mcg + 1 mg + 0.5 mg"
    ],
    "composition": "Each Filmcoated Tablet Contains: Methylcobalamin I.P. 1500 mcg L-5Methyltetrahydrofolate Calcium Eqto L-Methyl Folate 1 mg Pyridoxal-5Phosphate 0.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "L-5Methyltetrahydrofolate Calcium",
      "Pyridoxal-5Phosphate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,L-Methylfolate & Pyridoxal-5 Phosphate Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; L-5Methyltetrahydrofolate Calcium — 1 mg; Pyridoxal-5Phosphate — 0.5 mg",
        "sourceComposition": "Each Filmcoated Tablet Contains: Methylcobalamin I.P. 1500 mcg L-5Methyltetrahydrofolate Calcium Eqto L-Methyl Folate 1 mg Pyridoxal-5Phosphate 0.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "sourceNumber": "108",
        "sourceRecordId": "source-0204"
      }
    ],
    "sources": [
      {
        "recordId": "source-0204",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "number": "108"
      }
    ]
  },
  {
    "id": "p-5b81601999b4",
    "name": "Methylcobalamin & Pyridoxine Hydrochloride & Folic Acid Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "1500 mcg + 1.5 mg + 5 mg"
    ],
    "composition": "Methylcobalamin 1500 mcg, Pyridoxine Hydrochloride 1.5 mg, Folic Acid 5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Pyridoxine Hydrochloride",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg, Pyridoxine Hydrochloride 1.5 mg, Folic Acid 5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Pyridoxine Hydrochloride — 1.5 mg; Folic Acid — 5 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Pyridoxine Hydrochloride 1.5 mg, Folic Acid 5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "12",
        "sourceRecordId": "source-0779"
      }
    ],
    "sources": [
      {
        "recordId": "source-0779",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "12"
      }
    ]
  },
  {
    "id": "p-f3655a0d808a",
    "name": "Methylcobalamin, Alpha Liopoic Acid, Folic Acid & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Methylcobalamin IP 500 mcg Alpha Liopoic Acid USP 50 mg Folic Acid IP 1.5 mg Selenium(as Sodium Selenate) BP 163.6 mcg Calcium Pantothenate IP 10 mg Vitamin B1 IP 10 mg Vitamin B6 IP 1.5 mg Vitamin EIP 25 iu Beta Carotene USP 20.66 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Liopoic Acid",
      "Folic Acid",
      "Selenium",
      "Calcium Pantothenate",
      "Vitamin B1",
      "Vitamin B6",
      "Vitamin E",
      "Beta Carotene"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Beta Carotene,Alpha Lipoic Acid With Multivitamins&Minerals Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Alpha Liopoic Acid — 50 mg; Folic Acid — 1.5 mg; Selenium — 163.6 mcg; Calcium Pantothenate — 10 mg; Vitamin B1 — 10 mg; Vitamin B6 — 1.5 mg; Vitamin E — 25 iu; Beta Carotene — 20.66 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin IP 500 mcg Alpha Liopoic Acid USP 50 mg Folic Acid IP 1.5 mg Selenium(as Sodium Selenate) BP 163.6 mcg Calcium Pantothenate IP 10 mg Vitamin B1 IP 10 mg Vitamin B6 IP 1.5 mg Vitamin EIP 25 iu Beta Carotene USP 20.66 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "sourceNumber": "232",
        "sourceRecordId": "source-0328"
      }
    ],
    "sources": [
      {
        "recordId": "source-0328",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "number": "232"
      }
    ]
  },
  {
    "id": "p-7dbbe508074a",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine & Multinutrient Blend Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Benfotiamine 15 mg, Pyridoxine Hydrochloride 3 mg, Calcium Pantothenate 25 mg, Folic Acid 1.5 mg, Zinc Oxide 22.5 mg, Chromium Picolinate 65 mcg, Inositol 10 mcg, Lutein 5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Benfotiamine",
      "Pyridoxine Hydrochloride",
      "Calcium Pantothenate",
      "Folic Acid",
      "Zinc Oxide",
      "Chromium Picolinate",
      "Inositol",
      "Lutein"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Benfotiamine 15 mg, Pyridoxine Hydrochloride 3 mg, Calcium Pantothenate 25 mg, Folic Acid 1.5 mg, Zinc Oxide 22.5 mg, Chromium Picolinate 65 mcg, Inositol 10 mcg, Lutein 5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Benfotiamine — 15 mg; Pyridoxine Hydrochloride — 3 mg; Calcium Pantothenate — 25 mg; Folic Acid — 1.5 mg; Zinc Oxide — 22.5 mg; Chromium Picolinate — 65 mcg; Inositol — 10 mcg; Lutein — 5 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Benfotiamine 15 mg, Pyridoxine Hydrochloride 3 mg, Calcium Pantothenate 25 mg, Folic Acid 1.5 mg, Zinc Oxide 22.5 mg, Chromium Picolinate 65 mcg, Inositol 10 mcg, Lutein 5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "24",
        "sourceRecordId": "source-0791"
      }
    ],
    "sources": [
      {
        "recordId": "source-0791",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "24"
      }
    ]
  },
  {
    "id": "p-ebd6292b6b1c",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine & Multinutrient Blend Softgel Capsules with Calcium Pantothenate, Zinc Oxide, Chromium Picolinate, Inositol, Lutein",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 1500 mcg Alpha Lipoic Acid 100 mg Benfotiamine 15 mg Pyridoxine Hydrochloride 3 mg Calcium Pantothenate 25 mg Folic Acid 1.5 mg Zinc Oxide 22.5 mg Chromium Picolinate 65 mcg Inositol 10 mcg Lutein 5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Benfotiamine",
      "Pyridoxine Hydrochloride",
      "Calcium Pantothenate",
      "Folic Acid",
      "Zinc Oxide",
      "Chromium Picolinate",
      "Inositol",
      "Lutein"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg Alpha Lipoic Acid 100 mg Benfotiamine 15 mg Pyridoxine Hydrochloride 3 mg Calcium Pantothenate 25 mg Folic Acid 1.5 mg Zinc Oxide 22.5 mg Chromium Picolinate 65 mcg Inositol 10 mcg Lutein 5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Benfotiamine — 15 mg; Pyridoxine Hydrochloride — 3 mg; Calcium Pantothenate — 25 mg; Folic Acid — 1.5 mg; Zinc Oxide — 22.5 mg; Chromium Picolinate — 65 mcg; Inositol — 10 mcg; Lutein — 5 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg Alpha Lipoic Acid 100 mg Benfotiamine 15 mg Pyridoxine Hydrochloride 3 mg Calcium Pantothenate 25 mg Folic Acid 1.5 mg Zinc Oxide 22.5 mg Chromium Picolinate 65 mcg Inositol 10 mcg Lutein 5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "30",
        "sourceRecordId": "source-0711"
      }
    ],
    "sources": [
      {
        "recordId": "source-0711",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "30"
      }
    ]
  },
  {
    "id": "p-b57f715b6171",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine & Multinutrient Blend Softgel Capsules with Calcium Pantothenate, Nicotinamide",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 750 mcg Alpha Lipoic Acid 100 mg Benfotiamine 7.5 mg Pyridoxine Hydrochloride 1.5 mg Calcium Pantothenate 25 mg Nicotinamide 50 mg Folic Acid 0.75 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Benfotiamine",
      "Pyridoxine Hydrochloride",
      "Calcium Pantothenate",
      "Nicotinamide",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 750 mcg Alpha Lipoic Acid 100 mg Benfotiamine 7.5 mg Pyridoxine Hydrochloride 1.5 mg Calcium Pantothenate 25 mg Nicotinamide 50 mg Folic Acid 0.75 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 750 mcg; Alpha Lipoic Acid — 100 mg; Benfotiamine — 7.5 mg; Pyridoxine Hydrochloride — 1.5 mg; Calcium Pantothenate — 25 mg; Nicotinamide — 50 mg; Folic Acid — 0.75 mg",
        "sourceComposition": "Methylcobalamin 750 mcg Alpha Lipoic Acid 100 mg Benfotiamine 7.5 mg Pyridoxine Hydrochloride 1.5 mg Calcium Pantothenate 25 mg Nicotinamide 50 mg Folic Acid 0.75 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "31",
        "sourceRecordId": "source-0712"
      }
    ],
    "sources": [
      {
        "recordId": "source-0712",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "31"
      }
    ]
  },
  {
    "id": "p-97c650335009",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine & Multinutrient Blend Softgel Capsules with Biotin",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 500 mcg Alpha Lipoic Acid 200 mg Benfotiamine 10 mg Pyridoxine Hydrochloride 3 mg Biotin 5 mg Folic Acid 1.5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Benfotiamine",
      "Pyridoxine Hydrochloride",
      "Biotin",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 500 mcg Alpha Lipoic Acid 200 mg Benfotiamine 10 mg Pyridoxine Hydrochloride 3 mg Biotin 5 mg Folic Acid 1.5 mg",
      "Methylcobalamin 1500 mcg Alpha Lipoic Acid 200 mg Benfotiamine 50 mg Pyridoxine Hydrochloride 3 mg Biotin 5 mg Folic Acid 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Alpha Lipoic Acid — 200 mg; Benfotiamine — 10 mg; Pyridoxine Hydrochloride — 3 mg; Biotin — 5 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Methylcobalamin 500 mcg Alpha Lipoic Acid 200 mg Benfotiamine 10 mg Pyridoxine Hydrochloride 3 mg Biotin 5 mg Folic Acid 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "32",
        "sourceRecordId": "source-0713"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 200 mg; Benfotiamine — 50 mg; Pyridoxine Hydrochloride — 3 mg; Biotin — 5 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg Alpha Lipoic Acid 200 mg Benfotiamine 50 mg Pyridoxine Hydrochloride 3 mg Biotin 5 mg Folic Acid 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "34",
        "sourceRecordId": "source-0715"
      }
    ],
    "sources": [
      {
        "recordId": "source-0713",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "32"
      },
      {
        "recordId": "source-0715",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "34"
      }
    ]
  },
  {
    "id": "p-5af157059c08",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine & Multinutrient Blend Softgel Capsules with Inositol",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 1000 mcg Alpha Lipoic Acid 200 mg Benfotiamine 100 mg Pyridoxine Hydrochloride 3 mg Inositol 100 mg Folic Acid 1.5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Benfotiamine",
      "Pyridoxine Hydrochloride",
      "Inositol",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1000 mcg Alpha Lipoic Acid 200 mg Benfotiamine 100 mg Pyridoxine Hydrochloride 3 mg Inositol 100 mg Folic Acid 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1000 mcg; Alpha Lipoic Acid — 200 mg; Benfotiamine — 100 mg; Pyridoxine Hydrochloride — 3 mg; Inositol — 100 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Methylcobalamin 1000 mcg Alpha Lipoic Acid 200 mg Benfotiamine 100 mg Pyridoxine Hydrochloride 3 mg Inositol 100 mg Folic Acid 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "33",
        "sourceRecordId": "source-0714"
      }
    ],
    "sources": [
      {
        "recordId": "source-0714",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "33"
      }
    ]
  },
  {
    "id": "p-5cbaee540ed0",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Methylcobalamin IP 1500 mcg Alpha Lipoic Acid USP 100 mg Benfotiamine 150 mg Folic Acid IP 1.5 mg Chromium Polynicotinate 200 mcg Inositol IP 100 mg Pyridoxine Hydrochloride IP 3 mg Vitamin D3 IP 1000 iu Calcium Carbonate IP 500 mg Excipients Q,s, Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Benfotiamine",
      "Folic Acid",
      "Chromium Polynicotinate",
      "Inositol",
      "Pyridoxine Hydrochloride",
      "Vitamin D3",
      "Calcium Carbonate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Alpha Lipoic Acid,Benfotiamine,Folic Acid,Chromium Polynicotinate,Inositol,Pyridoxine Hydrochloride,Vitamin D3 &Calcium Carbonate Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Benfotiamine — 150 mg; Folic Acid — 1.5 mg; Chromium Polynicotinate — 200 mcg; Inositol — 100 mg; Pyridoxine Hydrochloride — 3 mg; Vitamin D3 — 1000 iu; Calcium Carbonate — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin IP 1500 mcg Alpha Lipoic Acid USP 100 mg Benfotiamine 150 mg Folic Acid IP 1.5 mg Chromium Polynicotinate 200 mcg Inositol IP 100 mg Pyridoxine Hydrochloride IP 3 mg Vitamin D3 IP 1000 iu Calcium Carbonate IP 500 mg Excipients Q,s, Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "sourceNumber": "320",
        "sourceRecordId": "source-0416"
      }
    ],
    "sources": [
      {
        "recordId": "source-0416",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "number": "320"
      }
    ]
  },
  {
    "id": "p-33dabf663f44",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Beta Carotene & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Methylcobalamin IP 500 mcg Alpha Lipoic Acid US 100 mg Beta Carotene US 5.17 mcg Vitamin B1 IP 2 mg Vitamin B2 IP 2 mg Vitamin B6 IP 1.5 mg Vitamin C IP 50 mg Vitamin D3 IP 200 iu Vitamin EIP 10 iu Niacinamide IP 25 mg Folic Acid IP 500 mcg Calcium Pantothenate IP 5 mg Chromium Picolinate US 2.5 mg Selenium Dioxide US 1.4 mg Zinc Oxide IP 65 mcg Copper Sulphate BP 15 mg Manganese Sulphate US 60 mcg Lutin US 1 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Beta Carotene",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin C",
      "Vitamin D3",
      "Vitamin E",
      "Niacinamide",
      "Folic Acid",
      "Calcium Pantothenate",
      "Chromium Picolinate",
      "Selenium Dioxide",
      "Zinc Oxide",
      "Copper Sulphate",
      "Manganese Sulphate",
      "Lutin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Beta Carotene,Alpha Lipoic Acid With Multivitaminsand Minerals Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Alpha Lipoic Acid — 100 mg; Beta Carotene — 5.17 mcg; Vitamin B1 — 2 mg; Vitamin B2 — 2 mg; Vitamin B6 — 1.5 mg; Vitamin C — 50 mg; Vitamin D3 — 200 iu; Vitamin E — 10 iu; Niacinamide — 25 mg; Folic Acid — 500 mcg; Calcium Pantothenate — 5 mg; Chromium Picolinate — 2.5 mg; Selenium Dioxide — 1.4 mg; Zinc Oxide — 65 mcg; Copper Sulphate — 15 mg; Manganese Sulphate — 60 mcg; Lutin — 1 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin IP 500 mcg Alpha Lipoic Acid US 100 mg Beta Carotene US 5.17 mcg Vitamin B1 IP 2 mg Vitamin B2 IP 2 mg Vitamin B6 IP 1.5 mg Vitamin C IP 50 mg Vitamin D3 IP 200 iu Vitamin EIP 10 iu Niacinamide IP 25 mg Folic Acid IP 500 mcg Calcium Pantothenate IP 5 mg Chromium Picolinate US 2.5 mg Selenium Dioxide US 1.4 mg Zinc Oxide IP 65 mcg Copper Sulphate BP 15 mg Manganese Sulphate US 60 mcg Lutin US 1 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 44,
        "sourceNumber": "278",
        "sourceRecordId": "source-0374"
      }
    ],
    "sources": [
      {
        "recordId": "source-0374",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 44,
        "number": "278"
      }
    ]
  },
  {
    "id": "p-0ea80490b4dd",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Folic Acid & Multinutrient Blend Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Hard Gelatin Capsule Contains Methylcobalamin IP 1500 mcg Alpha Lipoic Acid USP 200 mg Folic Acid IP 1.5 mg Biotin USP 30 mcg Pyridoxine Hydrochloride IP 3 mg Excipients q.s. Approved Colour Usedincapsuleshells Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Folic Acid",
      "Biotin",
      "Pyridoxine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Alpha Lipoic Acid,Folic Acid,Biotin&Pyridoxine HCl Capsules",
      "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 200 mcg, Folic Acid 1.5 mg, Biotin 30 mcg, Pyridoxine H Cl 3 mg",
      "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 10 mg, Biotin 3 mg, Pyridoxine H Cl 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 200 mg; Folic Acid — 1.5 mg; Biotin — 30 mcg; Pyridoxine Hydrochloride — 3 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains Methylcobalamin IP 1500 mcg Alpha Lipoic Acid USP 200 mg Folic Acid IP 1.5 mg Biotin USP 30 mcg Pyridoxine Hydrochloride IP 3 mg Excipients q.s. Approved Colour Usedincapsuleshells Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 47,
        "sourceNumber": "290",
        "sourceRecordId": "source-0386"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 200 mcg; Folic Acid — 1.5 mg; Biotin — 30 mcg; Pyridoxine H Cl — 3 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 200 mcg, Folic Acid 1.5 mg, Biotin 30 mcg, Pyridoxine H Cl 3 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "11",
        "sourceRecordId": "source-0778"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Folic Acid — 10 mg; Biotin — 3 mg; Pyridoxine H Cl — 1.5 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Folic Acid 10 mg, Biotin 3 mg, Pyridoxine H Cl 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "14",
        "sourceRecordId": "source-0781"
      }
    ],
    "sources": [
      {
        "recordId": "source-0386",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 47,
        "number": "290"
      },
      {
        "recordId": "source-0778",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "11"
      },
      {
        "recordId": "source-0781",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "14"
      }
    ]
  },
  {
    "id": "p-31357e740fdd",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Folic Acid & Multinutrient Blend Softgel Capsules with Selenium Dioxide, Calcium Pantothenate, Vitamin B1, Vitamin B6, Vitamin E, Vitamin A",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 1500 mcg Alpha Lipoic Acid 100 mg Folic Acid 1.5 mg Selenium Dioxide 163.6 mg Calcium Pantothenate 10 mg Vitamin B1 10 mg Vitamin B6 1.5 mg Vitamin E25 I.U. Vitamin A5000 I.U. Inositol 100 mg Chromium Polynicotinate 200 mcg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Folic Acid",
      "Selenium Dioxide",
      "Calcium Pantothenate",
      "Vitamin B1",
      "Vitamin B6",
      "Vitamin E",
      "Vitamin A",
      "Inositol",
      "Chromium Polynicotinate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg Alpha Lipoic Acid 100 mg Folic Acid 1.5 mg Selenium Dioxide 163.6 mg Calcium Pantothenate 10 mg Vitamin B1 10 mg Vitamin B6 1.5 mg Vitamin E25 I.U. Vitamin A5000 I.U. Inositol 100 mg Chromium Polynicotinate 200 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Folic Acid — 1.5 mg; Selenium Dioxide — 163.6 mg; Calcium Pantothenate — 10 mg; Vitamin B1 — 10 mg; Vitamin B6 — 1.5 mg; Vitamin E — 25 I.U; Vitamin A — 5000 I.U; Inositol — 100 mg; Chromium Polynicotinate — 200 mcg",
        "sourceComposition": "Methylcobalamin 1500 mcg Alpha Lipoic Acid 100 mg Folic Acid 1.5 mg Selenium Dioxide 163.6 mg Calcium Pantothenate 10 mg Vitamin B1 10 mg Vitamin B6 1.5 mg Vitamin E25 I.U. Vitamin A5000 I.U. Inositol 100 mg Chromium Polynicotinate 200 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "29",
        "sourceRecordId": "source-0710"
      }
    ],
    "sources": [
      {
        "recordId": "source-0710",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "29"
      }
    ]
  },
  {
    "id": "p-fa36b95f078d",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Folic Acid & Multinutrient Blend Softgel Capsules with Selenomethionine, Zinc Monomethionine",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 1500 mcg Alpha Lipoic Acid 200 mg Folic Acid 1.5 mg Inositol 100 mg Chromium Polynicotinate 200 mcg Selenomethionine 55 mcg Zinc Monomethionine 25 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Folic Acid",
      "Inositol",
      "Chromium Polynicotinate",
      "Selenomethionine",
      "Zinc Monomethionine"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg Alpha Lipoic Acid 200 mg Folic Acid 1.5 mg Inositol 100 mg Chromium Polynicotinate 200 mcg Selenomethionine 55 mcg Zinc Monomethionine 25 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 200 mg; Folic Acid — 1.5 mg; Inositol — 100 mg; Chromium Polynicotinate — 200 mcg; Selenomethionine — 55 mcg; Zinc Monomethionine — 25 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg Alpha Lipoic Acid 200 mg Folic Acid 1.5 mg Inositol 100 mg Chromium Polynicotinate 200 mcg Selenomethionine 55 mcg Zinc Monomethionine 25 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "35",
        "sourceRecordId": "source-0716"
      }
    ],
    "sources": [
      {
        "recordId": "source-0716",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "35"
      }
    ]
  },
  {
    "id": "p-672cf2b1d50a",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Inositol & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Methylcobalamin IP 1500 mcg Alpha Lipoic Acid USP 100 mg Inositol IP 100 mg Vitamin AAcetate IP 5000 iu Vitamin B1 IP 10 mg Vitamin B6 IP 1.5 mg Vitamin EIP 25 iu Calcium Pantothenate IP 10 mg Folic Acid IP 1500 mcg Chromium (as Chromium Chloride USP 200 mcg Selenium (as Sodium Selenate) BP 163.6 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Inositol",
      "Vitamin AAcetate",
      "Vitamin B1",
      "Vitamin B6",
      "Vitamin E",
      "Calcium Pantothenate",
      "Folic Acid",
      "Chromium",
      "Selenium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Alpha Lipoic Acid With Multivitaminsand Minerals Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Inositol — 100 mg; Vitamin AAcetate — 5000 iu; Vitamin B1 — 10 mg; Vitamin B6 — 1.5 mg; Vitamin E — 25 iu; Calcium Pantothenate — 10 mg; Folic Acid — 1500 mcg; Chromium — 200 mcg; Selenium — 163.6 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin IP 1500 mcg Alpha Lipoic Acid USP 100 mg Inositol IP 100 mg Vitamin AAcetate IP 5000 iu Vitamin B1 IP 10 mg Vitamin B6 IP 1.5 mg Vitamin EIP 25 iu Calcium Pantothenate IP 10 mg Folic Acid IP 1500 mcg Chromium (as Chromium Chloride USP 200 mcg Selenium (as Sodium Selenate) BP 163.6 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 37,
        "sourceNumber": "235",
        "sourceRecordId": "source-0331"
      }
    ],
    "sources": [
      {
        "recordId": "source-0331",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 37,
        "number": "235"
      }
    ]
  },
  {
    "id": "p-029236bc707d",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Pyridoxine Hydrochloride & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg, Folic Acid 1.5 mg, Benfotiamine 50 mg, Biotin 5 mg, Chromium Picolinate eq. to Elemental Chromium 200 mcg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Pyridoxine Hydrochloride",
      "Folic Acid",
      "Benfotiamine",
      "Biotin",
      "Chromium Picolinate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg, Folic Acid 1.5 mg, Benfotiamine 50 mg, Biotin 5 mg, Chromium Picolinate eq. to Elemental Chromium 200 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Pyridoxine Hydrochloride — 3 mg; Folic Acid — 1.5 mg; Benfotiamine — 50 mg; Biotin — 5 mg; Chromium Picolinate — 200 mcg",
        "sourceComposition": "Methylcobalamin 1500 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine Hydrochloride 3 mg, Folic Acid 1.5 mg, Benfotiamine 50 mg, Biotin 5 mg, Chromium Picolinate eq. to Elemental Chromium 200 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "23",
        "sourceRecordId": "source-0704"
      }
    ],
    "sources": [
      {
        "recordId": "source-0704",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "23"
      }
    ]
  },
  {
    "id": "p-96887c9fb76a",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Thiamine Hydrochloride & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 1500 mcg Alpha Lipoic Acid 100 mg Thiamine Hydrochloride 10 mg Pyridoxine Hydrochloride 3 mg Folic Acid 1.5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Thiamine Hydrochloride",
      "Pyridoxine Hydrochloride",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 1500 mcg Alpha Lipoic Acid 100 mg Thiamine Hydrochloride 10 mg Pyridoxine Hydrochloride 3 mg Folic Acid 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Alpha Lipoic Acid — 100 mg; Thiamine Hydrochloride — 10 mg; Pyridoxine Hydrochloride — 3 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Methylcobalamin 1500 mcg Alpha Lipoic Acid 100 mg Thiamine Hydrochloride 10 mg Pyridoxine Hydrochloride 3 mg Folic Acid 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "38",
        "sourceRecordId": "source-0719"
      }
    ],
    "sources": [
      {
        "recordId": "source-0719",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "38"
      }
    ]
  },
  {
    "id": "p-b3573bd40b34",
    "name": "Methylcobalamin, Alpha Lipoic Acid, Thiamine Mononitrate & Multinutrient Blend Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Hard Gelatin Capsules Contains: Methylcobalamin IP 500 mcg Alpha Lipoic Acid USP 100 mg Thiamine Mononitrate IP 10 mg Pyridoxine Hydrochloride IP 3 mg Folic Acid IP 1.5 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell&inpellets",
    "ingredients": [
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Thiamine Mononitrate",
      "Pyridoxine Hydrochloride",
      "Folic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Alpha Lipoicv Acid,Thiamine Mononitrate,Pyridoxine HCl&Folic Acid Capsules"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Alpha Lipoic Acid — 100 mg; Thiamine Mononitrate — 10 mg; Pyridoxine Hydrochloride — 3 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains: Methylcobalamin IP 500 mcg Alpha Lipoic Acid USP 100 mg Thiamine Mononitrate IP 10 mg Pyridoxine Hydrochloride IP 3 mg Folic Acid IP 1.5 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell&inpellets",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 72,
        "sourceNumber": "448",
        "sourceRecordId": "source-0544"
      }
    ],
    "sources": [
      {
        "recordId": "source-0544",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 72,
        "number": "448"
      }
    ]
  },
  {
    "id": "p-078f08cb5021",
    "name": "Methylcobalamin, Ascorbic Acid, Niacinamide & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Methylcobalamin IP 500 mcg Ascorbic Acid IP 100 mg Niacinamide IP 50 mg Vitamin EIP 25 mg Calcium Pantothenate IP 12.5 mg Vitamin B1 IP 10 mg Vitamin B2 IP 10 mg Vitamin B6 IP 3 mg Vitamin AAcetate IP 5000 iu Folic Acid IP 1 mg Zinc Oxide IP 15 mg Copper Gluconate USP 2.5 mg Manganese (as Manganese Sulphate) USP 1.4 mg Chromium (as Chromium Chloride) USP 65 mcg Selenium (as Sodium Selenate) BP 60 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Ascorbic Acid",
      "Niacinamide",
      "Vitamin E",
      "Calcium Pantothenate",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin AAcetate",
      "Folic Acid",
      "Zinc Oxide",
      "Copper Gluconate",
      "Manganese",
      "Chromium",
      "Selenium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin With Multivitamins&Minerals Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Ascorbic Acid — 100 mg; Niacinamide — 50 mg; Vitamin E — 25 mg; Calcium Pantothenate — 12.5 mg; Vitamin B1 — 10 mg; Vitamin B2 — 10 mg; Vitamin B6 — 3 mg; Vitamin AAcetate — 5000 iu; Folic Acid — 1 mg; Zinc Oxide — 15 mg; Copper Gluconate — 2.5 mg; Manganese — 1.4 mg; Chromium — 65 mcg; Selenium — 60 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin IP 500 mcg Ascorbic Acid IP 100 mg Niacinamide IP 50 mg Vitamin EIP 25 mg Calcium Pantothenate IP 12.5 mg Vitamin B1 IP 10 mg Vitamin B2 IP 10 mg Vitamin B6 IP 3 mg Vitamin AAcetate IP 5000 iu Folic Acid IP 1 mg Zinc Oxide IP 15 mg Copper Gluconate USP 2.5 mg Manganese (as Manganese Sulphate) USP 1.4 mg Chromium (as Chromium Chloride) USP 65 mcg Selenium (as Sodium Selenate) BP 60 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 38,
        "sourceNumber": "238",
        "sourceRecordId": "source-0334"
      }
    ],
    "sources": [
      {
        "recordId": "source-0334",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 38,
        "number": "238"
      }
    ]
  },
  {
    "id": "p-4c85b32ebf65",
    "name": "Methylcobalamin, Beta Carotene, Alpha Lipoic Acid & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 500 mcg Beta Carotene 10.33 mg Alpha Lipoic Acid 100 mg Pyridoxine Hydrochloride 1.5 mg Thiamine Hydrochloride 2 mg Chromium Polynicotinate 70 mcg",
    "ingredients": [
      "Methylcobalamin",
      "Beta Carotene",
      "Alpha Lipoic Acid",
      "Pyridoxine Hydrochloride",
      "Thiamine Hydrochloride",
      "Chromium Polynicotinate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 500 mcg Beta Carotene 10.33 mg Alpha Lipoic Acid 100 mg Pyridoxine Hydrochloride 1.5 mg Thiamine Hydrochloride 2 mg Chromium Polynicotinate 70 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Beta Carotene — 10.33 mg; Alpha Lipoic Acid — 100 mg; Pyridoxine Hydrochloride — 1.5 mg; Thiamine Hydrochloride — 2 mg; Chromium Polynicotinate — 70 mcg",
        "sourceComposition": "Methylcobalamin 500 mcg Beta Carotene 10.33 mg Alpha Lipoic Acid 100 mg Pyridoxine Hydrochloride 1.5 mg Thiamine Hydrochloride 2 mg Chromium Polynicotinate 70 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "37",
        "sourceRecordId": "source-0718"
      }
    ],
    "sources": [
      {
        "recordId": "source-0718",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "37"
      }
    ]
  },
  {
    "id": "p-a8b0c2bd018f",
    "name": "Methylcobalamin, Calcium Carbonate, Calcitriol & Multinutrient Blend Capsules",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [],
    "composition": "Each Hard Gelatin Capsule: Methylcobalamin IP 1500 mcg Calcium Carbonate Equivalentto Elemental Calcium IP 200 mg Calcitriol IP 0.25 mcg Folic Acid IP 1.5 mg Pyridoxine Hydrochloride IP 3 mg Excipients q.s. Approved Colour Usedincapsuleshells",
    "ingredients": [
      "Methylcobalamin",
      "Calcium Carbonate",
      "Calcitriol",
      "Folic Acid",
      "Pyridoxine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin,Calcium, Calcitriol, Folic Acid & Pyridoxine HCl Capsules"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1500 mcg; Calcium Carbonate — 200 mg; Calcitriol — 0.25 mcg; Folic Acid — 1.5 mg; Pyridoxine Hydrochloride — 3 mg",
        "sourceComposition": "Each Hard Gelatin Capsule: Methylcobalamin IP 1500 mcg Calcium Carbonate Equivalentto Elemental Calcium IP 200 mg Calcitriol IP 0.25 mcg Folic Acid IP 1.5 mg Pyridoxine Hydrochloride IP 3 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 38,
        "sourceNumber": "240",
        "sourceRecordId": "source-0336"
      }
    ],
    "sources": [
      {
        "recordId": "source-0336",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 38,
        "number": "240"
      }
    ]
  },
  {
    "id": "p-e7d9da34777c",
    "name": "Methylcobalamin, Eicosapentaenoic Acid, Docosahexaenoic Acid & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 500 mcg Eicosapentaenoic Acid 90 mg Docosahexaenoic Acid 60 mg Folic Acid 1.5 mg Pyridoxine Hydrochloride 3 mg Ascorbic Acid 100 mg Vitamin E Acetate 25 I.U. Zinc Oxide eq.to Elemental Zinc 15 mg Selenium Dioxide eq. to Elemental Selenium 60 mcg",
    "ingredients": [
      "Methylcobalamin",
      "Eicosapentaenoic Acid",
      "Docosahexaenoic Acid",
      "Folic Acid",
      "Pyridoxine Hydrochloride",
      "Ascorbic Acid",
      "Vitamin E Acetate",
      "Zinc Oxide",
      "Selenium Dioxide"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 500 mcg Eicosapentaenoic Acid 90 mg Docosahexaenoic Acid 60 mg Folic Acid 1.5 mg Pyridoxine Hydrochloride 3 mg Ascorbic Acid 100 mg Vitamin E Acetate 25 I.U. Zinc Oxide eq.to Elemental Zinc 15 mg Selenium Dioxide eq. to Elemental Selenium 60 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Eicosapentaenoic Acid — 90 mg; Docosahexaenoic Acid — 60 mg; Folic Acid — 1.5 mg; Pyridoxine Hydrochloride — 3 mg; Ascorbic Acid — 100 mg; Vitamin E Acetate — 25 I.U; Zinc Oxide — 15 mg; Selenium Dioxide — 60 mcg",
        "sourceComposition": "Methylcobalamin 500 mcg Eicosapentaenoic Acid 90 mg Docosahexaenoic Acid 60 mg Folic Acid 1.5 mg Pyridoxine Hydrochloride 3 mg Ascorbic Acid 100 mg Vitamin E Acetate 25 I.U. Zinc Oxide eq.to Elemental Zinc 15 mg Selenium Dioxide eq. to Elemental Selenium 60 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "36",
        "sourceRecordId": "source-0717"
      }
    ],
    "sources": [
      {
        "recordId": "source-0717",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "36"
      }
    ]
  },
  {
    "id": "p-1d594c4b20c0",
    "name": "Methylcobalamin, Pregabalin, Pyridoxine Hydrochloride & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 750 mcg, Pregabalin 75 mg, Pyridoxine Hydrochloride 1.5 mg, Folic Acid 0.75 mg, Benfotiamine 7.5 mg",
    "ingredients": [
      "Methylcobalamin",
      "Pregabalin",
      "Pyridoxine Hydrochloride",
      "Folic Acid",
      "Benfotiamine"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 750 mcg, Pregabalin 75 mg, Pyridoxine Hydrochloride 1.5 mg, Folic Acid 0.75 mg, Benfotiamine 7.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 750 mcg; Pregabalin — 75 mg; Pyridoxine Hydrochloride — 1.5 mg; Folic Acid — 0.75 mg; Benfotiamine — 7.5 mg",
        "sourceComposition": "Methylcobalamin 750 mcg, Pregabalin 75 mg, Pyridoxine Hydrochloride 1.5 mg, Folic Acid 0.75 mg, Benfotiamine 7.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "22",
        "sourceRecordId": "source-0703"
      }
    ],
    "sources": [
      {
        "recordId": "source-0703",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "22"
      }
    ]
  },
  {
    "id": "p-ad528a92d038",
    "name": "Methylcobalamin, Vitamin A, Vitamin D3 & Multinutrient Blend Tablets with Vitamin B2, Ascorbic Acid, DL-Methionine, Magnesium Oxide, Manganese, Copper, Chromium, Selenium",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Methylcobalamin IP 500 mcg Vitamin AIP 5000 iu Vitamin D3 IP 400 iu Vitamin EIP 25 iu Vitamin B1 IP 10 mg Vitamin B2 IP 10 mg Vitamin B6 IP 3 mg Niacinamide IP 50 mg Calcium Pantothenate IP 12.5 mg Ascorbic Acid IP 100 mg Folic Acid IP 1500 mcg Biotin USP 60 mcg L-Glutamic Acid BP 100 mg DL-Methionine BP 25 mg Magnesium Oxide IP 30 mg Manganese (as Manganese Sulphate) USP 2.5 mg Copper (as Copper Sulphate) BP 2.5 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 22.5 mg Chromium (as Chromium Chloride) USP 100 mcg Selenium(as Selenium Dioxide) BP 60 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Niacinamide",
      "Calcium Pantothenate",
      "Ascorbic Acid",
      "Folic Acid",
      "Biotin",
      "L-Glutamic Acid",
      "DL-Methionine",
      "Magnesium Oxide",
      "Manganese",
      "Copper",
      "Zinc Sulphate Monohydrate",
      "Chromium",
      "Selenium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylcobalamin With Multivitaminsand Minerals Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Vitamin A — 5000 iu; Vitamin D3 — 400 iu; Vitamin E — 25 iu; Vitamin B1 — 10 mg; Vitamin B2 — 10 mg; Vitamin B6 — 3 mg; Niacinamide — 50 mg; Calcium Pantothenate — 12.5 mg; Ascorbic Acid — 100 mg; Folic Acid — 1500 mcg; Biotin — 60 mcg; L-Glutamic Acid — 100 mg; DL-Methionine — 25 mg; Magnesium Oxide — 30 mg; Manganese — 2.5 mg; Copper — 2.5 mg; Zinc Sulphate Monohydrate — 22.5 mg; Chromium — 100 mcg; Selenium — 60 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin IP 500 mcg Vitamin AIP 5000 iu Vitamin D3 IP 400 iu Vitamin EIP 25 iu Vitamin B1 IP 10 mg Vitamin B2 IP 10 mg Vitamin B6 IP 3 mg Niacinamide IP 50 mg Calcium Pantothenate IP 12.5 mg Ascorbic Acid IP 100 mg Folic Acid IP 1500 mcg Biotin USP 60 mcg L-Glutamic Acid BP 100 mg DL-Methionine BP 25 mg Magnesium Oxide IP 30 mg Manganese (as Manganese Sulphate) USP 2.5 mg Copper (as Copper Sulphate) BP 2.5 mg Zinc Sulphate Monohydrate Equivalentto Elemental Zinc IP 22.5 mg Chromium (as Chromium Chloride) USP 100 mcg Selenium(as Selenium Dioxide) BP 60 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 45,
        "sourceNumber": "280",
        "sourceRecordId": "source-0376"
      }
    ],
    "sources": [
      {
        "recordId": "source-0376",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 45,
        "number": "280"
      }
    ]
  },
  {
    "id": "p-a76ab42485d7",
    "name": "Methylcobalamin, Vitamin A, Vitamin D3 & Multinutrient Blend Tablets with Riboflavin, Vitamin C, Chromium Picolinate, Selenium Dioxide, Manganese Sulphate, Magnesium Hydroxide, Copper Sulphate Pentahydrate",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Methylcobalamin 500 mcg, Vitamin A5000 I.U. Vitamin D3 400 I.U., Vitamin E25 mg, Calcium Pantothenate 50 mg, L-Glutamic Acid 50 mg, Vitamin B1 10 mg, Riboflavin 10 mg, Vitamin B6 3 mg, Niacinamide 50 mg, Vitamin C 75 mg, Biotin 260 mcg, Folic Acid 1 mg, Zinc Sulphate Monohydrate 60 mg, Chromium Picolinate 150 mcg, Selenium Dioxide 100 mcg, Manganese Sulphate 200 mcg, Magnesium Hydroxide 10 mg, Copper Sulphate Pentahydrate 200 mcg",
    "ingredients": [
      "Methylcobalamin",
      "Vitamin A",
      "Vitamin D3",
      "Vitamin E",
      "Calcium Pantothenate",
      "L-Glutamic Acid",
      "Vitamin B1",
      "Riboflavin",
      "Vitamin B6",
      "Niacinamide",
      "Vitamin C",
      "Biotin",
      "Folic Acid",
      "Zinc Sulphate Monohydrate",
      "Chromium Picolinate",
      "Selenium Dioxide",
      "Manganese Sulphate",
      "Magnesium Hydroxide",
      "Copper Sulphate Pentahydrate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Methylcobalamin 500 mcg, Vitamin A5000 I.U. Vitamin D3 400 I.U., Vitamin E25 mg, Calcium Pantothenate 50 mg, L-Glutamic Acid 50 mg, Vitamin B1 10 mg, Riboflavin 10 mg, Vitamin B6 3 mg, Niacinamide 50 mg, Vitamin C 75 mg, Biotin 260 mcg, Folic Acid 1 mg, Zinc Sulphate Monohydrate 60 mg, Chromium Picolinate 150 mcg, Selenium Dioxide 100 mcg, Manganese Sulphate 200 mcg, Magnesium Hydroxide 10 mg, Copper Sulphate Pentahydrate 200 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 500 mcg; Vitamin A — 5000 I.U; Vitamin D3 — 400 I.U; Vitamin E — 25 mg; Calcium Pantothenate — 50 mg; L-Glutamic Acid — 50 mg; Vitamin B1 — 10 mg; Riboflavin — 10 mg; Vitamin B6 — 3 mg; Niacinamide — 50 mg; Vitamin C — 75 mg; Biotin — 260 mcg; Folic Acid — 1 mg; Zinc Sulphate Monohydrate — 60 mg; Chromium Picolinate — 150 mcg; Selenium Dioxide — 100 mcg; Manganese Sulphate — 200 mcg; Magnesium Hydroxide — 10 mg; Copper Sulphate Pentahydrate — 200 mcg",
        "sourceComposition": "Methylcobalamin 500 mcg, Vitamin A5000 I.U. Vitamin D3 400 I.U., Vitamin E25 mg, Calcium Pantothenate 50 mg, L-Glutamic Acid 50 mg, Vitamin B1 10 mg, Riboflavin 10 mg, Vitamin B6 3 mg, Niacinamide 50 mg, Vitamin C 75 mg, Biotin 260 mcg, Folic Acid 1 mg, Zinc Sulphate Monohydrate 60 mg, Chromium Picolinate 150 mcg, Selenium Dioxide 100 mcg, Manganese Sulphate 200 mcg, Magnesium Hydroxide 10 mg, Copper Sulphate Pentahydrate 200 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "11",
        "sourceRecordId": "source-0813"
      }
    ],
    "sources": [
      {
        "recordId": "source-0813",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "11"
      }
    ]
  },
  {
    "id": "p-f4189369af06",
    "name": "Methylcobalamin, Vitamin B1, Vitamin B6 & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Methylcobalamin IP 1000 mcg Vitamin B1 IP 10 mg Vitamin B6 IP 3 mg Folic Acid IP 1 mg Calcium Pantothenate IP 50 mg Niacinamide IP 45 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylcobalamin",
      "Vitamin B1",
      "Vitamin B6",
      "Folic Acid",
      "Calcium Pantothenate",
      "Niacinamide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Mecobalamin With Multivitamins Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylcobalamin — 1000 mcg; Vitamin B1 — 10 mg; Vitamin B6 — 3 mg; Folic Acid — 1 mg; Calcium Pantothenate — 50 mg; Niacinamide — 45 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylcobalamin IP 1000 mcg Vitamin B1 IP 10 mg Vitamin B6 IP 3 mg Folic Acid IP 1 mg Calcium Pantothenate IP 50 mg Niacinamide IP 45 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "sourceNumber": "233",
        "sourceRecordId": "source-0329"
      }
    ],
    "sources": [
      {
        "recordId": "source-0329",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "number": "233"
      }
    ]
  },
  {
    "id": "p-e9beb1c60cc4",
    "name": "Methylergometrine Maleate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "125 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Methylergometrine Maleate IP 125 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Methylergometrine Maleate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Methylergometrine Maleate Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylergometrine Maleate — 125 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methylergometrine Maleate IP 125 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "sourceNumber": "68",
        "sourceRecordId": "source-0668"
      }
    ],
    "sources": [
      {
        "recordId": "source-0668",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 10,
        "number": "68"
      }
    ]
  },
  {
    "id": "p-e2bd4afec57e",
    "name": "Methylprednisolone Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "4 mg",
      "16 mg",
      "8 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Methylprednisolone I.P 4 mg Excipients q.s.",
    "ingredients": [
      "Methylprednisolone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Methylprednisolone Tablets I.P.4 mg",
      "Methylprednisolone Tablets I.P.16 mg",
      "Methylprednisolone Tablets I.P.8 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methylprednisolone — 4 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Methylprednisolone I.P 4 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "411",
        "sourceRecordId": "source-0507"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylprednisolone — 16 mg",
        "sourceComposition": "Each Uncoated Tablet Contains:: Methylprednisolone I.P. 16 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "412",
        "sourceRecordId": "source-0508"
      },
      {
        "label": "Standard formulation",
        "composition": "Methylprednisolone — 8 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Methylprednisolone I.P. 8 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "413",
        "sourceRecordId": "source-0509"
      }
    ],
    "sources": [
      {
        "recordId": "source-0507",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "411"
      },
      {
        "recordId": "source-0508",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "412"
      },
      {
        "recordId": "source-0509",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "413"
      }
    ]
  },
  {
    "id": "p-be60de59f7cb",
    "name": "Methyltestosterone & Esterified Estrogen Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "1.25 mg + 0.625 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Methyltestosterone USP1.25 mg Esterified Estrogen USP0.625 mg Excipients q.s. Colour:Lakeof Brilliant Blue&Tartrazine Yellow Lake",
    "ingredients": [
      "Methyltestosterone",
      "Esterified Estrogen"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Esterified Estrogen &Methyltestosterone Tablets Pack Size-100Tabletsinone Bottle 50,000Nos"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Methyltestosterone — 1.25 mg; Esterified Estrogen — 0.625 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Methyltestosterone USP1.25 mg Esterified Estrogen USP0.625 mg Excipients q.s. Colour:Lakeof Brilliant Blue&Tartrazine Yellow Lake",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "sourceNumber": "62",
        "sourceRecordId": "source-0662"
      }
    ],
    "sources": [
      {
        "recordId": "source-0662",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "number": "62"
      }
    ]
  },
  {
    "id": "p-a1a240069c73",
    "name": "Metolazone & Losartan Potassium Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg + 25 mg",
      "2.5 mg + 50 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Metolazone IP 2.5 mg Losartan Potassium IP 25 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metolazone",
      "Losartan Potassium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metolazone&Losartan Potassium Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Metolazone — 2.5 mg; Losartan Potassium — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Metolazone IP 2.5 mg Losartan Potassium IP 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "sourceNumber": "250",
        "sourceRecordId": "source-0346"
      },
      {
        "label": "Standard formulation",
        "composition": "Metolazone — 2.5 mg; Losartan Potassium — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Metolazone IP 2.5 mg Losartan Potassium IP 50 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "sourceNumber": "251",
        "sourceRecordId": "source-0347"
      }
    ],
    "sources": [
      {
        "recordId": "source-0346",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "number": "250"
      },
      {
        "recordId": "source-0347",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "number": "251"
      }
    ]
  },
  {
    "id": "p-a8c525b257d9",
    "name": "Metolazone & Ramipril Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg + 2.5 mg",
      "2.5 mg + 5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Metolazone IP 2.5 mg Ramipril IP 2.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metolazone",
      "Ramipril"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metolazone&Ramipril Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Metolazone — 2.5 mg; Ramipril — 2.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Metolazone IP 2.5 mg Ramipril IP 2.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "sourceNumber": "252",
        "sourceRecordId": "source-0348"
      },
      {
        "label": "Standard formulation",
        "composition": "Metolazone — 2.5 mg; Ramipril — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Metolazone IP 2.5 mg Ramipril IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "sourceNumber": "253",
        "sourceRecordId": "source-0349"
      }
    ],
    "sources": [
      {
        "recordId": "source-0348",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "number": "252"
      },
      {
        "recordId": "source-0349",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "number": "253"
      }
    ]
  },
  {
    "id": "p-841ede071013",
    "name": "Metoprolol Succinate & Amlodipine Besylate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "47.50 mg / 50 mg + 5 mg",
      "23.75 mg / 25 mg + 5 mg",
      "23.75 mg / 25 mg + 2.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(Asprolongedreleaseform) IP 47.50 mg 50 mg Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metoprolol Succinate",
      "Amlodipine Besylate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metoprolol Succinate Prolonged Release&Amlodipine Tablets IP",
      "Metoprolol Succinate Prolonged Release &Amlodipine Tablets IP",
      "Amlodipine&Metoprolol Succinate(ER)Tablets"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Metoprolol Succinate — 47.50 mg / 50 mg; Amlodipine Besylate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(Asprolongedreleaseform) IP 47.50 mg 50 mg Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "sourceNumber": "193",
        "sourceRecordId": "source-0289"
      },
      {
        "label": "Prolonged release",
        "composition": "Metoprolol Succinate — 23.75 mg / 25 mg; Amlodipine Besylate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(Asprolongedreleaseform) IP 23.75 mg 25 mg Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "sourceNumber": "194",
        "sourceRecordId": "source-0290"
      },
      {
        "label": "Extended release",
        "composition": "Amlodipine Besylate — 2.5 mg; Metoprolol Succinate — 23.75 mg / 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 2.5 mg Metoprolol Succinate Equivalentto Metoprolol Tartrate(as Extendedreleaseform) IP 23.75 mg 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "sourceNumber": "263",
        "sourceRecordId": "source-0359"
      },
      {
        "label": "Extended release",
        "composition": "Amlodipine Besylate — 5 mg; Metoprolol Succinate — 47.50 mg / 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Metoprolol Succinate Equivalentto Metoprolol Tartrate(as Extendedreleaseform) IP 47.50 mg 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "sourceNumber": "264",
        "sourceRecordId": "source-0360"
      }
    ],
    "sources": [
      {
        "recordId": "source-0289",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "number": "193"
      },
      {
        "recordId": "source-0290",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "number": "194"
      },
      {
        "recordId": "source-0359",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "number": "263"
      },
      {
        "recordId": "source-0360",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "number": "264"
      }
    ]
  },
  {
    "id": "p-163005dc7f4a",
    "name": "Metoprolol Succinate & Atorvastatin Calcium Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "23.75 mg / 25 mg + 10 mg",
      "47.50 mg / 50 mg + 10 mg"
    ],
    "composition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(as Extended Releaseform) IP 23.75 mg 25 mg Atorvastatin Calcium Equivalentto Atorvastatin IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metoprolol Succinate",
      "Atorvastatin Calcium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metoprolol Succinate(ER) &Atorvastatin Tablets"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 23.75 mg / 25 mg; Atorvastatin Calcium — 10 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(as Extended Releaseform) IP 23.75 mg 25 mg Atorvastatin Calcium Equivalentto Atorvastatin IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "sourceNumber": "246",
        "sourceRecordId": "source-0342"
      },
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 47.50 mg / 50 mg; Atorvastatin Calcium — 10 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(as Extended Releaseform) IP 47.50 mg 50 mg Atorvastatin Calcium Equivalentto Atorvastatin IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "sourceNumber": "247",
        "sourceRecordId": "source-0343"
      }
    ],
    "sources": [
      {
        "recordId": "source-0342",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "number": "246"
      },
      {
        "recordId": "source-0343",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 39,
        "number": "247"
      }
    ]
  },
  {
    "id": "p-b131bf779b60",
    "name": "Metoprolol Succinate & Hydrochlorothiazide Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "47.50 mg / 50 mg + 12.5 mg",
      "23.75 mg / 25 mg + 12.5 mg"
    ],
    "composition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(as Extendedreleaseform) IP 47.50 mg 50 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metoprolol Succinate",
      "Hydrochlorothiazide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metoprolol Succinate(ER)&Hydrochlorothiazide Tablets",
      "Metoprolol Succinate Extended Release &Hydrochlorothiazide Tablets",
      "Metoprolol Succinate Extended Release&Hydrochlorothiazide Tablets"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 47.50 mg / 50 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(as Extendedreleaseform) IP 47.50 mg 50 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "sourceNumber": "422",
        "sourceRecordId": "source-0518"
      },
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 23.75 mg / 25 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(as Extendedreleaseform) IP 23.75 mg 25 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "sourceNumber": "429",
        "sourceRecordId": "source-0525"
      }
    ],
    "sources": [
      {
        "recordId": "source-0518",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 68,
        "number": "422"
      },
      {
        "recordId": "source-0525",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "number": "429"
      },
      {
        "recordId": "source-0526",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "number": "430"
      }
    ]
  },
  {
    "id": "p-e305fff99ace",
    "name": "Metoprolol Succinate & Olmesartan Medoxomil Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "23.75 mg / 25 mg + 20 mg",
      "47.50 mg / 50 mg + 20 mg"
    ],
    "composition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprplol Tartrate(as Extendedreleaseform) IP 23.75 mg 25 mg Olmesartan Medoxomil IP 20 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metoprolol Succinate",
      "Olmesartan Medoxomil"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metoprolol Succinate(ER)&Olmesartan Medoxomil Tablets",
      "Metoprolol Succinate(ER) &Olmesartan Medoxomil Tablets"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 23.75 mg / 25 mg; Olmesartan Medoxomil — 20 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprplol Tartrate(as Extendedreleaseform) IP 23.75 mg 25 mg Olmesartan Medoxomil IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "sourceNumber": "230",
        "sourceRecordId": "source-0326"
      },
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 47.50 mg / 50 mg; Olmesartan Medoxomil — 20 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprplol Tartrate(as Extendedreleaseform) IP 47.50 mg 50 mg Olmesartan Medoxomil IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "sourceNumber": "231",
        "sourceRecordId": "source-0327"
      }
    ],
    "sources": [
      {
        "recordId": "source-0326",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "number": "230"
      },
      {
        "recordId": "source-0327",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "number": "231"
      }
    ]
  },
  {
    "id": "p-d66b31b2fc05",
    "name": "Metoprolol Succinate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "95 mg / 100 mg",
      "25 mg",
      "50 mg",
      "23.75 mg / 25 mg",
      "47.50 mg / 50 mg"
    ],
    "composition": "Each Film Coated Extended Release Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate I.P. 95 mg 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Metoprolol Succinate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Metoprolol Succinate Extended Release Tablets I.P.100 mg",
      "Metoprolol Succinate Prolonged Release Tablets IP 100 mg",
      "Metoprolol Succinate Prolonged Release Tablets IP 25 mg",
      "Metoprolol Succinate Prolonged Release Tablets IP 50 mg"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 95 mg / 100 mg",
        "sourceComposition": "Each Film Coated Extended Release Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate I.P. 95 mg 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "sourceNumber": "48",
        "sourceRecordId": "source-0144"
      },
      {
        "label": "Prolonged release",
        "composition": "Metoprolol Succinate — 95 mg / 100 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate IP 95 mg 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "sourceNumber": "137",
        "sourceRecordId": "source-0233"
      },
      {
        "label": "Prolonged release",
        "composition": "Metoprolol Succinate — 25 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains: Metoprolol Succinate IP 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "sourceNumber": "182",
        "sourceRecordId": "source-0278"
      },
      {
        "label": "Prolonged release",
        "composition": "Metoprolol Succinate — 50 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains: Metoprolol Succinate IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "sourceNumber": "183",
        "sourceRecordId": "source-0279"
      },
      {
        "label": "Prolonged release",
        "composition": "Metoprolol Succinate — 23.75 mg / 25 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains : Metoprolol Succinnate Equivalent to Metoprolol Tartrate IP 23.75 mg 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "sourceNumber": "482",
        "sourceRecordId": "source-0578"
      },
      {
        "label": "Prolonged release",
        "composition": "Metoprolol Succinate — 47.50 mg / 50 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains : Metoprolol Succinnate Equivalent to Metoprolol Tartrate IP 47.50 mg 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "sourceNumber": "483",
        "sourceRecordId": "source-0579"
      }
    ],
    "sources": [
      {
        "recordId": "source-0144",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 8,
        "number": "48"
      },
      {
        "recordId": "source-0233",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 22,
        "number": "137"
      },
      {
        "recordId": "source-0278",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "number": "182"
      },
      {
        "recordId": "source-0279",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "number": "183"
      },
      {
        "recordId": "source-0578",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "number": "482"
      },
      {
        "recordId": "source-0579",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "number": "483"
      }
    ]
  },
  {
    "id": "p-0c0045f01440",
    "name": "Mifepristone & Misoprostol Combipack",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Combipack",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg + 200 mcg"
    ],
    "composition": "Each Pack Contains: A)1Mifepristone Tablet Each Uncoated Tablets Contains: IP Mifepristone IP 200 mg Excipients q.s. B)4Misoprostol Tablets Each Uncoated Tablet Contains: Misoprostol IP 200 mcg Excipients q.s.",
    "ingredients": [
      "Mifepristone",
      "Misoprostol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Combipackof(1Tabletof Mifepristone&4Tabletsof Misoprostol)",
      "Combipackof1Tabletof Mifepristone and 4 Tablets of Misoprostol"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Mifepristone — 200 mg; Misoprostol — 200 mcg",
        "sourceComposition": "Each Pack Contains: A)1Mifepristone Tablet Each Uncoated Tablets Contains: IP Mifepristone IP 200 mg Excipients q.s. B)4Misoprostol Tablets Each Uncoated Tablet Contains: Misoprostol IP 200 mcg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "sourceNumber": "43",
        "sourceRecordId": "source-0643"
      }
    ],
    "sources": [
      {
        "recordId": "source-0643",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 6,
        "number": "43"
      },
      {
        "recordId": "source-0654",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 8,
        "number": "54"
      }
    ]
  },
  {
    "id": "p-af1110fb0614",
    "name": "Mifepristone Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg",
      "10 mg",
      "25 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Mifepristone I.P. 200 mg Excipients q.s.",
    "ingredients": [
      "Mifepristone"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Mifepristone Tablets I.P.",
      "Mifepristone Tablets I.P"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Mifepristone — 200 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Mifepristone I.P. 200 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "sourceNumber": "23",
        "sourceRecordId": "source-0623"
      },
      {
        "label": "Standard formulation",
        "composition": "Mifepristone — 10 mg",
        "sourceComposition": "Each Uncoated Tablet Contains Mifepristone IP 10 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "sourceNumber": "27",
        "sourceRecordId": "source-0627"
      },
      {
        "label": "Standard formulation",
        "composition": "Mifepristone — 25 mg",
        "sourceComposition": "Each Uncoated Tablet Contains Mifepristone IP 25 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "sourceNumber": "28",
        "sourceRecordId": "source-0628"
      }
    ],
    "sources": [
      {
        "recordId": "source-0623",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "number": "23"
      },
      {
        "recordId": "source-0627",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "number": "27"
      },
      {
        "recordId": "source-0628",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "number": "28"
      }
    ]
  },
  {
    "id": "p-6db3f15999f8",
    "name": "Minoxidil Tablets",
    "division": "General",
    "category": "Dermatology & Cosmeceuticals",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg",
      "5.0 mg"
    ],
    "composition": "Each Un Coated Tablet Contains : Minoxidil IP 2.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Minoxidil"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Minoxidil Tablets IP 2.5 mg",
      "Minoxidil Tablets IP 5.0 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Minoxidil — 2.5 mg",
        "sourceComposition": "Each Un Coated Tablet Contains : Minoxidil IP 2.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "sourceNumber": "492",
        "sourceRecordId": "source-0588"
      },
      {
        "label": "Standard formulation",
        "composition": "Minoxidil — 5.0 mg",
        "sourceComposition": "Each Un Coated Tablet Contains : Minoxidil IP 5.0 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "sourceNumber": "496",
        "sourceRecordId": "source-0592"
      }
    ],
    "sources": [
      {
        "recordId": "source-0588",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "number": "492"
      },
      {
        "recordId": "source-0592",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "number": "496"
      }
    ]
  },
  {
    "id": "p-a1503b8418d2",
    "name": "Mirtazapine Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "7.5 mg",
      "15 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Mirtazapine (Ashemihydrates) IP 7.5 mg Excipients q.s.",
    "ingredients": [
      "Mirtazapine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Mirtazapine Tablets IP",
      "Mirtazapine Dispersible Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Mirtazapine — 7.5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Mirtazapine (Ashemihydrates) IP 7.5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "sourceNumber": "367",
        "sourceRecordId": "source-0463"
      },
      {
        "label": "Dispersible",
        "composition": "Mirtazapine — 15 mg",
        "sourceComposition": "Each Uncoated Dispersible Tablet Contains: Mirtazapine (Ashemihydrate) IP 15 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "sourceNumber": "368",
        "sourceRecordId": "source-0464"
      }
    ],
    "sources": [
      {
        "recordId": "source-0463",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "number": "367"
      },
      {
        "recordId": "source-0464",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "number": "368"
      }
    ]
  },
  {
    "id": "p-39b010c1d04c",
    "name": "Misoprostol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "25 mcg",
      "600 mcg",
      "200 mcg"
    ],
    "composition": "Each Uncoated Tablet Contains: Misoprostol (As1%Hpmc Dispersion) I.P. 25 mcg Excipients q.s.",
    "ingredients": [
      "Misoprostol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Misoprostol Tablets I.P. 25 mcg",
      "Misoprostol Tablets 600 mcg",
      "Misoprostol Tablets IP200 mcg",
      "Misoprostoltablets200 mcg N-Prostol Tablets Pack Size-10x1x4Tablets Quantity-20,000 Nos",
      "Misoprostol Tablets 200 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Misoprostol — 25 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Misoprostol (As1%Hpmc Dispersion) I.P. 25 mcg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "sourceNumber": "7",
        "sourceRecordId": "source-0607"
      },
      {
        "label": "Standard formulation",
        "composition": "Misoprostol — 600 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Misoprostol I.P. 600 mcg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "sourceNumber": "11",
        "sourceRecordId": "source-0611"
      },
      {
        "label": "Standard formulation",
        "composition": "Misoprostol — 200 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Misoprostol IP 200 mcg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "sourceNumber": "48",
        "sourceRecordId": "source-0648"
      }
    ],
    "sources": [
      {
        "recordId": "source-0607",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "number": "7"
      },
      {
        "recordId": "source-0611",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "number": "11"
      },
      {
        "recordId": "source-0648",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "number": "48"
      },
      {
        "recordId": "source-0661",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 9,
        "number": "61"
      },
      {
        "recordId": "source-0676",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 11,
        "number": "76"
      }
    ]
  },
  {
    "id": "p-504dcc1adde3",
    "name": "Montelukast Sodium & Desloratadine Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "10 mg + 5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Montelukast Sodium Equivalentto Montelukast IP 10 mg Desloratadine BP 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Montelukast Sodium",
      "Desloratadine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Montelukast &Desloratadine Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Montelukast Sodium — 10 mg; Desloratadine — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Montelukast Sodium Equivalentto Montelukast IP 10 mg Desloratadine BP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "sourceNumber": "262",
        "sourceRecordId": "source-0358"
      }
    ],
    "sources": [
      {
        "recordId": "source-0358",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "number": "262"
      }
    ]
  },
  {
    "id": "p-21dd2087b013",
    "name": "Montelukast Sodium & Fexofenadine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 120 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Montelukast Sodium Equivalentto Montelukast I.P. 10 mg Fexofenadine Hydrochloride I.P. 120 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Montelukast Sodium",
      "Fexofenadine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Montelukastand Fexofenadine Hydrochloride Tablets",
      "Montelukast Sodium &Fexofenadine H Cl Tablets."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Montelukast Sodium — 10 mg; Fexofenadine Hydrochloride — 120 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Montelukast Sodium Equivalentto Montelukast I.P. 10 mg Fexofenadine Hydrochloride I.P. 120 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "sourceNumber": "79",
        "sourceRecordId": "source-0175"
      }
    ],
    "sources": [
      {
        "recordId": "source-0175",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "number": "79"
      },
      {
        "recordId": "source-0200",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 17,
        "number": "104"
      }
    ]
  },
  {
    "id": "p-2d7bcf081331",
    "name": "Montelukast Sodium & Levocetirizine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg + 2.5 mg",
      "10 mg + 5 mg"
    ],
    "composition": "Each Uncoated Dispersible Tablet Contains: Montelukast Sodium Equivalentto Montelukast IP 5 mg Levocetirizine Hydrochloride IP 2.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Montelukast Sodium",
      "Levocetirizine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Montelukast &Levocetirizine Dispersible Tablets",
      "Montelukast Sodium&Levocetirizine HCl Tablets IP"
    ],
    "variants": [
      {
        "label": "Dispersible",
        "composition": "Montelukast Sodium — 5 mg; Levocetirizine Hydrochloride — 2.5 mg",
        "sourceComposition": "Each Uncoated Dispersible Tablet Contains: Montelukast Sodium Equivalentto Montelukast IP 5 mg Levocetirizine Hydrochloride IP 2.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "sourceNumber": "203",
        "sourceRecordId": "source-0299"
      },
      {
        "label": "Standard formulation",
        "composition": "Montelukast Sodium — 10 mg; Levocetirizine Hydrochloride — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Montelukast Sodium Equivalentto Montelukast IP 10 mg Levocetirizine Hydrochloride IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 49,
        "sourceNumber": "302",
        "sourceRecordId": "source-0398"
      }
    ],
    "sources": [
      {
        "recordId": "source-0299",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "number": "203"
      },
      {
        "recordId": "source-0398",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 49,
        "number": "302"
      }
    ]
  },
  {
    "id": "p-ecc14742cc85",
    "name": "Moringa Oleifera Capsules",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "500 mg"
    ],
    "composition": "Moringa Oleifera 500 mg",
    "ingredients": [
      "Moringa Oleifera"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Moringa Oleifera 500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Moringa Oleifera — 500 mg",
        "sourceComposition": "Moringa Oleifera 500 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "33",
        "sourceRecordId": "source-0800"
      }
    ],
    "sources": [
      {
        "recordId": "source-0800",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "33"
      }
    ]
  },
  {
    "id": "p-799e29b30633",
    "name": "Moxifloxacin Hydrochloride Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "400 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Moxifloxacin Hydrochloride Equivalentto Moxifloxacin BP 400 mg Excipients q.s. Colour:Red Oxideof Iron& Titanium Dioxide BP",
    "ingredients": [
      "Moxifloxacin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Moxifloxacin Tablets BP (For Export Only)",
      "Moxifloxacin Tablets BP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Moxifloxacin Hydrochloride — 400 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Moxifloxacin Hydrochloride Equivalentto Moxifloxacin BP 400 mg Excipients q.s. Colour:Red Oxideof Iron& Titanium Dioxide BP",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "sourceNumber": "325",
        "sourceRecordId": "source-0421"
      }
    ],
    "sources": [
      {
        "recordId": "source-0421",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "number": "325"
      },
      {
        "recordId": "source-0422",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "number": "326"
      }
    ]
  },
  {
    "id": "p-05321ca17444",
    "name": "Myo-Inositol & D-Chiro Inositol & Chromium Picolinate & Vitamin D3 Stabilized Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "550 mg + 13.8 mg + 100 mcg + 400 iu",
      "550 mg + 13.8 mg + 50 mcg + 200 iu"
    ],
    "composition": "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg Chromium Picolinate 100 mcg Vitamin D3 Stabilized 400 iu",
    "ingredients": [
      "Myo-Inositol",
      "D-Chiro Inositol",
      "Chromium Picolinate",
      "Vitamin D3 Stabilized"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg Chromium Picolinate 100 mcg Vitamin D3 Stabilized 400 iu",
      "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg Chromium Picolinate 50 mcg Vitamin D3 Stabilized 200 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Myo-Inositol — 550 mg; D-Chiro Inositol — 13.8 mg; Chromium Picolinate — 100 mcg; Vitamin D3 Stabilized — 400 iu",
        "sourceComposition": "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg Chromium Picolinate 100 mcg Vitamin D3 Stabilized 400 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "sourceNumber": "53",
        "sourceRecordId": "source-0053"
      },
      {
        "label": "Standard formulation",
        "composition": "Myo-Inositol — 550 mg; D-Chiro Inositol — 13.8 mg; Chromium Picolinate — 50 mcg; Vitamin D3 Stabilized — 200 iu",
        "sourceComposition": "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg Chromium Picolinate 50 mcg Vitamin D3 Stabilized 200 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 16,
        "sourceNumber": "91",
        "sourceRecordId": "source-0091"
      }
    ],
    "sources": [
      {
        "recordId": "source-0053",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "number": "53"
      },
      {
        "recordId": "source-0091",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 16,
        "number": "91"
      }
    ]
  },
  {
    "id": "p-e98bcc454df3",
    "name": "Myo-Inositol, Cinnamon Dry Extract, D-Chiro Inositol & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Myo-Inositol 550 mg Cinnamon Dry Extract 228 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 100 mcg Vitamin D3 Stabilized 500 iu",
    "ingredients": [
      "Myo-Inositol",
      "Cinnamon Dry Extract",
      "D-Chiro Inositol",
      "N-Acetyl L-Cysteine",
      "L-Methylfolate Calcium",
      "Zinc Sulphate Monohydrate",
      "Chromium Picolinate",
      "Vitamin D3 Stabilized"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Myo-Inositol 550 mg Cinnamon Dry Extract 228 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 100 mcg Vitamin D3 Stabilized 500 iu",
      "Myo-Inositol 550 mg Cinnamon Dry Extract 228 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 50 mcg Vitamin D3 Stabilized 500 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Myo-Inositol — 550 mg; Cinnamon Dry Extract — 228 mg; D-Chiro Inositol — 13.8 mg; N-Acetyl L-Cysteine — 50 mg; L-Methylfolate Calcium — 200 mcg; Zinc Sulphate Monohydrate — 7.5 mg; Chromium Picolinate — 100 mcg; Vitamin D3 Stabilized — 500 iu",
        "sourceComposition": "Myo-Inositol 550 mg Cinnamon Dry Extract 228 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 100 mcg Vitamin D3 Stabilized 500 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 1,
        "sourceNumber": "3",
        "sourceRecordId": "source-0003"
      },
      {
        "label": "Standard formulation",
        "composition": "Myo-Inositol — 550 mg; Cinnamon Dry Extract — 228 mg; D-Chiro Inositol — 13.8 mg; N-Acetyl L-Cysteine — 50 mg; L-Methylfolate Calcium — 200 mcg; Zinc Sulphate Monohydrate — 7.5 mg; Chromium Picolinate — 50 mcg; Vitamin D3 Stabilized — 500 iu",
        "sourceComposition": "Myo-Inositol 550 mg Cinnamon Dry Extract 228 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 50 mcg Vitamin D3 Stabilized 500 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "sourceNumber": "68",
        "sourceRecordId": "source-0068"
      }
    ],
    "sources": [
      {
        "recordId": "source-0003",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 1,
        "number": "3"
      },
      {
        "recordId": "source-0047",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 8,
        "number": "47"
      },
      {
        "recordId": "source-0068",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "number": "68"
      }
    ]
  },
  {
    "id": "p-850ab327de96",
    "name": "Myo-Inositol, D-Chiro Inositol, Berberine Hydrochloride & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg Berberine10%Hydrochloride 500 mg L-Methylfolate Calcium 0.5 mg Cyanocobalamin 1 mcg",
    "ingredients": [
      "Myo-Inositol",
      "D-Chiro Inositol",
      "Berberine Hydrochloride",
      "L-Methylfolate Calcium",
      "Cyanocobalamin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg Berberine10%Hydrochloride 500 mg L-Methylfolate Calcium 0.5 mg Cyanocobalamin 1 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Myo-Inositol — 550 mg; D-Chiro Inositol — 13.8 mg; Berberine Hydrochloride — 500 mg; L-Methylfolate Calcium — 0.5 mg; Cyanocobalamin — 1 mcg",
        "sourceComposition": "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg Berberine10%Hydrochloride 500 mg L-Methylfolate Calcium 0.5 mg Cyanocobalamin 1 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "sourceNumber": "9",
        "sourceRecordId": "source-0009"
      }
    ],
    "sources": [
      {
        "recordId": "source-0009",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 2,
        "number": "9"
      },
      {
        "recordId": "source-0036",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 6,
        "number": "36"
      }
    ]
  },
  {
    "id": "p-77084552cc8d",
    "name": "Myo-Inositol, D-Chiro Inositol, N-Acetyl L-Cysteine & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 50 mcg Vitamin D3 Stabilized 500 iu",
    "ingredients": [
      "Myo-Inositol",
      "D-Chiro Inositol",
      "N-Acetyl L-Cysteine",
      "L-Methylfolate Calcium",
      "Zinc Sulphate Monohydrate",
      "Chromium Picolinate",
      "Vitamin D3 Stabilized"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 50 mcg Vitamin D3 Stabilized 500 iu",
      "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 100 mcg Vitamin D3 Stabilized 500 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Myo-Inositol — 550 mg; D-Chiro Inositol — 13.8 mg; N-Acetyl L-Cysteine — 50 mg; L-Methylfolate Calcium — 200 mcg; Zinc Sulphate Monohydrate — 7.5 mg; Chromium Picolinate — 50 mcg; Vitamin D3 Stabilized — 500 iu",
        "sourceComposition": "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 50 mcg Vitamin D3 Stabilized 500 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "sourceNumber": "70",
        "sourceRecordId": "source-0070"
      },
      {
        "label": "Standard formulation",
        "composition": "Myo-Inositol — 550 mg; D-Chiro Inositol — 13.8 mg; N-Acetyl L-Cysteine — 50 mg; L-Methylfolate Calcium — 200 mcg; Zinc Sulphate Monohydrate — 7.5 mg; Chromium Picolinate — 100 mcg; Vitamin D3 Stabilized — 500 iu",
        "sourceComposition": "Myo-Inositol 550 mg D-Chiro Inositol 13.8 mg N-Acetyl L-Cysteine 50 mg L-Methylfolate Calcium 200 mcg Zinc Sulphate Monohydrate 7.5 mg Chromium Picolinate 100 mcg Vitamin D3 Stabilized 500 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 14,
        "sourceNumber": "80",
        "sourceRecordId": "source-0080"
      }
    ],
    "sources": [
      {
        "recordId": "source-0070",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "number": "70"
      },
      {
        "recordId": "source-0080",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 14,
        "number": "80"
      }
    ]
  },
  {
    "id": "p-75fb1c212ad4",
    "name": "N-Acetyl Cysteine, Alpha Lipoic Acid, Inositol & Multinutrient Blend Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "N-Acetyl Cysteine 300 mg, Alpha Lipoic Acid 200 mg, Inositol 100 mg, Chromium Polynicotinate 35 mcg, Zinc Gluconate (Elemental Zinc) 10 mg",
    "ingredients": [
      "N-Acetyl Cysteine",
      "Alpha Lipoic Acid",
      "Inositol",
      "Chromium Polynicotinate",
      "Zinc Gluconate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "N-Acetyl Cysteine 300 mg, Alpha Lipoic Acid 200 mg, Inositol 100 mg, Chromium Polynicotinate 35 mcg, Zinc Gluconate (Elemental Zinc) 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "N-Acetyl Cysteine — 300 mg; Alpha Lipoic Acid — 200 mg; Inositol — 100 mg; Chromium Polynicotinate — 35 mcg; Zinc Gluconate — 10 mg",
        "sourceComposition": "N-Acetyl Cysteine 300 mg, Alpha Lipoic Acid 200 mg, Inositol 100 mg, Chromium Polynicotinate 35 mcg, Zinc Gluconate (Elemental Zinc) 10 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "23",
        "sourceRecordId": "source-0825"
      }
    ],
    "sources": [
      {
        "recordId": "source-0825",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "23"
      }
    ]
  },
  {
    "id": "p-e5fbbe1f1141",
    "name": "Naproxen & Domperidone Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "250 mg + 10 mg",
      "500 mg + 10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Naproxen IP 250 mg Domperidone IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Naproxen",
      "Domperidone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Naproxen&Domperidone Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Naproxen — 250 mg; Domperidone — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Naproxen IP 250 mg Domperidone IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "sourceNumber": "29",
        "sourceRecordId": "source-0125"
      },
      {
        "label": "Standard formulation",
        "composition": "Naproxen — 500 mg; Domperidone — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Naproxen IP 500 mg Domperidone IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "sourceNumber": "30",
        "sourceRecordId": "source-0126"
      }
    ],
    "sources": [
      {
        "recordId": "source-0125",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "number": "29"
      },
      {
        "recordId": "source-0126",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "number": "30"
      }
    ]
  },
  {
    "id": "p-61d2a265e3a6",
    "name": "Naproxen Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "250 mg",
      "500 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Naproxen IP 250 mg Excipients q.s.",
    "ingredients": [
      "Naproxen"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Naproxen Tablets IP250 mg",
      "Naproxen Tablets IP500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Naproxen — 250 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Naproxen IP 250 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "sourceNumber": "304",
        "sourceRecordId": "source-0400"
      },
      {
        "label": "Standard formulation",
        "composition": "Naproxen — 500 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Naproxen IP 500 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "sourceNumber": "305",
        "sourceRecordId": "source-0401"
      }
    ],
    "sources": [
      {
        "recordId": "source-0400",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "number": "304"
      },
      {
        "recordId": "source-0401",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "number": "305"
      }
    ]
  },
  {
    "id": "p-43f2e46cefa9",
    "name": "Nefopam Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "30 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Nefopam Hydrochloride 30 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Nefopam Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Nefopam Hydrochloride Tablets 30 mg",
      "Nefopam Hydrochloride Tablets 30 mg (For Export Only)"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Nefopam Hydrochloride — 30 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Nefopam Hydrochloride 30 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "sourceNumber": "389",
        "sourceRecordId": "source-0485"
      }
    ],
    "sources": [
      {
        "recordId": "source-0485",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "number": "389"
      },
      {
        "recordId": "source-0491",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 64,
        "number": "395"
      }
    ]
  },
  {
    "id": "p-9532bed09a1f",
    "name": "Nicorandil Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Nicorandil IP 10 mg Excipients q.s.",
    "ingredients": [
      "Nicorandil"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Nicorandil Tablets IP10 mg",
      "Nicorandil Prolonged Release Tablets IP 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Nicorandil — 10 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Nicorandil IP 10 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "sourceNumber": "362",
        "sourceRecordId": "source-0458"
      },
      {
        "label": "Prolonged release",
        "composition": "Nicorandil — 10 mg",
        "sourceComposition": "Each Uncoated Prolonged Release Contains: Nicorandil IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "sourceNumber": "363",
        "sourceRecordId": "source-0459"
      }
    ],
    "sources": [
      {
        "recordId": "source-0458",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "number": "362"
      },
      {
        "recordId": "source-0459",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "number": "363"
      },
      {
        "recordId": "source-0475",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "number": "379"
      }
    ]
  },
  {
    "id": "p-f2e057c53a92",
    "name": "Nifedipine Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "composition": "Each Film Coated Tablet Sustained Release Tablet Contain : Nifedipine IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Nifedipine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Nifedipine Sustained Release Tablets IP 10 mg",
      "Nifedipine Sustained Release Tablets IP 20 mg"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Nifedipine — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Sustained Release Tablet Contain : Nifedipine IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "sourceNumber": "494",
        "sourceRecordId": "source-0590"
      },
      {
        "label": "Sustained release",
        "composition": "Nifedipine — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Sustained Release Tablet Contain : Nifedipine IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "sourceNumber": "495",
        "sourceRecordId": "source-0591"
      }
    ],
    "sources": [
      {
        "recordId": "source-0590",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "number": "494"
      },
      {
        "recordId": "source-0591",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "number": "495"
      }
    ]
  },
  {
    "id": "p-af3834f0a0a7",
    "name": "Nimesulide & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "100 mg + 325 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Nimesulide BP 100 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Nimesulide",
      "Paracetamol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Nimesulide&Paracetamol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Nimesulide — 100 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Nimesulide BP 100 mg Paracetamol IP 325 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "sourceNumber": "221",
        "sourceRecordId": "source-0317"
      }
    ],
    "sources": [
      {
        "recordId": "source-0317",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "number": "221"
      }
    ]
  },
  {
    "id": "p-f314f2cac064",
    "name": "Nimesulide Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Nimesulide BP 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Nimesulide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Nimesulide Tablets100 mg",
      "Nimesulide Mouth Dissolving Tablets 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Nimesulide — 100 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Nimesulide BP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "sourceNumber": "377",
        "sourceRecordId": "source-0473"
      }
    ],
    "sources": [
      {
        "recordId": "source-0473",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "number": "377"
      },
      {
        "recordId": "source-0474",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "number": "378"
      }
    ]
  },
  {
    "id": "p-ad0d23919556",
    "name": "Nitrofurantoin Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Each Uncoated Sustained Release Tablet Contains: Nitrofurantoin I.P. 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Nitrofurantoin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Nitrofurantoin Sustained Release Tablets100 mg",
      "Nitrofurantoin Tablets I.P.",
      "Nitrofurantoin Sustained Release Tablets 100 mg"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Nitrofurantoin — 100 mg",
        "sourceComposition": "Each Uncoated Sustained Release Tablet Contains: Nitrofurantoin I.P. 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "sourceNumber": "58",
        "sourceRecordId": "source-0154"
      },
      {
        "label": "Standard formulation",
        "composition": "Nitrofurantoin — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Nitrofurantoin I.P. 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "sourceNumber": "75",
        "sourceRecordId": "source-0171"
      }
    ],
    "sources": [
      {
        "recordId": "source-0154",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "number": "58"
      },
      {
        "recordId": "source-0171",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "number": "75"
      },
      {
        "recordId": "source-0600",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 82,
        "number": "504"
      }
    ]
  },
  {
    "id": "p-b8b4b931105a",
    "name": "Norethisterone & Ethinylestradiol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "1 mg + 35 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Norethisterone IP 1 mg Ethinylestradiol IP 35 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Norethisterone",
      "Ethinylestradiol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Norethisterone&Ethinylestradiol Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Norethisterone — 1 mg; Ethinylestradiol — 35 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Norethisterone IP 1 mg Ethinylestradiol IP 35 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "sourceNumber": "47",
        "sourceRecordId": "source-0647"
      }
    ],
    "sources": [
      {
        "recordId": "source-0647",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "number": "47"
      }
    ]
  },
  {
    "id": "p-0228e8d2005f",
    "name": "Norethisterone Acetate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "15 mg",
      "10 mg"
    ],
    "composition": "Each Film Coated Controlled Release Tablet Contains: Norethisterone Acetate B.P. 15 mg Excipients q.s. Colour:Titanium Dioxide IP",
    "ingredients": [
      "Norethisterone Acetate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Norethisterone Acetate Controlled Release Tablets"
    ],
    "variants": [
      {
        "label": "Controlled release",
        "composition": "Norethisterone Acetate — 15 mg",
        "sourceComposition": "Each Film Coated Controlled Release Tablet Contains: Norethisterone Acetate B.P. 15 mg Excipients q.s. Colour:Titanium Dioxide IP",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "sourceNumber": "21",
        "sourceRecordId": "source-0621"
      },
      {
        "label": "Controlled release",
        "composition": "Norethisterone Acetate — 10 mg",
        "sourceComposition": "Each Film Coated Controlled Release Tablet Contains: Norethisterone Acetate B.P. 10 mg Excipients q.s. Colour:Titanium Dioxide IP",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "sourceNumber": "22",
        "sourceRecordId": "source-0622"
      }
    ],
    "sources": [
      {
        "recordId": "source-0621",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "number": "21"
      },
      {
        "recordId": "source-0622",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "number": "22"
      }
    ]
  },
  {
    "id": "p-6fb01fa4f80b",
    "name": "Norethisterone Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg",
      "5 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Norethisterone I.P. 20 mg Excipients q.s.",
    "ingredients": [
      "Norethisterone"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Norethisterone Tablets I.P.",
      "Norethisterone Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Norethisterone — 20 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Norethisterone I.P. 20 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "sourceNumber": "19",
        "sourceRecordId": "source-0619"
      },
      {
        "label": "Standard formulation",
        "composition": "Norethisterone — 5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Norethisterone IP 5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "sourceNumber": "38",
        "sourceRecordId": "source-0638"
      }
    ],
    "sources": [
      {
        "recordId": "source-0619",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "number": "19"
      },
      {
        "recordId": "source-0638",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 5,
        "number": "38"
      }
    ]
  },
  {
    "id": "p-16e183d73136",
    "name": "Norgestrel & Ethinylestradiol Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "300 mg + 0.03 mg"
    ],
    "composition": "Each Uncoated Tablet Contains Norgestrel IP 300 mg Ethinylestradiol IP 0.03 mg",
    "ingredients": [
      "Norgestrel",
      "Ethinylestradiol"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Norgestrel&Ethinylestradiol"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Norgestrel — 300 mg; Ethinylestradiol — 0.03 mg",
        "sourceComposition": "Each Uncoated Tablet Contains Norgestrel IP 300 mg Ethinylestradiol IP 0.03 mg",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "sourceNumber": "29",
        "sourceRecordId": "source-0629"
      }
    ],
    "sources": [
      {
        "recordId": "source-0629",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 4,
        "number": "29"
      }
    ]
  },
  {
    "id": "p-9e8f05b83c47",
    "name": "Nortriptylin Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "25 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Nortriptylin Hydrochloride Equivalentto Nortriptyline IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Nortriptylin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Nortriptyline Tablets IP10 mg",
      "Nortriptyline Tablets IP25 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Nortriptylin Hydrochloride — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Nortriptylin Hydrochloride Equivalentto Nortriptyline IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "sourceNumber": "329",
        "sourceRecordId": "source-0425"
      },
      {
        "label": "Standard formulation",
        "composition": "Nortriptylin Hydrochloride — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Nortriptylin Hydrochloride Equivalentto Nortriptyline IP 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "sourceNumber": "330",
        "sourceRecordId": "source-0426"
      }
    ],
    "sources": [
      {
        "recordId": "source-0425",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "number": "329"
      },
      {
        "recordId": "source-0426",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 53,
        "number": "330"
      }
    ]
  },
  {
    "id": "p-558d1f7e8fd4",
    "name": "Ofloxacin & Ornidazole Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg + 500 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Ofloxacin I.P. 200 mg Ornidazole I.P. 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ofloxacin",
      "Ornidazole"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ofloxacinand Ornidazole Tablets I.P."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ofloxacin — 200 mg; Ornidazole — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ofloxacin I.P. 200 mg Ornidazole I.P. 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "sourceNumber": "68",
        "sourceRecordId": "source-0164"
      }
    ],
    "sources": [
      {
        "recordId": "source-0164",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "number": "68"
      }
    ]
  },
  {
    "id": "p-714fd7d11aec",
    "name": "Ofloxacin Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "200 mg",
      "400 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Ofloxacin IP 200 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ofloxacin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ofloxacin Tablets IP 200 mg",
      "Ofloxacin Tablets IP 400 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ofloxacin — 200 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ofloxacin IP 200 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "sourceNumber": "129",
        "sourceRecordId": "source-0225"
      },
      {
        "label": "Standard formulation",
        "composition": "Ofloxacin — 400 mg",
        "sourceComposition": "Each Film Coated Tablet Contains:: Ofloxacin IP 400 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "sourceNumber": "134",
        "sourceRecordId": "source-0230"
      }
    ],
    "sources": [
      {
        "recordId": "source-0225",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "number": "129"
      },
      {
        "recordId": "source-0230",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "number": "134"
      }
    ]
  },
  {
    "id": "p-ce6be42eb4f4",
    "name": "Olmesartan Medoxomil & Amlodipine Besylate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Olmesartan Medoxomil IP 40 mg Amlodipine Besilate Equivalentto Amlodipine IP 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Olmesartan Medoxomil",
      "Amlodipine Besylate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Olmesartan Medoxomil&Amlodipine Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Olmesartan Medoxomil — 40 mg; Amlodipine Besylate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Olmesartan Medoxomil IP 40 mg Amlodipine Besilate Equivalentto Amlodipine IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "sourceNumber": "375",
        "sourceRecordId": "source-0471"
      }
    ],
    "sources": [
      {
        "recordId": "source-0471",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "number": "375"
      }
    ]
  },
  {
    "id": "p-40c1b67e9177",
    "name": "Olmesartan Medoxomil & Ramipril Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Olmesartan Medoxomil IP 40 mg Ramipril IP 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Olmesartan Medoxomil",
      "Ramipril"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Olmesartan Medoxomil&Ramipril Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Olmesartan Medoxomil — 40 mg; Ramipril — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Olmesartan Medoxomil IP 40 mg Ramipril IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "sourceNumber": "206",
        "sourceRecordId": "source-0302"
      }
    ],
    "sources": [
      {
        "recordId": "source-0302",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "number": "206"
      }
    ]
  },
  {
    "id": "p-63798f08cc66",
    "name": "Olmesartan Medoxomil Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Olmesartan Medoxomil IP 40 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Olmesartan Medoxomil"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Olmesartan Medoxomil Tablets IP 40 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Olmesartan Medoxomil — 40 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Olmesartan Medoxomil IP 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "sourceNumber": "374",
        "sourceRecordId": "source-0470"
      }
    ],
    "sources": [
      {
        "recordId": "source-0470",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "number": "374"
      }
    ]
  },
  {
    "id": "p-b54220810471",
    "name": "Omega-3 Fatty Acid & Docosahexaenoic Acid & Eicosapentaenoic Acid Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "500 mg + 60 mg + 90 mg",
      "1000 mg + 120 mg + 180 mg"
    ],
    "composition": "Omega-3 Fatty Acid 500 mg, Docosahexaenoic Acid 60 mg, Eicosapentaenoic Acid 90 mg",
    "ingredients": [
      "Omega-3 Fatty Acid",
      "Docosahexaenoic Acid",
      "Eicosapentaenoic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Omega-3 Fatty Acid 500 mg, Docosahexaenoic Acid 60 mg, Eicosapentaenoic Acid 90 mg",
      "Omega-3 Fatty Acid 1000 mg, Docosahexaenoic Acid 120 mg, Eicosapentaenoic Acid 180 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Omega-3 Fatty Acid — 500 mg; Docosahexaenoic Acid — 60 mg; Eicosapentaenoic Acid — 90 mg",
        "sourceComposition": "Omega-3 Fatty Acid 500 mg, Docosahexaenoic Acid 60 mg, Eicosapentaenoic Acid 90 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "28",
        "sourceRecordId": "source-0760"
      },
      {
        "label": "Standard formulation",
        "composition": "Omega-3 Fatty Acid — 1000 mg; Docosahexaenoic Acid — 120 mg; Eicosapentaenoic Acid — 180 mg",
        "sourceComposition": "Omega-3 Fatty Acid 1000 mg, Docosahexaenoic Acid 120 mg, Eicosapentaenoic Acid 180 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "29",
        "sourceRecordId": "source-0761"
      }
    ],
    "sources": [
      {
        "recordId": "source-0760",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "28"
      },
      {
        "recordId": "source-0761",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "29"
      }
    ]
  },
  {
    "id": "p-5475a162d29f",
    "name": "Omeprazole & Domperidone Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg + 30 mg",
      "20 mg + 10 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Omeprazole (asentericcoatedpellets) IP 20 mg Domperidone (Assustainedreleasepellets) IP 30 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
    "ingredients": [
      "Omeprazole",
      "Domperidone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Omeprazole (EC) &Domperidone SR)Capsules",
      "Omeprazole &Domperidone Capsules IP",
      "Omeprazole 20 mg (As Enteric Coated Granules), Domperidone 10 mg"
    ],
    "variants": [
      {
        "label": "Sustained release, Enteric coated",
        "composition": "Omeprazole — 20 mg; Domperidone — 30 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Omeprazole (asentericcoatedpellets) IP 20 mg Domperidone (Assustainedreleasepellets) IP 30 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "sourceNumber": "148",
        "sourceRecordId": "source-0244"
      },
      {
        "label": "Enteric coated",
        "composition": "Omeprazole — 20 mg; Domperidone — 10 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Omeprazole (asentericcoatedpellets) IP 20 mg Domperidone (Aspellets) IP 10 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "sourceNumber": "149",
        "sourceRecordId": "source-0245"
      }
    ],
    "sources": [
      {
        "recordId": "source-0244",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "number": "148"
      },
      {
        "recordId": "source-0245",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "number": "149"
      },
      {
        "recordId": "source-0795",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "28"
      }
    ]
  },
  {
    "id": "p-b2993709d10c",
    "name": "Omeprazole Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Omeprazole (asentericcoatedpellets) IP 20 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
    "ingredients": [
      "Omeprazole"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Omeprazole Capsules IP20 mg"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Omeprazole — 20 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Omeprazole (asentericcoatedpellets) IP 20 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "sourceNumber": "147",
        "sourceRecordId": "source-0243"
      }
    ],
    "sources": [
      {
        "recordId": "source-0243",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 23,
        "number": "147"
      }
    ]
  },
  {
    "id": "p-c06cb76fd4eb",
    "name": "Ondansetron Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "4 mg",
      "8 mg"
    ],
    "composition": "Each Uncoated Orally Disintegrating Tablet Contains: Ondansetron Hydrochloride Equivalentto Ondansetron IP 4 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ondansetron Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ondansetron Orally Disintegrating Tablets IP",
      "Ondansetron Tablets I.P",
      "Ondansetron Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ondansetron Hydrochloride — 4 mg",
        "sourceComposition": "Each Uncoated Orally Disintegrating Tablet Contains: Ondansetron Hydrochloride Equivalentto Ondansetron IP 4 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "sourceNumber": "28",
        "sourceRecordId": "source-0124"
      },
      {
        "label": "Standard formulation",
        "composition": "Ondansetron Hydrochloride — 8 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ondansetron Hydrochloride Equivalentto Ondansetron IP 8 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "sourceNumber": "461",
        "sourceRecordId": "source-0557"
      }
    ],
    "sources": [
      {
        "recordId": "source-0124",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "number": "28"
      },
      {
        "recordId": "source-0163",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 10,
        "number": "67"
      },
      {
        "recordId": "source-0557",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "number": "461"
      }
    ]
  },
  {
    "id": "p-49b47427b4ce",
    "name": "Oxcarbazepine Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg",
      "300 mg",
      "450 mg"
    ],
    "composition": "Each Film Coated Tablets Contains: Oxcarbazepine IP 150 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Oxcarbazepine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Oxcarbazepine Tablets IP 150 mg",
      "Oxcarbazepine Tablets IP 300 mg",
      "Oxcarbazepine Tablets IP 450 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Oxcarbazepine — 150 mg",
        "sourceComposition": "Each Film Coated Tablets Contains: Oxcarbazepine IP 150 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "sourceNumber": "26",
        "sourceRecordId": "source-0122"
      },
      {
        "label": "Standard formulation",
        "composition": "Oxcarbazepine — 300 mg",
        "sourceComposition": "Each Film Coated Tablets Contains: Oxcarbazepine IP 300 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "sourceNumber": "27",
        "sourceRecordId": "source-0123"
      },
      {
        "label": "Standard formulation",
        "composition": "Oxcarbazepine — 450 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Oxcarbazepine IP 450 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "sourceNumber": "313",
        "sourceRecordId": "source-0409"
      }
    ],
    "sources": [
      {
        "recordId": "source-0122",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "number": "26"
      },
      {
        "recordId": "source-0123",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 4,
        "number": "27"
      },
      {
        "recordId": "source-0409",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "number": "313"
      }
    ]
  },
  {
    "id": "p-59742b118474",
    "name": "Pantoprazole Sodium & Domperidone Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 30 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Pantoprazole Sodium Equivalentto Pantoprazole (Asgastro-Resistantpellets) IP 40 mg Domperidone (Asprolongedreleasepellets) IP 30 mg Excipients q..s Approved Colour Usedin Capsule Shells",
    "ingredients": [
      "Pantoprazole Sodium",
      "Domperidone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pantoprazole Sodium Gastro-Resistant &Domperidone Prolonged Release Capsules IP",
      "Pantoprazole Sodium eq. to Pantoprazole 40 mg, (As Enteric Coated Pellets), Domperidone 30 mg (Assustainedreleasepellets)"
    ],
    "variants": [
      {
        "label": "Prolonged release, Gastro-resistant",
        "composition": "Pantoprazole Sodium — 40 mg; Domperidone — 30 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Pantoprazole Sodium Equivalentto Pantoprazole (Asgastro-Resistantpellets) IP 40 mg Domperidone (Asprolongedreleasepellets) IP 30 mg Excipients q..s Approved Colour Usedin Capsule Shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "sourceNumber": "150",
        "sourceRecordId": "source-0246"
      },
      {
        "label": "Sustained release, Enteric coated",
        "composition": "Pantoprazole Sodium — 40 mg; Domperidone — 30 mg",
        "sourceComposition": "Pantoprazole Sodium eq. to Pantoprazole 40 mg, (As Enteric Coated Pellets), Domperidone 30 mg (Assustainedreleasepellets)",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "20",
        "sourceRecordId": "source-0787"
      }
    ],
    "sources": [
      {
        "recordId": "source-0246",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "number": "150"
      },
      {
        "recordId": "source-0787",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "20"
      }
    ]
  },
  {
    "id": "p-88e1fb9d1f2e",
    "name": "Pantoprazole Sodium & Itopride Hydrochloride Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 150 mg"
    ],
    "composition": "Each Hard Gelatin Capsules Contains: Pantoprazole Sodium (asentericcoatedpellets) IP 40 mg Itopride Hydrochloride (Assustainedreleasepellets) 150 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell&inpellets",
    "ingredients": [
      "Pantoprazole Sodium",
      "Itopride Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pantoprazole Sodium (Enteric Coated)&Itopride Hydrochloride(Sustained Release )Capsules"
    ],
    "variants": [
      {
        "label": "Sustained release, Enteric coated",
        "composition": "Pantoprazole Sodium — 40 mg; Itopride Hydrochloride — 150 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains: Pantoprazole Sodium (asentericcoatedpellets) IP 40 mg Itopride Hydrochloride (Assustainedreleasepellets) 150 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell&inpellets",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 71,
        "sourceNumber": "446",
        "sourceRecordId": "source-0542"
      }
    ],
    "sources": [
      {
        "recordId": "source-0542",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 71,
        "number": "446"
      }
    ]
  },
  {
    "id": "p-8b324ebfc5e5",
    "name": "Pantoprazole Sodium & Levosulpiride Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 75 mg"
    ],
    "composition": "Each Hard Gelatin Capsules Contains: Pantoprazole Sodium (asentericcoatedpellets) IP 40 mg Levosulpiride (Assustainedreleasepellets) 75 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell&inpellets",
    "ingredients": [
      "Pantoprazole Sodium",
      "Levosulpiride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pantoprazole Sodium (Enteric Coated )&Levosulpiride(Sustained Release )Capsules",
      "Pantoprazole Sodium eq. to Pantoprazole 40 mg (As Enteric Coated Pellets) Levosulpiride 75 mg (Assustainedreleasepellets)"
    ],
    "variants": [
      {
        "label": "Sustained release, Enteric coated",
        "composition": "Pantoprazole Sodium — 40 mg; Levosulpiride — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains: Pantoprazole Sodium (asentericcoatedpellets) IP 40 mg Levosulpiride (Assustainedreleasepellets) 75 mg Excipients q.s. Approved Colour Usedinemptycapsulesshell&inpellets",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 72,
        "sourceNumber": "447",
        "sourceRecordId": "source-0543"
      }
    ],
    "sources": [
      {
        "recordId": "source-0543",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 72,
        "number": "447"
      },
      {
        "recordId": "source-0789",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "22"
      }
    ]
  },
  {
    "id": "p-07b0e5653b41",
    "name": "Pantoprazole Sodium Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "40 mg"
    ],
    "composition": "Pantoprazole Sodium 40 mg eq. to Pantoprazole (as Enteric Coated Pellets), Itopride Hydrochloride 150 mg (as sustain Release Pellets)",
    "ingredients": [
      "Pantoprazole Sodium"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Pantoprazole Sodium 40 mg eq. to Pantoprazole (as Enteric Coated Pellets), Itopride Hydrochloride 150 mg (as sustain Release Pellets)"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Pantoprazole Sodium — 40 mg",
        "sourceComposition": "Pantoprazole Sodium 40 mg eq. to Pantoprazole (as Enteric Coated Pellets), Itopride Hydrochloride 150 mg (as sustain Release Pellets)",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "3",
        "sourceRecordId": "source-0770"
      }
    ],
    "sources": [
      {
        "recordId": "source-0770",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "3"
      }
    ]
  },
  {
    "id": "p-eb0bc0aeadde",
    "name": "Pantoprazole Sodium Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains: Pantoprazole Sodium Equivalentto Pantoprazole IP 40 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Pantoprazole Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pantoprazole Gastro- Resistant Tablets IP40 mg"
    ],
    "variants": [
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Pantoprazole Sodium — 40 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Pantoprazole Sodium Equivalentto Pantoprazole IP 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "sourceNumber": "162",
        "sourceRecordId": "source-0258"
      },
      {
        "label": "Gastro-resistant",
        "composition": "Pantoprazole Sodium — 40 mg",
        "sourceComposition": "Each Gastro-Resistant Tablet Contains: Pantoprazole Sodium Equivalentto Pantoprazole IP 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "sourceNumber": "291",
        "sourceRecordId": "source-0387"
      }
    ],
    "sources": [
      {
        "recordId": "source-0258",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "number": "162"
      },
      {
        "recordId": "source-0387",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "number": "291"
      }
    ]
  },
  {
    "id": "p-55f4c3d5d689",
    "name": "Paracetamol & Phenylephrine Hydrochloride & Diphenhydramine Hydrochloride & Caffeine Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "325 mg + 5 mg + 25 mg + 30 mg"
    ],
    "composition": "Each Uncoated Tablet Contains:: Paracetamol I.P. 325 mg Phenylephrine Hydrochloride I.P. 5 mg Diphenhydramine Hydrochloride I.P. 25 mg Caffeine(Anhydrous) I.P. 30 mg Excipients q.s.",
    "ingredients": [
      "Paracetamol",
      "Phenylephrine Hydrochloride",
      "Diphenhydramine Hydrochloride",
      "Caffeine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Paracetamol,Phenylephrine H Cl, Caffeine & Diphenhydramine H Cl Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Paracetamol — 325 mg; Phenylephrine Hydrochloride — 5 mg; Diphenhydramine Hydrochloride — 25 mg; Caffeine — 30 mg",
        "sourceComposition": "Each Uncoated Tablet Contains:: Paracetamol I.P. 325 mg Phenylephrine Hydrochloride I.P. 5 mg Diphenhydramine Hydrochloride I.P. 25 mg Caffeine(Anhydrous) I.P. 30 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "sourceNumber": "112",
        "sourceRecordId": "source-0208"
      }
    ],
    "sources": [
      {
        "recordId": "source-0208",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "number": "112"
      }
    ]
  },
  {
    "id": "p-019c7e992872",
    "name": "Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "500 mg",
      "650 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Paracetamol IP 500 mg Excipients q.s.",
    "ingredients": [
      "Paracetamol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Paracetamol Tablets IP 500 mg",
      "Paracetamol Tablet IP 650 mg",
      "Paracetamol Tablets BP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Paracetamol — 500 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Paracetamol IP 500 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "sourceNumber": "205",
        "sourceRecordId": "source-0301"
      },
      {
        "label": "Standard formulation",
        "composition": "Paracetamol — 650 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Paracetamol IP 650 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "sourceNumber": "294",
        "sourceRecordId": "source-0390"
      }
    ],
    "sources": [
      {
        "recordId": "source-0301",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "number": "205"
      },
      {
        "recordId": "source-0390",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 48,
        "number": "294"
      },
      {
        "recordId": "source-0582",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "number": "486"
      }
    ]
  },
  {
    "id": "p-4b64f46c01b2",
    "name": "Paroxetine Hydrochloride Hemihydrate Equivalnet to Paroxetine Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg"
    ],
    "composition": "Each Film Coated Tablet Contains : Paroxetine Hydrochloride Hemihydrate Equivalnet to Paroxetine IP 20 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Paroxetine Hydrochloride Hemihydrate Equivalnet to Paroxetine"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Paroxetine Tablets IP 20 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Paroxetine Hydrochloride Hemihydrate Equivalnet to Paroxetine — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains : Paroxetine Hydrochloride Hemihydrate Equivalnet to Paroxetine IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "sourceNumber": "477",
        "sourceRecordId": "source-0573"
      }
    ],
    "sources": [
      {
        "recordId": "source-0573",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "number": "477"
      }
    ]
  },
  {
    "id": "p-ad851581f07a",
    "name": "Paroxetine Hydrochloride Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "12.5 mg",
      "25 mg"
    ],
    "composition": "Each Film Coated Prolonged Release Tablet Contains: Paroxetine Hydrochloride Equivalentto Paroxetine IP 12.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Paroxetine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Paroxetine Prolonged Release Tablets IP12.5 mg",
      "Paroxetine Prolonged Release Tablets IP25 mg",
      "Paroxetine Prolonged Release Tablets IP 12.5 mg"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Paroxetine Hydrochloride — 12.5 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains: Paroxetine Hydrochloride Equivalentto Paroxetine IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "sourceNumber": "04",
        "sourceRecordId": "source-0100"
      },
      {
        "label": "Prolonged release",
        "composition": "Paroxetine Hydrochloride — 25 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains: Paroxetine Hydrochloride Equivalentto Paroxetine IP 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "sourceNumber": "05",
        "sourceRecordId": "source-0101"
      },
      {
        "label": "Prolonged release, Enteric coated",
        "composition": "Paroxetine Hydrochloride — 12.5 mg",
        "sourceComposition": "Each Enteric Coated Prolonged Release Tablet Contains: Paroxetine Hydrochloride Equivalentto Paroxetine IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "sourceNumber": "351",
        "sourceRecordId": "source-0447"
      }
    ],
    "sources": [
      {
        "recordId": "source-0100",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "number": "04"
      },
      {
        "recordId": "source-0101",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "number": "05"
      },
      {
        "recordId": "source-0447",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "351"
      }
    ]
  },
  {
    "id": "p-e120099c1534",
    "name": "Piracetam Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "800 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Piracetam IP 800 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Piracetam"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Piracetam Tablets800 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Piracetam — 800 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Piracetam IP 800 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "sourceNumber": "13",
        "sourceRecordId": "source-0109"
      }
    ],
    "sources": [
      {
        "recordId": "source-0109",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "number": "13"
      }
    ]
  },
  {
    "id": "p-a03b06e1ad9f",
    "name": "Pre Probiotic Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "300 mg"
    ],
    "composition": "Pre Probiotic Blend 300 mg",
    "ingredients": [
      "Pre Probiotic Blend"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Pre Probiotic Blend 300 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Pre Probiotic Blend — 300 mg",
        "sourceComposition": "Pre Probiotic Blend 300 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "sourceNumber": "62",
        "sourceRecordId": "source-0062"
      }
    ],
    "sources": [
      {
        "recordId": "source-0062",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "number": "62"
      }
    ]
  },
  {
    "id": "p-3f0f46df1931",
    "name": "Prednisolone Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Prednisolone IP 5 mg Excipients q.s. Approvedcolourused",
    "ingredients": [
      "Prednisolone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Prednisolone Tablets IP 5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Prednisolone — 5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Prednisolone IP 5 mg Excipients q.s. Approvedcolourused",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "415",
        "sourceRecordId": "source-0511"
      }
    ],
    "sources": [
      {
        "recordId": "source-0511",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "415"
      }
    ]
  },
  {
    "id": "p-c6bd0668e2a2",
    "name": "Pregabalin & Methylcobalamin Capsules",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "75 mg + 750 mcg",
      "150 mg + 750 mcg",
      "75 mg + 500 mcg",
      "75 mg + 1500 mcg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Pregabalin IP 75 mg Methylcobalamin IP 750 mcg Excipients q.s. Approved Colour Usedincapsuleshells",
    "ingredients": [
      "Pregabalin",
      "Methylcobalamin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pregabalin &Methylcobalamin Capsules IP",
      "Pregabalin &Methylcobalamin Capsules",
      "Pregabalin 75 mg, Methylcobalamin 500 mcg",
      "Pregabalin 75 mg, Methylcobalamin 750 mcg",
      "Pregabalin 75 mg (as Sustained Release ) Methylcobalamin 1500 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Pregabalin — 75 mg; Methylcobalamin — 750 mcg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Pregabalin IP 75 mg Methylcobalamin IP 750 mcg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 47,
        "sourceNumber": "288",
        "sourceRecordId": "source-0384"
      },
      {
        "label": "Standard formulation",
        "composition": "Pregabalin — 150 mg; Methylcobalamin — 750 mcg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Pregabalin IP 150 mg Methylcobalamin IP 750 mcg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 47,
        "sourceNumber": "289",
        "sourceRecordId": "source-0385"
      },
      {
        "label": "Standard formulation",
        "composition": "Pregabalin — 75 mg; Methylcobalamin — 500 mcg",
        "sourceComposition": "Pregabalin 75 mg, Methylcobalamin 500 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "4",
        "sourceRecordId": "source-0771"
      },
      {
        "label": "Sustained release",
        "composition": "Pregabalin — 75 mg; Methylcobalamin — 1500 mcg",
        "sourceComposition": "Pregabalin 75 mg (as Sustained Release ) Methylcobalamin 1500 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "30",
        "sourceRecordId": "source-0797"
      }
    ],
    "sources": [
      {
        "recordId": "source-0384",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 47,
        "number": "288"
      },
      {
        "recordId": "source-0385",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 47,
        "number": "289"
      },
      {
        "recordId": "source-0771",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "4"
      },
      {
        "recordId": "source-0772",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "5"
      },
      {
        "recordId": "source-0797",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "30"
      }
    ]
  },
  {
    "id": "p-898ab7844a9b",
    "name": "Pregabalin & Methylcobalamin Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "75 mg + 1500 mcg",
      "150 mg + 1500 mcg",
      "75 mg + 750 mcg"
    ],
    "composition": "Each Uncoated Tablet Contains: Pregabalin (assustainedreleaseform) IP 75 mg Methylcobalamin IP 1500 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Pregabalin",
      "Methylcobalamin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pregabalin Sustained Release&Methylcobalamin Tablets",
      "Pregabalin (SR) &Methylcobalamin Tablets",
      "Pregabalin 75 mg, (as Sustained Release), Methylcobalamin 1500 mcg",
      "Pregabalin 75 mg (as Sustained Release ), Methylcobalamin 1500 mcg"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Pregabalin — 75 mg; Methylcobalamin — 1500 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Pregabalin (assustainedreleaseform) IP 75 mg Methylcobalamin IP 1500 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "sourceNumber": "202",
        "sourceRecordId": "source-0298"
      },
      {
        "label": "Sustained release",
        "composition": "Pregabalin — 150 mg; Methylcobalamin — 1500 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Pregabalin (assustainedreleaseform) IP 150 mg Methylcobalamin IP 1500 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "sourceNumber": "286",
        "sourceRecordId": "source-0382"
      },
      {
        "label": "Sustained release",
        "composition": "Pregabalin — 75 mg; Methylcobalamin — 750 mcg",
        "sourceComposition": "Each Film Coated Tablets Contains: Pregabalin (assustainedreleaseform) IP 75 mg Methylcobalamin IP 750 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "sourceNumber": "338",
        "sourceRecordId": "source-0434"
      }
    ],
    "sources": [
      {
        "recordId": "source-0298",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "number": "202"
      },
      {
        "recordId": "source-0382",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "number": "286"
      },
      {
        "recordId": "source-0434",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "number": "338"
      },
      {
        "recordId": "source-0812",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "10"
      },
      {
        "recordId": "source-0815",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "13"
      }
    ]
  },
  {
    "id": "p-8f2843012bef",
    "name": "Pregabalin & Nortriptyline Hydrochloride & Methylcobalamin Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "75 mg + 10 mg + 1500 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Pregabalin I.P. 75 mg Nortriptyline Hydrochloride Eqto Nortriptyline I.P. 10 mg Methylcobalamin I.P. 1500 mcg Excipients q.s. Approvedcolourused",
    "ingredients": [
      "Pregabalin",
      "Nortriptyline Hydrochloride",
      "Methylcobalamin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pregabalin,Nortriptyline&Methylcobalamin Tablets",
      "Pregabalin(Sustained Release), Nortriptyline & Methylcobalamin Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Pregabalin — 75 mg; Nortriptyline Hydrochloride — 10 mg; Methylcobalamin — 1500 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Pregabalin I.P. 75 mg Nortriptyline Hydrochloride Eqto Nortriptyline I.P. 10 mg Methylcobalamin I.P. 1500 mcg Excipients q.s. Approvedcolourused",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "sourceNumber": "117",
        "sourceRecordId": "source-0213"
      },
      {
        "label": "Sustained release",
        "composition": "Pregabalin — 75 mg; Nortriptyline Hydrochloride — 10 mg; Methylcobalamin — 1500 mcg",
        "sourceComposition": "Each Un Coated Bilayered Tablet Contains: Pregabalin (as Sustained Release Form) IP 75 mg Nortriptyline Hydrochloride Equivalentto Nortriptyline IP 10 mg Methylcobalamin IP 1500 mcg Excipients Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "sourceNumber": "340",
        "sourceRecordId": "source-0436"
      }
    ],
    "sources": [
      {
        "recordId": "source-0213",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "number": "117"
      },
      {
        "recordId": "source-0436",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "number": "340"
      }
    ]
  },
  {
    "id": "p-bd850e9f8822",
    "name": "Pregabalin & Nortriptyline Hydrochloride Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "75 mg + 10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Pregabalin I.P. 75 mg Nortriptyline Hydrochloride Equivalentto Nortriptyline I.P. 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Pregabalin",
      "Nortriptyline Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pregabalinand Nortriptyline Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Pregabalin — 75 mg; Nortriptyline Hydrochloride — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Pregabalin I.P. 75 mg Nortriptyline Hydrochloride Equivalentto Nortriptyline I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "sourceNumber": "77",
        "sourceRecordId": "source-0173"
      }
    ],
    "sources": [
      {
        "recordId": "source-0173",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "number": "77"
      }
    ]
  },
  {
    "id": "p-118c3ce2c379",
    "name": "Pregabalin Capsules",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [
      "150 mg",
      "300 mg",
      "75 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Pregabalin I.P. 150 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
    "ingredients": [
      "Pregabalin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pregabalin Capsules I.P. 150 mg",
      "Pregabalin Capsules I.P. 300 mg",
      "Pregabalin Capsules BP (For Export Only)",
      "Pregabalin 150 mg",
      "Pregabalin 75 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Pregabalin — 150 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Pregabalin I.P. 150 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "sourceNumber": "43",
        "sourceRecordId": "source-0139"
      },
      {
        "label": "Standard formulation",
        "composition": "Pregabalin — 300 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Pregabalin I.P. 300 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "sourceNumber": "44",
        "sourceRecordId": "source-0140"
      },
      {
        "label": "Standard formulation",
        "composition": "Pregabalin — 75 mg",
        "sourceComposition": "Pregabalin 75 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "27",
        "sourceRecordId": "source-0794"
      }
    ],
    "sources": [
      {
        "recordId": "source-0139",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "number": "43"
      },
      {
        "recordId": "source-0140",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "number": "44"
      },
      {
        "recordId": "source-0420",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "number": "324"
      },
      {
        "recordId": "source-0793",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "26"
      },
      {
        "recordId": "source-0794",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "27"
      }
    ]
  },
  {
    "id": "p-43541c22afab",
    "name": "Pregabalin Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "75 mg"
    ],
    "composition": "Each Film Coated Sustained Release Tablet Contains: Pregabalin IP 75 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Pregabalin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Pregabalin Sustained Release Tablets 75 mg"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Pregabalin — 75 mg",
        "sourceComposition": "Each Film Coated Sustained Release Tablet Contains: Pregabalin IP 75 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "sourceNumber": "344",
        "sourceRecordId": "source-0440"
      }
    ],
    "sources": [
      {
        "recordId": "source-0440",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "344"
      }
    ]
  },
  {
    "id": "p-40e1cf76d703",
    "name": "Pregabalin, Methylcobalamin, Alpha Lipoic Acid & Multinutrient Blend Capsules",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Pregabalin 75 mg, Methylcobalamin 750 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine H Cl 3 mg, Folic Acid 1.5 mg",
    "ingredients": [
      "Pregabalin",
      "Methylcobalamin",
      "Alpha Lipoic Acid",
      "Pyridoxine H Cl",
      "Folic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Pregabalin 75 mg, Methylcobalamin 750 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine H Cl 3 mg, Folic Acid 1.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Pregabalin — 75 mg; Methylcobalamin — 750 mcg; Alpha Lipoic Acid — 100 mg; Pyridoxine H Cl — 3 mg; Folic Acid — 1.5 mg",
        "sourceComposition": "Pregabalin 75 mg, Methylcobalamin 750 mcg, Alpha Lipoic Acid 100 mg, Pyridoxine H Cl 3 mg, Folic Acid 1.5 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "25",
        "sourceRecordId": "source-0792"
      }
    ],
    "sources": [
      {
        "recordId": "source-0792",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "25"
      }
    ]
  },
  {
    "id": "p-ec9e0a3d672f",
    "name": "Progesterone Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "100 mg",
      "200 mg",
      "300 mg",
      "400 mg"
    ],
    "composition": "Progesterone ( Micronised) 100 mg",
    "ingredients": [
      "Progesterone"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Progesterone ( Micronised) 100 mg",
      "Progesterone ( Micronised) 200 mg",
      "Progesterone ( Micronised) 300 mg",
      "Progesterone ( Micronised) 400 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Progesterone — 100 mg",
        "sourceComposition": "Progesterone ( Micronised) 100 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "2",
        "sourceRecordId": "source-0683"
      },
      {
        "label": "Standard formulation",
        "composition": "Progesterone — 200 mg",
        "sourceComposition": "Progesterone ( Micronised) 200 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "3",
        "sourceRecordId": "source-0684"
      },
      {
        "label": "Standard formulation",
        "composition": "Progesterone — 300 mg",
        "sourceComposition": "Progesterone ( Micronised) 300 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "4",
        "sourceRecordId": "source-0685"
      },
      {
        "label": "Standard formulation",
        "composition": "Progesterone — 400 mg",
        "sourceComposition": "Progesterone ( Micronised) 400 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "5",
        "sourceRecordId": "source-0686"
      }
    ],
    "sources": [
      {
        "recordId": "source-0683",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "2"
      },
      {
        "recordId": "source-0684",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "3"
      },
      {
        "recordId": "source-0685",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "4"
      },
      {
        "recordId": "source-0686",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "5"
      }
    ]
  },
  {
    "id": "p-37f4c750a291",
    "name": "Progesterone Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg",
      "200 mg",
      "300 mg",
      "400 mg"
    ],
    "composition": "Each Film Coated Sustained Release Tablet Contains: Progesterone (Natural Micronized) IP 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Progesterone"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Progesterone Sustained Release Tablets100 mg",
      "Progesterone Sustained Release Tablets200 mg",
      "Progesterone Sustained Release Tablets300 mg",
      "Progesterone Sustained Release Tablets400 mg"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Progesterone — 100 mg",
        "sourceComposition": "Each Film Coated Sustained Release Tablet Contains: Progesterone (Natural Micronized) IP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "sourceNumber": "1",
        "sourceRecordId": "source-0601"
      },
      {
        "label": "Sustained release",
        "composition": "Progesterone — 200 mg",
        "sourceComposition": "Each Film Coated Sustained Release Tablet Contains: Progesterone (Natural Micronized) I.P. 200 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "sourceNumber": "2",
        "sourceRecordId": "source-0602"
      },
      {
        "label": "Sustained release",
        "composition": "Progesterone — 300 mg",
        "sourceComposition": "Each Film Coated Sustained Release Tablet Contains: Progesterone (Natural Micronized) IP 300 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "sourceNumber": "3",
        "sourceRecordId": "source-0603"
      },
      {
        "label": "Sustained release",
        "composition": "Progesterone — 400 mg",
        "sourceComposition": "Each Film Coated Sustained Release Tablet Contains: Progesterone (Natural Micronized) I.P. 400 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "sourceNumber": "4",
        "sourceRecordId": "source-0604"
      }
    ],
    "sources": [
      {
        "recordId": "source-0601",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "number": "1"
      },
      {
        "recordId": "source-0602",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "number": "2"
      },
      {
        "recordId": "source-0603",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "number": "3"
      },
      {
        "recordId": "source-0604",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "number": "4"
      }
    ]
  },
  {
    "id": "p-996ebdd0d48e",
    "name": "Propranolol Hydrochloride & Flunarizine Dihydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 10 mg"
    ],
    "composition": "Each Un Coated Tablet Contains : Propranolol Hydrochloride (as Sustained Release Form) IP 40 mg Flunarizine Dihydrochloride Equivalent to Flunarizine IP 10 mg Excipients q.s",
    "ingredients": [
      "Propranolol Hydrochloride",
      "Flunarizine Dihydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Propranolol Hydrochloride Sustained Release & Flunarizine Dihydrochloride Tablets"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Propranolol Hydrochloride — 40 mg; Flunarizine Dihydrochloride — 10 mg",
        "sourceComposition": "Each Un Coated Tablet Contains : Propranolol Hydrochloride (as Sustained Release Form) IP 40 mg Flunarizine Dihydrochloride Equivalent to Flunarizine IP 10 mg Excipients q.s",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 82,
        "sourceNumber": "499",
        "sourceRecordId": "source-0595"
      }
    ],
    "sources": [
      {
        "recordId": "source-0595",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 82,
        "number": "499"
      }
    ]
  },
  {
    "id": "p-7183ac7c4580",
    "name": "Propranolol Hydrochloride Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "60 mg",
      "40 mg",
      "80 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Propranolol Hydrochloride (Asprolongedreleasepellets) IP 60 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
    "ingredients": [
      "Propranolol Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Propranolol Prolonged Release Capsules IP60 mg",
      "Propranolol Prolonged Release Capsules IP40mgmg",
      "Propranolol Prolonged Release Capsules IP 80 mg"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Propranolol Hydrochloride — 60 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Propranolol Hydrochloride (Asprolongedreleasepellets) IP 60 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "sourceNumber": "11",
        "sourceRecordId": "source-0107"
      },
      {
        "label": "Prolonged release",
        "composition": "Propranolol Hydrochloride — 40 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Propranolol Hydrochloride (Asprolongedreleasepellets) IP 40 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "sourceNumber": "12",
        "sourceRecordId": "source-0108"
      },
      {
        "label": "Prolonged release",
        "composition": "Propranolol Hydrochloride — 80 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Propranolol Hydrochloride (Asprolongedreleasepellets) IP 80 mg Excipients q.s. Approved Colour Usedin Capsule Shell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "sourceNumber": "14",
        "sourceRecordId": "source-0110"
      }
    ],
    "sources": [
      {
        "recordId": "source-0107",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "number": "11"
      },
      {
        "recordId": "source-0108",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "number": "12"
      },
      {
        "recordId": "source-0110",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "number": "14"
      }
    ]
  },
  {
    "id": "p-37c68c0ad226",
    "name": "Protein, Amino Acids & Probiotics Powder",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Protein Powder",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Protein 43.63 gm L-Leucine 7.22 gm L-Isoleucine 3.99 gm L-Valine 3.8 gm L-Methionine 0.736 gm L-Phenylalanine 1.196 gm L-Threonine 2.484 gm L-Tryptophan 0.644 gm L-Histidine 0.51 gm L-Alanine 2.11 gm L-Arginine 1.16 gm Asparticacid 4.46 gm Cysteine 0.89 gm L-Glutamicacid 7.3 gm Glycine 0.8 gm Proline 2.44 gm Serine 2.11 gm Tyrosin 1.26 gm L-Carnitine 0.05 gm Palatinose(Isomaltulose) 23.96 gm Calcium 386 mg Phosphorus 240 mg Magnesium 78 mg Vitamin D3 120I.U. Vitamin K18 mg Inositol 32 mg Sodium(Chloride) 314 mg Potassium(Chloride) 563 mg Chloride 488 mg Molybdenum 30 mcg Manganese 1 mg Chromium(Picolinate) 15 mcg Vitamin B1 0.9 mg Vitamin B2 1 mg Vitamin B3(Nicotinamide) 10 mg Calcium Pantothenate 4 mcg Biotin 130 mcg Vitamin B6 1 mg Vitamin A570 mcg Vitaminc 54 mg Vitamin E11 mg Zinc 6.5 mg Selenium 15 mcg Copper 410 mcg FOS 3.40 gm Linoic Acid 2.20 gm Ala 200 mg Vitamin B12 2.60 mcg Niacin 11 mg Folic Acid 240 mcg Iron 6.6 mg Iodine 42 mcg Choline 108 mg Taurine 23 mg DHA 90 mg Lactobacillus Acidophilus 1.6Cfu Bifidobacterium Lactis 1.6 Cfu Dietaryfiber 5.19 gm",
    "ingredients": [
      "Protein",
      "L-Leucine",
      "L-Isoleucine",
      "L-Valine",
      "L-Methionine",
      "L-Phenylalanine",
      "L-Threonine",
      "L-Tryptophan",
      "L-Histidine",
      "L-Alanine",
      "L-Arginine",
      "Asparticacid",
      "Cysteine",
      "L-Glutamicacid",
      "Glycine",
      "Proline",
      "Serine",
      "Tyrosin",
      "L-Carnitine",
      "Palatinose",
      "Calcium",
      "Phosphorus",
      "Magnesium",
      "Vitamin D3",
      "Vitamin K",
      "Inositol",
      "Sodium",
      "Potassium",
      "Chloride",
      "Molybdenum",
      "Manganese",
      "Chromium",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B3",
      "Calcium Pantothenate",
      "Biotin",
      "Vitamin B6",
      "Vitamin A",
      "Vitaminc",
      "Vitamin E",
      "Zinc",
      "Selenium",
      "Copper",
      "FOS",
      "Linoic Acid",
      "Ala",
      "Vitamin B12",
      "Niacin",
      "Folic Acid",
      "Iron",
      "Iodine",
      "Choline",
      "Taurine",
      "DHA",
      "Lactobacillus Acidophilus",
      "Bifidobacterium Lactis",
      "Dietaryfiber"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Protein 43.63 gm L-Leucine 7.22 gm L-Isoleucine 3.99 gm L-Valine 3.8 gm L-Methionine 0.736 gm L-Phenylalanine 1.196 gm L-Threonine 2.484 gm L-Tryptophan 0.644 gm L-Histidine 0.51 gm L-Alanine 2.11 gm L-Arginine 1.16 gm Asparticacid 4.46 gm Cysteine 0.89 gm L-Glutamicacid 7.3 gm Glycine 0.8 gm Proline 2.44 gm Serine 2.11 gm Tyrosin 1.26 gm L-Carnitine 0.05 gm Palatinose(Isomaltulose) 23.96 gm Calcium 386 mg Phosphorus 240 mg Magnesium 78 mg Vitamin D3 120I.U. Vitamin K18 mg Inositol 32 mg Sodium(Chloride) 314 mg Potassium(Chloride) 563 mg Chloride 488 mg Molybdenum 30 mcg Manganese 1 mg Chromium(Picolinate) 15 mcg Vitamin B1 0.9 mg Vitamin B2 1 mg Vitamin B3(Nicotinamide) 10 mg Calcium Pantothenate 4 mcg Biotin 130 mcg Vitamin B6 1 mg Vitamin A570 mcg Vitaminc 54 mg Vitamin E11 mg Zinc 6.5 mg Selenium 15 mcg Copper 410 mcg FOS 3.40 gm Linoic Acid 2.20 gm Ala 200 mg Vitamin B12 2.60 mcg Niacin 11 mg Folic Acid 240 mcg Iron 6.6 mg Iodine 42 mcg Choline 108 mg Taurine 23 mg DHA 90 mg Lactobacillus Acidophilus 1.6Cfu Bifidobacterium Lactis 1.6 Cfu Dietaryfiber 5.19 gm"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Protein — 43.63 gm; L-Leucine — 7.22 gm; L-Isoleucine — 3.99 gm; L-Valine — 3.8 gm; L-Methionine — 0.736 gm; L-Phenylalanine — 1.196 gm; L-Threonine — 2.484 gm; L-Tryptophan — 0.644 gm; L-Histidine — 0.51 gm; L-Alanine — 2.11 gm; L-Arginine — 1.16 gm; Asparticacid — 4.46 gm; Cysteine — 0.89 gm; L-Glutamicacid — 7.3 gm; Glycine — 0.8 gm; Proline — 2.44 gm; Serine — 2.11 gm; Tyrosin — 1.26 gm; L-Carnitine — 0.05 gm; Palatinose — 23.96 gm; Calcium — 386 mg; Phosphorus — 240 mg; Magnesium — 78 mg; Vitamin D3 — 120I.U; Vitamin K — 18 mg; Inositol — 32 mg; Sodium — 314 mg; Potassium — 563 mg; Chloride — 488 mg; Molybdenum — 30 mcg; Manganese — 1 mg; Chromium — 15 mcg; Vitamin B1 — 0.9 mg; Vitamin B2 — 1 mg; Vitamin B3 — 10 mg; Calcium Pantothenate — 4 mcg; Biotin — 130 mcg; Vitamin B6 — 1 mg; Vitamin A — 570 mcg; Vitaminc — 54 mg; Vitamin E — 11 mg; Zinc — 6.5 mg; Selenium — 15 mcg; Copper — 410 mcg; FOS — 3.40 gm; Linoic Acid — 2.20 gm; Ala — 200 mg; Vitamin B12 — 2.60 mcg; Niacin — 11 mg; Folic Acid — 240 mcg; Iron — 6.6 mg; Iodine — 42 mcg; Choline — 108 mg; Taurine — 23 mg; DHA — 90 mg; Lactobacillus Acidophilus — 1.6Cfu; Bifidobacterium Lactis — 1.6 Cfu; Dietaryfiber — 5.19 gm",
        "sourceComposition": "Protein 43.63 gm L-Leucine 7.22 gm L-Isoleucine 3.99 gm L-Valine 3.8 gm L-Methionine 0.736 gm L-Phenylalanine 1.196 gm L-Threonine 2.484 gm L-Tryptophan 0.644 gm L-Histidine 0.51 gm L-Alanine 2.11 gm L-Arginine 1.16 gm Asparticacid 4.46 gm Cysteine 0.89 gm L-Glutamicacid 7.3 gm Glycine 0.8 gm Proline 2.44 gm Serine 2.11 gm Tyrosin 1.26 gm L-Carnitine 0.05 gm Palatinose(Isomaltulose) 23.96 gm Calcium 386 mg Phosphorus 240 mg Magnesium 78 mg Vitamin D3 120I.U. Vitamin K18 mg Inositol 32 mg Sodium(Chloride) 314 mg Potassium(Chloride) 563 mg Chloride 488 mg Molybdenum 30 mcg Manganese 1 mg Chromium(Picolinate) 15 mcg Vitamin B1 0.9 mg Vitamin B2 1 mg Vitamin B3(Nicotinamide) 10 mg Calcium Pantothenate 4 mcg Biotin 130 mcg Vitamin B6 1 mg Vitamin A570 mcg Vitaminc 54 mg Vitamin E11 mg Zinc 6.5 mg Selenium 15 mcg Copper 410 mcg FOS 3.40 gm Linoic Acid 2.20 gm Ala 200 mg Vitamin B12 2.60 mcg Niacin 11 mg Folic Acid 240 mcg Iron 6.6 mg Iodine 42 mcg Choline 108 mg Taurine 23 mg DHA 90 mg Lactobacillus Acidophilus 1.6Cfu Bifidobacterium Lactis 1.6 Cfu Dietaryfiber 5.19 gm",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 17,
        "sourceNumber": "2",
        "sourceRecordId": "source-0093"
      }
    ],
    "sources": [
      {
        "recordId": "source-0093",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 17,
        "number": "2"
      }
    ]
  },
  {
    "id": "p-4744e1ec8375",
    "name": "Quatrefolic & Cyanocobalamin & Pyridoxal 5-Phosphate & L-Glycine Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "570 mcg + 2.45 mcg + 2.3 mg + 10 mg",
      "570 mcg + 2.45 mcg + 2.30 mg + 10 mg"
    ],
    "composition": "Quatrefolic 570 mcg Cyanocobalamin 2.45 mcg Pyridoxal 5-Phosphate 2.3 mg L-Glycine 10 mg",
    "ingredients": [
      "Quatrefolic",
      "Cyanocobalamin",
      "Pyridoxal 5-Phosphate",
      "L-Glycine"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Quatrefolic 570 mcg Cyanocobalamin 2.45 mcg Pyridoxal 5-Phosphate 2.3 mg L-Glycine 10 mg",
      "Quatrefolic 570 mcg Cyanocobalamin 2.45 mcg Pyridoxal 5-Phosphate 2.30 mg L-Glycine 10 mg",
      "Quatre Folic Acid 570 mcg Cyanocobalamin 2.45 mcg Pyridoxal 5-Phosphate 2.3 mg L-Glycine 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Quatrefolic — 570 mcg; Cyanocobalamin — 2.45 mcg; Pyridoxal 5-Phosphate — 2.3 mg; L-Glycine — 10 mg",
        "sourceComposition": "Quatrefolic 570 mcg Cyanocobalamin 2.45 mcg Pyridoxal 5-Phosphate 2.3 mg L-Glycine 10 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "sourceNumber": "26",
        "sourceRecordId": "source-0026"
      },
      {
        "label": "Standard formulation",
        "composition": "Quatrefolic — 570 mcg; Cyanocobalamin — 2.45 mcg; Pyridoxal 5-Phosphate — 2.30 mg; L-Glycine — 10 mg",
        "sourceComposition": "Quatrefolic 570 mcg Cyanocobalamin 2.45 mcg Pyridoxal 5-Phosphate 2.30 mg L-Glycine 10 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "sourceNumber": "50",
        "sourceRecordId": "source-0050"
      }
    ],
    "sources": [
      {
        "recordId": "source-0026",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 4,
        "number": "26"
      },
      {
        "recordId": "source-0050",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "number": "50"
      },
      {
        "recordId": "source-0059",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "number": "59"
      },
      {
        "recordId": "source-0089",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 15,
        "number": "89"
      }
    ]
  },
  {
    "id": "p-353b6169732d",
    "name": "Quatrefolic & Cyanocobalamin & Vitamin B6 Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [
      "500 mcg + 1.2 mcg + 2.3 mg"
    ],
    "composition": "Quatrefolic 500 mcg Cyanocobalamin 1.2 mcg Vitamin B6 2.3 mg",
    "ingredients": [
      "Quatrefolic",
      "Cyanocobalamin",
      "Vitamin B6"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Quatrefolic 500 mcg Cyanocobalamin 1.2 mcg Vitamin B6 2.3 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Quatrefolic — 500 mcg; Cyanocobalamin — 1.2 mcg; Vitamin B6 — 2.3 mg",
        "sourceComposition": "Quatrefolic 500 mcg Cyanocobalamin 1.2 mcg Vitamin B6 2.3 mg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "sourceNumber": "74",
        "sourceRecordId": "source-0074"
      }
    ],
    "sources": [
      {
        "recordId": "source-0074",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "number": "74"
      }
    ]
  },
  {
    "id": "p-d00bb73daf5f",
    "name": "Quatrefolic, Cyanocobalamin, Pyridoxal 5-Phosphate & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Quatre Folic Acid 570 mcg Cyanocobalamin 2.5 mcg Pyridoxal 5-Phosphate 2.30 mg L-Glycine 10 mg Vitamin D3 Stabilized 600 iu",
    "ingredients": [
      "Quatrefolic",
      "Cyanocobalamin",
      "Pyridoxal 5-Phosphate",
      "L-Glycine",
      "Vitamin D3 Stabilized"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Quatre Folic Acid 570 mcg Cyanocobalamin 2.5 mcg Pyridoxal 5-Phosphate 2.30 mg L-Glycine 10 mg Vitamin D3 Stabilized 600 iu",
      "Quatrefolic 570 mcg Cyanocobalamin 2.50 mcg Pyridoxal 5-Phosphate 2.30 mg L-Glycine 10 mg Vitamin D3 Stabilized 600 iu",
      "Quatrefolic5 70 mcg Cyanocobalamin 2.50 mcg Pyridoxal 5-Phosphate 2.3 mg L-Glycine 10 mg Vitamin D3 Stabilized 600 iu"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Quatrefolic — 570 mcg; Cyanocobalamin — 2.5 mcg; Pyridoxal 5-Phosphate — 2.30 mg; L-Glycine — 10 mg; Vitamin D3 Stabilized — 600 iu",
        "sourceComposition": "Quatre Folic Acid 570 mcg Cyanocobalamin 2.5 mcg Pyridoxal 5-Phosphate 2.30 mg L-Glycine 10 mg Vitamin D3 Stabilized 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "sourceNumber": "49",
        "sourceRecordId": "source-0049"
      },
      {
        "label": "Standard formulation",
        "composition": "Quatrefolic — 570 mcg; Cyanocobalamin — 2.50 mcg; Pyridoxal 5-Phosphate — 2.30 mg; L-Glycine — 10 mg; Vitamin D3 Stabilized — 600 iu",
        "sourceComposition": "Quatrefolic 570 mcg Cyanocobalamin 2.50 mcg Pyridoxal 5-Phosphate 2.30 mg L-Glycine 10 mg Vitamin D3 Stabilized 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "sourceNumber": "60",
        "sourceRecordId": "source-0060"
      },
      {
        "label": "Standard formulation",
        "composition": "Quatrefolic — 70 mcg; Cyanocobalamin — 2.50 mcg; Pyridoxal 5-Phosphate — 2.3 mg; L-Glycine — 10 mg; Vitamin D3 Stabilized — 600 iu",
        "sourceComposition": "Quatrefolic5 70 mcg Cyanocobalamin 2.50 mcg Pyridoxal 5-Phosphate 2.3 mg L-Glycine 10 mg Vitamin D3 Stabilized 600 iu",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "sourceNumber": "65",
        "sourceRecordId": "source-0065"
      }
    ],
    "sources": [
      {
        "recordId": "source-0049",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 9,
        "number": "49"
      },
      {
        "recordId": "source-0060",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 11,
        "number": "60"
      },
      {
        "recordId": "source-0065",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 12,
        "number": "65"
      },
      {
        "recordId": "source-0071",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 13,
        "number": "71"
      }
    ]
  },
  {
    "id": "p-8235581ed7ad",
    "name": "Quetiapine Fumarate Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Each Film Coated Prolonged Release Tablet Contains:: Quetiapine Fumarate Equivalentto Quetiapine IP 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Quetiapine Fumarate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Quetiapine Prolonged Release Tablets IP100 mg"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Quetiapine Fumarate — 100 mg",
        "sourceComposition": "Each Film Coated Prolonged Release Tablet Contains:: Quetiapine Fumarate Equivalentto Quetiapine IP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "sourceNumber": "19",
        "sourceRecordId": "source-0115"
      }
    ],
    "sources": [
      {
        "recordId": "source-0115",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "number": "19"
      }
    ]
  },
  {
    "id": "p-f6367115a8c0",
    "name": "Rabeprazole Sodium & Domperidone Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg + 30 mg",
      "40 mg + 30 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Rabeprazole Sodium (Asgastro-Resistantpellets) IP 20 mg Domperidone (Asprolongedreleasepellets) IP 30 mg Excipients q.s. Approved Colour Usedcapsuleshells",
    "ingredients": [
      "Rabeprazole Sodium",
      "Domperidone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rabeprazole Sodium Gastro-Resistant &Domperidone Prolonged Release Capsules",
      "Rabeprazole Sodium 40 mg Enteric Coated&Domperidone30 mg Sustained Release Capsules",
      "Rabeprazole Sodium(Enteric Coated) & Domperidone (Sustained Release)Capsules",
      "Rabeprazole Sodium 20 mg, (As Enteric Coated Pellets), Domperidone 30 mg (As Sustained Release Pellets)"
    ],
    "variants": [
      {
        "label": "Prolonged release, Gastro-resistant",
        "composition": "Rabeprazole Sodium — 20 mg; Domperidone — 30 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rabeprazole Sodium (Asgastro-Resistantpellets) IP 20 mg Domperidone (Asprolongedreleasepellets) IP 30 mg Excipients q.s. Approved Colour Usedcapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "sourceNumber": "198",
        "sourceRecordId": "source-0294"
      },
      {
        "label": "Sustained release, Enteric coated",
        "composition": "Rabeprazole Sodium — 40 mg; Domperidone — 30 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rabeprazole Sodium (asentericcoatedpellets) I 40 mg Domperidone (Assustainedreleasepellets) I 30 mg Excipients q.s. Approved Colour Usedinemptyhardgelatincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "sourceNumber": "371",
        "sourceRecordId": "source-0467"
      },
      {
        "label": "Sustained release, Enteric coated",
        "composition": "Rabeprazole Sodium — 20 mg; Domperidone — 30 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rabeprazole Sodium (asentericcoatedpellets) IP 20 mg Domperidone (Assustainedreleasepellets) IP 30 mg Excipients q.s. Approved Colour Usedinemptyhardgelatincapsuleshellsandin Pellets",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "sourceNumber": "403",
        "sourceRecordId": "source-0499"
      }
    ],
    "sources": [
      {
        "recordId": "source-0294",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "number": "198"
      },
      {
        "recordId": "source-0467",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "number": "371"
      },
      {
        "recordId": "source-0499",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 65,
        "number": "403"
      },
      {
        "recordId": "source-0786",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "19"
      }
    ]
  },
  {
    "id": "p-3bd13e6c443f",
    "name": "Rabeprazole Sodium & Itopride Hydrochloride Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg + 150 mg"
    ],
    "composition": "Each Hard Gelatin Capsules Contains: Rabeprazole Sodium (asentericcoatedpellets) IP 20 mg Itopride Hydrochloride (Assustainedreleasepellets) 150 mg Excipients q.s Approved Colour Usedinemptycapsulesshell&inpellets",
    "ingredients": [
      "Rabeprazole Sodium",
      "Itopride Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rabeprazole Sodium (Enteric Coated)&Itopride Hydrochloride(Sustained Release )Capsules",
      "Rabeprazole Sodium 20 mg, (as Enteric Coated Pellets), Itopride Hydrochloride 150 mg (as sustain Release Pellets)"
    ],
    "variants": [
      {
        "label": "Sustained release, Enteric coated",
        "composition": "Rabeprazole Sodium — 20 mg; Itopride Hydrochloride — 150 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains: Rabeprazole Sodium (asentericcoatedpellets) IP 20 mg Itopride Hydrochloride (Assustainedreleasepellets) 150 mg Excipients q.s Approved Colour Usedinemptycapsulesshell&inpellets",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 71,
        "sourceNumber": "445",
        "sourceRecordId": "source-0541"
      },
      {
        "label": "Enteric coated",
        "composition": "Rabeprazole Sodium — 20 mg; Itopride Hydrochloride — 150 mg",
        "sourceComposition": "Rabeprazole Sodium 20 mg, (as Enteric Coated Pellets), Itopride Hydrochloride 150 mg (as sustain Release Pellets)",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "2",
        "sourceRecordId": "source-0769"
      }
    ],
    "sources": [
      {
        "recordId": "source-0541",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 71,
        "number": "445"
      },
      {
        "recordId": "source-0769",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "2"
      }
    ]
  },
  {
    "id": "p-f4df5cb27116",
    "name": "Rabeprazole Sodium & Levosulpiride Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg + 75 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Rabeprazole Sodium (as Gastro-Resistantpellets) IP 20 mg Levosulpiride (Asprolongedreleasepellets) IP 75 mg Excipients q.s. Approved Colour Usedincapsuleshells",
    "ingredients": [
      "Rabeprazole Sodium",
      "Levosulpiride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rabeprazole Sodium Gastro-Resistant &Levosulpiride Prolonged Release Capsules",
      "Rabeprazole Sodium 20 mg (as Enteric Coated Pellets), Levosulpiride 75 mg (as sustain Release Pellets)"
    ],
    "variants": [
      {
        "label": "Prolonged release, Gastro-resistant",
        "composition": "Rabeprazole Sodium — 20 mg; Levosulpiride — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rabeprazole Sodium (as Gastro-Resistantpellets) IP 20 mg Levosulpiride (Asprolongedreleasepellets) IP 75 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "sourceNumber": "199",
        "sourceRecordId": "source-0295"
      },
      {
        "label": "Enteric coated",
        "composition": "Rabeprazole Sodium — 20 mg; Levosulpiride — 75 mg",
        "sourceComposition": "Rabeprazole Sodium 20 mg (as Enteric Coated Pellets), Levosulpiride 75 mg (as sustain Release Pellets)",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "1",
        "sourceRecordId": "source-0768"
      }
    ],
    "sources": [
      {
        "recordId": "source-0295",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "number": "199"
      },
      {
        "recordId": "source-0768",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "1"
      }
    ]
  },
  {
    "id": "p-adb811cd0829",
    "name": "Rabeprazole Sodium Capsules",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg"
    ],
    "composition": "Each Hard Gelatin Capsules Contains : Rabeprazole Sodium (as Enteric Coated Pellets IP 20 mg Excipients q.s Approved Colour Used in Hard gelatin Capsules shells and in Pellets",
    "ingredients": [
      "Rabeprazole Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rabeprazole Sodium Enteric Coated Capsules"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Rabeprazole Sodium — 20 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains : Rabeprazole Sodium (as Enteric Coated Pellets IP 20 mg Excipients q.s Approved Colour Used in Hard gelatin Capsules shells and in Pellets",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 82,
        "sourceNumber": "502",
        "sourceRecordId": "source-0598"
      }
    ],
    "sources": [
      {
        "recordId": "source-0598",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 82,
        "number": "502"
      }
    ]
  },
  {
    "id": "p-ddab53771f5b",
    "name": "Rabeprazole Sodium Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains: Rabeprazole Sodium IP 20 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Rabeprazole Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rabeprazole Sodium Gastro-Resistant Tablets IP 20 mg"
    ],
    "variants": [
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Rabeprazole Sodium — 20 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Rabeprazole Sodium IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "sourceNumber": "161",
        "sourceRecordId": "source-0257"
      }
    ],
    "sources": [
      {
        "recordId": "source-0257",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "number": "161"
      }
    ]
  },
  {
    "id": "p-fe05218c40d5",
    "name": "Rifaximin Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "550 mg",
      "200 mg",
      "400 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Rifaximin BP 550 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Rifaximin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rifaximin Tablets550 mg",
      "Rifaximin Tablets IP200 mg",
      "Rifaximin Tablets IP400 mg",
      "Rifaximin Tablets IP200 mg(For Export Only)",
      "Rifaximin Tablets IP400 mg(For Export Only)"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Rifaximin — 550 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rifaximin BP 550 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "sourceNumber": "381",
        "sourceRecordId": "source-0477"
      },
      {
        "label": "Standard formulation",
        "composition": "Rifaximin — 200 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rifaximin IP 200 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "sourceNumber": "386",
        "sourceRecordId": "source-0482"
      },
      {
        "label": "Standard formulation",
        "composition": "Rifaximin — 400 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rifaximin IP 400 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "sourceNumber": "387",
        "sourceRecordId": "source-0483"
      }
    ],
    "sources": [
      {
        "recordId": "source-0477",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 61,
        "number": "381"
      },
      {
        "recordId": "source-0482",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "number": "386"
      },
      {
        "recordId": "source-0483",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "number": "387"
      },
      {
        "recordId": "source-0487",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 63,
        "number": "391"
      },
      {
        "recordId": "source-0488",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 63,
        "number": "392"
      }
    ]
  },
  {
    "id": "p-4d830a616b99",
    "name": "Rosehip Extract, Chondroitin Sulphate, Collagen Peptide & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Rosehip Extract 250 mg, Chondroitin Sulphate 200 mg, Collagen Peptide 40 mg, Vitamin C 40 mg, Sodium Hyaluronate 30 mg",
    "ingredients": [
      "Rosehip Extract",
      "Chondroitin Sulphate",
      "Collagen Peptide",
      "Vitamin C",
      "Sodium Hyaluronate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Rosehip Extract 250 mg, Chondroitin Sulphate 200 mg, Collagen Peptide 40 mg, Vitamin C 40 mg, Sodium Hyaluronate 30 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Rosehip Extract — 250 mg; Chondroitin Sulphate — 200 mg; Collagen Peptide — 40 mg; Vitamin C — 40 mg; Sodium Hyaluronate — 30 mg",
        "sourceComposition": "Rosehip Extract 250 mg, Chondroitin Sulphate 200 mg, Collagen Peptide 40 mg, Vitamin C 40 mg, Sodium Hyaluronate 30 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "18",
        "sourceRecordId": "source-0750"
      }
    ],
    "sources": [
      {
        "recordId": "source-0750",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "18"
      }
    ]
  },
  {
    "id": "p-264469165d48",
    "name": "Rosuvastatin Calcium & Aspirin & Clopidogrel Bisulphate Capsules",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg + 75 mg + 75 mg"
    ],
    "composition": "Each Hard Gelatin Capsules Contains : Rosuvastatin Calcium Equivalent toelemental Rosvastin (as Pellets) IP 20 mg Aspirin (as Enteric Coated Pellets) IP 75 mg Clopidogrel Bisulphate Equivalent to Clopidogrel (as Pellets) IP 75 mg Approved Colour Used in empty Capsules shells and in Pellets",
    "ingredients": [
      "Rosuvastatin Calcium",
      "Aspirin",
      "Clopidogrel Bisulphate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rosuvastatin, Aspirinand Clopidogrel Capsules"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Rosuvastatin Calcium — 20 mg; Aspirin — 75 mg; Clopidogrel Bisulphate — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains : Rosuvastatin Calcium Equivalent toelemental Rosvastin (as Pellets) IP 20 mg Aspirin (as Enteric Coated Pellets) IP 75 mg Clopidogrel Bisulphate Equivalent to Clopidogrel (as Pellets) IP 75 mg Approved Colour Used in empty Capsules shells and in Pellets",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "sourceNumber": "481",
        "sourceRecordId": "source-0577"
      }
    ],
    "sources": [
      {
        "recordId": "source-0577",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 78,
        "number": "481"
      }
    ]
  },
  {
    "id": "p-0afe46cb74ca",
    "name": "Rosuvastatin Calcium & Aspirin Capsules",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 75 mg",
      "10 mg + 150 mg",
      "20 mg + 75 mg",
      "20 mg + 150 mg",
      "5 mg + 75 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin (as Granules) IP 10 mg Aspirin (Asentericcoatedtablets) IP 75 mg Excipients q.s. Approved Colour Usedincapsuleshells",
    "ingredients": [
      "Rosuvastatin Calcium",
      "Aspirin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rosuvastatin&Aspirin Capsules",
      "Aspirin Gastro- Resistant&Rosuvastatin Capsules I P"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Rosuvastatin Calcium — 10 mg; Aspirin — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin (as Granules) IP 10 mg Aspirin (Asentericcoatedtablets) IP 75 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 27,
        "sourceNumber": "169",
        "sourceRecordId": "source-0265"
      },
      {
        "label": "Enteric coated",
        "composition": "Rosuvastatin Calcium — 10 mg; Aspirin — 150 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin(as Granules) IP 10 mg Aspirin (Asentericcoatedtablets) IP 150 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 27,
        "sourceNumber": "170",
        "sourceRecordId": "source-0266"
      },
      {
        "label": "Enteric coated",
        "composition": "Rosuvastatin Calcium — 20 mg; Aspirin — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin(as Granules) IP 20 mg Aspirin (Asentericcoatedtablets) IP 75 mg Excipients q.s. Approved Colour Usedincapsuleshell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "sourceNumber": "171",
        "sourceRecordId": "source-0267"
      },
      {
        "label": "Enteric coated",
        "composition": "Rosuvastatin Calcium — 20 mg; Aspirin — 150 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin (as Granules) IP 20 mg Aspirin (Asentericcoatedtablets) IP 150 mg Excipients q.s. Approved Colour Usedincapsuleshell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "sourceNumber": "172",
        "sourceRecordId": "source-0268"
      },
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Rosuvastatin Calcium — 5 mg; Aspirin — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin (as Granules) IP 5 mg Aspirin (Asentericcoatedtablet) IP 75 mg Excipients q.s. oved Colour Usedinemptyhardgelatincapsuleshellsandtablet",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "sourceNumber": "356",
        "sourceRecordId": "source-0452"
      },
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Rosuvastatin Calcium — 10 mg; Aspirin — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin (as Granules) IP 10 mg Aspirin (Asentericcoatedtablet) IP 75 mg Excipients q.s. Approved Colour Usedinemptyhardgelatincapsuleshells andtablet",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "sourceNumber": "357",
        "sourceRecordId": "source-0453"
      },
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Rosuvastatin Calcium — 10 mg; Aspirin — 150 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin(as Granules) IP 10 mg Aspirin (Asentericcoatedtablet) IP 150 mg Excipients q.s. Approved Colour Usedinemptyhardgelatincapsuleshells andtablet",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "sourceNumber": "358",
        "sourceRecordId": "source-0454"
      },
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Rosuvastatin Calcium — 20 mg; Aspirin — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin(as Granules) IP 20 mg Aspirin (Asentericcoatedtablet) IP 75 mg Excipients q.s. Approved Colour Usedinemptyhardgelatincapsuleshells andtablet",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "sourceNumber": "359",
        "sourceRecordId": "source-0455"
      },
      {
        "label": "Enteric coated, Gastro-resistant",
        "composition": "Rosuvastatin Calcium — 20 mg; Aspirin — 150 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin(as Granules) IP 20 mg Aspirin (Asentericcoatedtablet) IP 150 mg Excipients q.s. Approved Colour Usedinemptyhardgelatincapsuleshellsand Tablet",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "sourceNumber": "360",
        "sourceRecordId": "source-0456"
      }
    ],
    "sources": [
      {
        "recordId": "source-0265",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 27,
        "number": "169"
      },
      {
        "recordId": "source-0266",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 27,
        "number": "170"
      },
      {
        "recordId": "source-0267",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "number": "171"
      },
      {
        "recordId": "source-0268",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 28,
        "number": "172"
      },
      {
        "recordId": "source-0452",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "number": "356"
      },
      {
        "recordId": "source-0453",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "number": "357"
      },
      {
        "recordId": "source-0454",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "number": "358"
      },
      {
        "recordId": "source-0455",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "number": "359"
      },
      {
        "recordId": "source-0456",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "number": "360"
      }
    ]
  },
  {
    "id": "p-159afa69906f",
    "name": "Rosuvastatin Calcium & Clopidogrel Bisulphate & Aspirin Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 75 mg + 75 mg"
    ],
    "composition": "Each Hard Gelatin Capsules Contains Rosuvastatin Calcium Equivalentto Rosuvastatin(Aspellets) IP 10 mg Clopidogrel Bisulphate Equivalentto Clopidogrel (Aspellets) IP 75 mg Aspirin (as Enteric Coated Pellets) IP 75 mg Excipients q.s. Approved Colour Usedin Empty Capsule Shell.",
    "ingredients": [
      "Rosuvastatin Calcium",
      "Clopidogrel Bisulphate",
      "Aspirin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rosuvastatin,Clopidogrel&Aspirin (Enteric Coated)"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Rosuvastatin Calcium — 10 mg; Clopidogrel Bisulphate — 75 mg; Aspirin — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsules Contains Rosuvastatin Calcium Equivalentto Rosuvastatin(Aspellets) IP 10 mg Clopidogrel Bisulphate Equivalentto Clopidogrel (Aspellets) IP 75 mg Aspirin (as Enteric Coated Pellets) IP 75 mg Excipients q.s. Approved Colour Usedin Empty Capsule Shell.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "sourceNumber": "341",
        "sourceRecordId": "source-0437"
      }
    ],
    "sources": [
      {
        "recordId": "source-0437",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 55,
        "number": "341"
      }
    ]
  },
  {
    "id": "p-16e372ec82dc",
    "name": "Rosuvastatin Calcium & Clopidogrel Bisulphate Capsules",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 75 mg",
      "20 mg + 75 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin(Aspellets) IP 10 mg Clopidogrel Bisulphate Equivalentto Clopidogrel (Aspellets) IP 75 mg Excipients q.s. Approved Colour Usedinemptyhardgelatincapsuleshellsandin Pellets",
    "ingredients": [
      "Rosuvastatin Calcium",
      "Clopidogrel Bisulphate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rosuvastatin&Clopidogrel Capsules"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 10 mg; Clopidogrel Bisulphate — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin(Aspellets) IP 10 mg Clopidogrel Bisulphate Equivalentto Clopidogrel (Aspellets) IP 75 mg Excipients q.s. Approved Colour Usedinemptyhardgelatincapsuleshellsandin Pellets",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "sourceNumber": "372",
        "sourceRecordId": "source-0468"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 20 mg; Clopidogrel Bisulphate — 75 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin (as Pellets) IP 20 mg Clopidogrel Bisulphate Equivalentto Clopidogrel(Aspellets) IP 75 mg Excipients q.s. Approved Colour Usedinemptyhardgelatincapsuleshellsandin Pellets",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "sourceNumber": "373",
        "sourceRecordId": "source-0469"
      }
    ],
    "sources": [
      {
        "recordId": "source-0468",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "number": "372"
      },
      {
        "recordId": "source-0469",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 60,
        "number": "373"
      }
    ]
  },
  {
    "id": "p-c11c238f06dd",
    "name": "Rosuvastatin Calcium & Ezetimibe Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg + 10 mg",
      "20 mg + 10 mg",
      "40 mg + 10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 5 mg Ezetimibe IP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Rosuvastatin Calcium",
      "Ezetimibe"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rosuvastatin&Ezetimibe Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 5 mg; Ezetimibe — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 5 mg Ezetimibe IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 73,
        "sourceNumber": "452",
        "sourceRecordId": "source-0548"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 20 mg; Ezetimibe — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 20 mg Ezetimibe IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 73,
        "sourceNumber": "453",
        "sourceRecordId": "source-0549"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 40 mg; Ezetimibe — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 40 mg Ezetimibe IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 73,
        "sourceNumber": "454",
        "sourceRecordId": "source-0550"
      }
    ],
    "sources": [
      {
        "recordId": "source-0548",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 73,
        "number": "452"
      },
      {
        "recordId": "source-0549",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 73,
        "number": "453"
      },
      {
        "recordId": "source-0550",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 73,
        "number": "454"
      }
    ]
  },
  {
    "id": "p-b82b4406b281",
    "name": "Rosuvastatin Calcium & Fenofibrate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 160 mg",
      "10 mg + 145 mg",
      "20 mg + 145 mg",
      "20 mg + 160 mg",
      "5 mg + 160 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 10 mg Fenofibrate IP 160 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Rosuvastatin Calcium",
      "Fenofibrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rosuvastatin&Fenofibrate Tablets IP",
      "Rosuvastatin&Fenofibrate Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 10 mg; Fenofibrate — 160 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 10 mg Fenofibrate IP 160 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "sourceNumber": "156",
        "sourceRecordId": "source-0252"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 10 mg; Fenofibrate — 145 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 10 mg Fenofibrate IP 145 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "sourceNumber": "196",
        "sourceRecordId": "source-0292"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 20 mg; Fenofibrate — 145 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 20 mg Fenofibrate IP 145 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "sourceNumber": "197",
        "sourceRecordId": "source-0293"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 20 mg; Fenofibrate — 160 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 20 mg Fenofibrate IP 160 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "sourceNumber": "428",
        "sourceRecordId": "source-0524"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 5 mg; Fenofibrate — 160 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 5 mg Fenofibrate IP 160 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "sourceNumber": "431",
        "sourceRecordId": "source-0527"
      }
    ],
    "sources": [
      {
        "recordId": "source-0252",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 25,
        "number": "156"
      },
      {
        "recordId": "source-0292",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "number": "196"
      },
      {
        "recordId": "source-0293",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "number": "197"
      },
      {
        "recordId": "source-0524",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "number": "428"
      },
      {
        "recordId": "source-0527",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 69,
        "number": "431"
      }
    ]
  },
  {
    "id": "p-f8f641871bd4",
    "name": "Rosuvastatin Calcium Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "40 mg",
      "10 mg",
      "20 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Rosuvastatin Calcium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Rosuvastatin Tablets IP5 mg",
      "Rosuvastatin Tablets IP 40 mg",
      "Rosuvastatin Tablets IP 10 mg",
      "Rosuvastatin Tablets IP 20 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "sourceNumber": "154",
        "sourceRecordId": "source-0250"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 40 mg",
        "sourceComposition": "Each Filmcoated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "sourceNumber": "155",
        "sourceRecordId": "source-0251"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Rosuvastatin Calcium Equivalentto Rosuvastatin IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "sourceNumber": "163",
        "sourceRecordId": "source-0259"
      },
      {
        "label": "Standard formulation",
        "composition": "Rosuvastatin Calcium — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains Rosuvastatin Calcium Equivalentto Rosuvastatin IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "sourceNumber": "164",
        "sourceRecordId": "source-0260"
      }
    ],
    "sources": [
      {
        "recordId": "source-0250",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "number": "154"
      },
      {
        "recordId": "source-0251",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 24,
        "number": "155"
      },
      {
        "recordId": "source-0259",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "number": "163"
      },
      {
        "recordId": "source-0260",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "number": "164"
      }
    ]
  },
  {
    "id": "p-ade10be8e39b",
    "name": "Roxithromycin Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Roxithromycin IP 150 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Roxithromycin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Roxithromycin Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Roxithromycin — 150 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Roxithromycin IP 150 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "sourceNumber": "323",
        "sourceRecordId": "source-0419"
      }
    ],
    "sources": [
      {
        "recordId": "source-0419",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "number": "323"
      }
    ]
  },
  {
    "id": "p-59997df5a3cf",
    "name": "Sertraline Hydrochloride Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg",
      "50 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Sertraline Hydrochloride Equivalentto Sertraline IP 25 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Sertraline Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Sertraline Tablets IP25 mg",
      "Sertraline Tablets IP50 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Sertraline Hydrochloride — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sertraline Hydrochloride Equivalentto Sertraline IP 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "sourceNumber": "09",
        "sourceRecordId": "source-0105"
      },
      {
        "label": "Standard formulation",
        "composition": "Sertraline Hydrochloride — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sertraline Hydrochloride Equivalentto Sertraline IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "sourceNumber": "10",
        "sourceRecordId": "source-0106"
      }
    ],
    "sources": [
      {
        "recordId": "source-0105",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "number": "09"
      },
      {
        "recordId": "source-0106",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 2,
        "number": "10"
      }
    ]
  },
  {
    "id": "p-438b09f23e85",
    "name": "Sevelamer Carbonate Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "800 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Sevelamer Carbonate 800 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Sevelamer Carbonate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Sevel800 (Sevelamer Carbonate Tablets 800 mg) 3x10Tablets 10,000"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Sevelamer Carbonate — 800 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sevelamer Carbonate 800 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "sourceNumber": "407",
        "sourceRecordId": "source-0503"
      }
    ],
    "sources": [
      {
        "recordId": "source-0503",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "number": "407"
      }
    ]
  },
  {
    "id": "p-3bb3a8b56703",
    "name": "Sildenafil Citrate Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Sildenafil Citrate eq. to Sildenafil 100 mg",
    "ingredients": [
      "Sildenafil Citrate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Sildenafil Citrate eq. to Sildenafil 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Sildenafil Citrate — 100 mg",
        "sourceComposition": "Sildenafil Citrate eq. to Sildenafil 100 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "45",
        "sourceRecordId": "source-0726"
      }
    ],
    "sources": [
      {
        "recordId": "source-0726",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "45"
      }
    ]
  },
  {
    "id": "p-71dbe8a35886",
    "name": "Sildenafil Citrate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg",
      "50 mg",
      "100 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Sildenafil Citrate Equivalentto Sildenafil IP 25 mg Excipients q.s.",
    "ingredients": [
      "Sildenafil Citrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Sildenafil Citrate Tablets IP",
      "Sildenafil Tablets I.P.",
      "Sildenafil Citrate Tablets IP 100 mg",
      "Sildenafil Citrate Tablets IP 25 mg",
      "Sildenafil Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Sildenafil Citrate — 25 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Sildenafil Citrate Equivalentto Sildenafil IP 25 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "sourceNumber": "36",
        "sourceRecordId": "source-0132"
      },
      {
        "label": "Standard formulation",
        "composition": "Sildenafil Citrate — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sildenafil Citrate Equivalentto Sildenafil I.P. 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "sourceNumber": "86",
        "sourceRecordId": "source-0182"
      },
      {
        "label": "Standard formulation",
        "composition": "Sildenafil Citrate — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sildenafil Citrate Equivalentto Sildenafil IP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "sourceNumber": "167",
        "sourceRecordId": "source-0263"
      }
    ],
    "sources": [
      {
        "recordId": "source-0132",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "number": "36"
      },
      {
        "recordId": "source-0182",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "number": "86"
      },
      {
        "recordId": "source-0263",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 26,
        "number": "167"
      },
      {
        "recordId": "source-0300",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 32,
        "number": "204"
      },
      {
        "recordId": "source-0585",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "number": "489"
      }
    ]
  },
  {
    "id": "p-6d099aa1ba80",
    "name": "Silymarine, Alpha Lipoic Acid, L-Ornithine, L-Aspartate & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Silymarine 140 mg, Alpha Lipoic Acid 50 mg, L-Ornithine, L-Aspartate 150 mg, Selenium 50 mcg, Thiamine Mononitrate 1.4 mg",
    "ingredients": [
      "Silymarine",
      "Alpha Lipoic Acid",
      "L-Ornithine, L-Aspartate",
      "Selenium",
      "Thiamine Mononitrate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Silymarine 140 mg, Alpha Lipoic Acid 50 mg, L-Ornithine, L-Aspartate 150 mg, Selenium 50 mcg, Thiamine Mononitrate 1.4 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Silymarine — 140 mg; Alpha Lipoic Acid — 50 mg; L-Ornithine, L-Aspartate — 150 mg; Selenium — 50 mcg; Thiamine Mononitrate — 1.4 mg",
        "sourceComposition": "Silymarine 140 mg, Alpha Lipoic Acid 50 mg, L-Ornithine, L-Aspartate 150 mg, Selenium 50 mcg, Thiamine Mononitrate 1.4 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 3,
        "sourceNumber": "17",
        "sourceRecordId": "source-0749"
      }
    ],
    "sources": [
      {
        "recordId": "source-0749",
        "pdf": "Product List-Softgel.pdf",
        "page": 3,
        "number": "17"
      }
    ]
  },
  {
    "id": "p-2a3b0a38da57",
    "name": "Simvastatin Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg",
      "40 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Simvastatin I.P. 20 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Simvastatin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Simvastatin Tablets I.P."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Simvastatin — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Simvastatin I.P. 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 15,
        "sourceNumber": "93",
        "sourceRecordId": "source-0189"
      },
      {
        "label": "Standard formulation",
        "composition": "Simvastatin — 40 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Simvastatin I.P. 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 15,
        "sourceNumber": "94",
        "sourceRecordId": "source-0190"
      }
    ],
    "sources": [
      {
        "recordId": "source-0189",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 15,
        "number": "93"
      },
      {
        "recordId": "source-0190",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 15,
        "number": "94"
      }
    ]
  },
  {
    "id": "p-aa867e4557a3",
    "name": "Sitagliptin Phosphate & Metformin Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "64.25 mg / 50 mg + 500 mg",
      "64.25 mg / 50 mg + 1000 mg",
      "50 mg + 500 mg",
      "100 mg + 500 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Sitagliptin Phosphate Equivalentto Sitagliptine I.P. 64.25 mg 50 mg Metformin Hydrochloride I.P. 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Sitagliptin Phosphate",
      "Metformin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Sitagliptin Phosphate &Metformin Hydrochloride Tablets",
      "Sitagliptinand Metformin Hydrochloride(Extended Release Tablets)",
      "Sitagliptinand Metformin Hydrochloride(Extended Release Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Sitagliptin Phosphate — 64.25 mg / 50 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sitagliptin Phosphate Equivalentto Sitagliptine I.P. 64.25 mg 50 mg Metformin Hydrochloride I.P. 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "sourceNumber": "56",
        "sourceRecordId": "source-0152"
      },
      {
        "label": "Standard formulation",
        "composition": "Sitagliptin Phosphate — 64.25 mg / 50 mg; Metformin Hydrochloride — 1000 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sitagliptin Phosphate Equivalentto Sitagliptine I.P. 64.25 mg 50 mg Metformin Hydrochloride I.P. 1000 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "sourceNumber": "57",
        "sourceRecordId": "source-0153"
      },
      {
        "label": "Extended release",
        "composition": "Sitagliptin Phosphate Monohydrate — 50 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sitagliptin Phosphate Monohydrate Equivalentto Sitagliptin IP 50 mg Metformin Hydrochloride (In Extended Release Form) IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "sourceNumber": "314",
        "sourceRecordId": "source-0410"
      },
      {
        "label": "Extended release",
        "composition": "Sitagliptin Phosphate Monohydrate — 100 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sitagliptin Phosphate Monohydrate Equivalentto Sitagliptin IP 100 mg Metformin Hydrochloride (In Extended Release Form) IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "sourceNumber": "315",
        "sourceRecordId": "source-0411"
      }
    ],
    "sources": [
      {
        "recordId": "source-0152",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "number": "56"
      },
      {
        "recordId": "source-0153",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "number": "57"
      },
      {
        "recordId": "source-0410",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "number": "314"
      },
      {
        "recordId": "source-0411",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "number": "315"
      }
    ]
  },
  {
    "id": "p-df5f272b1cc9",
    "name": "Sitagliptin Phosphate Monohydrate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "25 mg",
      "50 mg",
      "100 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Sitagliptin Phosphate Monohydrate Equivalent to Sitagliptin I.P. 25 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Sitagliptin Phosphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Sitagliptin Phosphate Tablets I.P.25 mg",
      "Sitagliptin Phosphate Tablets I.P. 50 mg",
      "Sitagliptin Phosphate Tablets I.P.100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Sitagliptin Phosphate Monohydrate — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sitagliptin Phosphate Monohydrate Equivalent to Sitagliptin I.P. 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "sourceNumber": "42",
        "sourceRecordId": "source-0138"
      },
      {
        "label": "Standard formulation",
        "composition": "Sitagliptin Phosphate Monohydrate — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sitagliptin Phosphate Monohydrate Equivalentto Sitagliptin I.P. 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "sourceNumber": "54",
        "sourceRecordId": "source-0150"
      },
      {
        "label": "Standard formulation",
        "composition": "Sitagliptin Phosphate Monohydrate — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sitagliptin Phosphate Monohydrate Equivalentto Sitagliptin I.P. 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "sourceNumber": "55",
        "sourceRecordId": "source-0151"
      }
    ],
    "sources": [
      {
        "recordId": "source-0138",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "number": "42"
      },
      {
        "recordId": "source-0150",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "number": "54"
      },
      {
        "recordId": "source-0151",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 9,
        "number": "55"
      }
    ]
  },
  {
    "id": "p-241505412530",
    "name": "Sodium Bicarbonate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg",
      "1000 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Sodium Bicarbonate I.P. 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Sodium Bicarbonate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Sodium Bicarbonate Tablets 500 mg",
      "Sodium Bicarbonate Tablets 1000 mg",
      "Sodium Bicarbonate Tablets USP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Sodium Bicarbonate — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sodium Bicarbonate I.P. 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "sourceNumber": "120",
        "sourceRecordId": "source-0216"
      },
      {
        "label": "Standard formulation",
        "composition": "Sodium Bicarbonate — 1000 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sodium Bicarbonate I.P. 1000 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "sourceNumber": "121",
        "sourceRecordId": "source-0217"
      }
    ],
    "sources": [
      {
        "recordId": "source-0216",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "number": "120"
      },
      {
        "recordId": "source-0217",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "number": "121"
      },
      {
        "recordId": "source-0596",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 82,
        "number": "500"
      },
      {
        "recordId": "source-0597",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 82,
        "number": "501"
      }
    ]
  },
  {
    "id": "p-92cc54fef09a",
    "name": "Sodium Feredetate & Folic Acid & Vitamin B12 & Zinc Sulphate Monohydrate Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "350 mg + 1.5 mg + 15 mcg + 61.8 mg"
    ],
    "composition": "Each Film Coated Tablet Contains : Sodium Feredetate BP 350 mg Folic Acid IP 1.5 mg Vitamin B12 IP 15 mcg Zinc Sulphate Monohydrate IP 61.8 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Sodium Feredetate",
      "Folic Acid",
      "Vitamin B12",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Sodium Feredetate,Folic Acid,Vitamin B12 , Zinc Sulphate Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Sodium Feredetate — 350 mg; Folic Acid — 1.5 mg; Vitamin B12 — 15 mcg; Zinc Sulphate Monohydrate — 61.8 mg",
        "sourceComposition": "Each Film Coated Tablet Contains : Sodium Feredetate BP 350 mg Folic Acid IP 1.5 mg Vitamin B12 IP 15 mcg Zinc Sulphate Monohydrate IP 61.8 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "sourceNumber": "475",
        "sourceRecordId": "source-0571"
      }
    ],
    "sources": [
      {
        "recordId": "source-0571",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 77,
        "number": "475"
      }
    ]
  },
  {
    "id": "p-983e7fbea23c",
    "name": "Sodium Feredetate & Folic Acid & Vitamin B12 Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "231 mg / 33 mg + 1.5 mg + 15 mcg"
    ],
    "composition": "Each Film Coated Tablet Contains: Sodium Feredetate Equivalentto Elemental Iron BP 231 mg 33 mg Folic Acid IP 1.5 mg Vitamin B12 IP 15 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Sodium Feredetate",
      "Folic Acid",
      "Vitamin B12"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Sodium Feredetate,Folic Acid & Vitamin B12 Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Sodium Feredetate — 231 mg / 33 mg; Folic Acid — 1.5 mg; Vitamin B12 — 15 mcg",
        "sourceComposition": "Each Film Coated Tablet Contains: Sodium Feredetate Equivalentto Elemental Iron BP 231 mg 33 mg Folic Acid IP 1.5 mg Vitamin B12 IP 15 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "sourceNumber": "32",
        "sourceRecordId": "source-0128"
      }
    ],
    "sources": [
      {
        "recordId": "source-0128",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 5,
        "number": "32"
      }
    ]
  },
  {
    "id": "p-9d17c211dcf9",
    "name": "Sodium Valproate & Valproic Acid Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "666 mg + 290 mg / 1000 mg",
      "499.5 mg + 217.5 mg / 750 mg"
    ],
    "composition": "Each Film Coated Controlled Release Tablet Contains: Sodium Valproate IP 666 mg Valproic Acid (Bothtogethercorrespondsto Sodium Valproate) IP 290 mg 1000 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Sodium Valproate",
      "Valproic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Sodium Valproate &Valproic Acid Controlled Release Tablets"
    ],
    "variants": [
      {
        "label": "Controlled release",
        "composition": "Sodium Valproate — 666 mg; Valproic Acid — 290 mg / 1000 mg",
        "sourceComposition": "Each Film Coated Controlled Release Tablet Contains: Sodium Valproate IP 666 mg Valproic Acid (Bothtogethercorrespondsto Sodium Valproate) IP 290 mg 1000 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "sourceNumber": "224",
        "sourceRecordId": "source-0320"
      },
      {
        "label": "Controlled release",
        "composition": "Sodium Valproate — 499.5 mg; Valproic Acid — 217.5 mg / 750 mg",
        "sourceComposition": "Each Film Coated Controlled Release Tablet Contains: Sodium Valproate IP 499.5 mg Valproic Acid (Bothtogethercorrespondsto Sodium Valproate) IP 217.5 mg 750 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "sourceNumber": "225",
        "sourceRecordId": "source-0321"
      }
    ],
    "sources": [
      {
        "recordId": "source-0320",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "number": "224"
      },
      {
        "recordId": "source-0321",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "number": "225"
      }
    ]
  },
  {
    "id": "p-8af20e1e7992",
    "name": "Soya Isoflavones Extract, Magnesium Hydroxide, Ascorbic Acid Coated & Multinutrient Blend Food Formulation",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Food Formulation",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Soyaisoflavonesext40% 100 mg Magnesium Hydroxide 100 mg Ascorbic Acid Coated 75 mg Vitamin E Acetate50%Powder 20 mg Vitamin B3 20 mg Vitamin B6 20 mg Calcium D-Pantothenate 20 mg Zinc Sulphate Monohydrate 15 mg Vitamin B1 15 mg Ferrous Fumarate 12 mg Vitamin B2 3 mg Copper Sulphate 1 mg Vitamin A Acetate Powder 750 mcg Folic Acid 500 mcg Magnesium Sulphate 5 mg Potassium Iodide 225 mcg Sodium Selenate 100 mcg Chromium Chloride 80 mcg D-Biotin 30 mcg Vitamin D3 Stabilized 600 iu Cyanocobalamin 2.5 mcg",
    "ingredients": [
      "Soya Isoflavones Extract",
      "Magnesium Hydroxide",
      "Ascorbic Acid Coated",
      "Vitamin E Acetate Powder",
      "Vitamin B3",
      "Vitamin B6",
      "Calcium D-Pantothenate",
      "Zinc Sulphate Monohydrate",
      "Vitamin B1",
      "Ferrous Fumarate",
      "Vitamin B2",
      "Copper Sulphate",
      "Vitamin A Acetate Powder",
      "Folic Acid",
      "Magnesium Sulphate",
      "Potassium Iodide",
      "Sodium Selenate",
      "Chromium Chloride",
      "D-Biotin",
      "Vitamin D3 Stabilized",
      "Cyanocobalamin"
    ],
    "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
    "aliases": [
      "Soyaisoflavonesext40% 100 mg Magnesium Hydroxide 100 mg Ascorbic Acid Coated 75 mg Vitamin E Acetate50%Powder 20 mg Vitamin B3 20 mg Vitamin B6 20 mg Calcium D-Pantothenate 20 mg Zinc Sulphate Monohydrate 15 mg Vitamin B1 15 mg Ferrous Fumarate 12 mg Vitamin B2 3 mg Copper Sulphate 1 mg Vitamin A Acetate Powder 750 mcg Folic Acid 500 mcg Magnesium Sulphate 5 mg Potassium Iodide 225 mcg Sodium Selenate 100 mcg Chromium Chloride 80 mcg D-Biotin 30 mcg Vitamin D3 Stabilized 600 iu Cyanocobalamin 2.5 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Soya Isoflavones Extract — 100 mg; Magnesium Hydroxide — 100 mg; Ascorbic Acid Coated — 75 mg; Vitamin E Acetate Powder — 20 mg; Vitamin B3 — 20 mg; Vitamin B6 — 20 mg; Calcium D-Pantothenate — 20 mg; Zinc Sulphate Monohydrate — 15 mg; Vitamin B1 — 15 mg; Ferrous Fumarate — 12 mg; Vitamin B2 — 3 mg; Copper Sulphate — 1 mg; Vitamin A Acetate Powder — 750 mcg; Folic Acid — 500 mcg; Magnesium Sulphate — 5 mg; Potassium Iodide — 225 mcg; Sodium Selenate — 100 mcg; Chromium Chloride — 80 mcg; D-Biotin — 30 mcg; Vitamin D3 Stabilized — 600 iu; Cyanocobalamin — 2.5 mcg",
        "sourceComposition": "Soyaisoflavonesext40% 100 mg Magnesium Hydroxide 100 mg Ascorbic Acid Coated 75 mg Vitamin E Acetate50%Powder 20 mg Vitamin B3 20 mg Vitamin B6 20 mg Calcium D-Pantothenate 20 mg Zinc Sulphate Monohydrate 15 mg Vitamin B1 15 mg Ferrous Fumarate 12 mg Vitamin B2 3 mg Copper Sulphate 1 mg Vitamin A Acetate Powder 750 mcg Folic Acid 500 mcg Magnesium Sulphate 5 mg Potassium Iodide 225 mcg Sodium Selenate 100 mcg Chromium Chloride 80 mcg D-Biotin 30 mcg Vitamin D3 Stabilized 600 iu Cyanocobalamin 2.5 mcg",
        "sourcePdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 14,
        "sourceNumber": "81",
        "sourceRecordId": "source-0081"
      }
    ],
    "sources": [
      {
        "recordId": "source-0081",
        "pdf": "FORTSCHRITT FOOD + SACHET + POTEIN POWDER.pdf",
        "page": 14,
        "number": "81"
      }
    ]
  },
  {
    "id": "p-b4a1e4398fdf",
    "name": "Stanozolol Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "USP",
    "availableStrengths": [
      "2 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Stanozolol USP 2 mg Excipients q.s.",
    "ingredients": [
      "Stanozolol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Stanozolol Tablets USP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Stanozolol — 2 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Stanozolol USP 2 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "sourceNumber": "409",
        "sourceRecordId": "source-0505"
      }
    ],
    "sources": [
      {
        "recordId": "source-0505",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "number": "409"
      }
    ]
  },
  {
    "id": "p-c34c9355c0ce",
    "name": "Tadalafil & Dapoxetine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg + 30 mg",
      "20 mg + 30 mg",
      "20 mg + 60 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Tadalafil IP 10 mg Dapoxetine Hydrochloride Equivalent to Dapoxetine IP 30 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Tadalafil",
      "Dapoxetine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tadalafiland Dapoxetine Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Tadalafil — 10 mg; Dapoxetine Hydrochloride — 30 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tadalafil IP 10 mg Dapoxetine Hydrochloride Equivalent to Dapoxetine IP 30 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "sourceNumber": "465",
        "sourceRecordId": "source-0561"
      },
      {
        "label": "Standard formulation",
        "composition": "Tadalafil — 20 mg; Dapoxetine Hydrochloride — 30 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tadalafil IP 20 mg Dapoxetine Hydrochloride Equivalent to Dapoxetine IP 30 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "sourceNumber": "466",
        "sourceRecordId": "source-0562"
      },
      {
        "label": "Standard formulation",
        "composition": "Tadalafil — 20 mg; Dapoxetine Hydrochloride — 60 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tadalafil IP 20 mg Dapoxetine Hydrochloride Equivalent to Dapoxetine IP 60 mg Excipients Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "sourceNumber": "467",
        "sourceRecordId": "source-0563"
      }
    ],
    "sources": [
      {
        "recordId": "source-0561",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "number": "465"
      },
      {
        "recordId": "source-0562",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "number": "466"
      },
      {
        "recordId": "source-0563",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 75,
        "number": "467"
      }
    ]
  },
  {
    "id": "p-4872d92cc5e7",
    "name": "Tadalafil Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "10 mg",
      "20 mg",
      "2.5 mg",
      "5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Tadalafil I.P. 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Tadalafil"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tadalafil Tablets IP",
      "Tadalafil Tablets2.5 mg",
      "Tadalafil Tablets5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Tadalafil — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tadalafil I.P. 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "sourceNumber": "80",
        "sourceRecordId": "source-0176"
      },
      {
        "label": "Standard formulation",
        "composition": "Tadalafil — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tadalafil IP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "sourceNumber": "81",
        "sourceRecordId": "source-0177"
      },
      {
        "label": "Standard formulation",
        "composition": "Tadalafil — 2.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tadalafil IP 2.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "sourceNumber": "457",
        "sourceRecordId": "source-0553"
      },
      {
        "label": "Standard formulation",
        "composition": "Tadalafil — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tadalafil IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "sourceNumber": "458",
        "sourceRecordId": "source-0554"
      }
    ],
    "sources": [
      {
        "recordId": "source-0176",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "number": "80"
      },
      {
        "recordId": "source-0177",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 12,
        "number": "81"
      },
      {
        "recordId": "source-0553",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "number": "457"
      },
      {
        "recordId": "source-0554",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 74,
        "number": "458"
      }
    ]
  },
  {
    "id": "p-4006eb80c4cf",
    "name": "Tamsulosin Hydrochloride & Dutasteride Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "0.4 mg + 0.5 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Tamsulosin Hydrochloride (Asprolongedreleasepellets) IP 0.4 mg Dutasteride IP 0.5 mg Excipients q.s. Approved Colour Usedin Capsuleshells",
    "ingredients": [
      "Tamsulosin Hydrochloride",
      "Dutasteride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tamsulosin Hydrochloride Prolonged Release and Dutasteride Capsules IP"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Tamsulosin Hydrochloride — 0.4 mg; Dutasteride — 0.5 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Tamsulosin Hydrochloride (Asprolongedreleasepellets) IP 0.4 mg Dutasteride IP 0.5 mg Excipients q.s. Approved Colour Usedin Capsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "sourceNumber": "312",
        "sourceRecordId": "source-0408"
      }
    ],
    "sources": [
      {
        "recordId": "source-0408",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 51,
        "number": "312"
      }
    ]
  },
  {
    "id": "p-360ff924456a",
    "name": "Tamsulosin Hydrochloride & Tolterodine Tartrate Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "0.4 mg + 2 mg",
      "0.4 mg + 4 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Tansulosin Hydrochloride (Asmodifiedreleasepellets) IP 0.4 mg Tolterodine Tartrate (Asextendedreleasepellets) IP 2 mg Excipients q.s. Approved Colour Usedincapsuleshells",
    "ingredients": [
      "Tamsulosin Hydrochloride",
      "Tolterodine Tartrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tamsulosin Hydrochloride (Modified Release &Tolterodine Tartrate(ER) Capsules"
    ],
    "variants": [
      {
        "label": "Extended release, Modified release",
        "composition": "Tamsulosin Hydrochloride — 0.4 mg; Tolterodine Tartrate — 2 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Tansulosin Hydrochloride (Asmodifiedreleasepellets) IP 0.4 mg Tolterodine Tartrate (Asextendedreleasepellets) IP 2 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "sourceNumber": "282",
        "sourceRecordId": "source-0378"
      },
      {
        "label": "Extended release, Modified release",
        "composition": "Tamsulosin Hydrochloride — 0.4 mg; Tolterodine Tartrate — 4 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Tansulosin Hydrochloride (Asmodifiedreleasepellets) IP 0.4 mg Tolterodine Tartrate (Asextendedreleasepellets) IP 4 mg Excipients q.s. Approved Colour Usedincapsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "sourceNumber": "283",
        "sourceRecordId": "source-0379"
      }
    ],
    "sources": [
      {
        "recordId": "source-0378",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "number": "282"
      },
      {
        "recordId": "source-0379",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 46,
        "number": "283"
      }
    ]
  },
  {
    "id": "p-ef5a3cf247c3",
    "name": "Tamsulosin Hydrochloride Capsules",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "0.4 mg",
      "0.2 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Tamsulosin Hydrochloride Equivalentto Tamsulosin IP 0.4 mg Excipients q.s. Approved Colour Usedincapsuleshell",
    "ingredients": [
      "Tamsulosin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tamsulosin Hydrochloride Prolonged Release Capsules IP"
    ],
    "variants": [
      {
        "label": "Prolonged release",
        "composition": "Tamsulosin Hydrochloride — 0.4 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Tamsulosin Hydrochloride Equivalentto Tamsulosin IP 0.4 mg Excipients q.s. Approved Colour Usedincapsuleshell",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "sourceNumber": "195",
        "sourceRecordId": "source-0291"
      },
      {
        "label": "Prolonged release",
        "composition": "Tamsulosin Hydrochloride — 0.2 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Tamsulosin Hydrochloride (Asprolongedreleasepellets) IP 0.2 mg Excipients q.s. Approved Colour Usedin Capsuleshells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "sourceNumber": "308",
        "sourceRecordId": "source-0404"
      }
    ],
    "sources": [
      {
        "recordId": "source-0291",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 31,
        "number": "195"
      },
      {
        "recordId": "source-0404",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 50,
        "number": "308"
      }
    ]
  },
  {
    "id": "p-7ddf52b555cb",
    "name": "Telmisartan & Amlodipine Besylate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "80 mg + 5 mg",
      "40 mg + 5 mg",
      "80 mg + 10 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Telmisartan I.P. 80 mg Amlodipine Besylate Equivalentto Amlodipine I.P. 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Telmisartan",
      "Amlodipine Besylate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Telmisartanand Amlodipine Tablets I.P.",
      "Telmisartan&Amlodipine Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 80 mg; Amlodipine Besylate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Telmisartan I.P. 80 mg Amlodipine Besylate Equivalentto Amlodipine I.P. 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 14,
        "sourceNumber": "91",
        "sourceRecordId": "source-0187"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 40 mg; Amlodipine Besylate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Telmisartan IP 40 mg Amlodipine Besylate Equivalentto Amlodipine IP 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "sourceNumber": "179",
        "sourceRecordId": "source-0275"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 80 mg; Amlodipine Besylate — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Telmisartan IP 80 mg Amlodipine Besylate Equivalentto Amlodipine IP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "sourceNumber": "180",
        "sourceRecordId": "source-0276"
      }
    ],
    "sources": [
      {
        "recordId": "source-0187",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 14,
        "number": "91"
      },
      {
        "recordId": "source-0275",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "number": "179"
      },
      {
        "recordId": "source-0276",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "number": "180"
      }
    ]
  },
  {
    "id": "p-4dea8cda0bfe",
    "name": "Telmisartan & Chlorthalidone Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 6.25 mg",
      "80 mg + 6.25 mg",
      "40 mg + 12.5 mg",
      "80 mg + 12.5 mg"
    ],
    "composition": "Each Uncoated Bilayered Tablet Contains: Telmisartan IP 40 mg Chlorthalidone IP 6.25 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Telmisartan",
      "Chlorthalidone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Telmisartan &Chlorthalidone Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 40 mg; Chlorthalidone — 6.25 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Telmisartan IP 40 mg Chlorthalidone IP 6.25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "sourceNumber": "02",
        "sourceRecordId": "source-0098"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 80 mg; Chlorthalidone — 6.25 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Telmisartan IP 80 mg Chlorthalidone IP 6.25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "sourceNumber": "03",
        "sourceRecordId": "source-0099"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 40 mg; Chlorthalidone — 12.5 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Telmisartan I.P. 40 mg Chlorthalidone I.P. 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "sourceNumber": "99",
        "sourceRecordId": "source-0195"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 80 mg; Chlorthalidone — 12.5 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Telmisartan I.P. 80 mg Chlorthalidone I.P. 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "sourceNumber": "100",
        "sourceRecordId": "source-0196"
      }
    ],
    "sources": [
      {
        "recordId": "source-0098",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "number": "02"
      },
      {
        "recordId": "source-0099",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 1,
        "number": "03"
      },
      {
        "recordId": "source-0195",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "number": "99"
      },
      {
        "recordId": "source-0196",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 16,
        "number": "100"
      }
    ]
  },
  {
    "id": "p-45e15fc52ebd",
    "name": "Telmisartan & Hydrochlorothiazide Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 12.5 mg",
      "80 mg + 12.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Telmisartan IP 40 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Telmisartan",
      "Hydrochlorothiazide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Telmisartan &Hydrochlorothiazide Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 40 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Telmisartan IP 40 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "sourceNumber": "191",
        "sourceRecordId": "source-0287"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 80 mg; Hydrochlorothiazide — 12.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Telmisartan IP 80 mg Hydrochlorothiazide IP 12.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "sourceNumber": "192",
        "sourceRecordId": "source-0288"
      }
    ],
    "sources": [
      {
        "recordId": "source-0287",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "number": "191"
      },
      {
        "recordId": "source-0288",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 30,
        "number": "192"
      }
    ]
  },
  {
    "id": "p-df08b2149dda",
    "name": "Telmisartan & Indapamide Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 1.5 mg",
      "80 mg + 1.5 mg"
    ],
    "composition": "Each Uncoated Bilayered Tablet Contains: Telmisartan IP 40 mg Indapamide (assustainedreleaseform) IP 1.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Telmisartan",
      "Indapamide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Telmisartan&Indapamide (SR Tablets)",
      "Telmisartan40 mg&Indapamide (SR)"
    ],
    "variants": [
      {
        "label": "Sustained release",
        "composition": "Telmisartan — 40 mg; Indapamide — 1.5 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Telmisartan IP 40 mg Indapamide (assustainedreleaseform) IP 1.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "sourceNumber": "226",
        "sourceRecordId": "source-0322"
      },
      {
        "label": "Sustained release",
        "composition": "Telmisartan — 80 mg; Indapamide — 1.5 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Telmisartan IP 80 mg Indapamide (assustainedreleaseform) IP 1.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "sourceNumber": "227",
        "sourceRecordId": "source-0323"
      }
    ],
    "sources": [
      {
        "recordId": "source-0322",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "number": "226"
      },
      {
        "recordId": "source-0323",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "number": "227"
      },
      {
        "recordId": "source-0539",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 71,
        "number": "443"
      }
    ]
  },
  {
    "id": "p-9e3f349a123e",
    "name": "Telmisartan & Metoprolol Succinate Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 25 mg",
      "20 mg + 23.75 mg / 25 mg",
      "40 mg + 47.50 mg / 50 mg",
      "40 mg + 23.75 mg / 25 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Telmisartan IP 40 mg Metoprolol Succinate (asextendedreleaseform) IP 25 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Telmisartan",
      "Metoprolol Succinate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Telmisartan&Metoprolol (ER) Tablets",
      "Metoprolol Succinate(ER)&Telmisartan Tablets"
    ],
    "variants": [
      {
        "label": "Extended release",
        "composition": "Telmisartan — 40 mg; Metoprolol Succinate — 25 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Telmisartan IP 40 mg Metoprolol Succinate (asextendedreleaseform) IP 25 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "sourceNumber": "181",
        "sourceRecordId": "source-0277"
      },
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 23.75 mg / 25 mg; Telmisartan — 20 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprplol Tartrate(as Extendedreleaseform) IP 23.75 mg 25 mg Telmisartan IP 20 mg",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "sourceNumber": "228",
        "sourceRecordId": "source-0324"
      },
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 47.50 mg / 50 mg; Telmisartan — 40 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprplol Tartrate(as Extendedreleaseform) IP 47.50 mg 50 mg Telmisartan IP 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "sourceNumber": "229",
        "sourceRecordId": "source-0325"
      },
      {
        "label": "Extended release",
        "composition": "Metoprolol Succinate — 23.75 mg / 25 mg; Telmisartan — 40 mg",
        "sourceComposition": "Each Uncoated Bilayered Tablet Contains: Metoprolol Succinate Equivalentto Metoprolol Tartrate(as Extendedreleaseform) 23.75 mg 25 mg Telmisartan IP 40 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "sourceNumber": "322",
        "sourceRecordId": "source-0418"
      }
    ],
    "sources": [
      {
        "recordId": "source-0277",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "number": "181"
      },
      {
        "recordId": "source-0324",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "number": "228"
      },
      {
        "recordId": "source-0325",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 36,
        "number": "229"
      },
      {
        "recordId": "source-0418",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 52,
        "number": "322"
      }
    ]
  },
  {
    "id": "p-5c968b274f06",
    "name": "Telmisartan & Ramipril Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "40 mg + 2.5 mg",
      "40 mg + 5 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Telmisartan IP 40 mg Ramipril IP 2.5 mg Excipients q.s.",
    "ingredients": [
      "Telmisartan",
      "Ramipril"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Telmisartan&Ramipril Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 40 mg; Ramipril — 2.5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Telmisartan IP 40 mg Ramipril IP 2.5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "sourceNumber": "222",
        "sourceRecordId": "source-0318"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 40 mg; Ramipril — 5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Telmisartan IP 40 mg Ramipril IP 5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "sourceNumber": "223",
        "sourceRecordId": "source-0319"
      }
    ],
    "sources": [
      {
        "recordId": "source-0318",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "number": "222"
      },
      {
        "recordId": "source-0319",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 35,
        "number": "223"
      },
      {
        "recordId": "source-0361",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 42,
        "number": "265"
      }
    ]
  },
  {
    "id": "p-5be90286abed",
    "name": "Telmisartan Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "20 mg",
      "40 mg",
      "80 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Telmisartan IP 20 mg Excipients q.s.",
    "ingredients": [
      "Telmisartan"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Telmisartan Tablets IP 20 mg",
      "Telmisartan Tablets IP 40 mg",
      "Telmisartan Tablets IP 80 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 20 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Telmisartan IP 20 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "sourceNumber": "176",
        "sourceRecordId": "source-0272"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 40 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Telmisartan IP 40 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "sourceNumber": "177",
        "sourceRecordId": "source-0273"
      },
      {
        "label": "Standard formulation",
        "composition": "Telmisartan — 80 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Telmisartan IP 80 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "sourceNumber": "178",
        "sourceRecordId": "source-0274"
      }
    ],
    "sources": [
      {
        "recordId": "source-0272",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "number": "176"
      },
      {
        "recordId": "source-0273",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "number": "177"
      },
      {
        "recordId": "source-0274",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 29,
        "number": "178"
      }
    ]
  },
  {
    "id": "p-986adfc27891",
    "name": "Thiamine Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Thiamine Hydrochloride IP 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Thiamine Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Thiamine Hydrochloride Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Thiamine Hydrochloride — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Thiamine Hydrochloride IP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "sourceNumber": "384",
        "sourceRecordId": "source-0480"
      }
    ],
    "sources": [
      {
        "recordId": "source-0480",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 62,
        "number": "384"
      }
    ]
  },
  {
    "id": "p-ad0c6bd9b98f",
    "name": "Thiamine Mononitrate, Riboflavin, Pyridoxine Hydrochloride & Multinutrient Blend Softgel Capsules (9-ingredient blend)",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Thiamine Mononitrate 10 mg Riboflavin 10 mg Pyridoxine Hydrochloride 3 mg Cyanocobalamin 15 mcg Niacinamide 100 mg Calcium Pantothenate 50 mg Folic Acid 1.5 mg Biotin 100 mcg Ascorbic Acid 150 mg",
    "ingredients": [
      "Thiamine Mononitrate",
      "Riboflavin",
      "Pyridoxine Hydrochloride",
      "Cyanocobalamin",
      "Niacinamide",
      "Calcium Pantothenate",
      "Folic Acid",
      "Biotin",
      "Ascorbic Acid"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Thiamine Mononitrate 10 mg Riboflavin 10 mg Pyridoxine Hydrochloride 3 mg Cyanocobalamin 15 mcg Niacinamide 100 mg Calcium Pantothenate 50 mg Folic Acid 1.5 mg Biotin 100 mcg Ascorbic Acid 150 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Thiamine Mononitrate — 10 mg; Riboflavin — 10 mg; Pyridoxine Hydrochloride — 3 mg; Cyanocobalamin — 15 mcg; Niacinamide — 100 mg; Calcium Pantothenate — 50 mg; Folic Acid — 1.5 mg; Biotin — 100 mcg; Ascorbic Acid — 150 mg",
        "sourceComposition": "Thiamine Mononitrate 10 mg Riboflavin 10 mg Pyridoxine Hydrochloride 3 mg Cyanocobalamin 15 mcg Niacinamide 100 mg Calcium Pantothenate 50 mg Folic Acid 1.5 mg Biotin 100 mcg Ascorbic Acid 150 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "42",
        "sourceRecordId": "source-0723"
      }
    ],
    "sources": [
      {
        "recordId": "source-0723",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "42"
      }
    ]
  },
  {
    "id": "p-bc82a744b991",
    "name": "Thiamine Mononitrate, Riboflavin, Pyridoxine Hydrochloride & Multinutrient Blend Softgel Capsules with Zinc Sulphate Monohydrate",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Thiamine Mononitrate 10 mg Riboflavin 10 mg Pyridoxine Hydrochloride 3 mg Cyanocobalamin 15 mcg Niacinamide 100 mg Calcium Pantothenate 50 mg Folic Acid 1.5 mg Biotin 100 mcg Ascorbic Acid 150 mg Zinc Sulphate Monohydrate 41.4 mg eq. to Elemental Zinc 15 mg",
    "ingredients": [
      "Thiamine Mononitrate",
      "Riboflavin",
      "Pyridoxine Hydrochloride",
      "Cyanocobalamin",
      "Niacinamide",
      "Calcium Pantothenate",
      "Folic Acid",
      "Biotin",
      "Ascorbic Acid",
      "Zinc Sulphate Monohydrate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Thiamine Mononitrate 10 mg Riboflavin 10 mg Pyridoxine Hydrochloride 3 mg Cyanocobalamin 15 mcg Niacinamide 100 mg Calcium Pantothenate 50 mg Folic Acid 1.5 mg Biotin 100 mcg Ascorbic Acid 150 mg Zinc Sulphate Monohydrate 41.4 mg eq. to Elemental Zinc 15 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Thiamine Mononitrate — 10 mg; Riboflavin — 10 mg; Pyridoxine Hydrochloride — 3 mg; Cyanocobalamin — 15 mcg; Niacinamide — 100 mg; Calcium Pantothenate — 50 mg; Folic Acid — 1.5 mg; Biotin — 100 mcg; Ascorbic Acid — 150 mg; Zinc Sulphate Monohydrate — 41.4 mg",
        "sourceComposition": "Thiamine Mononitrate 10 mg Riboflavin 10 mg Pyridoxine Hydrochloride 3 mg Cyanocobalamin 15 mcg Niacinamide 100 mg Calcium Pantothenate 50 mg Folic Acid 1.5 mg Biotin 100 mcg Ascorbic Acid 150 mg Zinc Sulphate Monohydrate 41.4 mg eq. to Elemental Zinc 15 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "43",
        "sourceRecordId": "source-0724"
      }
    ],
    "sources": [
      {
        "recordId": "source-0724",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "43"
      }
    ]
  },
  {
    "id": "p-d7eddd32b37b",
    "name": "Thiamine Mononitrate, Riboflavin, Pyridoxine Hydrochloride & Multinutrient Blend Tablets",
    "division": "General",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [],
    "composition": "Each Film Coated Tablet Contains: Thiamine Mononitrate IP 10 mg Riboflavin IP 10 mg Pyridoxine Hydrochloride IP 3 mg Cyanocobalamin IP 15 mcg Nicotinamide IP 45 mg Calcium Pantothenate IP 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Thiamine Mononitrate",
      "Riboflavin",
      "Pyridoxine Hydrochloride",
      "Cyanocobalamin",
      "Nicotinamide",
      "Calcium Pantothenate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tabletsof Vitamin BComplexwith B12"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Thiamine Mononitrate — 10 mg; Riboflavin — 10 mg; Pyridoxine Hydrochloride — 3 mg; Cyanocobalamin — 15 mcg; Nicotinamide — 45 mg; Calcium Pantothenate — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Thiamine Mononitrate IP 10 mg Riboflavin IP 10 mg Pyridoxine Hydrochloride IP 3 mg Cyanocobalamin IP 15 mcg Nicotinamide IP 45 mg Calcium Pantothenate IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 71,
        "sourceNumber": "442",
        "sourceRecordId": "source-0538"
      }
    ],
    "sources": [
      {
        "recordId": "source-0538",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 71,
        "number": "442"
      }
    ]
  },
  {
    "id": "p-8cb59f2ff1c3",
    "name": "Thiocolchicoside & Ketoprofen Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "4 mg + 50 mg",
      "8 mg + 100 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Thiocolchicoside IP 4 mg Ketoprofen IP 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Thiocolchicoside",
      "Ketoprofen"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Thiocolchicoside&Ketopr ofen Tablets",
      "Thiocolchicoside& Ketoprofen Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Thiocolchicoside — 4 mg; Ketoprofen — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Thiocolchicoside IP 4 mg Ketoprofen IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "sourceNumber": "217",
        "sourceRecordId": "source-0313"
      },
      {
        "label": "Standard formulation",
        "composition": "Thiocolchicoside — 8 mg; Ketoprofen — 100 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Thiocolchicoside IP 8 mg Ketoprofen IP 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "sourceNumber": "218",
        "sourceRecordId": "source-0314"
      }
    ],
    "sources": [
      {
        "recordId": "source-0313",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "number": "217"
      },
      {
        "recordId": "source-0314",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 34,
        "number": "218"
      }
    ]
  },
  {
    "id": "p-ae09dde6b261",
    "name": "Thiocolchicoside Capsules",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Capsule",
    "phRef": "IP",
    "availableStrengths": [
      "4 mg",
      "8 mg"
    ],
    "composition": "Each Hard Gelatin Capsule Contains: Thiocolchicoside I.P. 4 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
    "ingredients": [
      "Thiocolchicoside"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Thiocolchicoside Capsules I.P. 4 mg",
      "Thiocolchicoside Capsules I.P. 8 mg",
      "Thiocolchicoside 4 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Thiocolchicoside — 4 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Thiocolchicoside I.P. 4 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "sourceNumber": "45",
        "sourceRecordId": "source-0141"
      },
      {
        "label": "Standard formulation",
        "composition": "Thiocolchicoside — 8 mg",
        "sourceComposition": "Each Hard Gelatin Capsule Contains: Thiocolchicoside I.P. 8 mg Excipients q.s. Approved Colour Usedin Capsule Shells",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "sourceNumber": "46",
        "sourceRecordId": "source-0142"
      }
    ],
    "sources": [
      {
        "recordId": "source-0141",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "number": "45"
      },
      {
        "recordId": "source-0142",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 7,
        "number": "46"
      },
      {
        "recordId": "source-0775",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "8"
      }
    ]
  },
  {
    "id": "p-9dd775411425",
    "name": "Thyroxine Sodium Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "12.5 mcg",
      "25 mcg",
      "50 mcg",
      "75 mcg",
      "100 mcg",
      "250 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Thyroxine Sodium Equivalentto Anhydrous Thyroxine Sodium I.P. 12.5 mcg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Thyroxine Sodium"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Thyroxine Sodium Tablets I.P.",
      "Thyroxine Sodium Tablets IP 125 mcg",
      "Thyroxine Sodium Tablets IP 100 mcg",
      "Thyroxine Sodium Tablets IP 50 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Thyroxine Sodium — 12.5 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Thyroxine Sodium Equivalentto Anhydrous Thyroxine Sodium I.P. 12.5 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "sourceNumber": "12",
        "sourceRecordId": "source-0612"
      },
      {
        "label": "Standard formulation",
        "composition": "Thyroxine Sodium — 25 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Thyroxine Sodium Equivalentto Anhydrous Thyroxine Sodium I.P. 25 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "sourceNumber": "13",
        "sourceRecordId": "source-0613"
      },
      {
        "label": "Standard formulation",
        "composition": "Thyroxine Sodium — 50 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Thyroxine Sodium Equivalentto Anhydrous Thyroxine Sodium I.P. 50 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "sourceNumber": "14",
        "sourceRecordId": "source-0614"
      },
      {
        "label": "Standard formulation",
        "composition": "Thyroxine Sodium — 75 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Thyroxine Sodium Equivalentto Anhydrous Thyroxine Sodium I.P. 75 mcg Excipients q.s. Approved Colour Use",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "sourceNumber": "15",
        "sourceRecordId": "source-0615"
      },
      {
        "label": "Standard formulation",
        "composition": "Thyroxine Sodium — 100 mcg",
        "sourceComposition": "Each Uncoated Tablet Contains: Thyroxine Sodium Equivalentto Anhydrous Thyroxine Sodium I.P. 100 mcg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "sourceNumber": "16",
        "sourceRecordId": "source-0616"
      },
      {
        "label": "Standard formulation",
        "composition": "Thyroxine Sodium — 250 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Thyroxine Sodium Equivalentto Anhydrous Thyroxine Sodium IP 250 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "sourceNumber": "49",
        "sourceRecordId": "source-0649"
      }
    ],
    "sources": [
      {
        "recordId": "source-0612",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "number": "12"
      },
      {
        "recordId": "source-0613",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "number": "13"
      },
      {
        "recordId": "source-0614",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "number": "14"
      },
      {
        "recordId": "source-0615",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 2,
        "number": "15"
      },
      {
        "recordId": "source-0616",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 3,
        "number": "16"
      },
      {
        "recordId": "source-0649",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 7,
        "number": "49"
      },
      {
        "recordId": "source-0656",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 8,
        "number": "56"
      },
      {
        "recordId": "source-0657",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 8,
        "number": "57"
      }
    ]
  },
  {
    "id": "p-c347e9c65806",
    "name": "Tibolone Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "2.5 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Tibolone IP 2.5 mg Excipients q.s.",
    "ingredients": [
      "Tibolone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tibolone Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Tibolone — 2.5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Tibolone IP 2.5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "sourceNumber": "408",
        "sourceRecordId": "source-0504"
      }
    ],
    "sources": [
      {
        "recordId": "source-0504",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "number": "408"
      }
    ]
  },
  {
    "id": "p-09e81077998c",
    "name": "Tocopheryl Acetate Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "400 mg"
    ],
    "composition": "Tocopheryl Acetate 400 mg",
    "ingredients": [
      "Tocopheryl Acetate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Tocopheryl Acetate 400 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Tocopheryl Acetate — 400 mg",
        "sourceComposition": "Tocopheryl Acetate 400 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "46",
        "sourceRecordId": "source-0727"
      }
    ],
    "sources": [
      {
        "recordId": "source-0727",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "46"
      }
    ]
  },
  {
    "id": "p-4d9b053004e3",
    "name": "Tolperisone Hydrochloride & Diclofenac Sodium Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg + 50 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Tolperisone Hydrochloride JP 150 mg Diclofenac Sodium IP 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Tolperisone Hydrochloride",
      "Diclofenac Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tolperisone Hydrochloride&Diclofenac Sodium Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Tolperisone Hydrochloride — 150 mg; Diclofenac Sodium — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tolperisone Hydrochloride JP 150 mg Diclofenac Sodium IP 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "sourceNumber": "406",
        "sourceRecordId": "source-0502"
      }
    ],
    "sources": [
      {
        "recordId": "source-0502",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "number": "406"
      }
    ]
  },
  {
    "id": "p-548cd6936408",
    "name": "Tolperisone Hydrochloride & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "150 mg + 325 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Tolperisone Hydrochloride JP 150 mg Paracetamol IP 325 mg Excipients Approved Colour Used",
    "ingredients": [
      "Tolperisone Hydrochloride",
      "Paracetamol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tolperisone Hydrochloride&Paracetamol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Tolperisone Hydrochloride — 150 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tolperisone Hydrochloride JP 150 mg Paracetamol IP 325 mg Excipients Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "sourceNumber": "369",
        "sourceRecordId": "source-0465"
      }
    ],
    "sources": [
      {
        "recordId": "source-0465",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 59,
        "number": "369"
      },
      {
        "recordId": "source-0501",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "number": "405"
      }
    ]
  },
  {
    "id": "p-72179aed8427",
    "name": "Tolperisone Hydrochloride Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "150 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Tolperisone Hydrochloride JP 150 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Tolperisone Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tolperisone Hydrochloride Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Tolperisone Hydrochloride — 150 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tolperisone Hydrochloride JP 150 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "sourceNumber": "404",
        "sourceRecordId": "source-0500"
      }
    ],
    "sources": [
      {
        "recordId": "source-0500",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 66,
        "number": "404"
      }
    ]
  },
  {
    "id": "p-0b8426fd5226",
    "name": "Torsemide Tablets",
    "division": "General",
    "category": "Cardiology & Hypertension",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg",
      "10 mg"
    ],
    "composition": "Each Uncoated Tablet Contains : Torsemide IP 5 mg Excipients q.s.",
    "ingredients": [
      "Torsemide"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Torsemide Tablets IP 5 mg",
      "Torsemide Tablets IP 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Torsemide — 5 mg",
        "sourceComposition": "Each Uncoated Tablet Contains : Torsemide IP 5 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "sourceNumber": "484",
        "sourceRecordId": "source-0580"
      },
      {
        "label": "Standard formulation",
        "composition": "Torsemide — 10 mg",
        "sourceComposition": "Each Uncoated Tablet Contains : Torsemide IP 10 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "sourceNumber": "485",
        "sourceRecordId": "source-0581"
      }
    ],
    "sources": [
      {
        "recordId": "source-0580",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "number": "484"
      },
      {
        "recordId": "source-0581",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 79,
        "number": "485"
      }
    ]
  },
  {
    "id": "p-d7de390762ea",
    "name": "Tranexamic Acid & Mefenamic Acid Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg + 250 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Tranexamic Acid IP 500 mg Mefenamic Acid IP 250 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Tranexamic Acid",
      "Mefenamic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tranexamic Acid &Mefenamic Acid Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Tranexamic Acid — 500 mg; Mefenamic Acid — 250 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tranexamic Acid IP 500 mg Mefenamic Acid IP 250 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "sourceNumber": "128",
        "sourceRecordId": "source-0224"
      }
    ],
    "sources": [
      {
        "recordId": "source-0224",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 21,
        "number": "128"
      }
    ]
  },
  {
    "id": "p-eb32a84c4fb9",
    "name": "Tranexamic Acid Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "500 mg",
      "250 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Tranexamic Acid I.P. 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Tranexamic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Tranexamic Acid Tablets I.P.",
      "Tranexamic Acid Tablets IP 250 mg",
      "Tranexamic Acid Tablets IP 500 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Tranexamic Acid — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tranexamic Acid I.P. 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "sourceNumber": "72",
        "sourceRecordId": "source-0168"
      },
      {
        "label": "Standard formulation",
        "composition": "Tranexamic Acid — 250 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Tranexamic Acid IP 250 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 72,
        "sourceNumber": "449",
        "sourceRecordId": "source-0545"
      }
    ],
    "sources": [
      {
        "recordId": "source-0168",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 11,
        "number": "72"
      },
      {
        "recordId": "source-0545",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 72,
        "number": "449"
      },
      {
        "recordId": "source-0546",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 72,
        "number": "450"
      }
    ]
  },
  {
    "id": "p-07afa5b1633e",
    "name": "Triamcinolone Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "4 mg"
    ],
    "composition": "Each Uncoated Tablets Contains: Triamcinolone I.P. 4 mg Excipients q.s.",
    "ingredients": [
      "Triamcinolone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Triamcinolone Tablets I.P. 4 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Triamcinolone — 4 mg",
        "sourceComposition": "Each Uncoated Tablets Contains: Triamcinolone I.P. 4 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "410",
        "sourceRecordId": "source-0506"
      }
    ],
    "sources": [
      {
        "recordId": "source-0506",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "410"
      }
    ]
  },
  {
    "id": "p-f5ad75e1f6bf",
    "name": "Trypsin & Bromelain & Rutoside Trihydrate & Aceclofenac Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "48 mg + 90 mg + 100 mg + 100 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains: Trypsin B.P. 48 mg Bromelain 90 mg Rutoside Trihydrate B.P. 100 mg Aceclofenac I.P. 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Trypsin",
      "Bromelain",
      "Rutoside Trihydrate",
      "Aceclofenac"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Trypsin,Bromelain, Rutoside Trihydrate&Aceclofenac Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Trypsin — 48 mg; Bromelain — 90 mg; Rutoside Trihydrate — 100 mg; Aceclofenac — 100 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Trypsin B.P. 48 mg Bromelain 90 mg Rutoside Trihydrate B.P. 100 mg Aceclofenac I.P. 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 15,
        "sourceNumber": "95",
        "sourceRecordId": "source-0191"
      }
    ],
    "sources": [
      {
        "recordId": "source-0191",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 15,
        "number": "95"
      }
    ]
  },
  {
    "id": "p-f38872d9212d",
    "name": "Trypsin & Bromelain & Rutoside Trihydrate & Diclofenac Sodium Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "48 mg + 90 mg + 100 mg + 50 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains: Trypsin B.P. 48 mg Bromelain 90 mg Rutoside Trihydrate B.P. 100 mg Diclofenac Sodium I.P. 50 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Trypsin",
      "Bromelain",
      "Rutoside Trihydrate",
      "Diclofenac Sodium"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Trypsin, Bromelain, Rutoside Trihydrate &Diclofenac Sodium Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Trypsin — 48 mg; Bromelain — 90 mg; Rutoside Trihydrate — 100 mg; Diclofenac Sodium — 50 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Trypsin B.P. 48 mg Bromelain 90 mg Rutoside Trihydrate B.P. 100 mg Diclofenac Sodium I.P. 50 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "sourceNumber": "84",
        "sourceRecordId": "source-0180"
      }
    ],
    "sources": [
      {
        "recordId": "source-0180",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 13,
        "number": "84"
      }
    ]
  },
  {
    "id": "p-2ad956326cc7",
    "name": "Trypsin & Bromelain & Rutoside Trihydrate Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "48 mg + 90 mg + 100 mg",
      "96 mg + 180 mg + 200 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains: Trypsin B.P. 48 mg Bromelain 90 mg Rutoside Trihydrate B.P. 100 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Trypsin",
      "Bromelain",
      "Rutoside Trihydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Trypsin Bromelain &Rutoside Trihydrate Tablet",
      "Trypsin ,Bromelain & Rutoside Trihydrate Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Trypsin — 48 mg; Bromelain — 90 mg; Rutoside Trihydrate — 100 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Trypsin B.P. 48 mg Bromelain 90 mg Rutoside Trihydrate B.P. 100 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "sourceNumber": "114",
        "sourceRecordId": "source-0210"
      },
      {
        "label": "Enteric coated",
        "composition": "Trypsin — 96 mg; Bromelain — 180 mg; Rutoside Trihydrate — 200 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains: Trypsin BP 96 mg Bromelain 180 mg Rutoside Trihydrate BP 200 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 76,
        "sourceNumber": "468",
        "sourceRecordId": "source-0564"
      }
    ],
    "sources": [
      {
        "recordId": "source-0210",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 19,
        "number": "114"
      },
      {
        "recordId": "source-0564",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 76,
        "number": "468"
      }
    ]
  },
  {
    "id": "p-e2afd04a3777",
    "name": "Trypsin–Chymotrypsin & Aceclofenac & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50000 Armour units + 100 mg + 325 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: 50000Armourunitsofenzymaticactivitysuppliedbyapurified Concentratewhichhasspecific Trypsinand Chymotrypsinactivityinaratio of Approximately six to one. Aceclofenac I.P. 100 mg Paracetamol I.P. 325 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Trypsin–Chymotrypsin",
      "Aceclofenac",
      "Paracetamol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Trypsin-Chymotrypsin, Aceclofenac&Paracetamol Tablets"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Trypsin–Chymotrypsin — 50000 Armour units; Aceclofenac — 100 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: 50000Armourunitsofenzymaticactivitysuppliedbyapurified Concentratewhichhasspecific Trypsinand Chymotrypsinactivityinaratio of Approximately six to one. Aceclofenac I.P. 100 mg Paracetamol I.P. 325 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "sourceNumber": "107",
        "sourceRecordId": "source-0203"
      }
    ],
    "sources": [
      {
        "recordId": "source-0203",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 18,
        "number": "107"
      }
    ]
  },
  {
    "id": "p-bd1158963275",
    "name": "Trypsin–Chymotrypsin & Diclofenac Potassium & Paracetamol Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50000 Armour units + 50 mg + 325 mg"
    ],
    "composition": "Each Enteric Coated Tablet Contains : 50000 Armour Units of Enzymatic Activity supplied by a purified Concentrate which hs specific Trypsin & Chymotrypsinactivityinaratio of Approximately 6:1 Diclofenac Potassium IP 50 mg Paracetamol IP 325 mg Excipients q.s Approved Colour Used",
    "ingredients": [
      "Trypsin–Chymotrypsin",
      "Diclofenac Potassium",
      "Paracetamol"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Trypsin - Chymotrypsin , Diclofenac Potassium & Paracetamol Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Trypsin–Chymotrypsin — 50000 Armour units; Diclofenac Potassium — 50 mg; Paracetamol — 325 mg",
        "sourceComposition": "Each Enteric Coated Tablet Contains : 50000 Armour Units of Enzymatic Activity supplied by a purified Concentrate which hs specific Trypsin & Chymotrypsinactivityinaratio of Approximately 6:1 Diclofenac Potassium IP 50 mg Paracetamol IP 325 mg Excipients q.s Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "sourceNumber": "498",
        "sourceRecordId": "source-0594"
      }
    ],
    "sources": [
      {
        "recordId": "source-0594",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 81,
        "number": "498"
      }
    ]
  },
  {
    "id": "p-026be40bb5c8",
    "name": "Trypsin–Chymotrypsin Tablets",
    "division": "General",
    "category": "Pain & Orthopedics",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [
      "1,00,000 Armour units"
    ],
    "composition": "Each Enteric Coated Tablet Contains: 1,00,000Armour Unitsenzymaticactivitysuppliedbyapurified Concentratewhichhasspecific Trypsinand Chymotrypsinactivityina Ratioofsixtoone Excipients q.s. Approvedcolourused",
    "ingredients": [
      "Trypsin–Chymotrypsin"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Trypsin-Chymotrypsin Tablets"
    ],
    "variants": [
      {
        "label": "Enteric coated",
        "composition": "Trypsin–Chymotrypsin — 1,00,000 Armour units",
        "sourceComposition": "Each Enteric Coated Tablet Contains: 1,00,000Armour Unitsenzymaticactivitysuppliedbyapurified Concentratewhichhasspecific Trypsinand Chymotrypsinactivityina Ratioofsixtoone Excipients q.s. Approvedcolourused",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "sourceNumber": "124",
        "sourceRecordId": "source-0220"
      }
    ],
    "sources": [
      {
        "recordId": "source-0220",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "number": "124"
      }
    ]
  },
  {
    "id": "p-c6fa7631b6c6",
    "name": "Ubidecarenone Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [
      "100 mg"
    ],
    "composition": "Ubidecarenone (Coenzyme Q10 ) 100 mg",
    "ingredients": [
      "Ubidecarenone"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Ubidecarenone (Coenzyme Q10 ) 100 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ubidecarenone — 100 mg",
        "sourceComposition": "Ubidecarenone (Coenzyme Q10 ) 100 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 1,
        "sourceNumber": "9",
        "sourceRecordId": "source-0690"
      }
    ],
    "sources": [
      {
        "recordId": "source-0690",
        "pdf": "Product List-Softgel.pdf",
        "page": 1,
        "number": "9"
      }
    ]
  },
  {
    "id": "p-7ecc7c169fb0",
    "name": "Ulipristal Acetate Tablets",
    "division": "Hormones",
    "category": "Gynaecology & Endocrinology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Ulipristal Acetate I.P. 5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Ulipristal Acetate"
    ],
    "sourcePdf": "FORTSCHRITT HORMONES.pdf",
    "aliases": [
      "Ulipristal Acetate Tablets 5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ulipristal Acetate — 5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Ulipristal Acetate I.P. 5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "sourceNumber": "5",
        "sourceRecordId": "source-0605"
      }
    ],
    "sources": [
      {
        "recordId": "source-0605",
        "pdf": "FORTSCHRITT HORMONES.pdf",
        "page": 1,
        "number": "5"
      }
    ]
  },
  {
    "id": "p-913d467a8017",
    "name": "Ursodeoxycholic Acid Tablets",
    "division": "General",
    "category": "Gastroenterology",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "600 mg",
      "150 mg",
      "300 mg",
      "450 mg"
    ],
    "composition": "Each Uncoated Tablet Contains: Ursodeoxycholic Acid IP 600 mg Excipients q.s.",
    "ingredients": [
      "Ursodeoxycholic Acid"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Ursodeoxycholic Acid Tablets IP",
      "Ursodeoxycholic Acid Tablets I.P.",
      "Ursodeoxycholic Acid Tablets IP 300 mg",
      "Ursodeoxycholic Acid Sustained Release Tablets450 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Ursodeoxycholic Acid — 600 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Ursodeoxycholic Acid IP 600 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "sourceNumber": "17",
        "sourceRecordId": "source-0113"
      },
      {
        "label": "Standard formulation",
        "composition": "Ursodeoxycholic Acid — 150 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Ursodeoxycholic Acid I.P. 150 mg Excipients q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 14,
        "sourceNumber": "90",
        "sourceRecordId": "source-0186"
      },
      {
        "label": "Standard formulation",
        "composition": "Ursodeoxycholic Acid — 300 mg",
        "sourceComposition": "Each Uncoated Tablet Contains: Ursodeoxycholic Acid I.P. 300 mg Excipients Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "sourceNumber": "122",
        "sourceRecordId": "source-0218"
      },
      {
        "label": "Sustained release",
        "composition": "Ursodeoxycholic Acid — 450 mg",
        "sourceComposition": "Each Film Coated Sustained Release Tablet Contains: Ursodeoxycholic Acid IP 450 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "sourceNumber": "365",
        "sourceRecordId": "source-0461"
      }
    ],
    "sources": [
      {
        "recordId": "source-0113",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 3,
        "number": "17"
      },
      {
        "recordId": "source-0186",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 14,
        "number": "90"
      },
      {
        "recordId": "source-0218",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 20,
        "number": "122"
      },
      {
        "recordId": "source-0461",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 58,
        "number": "365"
      }
    ]
  },
  {
    "id": "p-38a74cabefd7",
    "name": "Vardenafil Hydrochloride Trihydrate Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "BP",
    "availableStrengths": [
      "10 mg",
      "20 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Vardenafil Hydrochloride Trihydrate Equivalentto Vardenafil BP 10 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Vardenafil Hydrochloride Trihydrate"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Vardenafil Tablets10 mg",
      "Vardenafil Tablets20 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Vardenafil Hydrochloride Trihydrate — 10 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Vardenafil Hydrochloride Trihydrate Equivalentto Vardenafil BP 10 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "417",
        "sourceRecordId": "source-0513"
      },
      {
        "label": "Standard formulation",
        "composition": "Vardenafil Hydrochloride Trihydrate — 20 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Vardenafil Hydrochloride Trihydrate Equivalentto Vardenafil BP 20 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "sourceNumber": "418",
        "sourceRecordId": "source-0514"
      }
    ],
    "sources": [
      {
        "recordId": "source-0513",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "417"
      },
      {
        "recordId": "source-0514",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 67,
        "number": "418"
      }
    ]
  },
  {
    "id": "p-b94cb43ad7a8",
    "name": "Vildagliptin & Metformin Hydrochloride Tablets",
    "division": "General",
    "category": "General Care",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "50 mg + 500 mg",
      "50 mg + 850 mg",
      "50 mg + 1000 mg",
      "Not specified + 50 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Vildagliptin IP 50 mg Metformin Hydrochloride IP 500 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Vildagliptin",
      "Metformin Hydrochloride"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Vildagliptin&Metformin HCl Tablets",
      "Vildagliptin&Metformin Hydrochloride Tablets IP"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Vildagliptin — 50 mg; Metformin Hydrochloride — 500 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Vildagliptin IP 50 mg Metformin Hydrochloride IP 500 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "sourceNumber": "254",
        "sourceRecordId": "source-0350"
      },
      {
        "label": "Standard formulation",
        "composition": "Vildagliptin — 50 mg; Metformin Hydrochloride — 850 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Vildagliptin IP 50 mg Metformin Hydrochloride IP 850 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "sourceNumber": "255",
        "sourceRecordId": "source-0351"
      },
      {
        "label": "Standard formulation",
        "composition": "Vildagliptin — 50 mg; Metformin Hydrochloride — 1000 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Vildagliptin IP 50 mg Metformin Hydrochloride IP 1000 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "sourceNumber": "256",
        "sourceRecordId": "source-0352"
      },
      {
        "label": "Standard formulation",
        "composition": "Vildagliptin; Metformin Hydrochloride — 50 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Vildagliptin Metformin Hydrochloride IP 50 mg Excipients IP 850 mg Approved Colour Used q.s.",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "sourceNumber": "353",
        "sourceRecordId": "source-0449"
      }
    ],
    "sources": [
      {
        "recordId": "source-0350",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "number": "254"
      },
      {
        "recordId": "source-0351",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 40,
        "number": "255"
      },
      {
        "recordId": "source-0352",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 41,
        "number": "256"
      },
      {
        "recordId": "source-0448",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 56,
        "number": "352"
      },
      {
        "recordId": "source-0449",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "number": "353"
      },
      {
        "recordId": "source-0450",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 57,
        "number": "354"
      }
    ]
  },
  {
    "id": "p-66f95a83d66c",
    "name": "Vitamin A, Vitamin B1, Vitamin B2 & Multinutrient Blend Capsules",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Vitamin A2000 iu, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 2 mg, Vitamin B3 18 mg, Cyanocobalamin 1 mcg, Manganese as Manganese Chloride 500 mcg, Dibasic Calcium Phosphate 0.5 mg, Folic Acid 200 mcg, Iodine as Potassium Iodide 150 mcg, Zinc as Zinc Oxide 12 mg",
    "ingredients": [
      "Vitamin A",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B3",
      "Cyanocobalamin",
      "Manganese as Manganese Chloride",
      "Dibasic Calcium Phosphate",
      "Folic Acid",
      "Iodine as Potassium Iodide",
      "Zinc as Zinc Oxide"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Vitamin A2000 iu, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 2 mg, Vitamin B3 18 mg, Cyanocobalamin 1 mcg, Manganese as Manganese Chloride 500 mcg, Dibasic Calcium Phosphate 0.5 mg, Folic Acid 200 mcg, Iodine as Potassium Iodide 150 mcg, Zinc as Zinc Oxide 12 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Vitamin A — 2000 iu; Vitamin B1 — 1.4 mg; Vitamin B2 — 1.6 mg; Vitamin B6 — 2 mg; Vitamin B3 — 18 mg; Cyanocobalamin — 1 mcg; Manganese as Manganese Chloride — 500 mcg; Dibasic Calcium Phosphate — 0.5 mg; Folic Acid — 200 mcg; Iodine as Potassium Iodide — 150 mcg; Zinc as Zinc Oxide — 12 mg",
        "sourceComposition": "Vitamin A2000 iu, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 2 mg, Vitamin B3 18 mg, Cyanocobalamin 1 mcg, Manganese as Manganese Chloride 500 mcg, Dibasic Calcium Phosphate 0.5 mg, Folic Acid 200 mcg, Iodine as Potassium Iodide 150 mcg, Zinc as Zinc Oxide 12 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "34",
        "sourceRecordId": "source-0801"
      }
    ],
    "sources": [
      {
        "recordId": "source-0801",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "34"
      }
    ]
  },
  {
    "id": "p-56395ea5b870",
    "name": "Vitamin A, Vitamin C, Vitamin B1 & Multinutrient Blend Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Vitamin A2000 iu, Vitamin C 40 mg, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 2 mg, Vitamin B5 5 mg, Vitamin B3 18 mg, Folic Acid 200 mcg, Vitamin E14.9 iu, Vitamin B12 1 mcg, Biotin 30 mcg, Vitamin D3 400 iu, Calcium as Calcium Carbonate 162 mg, Zinc as Zinc Oxide 12 mg, Iron as Ferrous Fumarate 17 mg, Chromium as Chromium Chloride 33 mcg, Copper as Copper Sulphate 1.35 mg, Manganese as Manganese Sulphate 1.4 mcg, Sodium as Sodium Carbonate 60 mcg",
    "ingredients": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B5",
      "Vitamin B3",
      "Folic Acid",
      "Vitamin E",
      "Vitamin B12",
      "Biotin",
      "Vitamin D3",
      "Calcium as Calcium Carbonate",
      "Zinc as Zinc Oxide",
      "Iron as Ferrous Fumarate",
      "Chromium as Chromium Chloride",
      "Copper as Copper Sulphate",
      "Manganese as Manganese Sulphate",
      "Sodium as Sodium Carbonate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Vitamin A2000 iu, Vitamin C 40 mg, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 2 mg, Vitamin B5 5 mg, Vitamin B3 18 mg, Folic Acid 200 mcg, Vitamin E14.9 iu, Vitamin B12 1 mcg, Biotin 30 mcg, Vitamin D3 400 iu, Calcium as Calcium Carbonate 162 mg, Zinc as Zinc Oxide 12 mg, Iron as Ferrous Fumarate 17 mg, Chromium as Chromium Chloride 33 mcg, Copper as Copper Sulphate 1.35 mg, Manganese as Manganese Sulphate 1.4 mcg, Sodium as Sodium Carbonate 60 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Vitamin A — 2000 iu; Vitamin C — 40 mg; Vitamin B1 — 1.4 mg; Vitamin B2 — 1.6 mg; Vitamin B6 — 2 mg; Vitamin B5 — 5 mg; Vitamin B3 — 18 mg; Folic Acid — 200 mcg; Vitamin E — 14.9 iu; Vitamin B12 — 1 mcg; Biotin — 30 mcg; Vitamin D3 — 400 iu; Calcium as Calcium Carbonate — 162 mg; Zinc as Zinc Oxide — 12 mg; Iron as Ferrous Fumarate — 17 mg; Chromium as Chromium Chloride — 33 mcg; Copper as Copper Sulphate — 1.35 mg; Manganese as Manganese Sulphate — 1.4 mcg; Sodium as Sodium Carbonate — 60 mcg",
        "sourceComposition": "Vitamin A2000 iu, Vitamin C 40 mg, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 2 mg, Vitamin B5 5 mg, Vitamin B3 18 mg, Folic Acid 200 mcg, Vitamin E14.9 iu, Vitamin B12 1 mcg, Biotin 30 mcg, Vitamin D3 400 iu, Calcium as Calcium Carbonate 162 mg, Zinc as Zinc Oxide 12 mg, Iron as Ferrous Fumarate 17 mg, Chromium as Chromium Chloride 33 mcg, Copper as Copper Sulphate 1.35 mg, Manganese as Manganese Sulphate 1.4 mcg, Sodium as Sodium Carbonate 60 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "20",
        "sourceRecordId": "source-0822"
      }
    ],
    "sources": [
      {
        "recordId": "source-0822",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "20"
      }
    ]
  },
  {
    "id": "p-cb59d127a006",
    "name": "Vitamin A, Vitamin E, Ascorbic Acid & Multinutrient Blend Capsules",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Capsule",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Vitamin A2000 iu, Vitamin E10 mg, Ascorbic Acid 40 mg, Copper as Copper Sulphate 1 mg, Lycopene 10% 6000 mcg, Manganese as Manganese Chloride 1.5 mg, Beta Carotene 10% 10 mg",
    "ingredients": [
      "Vitamin A",
      "Vitamin E",
      "Ascorbic Acid",
      "Copper as Copper Sulphate",
      "Lycopene",
      "Manganese as Manganese Chloride",
      "Beta Carotene"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Vitamin A2000 iu, Vitamin E10 mg, Ascorbic Acid 40 mg, Copper as Copper Sulphate 1 mg, Lycopene 10% 6000 mcg, Manganese as Manganese Chloride 1.5 mg, Beta Carotene 10% 10 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Vitamin A — 2000 iu; Vitamin E — 10 mg; Ascorbic Acid — 40 mg; Copper as Copper Sulphate — 1 mg; Lycopene — 6000 mcg; Manganese as Manganese Chloride — 1.5 mg; Beta Carotene — 10 mg",
        "sourceComposition": "Vitamin A2000 iu, Vitamin E10 mg, Ascorbic Acid 40 mg, Copper as Copper Sulphate 1 mg, Lycopene 10% 6000 mcg, Manganese as Manganese Chloride 1.5 mg, Beta Carotene 10% 10 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 4,
        "sourceNumber": "35",
        "sourceRecordId": "source-0802"
      }
    ],
    "sources": [
      {
        "recordId": "source-0802",
        "pdf": "Product List-Softgel.pdf",
        "page": 4,
        "number": "35"
      }
    ]
  },
  {
    "id": "p-724f89ce325c",
    "name": "Vitamin A, Vitamin E, Vitamin C & Multinutrient Blend Tablets",
    "division": "Nutraceuticals",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": "FOOD",
    "dosageForm": "Tablet",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Vitamin A2000 iu, Vitamin E10 iu, Vitamin C 40 mg, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 2 mg, Cyanocobalamin 1 mcg, Vitamin B3 2.1 mg, Folic Acid 200 mcg, Calcium Pantothenate 5 mg, Zinc as Zinc Oxide 12 mg, Copper as Copper Sulphate 1.35 mg, Manganese as Manganese Chloride 2.5 mg Chromium as Chromium Chloride 33 mcg",
    "ingredients": [
      "Vitamin A",
      "Vitamin E",
      "Vitamin C",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Cyanocobalamin",
      "Vitamin B3",
      "Folic Acid",
      "Calcium Pantothenate",
      "Zinc as Zinc Oxide",
      "Copper as Copper Sulphate",
      "Manganese as Manganese Chloride",
      "Chromium as Chromium Chloride"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Vitamin A2000 iu, Vitamin E10 iu, Vitamin C 40 mg, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 2 mg, Cyanocobalamin 1 mcg, Vitamin B3 2.1 mg, Folic Acid 200 mcg, Calcium Pantothenate 5 mg, Zinc as Zinc Oxide 12 mg, Copper as Copper Sulphate 1.35 mg, Manganese as Manganese Chloride 2.5 mg Chromium as Chromium Chloride 33 mcg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Vitamin A — 2000 iu; Vitamin E — 10 iu; Vitamin C — 40 mg; Vitamin B1 — 1.4 mg; Vitamin B2 — 1.6 mg; Vitamin B6 — 2 mg; Cyanocobalamin — 1 mcg; Vitamin B3 — 2.1 mg; Folic Acid — 200 mcg; Calcium Pantothenate — 5 mg; Zinc as Zinc Oxide — 12 mg; Copper as Copper Sulphate — 1.35 mg; Manganese as Manganese Chloride — 2.5 mg; Chromium as Chromium Chloride — 33 mcg",
        "sourceComposition": "Vitamin A2000 iu, Vitamin E10 iu, Vitamin C 40 mg, Vitamin B1 1.4 mg, Vitamin B2 1.6 mg, Vitamin B6 2 mg, Cyanocobalamin 1 mcg, Vitamin B3 2.1 mg, Folic Acid 200 mcg, Calcium Pantothenate 5 mg, Zinc as Zinc Oxide 12 mg, Copper as Copper Sulphate 1.35 mg, Manganese as Manganese Chloride 2.5 mg Chromium as Chromium Chloride 33 mcg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 5,
        "sourceNumber": "21",
        "sourceRecordId": "source-0823"
      }
    ],
    "sources": [
      {
        "recordId": "source-0823",
        "pdf": "Product List-Softgel.pdf",
        "page": 5,
        "number": "21"
      }
    ]
  },
  {
    "id": "p-430e578620eb",
    "name": "Vitamin-A, Vitamin-C, Vitamin E Acetate & Multinutrient Blend Softgel Capsules",
    "division": "Softgel",
    "category": "Nutraceuticals & Wellness",
    "regulatoryType": null,
    "dosageForm": "Softgel",
    "phRef": null,
    "availableStrengths": [],
    "composition": "Vitamin-A 1600 I.U. Vitamin-C 2.5 mg, Vitamin E Acetate 5 mg, Vitamin D3 100 I.U., Vitamin B1 1 mg, Vitamin B2 1 mg, Vitamin B6 0.5 mg, Vitamin B12 1 mcg, Foilic Acid 50 mcg, Niacinamide 15 mg, Calcium Pantothenate 5 mg, Iodine AS Ptassium Iodide 100 mcg, Magnesium AS Magnesium Sulphate 3 mg, Manganese AS Manganese Chloride 0.5 mg, Calcium AS Dibasic Calcium Phosphate 254.5 mg, Capper AS Copper Sulphate 45 mcg, Zinc AS Zinc Sulphate Monohydrate 0.5 mg, Molybdenum AS Sodium Molydate 0.1 mg",
    "ingredients": [
      "Vitamin-A",
      "Vitamin-C",
      "Vitamin E Acetate",
      "Vitamin D3",
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Foilic Acid",
      "Niacinamide",
      "Calcium Pantothenate",
      "Iodine AS Ptassium Iodide",
      "Magnesium AS Magnesium Sulphate",
      "Manganese AS Manganese Chloride",
      "Calcium AS Dibasic Calcium Phosphate",
      "Capper AS Copper Sulphate",
      "Zinc AS Zinc Sulphate Monohydrate",
      "Molybdenum AS Sodium Molydate"
    ],
    "sourcePdf": "Product List-Softgel.pdf",
    "aliases": [
      "Vitamin-A 1600 I.U. Vitamin-C 2.5 mg, Vitamin E Acetate 5 mg, Vitamin D3 100 I.U., Vitamin B1 1 mg, Vitamin B2 1 mg, Vitamin B6 0.5 mg, Vitamin B12 1 mcg, Foilic Acid 50 mcg, Niacinamide 15 mg, Calcium Pantothenate 5 mg, Iodine AS Ptassium Iodide 100 mcg, Magnesium AS Magnesium Sulphate 3 mg, Manganese AS Manganese Chloride 0.5 mg, Calcium AS Dibasic Calcium Phosphate 254.5 mg, Capper AS Copper Sulphate 45 mcg, Zinc AS Zinc Sulphate Monohydrate 0.5 mg, Molybdenum AS Sodium Molydate 0.1 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Vitamin-A — 1600 I.U; Vitamin-C — 2.5 mg; Vitamin E Acetate — 5 mg; Vitamin D3 — 100 I.U; Vitamin B1 — 1 mg; Vitamin B2 — 1 mg; Vitamin B6 — 0.5 mg; Vitamin B12 — 1 mcg; Foilic Acid — 50 mcg; Niacinamide — 15 mg; Calcium Pantothenate — 5 mg; Iodine AS Ptassium Iodide — 100 mcg; Magnesium AS Magnesium Sulphate — 3 mg; Manganese AS Manganese Chloride — 0.5 mg; Calcium AS Dibasic Calcium Phosphate — 254.5 mg; Capper AS Copper Sulphate — 45 mcg; Zinc AS Zinc Sulphate Monohydrate — 0.5 mg; Molybdenum AS Sodium Molydate — 0.1 mg",
        "sourceComposition": "Vitamin-A 1600 I.U. Vitamin-C 2.5 mg, Vitamin E Acetate 5 mg, Vitamin D3 100 I.U., Vitamin B1 1 mg, Vitamin B2 1 mg, Vitamin B6 0.5 mg, Vitamin B12 1 mcg, Foilic Acid 50 mcg, Niacinamide 15 mg, Calcium Pantothenate 5 mg, Iodine AS Ptassium Iodide 100 mcg, Magnesium AS Magnesium Sulphate 3 mg, Manganese AS Manganese Chloride 0.5 mg, Calcium AS Dibasic Calcium Phosphate 254.5 mg, Capper AS Copper Sulphate 45 mcg, Zinc AS Zinc Sulphate Monohydrate 0.5 mg, Molybdenum AS Sodium Molydate 0.1 mg",
        "sourcePdf": "Product List-Softgel.pdf",
        "page": 2,
        "sourceNumber": "14",
        "sourceRecordId": "source-0746"
      }
    ],
    "sources": [
      {
        "recordId": "source-0746",
        "pdf": "Product List-Softgel.pdf",
        "page": 2,
        "number": "14"
      }
    ]
  },
  {
    "id": "p-ff87126e0c9c",
    "name": "Voriconazole Tablets",
    "division": "General",
    "category": "Anti-Infective & Antibiotic",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "400 mg"
    ],
    "composition": "Each Film Coated Tablet Contains: Voriconazole I.P. 400 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Voriconazole"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Voriconazole Tablets I.P."
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Voriconazole — 400 mg",
        "sourceComposition": "Each Film Coated Tablet Contains: Voriconazole I.P. 400 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 17,
        "sourceNumber": "103",
        "sourceRecordId": "source-0199"
      }
    ],
    "sources": [
      {
        "recordId": "source-0199",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 17,
        "number": "103"
      }
    ]
  },
  {
    "id": "p-5cb0be9766df",
    "name": "Zopiclone Tablets",
    "division": "General",
    "category": "Neurology & Psychiatry",
    "regulatoryType": "DRUG",
    "dosageForm": "Tablet",
    "phRef": "IP",
    "availableStrengths": [
      "7.5 mg"
    ],
    "composition": "Each Film Coated Tablet Contains : Zopiclone IP 7.5 mg Excipients q.s. Approved Colour Used",
    "ingredients": [
      "Zopiclone"
    ],
    "sourcePdf": "FORTSCHRITT GENERAL.pdf",
    "aliases": [
      "Zopiclone Tablets IP 7.5 mg"
    ],
    "variants": [
      {
        "label": "Standard formulation",
        "composition": "Zopiclone — 7.5 mg",
        "sourceComposition": "Each Film Coated Tablet Contains : Zopiclone IP 7.5 mg Excipients q.s. Approved Colour Used",
        "sourcePdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "sourceNumber": "493",
        "sourceRecordId": "source-0589"
      }
    ],
    "sources": [
      {
        "recordId": "source-0589",
        "pdf": "FORTSCHRITT GENERAL.pdf",
        "page": 80,
        "number": "493"
      }
    ]
  }
];
