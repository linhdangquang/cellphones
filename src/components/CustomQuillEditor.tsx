import React from 'react'
import ReactQuill from 'react-quill'

interface Props {
  theme?: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomQuillEditor = ({value, onChange, theme}: Props) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
  }
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  return (
    <ReactQuill theme={`${theme || 'snow'}`} value={value} onChange={onChange} modules={modules} formats={formats} />
    
  )
}

export default CustomQuillEditor