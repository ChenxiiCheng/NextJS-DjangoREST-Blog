import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { List, Breadcrumb, Affix, Spin } from 'antd';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import MarkdownNavbar from 'markdown-navbar';
import Momoent from 'moment';
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from '@ant-design/icons';
import Author from '../../components/Author';

import '../../styles/pages/detail.css';

export default function Home() {
  const router = useRouter();
  const posts = useSelector((state) => state.articles);
  const post = posts.filter((article) => article.id == router.query.id)[0];

  return (
    <>
      <Head>
        <title>Article | Chenxii</title>
      </Head>
      <div className="wrapper">
        <div className="common_main">
          <div className="common_left">
            <div className="breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link href="/video">
                    <a>视频列表</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="detail_title">Reach实战视频教程</div>
            <div className="detail_info">
              <span>
                <CalendarOutlined />{' '}
                {Momoent(post.pub_date).format('MMMM Do YYYY, h:mm:ss a')}{' '}
              </span>
              <span>
                <FolderOutlined /> {post.category}{' '}
              </span>
              <span>
                <FireOutlined /> {post.read_nums} 人
              </span>
            </div>
            <div className="detail_content">
              <ReactMarkdown source={post.content} escapeHtml={false} />
            </div>
          </div>
          <div className="common_right">
            <Author />
          </div>
          <Affix offsetTop={1}>
            <div className="common_new">
              <div className="article_nav_title">Article Directory</div>
              <MarkdownNavbar
                className="article_menu"
                source={post.content}
                ordered={false}
              />
            </div>
          </Affix>
        </div>
      </div>
    </>
  );
}
