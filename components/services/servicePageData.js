/**
 * Reusable individual service page data structure.
 * Each service can override defaults; getServicePageData(slug) returns the full shape for the template.
 */

import { getServiceBySlug, SERVICE_CATEGORIES } from './servicesConfig';
import { SERVICE_DESCRIPTIONS } from './servicesCategoryContent';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

/**
 * Default page content when a service has no custom content yet.
 * Uses service label and category; overview/features/faqs use placeholders.
 */
function getDefaultPageData(service) {
  const categoryLabel = SERVICE_CATEGORIES[service.category] || service.category;
  const shortDesc = SERVICE_DESCRIPTIONS[service.slug] || `Professional ${service.label} support from DepoTax.`;

  return {
    slug: service.slug,
    title: service.label,
    category: service.category,
    categoryLabel,
    label: service.label,

    hero: {
      label: categoryLabel,
      title: service.label,
      description: shortDesc,
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Experienced UK accountants',
        'Clear, fixed-fee options',
        'Responsive support',
      ],
    },

    overview: {
      paragraphs: [
        `DepoTax provides professional ${service.label} support for businesses and individuals across the UK. We help you stay compliant and make informed decisions.`,
        `Our team takes the time to understand your situation and tailor our support to your needs. Whether you need ongoing help or one-off advice, we aim to deliver clear, reliable service.`,
      ],
    },

    features: {
      title: "What's Included",
      items: [
        { title: 'Expert support', description: 'Guidance from qualified professionals.' },
        { title: 'Compliance focus', description: 'Help meeting your filing and reporting obligations.' },
        { title: 'Clear communication', description: 'Straightforward advice and updates.' },
        { title: 'Tailored approach', description: 'Support designed around your situation.' },
      ],
    },

    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'This service is suitable for a range of clients who need reliable accounting and tax support.',
      items: ['Businesses and limited companies', 'Self-employed individuals', 'Contractors and freelancers', 'Landlords and property investors', 'Startups and growing companies'],
    },

    whyChoose: {
      title: 'Why Choose DepoTax',
      intro: 'We combine experience with a practical, client-focused approach so you receive dependable support and clear advice.',
      points: [
        'Experienced professionals',
        'Tailored support',
        'Clear and practical advice',
        'Responsive communication',
      ],
    },

    localSeoContent: null,

    faqs: [
      { question: `What is included in ${service.label}?`, answer: 'Our service is tailored to your needs and typically includes the core support required for compliance and reporting. We can outline exactly what is included when you speak with us.' },
      { question: 'How much does it cost?', answer: 'We offer clear pricing and fixed-fee options where possible. Contact us or book a consultation for a quote based on your situation.' },
      { question: 'How do I get started?', answer: 'You can book a consultation or contact our team. We will discuss your requirements and recommend the right level of support.' },
      { question: 'Do you work with clients across the UK?', answer: 'Yes. We support businesses and individuals across the UK, including London, Streatham, Camden, Fulham, Milton Keynes and beyond.' },
    ],

    cta: {
      heading: 'Ready to Get Started?',
      paragraph: 'Speak with DepoTax about your accounting and tax needs. We’ll help you find the right support and get you started.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
    },

    seo: {
      title: `${service.label} | DepoTax Accountants & Tax Consultants`,
      description: `${shortDesc} Expert support from DepoTax across the UK. Book a consultation or contact our team.`,
    },
  };
}

/**
 * Returns the full service page data for the given slug.
 * Uses custom content when defined in SERVICE_PAGE_OVERRIDES; otherwise returns default content.
 */
const SERVICE_PAGE_OVERRIDES = {
  'self-assessment': {
    title: 'Self Assessment',
    label: 'Self Assessment',

    hero: {
      label: 'Tax Services',
      title: 'Self Assessment Tax Return Services',
      description:
        'DepoTax helps individuals, self-employed professionals, landlords, contractors, and company directors prepare and submit accurate Self Assessment tax returns in the UK. We focus on accurate filing, HMRC compliance, and practical support so you can meet your obligations with reduced stress and clear guidance.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Accurate and timely filing',
        'Support for self-employed and landlords',
        'Practical HMRC compliance guidance',
      ],
    },

    overview: {
      paragraphs: [
        'Self Assessment is the system HMRC uses to collect Income Tax from individuals who do not pay all of their tax through PAYE. If you are self-employed, a company director, a landlord, or have significant income from other sources, you may need to complete a Self Assessment tax return each year.',
        'Filing on time and reporting your income and expenses correctly is essential to avoid penalties and stay compliant. Many people find the process complex, especially when they have multiple income streams, property income, or allowable expenses to claim.',
        'DepoTax supports clients with the full process: we review your income sources, prepare your return, advise on allowable expenses and reliefs, and submit your return to HMRC on your behalf. We help you meet deadlines and understand your tax position so you can plan with confidence.',
      ],
    },

    features: {
      title: "What's Included",
      items: [
        {
          title: 'Review of income sources',
          description: 'We review employment, self-employment, property, and other income so nothing is missed.',
        },
        {
          title: 'Preparation of Self Assessment return',
          description: 'We prepare your return accurately, including all relevant pages and supplementary forms.',
        },
        {
          title: 'Submission to HMRC',
          description: 'We submit your return to HMRC on your behalf and confirm receipt.',
        },
        {
          title: 'Advice on allowable expenses',
          description: 'We help you claim the right expenses and reliefs so you pay the correct amount of tax.',
        },
        {
          title: 'Support for landlord, contractor, and self-employed returns',
          description: 'We handle the specifics of rental income, CIS, and self-employment in your return.',
        },
        {
          title: 'Guidance on filing deadlines and tax payments',
          description: 'We remind you of key dates and help you plan for payments on account and balancing payments.',
        },
      ],
    },

    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our Self Assessment service is designed for anyone in the UK who needs to file a tax return and wants accurate, professional support.',
      items: [
        {
          name: 'Self-Employed Individuals',
          description: 'Sole traders and self-employed professionals who need to report business income and expenses and meet their tax obligations.',
        },
        {
          name: 'Company Directors',
          description: 'Directors who receive income or benefits outside of PAYE and need to report them via Self Assessment.',
        },
        {
          name: 'Property Landlords',
          description: 'Landlords with rental income who need to report property profits, claim allowable expenses, and file on time.',
        },
        {
          name: 'Contractors / Freelancers',
          description: 'Contractors and freelancers, including those in the CIS scheme, who need their tax return prepared and submitted correctly.',
        },
        {
          name: 'Individuals with Additional Income',
          description: 'Anyone with income from investments, capital gains, or other sources that must be declared to HMRC.',
        },
      ],
    },

    whyChoose: {
      title: 'Why Choose DepoTax for Self Assessment',
      intro: 'We focus on accuracy, clarity, and reliability so you can file with confidence.',
      points: [
        'Experienced tax return support for individuals and sole traders',
        'Clear and practical guidance on what to declare and what to claim',
        'Reliable filing and deadline support so you avoid late penalties',
        'Help with different income types, including property, self-employment, and dividends',
      ],
    },

    localSeoContent:
      'DepoTax provides Self Assessment tax return services to clients across the UK. Whether you are looking for a Self Assessment accountant in London, a tax return accountant in London, or Self Assessment support in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nOur team helps self-employed individuals, landlords, contractors, and directors with accurate return preparation and submission. We support clients locally and across the UK with the same attention to detail and compliance standards.\n\nUK Self Assessment tax return services are at the core of what we do. Get in touch to discuss your needs and how we can help you file accurately and on time.',

    faqs: [
      {
        question: 'Who needs to file a Self Assessment tax return in the UK?',
        answer:
          'You usually need to file a Self Assessment return if you are self-employed, a company director, a landlord receiving rental income, or have other income (such as investments or capital gains) that is not fully taxed at source. HMRC may also require you to file if your income is over certain thresholds or if you have been sent a notice to file.',
      },
      {
        question: 'What is the deadline for Self Assessment?',
        answer:
          'The online filing deadline for Self Assessment is 31 January after the end of the tax year. For example, for the tax year ending 5 April 2025, the deadline is 31 January 2026. Any tax due is also typically due by 31 January. We help you plan for these dates and can submit your return well in advance.',
      },
      {
        question: 'Can you help if I have income from property or freelance work?',
        answer:
          'Yes. We regularly support clients with rental income, self-employment income, and freelance or contractor work. We will include all relevant income and expenses in your return and advise on allowable deductions and reliefs so your return is accurate and compliant.',
      },
      {
        question: 'What records do I need for my tax return?',
        answer:
          'You will need records of your income (e.g. payslips, invoices, bank statements, rental income) and any allowable expenses. For self-employment, we need details of business income and costs. For property, we need rental income and expenses. We can provide a checklist and guide you on what to gather so the process is straightforward.',
      },
      {
        question: 'Can DepoTax submit my return to HMRC on my behalf?',
        answer:
          'Yes. Once we have prepared your return and you have approved it, we can submit it to HMRC on your behalf and confirm receipt. We will also help you understand any tax due and key payment dates.',
      },
    ],

    cta: {
      label: 'Get Started',
      heading: 'Need Help With Your Self Assessment Tax Return?',
      paragraph:
        'Speak with DepoTax for practical support with accurate filing and tax return preparation. We help self-employed individuals, landlords, contractors, and directors across the UK meet their Self Assessment obligations with confidence.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for self-employed individuals, landlords, contractors, and directors across the UK.',
    },

    seo: {
      title: 'Self Assessment Tax Return Accountant UK | DepoTax',
      description:
        'Expert Self Assessment tax return services for self-employed, landlords, contractors and directors. Accurate filing, HMRC compliance and practical support across the UK. Book a consultation.',
    },
  },

  'annual-accounts': {
    title: 'Annual Accounts',
    label: 'Annual Accounts',
    hero: {
      label: 'Accounting & Compliance',
      title: 'Annual Accounts Services for UK Businesses',
      description:
        'DepoTax helps limited companies and businesses prepare accurate year-end accounts, meet Companies House and HMRC requirements, and stay compliant. We provide preparation of annual accounts, filing support, and clear guidance so you can focus on running your business.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Accurate year-end reporting',
        'Companies House and HMRC alignment',
        'Clear deadline support',
      ],
    },
    overview: {
      paragraphs: [
        'Annual accounts are the statutory financial statements that limited companies must prepare and file each year. They summarise your company’s financial position, performance, and cash flows, and must meet both Companies House and HMRC requirements.',
        'Getting year-end reporting right is essential for compliance and for giving directors and stakeholders a clear picture of the business. Many small companies benefit from professional support to ensure accounts are prepared correctly and filed on time.',
        'DepoTax supports businesses with the full process: we review your financial records, prepare your annual accounts in the required format, and help with filing to Companies House and alignment with HMRC reporting. We also provide year-end compliance guidance and deadline support so you stay on track.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Preparation of annual accounts', description: 'We prepare your year-end accounts in line with UK reporting requirements.' },
        { title: 'Review of financial records', description: 'We review your records to ensure figures are accurate and complete.' },
        { title: 'Companies House filing support', description: 'We help you file your accounts with Companies House and meet filing deadlines.' },
        { title: 'HMRC reporting alignment', description: 'We ensure your accounts align with HMRC and corporation tax reporting.' },
        { title: 'Year-end compliance guidance', description: 'We advise on obligations and deadlines so you stay compliant.' },
        { title: 'Deadline support', description: 'We help you plan for and meet key filing dates.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our annual accounts service is for any UK limited company or business that needs accurate year-end reporting and compliance support.',
      items: [
        { name: 'Limited Companies', description: 'Companies that must prepare and file statutory accounts each year with Companies House and HMRC.' },
        { name: 'Small Business Owners', description: 'Owners who want accurate year-end figures and compliant filing without the burden of doing it in-house.' },
        { name: 'Startups', description: 'New companies that need clear, compliant first accounts and ongoing year-end support.' },
        { name: 'Directors', description: 'Directors who need reliable accounts for decision-making and statutory compliance.' },
        { name: 'Businesses needing year-end support', description: 'Any business that wants professional preparation and filing of annual accounts.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Annual Accounts',
      intro: 'We deliver accurate, compliant accounts and clear communication so you know where you stand.',
      points: [
        'Experienced preparation of statutory accounts for limited companies',
        'Clear explanation of your figures and filing obligations',
        'Reliable support for Companies House and HMRC deadlines',
        'Practical guidance so you understand your year-end position',
      ],
    },
    localSeoContent:
      'DepoTax provides annual accounts services to limited companies and businesses across the UK. Whether you need an annual accounts accountant in London, a limited company accountant in London, or year-end accounts support in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help businesses prepare and file annual accounts on time and in line with Companies House and HMRC requirements. Our team supports clients locally and across the UK with accurate reporting and compliance.\n\nAnnual accounts services are at the core of what we do for limited companies. Get in touch to discuss your year-end and filing needs.',
    faqs: [
      { question: 'What are annual accounts?', answer: 'Annual accounts are the statutory financial statements that limited companies must prepare each year. They include a balance sheet, profit and loss account, and supporting notes, and must be filed with Companies House and used for corporation tax reporting.' },
      { question: 'Who needs to file annual accounts?', answer: 'All UK limited companies must prepare and file annual accounts with Companies House. The requirement applies regardless of size, though small companies may be able to file abbreviated or simplified accounts depending on eligibility.' },
      { question: 'When are annual accounts due?', answer: 'Filing deadlines depend on your company’s accounting reference date. For most companies, accounts must be filed with Companies House within nine months of the end of the accounting period. We help you plan for and meet these dates.' },
      { question: 'Can DepoTax help with filing?', answer: 'Yes. We prepare your annual accounts and can support you with filing to Companies House. We also ensure your accounts align with HMRC and corporation tax requirements and will guide you through the process.' },
      { question: 'What records are needed?', answer: 'We need access to your financial records for the period: sales and purchase records, bank statements, payroll data if relevant, and any other supporting information. We can provide a checklist tailored to your situation.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Help Preparing Your Annual Accounts?',
      paragraph: 'Speak with DepoTax for year-end accounts preparation, Companies House filing, and compliance support. We help limited companies across the UK stay on top of their reporting obligations.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for limited companies and small businesses across the UK.',
    },
    seo: {
      title: 'Annual Accounts Services UK | Limited Company Accountant | DepoTax',
      description: 'Professional annual accounts preparation and filing for UK limited companies. Companies House and HMRC compliance, year-end support. London and UK-wide. Book a consultation.',
    },
  },

  'bookkeeping': {
    title: 'Bookkeeping',
    label: 'Bookkeeping',
    hero: {
      label: 'Accounting & Compliance',
      title: 'Bookkeeping Services for Clear and Accurate Financial Records',
      description:
        'DepoTax helps businesses maintain accurate day-to-day records, stay organised, and build a solid foundation for reporting and tax. We offer transaction recording, bank reconciliation, expense tracking, and cloud bookkeeping support so you have clear financial visibility.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Accurate transaction recording',
        'Organised sales and purchase records',
        'Cloud bookkeeping support',
      ],
    },
    overview: {
      paragraphs: [
        'Bookkeeping is the day-to-day recording of your business’s financial transactions. Done well, it gives you an accurate picture of income and expenditure, supports timely VAT and tax reporting, and makes year-end accounts preparation straightforward.',
        'Many small businesses struggle to keep on top of paperwork or lack the time to maintain records properly. Outsourcing bookkeeping to a qualified team helps you stay organised and compliant without diverting focus from running the business.',
        'DepoTax provides bookkeeping services tailored to your needs: we record transactions, organise sales and purchase records, support bank reconciliations, and can work with your preferred cloud software. Regular bookkeeping updates mean your figures are up to date and ready for reporting.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Recording financial transactions', description: 'We record income and expenditure accurately so your books reflect the true position.' },
        { title: 'Organising sales and purchase records', description: 'We keep sales and purchase documentation organised and easy to retrieve.' },
        { title: 'Bank reconciliation support', description: 'We help reconcile bank accounts to your records so nothing is missed.' },
        { title: 'Expense tracking', description: 'We track and categorise expenses to support VAT and tax claims.' },
        { title: 'Regular bookkeeping updates', description: 'We keep your books up to date on a schedule that suits your business.' },
        { title: 'Cloud bookkeeping support', description: 'We can work with cloud bookkeeping software so you have real-time visibility.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our bookkeeping service is for any business that wants accurate, organised financial records and better control over their numbers.',
      items: [
        { name: 'Small Businesses', description: 'Businesses that need reliable record-keeping without hiring in-house bookkeeping staff.' },
        { name: 'Limited Companies', description: 'Companies that want their books maintained to a high standard for accounts and tax.' },
        { name: 'Self-Employed Professionals', description: 'Sole traders and freelancers who want clear records for Self Assessment and VAT.' },
        { name: 'Startups', description: 'New businesses that want to establish good bookkeeping habits from day one.' },
        { name: 'Businesses needing better financial organisation', description: 'Any business that wants to get on top of paperwork and improve financial visibility.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Bookkeeping',
      intro: 'We keep your records accurate and organised so you can make decisions with confidence.',
      points: [
        'Experienced bookkeepers who understand UK compliance and reporting',
        'Clear, organised records that support VAT returns and year-end accounts',
        'Flexible arrangements including cloud bookkeeping to suit your workflow',
        'Responsive support so your books stay up to date',
      ],
    },
    localSeoContent:
      'DepoTax offers bookkeeping services to businesses across the UK. Whether you need bookkeeping services in London, a bookkeeper for small business, or cloud bookkeeping in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we provide the same high standard of care.\n\nWe help you maintain accurate records, reconcile bank accounts, and keep your books ready for VAT and year-end. Our team supports clients locally and across the UK with organised, compliant bookkeeping.\n\nBookkeeping support is the foundation of sound financial management. Get in touch to discuss how we can help your business stay on top of its records.',
    faqs: [
      { question: 'What is included in bookkeeping services?', answer: 'Our bookkeeping typically includes recording income and expenses, organising sales and purchase records, bank reconciliation, expense tracking, and regular updates. We can tailor the level of support to your business size and complexity.' },
      { question: 'Why is bookkeeping important?', answer: 'Accurate bookkeeping gives you a clear view of your finances, supports correct VAT and tax reporting, and makes year-end accounts preparation faster and more reliable. It also helps you spot issues early and make informed decisions.' },
      { question: 'Can bookkeeping help with tax and accounts preparation?', answer: 'Yes. Well-kept books mean your accountant has accurate data for VAT returns, management accounts, and annual accounts. This can reduce cost and delay and improve the accuracy of your reporting.' },
      { question: 'Do you use cloud bookkeeping software?', answer: 'We can work with popular cloud bookkeeping platforms so your data is up to date and accessible. We will recommend or support the right tools for your business.' },
      { question: 'Can DepoTax manage ongoing bookkeeping for my business?', answer: 'Yes. We offer ongoing bookkeeping on a monthly or quarterly basis, depending on your needs. We will agree a schedule and scope that keeps your records in good order.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Reliable Bookkeeping Support?',
      paragraph: 'Speak with DepoTax about bookkeeping for your business. We help you maintain accurate records and stay organised so reporting and tax are straightforward.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for small businesses, limited companies, and the self-employed across the UK.',
    },
    seo: {
      title: 'Bookkeeping Services UK | Small Business Bookkeeper | DepoTax',
      description: 'Professional bookkeeping services for UK businesses. Transaction recording, bank reconciliation, cloud bookkeeping. London and UK-wide. Book a consultation.',
    },
  },

  'management-accounts': {
    title: 'Management Accounts',
    label: 'Management Accounts',
    hero: {
      label: 'Accounting & Compliance',
      title: 'Management Accounts Services for Better Business Visibility',
      description:
        'DepoTax helps business owners understand performance, monitor cashflow, and make informed decisions with regular management accounts. We provide monthly or periodic reporting, profit and loss summaries, and cashflow visibility tailored to your business.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Regular profit and loss and cashflow insight',
        'Clear performance reporting',
        'Informed decision-making support',
      ],
    },
    overview: {
      paragraphs: [
        'Management accounts are internal financial reports that help you understand how your business is performing. Unlike statutory annual accounts, they are not a legal requirement but are a valuable tool for monitoring profit, cashflow, and key metrics on a regular basis.',
        'Many growing businesses use monthly or quarterly management accounts to spot trends, manage cashflow, and plan ahead. They give directors and owners the visibility needed to make timely decisions rather than waiting for year-end figures.',
        'DepoTax prepares management accounts tailored to your business: we can produce profit and loss summaries, cashflow reports, and key business figures on a schedule that works for you. Our aim is to give you clear, actionable insight so you can run your business with confidence.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Monthly or periodic reporting', description: 'We prepare management reports on a schedule that suits you—monthly, quarterly, or as agreed.' },
        { title: 'Profit and loss summaries', description: 'We summarise revenue, costs, and profit so you see performance at a glance.' },
        { title: 'Cashflow visibility', description: 'We help you understand cash in and out and plan for upcoming commitments.' },
        { title: 'Financial performance review', description: 'We highlight key figures and trends so you can act on them.' },
        { title: 'Key business figures reporting', description: 'We report on the metrics that matter most to your business.' },
        { title: 'Ongoing reporting support', description: 'We provide consistent, comparable reports so you can track progress over time.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our management accounts service is for businesses that want regular financial insight to support decision-making.',
      items: [
        { name: 'Limited Companies', description: 'Companies that want internal reporting in addition to statutory year-end accounts.' },
        { name: 'Growing Businesses', description: 'Businesses that need to monitor performance and cashflow as they scale.' },
        { name: 'Directors', description: 'Directors who want clear, timely figures for planning and strategy.' },
        { name: 'Startups needing financial visibility', description: 'Early-stage businesses that want to track burn rate, revenue, and key metrics.' },
        { name: 'Businesses wanting regular reporting', description: 'Any business that prefers not to wait until year-end for financial insight.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Management Accounts',
      intro: 'We deliver clear, timely reporting so you can focus on running your business.',
      points: [
        'Practical management reports that highlight what matters',
        'Regular reporting so you see trends and act in good time',
        'Clear explanation of figures and what they mean for your business',
        'Flexible reporting frequency to match your needs',
      ],
    },
    localSeoContent:
      'DepoTax provides management accounts services to businesses across the UK. Whether you need management accounts services in London, a business reporting accountant, or monthly management accounts support in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you understand performance and cashflow with regular, clear reporting. Our team supports clients locally and across the UK with tailored management accounts.\n\nUK management accounts services help you make better decisions. Get in touch to discuss your reporting needs.',
    faqs: [
      { question: 'What are management accounts?', answer: 'Management accounts are internal financial reports—such as profit and loss and cashflow summaries—prepared for business owners and directors. They are not legally required but are widely used to monitor performance and support decision-making.' },
      { question: 'How often should management accounts be prepared?', answer: 'Many businesses have monthly or quarterly management accounts. The right frequency depends on your size, complexity, and how you use the information. We can recommend a schedule that suits you.' },
      { question: 'Are management accounts required by law?', answer: 'No. Unlike statutory annual accounts, management accounts are not a legal requirement. They are a voluntary tool to help you run your business more effectively.' },
      { question: 'How can management accounts help my business?', answer: 'They give you timely visibility over profit, cashflow, and key metrics so you can spot issues, plan ahead, and make informed decisions. They are especially useful for growing businesses and those with tight cashflow.' },
      { question: 'Can DepoTax prepare monthly management reports?', answer: 'Yes. We can prepare management accounts on a monthly, quarterly, or other agreed basis. We will tailor the content and format to what you find most useful.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Better Financial Visibility for Your Business?',
      paragraph: 'Speak with DepoTax about management accounts and regular reporting. We help you understand performance and cashflow so you can make informed decisions.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for limited companies and growing businesses across the UK.',
    },
    seo: {
      title: 'Management Accounts Services UK | Business Reporting | DepoTax',
      description: 'Monthly and periodic management accounts for UK businesses. Profit and loss, cashflow, performance reporting. London and UK-wide. Book a consultation.',
    },
  },

  'payroll': {
    title: 'Payroll',
    label: 'Payroll',
    hero: {
      label: 'Accounting & Compliance',
      title: 'Payroll Services for Accurate and Reliable Employee Pay Management',
      description:
        'DepoTax helps employers run payroll accurately, meet PAYE obligations, and reduce the admin burden. We offer payroll processing, payslip preparation, employer reporting support, and deadline management so you can focus on your team and your business.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Accurate payroll processing',
        'PAYE compliance support',
        'Clear deadline management',
      ],
    },
    overview: {
      paragraphs: [
        'Payroll is the process of calculating and paying your employees correctly, deducting tax and National Insurance, and reporting to HMRC under PAYE. Getting it right is essential for your staff and for compliance—errors can lead to penalties and extra work to correct.',
        'Many small and growing businesses outsource payroll to ensure calculations are accurate, RTI submissions are on time, and they stay on top of statutory requirements such as pensions auto-enrolment. A dedicated payroll service frees you to focus on running the business.',
        'DepoTax provides payroll services tailored to your workforce: we process payroll, prepare payslips, support PAYE reporting and submissions, and help you manage deadlines. We work with you to ensure your employees are paid correctly and HMRC receives the right information on time.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Payroll processing', description: 'We calculate pay, tax, and National Insurance in line with current rules.' },
        { title: 'PAYE support', description: 'We help you meet PAYE obligations and submit RTI information to HMRC.' },
        { title: 'Payslip preparation', description: 'We prepare payslips for your employees so they have a clear record of pay and deductions.' },
        { title: 'Employer reporting support', description: 'We support P45s, P60s, and other employer reporting as required.' },
        { title: 'Payroll deadline management', description: 'We help you meet payment and reporting deadlines so you avoid late penalties.' },
        { title: 'Ongoing payroll administration', description: 'We provide continuous payroll support so you have one less thing to worry about.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our payroll service is for any employer that wants accurate, compliant pay management without the burden of running it in-house.',
      items: [
        { name: 'Small Businesses', description: 'Businesses with employees that need reliable payroll and PAYE support.' },
        { name: 'Limited Companies', description: 'Companies that want payroll handled by experienced professionals.' },
        { name: 'Employers with growing teams', description: 'Businesses that are hiring and want payroll that scales with them.' },
        { name: 'Directors needing payroll support', description: 'Directors who prefer to outsource pay and reporting to focus on the business.' },
        { name: 'Businesses wanting compliant payroll processing', description: 'Any employer that wants to avoid errors and stay on the right side of HMRC.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Payroll',
      intro: 'We take care of the calculations and reporting so you can focus on your people.',
      points: [
        'Accurate payroll processing in line with current tax and NI rules',
        'Reliable PAYE and RTI submission support',
        'Clear communication and deadline reminders',
        'Suitable for small and growing employer teams',
      ],
    },
    localSeoContent:
      'DepoTax offers payroll services to employers across the UK. Whether you need payroll services in London, a payroll accountant for small business, or PAYE support in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we provide the same high standard of service.\n\nWe help you process payroll, meet PAYE reporting requirements, and keep your records in order. Our team supports clients locally and across the UK with accurate, compliant payroll.\n\nUK payroll services take the stress out of pay management. Get in touch to discuss your payroll needs.',
    faqs: [
      { question: 'What is included in payroll services?', answer: 'Our payroll service typically includes calculating pay, tax, and National Insurance, preparing payslips, submitting RTI information to HMRC, and supporting P45s, P60s, and other employer reporting. We can also help with deadline management and ongoing administration.' },
      { question: 'Can DepoTax manage monthly payroll?', answer: 'Yes. We can run your payroll on a monthly, weekly, or other pay frequency to match your business. We will process each pay run and handle the associated reporting.' },
      { question: 'What payroll records do employers need to keep?', answer: 'Employers must keep records of pay, deductions, and reporting for HMRC. We maintain the necessary records as part of our service and can advise on what you need to retain for your own files.' },
      { question: 'Can you help with PAYE reporting?', answer: 'Yes. We support full PAYE reporting including RTI submissions, end-of-year forms, and other employer obligations. We ensure submissions are accurate and on time.' },
      { question: 'Is payroll support suitable for small businesses?', answer: 'Yes. Our payroll service is designed for small and medium-sized employers. We keep the process simple and transparent so you know what is being reported and when.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Professional Payroll Support?',
      paragraph: 'Speak with DepoTax about payroll for your business. We help you pay your team accurately and meet PAYE obligations with minimal fuss.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for small businesses and employers across the UK.',
    },
    seo: {
      title: 'Payroll Services UK | PAYE & Small Business Payroll | DepoTax',
      description: 'Professional payroll services for UK employers. Payroll processing, PAYE support, payslips. London and UK-wide. Book a consultation.',
    },
  },

  'vat-returns': {
    title: 'VAT Returns',
    label: 'VAT Returns',
    hero: {
      label: 'Accounting & Compliance',
      title: 'VAT Returns Services for Accurate Filing and Compliance',
      description:
        'DepoTax helps VAT-registered businesses prepare and submit accurate VAT returns, stay compliant with HMRC, and meet filing deadlines. We offer VAT record review, return preparation, submission support, and ongoing VAT-related guidance.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Accurate VAT return preparation',
        'HMRC filing and compliance support',
        'Clear deadline guidance',
      ],
    },
    overview: {
      paragraphs: [
        'VAT-registered businesses must submit VAT returns to HMRC on a regular basis—usually quarterly—and pay or reclaim VAT according to the return. Getting the figures right and filing on time is essential to avoid interest, penalties, and unnecessary HMRC attention.',
        'Many businesses use an accountant to review their records, prepare the return, and submit it on their behalf. This reduces the risk of errors and ensures compliance with VAT rules, including the correct treatment of zero-rated, exempt, and standard-rated supplies.',
        'DepoTax supports VAT-registered businesses with the full process: we review your VAT records, prepare your return, and can submit it to HMRC on your behalf. We also provide filing deadline guidance and ongoing VAT compliance support so you stay on track.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'VAT record review', description: 'We review your sales and purchase records to ensure VAT is correctly recorded.' },
        { title: 'VAT return preparation', description: 'We prepare your VAT return accurately using your records and accounting data.' },
        { title: 'Submission support', description: 'We can submit your return to HMRC on your behalf and confirm receipt.' },
        { title: 'Filing deadline guidance', description: 'We remind you of key dates and help you plan for payment or repayment.' },
        { title: 'VAT compliance support', description: 'We advise on VAT treatment and help you stay compliant.' },
        { title: 'Ongoing VAT-related assistance', description: 'We provide continued support for your VAT obligations as they arise.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our VAT returns service is for any VAT-registered business that wants accurate filing and compliance support.',
      items: [
        { name: 'VAT-Registered Businesses', description: 'Businesses that must submit VAT returns and want them prepared and filed correctly.' },
        { name: 'Limited Companies', description: 'Companies that are VAT-registered and need return preparation and submission support.' },
        { name: 'Small Businesses', description: 'Small businesses that want to avoid VAT errors and stay on top of deadlines.' },
        { name: 'Growing Businesses', description: 'Businesses whose VAT complexity is increasing and who want professional support.' },
        { name: 'Businesses needing regular VAT support', description: 'Any VAT-registered business that prefers to outsource return preparation and filing.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for VAT Returns',
      intro: 'We help you file accurately and on time so VAT does not become a burden.',
      points: [
        'Experienced VAT return preparation and submission support',
        'Clear guidance on VAT treatment and compliance',
        'Reliable deadline management so you avoid late filing penalties',
        'Support for different VAT schemes and reporting requirements',
      ],
    },
    localSeoContent:
      'DepoTax provides VAT returns services to businesses across the UK. Whether you need a VAT returns accountant in London, VAT filing support for businesses, or a VAT accountant in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you prepare and submit VAT returns accurately and on time. Our team supports clients locally and across the UK with VAT compliance and filing.\n\nVAT return services across the UK are a core part of our compliance offering. Get in touch to discuss your VAT needs.',
    faqs: [
      { question: 'Who needs to submit VAT returns?', answer: 'All VAT-registered businesses must submit VAT returns to HMRC. Registration is required when your taxable turnover exceeds the threshold (or you can register voluntarily). Returns are usually due quarterly.' },
      { question: 'How often are VAT returns submitted?', answer: 'Most businesses submit quarterly VAT returns. The exact dates depend on your stagger. Some businesses may be on annual returns. We will work to your schedule and remind you of deadlines.' },
      { question: 'What records are needed for VAT returns?', answer: 'We need records of VATable sales and purchases, including invoices and accounting records. We can work from your bookkeeping or accounting system and will advise if anything is missing.' },
      { question: 'Can DepoTax submit VAT returns to HMRC?', answer: 'Yes. Once we have prepared your return and you have approved it, we can submit it to HMRC on your behalf and confirm receipt. We will also help you understand any payment or repayment due.' },
      { question: 'Can you help if I am behind on VAT filings?', answer: 'Yes. We can help you catch up on late returns and work with you to get back on track. Contact us to discuss your situation and we will outline the steps needed.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Help With Your VAT Returns?',
      paragraph: 'Speak with DepoTax about VAT return preparation and filing. We help VAT-registered businesses across the UK stay compliant and meet their obligations.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for VAT-registered businesses across the UK.',
    },
    seo: {
      title: 'VAT Returns Services UK | VAT Accountant | DepoTax',
      description: 'VAT return preparation and filing for UK businesses. HMRC compliance, deadline support. London and UK-wide. Book a consultation.',
    },
  },

  'confirmation-statement': {
    title: 'Confirmation Statement',
    label: 'Confirmation Statement',
    hero: {
      label: 'Accounting & Compliance',
      title: 'Confirmation Statement Services for Ongoing Companies House Compliance',
      description:
        'DepoTax helps limited companies keep their Companies House records accurate and up to date with confirmation statement support. We review company details, prepare and file the confirmation statement, and provide deadline reminders so you stay compliant.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Accurate company information at Companies House',
        'Filing support and deadline reminders',
        'Director and shareholder record checks',
      ],
    },
    overview: {
      paragraphs: [
        'The confirmation statement is an annual filing that confirms the information held by Companies House about your company is correct. It covers directors, shareholders, registered address, SIC codes, and other key details. All UK limited companies must file one at least once every 12 months.',
        'Filing on time is a legal requirement. Failing to file can result in the company being struck off the register. Many directors prefer to have an accountant review the details and handle the filing so nothing is missed or incorrect.',
        'DepoTax supports companies with the full process: we review your company details, prepare the confirmation statement, and can file it with Companies House on your behalf. We also provide filing deadline reminders and ongoing compliance guidance so your company records stay in good order.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Review of company details', description: 'We check the information Companies House holds about your company.' },
        { title: 'Confirmation statement preparation', description: 'We prepare the confirmation statement with the correct, up-to-date details.' },
        { title: 'Companies House filing support', description: 'We can file the confirmation statement with Companies House on your behalf.' },
        { title: 'Shareholder and director information checks', description: 'We help ensure director and shareholder details are accurate and complete.' },
        { title: 'Filing deadline reminders', description: 'We remind you when your confirmation statement is due so you do not miss the date.' },
        { title: 'Ongoing compliance guidance', description: 'We advise on Companies House obligations and when to update your details.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our confirmation statement service is for any UK limited company that wants to keep its Companies House records correct and filed on time.',
      items: [
        { name: 'Limited Companies', description: 'All UK limited companies must file a confirmation statement; we help you do it correctly.' },
        { name: 'Company Directors', description: 'Directors who want to ensure company details are accurate and filing is handled professionally.' },
        { name: 'New Companies', description: 'Newly formed companies that need to file their first confirmation statement and establish good habits.' },
        { name: 'Small Businesses', description: 'Small companies that prefer to outsource compliance filings to focus on the business.' },
        { name: 'Businesses wanting support with compliance filings', description: 'Any company that wants filing and record-keeping support at Companies House.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Confirmation Statements',
      intro: 'We keep your company details in order and your filings on time.',
      points: [
        'Accurate review and preparation of confirmation statement details',
        'Reliable filing support so you meet your annual obligation',
        'Clear reminders so you never miss the filing window',
        'Practical guidance on when to update company information',
      ],
    },
    localSeoContent:
      'DepoTax provides confirmation statement services to companies across the UK. Whether you need confirmation statement filing in London, Companies House compliance support, or an accountant for confirmation statement in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you keep your company information accurate and filed on time. Our team supports clients locally and across the UK with Companies House compliance.\n\nConfirmation statement support across the UK helps keep your company in good standing. Get in touch to discuss your filing needs.',
    faqs: [
      { question: 'What is a confirmation statement?', answer: 'The confirmation statement is an annual filing that confirms to Companies House that the information they hold about your company—directors, shareholders, address, SIC codes, etc.—is correct. It replaced the old annual return and must be filed at least once every 12 months.' },
      { question: 'Who needs to file a confirmation statement?', answer: 'All UK limited companies must file a confirmation statement. There are no exemptions. The filing is due at least once every 12 months from the date of the last confirmation statement (or incorporation).' },
      { question: 'How often must it be filed?', answer: 'You must file at least once every 12 months. You can file more often if your details change. The filing deadline is 14 days after the end of your review period; late filing can lead to the company being struck off.' },
      { question: 'What information is included?', answer: 'The confirmation statement confirms (or updates) details such as registered office, directors, shareholders, share capital, and SIC codes. If anything has changed, you can update it as part of the filing.' },
      { question: 'Can DepoTax file it on my behalf?', answer: 'Yes. We can review your company details, prepare the confirmation statement, and file it with Companies House on your behalf. We will confirm once the filing has been accepted.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Help Filing Your Confirmation Statement?',
      paragraph: 'Speak with DepoTax about confirmation statement preparation and filing. We help limited companies across the UK keep their Companies House records accurate and compliant.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for limited companies across the UK.',
    },
    seo: {
      title: 'Confirmation Statement Services UK | Companies House Filing | DepoTax',
      description: 'Confirmation statement preparation and filing for UK limited companies. Companies House compliance. London and UK-wide. Book a consultation.',
    },
  },

  'corporation-tax': {
    title: 'Corporation Tax',
    label: 'Corporation Tax',
    hero: {
      label: 'Tax Services',
      title: 'Corporation Tax Services for UK Limited Companies',
      description:
        'DepoTax helps limited companies understand, prepare for, and meet their corporation tax obligations accurately and on time. We provide calculation support, filing preparation, HMRC compliance guidance, and deadline reminders so you stay in control.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Accurate corporation tax calculations',
        'Filing and deadline support',
        'HMRC compliance guidance',
      ],
    },
    overview: {
      paragraphs: [
        'Corporation tax is the tax that UK limited companies pay on their profits. Companies must calculate their liability, file a Corporation Tax Return (CT600) with HMRC, and pay the tax by the due date. Getting the figures right and filing on time is essential to avoid interest and penalties.',
        'Many directors rely on their accountant to handle the calculations and filing. Professional support helps ensure profits are correctly computed, reliefs and allowances are applied where appropriate, and HMRC receives the return and payment on time.',
        'DepoTax supports limited companies with corporation tax from start to finish: we review your financial data, help with calculations, prepare and support your filing, and provide deadline reminders. We also offer ongoing corporation tax support so you can plan ahead with confidence.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Corporation tax calculation support', description: 'We help you calculate your taxable profits and corporation tax liability correctly.' },
        { title: 'Review of company financial data', description: 'We review your accounts and records to ensure the tax computation is accurate.' },
        { title: 'Filing preparation support', description: 'We support preparation of your Corporation Tax Return and associated computations.' },
        { title: 'HMRC compliance guidance', description: 'We advise on filing obligations, payment dates, and compliance requirements.' },
        { title: 'Deadline reminders', description: 'We help you stay on top of filing and payment deadlines so you avoid late penalties.' },
        { title: 'Ongoing corporation tax support', description: 'We provide continued support for your corporation tax obligations as they arise.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our corporation tax service is for any UK limited company that wants accurate, compliant handling of its corporation tax.',
      items: [
        { name: 'Limited Companies', description: 'UK limited companies that must calculate and pay corporation tax on their profits.' },
        { name: 'Company Directors', description: 'Directors who want professional support with corporation tax filing and compliance.' },
        { name: 'Small Businesses', description: 'Small companies that prefer to outsource tax calculations and filing to focus on the business.' },
        { name: 'Startups', description: 'New companies that need clear guidance on corporation tax from their first accounting period.' },
        { name: 'Growing Businesses', description: 'Companies whose tax position is becoming more complex and who want reliable support.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Corporation Tax',
      intro: 'We help you meet your obligations accurately and on time so you can focus on running your company.',
      points: [
        'Experienced corporation tax support for UK limited companies',
        'Clear explanation of your liability and filing requirements',
        'Reliable deadline and payment date support',
        'Practical guidance tailored to your company’s situation',
      ],
    },
    localSeoContent:
      'DepoTax provides corporation tax services to limited companies across the UK. Whether you need a corporation tax accountant in London, limited company tax support, or corporation tax help in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you calculate your liability, prepare your return, and file on time. Our team supports clients locally and across the UK with HMRC compliance and deadline management.\n\nCorporation tax services across the UK are a core part of our tax offering. Get in touch to discuss your company’s corporation tax needs.',
    faqs: [
      { question: 'What is corporation tax?', answer: 'Corporation tax is the tax paid by UK limited companies (and some other entities) on their profits. It is separate from Income Tax and is calculated on the company’s taxable profits for each accounting period.' },
      { question: 'Who has to pay corporation tax?', answer: 'All UK resident limited companies are subject to corporation tax on their worldwide profits. Non-resident companies may also have UK corporation tax obligations on UK-source income. We can advise on your specific position.' },
      { question: 'When is corporation tax due?', answer: 'Payment is typically due nine months and one day after the end of your accounting period. The filing deadline for the Corporation Tax Return is usually 12 months after the end of the accounting period. We help you plan for both dates.' },
      { question: 'Can DepoTax help with corporation tax filing?', answer: 'Yes. We support the calculation of your taxable profits, preparation of your return and computations, and can guide you through filing and payment. We also provide deadline reminders and ongoing support.' },
      { question: 'What records are needed for corporation tax?', answer: 'We need your company accounts and supporting records for the period: sales, purchases, expenses, and any adjustments for tax. We can provide a checklist and work with your existing records and accounts.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Support With Corporation Tax?',
      paragraph: 'Speak with DepoTax about corporation tax for your limited company. We help you calculate, file, and pay on time with clear, practical support.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for limited companies across the UK.',
    },
    seo: {
      title: 'Corporation Tax Services UK | Limited Company Tax | DepoTax',
      description: 'Corporation tax calculation, filing and compliance for UK limited companies. HMRC support, deadline guidance. London and UK-wide. Book a consultation.',
    },
  },

  'capital-gains-tax': {
    title: 'Capital Gains Tax',
    label: 'Capital Gains Tax',
    hero: {
      label: 'Tax Services',
      title: 'Capital Gains Tax Support for Individuals and Property Owners',
      description:
        'DepoTax helps individuals understand and manage capital gains tax (CGT) on property disposals and other chargeable assets. We provide guidance on obligations, reporting support, and practical advice so you report gains correctly and meet HMRC requirements.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'CGT guidance for property and other assets',
        'Reporting and compliance support',
        'Practical tax advice',
      ],
    },
    overview: {
      paragraphs: [
        'Capital gains tax is charged on the profit you make when you sell or otherwise dispose of an asset that has increased in value. Common triggers include selling a second property, disposing of shares or investments, or selling a business asset. The rules can be complex, especially for property and for reporting deadlines.',
        'Since April 2020, most UK residential property gains must be reported and paid within 60 days of completion. Other gains may be reported through Self Assessment. Getting the calculation and reporting right is important to avoid penalties and interest.',
        'DepoTax supports individuals with capital gains tax: we review your disposal details, advise on the tax position, help with reporting (including the 60-day property return where applicable), and provide timeline and deadline guidance. We give practical, professional advice tailored to your situation.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Review of asset disposal details', description: 'We review what you have sold or disposed of and the figures involved.' },
        { title: 'Capital gains tax guidance', description: 'We advise on whether CGT applies, how to calculate the gain, and what reliefs may be available.' },
        { title: 'Reporting support', description: 'We help you report gains to HMRC, including 60-day property returns and Self Assessment where relevant.' },
        { title: 'Property-related gain support', description: 'We support reporting of gains on UK residential property in line with current rules.' },
        { title: 'Timeline and deadline guidance', description: 'We explain when to report and pay so you meet HMRC deadlines.' },
        { title: 'Practical tax advice', description: 'We give clear, actionable advice so you understand your position and obligations.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our capital gains tax service is for anyone who has disposed of chargeable assets and needs to understand or report the tax.',
      items: [
        { name: 'Property Owners', description: 'Individuals who have sold a second home, rental property, or other chargeable property.' },
        { name: 'Landlords', description: 'Landlords who have disposed of rental property and need to report the gain.' },
        { name: 'Individuals Selling Assets', description: 'Anyone who has sold shares, investments, or other assets that may give rise to CGT.' },
        { name: 'Investors', description: 'Investors with gains on disposals who need calculation and reporting support.' },
        { name: 'Clients needing CGT reporting support', description: 'Anyone who wants professional help to calculate and report capital gains correctly.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Capital Gains Tax',
      intro: 'We help you understand your obligations and report gains correctly.',
      points: [
        'Practical guidance on CGT for property and other assets',
        'Support with 60-day reporting and Self Assessment where relevant',
        'Clear explanation of reliefs and how they apply',
        'Responsive support so you meet reporting and payment deadlines',
      ],
    },
    localSeoContent:
      'DepoTax provides capital gains tax support to individuals across the UK. Whether you need a capital gains tax accountant in London, property tax advice in Streatham, or CGT support in Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you calculate gains, report to HMRC, and understand your tax position. Our team supports clients locally and across the UK with CGT reporting and compliance.\n\nCapital gains tax services across the UK are part of our tax offering. Get in touch to discuss your disposal and reporting needs.',
    faqs: [
      { question: 'What is capital gains tax?', answer: 'Capital gains tax is a tax on the profit you make when you sell or give away an asset that has increased in value. It applies to assets such as property (that is not your main home), shares, and certain other investments. There are annual exemptions and reliefs that may reduce or eliminate the tax.' },
      { question: 'Do I pay capital gains tax on property sales?', answer: 'You may have to pay CGT on the sale of a second home, buy-to-let property, or other UK residential property that is not fully covered by private residence relief. Since 2020, most UK residential property gains must be reported and paid within 60 days of completion.' },
      { question: 'When must capital gains tax be reported?', answer: 'For UK residential property disposals, a separate return and payment are typically due within 60 days of completion. Other gains are usually reported through Self Assessment. We can advise on the correct route and deadlines for your situation.' },
      { question: 'What information is needed?', answer: 'We need details of the asset, acquisition and disposal dates, costs (including purchase price, improvements, and allowable costs), and sale proceeds. We can provide a checklist and work through the figures with you.' },
      { question: 'Can DepoTax help calculate and report gains?', answer: 'Yes. We review your disposal details, calculate the gain (and any reliefs), advise on reporting obligations, and can support you with 60-day returns and Self Assessment as needed.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Help With Capital Gains Tax?',
      paragraph: 'Speak with DepoTax about capital gains tax on property or other assets. We help you report gains correctly and meet HMRC deadlines.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for individuals and property owners across the UK.',
    },
    seo: {
      title: 'Capital Gains Tax Services UK | CGT & Property | DepoTax',
      description: 'Capital gains tax support for individuals and property owners. CGT reporting, 60-day returns, property gains. London and UK-wide. Book a consultation.',
    },
  },

  'tax-planning': {
    title: 'Tax Planning',
    label: 'Tax Planning',
    hero: {
      label: 'Tax Services',
      title: 'Tax Planning Services for Individuals and Businesses',
      description:
        'DepoTax provides practical tax planning support to help you manage your tax obligations efficiently and make informed financial decisions. We review your position, discuss business and personal tax considerations, and offer tailored guidance so you can plan ahead with confidence.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Practical tax planning guidance',
        'Business and personal tax considerations',
        'Ongoing advisory support',
      ],
    },
    overview: {
      paragraphs: [
        'Tax planning is the process of organising your affairs in a way that manages your tax liability within the law. It is about understanding your obligations, using reliefs and allowances appropriately, and making decisions that support your financial goals. Effective tax planning is proactive rather than reactive.',
        'Whether you are a business owner, director, landlord, or have a more complex personal tax position, reviewing your position regularly can help you avoid surprises and make the most of available reliefs. Professional advice can clarify what is possible and what to consider before the year-end or a significant transaction.',
        'DepoTax offers tax planning as part of our advisory service: we review your current position, discuss business and personal tax considerations, and provide practical guidance on future tax efficiency. We can support one-off planning discussions or ongoing advisory so you stay informed and in control.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Review of current tax position', description: 'We review your income, gains, and structure to understand your overall tax position.' },
        { title: 'Practical planning guidance', description: 'We give clear, actionable advice on how to manage your tax within the rules.' },
        { title: 'Business and personal tax considerations', description: 'We consider both business and personal tax so you see the full picture.' },
        { title: 'Support with future tax efficiency', description: 'We advise on timing, structure, and reliefs that may reduce your tax in the future.' },
        { title: 'Ongoing advisory support', description: 'We can provide continued tax planning input as your situation changes.' },
        { title: 'Tailored tax planning discussions', description: 'We tailor our advice to your circumstances and goals.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our tax planning service is for anyone who wants to understand their tax position better and plan more effectively.',
      items: [
        { name: 'Business Owners', description: 'Owners who want to manage business and personal tax efficiently and plan for the future.' },
        { name: 'Company Directors', description: 'Directors who want to optimise remuneration, dividends, and company structure from a tax perspective.' },
        { name: 'Self-Employed Professionals', description: 'Sole traders and freelancers who want to plan for Self Assessment and make the most of allowances.' },
        { name: 'Landlords', description: 'Landlords who want to understand property tax and plan for income, gains, and structure.' },
        { name: 'Individuals with more complex tax positions', description: 'Anyone with multiple income sources, investments, or gains who wants clear planning advice.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Tax Planning',
      intro: 'We give practical, tailored advice so you can make informed decisions.',
      points: [
        'Practical tax guidance that fits your situation',
        'Support for both business and personal tax planning',
        'Clear explanation of options and trade-offs',
        'Responsive advisory when you need to make decisions',
      ],
    },
    localSeoContent:
      'DepoTax provides tax planning services to individuals and businesses across the UK. Whether you need a tax planning accountant in London, business tax planning in Streatham, or tax advisory support in Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you understand your position and plan for tax efficiency within the law. Our team supports clients locally and across the UK with practical, tailored tax planning.\n\nTax planning services across the UK help you stay in control of your tax. Get in touch to discuss your planning needs.',
    faqs: [
      { question: 'What is tax planning?', answer: 'Tax planning is the legitimate process of organising your financial affairs to manage your tax liability. It involves understanding your obligations, using reliefs and allowances correctly, and making informed decisions about timing and structure.' },
      { question: 'Is tax planning suitable for small businesses?', answer: 'Yes. Even small businesses and sole traders can benefit from reviewing their position—for example, around year-end, capital expenditure, or remuneration. We provide practical advice scaled to your size and complexity.' },
      { question: 'Can tax planning help directors and landlords?', answer: 'Yes. Directors often need advice on salary versus dividends, pension contributions, and company structure. Landlords may need guidance on property income, allowable expenses, and planning for disposals. We advise on both.' },
      { question: 'When should tax planning be reviewed?', answer: 'It is sensible to review at least annually, and before significant transactions or life changes. We can agree a rhythm that suits you—for example, ahead of the tax year-end or when you are considering a major decision.' },
      { question: 'Can DepoTax provide ongoing tax planning advice?', answer: 'Yes. We offer ongoing advisory as part of our service. We can schedule regular reviews and be on hand when you need to make decisions that have tax implications.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Practical Tax Planning Support?',
      paragraph: 'Speak with DepoTax about tax planning for your business or personal affairs. We help you understand your position and plan with confidence.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for businesses, directors, and individuals across the UK.',
    },
    seo: {
      title: 'Tax Planning Services UK | Business & Personal Tax | DepoTax',
      description: 'Practical tax planning for individuals and businesses. Tax efficiency, reliefs, business and personal tax. London and UK-wide. Book a consultation.',
    },
  },

  'non-resident-landlord-tax': {
    title: 'Non-Resident Landlord Tax',
    label: 'Non-Resident Landlord Tax',
    hero: {
      label: 'Tax Services',
      title: 'Non-Resident Landlord Tax Services',
      description:
        'DepoTax supports landlords who live outside the UK and need help understanding and meeting their UK tax obligations on rental income. We provide guidance on the non-resident landlord scheme, Self Assessment where required, and UK tax reporting so you stay compliant.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'UK rental income reporting support',
        'Non-resident landlord scheme guidance',
        'Practical compliance support',
      ],
    },
    overview: {
      paragraphs: [
        'If you own UK rental property but live abroad, you still have UK tax obligations on that income. The non-resident landlord scheme may require your letting agent or tenant to deduct basic-rate tax from rental income before paying you, unless HMRC has approved you to receive rent gross. You may also need to complete a UK Self Assessment return to report your rental income and claim reliefs or a refund.',
        'Navigating these rules can be complex. Many overseas landlords use a UK accountant to ensure they report correctly, claim allowable expenses, and meet deadlines. Professional support helps avoid errors and ensures you only pay the tax that is due.',
        'DepoTax supports non-resident landlords with UK rental income: we review your position, advise on the non-resident landlord scheme and Self Assessment, help with UK tax reporting, and provide deadline guidance. We offer ongoing support so you can manage your UK property tax with confidence.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Review of rental income position', description: 'We review your UK rental income and current tax position.' },
        { title: 'Non-resident landlord tax guidance', description: 'We advise on the NRL scheme, gross payment approval, and your reporting obligations.' },
        { title: 'Self Assessment support where needed', description: 'We help you complete and submit a UK Self Assessment return if required.' },
        { title: 'UK tax reporting support', description: 'We support reporting of UK rental income to HMRC in line with the rules.' },
        { title: 'Deadline guidance', description: 'We help you meet UK filing and payment deadlines.' },
        { title: 'Ongoing landlord tax support', description: 'We provide continued support for your UK property tax obligations.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our non-resident landlord tax service is for anyone who lives outside the UK and has UK rental income.',
      items: [
        { name: 'Overseas Landlords', description: 'Landlords living abroad who let UK property and need to meet UK tax obligations.' },
        { name: 'Non-Resident Property Owners', description: 'Property owners who are not UK resident but receive UK rental income.' },
        { name: 'Clients with UK Rental Income', description: 'Anyone with UK lettings income who needs to report it correctly to HMRC.' },
        { name: 'Landlords needing UK tax return support', description: 'Overseas landlords who must file a UK Self Assessment or other return.' },
        { name: 'Property investors living abroad', description: 'Investors who hold UK rental assets and want professional UK tax support.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Non-Resident Landlord Tax',
      intro: 'We help you meet your UK tax obligations on rental income with clear, practical support.',
      points: [
        'Experience with non-resident landlord rules and UK reporting',
        'Clear guidance on the NRL scheme and Self Assessment',
        'Practical support so you report correctly and on time',
        'Responsive communication for clients based overseas',
      ],
    },
    localSeoContent:
      'DepoTax provides non-resident landlord tax services to clients across the UK and overseas. Whether you need a non-resident landlord accountant in London, overseas landlord tax support, or a landlord tax accountant in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you report UK rental income, comply with the non-resident landlord scheme, and meet UK filing deadlines. Our team supports clients locally and across the UK with UK non-resident landlord tax services.\n\nGet in touch to discuss your UK rental income and compliance needs.',
    faqs: [
      { question: 'What is the non-resident landlord scheme?', answer: 'The non-resident landlord scheme requires UK letting agents or tenants to deduct basic-rate tax from rental income before paying it to landlords whose usual place of abode is outside the UK, unless HMRC has approved the landlord to receive rent gross. Landlords may then need to complete a UK tax return to report income and claim reliefs.' },
      { question: 'Do I need to file a UK tax return as an overseas landlord?', answer: 'If you have UK rental income and are non-UK resident, you may need to complete a UK Self Assessment return to report the income, claim allowable expenses, and settle any additional tax or claim a refund. We can advise on your specific obligations.' },
      { question: 'Can DepoTax help with UK rental income reporting?', answer: 'Yes. We support non-resident landlords with Self Assessment returns, reporting of UK rental income, and guidance on the non-resident landlord scheme. We can prepare and submit your return and help you understand your UK tax position.' },
      { question: 'What records should I keep?', answer: 'You should keep records of rental income, allowable expenses (e.g. repairs, management fees, mortgage interest within the rules), and any tax deducted at source. We can provide a checklist and work with the information you have.' },
      { question: 'Can you support ongoing non-resident landlord compliance?', answer: 'Yes. We offer ongoing support for non-resident landlords, including annual return preparation, deadline reminders, and advice when your circumstances or the rules change.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Help With Non-Resident Landlord Tax?',
      paragraph: 'Speak with DepoTax about UK tax on your rental income. We help overseas landlords report correctly and stay compliant with HMRC.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for non-resident landlords with UK property across the UK and overseas.',
    },
    seo: {
      title: 'Non-Resident Landlord Tax UK | Overseas Landlord Tax | DepoTax',
      description: 'Non-resident landlord tax services for UK rental income. NRL scheme, Self Assessment, UK reporting. London and UK-wide. Book a consultation.',
    },
  },

  'startup-support': {
    title: 'Startup Support',
    label: 'Startup Support',
    hero: {
      label: 'Business Advisory',
      title: 'Startup Support Services for New Businesses in the UK',
      description:
        'DepoTax supports startups and new business owners with the financial and practical foundations needed to start properly and operate with confidence. We provide early financial setup, accounting and tax basics, and practical guidance so you can focus on building your business.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Practical setup and record-keeping guidance',
        'Accounting and tax basics for new businesses',
        'Ongoing support as you grow',
      ],
    },
    overview: {
      paragraphs: [
        'Starting a business brings excitement and challenge. Getting the financial and administrative foundations right from the outset helps you trade with confidence, stay compliant, and avoid costly mistakes later. Many new founders benefit from practical guidance on structure, record-keeping, and early tax and accounting requirements.',
        'Whether you are setting up as a sole trader or planning to form a company, understanding what records to keep, when to register for tax or VAT, and how to stay on top of deadlines is essential. Professional support can demystify the basics and set you up for a smooth first year.',
        'DepoTax offers startup support tailored to new businesses: we advise on initial setup, accounting and tax basics, record-keeping and structure, and early compliance. We provide practical support for new business owners and can continue to support you as the business develops.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Initial business setup guidance', description: 'We help you understand the right structure and what to put in place from day one.' },
        { title: 'Support with accounting and tax basics', description: 'We explain registration, record-keeping, and key deadlines in plain language.' },
        { title: 'Advice on record-keeping and structure', description: 'We advise on what to keep, how to organise it, and when to consider a limited company.' },
        { title: 'Practical support for new business owners', description: 'We answer your questions and give you clear, actionable next steps.' },
        { title: 'Ongoing support as the business develops', description: 'We can scale our support as you grow and your needs change.' },
        { title: 'Guidance on early compliance requirements', description: 'We help you meet HMRC and Companies House obligations from the start.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our startup support service is for anyone launching a new business in the UK and wanting practical financial and compliance guidance.',
      items: [
        { name: 'New Business Owners', description: 'Individuals who have just started or are about to start trading and need a clear roadmap.' },
        { name: 'Startups', description: 'Early-stage businesses that want to get their finances and compliance right from the beginning.' },
        { name: 'First-Time Founders', description: 'Founders who have not run a business before and want practical, jargon-free support.' },
        { name: 'Small New Ventures', description: 'New ventures that need light-touch but reliable accounting and tax guidance.' },
        { name: 'Entrepreneurs needing practical setup guidance', description: 'Anyone who wants to start correctly without getting lost in admin.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Startup Support',
      intro: 'We give you the practical foundations you need so you can focus on your business.',
      points: [
        'Practical guidance tailored to new and early-stage businesses',
        'Clear explanation of accounting and tax basics without jargon',
        'Structured support that grows with you',
        'Responsive communication when you have questions',
      ],
    },
    localSeoContent:
      'DepoTax provides startup support to new businesses across the UK. Whether you need a startup accountant in London, startup support for new businesses, or a new business accountant in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you set up correctly, keep the right records, and meet early compliance requirements. Our team supports clients locally and across the UK with practical startup accounting support.\n\nStartup accounting support across the UK helps new businesses start with confidence. Get in touch to discuss your new venture.',
    faqs: [
      { question: 'What support do startups need from an accountant?', answer: 'Startups typically need guidance on structure (sole trader vs limited company), record-keeping, tax registration (Self Assessment, VAT if applicable), and key deadlines. An accountant can also help with basic bookkeeping habits and year-end compliance so you start on the right foot.' },
      { question: 'Can DepoTax help new businesses from the start?', answer: 'Yes. We work with businesses from pre-trading and first sale. We advise on setup, registration, and what to do in the first months, and can provide ongoing support as you grow.' },
      { question: 'What records should a startup keep?', answer: 'You should keep records of all income and expenses, bank statements, invoices and receipts, and any contracts or agreements. We can give you a simple checklist and recommend tools or systems that suit a new business.' },
      { question: 'Is startup support useful before trading begins?', answer: 'Yes. Getting advice before you trade can help you choose the right structure, understand what to register for, and set up record-keeping from day one. We can guide you through the options and next steps.' },
      { question: 'Can you support a startup as it grows?', answer: 'Yes. We design our support to scale with you—from initial setup and basics to bookkeeping, accounts, tax, and more advanced advisory as your business develops.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Starting a New Business and Need Support?',
      paragraph: 'Speak with DepoTax about startup support. We help new business owners get the financial and practical foundations right so you can trade with confidence.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for startups and new businesses across the UK.',
    },
    seo: {
      title: 'Startup Support UK | New Business Accountant | DepoTax',
      description: 'Startup support and new business accounting. Setup, record-keeping, tax basics. London and UK-wide. Book a consultation.',
    },
  },

  'company-formation': {
    title: 'Company Formation',
    label: 'Company Formation',
    hero: {
      label: 'Business Advisory',
      title: 'Company Formation Services for New UK Businesses',
      description:
        'DepoTax helps new business owners form a UK limited company correctly and start with the right structure. We provide company formation support, guidance on business structure, and practical help with director and shareholder setup so you launch with confidence.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Company formation and structure guidance',
        'Director and shareholder setup support',
        'Support after incorporation',
      ],
    },
    overview: {
      paragraphs: [
        'Forming a limited company gives you a separate legal entity, limited liability, and often a more professional image. The process involves choosing a name, registering with Companies House, appointing directors and shareholders, and understanding your ongoing obligations. Getting it right from the start avoids delays and compliance issues.',
        'Many entrepreneurs use an accountant or formation agent to handle the incorporation and ensure the company is set up correctly. Professional support can also clarify whether a limited company is the right choice compared to operating as a sole trader, and what to do after formation.',
        'DepoTax supports company formation: we guide you on business structure, assist with company formation, help with director and shareholder setup, and provide early compliance awareness. We also support you after incorporation so you meet your first filing and reporting obligations.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Company formation support', description: 'We help you form your limited company and register with Companies House.' },
        { title: 'Guidance on business structure', description: 'We advise on sole trader vs limited company and what suits your situation.' },
        { title: 'Basic setup support', description: 'We assist with the steps needed to get your company up and running.' },
        { title: 'Director and shareholder setup guidance', description: 'We help you understand roles, shares, and initial appointments.' },
        { title: 'Early compliance awareness', description: 'We explain your first obligations so you know what to do after formation.' },
        { title: 'Support after incorporation', description: 'We can support you with confirmation statements, accounts, and tax after you have formed.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our company formation service is for anyone who wants to set up a UK limited company with the right support.',
      items: [
        { name: 'New Company Directors', description: 'First-time directors who want the company formed correctly and guidance on their role.' },
        { name: 'Startups', description: 'Startups that have decided to trade as a limited company and need a smooth formation process.' },
        { name: 'Entrepreneurs', description: 'Entrepreneurs who want to incorporate with professional support and clear next steps.' },
        { name: 'Small Business Founders', description: 'Founders who want to set up a company without the hassle of doing it alone.' },
        { name: 'Clients moving from sole trader to limited company', description: 'Sole traders who are incorporating and want guidance on the transition.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Company Formation',
      intro: 'We help you form your company correctly and understand what happens next.',
      points: [
        'Practical company formation and structure guidance',
        'Clear explanation of director and shareholder setup',
        'Support that continues after incorporation',
        'Dependable advice so you launch with confidence',
      ],
    },
    localSeoContent:
      'DepoTax provides company formation services to new businesses across the UK. Whether you need a company formation accountant in London, to set up a company in the UK, or company formation support in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you form your limited company and understand your first compliance steps. Our team supports clients locally and across the UK with UK company formation support.\n\nGet in touch to discuss forming your company and what support you need after incorporation.',
    faqs: [
      { question: 'What is involved in forming a company?', answer: 'Forming a UK limited company involves choosing a company name, registering with Companies House, appointing at least one director, issuing shares, and setting a registered office. You will need to provide details of directors and shareholders and agree the company’s articles of association.' },
      { question: 'Can DepoTax help set up a limited company?', answer: 'Yes. We support the company formation process, guide you on structure and setup, and can assist with the steps required to register your company. We also advise on what to do after incorporation.' },
      { question: 'Should I operate as a sole trader or limited company?', answer: 'The right choice depends on your plans, risk, tax position, and preference. A limited company offers limited liability and can be more tax-efficient in some cases; a sole trader structure is simpler. We can discuss the pros and cons for your situation.' },
      { question: 'What details are needed for company formation?', answer: 'You will need proposed company name, registered office address, details of director(s) and shareholder(s), share capital and class of shares, and information about persons with significant control (PSC). We can provide a checklist and guide you through each item.' },
      { question: 'Can you support the company after formation?', answer: 'Yes. We offer ongoing support including confirmation statements, annual accounts, corporation tax, and general compliance so you meet your obligations from the first year onwards.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Help Setting Up a Company?',
      paragraph: 'Speak with DepoTax about company formation. We help you form your limited company correctly and support you from incorporation onwards.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for new companies across the UK.',
    },
    seo: {
      title: 'Company Formation UK | Set Up a Limited Company | DepoTax',
      description: 'Company formation and limited company setup. Structure guidance, director setup. London and UK-wide. Book a consultation.',
    },
  },

  'cashflow-forecasting': {
    title: 'Cashflow Forecasting',
    label: 'Cashflow Forecasting',
    hero: {
      label: 'Business Advisory',
      title: 'Cashflow Forecasting Services for Better Financial Planning',
      description:
        'DepoTax helps businesses understand future cash movement, improve planning, and make better financial decisions. We provide cashflow forecasting support, visibility over expected income and outgoings, and practical business planning guidance so you can plan with confidence.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Cashflow visibility and planning support',
        'Practical forecasting guidance',
        'Ongoing forecasting support',
      ],
    },
    overview: {
      paragraphs: [
        'Cashflow forecasting is the process of estimating how much money will flow in and out of your business over a future period. It helps you see when you might have surpluses or shortfalls, plan for tax and other payments, and make informed decisions about spending, investment, and funding. Many businesses that struggle do so because of cashflow rather than lack of profit—forecasting helps you stay ahead.',
        'Even simple forecasts can make a big difference. By reviewing income and expenditure patterns and projecting forward, you can identify pinch points, plan for seasonal variation, and prepare for large outgoings. Professional support can help you build a forecast that is realistic and useful for decision-making.',
        'DepoTax provides cashflow forecasting support: we help you build a forecast, review income and expenditure patterns, and plan for future financial needs. We offer visibility over expected cash movement and ongoing guidance so you can update and use your forecast as your business develops.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Cashflow forecasting support', description: 'We help you create and maintain a cashflow forecast that works for your business.' },
        { title: 'Review of income and expenditure patterns', description: 'We review your historical data to inform realistic assumptions.' },
        { title: 'Planning for future financial needs', description: 'We help you plan for tax, loan repayments, and other known or likely outgoings.' },
        { title: 'Visibility over expected cash movement', description: 'We help you see when cash is likely to come in and go out.' },
        { title: 'Practical business planning support', description: 'We link the forecast to your business decisions and planning.' },
        { title: 'Ongoing forecasting guidance', description: 'We support you to update and refine your forecast as circumstances change.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our cashflow forecasting service is for any business that wants better visibility and control over its finances.',
      items: [
        { name: 'Growing Businesses', description: 'Businesses that are scaling and need to plan for increased outgoings and timing of cash.' },
        { name: 'Limited Companies', description: 'Companies that want to manage working capital and plan for corporation tax and dividends.' },
        { name: 'Startups', description: 'Startups that want to understand runway and plan for early-stage costs.' },
        { name: 'Directors', description: 'Directors who want a clear view of future cash to support decision-making.' },
        { name: 'Businesses wanting better financial control', description: 'Any business that wants to avoid surprises and plan with more confidence.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Cashflow Forecasting',
      intro: 'We help you see the road ahead so you can plan and decide with confidence.',
      points: [
        'Practical forecasting support tailored to your business',
        'Clear visibility over cash in and out',
        'Structured approach that you can maintain and update',
        'Responsive support when your position or plans change',
      ],
    },
    localSeoContent:
      'DepoTax provides cashflow forecasting services to businesses across the UK. Whether you need a cashflow forecasting accountant in London, business cashflow planning support, or cashflow advisory in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you build and use a cashflow forecast for better planning and decision-making. Our team supports clients locally and across the UK with cashflow forecasting services.\n\nCashflow forecasting services across the UK help businesses plan with confidence. Get in touch to discuss your forecasting needs.',
    faqs: [
      { question: 'What is cashflow forecasting?', answer: 'Cashflow forecasting is the process of estimating future cash inflows and outflows over a period (e.g. 12 months). It shows when you expect to receive money and when you need to pay it out, so you can plan for surpluses and shortfalls.' },
      { question: 'Why is cashflow forecasting important?', answer: 'Many businesses fail due to running out of cash rather than lack of profit. A forecast helps you see pinch points in advance, plan for tax and other payments, and make better decisions about spending, investment, and borrowing.' },
      { question: 'Can cashflow forecasting help small businesses?', answer: 'Yes. Even simple monthly or quarterly forecasts can help small businesses plan for VAT, tax, and seasonal variation. We tailor the depth and detail to your size and needs.' },
      { question: 'How often should forecasts be reviewed?', answer: 'We recommend reviewing at least monthly and updating when significant changes occur—for example, a large new contract or an unexpected cost. We can agree a rhythm that suits you.' },
      { question: 'Can DepoTax provide ongoing forecasting support?', answer: 'Yes. We can help you build your initial forecast and then support you to update and refine it on an ongoing basis as your business and assumptions change.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Clearer Cashflow Forecasting Support?',
      paragraph: 'Speak with DepoTax about cashflow forecasting. We help you understand future cash movement and plan with confidence.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for businesses across the UK.',
    },
    seo: {
      title: 'Cashflow Forecasting UK | Business Cashflow Planning | DepoTax',
      description: 'Cashflow forecasting and business planning. Visibility, forecasting support. London and UK-wide. Book a consultation.',
    },
  },

  'cfo-advisory': {
    title: 'CFO Advisory',
    label: 'CFO Advisory',
    hero: {
      label: 'Business Advisory',
      title: 'CFO Advisory Services for Strategic Financial Support',
      description:
        'DepoTax provides higher-level financial guidance for businesses that need strategic input, better reporting, and stronger financial oversight. Our CFO advisory service offers financial oversight, business reporting guidance, and strategic discussions so you can make informed decisions and grow with confidence.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Strategic financial support',
        'Business reporting and performance insight',
        'Ongoing advisory involvement',
      ],
    },
    overview: {
      paragraphs: [
        'CFO advisory brings senior financial leadership and strategic input without the cost of a full-time chief financial officer. It is for businesses that have outgrown basic bookkeeping and accounts and need someone to interpret numbers, challenge assumptions, and support major decisions with financial insight. Whether you are scaling, considering investment, or simply want a clearer view of performance, CFO-level input can make a real difference.',
        'Advisory support typically includes review of management information, cashflow and funding, profitability and pricing, and strategic planning. The focus is on helping you understand what the numbers mean and what options you have, rather than just producing the numbers. Many growing SMEs use a part-time or virtual CFO to fill this gap.',
        'DepoTax offers CFO advisory tailored to your business: we provide financial oversight support, business reporting guidance, strategic financial discussions, and performance review support. We help with planning and decision-making and can be involved on an ongoing basis so you have consistent strategic input.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Financial oversight support', description: 'We help you understand and oversee the financial position and performance of your business.' },
        { title: 'Business reporting guidance', description: 'We advise on what to report, how to present it, and how to use it for decisions.' },
        { title: 'Strategic financial discussions', description: 'We discuss funding, growth, pricing, and other strategic topics with a financial lens.' },
        { title: 'Performance review support', description: 'We help you review performance against plan and identify drivers and risks.' },
        { title: 'Planning and decision-making input', description: 'We support you with planning, budgeting, and major business decisions.' },
        { title: 'Ongoing advisory involvement', description: 'We can be involved on a regular basis so you have consistent strategic support.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our CFO advisory service is for businesses that need strategic financial input beyond day-to-day accounting.',
      items: [
        { name: 'Growing Businesses', description: 'Businesses that are scaling and need financial leadership and strategic oversight.' },
        { name: 'Company Directors', description: 'Directors who want a senior financial sounding board and better reporting.' },
        { name: 'SMEs', description: 'Small and medium-sized enterprises that need part-time or virtual CFO-level support.' },
        { name: 'Businesses needing financial leadership support', description: 'Businesses that have outgrown basic accounts and need strategic input.' },
        { name: 'Owners wanting more strategic input', description: 'Owners who want to make better decisions with clearer financial insight.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for CFO Advisory',
      intro: 'We provide the strategic financial input you need without the cost of a full-time CFO.',
      points: [
        'Senior-level financial oversight and strategic discussion',
        'Clear reporting and performance insight tailored to your business',
        'Practical input on funding, growth, and key decisions',
        'Dependable advisory involvement when you need it',
      ],
    },
    localSeoContent:
      'DepoTax provides CFO advisory services to businesses across the UK. Whether you need CFO advisory services in London, part-time CFO support, or financial advisory support in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you with strategic financial oversight, reporting, and decision-making. Our team supports clients locally and across the UK with UK CFO advisory services.\n\nGet in touch to discuss your need for strategic financial support.',
    faqs: [
      { question: 'What is CFO advisory?', answer: 'CFO advisory is senior-level financial support that provides strategic input, financial oversight, and better reporting—similar to what a chief financial officer would provide, but on a part-time or project basis. It sits above day-to-day bookkeeping and accounts.' },
      { question: 'Is CFO advisory suitable for small or growing businesses?', answer: 'Yes. Many small and growing businesses use a part-time or virtual CFO when they need strategic input but do not need or cannot justify a full-time hire. We tailor the level and frequency of involvement to your size and needs.' },
      { question: 'How can CFO advisory help business decisions?', answer: 'We help you interpret your numbers, understand cashflow and profitability, review options for funding or growth, and challenge assumptions. The aim is to give you clearer insight so you can make better strategic decisions.' },
      { question: 'Can DepoTax provide ongoing strategic support?', answer: 'Yes. We can be involved on a regular basis—for example, monthly or quarterly—to review performance, discuss planning, and support key decisions. We agree the scope and rhythm with you.' },
      { question: "What's the difference between bookkeeping and CFO advisory?", answer: 'Bookkeeping is the day-to-day recording of transactions and maintenance of records. CFO advisory is strategic: it uses that information to support high-level decisions, reporting, planning, and financial oversight. They complement each other.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Strategic Financial Support for Your Business?',
      paragraph: 'Speak with DepoTax about CFO advisory. We provide the strategic financial input and oversight you need to grow with confidence.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for growing businesses and SMEs across the UK.',
    },
    seo: {
      title: 'CFO Advisory UK | Part-Time CFO | Strategic Financial Support | DepoTax',
      description: 'CFO advisory and strategic financial support for UK businesses. Reporting, planning, decision-making. London and UK-wide. Book a consultation.',
    },
  },

  'business-growth-planning': {
    title: 'Business Growth Planning',
    label: 'Business Growth Planning',
    hero: {
      label: 'Business Advisory',
      title: 'Business Growth Planning Support for Ambitious UK Businesses',
      description:
        'DepoTax supports businesses that want to grow with better planning, financial clarity, and practical advisory guidance. We help you set goals, understand the financial implications of growth, and plan for development so you can scale with confidence.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Growth planning and goal-setting support',
        'Financial clarity for growth decisions',
        'Ongoing guidance as you grow',
      ],
    },
    overview: {
      paragraphs: [
        'Growing a business requires more than ambition—it requires a clear view of where you are, where you want to be, and what it will take to get there. Business growth planning brings structure to your goals: it helps you align financial planning with strategy, identify funding needs, and make decisions that support sustainable growth rather than reactive expansion.',
        'Many ambitious businesses benefit from an external perspective that can challenge assumptions, highlight risks, and help prioritise. An accountant or business adviser can support you with financial modelling, scenario planning, and practical steps so your growth plans are grounded in numbers.',
        'DepoTax offers business growth planning support: we work with you on growth planning discussions, financial clarity for growth decisions, and review of your goals and plans. We provide practical advisory support and ongoing guidance as the business develops so you can plan and execute with confidence.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Business growth planning discussions', description: 'We discuss your goals, strategy, and what growth means for your business.' },
        { title: 'Financial clarity for growth decisions', description: 'We help you understand the financial implications of expansion and investment.' },
        { title: 'Review of business goals and plans', description: 'We review your plans and help you test assumptions and prioritise.' },
        { title: 'Practical advisory support', description: 'We give actionable advice and next steps rather than theory alone.' },
        { title: 'Planning for future development', description: 'We help you plan for funding, capacity, and key milestones.' },
        { title: 'Ongoing guidance as the business grows', description: 'We can support you on an ongoing basis as your plans and position evolve.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our business growth planning service is for any business that wants to grow with structure and clarity.',
      items: [
        { name: 'Ambitious Small Businesses', description: 'Small businesses with clear growth ambitions that want a structured approach.' },
        { name: 'Growing Companies', description: 'Companies that are scaling and need to plan for the next phase.' },
        { name: 'Directors', description: 'Directors who want to align financial planning with growth strategy.' },
        { name: 'Startups preparing to scale', description: 'Startups that have found product-market fit and are planning to scale.' },
        { name: 'Owners needing structured planning support', description: 'Owners who want to grow but need help turning goals into a plan.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Business Growth Planning',
      intro: 'We help you plan for growth with financial clarity and practical next steps.',
      points: [
        'Structured growth planning that links goals to numbers',
        'Financial clarity so you understand the implications of growth',
        'Practical advisory input, not just theory',
        'Ongoing support as your business and plans develop',
      ],
    },
    localSeoContent:
      'DepoTax provides business growth planning support to businesses across the UK. Whether you need a business growth planning accountant in London, business advisory support for growth, or growth planning in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you plan for growth with financial clarity and practical guidance. Our team supports clients locally and across the UK with business growth advisory.\n\nBusiness growth advisory across the UK helps ambitious businesses plan with confidence. Get in touch to discuss your growth plans.',
    faqs: [
      { question: 'What is business growth planning?', answer: 'Business growth planning is the process of setting growth goals, understanding the financial and operational implications, and creating a structured plan to achieve them. It often involves financial modelling, scenario planning, and prioritising initiatives.' },
      { question: 'How can an accountant support business growth?', answer: 'An accountant or adviser can help you model different growth scenarios, understand funding and cashflow needs, review profitability and pricing, and align your finances with your strategy. We provide the financial clarity and challenge that supports better decisions.' },
      { question: 'Is growth planning useful for small businesses?', answer: 'Yes. Even small businesses benefit from clarifying where they want to be and what it will take. We tailor the depth of planning to your size and ambition—from simple goal-setting and cashflow to more detailed scenario planning.' },
      { question: 'Can DepoTax help with financial planning for expansion?', answer: 'Yes. We help you plan for expansion by modelling scenarios, identifying funding requirements, and supporting key decisions. We can work on a one-off plan or provide ongoing advisory as you execute.' },
      { question: 'Do you provide ongoing advisory support as a business grows?', answer: 'Yes. We can support you on an ongoing basis as your business grows—reviewing progress, updating plans, and providing advisory input when you face key decisions or milestones.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Practical Support for Business Growth Planning?',
      paragraph: 'Speak with DepoTax about business growth planning. We help you plan for growth with financial clarity and practical advisory support.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for ambitious businesses across the UK.',
    },
    seo: {
      title: 'Business Growth Planning UK | Growth Advisory | DepoTax',
      description: 'Business growth planning and advisory for UK businesses. Financial clarity, growth strategy support. London and UK-wide. Book a consultation.',
    },
  },

  'landlord-accounting': {
    title: 'Landlord Accounting',
    label: 'Landlord Accounting',
    hero: {
      label: 'Property Services',
      title: 'Landlord Accounting Services for UK Property Owners',
      description:
        'DepoTax supports landlords with accounting, record-keeping, and reporting for rental property income. We help you maintain clear records, report property income correctly, and stay on top of tax and compliance so you can focus on your properties.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Rental income and expense record support',
        'Property income reporting',
        'Compliance-focused accounting',
      ],
    },
    overview: {
      paragraphs: [
        'Landlords need clear, accurate records of rental income and expenses for both day-to-day management and tax reporting. Good landlord accounting helps you see how each property is performing, claim the right allowable expenses, and meet your Self Assessment or company reporting obligations without stress.',
        'Many property owners prefer to outsource their accounting so they can focus on tenants and maintenance. Professional support ensures income and costs are recorded correctly, mortgage interest and other deductions are handled in line with current rules, and your records are ready for year-end returns.',
        'DepoTax provides landlord accounting tailored to property owners: we support rental income and expense records, property income reporting, and practical record-keeping. We offer compliance-focused support and ongoing accounting help so your property finances are organised and ready for tax and reporting.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Rental income and expense record support', description: 'We help you record and organise income and allowable expenses for each property.' },
        { title: 'Landlord accounting guidance', description: 'We advise on what to track, how to categorise costs, and how to keep records HMRC-ready.' },
        { title: 'Property income reporting support', description: 'We support reporting of property income for Self Assessment or company accounts.' },
        { title: 'Practical record-keeping assistance', description: 'We give you a clear structure so you can maintain records easily.' },
        { title: 'Compliance-focused support', description: 'We help you stay compliant with tax and reporting rules for rental income.' },
        { title: 'Ongoing accounting help for landlords', description: 'We provide continued support as your portfolio or circumstances change.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our landlord accounting service is for any UK property owner who receives rental income and wants organised, compliant accounting support.',
      items: [
        { name: 'Individual Landlords', description: 'Landlords who let property in their own name and need clear records for Self Assessment.' },
        { name: 'Property Investors', description: 'Investors who want accounting that supports portfolio management and tax reporting.' },
        { name: 'Landlords with Multiple Properties', description: 'Landlords with several properties who need structured, property-by-property records.' },
        { name: 'New Landlords', description: 'New landlords who want to set up accounting and record-keeping correctly from the start.' },
        { name: 'Clients needing structured rental income support', description: 'Anyone who wants organised accounting focused on rental income and expenses.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Landlord Accounting',
      intro: 'We understand property income and help you keep records and reporting in order.',
      points: [
        'Familiarity with landlord and property-sector accounting',
        'Organised records that support tax returns and reporting',
        'Practical guidance on allowable expenses and compliance',
        'Responsive support for landlords and property portfolios',
      ],
    },
    localSeoContent:
      'DepoTax provides landlord accounting services to property owners across the UK. Whether you need a landlord accountant in London, a property accountant for landlords, or landlord tax support in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you maintain rental income and expense records, report property income correctly, and meet your tax obligations. Our team supports clients locally and across the UK with landlord accounting services.\n\nLandlord accounting services across the UK help property owners stay on top of their finances. Get in touch to discuss your rental property accounting needs.',
    faqs: [
      { question: 'What accounting support do landlords need?', answer: 'Landlords typically need to record rental income and allowable expenses, keep records for HMRC, and report property income (e.g. via Self Assessment or company accounts). Good accounting also helps you see profitability per property and plan for tax.' },
      { question: 'Can DepoTax help with rental income records?', answer: 'Yes. We help you set up and maintain records of rental income and expenses, categorise costs correctly, and keep everything in order for tax and reporting. We can work with your existing records or help you establish a system.' },
      { question: 'Is landlord accounting different from normal bookkeeping?', answer: 'Landlord accounting focuses on rental income, property-related expenses, and tax rules specific to property (e.g. mortgage interest relief, wear and tear). The principles are similar to general bookkeeping but tailored to property.' },
      { question: 'Can you support landlords with multiple properties?', answer: 'Yes. We can organise records by property so you see performance per unit and have clear figures for tax. We support portfolios of any size with structured, compliant accounting.' },
      { question: 'Can DepoTax help with tax reporting related to rental income?', answer: 'Yes. We support preparation of tax returns that include property income, advise on allowable expenses, and help you meet filing deadlines. We work alongside your landlord accounting to ensure reporting is accurate.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Professional Accounting Support for Your Property Income?',
      paragraph: 'Speak with DepoTax about landlord accounting. We help property owners across the UK keep their rental income records clear and compliant.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for landlords and property investors across the UK.',
    },
    seo: {
      title: 'Landlord Accounting UK | Property Accountant for Landlords | DepoTax',
      description: 'Landlord accounting and rental income support for UK property owners. Records, reporting, tax. London and UK-wide. Book a consultation.',
    },
  },

  'spv-accounting': {
    title: 'SPV Accounting',
    label: 'SPV Accounting',
    hero: {
      label: 'Property Services',
      title: 'SPV Accounting Services for Property Investment Companies',
      description:
        'DepoTax supports Special Purpose Vehicle (SPV) companies used for property investment with accounting, year-end compliance, and tax support. We help SPV directors maintain proper records, prepare annual accounts, and meet corporation tax and filing obligations.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'SPV accounting and annual accounts support',
        'Corporation tax guidance for property companies',
        'Compliance-focused reporting',
      ],
    },
    overview: {
      paragraphs: [
        'A Special Purpose Vehicle (SPV) is often used to hold buy-to-let or other property investments in a limited company. The company must maintain proper accounting records, prepare annual accounts, file with Companies House, and meet corporation tax obligations. SPV accounting follows the same legal framework as any limited company but is focused on property income, loan interest, and property-related costs.',
        'Many property investors use an accountant who understands SPVs and the specific reporting and tax treatment. Professional support ensures the company’s accounts and tax returns are prepared correctly and filed on time, and that directors understand their obligations.',
        'DepoTax provides SPV accounting for property investment companies: we support financial record-keeping, annual accounts preparation, corporation tax computation and filing, and compliance reporting. We offer ongoing support so your SPV stays in good order with Companies House and HMRC.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'SPV accounting support', description: 'We maintain or support the accounting records for your property investment company.' },
        { title: 'Financial record review', description: 'We review income, expenses, and balances to ensure figures are accurate and complete.' },
        { title: 'Annual accounts support', description: 'We prepare your SPV’s annual accounts in line with Companies House and reporting requirements.' },
        { title: 'Corporation tax guidance for SPVs', description: 'We advise on corporation tax for property companies and support return preparation and filing.' },
        { title: 'Compliance-focused reporting support', description: 'We help you meet Companies House and HMRC filing and reporting obligations.' },
        { title: 'Ongoing support for property investment companies', description: 'We provide continued support so your SPV remains compliant and up to date.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our SPV accounting service is for any UK limited company set up to hold property investments.',
      items: [
        { name: 'Property Investment Companies', description: 'Limited companies that hold buy-to-let or other property and need company accounting.' },
        { name: 'SPV Directors', description: 'Directors of property SPVs who want professional accounting and compliance support.' },
        { name: 'Buy-to-Let Investors using a company structure', description: 'Investors who hold rental property in a company and need SPV-specific support.' },
        { name: 'Property Business Owners', description: 'Owners of property businesses that operate through a limited company.' },
        { name: 'Clients needing structured company accounting support', description: 'Anyone who wants dedicated accounting for their property company.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for SPV Accounting',
      intro: 'We understand property SPVs and help you meet your company’s accounting and tax obligations.',
      points: [
        'Experience with property investment company accounting',
        'Clear annual accounts and corporation tax support',
        'Compliance-focused so you stay right with Companies House and HMRC',
        'Practical support for SPV directors and property businesses',
      ],
    },
    localSeoContent:
      'DepoTax provides SPV accounting services to property investment companies across the UK. Whether you need an SPV accountant in London, a property investment company accountant, or SPV accounting support in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you with annual accounts, corporation tax, and compliance reporting. Our team supports clients locally and across the UK with SPV accounting services.\n\nSPV accounting services across the UK help property companies stay compliant. Get in touch to discuss your SPV’s accounting and tax needs.',
    faqs: [
      { question: 'What is SPV accounting?', answer: 'SPV accounting is the accounting and reporting for a limited company (Special Purpose Vehicle) set up to hold property or other assets. It includes maintaining records, preparing annual accounts, and meeting corporation tax and Companies House obligations—all tailored to the company’s property activities.' },
      { question: 'Can DepoTax support property investment companies?', answer: 'Yes. We support property SPVs with accounting records, annual accounts, corporation tax computation and filing, and ongoing compliance. We understand the typical structure and reporting for property investment companies.' },
      { question: 'Is SPV accounting different from normal company accounting?', answer: 'The legal and reporting framework is the same as for any limited company. The difference is in the focus: property income, loan interest, and property-related expenses, and the way these are presented and reported for a property-holding company.' },
      { question: 'Can you help with annual accounts and tax for an SPV?', answer: 'Yes. We prepare annual accounts for your SPV and support corporation tax computation and filing. We also help with confirmation statements and other Companies House requirements.' },
      { question: 'What records should an SPV keep?', answer: 'An SPV must keep records of income (e.g. rent), expenses (e.g. mortgage interest, repairs, management fees), assets and liabilities, and all transactions. We can advise on what to keep and help you maintain records in good order.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Accounting Support for Your Property SPV?',
      paragraph: 'Speak with DepoTax about SPV accounting. We help property investment companies across the UK with accounts, tax, and compliance.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for property investment companies across the UK.',
    },
    seo: {
      title: 'SPV Accounting UK | Property Investment Company Accountant | DepoTax',
      description: 'SPV accounting and compliance for UK property investment companies. Annual accounts, corporation tax. London and UK-wide. Book a consultation.',
    },
  },

  'property-tax-returns': {
    title: 'Property Tax Returns',
    label: 'Property Tax Returns',
    hero: {
      label: 'Property Services',
      title: 'Property Tax Return Services for Landlords and Property Owners',
      description:
        'DepoTax helps landlords and property owners prepare and manage tax return obligations related to rental income. We support accurate reporting of property income and allowable expenses, filing guidance, and practical compliance so you meet HMRC requirements on time.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'Property income and expense reporting',
        'Landlord tax filing guidance',
        'Deadline and compliance support',
      ],
    },
    overview: {
      paragraphs: [
        'Landlords and property owners with UK rental income must report that income to HMRC, usually through Self Assessment. You need to declare gross rental income, claim allowable expenses, and account for mortgage interest relief within current rules. Getting the return right and filing on time avoids penalties and ensures you pay the correct amount of tax.',
        'Many landlords use an accountant to prepare the property-related parts of their tax return or to handle the full return. Professional support helps you claim the right deductions, report income from multiple properties clearly, and meet the 31 January deadline (and any payments on account).',
        'DepoTax provides property tax return support: we review your property income and expenses, help prepare your return (or the property sections), advise on allowable expenses and reliefs, and guide you on filing and deadlines. We offer ongoing support so your property income is reported correctly each year.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'Review of property income information', description: 'We review your rental income and expenses so the return is accurate and complete.' },
        { title: 'Tax return preparation support', description: 'We help prepare your Self Assessment (or relevant return) including property income and expenses.' },
        { title: 'Reporting of allowable expenses', description: 'We help you claim the correct allowable expenses and reliefs (e.g. mortgage interest within the rules).' },
        { title: 'Landlord tax filing guidance', description: 'We advise on what to report, when to file, and how to pay so you meet HMRC requirements.' },
        { title: 'Deadline awareness', description: 'We help you plan for filing and payment deadlines so you avoid late penalties.' },
        { title: 'Ongoing support for property-related returns', description: 'We provide continued support each year so your property income is reported correctly.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our property tax return service is for anyone with UK rental income who must report it to HMRC.',
      items: [
        { name: 'Property Landlords', description: 'Landlords who need to report rental income and expenses on their tax return.' },
        { name: 'Buy-to-Let Owners', description: 'Buy-to-let owners who want accurate, compliant tax return preparation.' },
        { name: 'Individuals with Rental Income', description: 'Anyone with rental income from UK property who must declare it to HMRC.' },
        { name: 'Clients with Multiple Rental Properties', description: 'Landlords with several properties who need clear reporting across the portfolio.' },
        { name: 'Property Owners needing filing support', description: 'Property owners who want professional help to prepare and file their return.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for Property Tax Returns',
      intro: 'We help you report property income correctly and meet your filing obligations.',
      points: [
        'Property-sector familiarity and understanding of landlord tax',
        'Practical support with allowable expenses and reporting',
        'Clear filing and deadline guidance',
        'Support for landlords and property owners across the UK',
      ],
    },
    localSeoContent:
      'DepoTax provides property tax return services to landlords and property owners across the UK. Whether you need a property tax return accountant in London, landlord tax return support, or rental income tax help in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you report rental income and allowable expenses correctly and file on time. Our team supports clients locally and across the UK with UK property tax return services.\n\nGet in touch to discuss your property tax return needs.',
    faqs: [
      { question: 'Do landlords need to file tax returns for rental income?', answer: 'Yes. UK rental income must be reported to HMRC. Most landlords do this via Self Assessment. You declare rental income, claim allowable expenses, and pay tax on the profit. There are specific rules for mortgage interest and other deductions.' },
      { question: 'What expenses can be included?', answer: 'Allowable expenses typically include repairs and maintenance, letting agent fees, insurance, ground rent, and (within current rules) a portion of finance costs. Capital improvements are not deductible; we can advise on what qualifies and how to report it.' },
      { question: 'Can DepoTax help prepare property tax returns?', answer: 'Yes. We review your property income and expenses, prepare the relevant parts of your return (or the full return), advise on allowable expenses, and can submit on your behalf. We also help you plan for payments and deadlines.' },
      { question: 'What records should I keep for rental property income?', answer: 'You should keep records of rental income, allowable expenses (invoices, receipts), mortgage interest statements, and any other relevant documents. We can provide a checklist and work with the records you have.' },
      { question: 'Can you support clients with multiple properties?', answer: 'Yes. We can report income and expenses across multiple properties in your return. We keep the presentation clear so HMRC receives the right information and you have a clear picture of your tax position.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Help With Your Property Tax Returns?',
      paragraph: 'Speak with DepoTax about property tax returns. We help landlords and property owners across the UK report rental income correctly and file on time.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for landlords and property owners across the UK.',
    },
    seo: {
      title: 'Property Tax Returns UK | Landlord Tax Return | DepoTax',
      description: 'Property tax return preparation for UK landlords and property owners. Rental income, allowable expenses, filing. London and UK-wide. Book a consultation.',
    },
  },

  'hmo-holiday-let-accounting': {
    title: 'HMO / Holiday Let Accounting',
    label: 'HMO / Holiday Let Accounting',
    hero: {
      label: 'Property Services',
      title: 'HMO and Holiday Let Accounting Services',
      description:
        'DepoTax supports landlords and property operators with accounting and reporting for HMOs (houses in multiple occupation) and holiday let properties. We help you organise income and expenses, meet reporting requirements, and stay compliant so you can focus on running your properties.',
      primaryCtaLabel: 'Book a Consultation',
      primaryCtaHref: BOOK_CONSULTATION_URL,
      secondaryCtaLabel: 'Contact Our Team',
      secondaryCtaHref: '/contact',
      trustBullets: [
        'HMO and holiday let income and expense support',
        'Property reporting and compliance',
        'Ongoing support for property operators',
      ],
    },
    overview: {
      paragraphs: [
        'HMOs and furnished holiday lets (FHLs) have specific regulatory and tax considerations. Income may come from multiple tenants or short-term bookings, and expenses can be more complex than standard buy-to-let. Keeping clear records and reporting correctly is essential for compliance and for understanding the true performance of each property.',
        'Many HMO landlords and holiday let operators use an accountant who understands the nuances of multi-occupancy and short-term lets. Professional support helps you organise income by property and category, claim the right expenses, and meet tax and (where relevant) regulatory reporting requirements.',
        'DepoTax provides accounting support for HMOs and holiday lets: we help with income and expense records, property reporting, and practical accounting guidance. We offer compliance-focused financial organisation and ongoing support so your HMO or holiday let business is well documented and ready for tax and reporting.',
      ],
    },
    features: {
      title: "What's Included",
      items: [
        { title: 'HMO income and expense record support', description: 'We help you record and organise income and costs for HMO properties.' },
        { title: 'Holiday let accounting support', description: 'We support accounting for furnished holiday lets, including income and allowable expenses.' },
        { title: 'Property reporting assistance', description: 'We help you report income and expenses in a clear structure for tax and management.' },
        { title: 'Practical accounting guidance', description: 'We advise on what to track and how to organise records for more complex setups.' },
        { title: 'Ongoing support for property operators', description: 'We provide continued support as your portfolio or occupancy changes.' },
        { title: 'Compliance-focused financial organisation', description: 'We help you keep records and reporting in line with tax and regulatory requirements.' },
      ],
    },
    whoItsFor: {
      title: 'Who This Service Is For',
      intro: 'Our HMO and holiday let accounting service is for landlords and operators with more complex property setups.',
      items: [
        { name: 'HMO Landlords', description: 'Landlords who run houses in multiple occupation and need structured accounting and reporting.' },
        { name: 'Holiday Let Owners', description: 'Owners of furnished holiday lets who need accounting that reflects short-term rental income and FHL rules.' },
        { name: 'Short-Term Let Operators', description: 'Operators of short-term or Airbnb-style lets who need clear income and expense records.' },
        { name: 'Property Investors', description: 'Investors with HMO or holiday let assets who want specialist property accounting.' },
        { name: 'Clients with more complex rental setups', description: 'Anyone with multi-occupancy or holiday let properties who needs tailored support.' },
      ],
    },
    whyChoose: {
      title: 'Why Choose DepoTax for HMO and Holiday Let Accounting',
      intro: 'We help you organise and report your property income with clarity and compliance in mind.',
      points: [
        'Familiarity with HMO and holiday let property structures',
        'Organised accounting that supports tax and reporting',
        'Practical guidance for more complex property setups',
        'Responsive support for property operators and landlords',
      ],
    },
    localSeoContent:
      'DepoTax provides HMO and holiday let accounting services to property operators across the UK. Whether you need an HMO accountant in London, a holiday let accountant in London, or HMO accounting support in Streatham, Camden, Fulham, Milton Keynes or elsewhere, we offer the same high standard of service.\n\nWe help you organise income and expenses, report correctly, and stay compliant. Our team supports clients locally and across the UK with HMO and holiday let accounting services.\n\nHMO and holiday let accounting services across the UK help property operators stay on top of their finances. Get in touch to discuss your HMO or holiday let accounting needs.',
    faqs: [
      { question: 'Is HMO accounting different from normal landlord accounting?', answer: 'HMO accounting often involves more income streams (multiple tenants, deposits, service charges) and more expense categories. The principles are the same, but the structure and reporting may need to reflect multiple occupancy and any regulatory requirements. We tailor our support accordingly.' },
      { question: 'Can DepoTax support holiday let owners?', answer: 'Yes. We support furnished holiday let owners with income and expense records, and advise on the tax treatment of FHLs (e.g. beneficial rules for qualifying holiday lets). We help you keep records that support your return and any FHL claims.' },
      { question: 'What records should be kept for HMO or holiday let properties?', answer: 'You should keep records of all income (rent, booking income, fees) and expenses (repairs, utilities, management, mortgage interest within the rules). For FHLs, occupancy and availability records may also be relevant. We can provide a checklist.' },
      { question: 'Can you help with tax reporting for holiday let income?', answer: 'Yes. We help you report holiday let income and expenses on your tax return and advise on furnished holiday let rules. We ensure the figures are accurate and that you claim the correct reliefs where applicable.' },
      { question: 'Is this service suitable for clients with multiple properties?', answer: 'Yes. We can support multiple HMOs and/or holiday lets with property-by-property or combined reporting as you need. We structure the accounting so you see performance clearly and meet your reporting obligations.' },
    ],
    cta: {
      label: 'Get Started',
      heading: 'Need Specialist Accounting Support for HMO or Holiday Let Properties?',
      paragraph: 'Speak with DepoTax about HMO and holiday let accounting. We help property operators across the UK with organised, compliant accounting for more complex setups.',
      primaryLabel: 'Book a Consultation',
      primaryHref: BOOK_CONSULTATION_URL,
      secondaryLabel: 'Contact Our Team',
      secondaryHref: '/contact',
      trustLine: 'Support for HMO landlords and holiday let operators across the UK.',
    },
    seo: {
      title: 'HMO & Holiday Let Accounting UK | Property Accountant | DepoTax',
      description: 'HMO and holiday let accounting for UK property operators. Income, expenses, reporting. London and UK-wide. Book a consultation.',
    },
  },
};

export function getServicePageData(slug) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const defaults = getDefaultPageData(service);
  const overrides = SERVICE_PAGE_OVERRIDES[slug];

  if (!overrides) return defaults;

  return {
    ...defaults,
    ...overrides,
    hero: { ...defaults.hero, ...overrides.hero },
    overview: { ...defaults.overview, ...overrides.overview },
    features: { ...defaults.features, ...overrides.features },
    whoItsFor: { ...defaults.whoItsFor, ...overrides.whoItsFor },
    whyChoose: { ...defaults.whyChoose, ...overrides.whyChoose },
    localSeoContent: overrides.localSeoContent !== undefined ? overrides.localSeoContent : defaults.localSeoContent,
    faqs: overrides.faqs ?? defaults.faqs,
    cta: { ...defaults.cta, ...overrides.cta },
    seo: { ...defaults.seo, ...overrides.seo },
  };
}
