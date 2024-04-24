import { Component, JSXElement } from 'solid-js'
import { styled } from 'solid-styled-components'

const ButtonWrapper: Component<{
  hasChildren: JSXElement
  children: JSXElement
  onClick: () => void
  icon?: JSXElement
}> = styled('div')`
  appearance: none;
  font: inherit;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${p => (p.hasChildren ? `var(--textbox-x)` : '')};
  width: ${p => (!p.hasChildren && p.icon ? `var(--buttonHeight)` : 'auto')};
  background: var(--c-button);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 20rem;
  font-size: 0.7rem;
  line-height: 1.3;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  min-height: var(--buttonHeight);

  &:hover {
    background-color: var(--c-buttonHover);
  }
`

const Button = (props: { icon?: JSXElement; children: JSXElement; onClick: () => void }) => {
  return (
    <ButtonWrapper
      icon={props.icon}
      hasChildren={props.children}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
      {props.icon && props.icon}
    </ButtonWrapper>
  )
}

export default Button
