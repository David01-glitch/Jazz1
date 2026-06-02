import LegalPage from '../../components/LegalPage.jsx';
import { SITE } from '../../lib/site.js';

export default function Refund() {
  return (
    <LegalPage
      path="/legal/refund"
      kicker="Legal"
      title="Refund & Cancellation Policy"
      updated="May 1, 2025"
      intro="Our newsletter and core content are free. This policy explains cancellations, and how refunds work for any paid offering we may make available."
      sections={[
        {
          heading: 'Free newsletter and content',
          paras: [
            `The ${SITE.name} journal and our Liner Notes Letter are provided free of charge. There is nothing to pay and therefore nothing to refund for our standard content and newsletter. You may unsubscribe from the newsletter at any time using the link in every email.`,
          ],
        },
        {
          heading: 'Scope of this policy',
          paras: [
            'From time to time we may offer optional paid items — for example a supporter membership, a special printed edition, or a paid event. This policy sets out the refund and cancellation terms that would apply to any such paid offering.',
          ],
        },
        {
          heading: 'Cancelling a paid subscription',
          paras: [
            'If we offer a recurring paid membership, you may cancel it at any time from your account or by contacting us. Cancellation stops future renewals; you will retain access to member benefits through the end of the billing period you have already paid for.',
          ],
        },
        {
          heading: 'Refund eligibility',
          paras: ['Where a paid offering is available, refunds are handled as follows:'],
          list: [
            'Digital memberships may be refunded within 14 days of purchase if you have not made substantial use of member benefits.',
            'Physical goods (such as a printed edition) may be returned within 14 days of delivery in their original condition for a refund of the item price.',
            'Event tickets are refundable up to 7 days before the event, unless otherwise stated at the time of purchase.',
          ],
        },
        {
          heading: 'How to request a refund',
          paras: [
            `To request a refund or cancellation, email us at ${SITE.email} or call ${SITE.phone} with your order details. We aim to acknowledge every request within two business days.`,
          ],
        },
        {
          heading: 'How refunds are issued',
          paras: [
            'Approved refunds are issued to the original payment method. Once approved, please allow 5–10 business days for the refund to appear, depending on your bank or card provider.',
          ],
        },
        {
          heading: 'Non-refundable items',
          paras: [
            'Certain items may be marked as non-refundable at the time of purchase, such as donations, custom items, or services already fully rendered. We will always make this clear before you pay.',
          ],
        },
        {
          heading: 'Exceptional circumstances',
          paras: [
            'If something has gone wrong on our end — a duplicate charge, a failed delivery, or content that was not as described — contact us and we will make it right, including a full refund where appropriate, regardless of the timeframes above.',
          ],
        },
        {
          heading: 'Changes to this policy',
          paras: [
            'We may update this policy from time to time. The version in effect at the time of your purchase governs that purchase. The "Last updated" date above reflects the current version.',
          ],
        },
        {
          heading: 'Contact us',
          paras: [
            `Questions about refunds or cancellations? We are happy to help. Reach ${SITE.name} at ${SITE.email}, ${SITE.phone}, or ${SITE.address.full}.`,
          ],
        },
      ]}
    />
  );
}
