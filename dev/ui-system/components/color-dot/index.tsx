import { styled } from 'solid-styled-components'

const DotWrapper = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  width: var(--buttonHeight);
  height: var(--buttonHeight);
  border-radius: 10rem;
  cursor: pointer;
`

const PickerWrapper = styled.div`
  position: absolute;
  top: 2rem;
`

const ColorDot = (props: { value: string; onChange: (arg0: string) => void }) => {
  return (
    <input
      type="color"
      name="color"
      class={`${Wrapper.class}`}
      value={props.value}
      onInput={e => props.onChange(e.currentTarget.value)}
    />
  )
}

export default ColorDot
