import LegalDocumentLayout, { LegalSection, LegalContactBlock } from '@/components/legal/LegalDocumentLayout';

export const metadata = {
  title: 'Privacy Policy',
  description: 'DepoTax Privacy Policy. How we collect, use and safeguard your personal information in accordance with UK GDPR.',
};

const NAV_ANCHORS = [
  { id: 'who-we-are', label: 'Who We Are' },
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Your Information' },
  { id: 'legal-basis', label: 'Legal Basis for Processing' },
  { id: 'data-sharing', label: 'Data Sharing' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'your-rights', label: 'Your Rights (UK GDPR)' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'contact', label: 'Contact Information' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      introduction="DepoTax Accountants & Tax Consultants is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or services."
      navAnchors={NAV_ANCHORS}
    >
      <LegalSection id="who-we-are" title="1. Who We Are">
        <p>
          DepoTax provides accounting and tax consultancy services in the United Kingdom. We are the data controller in respect of the personal data we collect and process in connection with our services and this website.
        </p>
        <p>
          <strong>Company Name:</strong> DepoTax Accountants & Tax Consultants<br />
          <strong>Email:</strong> info@depotax.co.uk<br />
          <strong>Phone:</strong> +44 20 3659 9254
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" title="2. Information We Collect">
        <p>We may collect the following types of personal data:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business details</li>
          <li>Financial information provided for accounting services</li>
          <li>Website usage data (e.g. IP address, browser type, pages visited)</li>
        </ul>
        <p className="mt-3">
          This information may be collected when you contact us, engage our services, complete forms on our website, or when we are required to do so for legal or regulatory purposes.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use" title="3. How We Use Your Information">
        <p>We use your personal information for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Providing accounting and tax services</li>
          <li>Responding to inquiries and communications</li>
          <li>Managing client relationships and engagements</li>
          <li>Legal and regulatory compliance (including obligations to HMRC and other authorities)</li>
          <li>Improving website performance and user experience</li>
        </ul>
      </LegalSection>

      <LegalSection id="legal-basis" title="4. Legal Basis for Processing">
        <p>
          We process your personal data in accordance with UK data protection law. Our processing is based on one or more of the following:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Contractual necessity</strong> — where processing is necessary to perform our contract with you or to take steps at your request before entering into a contract.</li>
          <li><strong>Legal obligations</strong> — where we must process data to comply with the law (e.g. tax and accounting regulations).</li>
          <li><strong>Legitimate business interests</strong> — where processing is necessary for our legitimate interests (such as managing client relationships and improving our services), provided your interests do not override ours.</li>
          <li><strong>Consent</strong> — where we have obtained your consent for specific processing (e.g. marketing communications). You may withdraw consent at any time.</li>
        </ul>
      </LegalSection>

      <LegalSection id="data-sharing" title="5. Data Sharing">
        <p>
          We may share your information with:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>HMRC</strong> and other tax or regulatory authorities where legally required</li>
          <li>Regulatory bodies (e.g. professional or supervisory authorities) where we are obliged to do so</li>
          <li>Professional advisors (e.g. lawyers, insurers) where necessary in the context of our services</li>
          <li>Technology and service providers that support our business operations (e.g. hosting, email, accounting software), under appropriate contracts to protect your data</li>
        </ul>
        <p className="mt-3 font-medium">
          We do not sell or rent personal data to third parties.
        </p>
      </LegalSection>

      <LegalSection id="data-security" title="6. Data Security">
        <p>
          We take reasonable technical and organisational measures to protect your personal information. These include:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Use of secure systems and appropriate safeguards for electronic data</li>
          <li>Restricted access to personal data on a need-to-know basis</li>
          <li>Professional confidentiality obligations applied by our staff</li>
        </ul>
        <p className="mt-3">
          While we strive to protect your data, no method of transmission or storage over the internet is completely secure. We cannot guarantee absolute security but we will act promptly in the event of a known breach affecting your data.
        </p>
      </LegalSection>

      <LegalSection id="data-retention" title="7. Data Retention">
        <p>
          We retain your personal data only for as long as necessary for:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Fulfilling our legal obligations (e.g. tax and accounting record-keeping requirements)</li>
          <li>Compliance with accounting and regulatory standards</li>
          <li>Our legitimate business needs (e.g. ongoing client relationships, dispute resolution)</li>
        </ul>
        <p className="mt-3">
          Retention periods may be prescribed by law (e.g. HMRC and Companies House requirements). When data is no longer required, we will delete or anonymise it in a secure manner.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="8. Your Rights (UK GDPR)">
        <p>
          Under UK data protection law you have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
          <li><strong>Rectification</strong> — request correction of inaccurate or incomplete data</li>
          <li><strong>Erasure</strong> — request deletion of your data where applicable (subject to legal obligations to retain certain data)</li>
          <li><strong>Restrict processing</strong> — request that we limit how we use your data in certain circumstances</li>
          <li><strong>Object</strong> — object to processing based on legitimate interests or for direct marketing</li>
          <li><strong>Data portability</strong> — receive your data in a structured, machine-readable format where applicable</li>
          <li><strong>Lodge a complaint</strong> — with the Information Commissioner's Office (ICO) if you believe we have not handled your data properly. See: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">ico.org.uk</a></li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us using the details in the Contact Information section below.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="9. Cookies">
        <p>
          We use a first-party cookie banner so you can choose which cookies you allow. Only strictly necessary cookies (such as remembering your cookie choices) are set before you make a choice. We may use cookies and similar technologies for:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Strictly necessary</strong> — required for the site to function (e.g. remembering your cookie preferences)</li>
          <li><strong>Analytics</strong> — to understand how visitors use our site (only with your consent)</li>
          <li><strong>Marketing / advertising</strong> — only with your consent</li>
          <li><strong>Preferences</strong> — to remember settings and improve your experience (only with your consent)</li>
        </ul>
        <p className="mt-3">
          You can change your choices at any time using the &quot;Cookie settings&quot; link in the footer. Rejecting non-essential cookies is as easy as accepting them. You can also manage cookies through your browser settings.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="10. Contact Information">
        <p>
          For any questions about this Privacy Policy or to exercise your data protection rights, please contact us:
        </p>
        <div className="mt-4">
          <LegalContactBlock />
        </div>
      </LegalSection>
    </LegalDocumentLayout>
  );
}
