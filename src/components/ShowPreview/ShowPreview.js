// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ShowPreview.module.css';

export default function ShowPreview({ id, name, image, summary }) {
  return (
    <div className={`${styles.container} t-preview`}>
      <div>
        <Link className="t-link" to={`/shows/${id}`}>
          {name}
        </Link>
        {image ? <img src={image} alt={name} /> : null}
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
}