import React, { useState } from 'react';
import { addProducts } from '../../api/firebase';
import { imageUploader } from '../../api/imageUploader';
import Button from '../../ui/button/Button';
import styles from './Admin.module.css';

export default function Admin() {
  const [product, setProducts] = useState({});
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    imageUploader(file).then((url) =>
      addProducts({
        ...product,
        price: parseInt(product.price, 10),
        createdAt: new Date(),
        lastUpdate: new Date(),
        image: url,
      })
    );
    setProducts({});
    setFile();
    e.target.reset();
  };
  const handleCahnge = (e) => {
    const { id, value, files } = e.target;
    if (id === 'image') {
      setFile(files[0]);
      return;
    }
    setProducts((prev) => ({ ...prev, [id]: value }));
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
            <label htmlFor='image'>이미지</label>
            <input onChange={handleCahnge} type='file' id='image' required />
          </div>
          <div className={styles.required}>
            <label htmlFor='name'>상품 이름</label>
            <input onChange={handleCahnge} type='text' id='name' required />
          </div>
          <div>
            <label htmlFor='desc'>상품 설명</label>
            <input onChange={handleCahnge} type='text' id='desc' />
          </div>
          <div className={styles.required}>
            <label htmlFor='price'>가격</label>
            <input onChange={handleCahnge} type='number' id='price' required />
          </div>
          <div>
            <label htmlFor='options'>옵션</label>
            <input onChange={handleCahnge} type='text' id='options' />
          </div>
          <Button>상품 등록</Button>
        </form>
      </div>
    </>
  );
}
