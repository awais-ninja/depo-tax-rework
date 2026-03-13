export const FEATURE_SETS = {
  'se-compliance': [
    'Self employment income included',
    'Employment income, including pension, benefits and expenses',
    'Preparation and filing of Self Assessment tax return',
    'Advice on tax liabilities and payment dates',
    'Acting as your agent with HMRC',
    'Free email reminders before deadlines',
  ],
  'se-core': [
    'Everything in Self Employed Compliance',
    'Bookkeeping – up to 100 transactions a month',
    'Dedicated accounts manager',
    'Free telephone and email support related to the package',
  ],
  'contractor-compliance': [
    'Free initial consultation',
    'Dealing with HMRC as your agent',
    'Micro-entity statutory accounts',
    'Full set of company accounts',
    'Corporation Tax return filing',
    'Confirmation statement filing',
    'Bookkeeping spreadsheet',
    'Payroll for director / small team (per band)',
  ],
  'contractor-core': [
    'Everything in Contractor Compliance',
    'Bookkeeping – up to 100 transactions a month',
    'Online accounting software',
    'Dedicated personal accountant',
    'Tax investigation insurance on selected bands',
    'Free phone and email support',
    'Email reminders before deadlines',
  ],
  'landlord-compliance': [
    'Personal tax return for rental income',
    'Property-by-property rental schedule',
    'Employment income, pensions and benefits included',
    'Advice on tax liabilities and payment dates',
    'Acting as agent with HMRC',
    'Automated email reminders',
  ],
  'landlord-core': [
    'Everything in Landlord Compliance',
    'Bookkeeping – up to 100 transactions a month',
    'Dedicated accounts manager',
    'Free telephone and email support',
    'Tax planning related to your property portfolio',
  ],
  'spv-compliance': [
    'Micro-entity SPV company accounts',
    'Full set of accounts for the SPV',
    'Corporation Tax return for the SPV',
    'Confirmation statement filing',
    'Bookkeeping spreadsheet',
    'Dealing with HMRC as agent',
    'Automated email reminders',
  ],
  'spv-core': [
    'Everything in SPV Compliance',
    'Bookkeeping – up to 100 transactions a month',
    'Dedicated personal accountant',
    'Online accounting software',
    'Tax planning advice for the SPV structure',
    'Free phone and email support',
  ],
};

// Package matrix derived from the CSV.
// For each business type and size band we store Compliance / Core / Growth
// monthly guide prices plus high-level metadata. Growth bands that are N/A
// in the sheet are represented with monthlyFrom: null.
