import * as React from 'react';
import SvgIcon from '../Icon';

const IconSignalCellularConnectedNoInternet1Bar: React.SFC<
  React.SVGProps<SVGSVGElement>
> = ({ ref, ...props }) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M22 8V2L2 22h16V8z" />
    <path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" />
  </SvgIcon>
);

export default IconSignalCellularConnectedNoInternet1Bar;
