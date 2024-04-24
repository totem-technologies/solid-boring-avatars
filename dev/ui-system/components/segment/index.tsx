import { Component, JSX } from 'solid-js'
import { styled } from 'solid-styled-components'
import Button from '../button'

const SegmentGroupWrapper = styled.div`
  background-color: var(--c-button);
  padding: 0.2rem;
  border-radius: 10rem;
  display: inline-flex;
`

const SegmentWrapper: Component<{
  isSelected: boolean
  icon?: JSX.Element
  children: JSX.Element
  onClick: () => void
}> = styled(Button)`
  &:not(:hover) {
    background-color: ${p => (p.isSelected ? `var(--c-background)` : `transparent`)};
  }

  ${p => (p.isSelected ? `background-color: var(--c-background)` : '')};
  ${p => (!p.isSelected ? `color: var(--c-fade)` : '')};
`

export const SegmentGroup = (props: { children: JSX.Element }) => {
  return <SegmentGroupWrapper>{props.children}</SegmentGroupWrapper>
}

const Segment = (props: { isSelected: boolean; children: JSX.Element; onClick: any }) => {
  return <SegmentWrapper {...props}>{props.children}</SegmentWrapper>
}

export default Segment
