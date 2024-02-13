import React, { useEffect, useRef } from 'react';

import BottomHeader from 'components/BottomSheet/BottomHeader';
import BottomContent from 'components/BottomSheet/BottomContent';

export default function BottomSheet() {
  const BottonSheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', () => {
      BottonSheetRef.current?.style.setProperty(
        'transform',
        `translateY(-${300}px)`
      );
    });
  }, []);

  const onBottomSheetCancelClick = () => {
    if (BottonSheetRef.current) {
      BottonSheetRef.current?.style.setProperty(
        'transform',
        'translateY(0rem)'
      );
    }
  };

  return (
    <div
      ref={BottonSheetRef}
      className="z-50 fixed inset-x-0 h-[300px] -bottom-[300px] flex justify-center rounded-[15px] ease-in-out delay-30 duration-700 shadow-home  bg-white"
    >
      <div className="w-full max-w-[366px] px-4">
        <BottomHeader onClick={onBottomSheetCancelClick} />
        <BottomContent />
      </div>
    </div>
  );
}
