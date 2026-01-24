import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./certificates.css";
import Image from "next/image";

const certificates = [
  {
    src: "/certificates/NacarioSpencer-CProgrammingIICertification.png",
    alt: "C Programming II Certification",
    width: 1080,
    height: 810,
  },
  {
    src: "/certificates/SQL-Completion-Certificate-CodeChum.png",
    alt: "SQL CodeChum",
    width: 1080,
    height: 810,
  },
  {
    src: "/certificates/Nacario-html-Sololearn.png",
    alt: "HTML Sololearn",
    width: 1080,
    height: 810,
  },
  {
    src: "/certificates/Nacario-Javascript-Sololearn.png",
    alt: "JavaScript Sololearn",
    width: 1080,
    height: 810,
  },
  {
    src: "/certificates/Spencer Nacario - Data Visualization.png",
    alt: "Data Visualization",
    width: 1080,
    height: 810,
  },
  {
    src: "/certificates/AWS_Academy_Graduate___Cloud_Architecting___Training_Badge_Badge20251220-33-id2foh.png",
    alt: "AWS Cloud Architecting Badge",
    width: 1080,
    height: 810,
  },
  {
    src: "/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251220-32-h30t2a.png",
    alt: "AWS Cloud Foundations Badge",
    width: 1080,
    height: 810,
  },
];

const Certificates = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const certificatesPerPage = 6;
  const pageCount = Math.ceil(certificates.length / certificatesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pageCount);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pageCount) % pageCount);
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const displayedCertificates = certificates.slice(
    currentPage * certificatesPerPage,
    (currentPage + 1) * certificatesPerPage
  );

  // Calculate how many "Coming Soon" placeholders we need
  const remainingSlots = certificatesPerPage - displayedCertificates.length;
  const comingSoonSlots = Array(remainingSlots).fill(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextPage(),
    onSwipedRight: () => handlePrevPage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <section className="certificates-section">
      <div className="certificates-container" {...handlers}>
        <div className="certificates-header">
          <p className="certificates-subtitle">RECOGNITION & GROWTH</p>
          <h2 className="certificates-title">My Certificates</h2>
        </div>
        <div className="certificates-grid">
          {displayedCertificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                className="certificate-image"
              />
            </div>
          ))}
          {comingSoonSlots.map((_, index) => (
            <div key={`coming-soon-${index}`} className="certificate-card coming-soon">
              <div className="coming-soon-content">
                <span className="coming-soon-icon">📜</span>
                <span className="coming-soon-text">COMING SOON</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-dots">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${currentPage === index ? "active" : ""}`}
              onClick={() => handlePageClick(index)}
              disabled={certificates.length <= 6}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;