import React from 'react';

import ToolTipLayOut from 'components/ToolTip/ToolTipLayOut';
import ToolTipSection from 'components/ToolTip/ToolTipSection';
import ToolTipContainer from 'components/ToolTip/ToolTipContainer';

type Props = {
  childen?: React.ReactNode;
};

export default function ToolTip({ childen }: Props) {
  return (
    <ToolTipLayOut>
      <ToolTipSection>
        <ToolTipContainer>{childen}</ToolTipContainer>
      </ToolTipSection>
    </ToolTipLayOut>
  );
}
