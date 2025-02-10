import MailFillIcon from 'remixicon-react/MailFillIcon'
import DiscordFillIcon from 'remixicon-react/DiscordFillIcon'
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import constants from '@/constants'
import SocialProps from '@/types/SocialProps'

const social: SocialProps[] = [
  {
    name: 'Mail',
    url: `mailto:${constants.social.contactMail}`,
    icon: (
      <MailFillIcon
        size={22}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'Discord',
    url: constants.social.discord,
    icon: (
      <DiscordFillIcon
        size={22}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'LinkedIn',
    url: constants.social.linkedin,
    icon: (
      <LinkedinFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'GitHub',
    url: `https://github.com/${constants.social.github}`,
    icon: (
      <GithubFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  }
]

export default social