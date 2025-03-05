import React, { lazy, useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useFadeInMounted from '@/hooks/useFadeInMounted';
import clsx from 'clsx';
import constants from '@/constants';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Section = lazy(() => import('@/components/layout/Section'));
const PrimaryButton = lazy(() => import('@/components/common/reusable/buttons/PrimaryButton'));
const DownloadLineIcon = lazy(() => import('remixicon-react/DownloadLineIcon'));

export default function Resume(): React.JSX.Element {
  const { animationClass } = useFadeInMounted();
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [width, setWidth] = useState<number>(400);

  useEffect(() => {
    setPdfUrl(constants.files.resume);
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={clsx(animationClass)}>
      <Section className='[&>*]:animate-fade-in'>
        <div className='h-full'>
          <div className='flex justify-center'>
            <Document file={pdfUrl} className='d-flex justify-content-center'>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
          <a className='flex justify-center' href={pdfUrl} target='_blank'>
            <PrimaryButton className='my-8' icon={<DownloadLineIcon size={20} />} inverted>
              Download Resume
            </PrimaryButton>
          </a>
        </div>
      </Section>
    </div>
  );
}
