import * as React from 'react';
import SvgIcon from '../Icon';

const IconViewArray: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" />
  </SvgIcon>
);

export default IconViewArray;
