import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import clsx from 'clsx'
import constants from '@/constants'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import Preloader from '@/components/common/Preloader'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const Section = lazy(() => import('@/components/layout/Section'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/buttons/PrimaryButton'))
const DownloadLineIcon = lazy(() => import('remixicon-react/DownloadLineIcon'))

export default function Resume(): React.JSX.Element {
  const { animationClass } = useFadeInMounted()
  const [pdfUrl, setPdfUrl] = useState<string>('')
  const [width, setWidth] = useState<number>(400)
  const [loading, setLoading] = useState<boolean>(true) // Track loading state

  useEffect(() => {
    setPdfUrl(constants.files.resume)
    setWidth(window.innerWidth)
  }, [])

  const handleLoadSuccess = () => {
    setLoading(false)  // Set loading to false when PDF is fully loaded
  }

  return (
    <div className={clsx(animationClass)}>
      <Suspense fallback={<Preloader />}>
        <Section className="h-full [&>*]:animate-fade-in">
          <div className="flex justify-center">
            <div style={{ minHeight: loading ? '500px' : 'auto', position: 'relative' }}>
              {loading && <Preloader />}
              <Document
                file={pdfUrl}
                onLoadSuccess={handleLoadSuccess}  // Handle load success
                className="d-flex justify-content-center"
              >
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </div>
          </div>
          <a className="flex justify-center" href={pdfUrl} target="_blank" rel="noopener noreferrer">
            <PrimaryButton className="my-8" icon={<DownloadLineIcon size={20} />} inverted>
              Download Resume
            </PrimaryButton>
          </a>
        </Section>
      </Suspense>
    </div>
  )
}
