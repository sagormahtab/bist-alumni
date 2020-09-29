import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../../data/photos";

const OurGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <section id="page-title-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <div class="page-title-content">
                <h1 class="h2">Our Gallery</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery-area" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="section-title">
                <h2>Featured Photos</h2>
              </div>
            </div>
          </div>

          <div class="gallery-content-wrapper">
            <div class="row">
              <div class="col-lg-12">
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={photos.map((x) => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title,
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurGallery;
