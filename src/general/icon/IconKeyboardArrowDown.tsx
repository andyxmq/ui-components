import * as React from 'react';
import SvgIcon from '../Icon';

const IconKeyboardArrowDown: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
  </SvgIcon>
);

export default IconKeyboardArrowDown;
