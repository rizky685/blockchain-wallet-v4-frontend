import React from 'react'
import { FormattedMessage } from 'react-intl'

const title = (
  <div>
    <FormattedMessage id='scenes.faq.item8.question' defaultMessage='Can Blockchain reset my password?' />
  </div>
)

const description = (
  <div>
    <FormattedMessage id='scenes.faq.item4.answer' defaultMessage='At Blockchain, we’re committed to letting customers maintain full control of their funds.
    In that spirit, we never see or store your password, so we can’t reset it for you.
    However, we do provide users a recovery phrase that can be used to restore access to your bitcoins.
    Head over to our Security Center to get yours and make sure you store it somewhere secure and never share it.' />
  </div>
)

export default {
  title, description
}
