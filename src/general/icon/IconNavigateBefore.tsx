import * as React from 'react';
import SvgIcon from '../Icon';

const IconNavigateBefore: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </SvgIcon>
);

export default IconNavigateBefore;
