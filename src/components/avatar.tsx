import { Match, Switch, mergeProps } from 'solid-js'
import AvatarBauhaus from './avatar-bauhaus'
import AvatarBeam from './avatar-beam'
import AvatarMarble from './avatar-marble'
import AvatarPixel from './avatar-pixel'
import AvatarRing from './avatar-ring'
import AvatarSunset from './avatar-sunset'

// const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'] as const

const Variants = {
  pixel: 'pixel',
  bauhaus: 'bauhaus',
  ring: 'ring',
  beam: 'beam',
  sunset: 'sunset',
  marble: 'marble',
} as const

const Avatar = (props: {
  variant?: keyof typeof Variants
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
  return (
    <Switch fallback={<AvatarMarble {...avatarProps} />}>
      <Match when={props.variant === 'pixel'}>
        <AvatarPixel {...avatarProps}></AvatarPixel>
      </Match>
      <Match when={props.variant === 'bauhaus'}>
        <AvatarBauhaus {...avatarProps}></AvatarBauhaus>
      </Match>
      <Match when={props.variant === 'ring'}>
        <AvatarRing {...avatarProps}></AvatarRing>
      </Match>
      <Match when={props.variant === 'beam'}>
        <AvatarBeam {...avatarProps}></AvatarBeam>
      </Match>
      <Match when={props.variant === 'sunset'}>
        <AvatarSunset {...avatarProps}></AvatarSunset>
      </Match>
      <Match when={props.variant === 'marble'}>
        <AvatarMarble {...avatarProps}></AvatarMarble>
      </Match>
    </Switch>
  )
}

Avatar.Variants = Variants

export default Avatar
