'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumbs from '@/components/BreadCrumbs';
import BlogContactForm from '@/components/blogs/BlogContactForm';
import Icons from '@/components/Icons';

const API_BASE_URL = 'https://api.nakshatranamahacreations.in';

const toUrlFriendly = (title) => {
  if (!title || typeof title !== 'string') return 'untitled';
  return title.replace(/\s+/g, '-').toLowerCase();
};

const BlogDetailsPage = () => {
  const { title } = useParams(); // 👈 This now matches the [title] in your route
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!title) return;
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/blogs/blog/title/${title}`);
        const blogData = response.data.data;

        setBlog({
          id: blogData._id,
          title: blogData.title,
          description: blogData.description,
          metaTitle: blogData.metaTitle || blogData.title,
          metaDescription: blogData.metaDescription,
          bannerImage: blogData.bannerImage.startsWith('http')
            ? blogData.bannerImage
            : `${API_BASE_URL}/uploads/${blogData.bannerImage}`,
          date: new Date(blogData.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        });
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setError('Blog not found.');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [title]);

  const schemaMarkup = blog
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: blog.title,
        description: blog.metaDescription,
        author: {
          '@type': 'Person',
          name: 'Nakshatra Namaha Creations',
          url: 'https://nakshatranamahacreations.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Nakshatra Namaha Creations',
          logo: {
            '@type': 'ImageObject',
            url: 'https://nakshatranamahacreations.com/media/logo.png',
          },
        },
        datePublished: blog.date,
        dateModified: blog.date,
        image: blog.bannerImage,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://nakshatranamahacreations.com/blog/${toUrlFriendly(blog.title)}`,
        },
      }
    : {};

  const breadcrumbPaths = blog
    ? [
        { name: 'Home', link: '/' },
        { name: 'Blog', link: '/blog' },
        { name: blog.title, link: `/blog/${toUrlFriendly(blog.title)}` },
      ]
    : [];

  if (loading) return <p>Loading...</p>;
  if (error || !blog) return <p>{error || 'Blog not found.'}</p>;

  return (
    <div>
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <link
          rel="canonical"
          href={`https://nakshatranamahacreations.com/blog/${toUrlFriendly(blog.title)}`}
        />
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:url" content={`https://nakshatranamahacreations.com/blog/${toUrlFriendly(blog.title)}`} />
        <meta property="og:image" content={blog.bannerImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.bannerImage} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Head>

      <Breadcrumbs paths={breadcrumbPaths} />

      <div className="blogDetailContainer" style={{ paddingInline: '4%', marginTop: '30px' }}>
        <Row>
          <Col sm={9}>
            <div className="position-relative">
              <img
                src={blog.bannerImage}
                alt={blog.title}
                width="100%"
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <h1
                className="blogHeading1 bg-white shadow mx-4 text-center position-absolute p-2"
                style={{ bottom: '-40px', fontSize: '30px' }}
              >
                {blog.title}
              </h1>
            </div>
            <div className="mt-5 ms-lg-4 mx-3">
              <div id="content">
                <div
                  style={{ textAlign: 'justify' }}
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />
              </div>
            </div>
          </Col>
          <Col sm={3} className="p-lg-0 p-4">
            <div style={{ position: 'sticky', top: '20px' }}>
              <BlogContactForm />
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: '10%' }}>
          <Container>
            <Icons />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
