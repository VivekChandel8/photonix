import React from 'react'
import { Link } from 'react-router-dom'

import accountCircle from '../static/images/account_circle.svg'
import arrowDown from '../static/images/arrow_down.svg'
import notifications from '../static/images/notifications.svg'
import library from '../static/images/library.svg'
import settings from '../static/images/settings.svg'
import logout from '../static/images/logout.svg'
import '../static/css/Header.css'



export default {
    title: 'Page',
    component: Page,
  };
  
  const Template = (args) => <Page {...args} />;
  
  export const Notification = Template.bind({});
  Notification.args = {
    ...HeaderStories.Notification.args,
  };

  export const UserAccount = Template.bind({});
  UserAccount.args = {
    ...HeaderStories.UserAccount.args,
  };
  
  export const Settings = Template.bind({});
  Settings.args = {
    ...HeaderStories.Settings.args,
  };
  
  export const LogOut = Template.bind({});
  LogOut.args = {
    ...HeaderStories.LogOut.args,
  };
  
  export const Notification = Template.bind({});
  Notification.args = {
    ...HeaderStories.Notifications.args,
  };
  
  export const Notification = Template.bind({});
  Notification.args = {
    ...HeaderStories.Notifications.args,
  };
  