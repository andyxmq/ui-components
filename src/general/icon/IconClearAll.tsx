import * as React from 'react';
import SvgIcon from '../Icon';

const IconClearAll: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" />
  </SvgIcon>
);

export default IconClearAll;
