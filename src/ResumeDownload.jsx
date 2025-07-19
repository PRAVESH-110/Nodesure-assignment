import React, { useState, useEffect } from 'react';

const RESUME_URL = '/assets/pdnew.pdf';
const LOCALSTORAGE_KEY = 'resumeDownloadTimestamp';
const VALIDITY_HOURS = 24;

const ResumeDownload = () => {
  const [canDownload, setCanDownload] = useState(false);
  const [expiresAt, setExpiresAt] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ts = localStorage.getItem(LOCALSTORAGE_KEY);
    if (ts) {
      const expires = new Date(parseInt(ts, 10) + VALIDITY_HOURS * 60 * 60 * 1000);
      if (Date.now() < expires.getTime()) {
        setCanDownload(true);
        setExpiresAt(expires);
      } else {
        localStorage.removeItem(LOCALSTORAGE_KEY);
      }
    }
  }, []);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      const now = Date.now();
      localStorage.setItem(LOCALSTORAGE_KEY, now.toString());
      setCanDownload(true);
      setExpiresAt(new Date(now + VALIDITY_HOURS * 60 * 60 * 1000));
      setLoading(false);
      alert('Demo: Payment successful! Download link is now available for 24 hours.');
    }, 1200); // 1.2 second delay to simulate payment
  };

  return (
    <section className="ftco-section" id="resume-download-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-8 heading-section text-center" data-aos="fade-up">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Download My Resume</h2>
            <p>To download my resume, please complete the demo payment below. The download link will be valid for 24 hours after payment.</p>
            <div className="alert alert-info" style={{ maxWidth: 500, margin: '0 auto', fontSize: '0.95em' }}>
              <strong>Demo Payment:</strong><br />
              This is a simulated payment for demo purposes only.<br />
              No real money will be charged. Click the button below to simulate a successful payment and unlock the download link for 24 hours.
            </div>
            {!canDownload ? (
              <button
                className="btn btn-primary py-3 px-4 mt-4"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Pay & Download Resume'}
              </button>
            ) : (
              <div className="mt-4">
                <a
                  href={RESUME_URL}
                  download
                  className="btn btn-success py-3 px-4"
                >
                  Download Resume
                </a>
                {expiresAt && (
                  <p className="mt-2 text-muted" style={{ fontSize: '0.9em' }}>
                    Link valid until: {expiresAt.toLocaleString()}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload; 