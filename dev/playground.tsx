import colors from 'nice-color-palettes/1000.json'
import { Component, For, JSXElement, createEffect, createSignal } from 'solid-js'
import { styled } from 'solid-styled-components'
import Avatar from '../src'
import { exampleNames } from './example-names'
import { BaseStyles, Button, ColorDot, Segment, SegmentGroup } from './ui-system'

const paletteColors = colors

const Header = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-m);
  padding: var(--pagePadding);
  align-items: center;
`

const ColorsSection = styled('div')`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: max-content;
  grid-gap: var(--sp-xs);
`

const Banner = styled('div')`
  background: var(--c-body);
  color: var(--c-background);
  padding: var(--sp-l);
`

const AvatarsGrid = styled('div')`
  display: grid;
  grid-gap: var(--sp-l) var(--sp-s);
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  padding: var(--pagePadding);
`

const AvatarContainer = styled('div')`
  display: grid;
  grid-gap: var(--sp-s);
  padding: 0 var(--sp-m);
  font-size: 0.8rem;
`

const AvatarSection = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled('input')`
  padding: var(--textbox);
  font: inherit;
  color: inherit;
  border: 1px solid transparent;
  transition: 0.5s;
  width: 100%;
  text-align: center;
  border-radius: 100rem;
  background: transparent;

  &:hover {
    border-color: var(--c-fieldHover);
    transition: 0.2s;
  }

  &:focus {
    border-color: var(--c-fieldFocus);
    outline: none;
  }
`

const AvatarWrapper = (props: {
  name: string
  playgroundColors: string[]
  size: number
  variant: keyof typeof Avatar.Variants
  square?: boolean
}) => {
  const [avatarName, setAvatarName] = createSignal(props.name)
  const handleFocus = (
    event: FocusEvent & { currentTarget: HTMLInputElement; target: HTMLInputElement },
  ) => event.target.select()

  return (
    <AvatarContainer>
      <AvatarSection class="Avatar">
        <Avatar
          name={avatarName()}
          colors={props.playgroundColors}
          size={props.size}
          variant={props.variant}
          square={props.square}
        />
      </AvatarSection>
      <Input
        value={avatarName()}
        onInput={e => setAvatarName(e.target.value)}
        onFocus={e => handleFocus(e)}
      />
    </AvatarContainer>
  )
}

const getRandomPaletteIndex = () => Math.floor(Math.random() * paletteColors.length)

const avatarSizes = {
  small: 40,
  medium: 80,
  large: 128,
}

const SizeDotWrapper: Component<{
  isSelected: boolean
  icon?: JSXElement
  onClick: () => void
}> = styled(Button)`
  ${p =>
    p.isSelected ? `background-color: var(--c-background)` : `background-color: transparent`};
  ${p => (!p.isSelected ? `color: var(--c-fade)` : ``)};
  &:hover {
    ${p => (p.isSelected ? `background-color: var(--c-background)` : '')};
  }
`

const Dot: Component<{ size: number }> = styled.div`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background-color: currentColor;
  border-radius: 10rem;
`

const SizeDot = (props: { size: number; isSelected: boolean; onClick: () => void }) => {
  const getSize = () => {
    switch (props.size) {
      case avatarSizes.small:
        return 8
      case avatarSizes.medium:
        return 14
      case avatarSizes.large:
        return 20
      default:
        return 0
    }
  }
  return <SizeDotWrapper icon={<Dot size={getSize()} />} {...props} />
}

const variants = Avatar.Variants

const Playground = () => {
  const defaultPlaygroundColors = paletteColors[493]
  const [playgroundColors, setPlaygroundColors] = createSignal(defaultPlaygroundColors!)

  const [dotColor0, setDotColor0] = createSignal(playgroundColors()[0] as string)
  const [dotColor1, setDotColor1] = createSignal(playgroundColors()[1] as string)
  const [dotColor2, setDotColor2] = createSignal(playgroundColors()[2] as string)
  const [dotColor3, setDotColor3] = createSignal(playgroundColors()[3] as string)
  const [dotColor4, setDotColor4] = createSignal(playgroundColors()[4] as string)

  const filteredColors = () => [dotColor0(), dotColor1(), dotColor2(), dotColor3(), dotColor4()]

  const handleRandomColors = () => {
    setPlaygroundColors(paletteColors[getRandomPaletteIndex()] as string[])
  }

  createEffect(() => {
    setDotColor0(playgroundColors()[0] as string)
    setDotColor1(playgroundColors()[1] as string)
    setDotColor2(playgroundColors()[2] as string)
    setDotColor3(playgroundColors()[3] as string)
    setDotColor4(playgroundColors()[4] as string)
  })

  const [avatarSize, setAvatarSize] = createSignal(avatarSizes.medium)
  const [variant, setVariant] = createSignal<keyof typeof variants>(variants.beam)
  const [isSquare, setSquare] = createSignal(false)

  return (
    <>
      <BaseStyles />
      <Banner>
        This is a a fork of the original Boring Avatars , but for Solidjs. You can find the original
        at{' '}
        <a style={{ color: 'white' }} href="https://boringavatars.com">
          boringavatars.com
        </a>{' '}
        . For suggestions, issues or PR's go to the{' '}
        <a
          style={{ color: 'white' }}
          href="https://github.com/totem-technologies/solid-boring-avatars"
        >
          GitHub repository
        </a>
      </Banner>
      <Header>
        <SegmentGroup>
          <For each={Object.values(variants)}>
            {variantItem => (
              <Segment
                onClick={() => setVariant(variantItem)}
                isSelected={variantItem === variant()}
              >
                {variantItem}
              </Segment>
            )}
          </For>
        </SegmentGroup>
        <ColorsSection>
          <ColorDot value={dotColor0()} onChange={color => setDotColor0(color)} />
          <ColorDot value={dotColor1()} onChange={color => setDotColor1(color)} />
          <ColorDot value={dotColor2()} onChange={color => setDotColor2(color)} />
          <ColorDot value={dotColor3()} onChange={color => setDotColor3(color)} />
          <ColorDot value={dotColor4()} onChange={color => setDotColor4(color)} />
        </ColorsSection>

        <Button onClick={() => handleRandomColors()}>Random palette</Button>
        <Button onClick={() => setSquare(!isSquare())}>{isSquare() ? 'Round' : 'Square'}</Button>
        <SegmentGroup>
          <For each={Object.entries(avatarSizes)}>
            {([key, value], index) => (
              <SizeDot
                onClick={() => setAvatarSize(value)}
                isSelected={value === avatarSize()}
                size={value}
              />
            )}
          </For>
        </SegmentGroup>
      </Header>
      <AvatarsGrid>
        {exampleNames.map((exampleName, name) => (
          <AvatarWrapper
            size={avatarSize()}
            square={isSquare()}
            name={exampleName}
            playgroundColors={filteredColors() as string[]}
            variant={variant()}
          />
        ))}
      </AvatarsGrid>
    </>
  )
}

export default Playground
