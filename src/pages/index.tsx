import { Button } from 'antd';
import React from 'react';

const index: React.FC = () => {
  const toNewPage = () => {
    window.open('/testNewTab');
  };

  return (
    <div>
      <div>test demo</div>
      <br />
      <a id="test_btn" href="https://www.baidu.com/" target="_blank" rel="noreferrer">
        open a new tab
      </a>
      <br />
      <Button id="toNewPageBtn" onClick={toNewPage}>
        click跳转到新页面
      </Button>
    </div>
  );
};

export default index;
