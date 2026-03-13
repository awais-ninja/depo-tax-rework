import LegalDocumentLayout, { LegalSection, LegalContactBlock } from '@/components/legal/LegalDocumentLayout';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions governing the use of the DepoTax website and the professional services provided by DepoTax Accountants & Tax Consultants.',
};

const NAV_ANCHORS = [
  { id: 'use-of-website', label: 'Use of Website' },
  { id: 'professional-services', label: 'Professional Services' },
  { id: 'accuracy', label: 'Accuracy of Information' },
  { id: 'client-responsibilities', label: 'Client Responsibilities' },
  { id: 'limitation-of-liability', label: 'Limitation of Liability' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'external-links', label: 'External Links' },
  { id: 'changes-to-terms', label: 'Changes to Terms' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsPage() {
  return (
    <LegalDocumentLayout
      title="Terms & Conditions"
      introduction="These Terms and Conditions govern the use of the DepoTax website and the professional services provided by DepoTax Accountants & Tax Consultants."
      navAnchors={NAV_ANCHORS}
    >
      <LegalSection id="use-of-website" title="1. Use of Website">
        <p>
          By accessing and using this website, you agree to use it only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use of the website. You must not use the website in any manner that could damage, disable, or impair the site or any service provided through it, or that could bring DepoTax or its affiliates into disrepute.
        </p>
      </LegalSection>

      <LegalSection id="professional-services" title="2. Professional Services">
        <p>
          DepoTax provides professional services including accounting, tax advice, bookkeeping, payroll, and business advisory. The provision of such services is subject to separate engagement terms agreed with you. The scope, fees, and conditions of our professional services will be set out in our engagement letter or other written agreement. Nothing on this website constitutes an offer to provide services on any particular terms; formal engagement is required before we provide professional advice or carry out work on your behalf.
        </p>
      </LegalSection>

      <LegalSection id="accuracy" title="3. Accuracy of Information">
        <p>
          While we take reasonable care to ensure that information on this website is accurate and up to date, it may change from time to time. Information on the website is for general guidance only and should not be relied upon as professional advice. You should seek specific advice from us or another qualified professional before making any decision based on information found on this website. We do not accept responsibility for any loss or damage arising from reliance on website content.
        </p>
      </LegalSection>

      <LegalSection id="client-responsibilities" title="4. Client Responsibilities">
        <p>
          Where you engage us for professional services, you are responsible for:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Providing accurate and complete financial and other information as reasonably required</li>
          <li>Providing information in a timely manner so that we can meet agreed deadlines and regulatory requirements</li>
          <li>Complying with your own legal and regulatory obligations</li>
          <li>Informing us promptly of any material changes in your circumstances that may affect the services we provide</li>
        </ul>
        <p className="mt-3">
          Failure to provide accurate or timely information may affect the quality of our work and could result in additional cost, delay, or non-compliance with legal or regulatory requirements for which we cannot be held responsible.
        </p>
      </LegalSection>

      <LegalSection id="limitation-of-liability" title="5. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, DepoTax shall not be liable for any loss or damage arising from:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Inaccurate, incomplete, or late information provided by you or on your behalf</li>
          <li>Misuse or misinterpretation of information on this website</li>
          <li>Delays or failures caused by third parties (including HMRC, Companies House, or other authorities)</li>
          <li>Events outside our reasonable control</li>
        </ul>
        <p className="mt-3">
          Our liability in connection with professional services will be governed by the terms of our engagement letter. Nothing in these Terms and Conditions excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded or limited by law.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="6. Intellectual Property">
        <p>
          All content on this website, including but not limited to text, design, branding, logos, and graphics, is the property of DepoTax or its licensors and is protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any part of this website without our prior written permission. You may view and print pages for your own personal, non-commercial use, provided you do not modify or remove any copyright or other proprietary notices.
        </p>
      </LegalSection>

      <LegalSection id="external-links" title="7. External Links">
        <p>
          This website may contain links to external websites that are not controlled or maintained by DepoTax. We are not responsible for the content, accuracy, or practices of those sites. The inclusion of a link does not imply endorsement. You access external links at your own risk and should review the terms and privacy policies of any third-party site you visit.
        </p>
      </LegalSection>

      <LegalSection id="changes-to-terms" title="8. Changes to Terms">
        <p>
          We may update these Terms and Conditions from time to time. The current version will always be available on this page. Your continued use of the website after any changes indicates your acceptance of the updated terms. We recommend that you review this page periodically.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="9. Governing Law">
        <p className="font-medium">
          These Terms &amp; Conditions are governed by the laws of England and Wales. Any dispute arising in connection with these terms or the use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="10. Contact">
        <p>
          For any questions regarding these Terms and Conditions, please contact us:
        </p>
        <div className="mt-4">
          <LegalContactBlock />
        </div>
      </LegalSection>
    </LegalDocumentLayout>
  );
}
