import React from 'react'

function Footer() {
  return (
    <>
     <section id="footer">
        <div className="footer__wrapper">
          <div className="footer__left">
            <span className="footer__title">DEVELOPED BY</span>
            <h4 className="footer__link--wrapper">
              <a
                className="footer__link link__hover--effect link__hover-effect--white"
                href="https://www.fntastic.com/"
                target="_blank"
              >
                FNTASTIC
              </a>
            </h4>
          </div>
          <div className="footer__right">
            <span className="footer__title">PUBLISHED BY</span>
            <span className="footer__publisher">MYTONA FNTASTIC</span>
          </div>
        </div>
        <div className="media__link">
          <a
            className="media-kit__link"
            href="https://drive.google.com/drive/folders/1j5NQh9Max1ongVX_3B4ZRGfNQlKhB_V2"
            target="_blank"
          >
            MEDIA KIT
          </a>
        </div>
      </section>
    </>
  )
}

export default Footer