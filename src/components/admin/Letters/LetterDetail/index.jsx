/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';

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

function LetterDetail() {
  const [newContent, setNewContentValue] = useState('');
  const [petImage, setPetImage] = useState('');
  const [letterImage, setLetterImage] = useState('');

  const navigate = useNavigate();
  const { letterId } = useParams();

  const isLoading = useSelector(
    (state) => state.adminLetters.status === 'loading'
  );

  const userLetters = useSelector((state) => state.adminUserLetters.letters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserLetters());
  }, [dispatch]);

  const letterData = userLetters.find(
    (letter) => letter.id === Number(letterId)
  );

  useEffect(() => {
    if (letterData) {
      setNewContentValue(letterData.reply.content);
    }
  }, [letterData]);

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
    navigate(`/admin/letters/${id}`);
    setLetterImage('');
  };

  if (!letterData) {
    return <div>Loading...</div>;
  }

  const { pet, reply } = letterData;
  const replyStatus = getReplyStatus(reply.timestamp, reply.inspectionTime);

  return (
    <div className="min-w-[300%] w-screen h-screen flex gap-x-4 p-6 bg-white overflow-auto z-20">
      {/* 왼쪽 */}
      <section className="flex flex-col gap-y-6 flex-1 bg-white">
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
                      className={`cursor-pointer hover:bg-gray-100 ${isSelected && 'text-blue-600 font-semibold'}`}
                      onClick={() => handleUserLetterClick(row.id)}
                    >
                      <td className="text-center">{row.count}</td>
                      <td className="text-center whitespace-nowrap">
                        {row.pet.name}
                      </td>
                      <td className="text-center whitespace-nowrap truncate">
                        {row.summary}
                      </td>
                      <td
                        className={`text-center text-white whitespace-nowrap ${replyStatusInfo[replyStatus]}`}
                      >
                        {replyStatus}
                      </td>
                      <td className="text-center whitespace-nowrap">
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
      <section className="flex flex-col flex-[2] gap-y-5 bg-white">
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
              <img
                className="w-[132px] h-[132px]"
                src={petImage}
                alt={pet.name}
              />
            </div>
          </div>
        </header>
        <main className="flex flex-col flex-grow gap-y-3 p-2">
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
          <div className="flex flex-grow bg-gray-100 p-3 rounded">
            {letterData.content}
          </div>
        </main>
      </section>

      {/* 오른쪽 */}
      <section className="flex flex-col gap-y-2 flex-[2] h-full">
        <header className="w-full flex justify-between">
          <div className="flex gap-x-2 items-center">
            <span className="text-[20px] font-bold">답장 작성</span>
            <div
              className={`flex items-center text-white px-1 rounded ${replyStatusInfo[replyStatus]}`}
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
        <main className="flex flex-grow">
          <textarea
            className="w-full p-5 rounded-lg bg-gray-100 resize-none"
            maxLength={MAX_CONTENT_LENGTH}
            value={newContent}
            onChange={({ target }) => setNewContentValue(target.value)}
          />
        </main>
        <footer className="flex justify-between">
          <div className="text-solo-label text-gray-1 mr-3">
            {`${newContent.length} / ${MAX_CONTENT_LENGTH}`}
          </div>
          <div className="flex gap-x-2">
            <button
              className={`py-2 px-3 font-semibold rounded ${
                isLoading
                  ? 'cursor-not-allowed'
                  : 'hover:bg-pink-400 bg-pink-300'
              }`}
              type="button"
              disabled={isLoading}
              onClick={handleRegenerateClick}
            >
              GPT 재생성
            </button>
            <button
              className={`py-2 px-3  text-white font-semibold rounded ${
                isChanged ? 'hover:bg-green-400 bg-green-500' : 'bg-gray-300'
              }`}
              disabled={!isChanged}
              type="button"
              onClick={handleSaveClick}
            >
              저장
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default LetterDetail;
