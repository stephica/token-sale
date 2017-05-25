import { injectGlobal } from 'styled-components';
import typography from './typography';

export default () => injectGlobal`
  ${typography}
  /*
  *
  * OVERWRITE NORMALIZE WITH SITE SPECIFIC
  *
  */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: 200;
  }
`;
