import { useCallback, useState } from 'react';

import { useParams } from 'react-router-dom';
import LetterDetailForm from './LetterDetailForm';
import LetterDetailModal from './LetterDetailModal';

function LetterDetail() {
  const [selectedLetterId, setSelectedLetterId] = useState(0);

  const { letterId } = useParams();

  const handleUserLetterClick = useCallback(
    (id: number) => {
      setSelectedLetterId(id);
    },
    [letterId]
  );

  return (
    <>
      <LetterDetailForm
        letterId={letterId}
        onLetterClick={handleUserLetterClick}
      />
      {!!selectedLetterId && (
        <LetterDetailModal
          letterId={selectedLetterId}
          onLetterClick={handleUserLetterClick}
        />
      )}
    </>
  );
}

export default LetterDetail;
