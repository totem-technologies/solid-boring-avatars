import { JSX, Match, Switch, mergeProps } from 'solid-js'
import AvatarBauhaus from './avatar-bauhaus'
import AvatarBeam from './avatar-beam'
import AvatarMarble from './avatar-marble'
import AvatarPixel from './avatar-pixel'
import AvatarRing from './avatar-ring'
import AvatarSunset from './avatar-sunset'

const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble']
const deprecatedVariants = { geometric: 'beam', abstract: 'bauhaus' }

const Avatar = props => {
  const avatarProps = mergeProps(
    {
      variant: 'marble',
      colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
      name: 'Clara Barton',
      square: false,
      title: '',
      size: 40,
    },
    props,
  )
  const checkedVariant = () => {
    if (Object.keys(deprecatedVariants).includes(props.variant)) {
      return deprecatedVariants[props.variant as keyof typeof deprecatedVariants]
    }
    if (variants.includes(props.variant)) {
      return props.variant
    }
    return 'marble'
  }
  const avatars: { [key: string]: JSX.Element } = {
    pixel: <AvatarPixel {...avatarProps} />,
    bauhaus: <AvatarBauhaus {...avatarProps} />,
    ring: <AvatarRing {...avatarProps} />,
    beam: <AvatarBeam {...avatarProps} />,
    sunset: <AvatarSunset {...avatarProps} />,
    marble: <AvatarMarble {...avatarProps} />,
  }
  // return avatars[checkedVariant()]
  return (
    <Switch fallback={<AvatarMarble {...avatarProps} />}>
      {Object.keys(avatars).map(key => (
        <Match when={checkedVariant() === key}>{avatars[key]}</Match>
      ))}
    </Switch>
  )
}

export default Avatar
