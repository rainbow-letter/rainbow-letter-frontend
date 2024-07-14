import React from 'react';

import Layout from 'components/Common/BottomSheet/Layout';
import Container from 'components/Common/BottomSheet/Container';
import Section from 'components/Common/BottomSheet/Section';

type Props = {
  isShow?: boolean;
  handlePetsListShow: (state: boolean) => void;
  contents: React.ReactNode;
};

export default function BottomSheet({
  isShow,
  handlePetsListShow,
  contents,
}: Props) {
  return (
    <Layout>
      <Container isShow={isShow} />
      <Section isShow={isShow} handlePetsListShow={handlePetsListShow}>
        {contents}
      </Section>
    </Layout>
  );
}
