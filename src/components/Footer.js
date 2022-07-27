import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-basic">
            <footer>
              <div className="social">
                <a href="https://www.instagram.com">
                  <i className="icon ion-social-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/yarias-magana/">
                  <i className="icon ion-social-linkedin" />
                </a>
                <a href="https://www.twitter.com">
                  <i className="icon ion-social-twitter" />
                </a>
                <a href="https://www.facebook.com">
                  <i className="icon ion-social-facebook" />
                </a>
              </div>
              <p className="copyright">ECHOS © 2022</p>
            </footer>
          </div>
        );
    }
}

export default Footer;