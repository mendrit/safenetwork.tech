import React from 'react'

import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import InviteModal from './InviteModal'
import CONSTANT from 'src/constant'
import {
  prefixClassName,
  openLink,
  lockBodyScroll,
  detectPlatform,
  getLocationHash,
  setLocationHash,
} from 'src/utils'

import './invite.sass'

const baseClassName = 'InviteProcess'
const cn = prefixClassName(baseClassName)

export default class Invite extends React.Component {
  ACCORDIONS = {}

  state = {
    activeAccordion: null,
    showInviteOpts: false,
  }
  componentWillMount() {
    const { content } = this.props
    const { joinCommunity, installBrowser, feedback } = content

    this.ACCORDIONS = {
      JOIN_COMMUNITY: joinCommunity.id,
      INSTALL_BROWSER: installBrowser.id,
      FEEDBACK: feedback.id
    }

    this.setState({
      activeAccordion: this.ACCORDIONS.JOIN_COMMUNITY
    })
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', this.setHash)
      window.addEventListener('hashchange', this.setHash)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('hashchange', this.setHash)
      window.removeEventListener('load', this.setHash)
    }
  }

  setHash = () => {
    const newHash = getLocationHash()
    if (Object.values(this.ACCORDIONS).indexOf(newHash) !== -1) {
      this.setAccordion(newHash)
    }
  }

  setAccordion(activeAccordion) {
    setLocationHash(activeAccordion)
    this.setState({
      activeAccordion: activeAccordion
    })
  }

  setAccordionBg() {
    const { activeAccordion } = this.state
    if (activeAccordion === this.ACCORDIONS.JOIN_COMMUNITY)
      return 'yellow'
    if (activeAccordion === this.ACCORDIONS.INSTALL_BROWSER)
      return 'sky'
  }

  render() {
    const { content } = this.props
    const { joinCommunity, title, installBrowser, feedback, modal } = content;
    const { activeAccordion } = this.state

    const platform = detectPlatform()
    let browserDownloadButton = null
    if (platform) {
      browserDownloadButton = {}
      browserDownloadButton.name = `${installBrowser.CTA.button.name} ${platform.os}`
      browserDownloadButton.url = platform.downloadUrl
    }

    return (
      <div className={baseClassName}>
        <div className={cn('wrap')}>
          <Accordion className="underlineLink-bright-onYellow" bgColor={this.setAccordionBg()}>
            <AccordionItem
                overline={title}
                active={activeAccordion === this.ACCORDIONS.JOIN_COMMUNITY}
                id={joinCommunity.id}
                title={joinCommunity.title}
                text={joinCommunity.para}
                ctaButton={joinCommunity.CTA.button}
                ctaButtonType="primary"
                ctaLink= {joinCommunity.CTA.link}
                onClick={() => {
                  this.setAccordion(this.ACCORDIONS.JOIN_COMMUNITY)
                }}
                onClickPrimaryButton={() => {
                  openLink(joinCommunity.CTA.button.url, true)
                }}
            />
            <AccordionItem
              overline={title}
              active={activeAccordion === this.ACCORDIONS.INSTALL_BROWSER}
              id={installBrowser.id}
              title={installBrowser.title}
              text={installBrowser.para}
              ctaButton={browserDownloadButton}
              ctaLink = {installBrowser.CTA.link}
              ctaButtonType="primary"
              onClickPrimaryButton={() => {
                if (!browserDownloadButton) return
                openLink(browserDownloadButton.url, true)
              }}
              onClick={() => {
                this.setAccordion(this.ACCORDIONS.INSTALL_BROWSER)
              }}
            />
            <AccordionItem
              overline={title}
              active={activeAccordion === this.ACCORDIONS.FEEDBACK}
              id={feedback.id}
              title={feedback.title}
              text={feedback.para}
              ctaButton={feedback.CTA.button}
              ctaButtonType="hollow"
              onClick={() => {
                this.setAccordion(this.ACCORDIONS.FEEDBACK)
              }}
              onClickPrimaryButton={() => {
                openLink(feedback.CTA.button.url, true)
              }}
            />
          </Accordion>
        </div>
      </div>
    )
  }
}
