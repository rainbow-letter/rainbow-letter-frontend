/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import {
  calculateDDay,
  formatDateToYYMMDDHHSS,
  formatDateToYYMMDD,
} from 'utils/date';
import { extractFirstTenChars } from 'utils/string';
import { getImage } from 'api/images';
import defaultImage from 'assets/Logo_256px.png';
import {
  editReply,
  regenerateReply,
} from '../../../../store/admin/letter-actions';
import { getReplyStatus, replyStatusInfo } from '../LetterTable/TableRow';
import { fetchUserLetters } from '../../../../store/admin/userLetter-actions';

const MAX_CONTENT_LENGTH = 1000;

function LetterDetailForm({ letterId, isModal = false, onLetterClick }) {
  const [newContent, setNewContentValue] = useState('');
  const [petImage, setPetImage] = useState('');
  const [letterImage, setLetterImage] = useState('');

  const navigate = useNavigate();

  const isPageLoading = useSelector(
    (state) => state.adminLetters.status === 'loading'
  );

  const userLetters = useSelector((state) => state.adminUserLetters.letters);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isModal) return;
    dispatch(fetchUserLetters());
  }, [dispatch]);

  const letterData = userLetters.find(
    (letter) => letter.id === Number(letterId)
  );

  useEffect(() => {
    if (letterData) {
      setNewContentValue(letterData.reply.content);
    }
  }, [letterData?.reply?.content]);

  useEffect(() => {
    if (letterData?.pet?.image?.objectKey) {
      const getPetImage = async () => {
        const image = await getImage(letterData.pet.image.objectKey);
        setPetImage(image);
      };
      getPetImage();
    } else {
      setPetImage(defaultImage);
    }
  }, [letterData]);

  useEffect(() => {
    if (letterData?.image?.objectKey) {
      const getLetterImage = async () => {
        const image = await getImage(letterData.image.objectKey);
        setLetterImage(image);
      };
      getLetterImage();
    }
  }, [letterData]);

  const handleRegenerateClick = () => {
    if (letterData.reply.timestamp)
      return alert('이미 답장을 보낸 편지입니다.');
    dispatch(regenerateReply(letterData.id));
  };

  const isChanged = newContent !== letterData?.reply.content;
  const handleSaveClick = () => {
    if (letterData.reply.timestamp)
      return alert('이미 답장을 보낸 편지입니다.');

    const newSummary = extractFirstTenChars(newContent);
    dispatch(
      editReply({
        replyId: letterData.reply.id,
        editedReply: {
          summary: newSummary,
          content: newContent,
        },
      })
    );
    navigate('/admin/letters/');
  };

  const handleUserLetterClick = (id) => {
    onLetterClick(id);
  };

  if (!letterData) {
    return <div>Loading...</div>;
  }

  const { pet, reply } = letterData;
  const replyStatus = getReplyStatus(reply.timestamp, reply.inspectionTime);

  return (
    <div
      className={`flex h-screen min-h-[250%] flex-col gap-6 overflow-auto bg-white px-2 pb-10 sm:min-h-0 sm:flex-row sm:gap-x-4 ${isModal && 'pt-10'}`}
    >
      {/* 왼쪽 */}
      <section className="flex flex-1 flex-col gap-y-6 bg-white">
        <header>
          <div className="bg-gray-100 p-2">
            <span>회원 정보</span>
          </div>
          <div className="flex justify-between p-2 text-gray-500">
            <div className="flex gap-x-10">
              <div className="flex flex-col gap-y-1">
                <span className="whitespace-nowrap">아이디</span>
                <span className="whitespace-nowrap">핸드폰번호</span>
                <span className="whitespace-nowrap">가입일</span>
                <span className="whitespace-nowrap">편지회차</span>
                <span className="whitespace-nowrap">마지막 로그인</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="whitespace-nowrap">{letterData.email}</span>
                <span className="whitespace-nowrap">
                  {letterData.phoneNumber || '-'}
                </span>
                <span className="whitespace-nowrap">
                  {formatDateToYYMMDD(letterData.memberCreatedAt)}
                </span>
                <span className="whitespace-nowrap">{letterData.count}</span>
                <span className="whitespace-nowrap">
                  {formatDateToYYMMDD(letterData.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="bg-gray-100 p-2">
            <span>최근 편지 리스트</span>
          </div>
          <div className="text-[10px]">
            <table className="w-full">
              <thead>
                <tr>
                  <th>회차</th>
                  <th>받는이</th>
                  <th>편지내용</th>
                  <th>상태</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody>
                {userLetters.map((row) => {
                  const replyStatus = getReplyStatus(
                    row.reply.timestamp,
                    row.reply.inspectionTime
                  );
                  const isSelected = row.id === Number(letterId);
                  return (
                    <tr
                      key={row.id}
                      className={`cursor-pointer hover:bg-gray-100 ${isSelected && 'font-semibold text-blue-600'}`}
                      onClick={() => handleUserLetterClick(row.id)}
                    >
                      <td className="text-center">{row.count}</td>
                      <td className="whitespace-nowrap text-center">
                        {row.pet.name}
                      </td>
                      <td className="truncate whitespace-nowrap text-center">
                        {row.summary}
                      </td>
                      <td
                        className={`whitespace-nowrap text-center text-white ${replyStatusInfo[replyStatus]}`}
                      >
                        {replyStatus}
                      </td>
                      <td className="whitespace-nowrap text-center">
                        {formatDateToYYMMDD(row.createdAt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </section>

      {/* 가운데 */}
      <section className="flex flex-[2] flex-col gap-y-5 bg-white">
        <header>
          <div className="bg-gray-100 p-2">
            <span>반려동물 정보</span>
          </div>
          <div className="flex justify-between p-2 text-gray-500">
            <div className="flex gap-x-10">
              <div className="flex flex-col gap-y-1">
                <span className="whitespace-nowrap">이름</span>
                <span className="whitespace-nowrap">관계</span>
                <span className="whitespace-nowrap">종류</span>
                <span className="whitespace-nowrap">성격</span>
                <span className="whitespace-nowrap">기일</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span>{pet.name}</span>
                <span>{pet.owner}</span>
                <span>{pet.species}</span>
                <span>{pet.personalities || '-'}</span>
                <div className="flex gap-x-1">
                  {pet.deathAnniversary && (
                    <>
                      <span>{pet.deathAnniversary}</span>
                      <span>({calculateDDay(pet.deathAnniversary)})</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="">
              <img className="size-[132px]" src={petImage} alt={pet.name} />
            </div>
          </div>
        </header>
        <main className="flex grow flex-col gap-y-3 sm:p-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <span className="text-[20px] font-bold">
                {letterData.count}회차 편지
              </span>
              {letterImage && (
                <Link
                  className="text-primary underline"
                  to={letterImage}
                  target="_blank"
                >
                  (사진보기)
                </Link>
              )}
            </div>
            <span>등록일 {formatDateToYYMMDDHHSS(letterData.createdAt)}</span>
          </div>
          <div className="flex grow rounded bg-gray-100 p-3">
            {letterData.content}
          </div>
        </main>
      </section>

      {/* 오른쪽 */}
      <section className="flex h-full flex-[2] flex-col gap-y-2">
        <header className="flex w-full justify-between">
          <div className="flex items-center gap-x-2">
            <span className="text-[20px] font-bold">답장 작성</span>
            <div
              className={`flex items-center rounded px-1 text-white ${replyStatusInfo[replyStatus]}`}
            >
              <span>{replyStatus}</span>
            </div>
          </div>
          <div className="flex flex-col">
            {!!reply.inspectionTime && (
              <span>검수일 {formatDateToYYMMDDHHSS(reply.inspectionTime)}</span>
            )}
            {!!reply.timestamp && (
              <span>발송일 {formatDateToYYMMDDHHSS(reply.timestamp)}</span>
            )}
          </div>
        </header>
        <main className="flex h-[80vh] grow">
          <textarea
            className="w-full resize-none rounded-lg bg-gray-100 p-5"
            maxLength={MAX_CONTENT_LENGTH}
            value={newContent}
            onChange={({ target }) => setNewContentValue(target.value)}
          />
        </main>
        <footer className="flex justify-between">
          <div className="mr-3 text-solo-label text-gray-1">
            {`${newContent?.length} / ${MAX_CONTENT_LENGTH}`}
          </div>
          {isModal ? (
            <button
              className="rounded bg-gray-300 px-5 py-2 font-semibold text-white"
              type="button"
              onClick={() => onLetterClick(0)}
            >
              닫기
            </button>
          ) : (
            <div className="flex gap-x-2">
              <button
                className={`rounded px-3 py-2 font-semibold ${
                  isPageLoading
                    ? 'cursor-not-allowed'
                    : 'bg-pink-300 hover:bg-pink-400'
                }`}
                type="button"
                disabled={isPageLoading}
                onClick={handleRegenerateClick}
              >
                GPT 재생성
              </button>
              <button
                className={`rounded px-3 py-2 font-semibold text-white ${
                  isChanged ? 'bg-green-500 hover:bg-green-400' : 'bg-gray-300'
                }`}
                disabled={!isChanged}
                type="button"
                onClick={handleSaveClick}
              >
                저장
              </button>
            </div>
          )}
        </footer>
      </section>
    </div>
  );
}

export default LetterDetailForm;
