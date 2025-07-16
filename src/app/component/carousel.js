'use client';
import Image from 'next/image';

export default function Carousel() {
  return (
    <>
      <div className="bg-light p-3 rounded-5 shadow-sm position-relative border border-gray">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators custom-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner rounded-4">
            <div className="carousel-item active">
              <Image
                src="/images/slider111.png"
                alt="Slide 1"
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/slider222.png"
                alt="Slide 2"
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/images/slider333.png"
                alt="Slide 3"
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev custom-control"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#00ffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow-icon"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="carousel-control-next custom-control"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#00ffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow-icon"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .carousel-inner {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 */
          overflow: hidden;
        }
        .carousel-item {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          z-index: 0;
        }

        .carousel-item.active {
          opacity: 1;
          transform: translateY(0);
          z-index: 1;
          animation: fadeFloatUp 0.6s ease forwards;
        }

        @keyframes fadeFloatUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ไข่ปลา (carousel indicators) */
        .custom-indicators button {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.4);
          border: 2px solid #fff;
          transition: background-color 0.3s ease;
          margin: 0 6px;
          cursor: pointer;
        }
        .custom-indicators button.active {
          background-color: #007bff;
          border-color: #007bff;
        }

        /* ลูกศรควบคุมแบบกลม */
        .custom-control {
          width: 48px;
          height: 48px;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px 3px rgba(0, 255, 255, 0.7);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          position: absolute;
          z-index: 10;
        }
        .custom-control:hover {
          background-color: #00ffff;
          box-shadow: 0 0 25px 6px rgba(0, 255, 255, 1);
        }
        .carousel-control-prev.custom-control {
          left: 10px;
        }
        .carousel-control-next.custom-control {
          right: 10px;
        }

        /* svg ลูกศร */
        .arrow-icon {
          stroke: #00ffff;
          filter: drop-shadow(0 0 4px #00ffff);
        }
      `}</style>
    </>
  );
}
