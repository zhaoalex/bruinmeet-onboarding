// @flow

import * as React from 'react';
import Button from './Button';

type LoginType = "login" | "logout" | "signup";

type PropsType = {
  override?: LoginType,
  isLoggedIn: boolean
}

function LogInButton(props: PropsType): React.Element<*> {
  const getButtonText = (override?: LoginType) => {
    switch(override) {
      case "login": return "Log In";
      case "logout": return "Log Out";
      case "signup": return "Sign Up";
      default: return (props.isLoggedIn ? "Log Out" : "Log In");
    }
  }

  const getClickText = (override?: LoginType) => {
    switch(override) {
      case "login": return "Logging you in...";
      case "logout": return "Logging you out...";
      case "signup": return "Signing you up...";
      default: return (props.isLoggedIn ? "Logging you out..." : "Logging you in...");
    }
  }

  const onClick = () => {
    window.alert(getClickText(props.override));
  }

  return (
    <Button primary onClick={onClick}>{getButtonText(props.override)}</Button>
  )
}

export default LogInButton;