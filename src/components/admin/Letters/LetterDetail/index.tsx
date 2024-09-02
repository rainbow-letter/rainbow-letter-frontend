/* eslint-disable */

import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import apiRequest from 'api';
import LetterDetailForm from './LetterDetailForm';
import LetterDetailModal from './LetterDetailModal';
import { getAdminLetterDetail } from '../../../../api/letter';

function LetterDetail() {
  const location = useLocation();
  const { letter, pet, user } = location.state;

  const [selectedLetterId, setSelectedLetterId] = useState(0);
  const [selectedLetterData, setSelectedLetterData] = useState<any>(null);

  const fetchLetterDetail = async (id: number | string) => {
    const res = await apiRequest.get(
      `/api/admins/letters/${id}?user=${user.id}&pet=${pet.id}`
    );

    return res.data;
  };

  const handleUserLetterClick = async (id: number) => {
    setSelectedLetterId(id);

    if (!!id) {
      const res = await fetchLetterDetail(id);
      console.log('res', res);
      setSelectedLetterData(res);
    }
  };

  if (!location.state) {
    return null;
  }

  return (
    <>
      <LetterDetailForm
        letterData={location.state}
        letterId={letter.id}
        onLetterClick={handleUserLetterClick}
        userId={user.id}
        petId={pet.id}
      />
      {!!selectedLetterData && !!selectedLetterId && (
        <LetterDetailModal
          letterData={selectedLetterData}
          letterId={selectedLetterId}
          onLetterClick={handleUserLetterClick}
        />
      )}
    </>
  );
}

export default LetterDetail;
