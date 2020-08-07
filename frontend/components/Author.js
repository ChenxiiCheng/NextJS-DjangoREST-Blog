import { Avatar, Divider } from 'antd';
import {
  LinkedinOutlined,
  GithubOutlined,
  FileTextOutlined,
  YuqueOutlined,
} from '@ant-design/icons';

import '../styles/components/author.css';

const Author = () => {
  return (
    <div className="author_main">
      <div className="author_avatar">
        <Avatar size={100} src="/img/myAvatar.jpg" />
      </div>
      <div className="author_info">
        <p>
          <strong>Title:</strong> Front End && Full Stack Developer
        </p>
        <p>
          <strong>Location:</strong> New York City, US
        </p>
        <p>
          <strong>Tech Stack:</strong> React, Redux, Next.js, Express, Django
          rest framework, MySQL, PostgreSQL, Mongodb
        </p>
      </div>
      <div className="social_links">
        <Divider>Social Links</Divider>
        <span>
          <a href="https://github.com/ChenxiiCheng" target="_blank">
            <Avatar
              icon={<GithubOutlined />}
              size={30}
              style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
            />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/chenxi-cheng-42a564159/"
            target="_blank"
          >
            <Avatar
              icon={<LinkedinOutlined />}
              size={30}
              style={{ backgroundColor: '#1890ff' }}
            />
          </a>
        </span>
        <span>
          <a href="https://www.yuque.com/chenxi-35kem" target="_blank">
            <Avatar
              icon={<YuqueOutlined />}
              size={30}
              style={{ backgroundColor: '#ade498' }}
            />
          </a>
        </span>
        <span>
          <Avatar
            icon={<FileTextOutlined />}
            size={30}
            style={{ backgroundColor: '#848ccf' }}
          />
        </span>
      </div>
    </div>
  );
};

export default Author;
