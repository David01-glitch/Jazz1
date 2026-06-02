import LegalPage from '../../components/LegalPage.jsx';
import { SITE } from '../../lib/site.js';

export default function Privacy() {
  return (
    <LegalPage
      path="/legal/privacy"
      kicker="Legal"
      title="Privacy Policy"
      updated="May 1, 2025"
      intro="We respect your privacy and collect as little information as we can while still running a useful publication. This policy explains exactly what we gather, why, and the choices you have."
      sections={[
        {
          heading: 'Who we are',
          paras: [
            `${SITE.name} ("we", "us", "our") is a jazz appreciation publication based at ${SITE.address.full}. You can reach us at ${SITE.email} or ${SITE.phone}. This policy applies to our website and the newsletter we operate.`,
          ],
        },
        {
          heading: 'Information we collect',
          paras: ['We collect only what we need to operate the site and respond to you:'],
          list: [
            'Information you provide: your name and email address when you subscribe to our newsletter or send us a message through the contact form.',
            'Usage information: anonymized analytics about which pages are visited, collected through Google Analytics 4 only after you grant consent.',
            'Technical information: standard server logs such as IP address and browser type, used for security and to keep the site running.',
          ],
        },
        {
          heading: 'How we use your information',
          paras: ['We use the information we collect to:'],
          list: [
            'Send you the newsletter you requested and reply to your messages.',
            'Understand, in aggregate, which essays and guides are useful so we can write better ones.',
            'Protect the website against abuse, fraud and technical failure.',
          ],
        },
        {
          heading: 'Cookies and consent',
          paras: [
            'We use Google Consent Mode v2. When you first arrive, analytics and advertising storage are switched OFF by default. We set only the strictly necessary cookies required for the site to function until you choose "Accept" in our cookie banner.',
            'If you accept, we enable privacy-respecting Google Analytics with IP anonymization. You may decline at any time, and declining does not reduce the content available to you. Your choice is stored locally in your browser so we do not have to ask again.',
          ],
        },
        {
          heading: 'Analytics and Google services',
          paras: [
            'We use Google Analytics 4 (measurement ID G-4J046JXWVC) to understand site usage in aggregate. Analytics only runs after you consent. Google may process this data in accordance with its own privacy policy. We have enabled IP anonymization and we do not use analytics data to identify individual readers.',
          ],
        },
        {
          heading: 'How we share information',
          paras: [
            'We do not sell your personal information, and we never will. We share information only with service providers who help us operate the site (such as our email and analytics providers), and only to the extent necessary for them to perform that service. We may disclose information if required by law.',
          ],
        },
        {
          heading: 'Data retention',
          paras: [
            'We keep newsletter subscriber details for as long as you remain subscribed, and contact messages for as long as needed to resolve your inquiry and keep reasonable records. You may ask us to delete your information at any time.',
          ],
        },
        {
          heading: 'Your rights and choices',
          paras: ['Depending on where you live, you may have the right to:'],
          list: [
            'Access the personal information we hold about you.',
            'Correct information that is inaccurate or incomplete.',
            'Ask us to delete your information.',
            'Unsubscribe from the newsletter at any time using the link in every email.',
            'Withdraw analytics consent by declining cookies or clearing your browser storage.',
          ],
        },
        {
          heading: "Children's privacy",
          paras: [
            'Our website is intended for adults and is not directed to children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us and we will delete it.',
          ],
        },
        {
          heading: 'Data security',
          paras: [
            'We take reasonable technical and organizational measures to protect your information, including serving the site over HTTPS and limiting access to subscriber data. No method of transmission over the internet is perfectly secure, but we work to safeguard your information.',
          ],
        },
        {
          heading: 'International visitors',
          paras: [
            'We operate from the United States. If you access the site from elsewhere, your information may be processed in the United States, where data protection laws may differ from those in your country.',
          ],
        },
        {
          heading: 'Changes to this policy',
          paras: [
            'We may update this policy from time to time. When we do, we will revise the "Last updated" date above. Significant changes will be communicated to newsletter subscribers where appropriate.',
          ],
        },
      ]}
    />
  );
}
