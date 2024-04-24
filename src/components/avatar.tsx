import { Match, Switch, mergeProps } from 'solid-js'
import AvatarBauhaus from './avatar-bauhaus'
import AvatarBeam from './avatar-beam'
import AvatarMarble from './avatar-marble'
import AvatarPixel from './avatar-pixel'
import AvatarRing from './avatar-ring'
import AvatarSunset from './avatar-sunset'

const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble']
const deprecatedVariants = { geometric: 'beam', abstract: 'bauhaus' }

const Avatar = (props: {
  variant?: string
  name?: string
  colors?: string[]
  square?: boolean
  size?: number
  title?: string
}) => {
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
    if (Object.keys(deprecatedVariants).includes(avatarProps.variant)) {
      return deprecatedVariants[props.variant as keyof typeof deprecatedVariants]
    }
    if (variants.includes(avatarProps.variant)) {
      return props.variant
    }
    return 'marble'
  }
  // return avatars[checkedVariant()]
  return (
    <Switch fallback={<AvatarMarble {...avatarProps} />}>
      <Match when={checkedVariant() === 'pixel'}>
        <AvatarPixel {...avatarProps}></AvatarPixel>
      </Match>
      <Match when={checkedVariant() === 'bauhaus'}>
        <AvatarBauhaus {...avatarProps}></AvatarBauhaus>
      </Match>
      <Match when={checkedVariant() === 'ring'}>
        <AvatarRing {...avatarProps}></AvatarRing>
      </Match>
      <Match when={checkedVariant() === 'beam'}>
        <AvatarBeam {...avatarProps}></AvatarBeam>
      </Match>
      <Match when={checkedVariant() === 'sunset'}>
        <AvatarSunset {...avatarProps}></AvatarSunset>
      </Match>
      <Match when={checkedVariant() === 'marble'}>
        <AvatarMarble {...avatarProps}></AvatarMarble>
      </Match>
    </Switch>
  )
}

export default Avatar
