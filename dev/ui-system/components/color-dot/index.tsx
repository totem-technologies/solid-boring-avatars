// import { ChromePicker } from 'react-color'
import { Show, createSignal } from 'solid-js'
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

const ColorDot = ({ value, onChange }) => {
  const [pickerIsOpen, setPickerIsOpen] = createSignal(false)

  return (
    <DotWrapper>
      <Wrapper
        color={value}
        onClick={() => setPickerIsOpen(!pickerIsOpen)}
        style={{ background: value }}
      />
      <Show when={pickerIsOpen()} fallback={<div>color picker</div>}>
        <PickerWrapper>
          {/* <ChromePicker color={value} onChange={v => onChange(v.hex)} disableAlpha /> */}
          color picker
        </PickerWrapper>
      </Show>
    </DotWrapper>
  )
}

export default ColorDot
