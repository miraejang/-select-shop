import React, { useState } from 'react';
import { addProducts } from '../../api/firebase';
import { imageUploader } from '../../api/imageUploader';
import Button from '../../ui/button/Button';
import styles from './Admin.module.css';

const categories = ['women', 'men', 'beauty', 'life', 'sale'];
export default function Admin() {
  const [product, setProducts] = useState({});
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = Date.now();
    imageUploader(file).then((url) => {
      addProducts({
        ...product,
        price: parseInt(product.price, 10),
        createdAt: now,
        lastUpdate: now,
        image: url,
      });
    });
    setProducts({});
    setFile();
    e.target.reset();
  };
  const handleCahnge = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFile(files[0]);
      return;
    }
    setProducts((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className={styles.addProducts}>
        <h2 className='pageTitle'>상품 추가</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {file && (
            <img
              className={styles.image}
              src={URL.createObjectURL(file)}
              alt='상품 이미지'
            />
          )}
          <div className={styles.required}>
            <label className={styles.title} htmlFor='image'>
              이미지
            </label>
            <input
              onChange={handleCahnge}
              type='file'
              name='image'
              id='image'
              required
            />
          </div>
          <div className={styles.required}>
            <label className={styles.title} htmlFor='name'>
              상품 이름
            </label>
            <input
              onChange={handleCahnge}
              type='text'
              name='name'
              id='name'
              required
            />
          </div>
          <div>
            <label className={styles.title} htmlFor='desc'>
              상품 설명
            </label>
            <input onChange={handleCahnge} type='text' name='desc' id='desc' />
          </div>
          <div className={styles.required}>
            <label className={styles.title} htmlFor='price'>
              가격
            </label>
            <input
              onChange={handleCahnge}
              type='number'
              name='price'
              id='price'
              required
            />
          </div>
          <div>
            <label className={styles.title} htmlFor='options'>
              옵션
            </label>
            <input
              onChange={handleCahnge}
              type='text'
              name='options'
              id='options'
            />
          </div>
          <div className={styles.required}>
            <p className={styles.title}>카테고리</p>
            {categories.map((category) => (
              <div className={styles.radioBox} key={category}>
                <input
                  onChange={handleCahnge}
                  type='radio'
                  name='category'
                  id={category}
                  value={category}
                  required
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
          <Button>상품 등록</Button>
        </form>
      </div>
    </>
  );
}
