import * as React from 'react';
import SvgIcon from '../Icon';

const IconSkipNext: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </SvgIcon>
);

export default IconSkipNext;
