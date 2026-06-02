import LegalPage from '../../components/LegalPage.jsx';
import { SITE } from '../../lib/site.js';

export default function Terms() {
  return (
    <LegalPage
      path="/legal/terms"
      kicker="Legal"
      title="Terms of Service"
      updated="May 1, 2025"
      intro="These terms govern your use of the Golden Jazz Classics website and services. By using the site, you agree to them. Please read them carefully."
      sections={[
        {
          heading: 'Acceptance of terms',
          paras: [
            `By accessing or using the ${SITE.name} website (the "Site"), you agree to be bound by these Terms of Service and by our Privacy Policy. If you do not agree, please do not use the Site.`,
          ],
        },
        {
          heading: 'About our service',
          paras: [
            `${SITE.name} is an editorial publication offering articles, listening guides, artist portraits and a newsletter on the subject of jazz music and vinyl collecting. The Site is provided for informational and educational purposes.`,
          ],
        },
        {
          heading: 'Eligibility',
          paras: [
            'The Site is intended for adults. By using it you represent that you are at least 16 years of age, or that you have the consent of a parent or guardian, and that you are able to form a binding agreement.',
          ],
        },
        {
          heading: 'Use of the Site',
          paras: ['You agree to use the Site lawfully and respectfully. In particular, you agree not to:'],
          list: [
            'Use the Site in any way that violates applicable law or these terms.',
            'Attempt to gain unauthorized access to our systems or interfere with the Site\'s operation.',
            'Use automated means to scrape or harvest content except as permitted by our robots.txt.',
            'Impersonate any person or misrepresent your affiliation with any person or organization.',
          ],
        },
        {
          heading: 'Intellectual property',
          paras: [
            'All content on the Site — including articles, guides, photographs, graphics, logos and the overall design — is owned by or licensed to us and is protected by copyright and other intellectual property laws. You may read, share links to, and quote brief excerpts of our content with attribution. You may not republish substantial portions without our written permission.',
          ],
        },
        {
          heading: 'User submissions',
          paras: [
            'If you send us a story, suggestion, comment or other material, you grant us a non-exclusive, royalty-free license to use, edit and publish it in connection with the Site, with attribution where appropriate. You represent that any material you submit is your own and does not infringe the rights of others. We are not obligated to publish or use any submission.',
          ],
        },
        {
          heading: 'Newsletter and communications',
          paras: [
            'When you subscribe to our newsletter, you consent to receive periodic emails from us. You may unsubscribe at any time using the link included in every message. Our handling of your contact details is described in our Privacy Policy.',
          ],
        },
        {
          heading: 'Third-party links and services',
          paras: [
            'The Site may link to third-party websites and may use third-party services such as Google Analytics. We are not responsible for the content, policies or practices of third parties. Links are provided for convenience and do not imply endorsement.',
          ],
        },
        {
          heading: 'Disclaimers',
          paras: [
            'The Site and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied. While we strive for accuracy, we make no guarantee that the information on the Site is complete, current or error-free. Advice on collecting, valuation and audio equipment is offered in good faith but is general in nature and not a substitute for professional appraisal or advice.',
          ],
        },
        {
          heading: 'Limitation of liability',
          paras: [
            'To the fullest extent permitted by law, ' +
              SITE.name +
              ' and its team will not be liable for any indirect, incidental, special or consequential damages arising from your use of, or inability to use, the Site or its content. Our total liability for any claim relating to the Site will not exceed any amount you have paid us, if any, in the twelve months preceding the claim.',
          ],
        },
        {
          heading: 'Indemnification',
          paras: [
            'You agree to indemnify and hold harmless ' +
              SITE.name +
              ' and its team from any claims, damages or expenses arising out of your misuse of the Site or your violation of these terms.',
          ],
        },
        {
          heading: 'Changes to the Site and terms',
          paras: [
            'We may modify, suspend or discontinue any part of the Site at any time. We may also update these terms from time to time; when we do, we will revise the "Last updated" date above. Your continued use of the Site after changes take effect constitutes acceptance of the revised terms.',
          ],
        },
        {
          heading: 'Governing law',
          paras: [
            'These terms are governed by the laws of the State of Louisiana and the United States, without regard to conflict-of-law principles. Any disputes will be subject to the exclusive jurisdiction of the courts located in New Orleans, Louisiana.',
          ],
        },
        {
          heading: 'Contact',
          paras: [
            `If you have questions about these terms, contact us at ${SITE.email}, ${SITE.phone}, or ${SITE.address.full}.`,
          ],
        },
      ]}
    />
  );
}
