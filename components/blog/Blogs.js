'use client';

import blogs from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import classes from '../../styles/blogs.module.scss';

const Blogs = () => {
  return (
    <div id="blog" className="blog section-pb">
      <div className={`${classes.blogArea}`}>
        <Container>
          <Row>
          {blogs.map((blog, index)=>{
            const {id, title, date, img, tag, desc} = blog;
            return (
              <Col md={6} lg={4} className="mb-4" key={id}>
                <div className={`${classes.singleBlog}`}>
                  <Link href="#" className={`${classes.blogImgBox}`}>
                    <Image
                      src={img}
                      alt="blog-img"
                      className={`${classes.blogImg}`}
                    />
                    <p className={`${classes.blogCat}`}>{tag}</p>
                  </Link>
                  <div className={`${classes.blogContent}`}>
                    <p className={`${classes.blogDate}`}>{date}</p>
                    <Link href="#" className={`${classes.blogTitle}`}>
                      {title}
                    </Link>
                    <Link href="/" className="btn-text">
                      Explore Now{' '}
                      <span>
                        <HiOutlineArrowNarrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blogs;
