import { styled } from 'solid-styled-components'

const ButtonWrapper = styled('div')`
  appearance: none;
  font: inherit;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${p => p.hasChildren && `var(--textbox-x)`};
  width: ${p => !p.hasChildren && p.icon && `var(--buttonHeight)`};
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

const Button = props => {
  return (
    <ButtonWrapper icon={props.icon} hasChildren={props.children} {...props}>
      {props.children}
      {props.icon && props.icon}
    </ButtonWrapper>
  )
}

export default Button
