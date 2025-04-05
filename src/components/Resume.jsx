import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../styles/Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scale = width > 1000 ? 1.33 : width > 768 ? 1.0 : 0.6;
  return (
    <div className="resume-container">
      <Document file="/resume.pdf" >
        <Page pageNumber={1} scale={scale} />
      </Document>
      <a className="download-btn" href="/resume.pdf" download>
        Download Resume
      </a>
    </div>
  );
}
