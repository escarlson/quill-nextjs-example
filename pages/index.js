import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import dynamic from 'next/dynamic';


const inter = Inter({ subsets: ['latin'] })
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
  * Quill editor formats
  * See https://quilljs.com/docs/formats/
  */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

export default function Home() {
  const [value, setValue] = useState('');

  let storedValue = '';
  function saveValue() {
    storedValue = value;
    alert("Saved!");
  }
  function retrieveValue() {
    alert(storedValue);
  }
  return (
    <>
    <div>
    <QuillNoSSRWrapper theme="snow" value={value} onChange={setValue} formats={formats} modules={modules} />
    <button onClick={saveValue} className='btn btn-primary mt-2'>Save</button>
    <button onClick={retrieveValue} className='ms-2 mt-2 btn btn-primary'>Retrieve</button>
    </div></>
  );
}

