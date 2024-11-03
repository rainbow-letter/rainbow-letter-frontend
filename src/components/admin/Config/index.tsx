import { Switch } from 'antd';
import apiRequest from 'api';
import { useState } from 'react';

const toggleGemini = async (isGeminiOn: boolean) => {
  const response = await apiRequest.put(`/api/admins/ai/config`, {
    useABTest: isGeminiOn,
    selectPrompt: 'B',
  });

  return response.data;
};

const AdminConfig = () => {
  const [isGeminiOn, setIsGeminiOn] = useState(false);

  const handleGeminiToggle = () => {
    setIsGeminiOn((prev) => {
      toggleGemini(!prev);
      return !prev;
    });
  };

  return (
    <section className="flex items-center justify-between pl-3">
      <span className="text-solo-large">GEMINI 사용하기</span>
      <Switch
        className={`${isGeminiOn ? 'bg-primary' : 'bg-gray-300'}`}
        checkedChildren="ON"
        unCheckedChildren="OFF"
        checked={isGeminiOn}
        onChange={handleGeminiToggle}
      />
    </section>
  );
};

export default AdminConfig;
